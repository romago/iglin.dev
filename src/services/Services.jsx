import { useEffect, useState, useSyncExternalStore } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroArt from '../components/HeroArt'
import { apiEnabled, post, useTurnstile } from '../lib/api'
import { track } from '../lib/analytics'
import { findPackage, formatPrice, services } from './packages'
import { nichePages } from './pages'
import '../components/Hero.css'
import '../components/Estimate.css'
import './Services.css'

const money = formatPrice
const days = (n) => `${n} day${n === 1 ? '' : 's'}`
const revisions = (n) => (n ? `${n} revision${n === 1 ? '' : 's'}` : 'No revisions')

const defaultChoice = { serviceId: services[0].id, packageId: 'standard' }
const noSubscribe = () => () => {}

// ?service=speed&package=standard opens a package directly, so it can be linked from emails.
function choiceFromSearch(search) {
  const q = new URLSearchParams(search)
  const found = findPackage(q.get('service'), q.get('package'))
  if (found) return { serviceId: found.service.id, packageId: found.pkg.id }
  const service = services.find((s) => s.id === q.get('service'))
  return service ? { serviceId: service.id, packageId: 'standard' } : defaultChoice
}

function OrderForm({ service, pkg }) {
  const turnstile = useTurnstile('order')
  const [state, setState] = useState('idle') // idle | sending | sent
  const [error, setError] = useState('')

  const submit = async (ev) => {
    ev.preventDefault()
    const f = new FormData(ev.currentTarget)
    if (!apiEnabled) {
      const body = `Package: ${service.title} — ${pkg.tier}: ${pkg.name} (${money(pkg.price)})\nWebsite: ${f.get('website') || '—'}\n\n${f.get('details')}`
      window.location.href = `mailto:roman@iglin.dev?subject=${encodeURIComponent(`Package order: ${pkg.name}`)}&body=${encodeURIComponent(body)}`
      return
    }
    if (!turnstile.token) {
      setError('Please wait for the bot check to finish.')
      return
    }
    setState('sending')
    setError('')
    try {
      await post('/order', {
        service: service.id,
        package: pkg.id,
        name: f.get('name'),
        email: f.get('email'),
        website: f.get('website'),
        details: f.get('details'),
        company: f.get('company'),
        turnstileToken: turnstile.token,
      })
      setState('sent')
      track('generate_lead', { method: 'package_order', service: service.id, package: pkg.id, value: pkg.price, currency: 'USD' })
    } catch (err) {
      setError(err.message)
      setState('idle')
    } finally {
      turnstile.reset()
    }
  }

  if (state === 'sent') {
    return (
      <div className="svc-sent" role="status">
        <strong>Request sent! ✓</strong>
        <p>
          I have your request for <b>{pkg.name}</b> ({money(pkg.price)}). I will read your project details and reply
          by email within one business day with any questions and the next steps.
        </p>
      </div>
    )
  }

  return (
    <form className="svc-form" onSubmit={submit}>
      <div className="est-contact__fields">
        <label className="est-field">
          <span>Your name</span>
          <input name="name" required minLength={2} maxLength={100} autoComplete="name" />
        </label>
        <label className="est-field">
          <span>Email</span>
          <input name="email" type="email" required maxLength={200} autoComplete="email" />
        </label>
      </div>
      <label className="est-field">
        <span>Website <em>optional</em></span>
        <input name="website" type="text" inputMode="url" maxLength={200} placeholder="example.com" />
      </label>
      <label className="est-field">
        <span>About the project</span>
        <textarea
          name="details"
          rows={5}
          required
          minLength={20}
          maxLength={5000}
          placeholder="What is the site, what needs to be done, and any deadline or access details I should know about."
        />
      </label>
      <input name="company" className="est-hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="est-submit">
        {apiEnabled && <div ref={turnstile.ref} className="est-turnstile" />}
        <button type="submit" className="est-btn" disabled={state === 'sending'}>
          {state === 'sending' ? 'Sending…' : `Request ${pkg.tier} · ${money(pkg.price)} →`}
        </button>
      </div>
      {error && <p className="est-error" role="alert">{error}</p>}
      <p className="svc-form__note">
        No payment now. I review your request and reply by email to confirm the scope before any work starts.
      </p>
    </form>
  )
}

export default function Services() {
  // The prerendered HTML shows the default package (empty search on the server);
  // after hydration the URL's package shows until the visitor picks another one.
  const search = useSyncExternalStore(noSubscribe, () => window.location.search, () => '')
  const [picked, setChoice] = useState(null)
  const choice = picked ?? choiceFromSearch(search)
  const service = services.find((s) => s.id === choice.serviceId)
  const pkg = service.packages.find((p) => p.id === choice.packageId)

  // Keep the visitor's pick in the URL so it can be shared.
  useEffect(() => {
    if (!picked) return
    const url = new URL(window.location.href)
    url.searchParams.set('service', service.id)
    url.searchParams.set('package', pkg.id)
    window.history.replaceState(null, '', url)
  }, [picked, service.id, pkg.id])

  const pickService = (s) => {
    setChoice({ serviceId: s.id, packageId: 'standard' })
    track('select_service', { service: s.id })
  }

  const pickPackage = (sv, p) => {
    setChoice({ serviceId: sv.id, packageId: p.id })
    track('select_package', { service: sv.id, package: p.id })
    // On phones the cards stack, so bring the order form into view.
    if (window.matchMedia('(max-width: 900px)').matches) {
      document.getElementById('order')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <Header home="/" />
      <main>
        <section className="svc-hero">
          <HeroArt />
          <p className="hero__greeting">&bull; Fixed-price packages</p>
          <h1 className="svc-hero__title">
            Pick a package, <span>get it done.</span>
          </h1>
          <p className="svc-hero__desc">
            The four jobs I do most, with fixed prices and delivery times. Choose a package, tell me about the
            project, and I reply by email within one business day.
          </p>
        </section>

        <section className="section svc" aria-label="Packages">
          <div className="svc-tabs" role="tablist" aria-label="Services">
            {services.map((s) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={s.id === service.id}
                aria-controls={`panel-${s.id}`}
                className={`svc-tab${s.id === service.id ? ' svc-tab--active' : ''}`}
                onClick={() => pickService(s)}
              >
                <span className="svc-tab__name">{s.short}</span>
                <span className="svc-tab__from">
                  {s.packages[0].price === 0 ? `free ${s.packages[0].name.toLowerCase()}` : `from ${money(s.packages[0].price)}`}
                </span>
              </button>
            ))}
          </div>

          {/* Every service is in the HTML as a tab panel, so all packages are crawlable; only the active one shows. */}
          {services.map((sv) => (
            <div key={sv.id} id={`panel-${sv.id}`} role="tabpanel" aria-label={sv.title} hidden={sv.id !== service.id}>
              <div className="svc-intro">
                <h2 className="svc-intro__title">{sv.title}</h2>
                <p className="svc-intro__pitch">{sv.pitch}</p>
                <p className="svc-intro__proof"><span className="est-badge">Recent work</span> {sv.proof}</p>
              </div>

              <div className="svc-packages" role="radiogroup" aria-label={`${sv.short} packages`}>
                {sv.packages.map((p) => {
                  const active = sv.id === service.id && p.id === pkg.id
                  return (
                    <button
                      key={p.id}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      className={`svc-pkg${active ? ' svc-pkg--active' : ''}`}
                      onClick={() => pickPackage(sv, p)}
                    >
                      <span className="svc-pkg__head">
                        <span className="svc-pkg__tier">{p.tier}</span>
                        {p.id === 'standard' && <span className="svc-pkg__popular">Most popular</span>}
                      </span>
                      <span className="svc-pkg__name">{p.name}</span>
                      <span className="svc-pkg__price">{money(p.price)}</span>
                      <span className="svc-pkg__summary">{p.summary}</span>
                      <span className="svc-pkg__terms">
                        <span>⏱ {days(p.days)} delivery</span>
                        <span>↺ {revisions(p.revisions)}</span>
                      </span>
                      <ul className="svc-pkg__features">
                        {p.features.map((f) => <li key={f}>{f}</li>)}
                      </ul>
                      <span className="svc-pkg__select">{active ? 'Selected ✓' : `Choose ${p.tier}`}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          ))}

          <div className="svc-order" id="order">
            <div className="svc-order__summary">
              <p className="svc-order__kicker">Your package</p>
              <h2 className="svc-order__name">{pkg.name}</h2>
              <p className="svc-order__service">{service.title} · {pkg.tier}</p>
              <p className="svc-order__price">{money(pkg.price)}</p>
              <ul className="svc-order__terms">
                <li>{days(pkg.days)} delivery after I get access and materials</li>
                <li>{revisions(pkg.revisions)} included</li>
                <li>Fixed price for the scope above</li>
              </ul>
            </div>
            <OrderForm service={service} pkg={pkg} />
          </div>

          {nichePages.some((p) => !p.draft) && (
            <nav className="svc-niche" aria-label="Specialized services">
              <h2 className="svc-niche__title">Specialized services</h2>
              <ul>
                {nichePages.filter((p) => !p.draft).map((p) => (
                  <li key={p.slug}><a href={`/services/${p.slug}/`}>{p.service} →</a></li>
                ))}
              </ul>
            </nav>
          )}

          <p className="svc-other">
            Need something that is not on the list? <a href="/#estimate">Get a quick AI estimate</a> or{' '}
            <a href="/#contact">send me a message</a>.
          </p>
        </section>
      </main>
      <Footer home="/" />
    </>
  )
}
