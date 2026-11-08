import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroArt from '../components/HeroArt'
import { CaseStudy, Lightbox } from '../portfolio/CaseStudy'
import { projects } from '../portfolio/projects'
import { track } from '../lib/analytics'
import { findPackage, formatPrice } from './packages'
import { findNichePage, nichePages } from './pages'
import '../components/Hero.css'
import '../components/Estimate.css'
import '../components/Reviews.css'
import './Services.css'
import './NichePage.css'

const money = formatPrice

// Turns [label](url) in page copy into links.
function rich(text) {
  const parts = text.split(/\[([^\]]+)\]\(([^)]+)\)/)
  return parts.map((part, i) => {
    if (i % 3 === 1) return <a key={i} href={parts[i + 1]}>{part}</a>
    return i % 3 === 2 ? null : part
  })
}

function Offer({ offer }) {
  if (offer.kind === 'package') {
    const { service, pkg } = findPackage(offer.service, offer.package)
    return (
      <div className="np-offer">
        <div>
          <p className="svc-order__kicker">Fixed-price package</p>
          <h3 className="svc-order__name">{pkg.name}</h3>
          <p className="svc-order__service">{service.title} · {pkg.tier} · {pkg.days} day{pkg.days === 1 ? '' : 's'} delivery</p>
          <p className="np-offer__text">{pkg.summary}</p>
        </div>
        <div className="np-offer__cta">
          <p className="svc-order__price">{money(pkg.price)}</p>
          <a className="est-btn" href={`/services/?service=${service.id}&package=${pkg.id}#order`}>Order this package →</a>
          <a className="np-offer__alt" href="/#estimate">Need something else? Get a quick estimate</a>
        </div>
      </div>
    )
  }
  return (
    <div className="np-offer">
      <div>
        <p className="svc-order__kicker">Pricing</p>
        <h3 className="svc-order__name">{offer.title}</h3>
        <p className="np-offer__text">{offer.text}</p>
      </div>
      <div className="np-offer__cta">
        <a className="est-btn" href="/#estimate" onClick={() => track('np_cta', { cta: 'estimate' })}>Get a quick estimate →</a>
        <a className="np-offer__alt" href="/#contact">or send me a message</a>
      </div>
    </div>
  )
}

export default function NichePage({ slug }) {
  const page = findNichePage(slug)
  const [openShot, setOpenShot] = useState(null)
  const project = projects.find((p) => p.id === page.caseStudy.projectId)
  const related = page.related.map(findNichePage).filter(Boolean)
  const others = related.length ? related : nichePages.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      <Header home="/" />
      <main>
        <section className="svc-hero np-hero">
          <HeroArt />
          <nav className="np-crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a> <span>/</span> <a href="/services/">Services</a> <span>/</span> {page.eyebrow}
          </nav>
          <p className="hero__greeting">&bull; {page.eyebrow}</p>
          <h1 className="svc-hero__title np-hero__title">{page.h1}</h1>
          <p className="svc-hero__desc">{page.lead}</p>
          <div className="np-hero__actions">
            <a className="est-btn" href="#pricing">See pricing</a>
            <a className="est-btn est-btn--ghost" href="#case">See the real project ↓</a>
          </div>
          <ul className="np-stats">
            {page.highlights.map((h) => (
              <li key={h.label}><strong>{h.value}</strong><span>{h.label}</span></li>
            ))}
          </ul>
        </section>

        <section className="section np-section">
          <h2 className="section-title">Sound familiar?</h2>
          <ul className="np-problems">
            {page.problems.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </section>

        <section className="np-band">
          <div className="section np-section">
            <h2 className="section-title">How I do it</h2>
            <ol className="np-steps">
              {page.steps.map((s, i) => (
                <li key={s.title}>
                  <span className="np-steps__num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="case" className="section np-section">
          <h2 className="section-title">A real project</h2>
          <p className="np-intro">{page.caseStudy.intro}</p>
          {project && <CaseStudy project={project} index={0} onOpen={setOpenShot} />}
        </section>

        {page.review && (
          <section className="section np-section np-section--tight">
            <figure className="rev__card rev__card--featured">
              <span className="rev__stars" aria-label="Rated 5.0 out of 5">★★★★★</span>
              <blockquote className="rev__quote"><p>{page.review.text}</p></blockquote>
              <figcaption className="rev__meta">
                <span className="rev__author">
                  <strong>{page.review.author}</strong>
                  <span>{page.review.role}</span>
                </span>
                <a className="rev__source" href={page.review.source.url} target="_blank" rel="noopener noreferrer">
                  {page.review.source.label}
                </a>
              </figcaption>
            </figure>
          </section>
        )}

        <section id="pricing" className="np-band">
          <div className="section np-section">
            <h2 className="section-title">Pricing</h2>
            <Offer offer={page.offer} />
          </div>
        </section>

        <section className="section np-section">
          <h2 className="section-title">Questions</h2>
          <div className="np-faq">
            {page.faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{rich(f.a)}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section np-section np-section--tight">
          <h2 className="np-more__title">More services</h2>
          <ul className="np-more">
            {others.map((p) => (
              <li key={p.slug}><a href={`/services/${p.slug}/`}>{p.service} →</a></li>
            ))}
            <li><a href="/services/">All fixed-price packages →</a></li>
            <li><a href="https://portfolio.iglin.dev">Full portfolio →</a></li>
          </ul>
        </section>
      </main>
      <Footer home="/" />
      <Lightbox shot={openShot} onClose={() => setOpenShot(null)} />
    </>
  )
}
