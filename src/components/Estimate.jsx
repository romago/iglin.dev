import { useEffect, useRef, useState } from 'react'
import './Estimate.css'

// Without these (see .env.*) the form falls back to a prefilled email.
const API = import.meta.env.VITE_ESTIMATE_API
const SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY

const types = ['New website', 'Redesign', 'E-commerce', 'Web app', 'Speed & SEO', 'Integration / API', 'Support', 'Other']
const timelines = ['ASAP', '1–2 months', 'Flexible']
const money = (v) => `$${v.toLocaleString('en-US')}`

async function post(path, data) {
  const res = await fetch(`${API}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  const out = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(out.error || 'Something went wrong. Please try again.')
  return out
}

function useTurnstile(enabled) {
  const ref = useRef(null)
  const widget = useRef(null)
  const [token, setToken] = useState('')

  useEffect(() => {
    if (!enabled) return
    const render = () => {
      if (widget.current !== null || !ref.current) return
      widget.current = window.turnstile.render(ref.current, {
        sitekey: SITE_KEY,
        action: 'estimate',
        theme: 'dark',
        callback: setToken,
        'expired-callback': () => setToken(''),
        'error-callback': () => setToken(''),
      })
    }
    if (window.turnstile) return render()
    window.onTurnstileLoad = render
    if (!document.querySelector('script[data-turnstile]')) {
      const s = document.createElement('script')
      s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=onTurnstileLoad'
      s.async = true
      s.dataset.turnstile = ''
      document.head.appendChild(s)
    }
  }, [enabled])

  // Tokens are single-use, so get a fresh one after every submit.
  const reset = () => {
    setToken('')
    if (widget.current !== null) window.turnstile.reset(widget.current)
  }

  return { ref, token, reset }
}

function Result({ estimate: e, ticket, onRestart }) {
  const [step, setStep] = useState('idle') // idle | form | sending | sent
  const [error, setError] = useState('')

  const send = async (ev) => {
    ev.preventDefault()
    const f = new FormData(ev.currentTarget)
    setStep('sending')
    setError('')
    try {
      await post('/send', { ticket, name: f.get('name'), email: f.get('email'), message: f.get('message'), company: f.get('company') })
      setStep('sent')
    } catch (err) {
      setError(err.message)
      setStep('form')
    }
  }

  return (
    <div className="est-result" aria-live="polite">
      <div className="est-result__head">
        <div>
          <p className="est-result__kicker">Quick estimate · {e.complexity} project</p>
          <h3 className="est-result__title">{e.title}</h3>
        </div>
        <span className="est-badge">✦ AI estimate</span>
      </div>

      <p className="est-result__summary">{e.summary}</p>

      <ul className="est-totals">
        <li className="est-total est-total--main">
          <span className="est-total__value">{money(e.cost_min)} – {money(e.cost_max)}</span>
          <span className="est-total__label">Estimated cost</span>
        </li>
        <li className="est-total">
          <span className="est-total__value">{e.hours_min}–{e.hours_max} h</span>
          <span className="est-total__label">Development time</span>
        </li>
        <li className="est-total">
          <span className="est-total__value">{e.timeline_weeks_min}–{e.timeline_weeks_max} wk</span>
          <span className="est-total__label">Timeline to launch</span>
        </li>
      </ul>

      <div className="est-result__grid">
        <div>
          <h4 className="est-result__subtitle">Breakdown</h4>
          <ul className="est-items">
            {e.items.map((it) => (
              <li key={it.task}>
                <span>{it.task}</span>
                <span className="est-items__hours">{it.hours_min}–{it.hours_max} h</span>
              </li>
            ))}
          </ul>
          {e.stack.length > 0 && (
            <ul className="pf-tags est-result__stack" aria-label="Suggested stack">
              {e.stack.map((t) => <li key={t}>{t}</li>)}
            </ul>
          )}
        </div>
        <div>
          {e.assumptions.length > 0 && (
            <>
              <h4 className="est-result__subtitle">Assumptions</h4>
              <ul className="est-notes">{e.assumptions.map((a) => <li key={a}>{a}</li>)}</ul>
            </>
          )}
          {e.questions.length > 0 && (
            <>
              <h4 className="est-result__subtitle">To make it exact</h4>
              <ul className="est-notes">{e.questions.map((q) => <li key={q}>{q}</li>)}</ul>
            </>
          )}
        </div>
      </div>

      <p className="est-disclaimer">
        This estimate was made by AI calibrated on my real projects and rate (${e.rate}/h), so it is
        usually very close to the final quote. I confirm the exact price after a short call.
      </p>

      {step === 'sent' ? (
        <div className="est-sent">
          <strong>Sent! ✓</strong> I have your project and will reply to your email soon.
        </div>
      ) : step === 'idle' ? (
        <div className="est-actions">
          <button type="button" className="est-btn" onClick={() => setStep('form')}>Send this project to Roman →</button>
          <button type="button" className="est-btn est-btn--ghost" onClick={onRestart}>New estimate</button>
        </div>
      ) : (
        <form className="est-contact" onSubmit={send}>
          <p className="est-contact__intro">Leave your name and email and I will get back to you about this project.</p>
          <div className="est-contact__fields">
            <label className="est-field">
              <span>Name</span>
              <input name="name" required minLength={2} maxLength={100} autoComplete="name" />
            </label>
            <label className="est-field">
              <span>Email</span>
              <input name="email" type="email" required maxLength={200} autoComplete="email" />
            </label>
          </div>
          <label className="est-field">
            <span>Anything to add? <em>optional</em></span>
            <textarea name="message" rows={2} maxLength={1000} />
          </label>
          <input name="company" className="est-hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          {error && <p className="est-error" role="alert">{error}</p>}
          <div className="est-actions">
            <button type="submit" className="est-btn" disabled={step === 'sending'}>
              {step === 'sending' ? 'Sending…' : 'Send to Roman'}
            </button>
            <button type="button" className="est-btn est-btn--ghost" onClick={() => setStep('idle')}>Cancel</button>
          </div>
        </form>
      )}
    </div>
  )
}

export default function Estimate() {
  const enabled = Boolean(API && SITE_KEY)
  const turnstile = useTurnstile(enabled)
  const [type, setType] = useState(types[0])
  const [timeline, setTimeline] = useState(timelines[1])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState(null)
  const formRef = useRef(null)

  const submit = async (ev) => {
    ev.preventDefault()
    const f = new FormData(ev.currentTarget)
    const description = String(f.get('description')).trim()
    const website = String(f.get('website')).trim()

    if (!enabled) {
      const body = `Project type: ${type}\nTimeline: ${timeline}\n${website ? `Website: ${website}\n` : ''}\n${description}`
      window.location.href = `mailto:roman@iglin.dev?subject=${encodeURIComponent(`Project estimate: ${type}`)}&body=${encodeURIComponent(body)}`
      return
    }
    if (!turnstile.token) {
      setError('Please wait for the bot check to finish.')
      return
    }

    setLoading(true)
    setError('')
    try {
      const out = await post('/estimate', { type, timeline, description, website, company: f.get('company'), turnstileToken: turnstile.token })
      setResult(out)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
      turnstile.reset()
    }
  }

  const restart = () => {
    setResult(null)
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="estimate" className="est">
      <div className="section">
        <h2 className="section-title">Quick Estimate</h2>
        <p className="est-intro">
          Describe your project and get a ballpark price, hours and timeline in about 20 seconds.
          <span className="est-intro__note">
            <span className="est-badge">✦ AI</span> The estimate is made by AI calibrated on my real
            projects and rate, so it comes out very close to the real quote.
          </span>
        </p>

        <form ref={formRef} className={`est-form${result ? ' est-form--done' : ''}`} onSubmit={submit} hidden={Boolean(result)}>
          <fieldset className="est-group">
            <legend>What do you need?</legend>
            <div className="est-chips">
              {types.map((t) => (
                <label key={t} className="est-chip">
                  <input type="radio" name="type" value={t} checked={type === t} onChange={() => setType(t)} />
                  <span>{t}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="est-field">
            <span>Describe the project</span>
            <textarea
              name="description"
              rows={6}
              required
              minLength={40}
              maxLength={3000}
              placeholder="For example: a WordPress site for a moving company with 10 pages, a quote form that goes to our CRM, online booking and Spanish version. We have a logo but no design."
            />
          </label>

          <div className="est-row">
            <label className="est-field">
              <span>Current website <em>optional</em></span>
              <input name="website" type="text" inputMode="url" maxLength={200} placeholder="example.com" />
            </label>
            <fieldset className="est-group">
              <legend>Timeline</legend>
              <div className="est-segment">
                {timelines.map((t) => (
                  <label key={t} className="est-chip">
                    <input type="radio" name="timeline" value={t} checked={timeline === t} onChange={() => setTimeline(t)} />
                    <span>{t}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          <input name="company" className="est-hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />

          <div className="est-submit">
            {enabled && <div ref={turnstile.ref} className="est-turnstile" />}
            <button type="submit" className="est-btn" disabled={loading}>
              {loading ? 'Estimating…' : enabled ? 'Get my estimate →' : 'Email this to Roman →'}
            </button>
          </div>
          {loading && <p className="est-loading">Reading your description and breaking it into tasks…</p>}
          {error && <p className="est-error" role="alert">{error}</p>}
        </form>

        {result && <Result estimate={result.estimate} ticket={result.ticket} onRestart={restart} />}
      </div>
    </section>
  )
}
