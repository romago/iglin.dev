import { useState } from 'react'
import './Projects.css'

// Import project assets
import signifydImage from '../assets/Projects/Signifyd_EMEA/emea_signifyd_home.png'
import signifydVideo from '../assets/Projects/Signifyd_EMEA/emea_signifyd_home.mov'

const projects = [
  {
    id: 1,
    number: '01',
    title: 'SIGNIFYD EMEA',
    role: 'FREELANCE WEB DEVELOPER',
    description: 'E-commerce fraud protection platform for European and Middle Eastern markets. Built responsive website with modern design, integrated APIs, and optimized for performance and conversion.',
    media: [
      { type: 'image', src: signifydImage, alt: 'Signifyd EMEA Homepage' },
      { type: 'video', src: signifydVideo, alt: 'Signifyd EMEA Demo' }
    ],
    technologies: ['React', 'PHP', 'WordPress', 'REST API', 'SCSS'],
    link: 'https://signifyd.com'
  }
]

export default function Projects() {
  const [selectedMedia, setSelectedMedia] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openGallery = (media, index) => {
    setSelectedMedia(media)
    setCurrentIndex(index)
  }

  const closeGallery = () => {
    setSelectedMedia(null)
    setCurrentIndex(0)
  }

  const nextMedia = () => {
    if (selectedMedia && currentIndex < selectedMedia.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevMedia = () => {
    if (selectedMedia && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Escape') closeGallery()
    if (e.key === 'ArrowRight') nextMedia()
    if (e.key === 'ArrowLeft') prevMedia()
  }

  return (
    <section id="projects">
      <div className="section">
        <h2 className="section-title">
          <span className="num">03.</span> Selected Work
        </h2>
        
        <div className="projects__grid">
          {projects.map((project) => (
            <div key={project.id} className="project">
              <div className="project__number">{project.number}</div>
              
              <div className="project__content">
                <div className="project__info">
                  <h3 className="project__title">{project.title}</h3>
                  <p className="project__role">{project.role}</p>
                  <p className="project__description">{project.description}</p>
                  
                  <div className="project__tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="project__tech-item">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="project__gallery">
                  {project.media.map((item, index) => (
                    <div 
                      key={index} 
                      className="project__media-item"
                      onClick={() => openGallery(project.media, index)}
                    >
                      {item.type === 'image' ? (
                        <img src={item.src} alt={item.alt} />
                      ) : (
                        <div className="project__video-thumb">
                          <video src={item.src} muted />
                          <div className="project__play-button">▶</div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      {selectedMedia && (
        <div 
          className="gallery-modal" 
          onClick={closeGallery}
          onKeyDown={handleKeyPress}
          tabIndex={0}
        >
          <div className="gallery-modal__content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-modal__close" onClick={closeGallery}>✕</button>
            
            <div className="gallery-modal__media">
              {selectedMedia[currentIndex].type === 'image' ? (
                <img 
                  src={selectedMedia[currentIndex].src} 
                  alt={selectedMedia[currentIndex].alt} 
                />
              ) : (
                <video 
                  src={selectedMedia[currentIndex].src} 
                  controls 
                  autoPlay 
                  muted
                />
              )}
            </div>
            
            {selectedMedia.length > 1 && (
              <>
                <button 
                  className="gallery-modal__nav gallery-modal__prev"
                  onClick={prevMedia}
                  disabled={currentIndex === 0}
                >
                  ‹
                </button>
                <button 
                  className="gallery-modal__nav gallery-modal__next"
                  onClick={nextMedia}
                  disabled={currentIndex === selectedMedia.length - 1}
                >
                  ›
                </button>
              </>
            )}
            
            <div className="gallery-modal__counter">
              {currentIndex + 1} / {selectedMedia.length}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}