import { useState, useEffect } from 'react'
import Logo from '../components/Logo'
import HeroArt from '../components/HeroArt'
import { projects, earlier } from './projects'
import { CaseStudy, Lightbox } from './CaseStudy'
import '../components/Header.css'
import '../components/Hero.css'
import '../components/Footer.css'
import './Portfolio.css'

const skills = [
  'WordPress', 'Elementor', 'Beaver Builder', 'ACF', 'Drupal', 'PHP', 'JavaScript', 'React', 'Chart.js',
  'HTML / CSS / SASS', 'MySQL / MariaDB', 'REST & SOAP APIs', 'Core Web Vitals', 'Technical SEO',
  'GA4 / GTM', 'Linux / Nginx', 'DigitalOcean', 'WP Engine', 'WP-CLI', 'Puppeteer',
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

export default function Portfolio() {
  const [openShot, setOpenShot] = useState(null)
  const yearsExperience = Math.max(0, new Date().getFullYear() - 2010)

  return (
    <>
      <Header />
      <main id="top">
        <section className="pf-hero">
          <HeroArt />
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
              <CaseStudy key={p.id} project={p} index={i} onOpen={setOpenShot} />
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
