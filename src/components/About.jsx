import './About.css'

export default function About() {
  const startYear = 2010
  const yearsExperience = Math.max(0, new Date().getFullYear() - startYear)

  return (
    <section id="about">
      <div className="section">
        <h2 className="section-title">About Me</h2>
        <div className="about__grid">
          <div className="about__text">
            <p>
              I'm a full-stack web developer with <strong>{yearsExperience}+ years of hands-on experience</strong> building
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
        </div>
      </div>
    </section>
  )
}
