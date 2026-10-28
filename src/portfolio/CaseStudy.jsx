// Case study presentation shared by portfolio.iglin.dev and the main site's Projects section.
import { useEffect, useRef } from 'react'
import './CaseStudy.css'

function Browser({ shot, onOpen }) {
  return (
    <figure className={`pf-browser${shot.scroll ? ' pf-browser--scroll' : ''}`}>
      <div className="pf-browser__bar" aria-hidden="true">
        <span className="pf-browser__dots"><i /><i /><i /></span>
        <span className="pf-browser__url">{shot.domain}</span>
      </div>
      {shot.video ? (
        <div className="pf-browser__screen pf-browser__screen--video">
          <video
            src={shot.video}
            poster={shot.src}
            muted
            loop
            playsInline
            controls
            preload="none"
            aria-label={shot.alt}
          />
        </div>
      ) : (
        <button type="button" className="pf-browser__screen" onClick={() => onOpen(shot)} aria-label={`Open screenshot: ${shot.alt}`}>
          <img src={shot.src} alt={shot.alt} loading="lazy" decoding="async" />
        </button>
      )}
    </figure>
  )
}

function Phone({ shot, onOpen, className = '' }) {
  return (
    <button type="button" className={`pf-phone ${className}`} onClick={() => onOpen(shot)} aria-label={`Open screenshot: ${shot.alt}`}>
      <span className="pf-phone__notch" aria-hidden="true" />
      <span className="pf-phone__screen">
        <img src={shot.src} alt={shot.alt} loading="lazy" decoding="async" />
      </span>
    </button>
  )
}

function Visual({ visual, onOpen }) {
  if (visual.layout === 'phones') {
    return (
      <div className="pf-visual pf-visual--phones">
        {visual.phones.map((p, i) => (
          <Phone key={p.src} shot={p} onOpen={onOpen} className={i === 1 ? 'pf-phone--offset' : ''} />
        ))}
        <p className="pf-visual__hint">Hover to scroll · click to enlarge</p>
      </div>
    )
  }

  return (
    <div className="pf-visual pf-visual--browser">
      <Browser shot={visual.browser} onOpen={onOpen} />
      {visual.phone && <Phone shot={visual.phone} onOpen={onOpen} className="pf-phone--overlap" />}
      {visual.browser.scroll && <p className="pf-visual__hint">Hover to scroll · click to enlarge</p>}
    </div>
  )
}

export function CaseStudy({ project, index, onOpen }) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <article id={project.id} className="pf-project">
      <div className="pf-project__head">
        <span className="pf-project__number">{number}</span>
        <div>
          <p className="pf-project__meta">
            {project.client} <span>·</span> {project.period}
          </p>
          <h3 className="pf-project__title">{project.title}</h3>
          <p className="pf-project__tagline">{project.tagline}</p>
        </div>
      </div>

      <Visual visual={project.visual} onOpen={onOpen} />

      {project.metrics.length > 0 && (
        <ul className="pf-metrics">
          {project.metrics.map((m) => (
            <li key={m.label} className="pf-metric">
              <span className="pf-metric__value">{m.value}</span>
              <span className="pf-metric__label">{m.label}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="pf-project__body">
        <div className="pf-project__text">
          <p className="pf-project__role">{project.role}</p>
          <p className="pf-project__summary">{project.summary}</p>
          {project.url && (
            <a href={project.url} className="pf-project__link" target="_blank" rel="noopener noreferrer">
              Visit live site ↗
            </a>
          )}
        </div>
        <div>
          <h4 className="pf-project__subtitle">What I did</h4>
          <ul className="pf-project__bullets">
            {project.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <ul className="pf-tags" aria-label="Tech stack">
            {project.stack.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export function Lightbox({ shot, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (shot && !dialog.open) {
      dialog.showModal()
      dialog.scrollTop = 0
    }
    if (!shot && dialog.open) dialog.close()
  }, [shot])

  return (
    <dialog
      ref={dialogRef}
      className="pf-lightbox"
      onClose={onClose}
      onClick={(e) => e.target === dialogRef.current && onClose()}
    >
      {shot && (
        <>
          <button type="button" className="pf-lightbox__close" onClick={onClose} aria-label="Close">✕</button>
          <img src={shot.src} alt={shot.alt} />
        </>
      )}
    </dialog>
  )
}
