import { useEffect, useRef, useState } from 'react'

// Quick Estimate worker (estimate-api/). Without these (see .env.*) the forms fall back to email.
const API = import.meta.env.VITE_ESTIMATE_API
const SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY
export const apiEnabled = Boolean(API && SITE_KEY)

export async function post(path, data) {
  const res = await fetch(`${API}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    signal: AbortSignal.timeout(90_000),
  }).catch((err) => {
    throw new Error(err.name === 'TimeoutError' ? 'The request took too long. Please try again.' : 'Could not reach the server. Please try again.')
  })
  const out = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(out.error || 'Something went wrong. Please try again.')
  return out
}

let turnstileScript
function loadTurnstile() {
  turnstileScript ??= new Promise((resolve, reject) => {
    window.onTurnstileLoad = () => resolve(window.turnstile)
    const s = document.createElement('script')
    s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=onTurnstileLoad'
    s.async = true
    s.onerror = reject
    document.head.appendChild(s)
  })
  return turnstileScript
}

// Renders a Turnstile widget into `ref` once it scrolls near the viewport,
// so visitors who never reach a form never load Cloudflare's script.
export function useTurnstile(action) {
  const ref = useRef(null)
  const widget = useRef(null)
  const [token, setToken] = useState('')

  useEffect(() => {
    const el = ref.current
    if (!apiEnabled || !el) return
    let cancelled = false
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        loadTurnstile().then((turnstile) => {
          if (cancelled || widget.current !== null) return
          widget.current = turnstile.render(el, {
            sitekey: SITE_KEY,
            action,
            theme: 'dark',
            callback: setToken,
            'expired-callback': () => setToken(''),
            'error-callback': () => setToken(''),
          })
        }, () => {})
      },
      { rootMargin: '600px 0px' },
    )
    observer.observe(el)
    return () => {
      cancelled = true
      observer.disconnect()
    }
  }, [action])

  // Tokens are single-use, so get a fresh one after every submit.
  const reset = () => {
    setToken('')
    if (widget.current !== null) window.turnstile.reset(widget.current)
  }

  return { ref, token, reset }
}
