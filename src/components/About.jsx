import './About.css'

export default function About() {
  return (
    <section id="about">
      <div className="section">
        <h2 className="section-title">
          <span className="num">01.</span> About Me
        </h2>
        <div className="about__grid">
          <div className="about__text">
            <p>
              I'm a full-stack web developer with <strong>14+ years of hands-on experience</strong> building
              websites and web applications from scratch, on CMS platforms, and brand-specific solutions.
              My core strengths are PHP, JavaScript, React, HTML, CSS, and SQL.
            </p>
            <p>
              Over the years I've worn many hats — frontend developer, backend engineer, DevOps, performance
              optimizer, and tech lead. I enjoy the full picture: from architecting server infrastructure to
              fine-tuning animations and Core Web Vitals scores.
            </p>
            <p>
              Currently working as a <strong>Freelance Web Developer</strong> for{' '}
              <strong>Signifyd</strong> (San Jose, CA), and always open to interesting projects and
              collaborations.
            </p>
            <ul className="about__highlights">
              <li>
                <span>→</span> WordPress, Drupal, Magento, AEM, Shopify
              </li>
              <li>
                <span>→</span> REST API integrations (G2, GreenHouse, Marketo)
              </li>
              <li>
                <span>→</span> DevOps: Linux / Apache / Nginx / MySQL server setup
              </li>
              <li>
                <span>→</span> Performance: boosted CWV from 30 → 90 points
              </li>
              <li>
                <span>→</span> GTM, GA4, Smartling localization
              </li>
            </ul>
          </div>

          <div className="about__card">
            <div className="about__avatar">
              <span>RI</span>
            </div>
            <div className="about__info">
              <div className="about__info-row">
                <span className="about__info-label">Location</span>
                <span>Woodstock, GA 30189</span>
              </div>
              <div className="about__info-row">
                <span className="about__info-label">Email</span>
                <a href="mailto:iglinro@gmail.com">iglinro@gmail.com</a>
              </div>
              <div className="about__info-row">
                <span className="about__info-label">Phone</span>
                <a href="tel:+17869332222">+1.786.933.2222</a>
              </div>
              <div className="about__info-row">
                <span className="about__info-label">Experience</span>
                <span>14+ years</span>
              </div>
              <div className="about__info-row">
                <span className="about__info-label">Status</span>
                <span className="about__status">Available for hire</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
