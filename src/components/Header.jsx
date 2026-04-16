import { useState, useEffect } from 'react'
import './Header.css'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = () => setMenuOpen(false)

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner">
        <a href="#hero" className="header__logo">
          iglin<span>.dev</span>
        </a>

        <nav className={`header__nav${menuOpen ? ' header__nav--open' : ''}`}>
          {navLinks.map(({ href, label }, i) => (
            <a key={href} href={href} className="header__link" onClick={handleNav}>
              <span className="header__link-num">0{i + 1}.</span> {label}
            </a>
          ))}
          <a
            href="mailto:iglinro@gmail.com"
            className="header__btn"
            onClick={handleNav}
          >
            Hire Me
          </a>
        </nav>

        <button
          className={`header__burger${menuOpen ? ' header__burger--open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
