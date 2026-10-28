import HeroArt from './HeroArt'
import './Hero.css'

export default function Hero() {
  const startYear = 2010
  const yearsExperience = Math.max(0, new Date().getFullYear() - startYear)

  return (
    <section id="hero" className="hero">
      <HeroArt />
      <div className="hero__inner">
        <p className="hero__greeting">&bull; open to work</p>
        <h1 className="hero__name">Roman Iglin</h1>
        <h2 className="hero__title">Full Stack Developer</h2>
        <p className="hero__desc">
          {yearsExperience}+ years building websites and web apps end to end: custom WordPress and
          Drupal themes and plugins, React interfaces, PHP back ends, API integrations like
          QuickBooks and Marketo, and the servers they run on. I also make sites fast: one landing
          page went from 33 to 98 in Lighthouse. Based in Woodstock, GA.
        </p>
        <div className="hero__actions">
          <a href="#projects" className="hero__btn hero__btn--primary">
            View My Work
          </a>
          <a href="#estimate" className="hero__btn hero__btn--outline">
            Quick Estimate ✦
          </a>
        </div>
      </div>

      <div className="hero__scroll-indicator" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
