import { useEffect, useState } from 'react'
import { API } from '../lib/api'
import { countable } from '../lib/analytics'
import './Footer.css'

// Visits to iglin.dev since midnight (New York time), from the estimate-api worker.
// A browser session counts once; bots, localhost and ?notrack=1 browsers only read the number.
function useVisitsToday() {
  const [count, setCount] = useState(null)
  useEffect(() => {
    if (!API) return
    let counted = true
    try {
      counted = sessionStorage.getItem('iglin_visit') === '1'
    } catch { /* storage blocked: just read */ }
    const method = countable && !counted ? 'POST' : 'GET'
    fetch(`${API}/visits`, { method })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (typeof data?.count !== 'number') return
        if (method === 'POST') {
          try { sessionStorage.setItem('iglin_visit', '1') } catch { /* ignore */ }
        }
        setCount(data.count)
      })
      .catch(() => {})
  }, [])
  return count
}

// Counts up from zero once the number arrives.
function useCountUp(target, ms = 900) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (target == null) return
    const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : ms
    let frame
    const start = performance.now()
    const tick = (t) => {
      const p = duration ? Math.min(1, (t - start) / duration) : 1
      setValue(Math.round(target * (1 - (1 - p) ** 3)))
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, ms])
  return value
}

export default function Footer({ home = '' }) {
  const visits = useVisitsToday()
  const shown = useCountUp(visits)
  return (
    <footer className="footer">
      <p>
        Designed & Built by{' '}
        <a href={`${home}#contact`}>Roman Iglin</a>
      </p>
      <p className="footer__copy">
        © {new Date().getFullYear()} iglin.dev — All rights reserved.
      </p>
      {visits != null && (
        <span className="footer__visits" aria-hidden="true">
          {String(shown).padStart(3, '0')}
        </span>
      )}
    </footer>
  )
}
