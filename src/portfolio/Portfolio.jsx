import { useState, useEffect, useRef } from 'react'
import Logo from '../components/Logo'
import { projects, earlier } from './projects'
import '../components/Header.css'
import '../components/Hero.css'
import '../components/Footer.css'
import './Portfolio.css'

const skills = [
  'WordPress', 'Elementor', 'Beaver Builder', 'ACF', 'Drupal', 'PHP', 'JavaScript', 'React',
  'HTML / CSS / SASS', 'MySQL / MariaDB', 'REST & SOAP APIs', 'Core Web Vitals', 'Technical SEO',
  'GA4 / GTM', 'Linux / Nginx', 'WP-CLI', 'Puppeteer',
]

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner">
        <a href="#top" className="header__logo" aria-label="Back to top">
          <Logo />
        </a>
        <nav className="pf-header__nav">
          <a href="#work" className="header__link pf-header__link">Case studies</a>
          <a href="#earlier" className="header__link pf-header__link">Earlier work</a>
        </nav>
      </div>
    </header>
  )
}

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
      {shot.scroll && <figcaption className="pf-browser__hint">Hover to scroll · click to enlarge</figcaption>}
    </figure>
  )
}

function Phone({ shot, onOpen, className = '' }) {
  return (
    <button type="button" className={`pf-phone ${className}`} onClick={() => onOpen(shot)} aria-label={`Open screenshot: ${shot.alt}`}>
      <span className="pf-phone__notch" aria-hidden="true" />
      <img src={shot.src} alt={shot.alt} loading="lazy" decoding="async" />
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
      </div>
    )
  }

  return (
    <div className="pf-visual pf-visual--browser">
      <Browser shot={visual.browser} onOpen={onOpen} />
      {visual.phone && <Phone shot={visual.phone} onOpen={onOpen} className="pf-phone--overlap" />}
    </div>
  )
}

function Project({ project, index, onOpen }) {
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

function Lightbox({ shot, onClose }) {
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

export default function Portfolio() {
  const [openShot, setOpenShot] = useState(null)
  const yearsExperience = Math.max(0, new Date().getFullYear() - 2010)

  return (
    <>
      <Header />
      <main id="top">
        <section className="pf-hero">
          <p className="hero__greeting">&bull; Portfolio</p>
          <h1 className="pf-hero__title">
            Websites I&rsquo;ve built, redesigned <span>and made fast.</span>
          </h1>
          <p className="pf-hero__desc">
            Hi, I&rsquo;m Roman, a web developer with {yearsExperience}+ years of experience. Every project
            on this page is my own work for real clients: WordPress and Drupal development, redesigns,
            integrations, performance and technical SEO, with the measured results.
          </p>
          <ul className="pf-hero__stats">
            <li><strong>{yearsExperience}+</strong><span>years in web development</span></li>
            <li><strong>33 → 98</strong><span>best Lighthouse mobile gain</span></li>
            <li><strong>{projects.length}</strong><span>case studies below</span></li>
          </ul>
          <ul className="pf-tags pf-hero__skills" aria-label="Skills">
            {skills.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </section>

        <section id="work" className="section pf-work">
          <h2 className="section-title">Case Studies</h2>
          <nav className="pf-toc" aria-label="Projects">
            {projects.map((p, i) => (
              <a key={p.id} href={`#${p.id}`}>
                <span>{String(i + 1).padStart(2, '0')}</span> {p.title}
              </a>
            ))}
          </nav>
          <div className="pf-projects">
            {projects.map((p, i) => (
              <Project key={p.id} project={p} index={i} onOpen={setOpenShot} />
            ))}
          </div>
        </section>

        <section id="earlier" style={{ background: 'var(--bg-secondary)' }}>
          <div className="section">
            <h2 className="section-title">Earlier Work</h2>
            <div className="pf-earlier">
              {earlier.map((e) => (
                <article key={e.title} className="pf-earlier__card">
                  <div className="pf-earlier__head">
                    <h3>{e.title}</h3>
                    <span>{e.period}</span>
                  </div>
                  <p className="pf-earlier__role">{e.role}</p>
                  <p className="pf-earlier__text">{e.text}</p>
                  <ul className="pf-tags">
                    {e.stack.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>All projects shown are my own work. Screenshots of the live sites, {new Date().getFullYear()}.</p>
        <p className="footer__copy">© {new Date().getFullYear()} Web Developer Portfolio</p>
      </footer>

      <Lightbox shot={openShot} onClose={() => setOpenShot(null)} />
    </>
  )
}
