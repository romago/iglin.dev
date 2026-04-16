import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__inner">
        <p className="hero__greeting">Hi, my name is</p>
        <h1 className="hero__name">Roman Iglin.</h1>
        <h2 className="hero__title">Full-Stack Developer.</h2>
        <p className="hero__desc">
          14+ years of hands-on web development expertise. I build high-performance
          websites and web applications — from pixel-perfect frontends to robust
          server-side solutions. Based in Woodstock, GA.
        </p>
        <div className="hero__actions">
          <a href="#experience" className="hero__btn hero__btn--primary">
            View My Work
          </a>
          <a href="mailto:iglinro@gmail.com" className="hero__btn hero__btn--outline">
            Get In Touch
          </a>
        </div>
      </div>

      <div className="hero__scroll-indicator" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
