import './Education.css'

const IconCode = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M14.6 16.6l4.6-4.6-4.6-4.6 1.4-1.4 6 6-6 6-1.4-1.4zm-5.2 0L4.8 12l4.6-4.6L8 6 2 12l6 6 1.4-1.4z"/>
  </svg>
)

const IconGradCap = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
  </svg>
)

const IconBolt = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M7 2v11h3v9l7-12h-4l4-8H7z"/>
  </svg>
)

const education = [
  {
    degree: 'Front-end Developer - Practicum Yandex',
    institution: 'Norilsk, Russia',
    period: '2010',
    Icon: IconCode,
  },
  {
    degree: 'BS in Electrical Engineering',
    institution: 'Krasnoyarsk Technical University, Russia',
    period: '2004 – 2008',
    Icon: IconGradCap,
  },
  {
    degree: 'Secondary Vocational Education',
    field: 'Electrician',
    institution: 'Norilsk, Russia',
    period: '1998 – 2001',
    Icon: IconBolt,
  },
]

export default function Education() {
  return (
    <section id="education" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section">
        <h2 className="section-title">Education</h2>
        <div className="edu__grid">
          {education.map((item, i) => (
            <div key={i} className="edu__card">
              <span className="edu__icon" aria-hidden="true"><item.Icon /></span>
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
