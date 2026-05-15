import './Skills.css'

const skillGroups = [
  {
    category: 'Languages',
    items: ['PHP', 'JavaScript', 'React JS', 'HTML5', 'CSS3 / SASS / LESS', 'SQL'],
  },
  {
    category: 'CMS & Platforms',
    items: ['WordPress', 'Drupal', 'Magento', 'AEM', 'Shopify', 'Joomla'],
  },
  {
    category: 'Tools & DevOps',
    items: ['Git', 'Docker', 'Webpack', 'Node.js', 'SSH', 'Linux / Apache / Nginx'],
  },
  {
    category: 'API & Integrations',
    items: ['REST API', 'JSON / XML', 'Marketo', 'GTM / GA4', 'Smartling', 'Drush'],
  },
  {
    category: 'Design',
    items: ['Figma', 'Sketch', 'Adobe Photoshop', 'Adobe Illustrator', 'UI/UX Mockups', 'CorelDraw'],
  },
  {
    category: 'Services',
    items: ['JIRA', 'AWS', 'DigitalOcean', 'MailChimp', 'Wrike', 'Redmine'],
  },
]

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills__grid">
          {skillGroups.map(({ category, items }) => (
            <div key={category} className="skills__card">
              <h3 className="skills__category">{category}</h3>
              <ul className="skills__list">
                {items.map((item) => (
                  <li key={item} className="skills__item">
                    <span className="skills__dot" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
