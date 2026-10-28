// Quick Estimate API for iglin.dev.
// POST /estimate  Turnstile-checked project description -> AI estimate + signed ticket; emails Roman.
// POST /send      ticket + visitor name and email -> emails Roman the project as a lead.
import Anthropic from '@anthropic-ai/sdk'
import { WorkerMailer } from 'worker-mailer'

const TICKET_TTL_MS = 2 * 60 * 60 * 1000
const PROJECT_TYPES = ['New website', 'Redesign', 'E-commerce', 'Web app', 'Speed & SEO', 'Integration / API', 'Support', 'Other']
const TIMELINES = ['ASAP', '1–2 months', 'Flexible']

const ESTIMATE_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['is_project', 'title', 'summary', 'complexity', 'items', 'timeline_weeks_min', 'timeline_weeks_max', 'stack', 'assumptions', 'questions'],
  properties: {
    is_project: { type: 'boolean', description: 'false if the text is not a real web project request (spam, jokes, unrelated questions)' },
    title: { type: 'string', description: 'Short project name, up to 8 words' },
    summary: { type: 'string', description: 'Two or three sentences: what will be built and the approach' },
    complexity: { type: 'string', enum: ['small', 'medium', 'large'] },
    items: {
      type: 'array',
      description: '3 to 10 work items that together cover the whole project, including QA and launch',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['task', 'hours_min', 'hours_max'],
        properties: {
          task: { type: 'string' },
          hours_min: { type: 'number' },
          hours_max: { type: 'number' },
        },
      },
    },
    timeline_weeks_min: { type: 'number' },
    timeline_weeks_max: { type: 'number' },
    stack: { type: 'array', items: { type: 'string' }, description: 'Recommended technologies, up to 6' },
    assumptions: { type: 'array', items: { type: 'string' }, description: 'Up to 4 assumptions the estimate depends on' },
    questions: { type: 'array', items: { type: 'string' }, description: 'Up to 3 questions that would make the estimate exact' },
  },
}

const SYSTEM_PROMPT = `You estimate web development projects for Roman Iglin, a senior freelance web developer with 15+ years of experience (since 2010).
Roman works alone, without an agency team. His strengths: WordPress (custom themes and plugins, ACF, Elementor, Beaver Builder), Drupal and Drupal Commerce, PHP, JavaScript, React, REST/SOAP API integrations (QuickBooks, Marketo, HubSpot, Google APIs, payment and CRM systems), Core Web Vitals and speed optimization, technical SEO, multilingual sites, server setup and migrations (Linux, Nginx, DigitalOcean, WP Engine).
Real reference points from his work: a full redesign of a small business WordPress site with landing pages took about 80-120 hours; a speed optimization of one landing page from Lighthouse 33 to 98 took about 15-25 hours; a custom QuickBooks Desktop integration took about 120-160 hours; migrating a 20-page site to a new design with scripts took about 60-90 hours.

Estimate the hours Roman himself would need, honestly and realistically, the way an experienced developer quotes a client:
- Split the work into 3-10 concrete items, always including project setup, QA / cross-browser testing and launch.
- Give each item a min-max range; the max should usually be 20-50% above the min. Do not pad wildly and do not lowball.
- Design work: if the client has no design, include a design item (Roman designs in Figma himself).
- Content writing, paid plugins, hosting and stock photos are not included unless asked; mention this in assumptions.
- If the description is vague, assume the most common version of such a project and say so in assumptions.
- Timeline assumes Roman works on it part-time alongside other clients, roughly 20 hours a week.
- Never give prices or money amounts; the server converts hours to cost.
Write every text field in the same language the client used. Return only JSON matching the schema.
If the text is not a genuine web project request, set is_project to false and leave items empty.`

export default {
  async fetch(request, env, ctx) {
    const origin = request.headers.get('Origin') || ''
    const allowed = env.ALLOWED_ORIGINS.split(',').map((o) => o.trim())
    const cors = allowed.includes(origin)
      ? { 'Access-Control-Allow-Origin': origin, 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Max-Age': '86400', Vary: 'Origin' }
      : null

    if (!cors) return new Response('Forbidden', { status: 403 })
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors })

    const json = (data, status = 200) => Response.json(data, { status, headers: cors })
    const { pathname } = new URL(request.url)
    if (request.method !== 'POST' || !['/estimate', '/send'].includes(pathname)) return json({ error: 'Not found' }, 404)

    const ip = request.headers.get('CF-Connecting-IP') || 'unknown'
    const { success } = await env.LIMITER.limit({ key: `${pathname}:${ip}` })
    if (!success) return json({ error: 'Too many requests. Please try again in a minute.' }, 429)

    let body
    try {
      body = await request.json()
    } catch {
      return json({ error: 'Invalid request.' }, 400)
    }
    // Honeypot: real visitors never see this field.
    if (body.company) return json({ error: 'Invalid request.' }, 400)

    try {
      if (pathname === '/estimate') return json(await handleEstimate(body, env, ctx, ip, request))
      return json(await handleSend(body, env))
    } catch (err) {
      if (err instanceof UserError) return json({ error: err.message }, 400)
      console.error(err)
      return json({ error: 'Something went wrong. Please try again or email roman@iglin.dev.' }, 500)
    }
  },
}

class UserError extends Error {}

async function handleEstimate(body, env, ctx, ip, request) {
  const input = {
    type: PROJECT_TYPES.includes(body.type) ? body.type : 'Other',
    timeline: TIMELINES.includes(body.timeline) ? body.timeline : 'Flexible',
    description: String(body.description || '').trim().slice(0, 3000),
    website: String(body.website || '').trim().slice(0, 200),
  }
  if (input.description.length < 40) throw new UserError('Please describe the project in a bit more detail (at least 40 characters).')

  const human = await verifyTurnstile(body.turnstileToken, ip, env)
  if (!human) throw new UserError('Bot check failed. Please reload the page and try again.')

  const raw = await askModel(input, env)
  const estimate = normalize(raw, Number(env.HOURLY_RATE))
  if (!estimate.is_project) {
    throw new UserError('This does not look like a web project description. Tell me what you want to build, change or fix.')
  }

  const country = request.cf?.country || ''
  ctx.waitUntil(
    sendMail(env, {
      subject: `Quick estimate: ${estimate.title} (${formatMoney(estimate.cost_min)}–${formatMoney(estimate.cost_max)})`,
      html: leadHtml({ input, estimate, note: `Someone ran a quick estimate on iglin.dev${country ? ` from ${country}` : ''}. They have not sent their contact details yet.` }),
    }).catch((e) => console.error('notify failed', e)),
  )

  const ticket = await signTicket({ input, estimate, exp: Date.now() + TICKET_TTL_MS }, env.TICKET_SECRET)
  return { estimate, ticket }
}

async function handleSend(body, env) {
  const name = String(body.name || '').trim().slice(0, 100)
  const email = String(body.email || '').trim().slice(0, 200)
  const message = String(body.message || '').trim().slice(0, 1000)
  if (name.length < 2) throw new UserError('Please enter your name.')
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) throw new UserError('Please enter a valid email.')

  const data = await verifyTicket(String(body.ticket || ''), env.TICKET_SECRET)
  if (!data) throw new UserError('This estimate has expired. Please run it again.')

  await sendMail(env, {
    subject: `New project from ${name}: ${data.estimate.title}`,
    replyTo: email,
    html: leadHtml({ ...data, contact: { name, email, message }, note: `${name} sent this project from the Quick Estimate on iglin.dev. Reply to this email to answer them.` }),
  })
  return { ok: true }
}

// ── Bot protection ──

async function verifyTurnstile(token, ip, env) {
  if (!token) return false
  const form = new FormData()
  form.append('secret', env.TURNSTILE_SECRET)
  form.append('response', token)
  form.append('remoteip', ip)
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body: form })
  const out = await res.json()
  return out.success === true
}

// The ticket carries the estimate signed with HMAC, so /send needs no second bot check and no storage.
async function hmacKey(secret) {
  return crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify'])
}

const b64url = (bytes) => btoa(String.fromCharCode(...bytes)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
const fromB64url = (s) => Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/')), (c) => c.charCodeAt(0))

async function signTicket(data, secret) {
  const payload = b64url(new TextEncoder().encode(JSON.stringify(data)))
  const sig = await crypto.subtle.sign('HMAC', await hmacKey(secret), new TextEncoder().encode(payload))
  return `${payload}.${b64url(new Uint8Array(sig))}`
}

async function verifyTicket(ticket, secret) {
  const [payload, sig] = ticket.split('.')
  if (!payload || !sig) return null
  try {
    const ok = await crypto.subtle.verify('HMAC', await hmacKey(secret), fromB64url(sig), new TextEncoder().encode(payload))
    if (!ok) return null
    const data = JSON.parse(new TextDecoder().decode(fromB64url(payload)))
    return data.exp > Date.now() ? data : null
  } catch {
    return null
  }
}

// ── AI ──

function userPrompt(input) {
  return [
    `Project type: ${input.type}`,
    `Desired timeline: ${input.timeline}`,
    input.website && `Current website: ${input.website}`,
    'Client description:',
    '"""',
    input.description,
    '"""',
  ].filter(Boolean).join('\n')
}

async function askModel(input, env) {
  if (env.AI_PROVIDER === 'claude') return askClaude(input, env)
  if (env.AI_PROVIDER === 'mock') return mockEstimate(input)
  try {
    return await askGemini(input, env)
  } catch (err) {
    console.warn('Gemini failed, using Workers AI:', err.message.slice(0, 200))
    return askWorkersAI(input, env)
  }
}

// Fallback that runs inside Cloudflare (free daily allowance, no extra key).
async function askWorkersAI(input, env) {
  const out = await env.AI.run(env.WORKERS_AI_MODEL, {
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      { role: 'user', content: userPrompt(input) },
    ],
    response_format: { type: 'json_schema', json_schema: ESTIMATE_SCHEMA },
    max_tokens: 4000,
  })
  return typeof out.response === 'string' ? JSON.parse(out.response) : out.response
}

// Free-tier Gemini models are often overloaded (503/429) or slow, so try each model in GEMINI_MODELS in turn.
async function askGemini(input, env) {
  const models = env.GEMINI_MODELS.split(',').map((m) => m.trim()).filter(Boolean)
  const body = JSON.stringify({
    systemInstruction: { parts: [{ text: `${SYSTEM_PROMPT}\n\nJSON schema:\n${JSON.stringify(ESTIMATE_SCHEMA)}` }] },
    contents: [{ role: 'user', parts: [{ text: userPrompt(input) }] }],
    generationConfig: { responseMimeType: 'application/json' },
  })
  let lastError
  for (const [i, model] of models.entries()) {
    if (i > 0) await new Promise((r) => setTimeout(r, 1000))
    try {
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': env.GEMINI_API_KEY },
        signal: AbortSignal.timeout(20_000),
        body,
      })
      if (!res.ok) {
        lastError = new Error(`Gemini ${model} ${res.status}: ${await res.text()}`)
        if ([404, 429, 500, 503].includes(res.status)) {
          console.warn(lastError.message.slice(0, 200))
          continue
        }
        throw lastError
      }
      const out = await res.json()
      const text = out.candidates?.[0]?.content?.parts?.map((p) => p.text || '').join('') || ''
      return JSON.parse(text)
    } catch (err) {
      if (err.name !== 'TimeoutError') throw err
      lastError = new Error(`Gemini ${model} timed out`)
      console.warn(lastError.message)
    }
  }
  throw lastError
}

async function askClaude(input, env) {
  const client = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY })
  const response = await client.beta.messages.create({
    model: env.CLAUDE_MODEL,
    max_tokens: 8000,
    betas: ['server-side-fallback-2026-07-01'],
    fallbacks: 'default',
    system: SYSTEM_PROMPT,
    output_config: { effort: 'medium', format: { type: 'json_schema', schema: ESTIMATE_SCHEMA } },
    messages: [{ role: 'user', content: userPrompt(input) }],
  })
  if (response.stop_reason === 'refusal') throw new UserError('This request could not be estimated. Please rephrase the description.')
  const text = response.content.find((b) => b.type === 'text')?.text || ''
  return JSON.parse(text)
}

// Local development only (AI_PROVIDER=mock in .dev.vars): a fixed answer without any API key.
function mockEstimate(input) {
  return {
    is_project: true,
    title: `${input.type} project`,
    summary: 'Mock estimate for local development. Set AI_PROVIDER to gemini or claude to get a real one.',
    complexity: 'medium',
    items: [
      { task: 'Discovery and project setup', hours_min: 4, hours_max: 6 },
      { task: 'Design in Figma', hours_min: 16, hours_max: 24 },
      { task: 'Theme and page development', hours_min: 40, hours_max: 56 },
      { task: 'QA, speed optimization and launch', hours_min: 8, hours_max: 12 },
    ],
    timeline_weeks_min: 4,
    timeline_weeks_max: 6,
    stack: ['WordPress', 'ACF', 'PHP', 'JavaScript'],
    assumptions: ['Client provides texts and photos'],
    questions: ['How many pages will the site have?'],
  }
}

// Clamp whatever the model returned and compute the price on the server.
function normalize(raw, rate) {
  const num = (v, min, max) => Math.min(max, Math.max(min, Number(v) || 0))
  const strs = (a, n) => (Array.isArray(a) ? a.map(String).filter(Boolean).slice(0, n) : [])
  const items = (Array.isArray(raw.items) ? raw.items : []).slice(0, 12).map((it) => {
    const hoursMin = Math.round(num(it.hours_min, 0.5, 400))
    return { task: String(it.task || '').slice(0, 160), hours_min: hoursMin, hours_max: Math.round(num(it.hours_max, hoursMin, 600)) }
  }).filter((it) => it.task)

  const hoursMin = items.reduce((s, it) => s + it.hours_min, 0)
  const hoursMax = items.reduce((s, it) => s + it.hours_max, 0)
  const round50 = (v) => Math.max(50, Math.round(v / 50) * 50)
  const weeksMin = Math.round(num(raw.timeline_weeks_min, 1, 52))

  return {
    is_project: raw.is_project !== false && items.length > 0,
    title: String(raw.title || 'Your project').slice(0, 80),
    summary: String(raw.summary || '').slice(0, 600),
    complexity: ['small', 'medium', 'large'].includes(raw.complexity) ? raw.complexity : 'medium',
    items,
    hours_min: hoursMin,
    hours_max: hoursMax,
    cost_min: round50(hoursMin * rate),
    cost_max: round50(hoursMax * rate),
    rate,
    timeline_weeks_min: weeksMin,
    timeline_weeks_max: Math.round(num(raw.timeline_weeks_max, weeksMin, 60)),
    stack: strs(raw.stack, 6),
    assumptions: strs(raw.assumptions, 4),
    questions: strs(raw.questions, 3),
  }
}

// ── Email (SMTP of the roman@iglin.dev mailbox) ──

async function sendMail(env, { subject, html, replyTo }) {
  if (!env.SMTP_PASSWORD) {
    console.log('SMTP_PASSWORD not set, email skipped:', subject)
    return
  }
  await WorkerMailer.send(
    {
      host: env.SMTP_HOST,
      port: Number(env.SMTP_PORT),
      secure: true,
      credentials: { username: env.SMTP_USER, password: env.SMTP_PASSWORD },
      authType: ['plain', 'login'],
    },
    {
      from: { name: 'Quick Estimate', email: env.SMTP_USER },
      to: env.NOTIFY_TO,
      ...(replyTo && { reply: replyTo }),
      subject,
      html,
    },
  )
}

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])
const formatMoney = (v) => `$${v.toLocaleString('en-US')}`

function leadHtml({ input, estimate: e, contact, note }) {
  const list = (arr) => (arr.length ? `<ul>${arr.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : '<p>—</p>')
  const rows = e.items.map((it) => `<tr><td style="padding:4px 12px 4px 0">${esc(it.task)}</td><td style="padding:4px 0;white-space:nowrap">${it.hours_min}–${it.hours_max} h</td></tr>`).join('')
  return `<div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.5;color:#111">
<p style="color:#555">${esc(note)}</p>
${contact ? `<h2 style="margin:16px 0 4px">Contact</h2><p><b>${esc(contact.name)}</b> &lt;<a href="mailto:${esc(contact.email)}">${esc(contact.email)}</a>&gt;</p>${contact.message ? `<p>${esc(contact.message)}</p>` : ''}` : ''}
<h2 style="margin:16px 0 4px">Request</h2>
<p><b>Type:</b> ${esc(input.type)} · <b>Timeline:</b> ${esc(input.timeline)}${input.website ? ` · <b>Site:</b> ${esc(input.website)}` : ''}</p>
<p style="white-space:pre-wrap;background:#f4f4f4;padding:12px;border-radius:6px">${esc(input.description)}</p>
<h2 style="margin:16px 0 4px">AI estimate: ${esc(e.title)}</h2>
<p><b>${formatMoney(e.cost_min)}–${formatMoney(e.cost_max)}</b> · ${e.hours_min}–${e.hours_max} h at $${e.rate}/h · ${e.timeline_weeks_min}–${e.timeline_weeks_max} weeks · ${esc(e.complexity)}</p>
<p>${esc(e.summary)}</p>
<table style="border-collapse:collapse">${rows}</table>
<h3 style="margin:16px 0 4px">Stack</h3><p>${esc(e.stack.join(', ') || '—')}</p>
<h3 style="margin:16px 0 4px">Assumptions</h3>${list(e.assumptions)}
<h3 style="margin:16px 0 4px">Open questions</h3>${list(e.questions)}
</div>`
}
