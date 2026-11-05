import './Footer.css'

export default function Footer({ home = '' }) {
  return (
    <footer className="footer">
      <p>
        Designed & Built by{' '}
        <a href={`${home}#contact`}>Roman Iglin</a>
      </p>
      <p className="footer__copy">
        © {new Date().getFullYear()} iglin.dev — All rights reserved.
      </p>
    </footer>
  )
}
