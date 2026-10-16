import { useState } from 'react'
import AboutSection from './components/AboutSection.jsx'
import PhotoGallery from './components/PhotoGallery.jsx'
import PhotoLightbox from './components/PhotoLightbox.jsx'
import ScrollReveal from './components/ScrollReveal.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import SiteHeader from './components/SiteHeader.jsx'
import { photographs } from './data/photographs.js'

function App() {
  const [activeCategory, setActiveCategory] = useState('Todo')
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const featuredPhoto = photographs[0]

  return (
    <div id="inicio" className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <main>
        <section className="hero-stage mx-auto max-w-[1600px] px-3 pb-14 pt-3 sm:px-6 sm:pb-20 lg:px-10">
          <div className="hero-frame">
            <img className="hero-photo" src={featuredPhoto.src} alt={featuredPhoto.alt} />
            <div className="hero-shade" />
            <div className="hero-overlay">
              <div className="hero-copy">
                <p className="hero-kicker">Fotografía automotriz <span /> Archivo personal</p>
                <h1 className="hero-title font-display">Luz, forma<br /><em>y movimiento.</em></h1>
                <p className="hero-description">Samuel Calderón <span>·</span> Fotografía en CESDE</p>
                <a className="hero-link" href="#archivo">Explorar el archivo <span aria-hidden="true">↘</span></a>
              </div>
              <div className="hero-index">
                <span>01 <i /> {String(photographs.length).padStart(2, '0')}</span>
                <span>{featuredPhoto.title}</span>
              </div>
            </div>
            <button
              className="hero-open"
              type="button"
              onClick={() => setSelectedPhoto(featuredPhoto)}
              aria-label={`Abrir fotografía: ${featuredPhoto.title}`}
              title="Ampliar fotografía"
            >
              <span aria-hidden="true">↗</span>
            </button>
          </div>
        </section>

        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>

        <ScrollReveal>
          <section id="archivo" className="archive-section mx-auto max-w-[1440px] scroll-mt-8 px-6 pb-20 pt-16 sm:px-10 lg:px-16 lg:pb-28 lg:pt-24">
            <div className="archive-heading mb-9 flex flex-col justify-between gap-6 border-t border-line pt-7 sm:flex-row sm:items-end lg:mb-12">
              <div>
                <p className="eyebrow mb-3">02 / El archivo</p>
                <h2 className="font-display text-4xl sm:text-5xl">Imágenes para volver.</h2>
              </div>
              <p className="max-w-xs text-xs leading-6 text-mid sm:text-sm">Una colección abierta de escenas encontradas en el camino.</p>
            </div>
            <PhotoGallery
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              onPhotoSelect={setSelectedPhoto}
            />
          </section>
        </ScrollReveal>
      </main>
      <SiteFooter />
      {selectedPhoto && (
        <PhotoLightbox
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
          onNavigate={(direction) => {
            const currentIndex = photographs.findIndex((photo) => photo.id === selectedPhoto.id)
            const nextIndex = (currentIndex + direction + photographs.length) % photographs.length
            setSelectedPhoto(photographs[nextIndex])
          }}
        />
      )}
    </div>
  )
}

export default App
