// Google Analytics 4 for iglin.dev and portfolio.iglin.dev (one property, see VITE_GA_ID in .env.production).
// Visits from the agency outreach emails carry utm_source=<agency>, so GA4 shows them per agency
// under Reports → Acquisition → Traffic acquisition (Session source / medium).
const GA_ID = import.meta.env.VITE_GA_ID
// Off during prerendering (no window), in dev, and on local previews of the production build.
const isLocal = typeof window !== 'undefined' && /^(localhost|127\.0\.0\.1|\[::1\])$|\.localhost$/.test(window.location.hostname)
const enabled = Boolean(GA_ID) && import.meta.env.PROD && typeof window !== 'undefined' && !isLocal

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
