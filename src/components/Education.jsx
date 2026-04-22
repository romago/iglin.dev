import './Education.css'

const education = [
  {
    degree: 'Front-end Developer - Practicum Yandex',
    institution: 'Norilsk, Russia',
    period: '2010',
    icon: '💻',
  },
  {
    degree: 'BS in Electrical Engineering',
    institution: 'Krasnoyarsk Technical University, Russia',
    period: '2004 – 2008',
    icon: '🎓',
  },
  {
    degree: 'Secondary Vocational Education',
    field: 'Electrician',
    institution: 'Norilsk, Russia',
    period: '1998 – 2001',
    icon: '⚡',
  },
]

export default function Education() {
  return (
    <section id="education" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section">
        <h2 className="section-title">
          <span className="num">04.</span> Education
        </h2>
        <div className="edu__grid">
          {education.map((item, i) => (
            <div key={i} className="edu__card">
              <span className="edu__icon" aria-hidden="true">{item.icon}</span>
              <div className="edu__body">
                <h3 className="edu__degree">
                  {item.degree}
                  {item.field && <span> — {item.field}</span>}
                </h3>
                <p className="edu__institution">{item.institution}</p>
              </div>
              <span className="edu__period">{item.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
