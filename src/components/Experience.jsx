import './Experience.css'

const jobs = [
  {
    title: 'Web Developer',
    type: 'Freelance',
    company: 'Signifyd',
    location: 'San Jose, CA',
    period: 'Apr 2021 — Present',
    bullets: [
      'Development of additional functions for the site and custom WordPress plugins.',
      'Data import via REST API integrations: G2, GreenHouse, Marketo.',
      'Built WordPress pages via Beaver Builder with custom HTML, CSS, and JavaScript.',
      'Website performance optimization (Core Web Vitals) — boosted metrics from 30 to 90 points.',
      'GTM and Google Analytics 4 — implemented new Tags, Triggers, and Consent Mode v2.',
      'Websites localization through Smartling (GDN/Connector).',
      'Developed Marketo forms and marketing HTML email templates.',
      'Investigated and resolved complex website issues.',
      'Maintained documentation of work processes and wrote technical articles.',
    ],
  },
  {
    title: 'Web Developer',
    company: 'Western Digital',
    location: 'Irvine, CA',
    period: 'May 2020 — Apr 2021',
    bullets: [
      'Provided cross-browser layout of new pages in Adobe Experience Manager (AEM).',
      'Investigated and fixed bugs on web pages.',
      'Updated content through SAP Hybris.',
    ],
  },
  {
    title: 'Web & Application Developer',
    company: 'Polish TV Company',
    location: 'New York, NY',
    period: 'Jun 2012 — Apr 2020',
    bullets: [
      'Redesigned and maintained web applications using HTML, CSS, JavaScript (jQuery/React JS), and PHP.',
      'Developed responsive pages and templates for WordPress, Magento, and Drupal.',
      'Integrated React JS application with Redux form into an existing website; implemented Webpack.',
      'Created Magento migration to MySQL with content changes.',
      'Developed UI/UX mockups and translated them into HTML/CSS interfaces.',
      'Performed cross-browser / cross-platform testing; fixed CSS / HTML / JavaScript / PHP bugs.',
      'Conducted graphic design: logos, business cards, booklets, and banners.',
      'Set up and optimized Linux servers (LAMP stack).',
      'Hand-coded email templates for promotional campaigns.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="section">
        <h2 className="section-title">
          <span className="num">03.</span> Experience
        </h2>
        <div className="exp__timeline">
          {jobs.map((job, i) => (
            <div key={i} className="exp__item">
              <div className="exp__marker" aria-hidden="true" />
              <div className="exp__content">
                <div className="exp__header">
                  <div>
                    <h3 className="exp__title">
                      {job.title}
                      {job.type && <span className="exp__badge">{job.type}</span>}
                    </h3>
                    <p className="exp__company">
                      {job.company} <span>·</span> {job.location}
                    </p>
                  </div>
                  <span className="exp__period">{job.period}</span>
                </div>
                <ul className="exp__bullets">
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
