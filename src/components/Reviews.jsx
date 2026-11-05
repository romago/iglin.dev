import { useState } from 'react'
import './Reviews.css'

const UPWORK_PROFILE = 'https://www.upwork.com/freelancers/~01804b6061bf805cfd'
const LINKEDIN_RECOMMENDATIONS = 'https://www.linkedin.com/in/roman-iglin/details/recommendations/'
const IONOS_PROFILE = 'https://partnernetwork.ionos.com/partner/roman.iglin#ratings'

// Copied word for word from the sources; Upwork does not show client names publicly, so the job title stands in.
const recommendations = [
  {
    author: 'Kevin T. Boyd',
    role: 'Web Development Manager, Signifyd',
    relation: 'Managed Roman directly',
    date: 'Nov 2024',
    paragraphs: [
      'I’ve had the pleasure of working with Roman Iglin since 2021, when I hired him as a freelance web developer for Signifyd, a B2B startup in the finance space. Since then, Roman has been an integral part of our projects, working near full time as a freelancer.',
      'Roman is a highly skilled engineer with deep expertise in WordPress, PHP, HTML, CSS, and JavaScript. His technical abilities go far beyond the basics—he has consistently demonstrated an ability to tackle complex frameworks and solve challenges with creativity and precision.',
      'One of Roman’s standout qualities is his versatility. He isn’t just a coder; he’s a problem-solver who brings thoughtful solutions to technical hurdles. He excels at faithfully interpreting design concepts while remaining flexible enough to enhance them with refined interactions and animations.',
      'Roman’s communication skills are another strength. He writes clear, concise reports and explains technical concepts in a way that’s easy for anyone to understand, making him an asset in cross-functional collaboration.',
      'Above all, Roman is dependable and workmanlike. He truly lives to program and consistently delivers high-quality work on time. Projects like implementing APIs for Looker data visualizations, integrating G2 customer reviews into the website, and designing a signature tool highlight the depth and breadth of his capabilities.',
      'You get exceptional value with Roman—I couldn’t recommend him more strongly as a web developer. Anyone seeking a skilled, reliable, and innovative professional would be fortunate to have him on their team.',
    ],
  },
  {
    author: 'Grigory Timofeev',
    role: 'Product Manager on a web-based CRM project (now VP Product Manager at JPMorgan Chase)',
    relation: 'Managed Roman directly',
    date: 'Nov 2026',
    paragraphs: [
      'I had the pleasure of managing Roman Iglin while we worked together on the development of a web-based CRM system.',
      'Roman demonstrated exceptional technical expertise, strategic vision, and a strong understanding of user experience. He completely redesigned the system’s user interface, significantly improved its usability, and established an effective balance between frontend and backend logic and processes.',
      'What particularly impressed me was Roman’s ability to keep the user experience at the center of every technical decision while consistently aligning his work with the company’s business objectives. He understands how to transform complex technical challenges into intuitive, efficient, and business-driven solutions.',
      'Beyond his technical abilities, Roman is a great team player with natural leadership skills, a collaborative mindset, and an outstanding personality. His strategic thinking, professionalism, and ability to see the bigger picture make him a valuable asset to any development team.',
      'I highly recommend Roman to any organization looking for a talented web developer who combines technical excellence, user-centered thinking, strategic vision, and leadership potential.',
    ],
  },
]

// Verified client review on the IONOS Partner Network profile.
const ionosReview = {
  author: 'Aram Arutyunyan',
  role: 'Araks Inc (wholesale food distributor)',
  relation: 'Client since 2017',
  date: 'Nov 2026',
  text: 'Roman has been our web developer since 2017. He built and maintains our wholesale ordering site and the server it runs on. He connected the site to QuickBooks, so products, prices, stock and orders now sync automatically instead of by hand. Checkout went from 7–13 seconds to about half a second. He is responsive, explains things clearly, and keeps the site secure and backed up.',
}

const upworkReviews = [
  {
    job: 'WordPress theming styles and branding',
    date: 'May 2026',
    text: 'It was an absolute pleasure working with Roman on yet another successful project. Quick, efficient and the quality of work is perfect. Looking forward to continuing engagements with him.',
  },
  {
    job: 'WordPress theme update for design changes',
    date: 'Apr 2026',
    text: 'Fantastic experience working with Roman. He is knowledgeable, articulate, and very detail oriented. We plan to continue working with him on future projects.',
  },
  {
    job: 'WordPress admin',
    date: 'Apr 2026',
    text: 'I’m so grateful to have found this freelancer. They finished the project in a quicker timeframe than I’d anticipated. They are forward thinking and provided fast and efficient work.',
  },
  {
    job: 'WordPress administrator',
    date: 'Mar 2026',
    text: 'Roman was so helpful, insightful, and knowledgeable. My website hasn’t been overseen by someone with his level of hands on experience in a while. I am so grateful to have found him. Highly recommend.',
  },
]

const linkedinIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const upworkIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
  </svg>
)

const partnerIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" aria-hidden="true">
    <path d="M12 2l3 6.5 7 .8-5.2 4.8 1.4 6.9L12 17.5 5.8 21l1.4-6.9L2 9.3l7-.8z" />
  </svg>
)

function Recommendation({ rec }) {
  const [expanded, setExpanded] = useState(false)
  const shown = expanded ? rec.paragraphs : rec.paragraphs.slice(0, 2)
  return (
    <figure className="rev__card rev__card--featured">
      <blockquote className="rev__quote">
        {shown.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
      </blockquote>
      <button type="button" className="rev__more" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
        {expanded ? 'Show less' : 'Read the full recommendation'}
      </button>
      <figcaption className="rev__meta">
        <span className="rev__author">
          <strong>{rec.author}</strong>
          <span>{rec.role} · {rec.relation} · {rec.date}</span>
        </span>
        <Source href={LINKEDIN_RECOMMENDATIONS} icon={linkedinIcon} label="LinkedIn" />
      </figcaption>
    </figure>
  )
}

function Stars() {
  return <span className="rev__stars" aria-label="Rated 5.0 out of 5">★★★★★</span>
}

function Source({ href, icon, label }) {
  return (
    <a className="rev__source" href={href} target="_blank" rel="noopener noreferrer">
      {icon}
      <span>{label}</span>
    </a>
  )
}

export default function Reviews() {

  return (
    <section id="reviews" className="rev">
      <div className="section">
        <h2 className="section-title">Reviews</h2>
        <p className="rev__intro">
          What managers and clients wrote after working with me. Every quote is copied as is, with a link to where it was posted.
        </p>

        <ul className="rev__stats">
          <li><strong>5.0 ★</strong><span>every rated job on Upwork</span></li>
          <li><strong>100%</strong><span>Upwork Job Success</span></li>
          <li><strong>Top Rated</strong><span>Upwork badge</span></li>
        </ul>

        {recommendations.map((rec) => <Recommendation key={rec.author} rec={rec} />)}

        <figure className="rev__card rev__card--featured">
          <Stars />
          <blockquote className="rev__quote"><p>{ionosReview.text}</p></blockquote>
          <figcaption className="rev__meta">
            <span className="rev__author">
              <strong>{ionosReview.author}</strong>
              <span>{ionosReview.role} · {ionosReview.relation} · {ionosReview.date}</span>
            </span>
            <Source href={IONOS_PROFILE} icon={partnerIcon} label="IONOS" />
          </figcaption>
        </figure>

        <div className="rev__grid">
          {upworkReviews.map((r) => (
            <figure key={r.job} className="rev__card">
              <Stars />
              <blockquote className="rev__quote rev__quote--short"><p>{r.text}</p></blockquote>
              <figcaption className="rev__meta">
                <span className="rev__author">
                  <strong>Upwork client</strong>
                  <span>{r.job} · {r.date}</span>
                </span>
                <Source href={UPWORK_PROFILE} icon={upworkIcon} label="Upwork" />
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
