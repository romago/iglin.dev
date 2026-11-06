// Google Analytics 4 for iglin.dev and portfolio.iglin.dev (one property, see VITE_GA_ID in .env.production).
// Visits from the agency outreach emails carry utm_source=<agency>, so GA4 shows them per agency
// under Reports → Acquisition → Traffic acquisition (Session source / medium).
const GA_ID = import.meta.env.VITE_GA_ID
// Off during prerendering (no window), in dev, and on local previews of the production build.
const isLocal = typeof window !== 'undefined' && /^(localhost|127\.0\.0\.1|\[::1\])$|\.localhost$/.test(window.location.hostname)
// GA4 already drops known bots (IAB list). This also skips crawlers that run JavaScript, speed testers
// (Lighthouse, PageSpeed Insights, GTmetrix) and automated browsers (Puppeteer, Playwright, Selenium).
const isBot =
  typeof navigator !== 'undefined' &&
  (navigator.webdriver ||
    // "Cubot" is a phone brand, not a bot. No lookbehind here: Safari before 16.4 fails to parse it.
    /bot|crawl|spider|slurp|headless|lighthouse|pagespeed|gtmetrix|pingdom|phantomjs|selenium|puppeteer|playwright/i.test(
      navigator.userAgent.replace(/cubot/gi, ''),
    ))
// Own visits: open any page with ?notrack=1 once per browser to stop counting it (?notrack=0 undoes it).
// The cookie is set on .iglin.dev, so it covers iglin.dev and portfolio.iglin.dev together.
const OPT_OUT = 'iglin_notrack'
function optedOut() {
  if (typeof document === 'undefined') return false
  const flag = new URLSearchParams(window.location.search).get('notrack')
  const domain = /(^|\.)iglin\.dev$/.test(window.location.hostname) ? '; domain=.iglin.dev' : ''
  const attrs = `; path=/${domain}; SameSite=Lax; Secure`
  if (flag === '1') document.cookie = `${OPT_OUT}=1; max-age=315360000${attrs}`
  if (flag === '0') document.cookie = `${OPT_OUT}=; max-age=0${attrs}`
  return document.cookie.split('; ').includes(`${OPT_OUT}=1`)
}
const isOwnVisit = optedOut()
const enabled =
  Boolean(GA_ID) && import.meta.env.PROD && typeof window !== 'undefined' && !isLocal && !isBot && !isOwnVisit

if (enabled) {
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  // Content group splits the two sites in any GA4 report (Engagement → Pages and screens → Content group).
  window.gtag('config', GA_ID, { content_group: location.hostname.startsWith('portfolio.') ? 'portfolio' : 'main site' })
  const s = document.createElement('script')
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  s.async = true
  document.head.appendChild(s)
}

// Leads use GA4's recommended generate_lead event; `method` says which form it came from.
export function track(event, params = {}) {
  if (enabled) window.gtag('event', event, params)
}
