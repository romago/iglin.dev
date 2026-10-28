import { useState } from 'react'
import { projects } from '../portfolio/projects'
import { CaseStudy, Lightbox } from '../portfolio/CaseStudy'
import './Projects.css'

// The strongest case studies from portfolio.iglin.dev; the rest live there.
const featuredIds = ['people-movers', 'araks', 'signifyd']
const featured = featuredIds.map((id) => projects.find((p) => p.id === id))

export default function Projects() {
  const [openShot, setOpenShot] = useState(null)

  return (
    <section id="projects">
      <div className="section">
        <h2 className="section-title">Selected Work</h2>

        <div className="pf-projects">
          {featured.map((p, i) => (
            <CaseStudy key={p.id} project={p} index={i} onOpen={setOpenShot} />
          ))}
        </div>

        <div className="projects__more">
          <p>
            {projects.length - featured.length} more case studies with screenshots and results.
          </p>
          <a href="https://portfolio.iglin.dev" className="projects__more-btn" target="_blank" rel="noopener noreferrer">
            View full portfolio ↗
          </a>
        </div>
      </div>

      <Lightbox shot={openShot} onClose={() => setOpenShot(null)} />
    </section>
  )
}
