import { useState, useEffect } from 'react'
import Logo from './Logo'
import './Header.css'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#projects', label: 'Projects' },
  { href: '#estimate', label: 'Estimate' },
  { href: '/services/', label: 'Services', page: true },
  { href: '#contact', label: 'Contact' },
]

// `home` is '/' on pages other than the home page, so the section links lead back to it.
export default function Header({ home = '' }) {
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
        <a href={`${home}#hero`} className="header__logo" aria-label="Roman Iglin, home">
          <Logo />
        </a>

        <nav className={`header__nav${menuOpen ? ' header__nav--open' : ''}`}>
          {navLinks.map(({ href, label, page }) => (
            <a key={href} href={page ? href : `${home}${href}`} className="header__link" onClick={handleNav}>
              {label}
            </a>
          ))}
          <a
            href={`${home}#contact`}
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
