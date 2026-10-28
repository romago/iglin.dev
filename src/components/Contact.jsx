import { useState } from 'react'
import { apiEnabled, post, useTurnstile } from '../lib/api'
import './Estimate.css'
import './Contact.css'

const EMAIL = 'roman@iglin.dev'

const links = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/roman-iglin/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Previous Site',
    href: 'https://iglin.us',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/romago',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.05c-3.34.72-4.04-1.42-4.04-1.42-.55-1.4-1.33-1.77-1.33-1.77-1.09-.75.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
]

const mailIcon = (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    )

function CopyEmail() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }
  return (
    <button type="button" className="contact__link contact__copy" onClick={copy} aria-label={`Copy ${EMAIL}`}>
      <span className="contact__link-icon">{mailIcon}</span>
      <span>{EMAIL}</span>
      <span className="contact__copy-hint">{copied ? 'Copied ✓' : 'Copy'}</span>
    </button>
  )
}

function ContactForm() {
  const turnstile = useTurnstile('contact')
  const [state, setState] = useState('idle') // idle | sending | sent
  const [error, setError] = useState('')

  const submit = async (ev) => {
    ev.preventDefault()
    if (!turnstile.token) {
      setError('Please wait for the bot check to finish.')
      return
    }
    const f = new FormData(ev.currentTarget)
    setState('sending')
    setError('')
    try {
      await post('/contact', { name: f.get('name'), email: f.get('email'), message: f.get('message'), company: f.get('company'), turnstileToken: turnstile.token })
      setState('sent')
    } catch (err) {
      setError(err.message)
      setState('idle')
    } finally {
      turnstile.reset()
    }
  }

  if (state === 'sent') {
    return (
      <div className="est-sent">
        <strong>Sent! ✓</strong> Thanks for your message. I will reply to your email soon.
      </div>
    )
  }

  return (
    <form className="contact__form" onSubmit={submit}>
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
        <span>Message</span>
        <textarea name="message" rows={5} required minLength={10} maxLength={3000} placeholder="Tell me about your project, role or question." />
      </label>
      <input name="company" className="est-hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="est-submit">
        <div ref={turnstile.ref} className="est-turnstile" />
        <button type="submit" className="est-btn" disabled={state === 'sending'}>
          {state === 'sending' ? 'Sending…' : 'Send message →'}
        </button>
      </div>
      {error && <p className="est-error" role="alert">{error}</p>}
    </form>
  )
}

export default function Contact() {
  return (
    <section id="contact">
      <div className="section contact__wrap">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact__body">
          <div className="contact__text">
            <p>
              I'm currently open to freelance projects, full-time roles, and interesting
              collaborations. Whether you have a project in mind or just want to say hi —
              send me a message and I will reply by email.
            </p>
            {!apiEnabled && (
              <a href={`mailto:${EMAIL}`} className="contact__cta">
                Say Hello →
              </a>
            )}
          </div>
          {apiEnabled && <ContactForm />}
          <div className="contact__links">
            {links.map(({ label, href, icon }) => (
              <a key={label} href={href} className="contact__link" target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                <span className="contact__link-icon">{icon}</span>
                <span>{label}</span>
              </a>
            ))}
            <CopyEmail />
          </div>
        </div>
      </div>
    </section>
  )
}
