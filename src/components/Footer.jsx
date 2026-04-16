import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Designed & Built by{' '}
        <a href="mailto:iglinro@gmail.com">Roman Iglin</a>
      </p>
      <p className="footer__copy">
        © {new Date().getFullYear()} iglin.dev — All rights reserved.
      </p>
    </footer>
  )
}
