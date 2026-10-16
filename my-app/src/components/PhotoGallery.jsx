import { useState } from 'react'
import { categories, photographs } from '../data/photographs.js'

const photosPerPage = 9

function PhotoGallery({ activeCategory, onCategoryChange, onPhotoSelect }) {
  const [currentPage, setCurrentPage] = useState(1)
  const visiblePhotos = activeCategory === 'Todo'
    ? photographs
    : photographs.filter((photo) => photo.category === activeCategory)
  const pageCount = Math.ceil(visiblePhotos.length / photosPerPage)
  const pagePhotos = visiblePhotos.slice((currentPage - 1) * photosPerPage, currentPage * photosPerPage)

  const changeCategory = (category) => {
    setCurrentPage(1)
    onCategoryChange(category)
  }

  const changePage = (page) => {
    setCurrentPage(page)
    document.getElementById('archivo')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <div className="gallery-toolbar mb-8 flex flex-wrap gap-2" aria-label="Filtrar fotografías">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className="filter-button px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.1em]"
            aria-pressed={activeCategory === category}
            onClick={() => changeCategory(category)}
          >
            {category}
          </button>
        ))}
        <span className="ml-auto self-center text-[10px] uppercase tracking-[0.1em] text-mid">
          {String(visiblePhotos.length).padStart(2, '0')} fotografías
        </span>
      </div>
      <div className="gallery-grid grid grid-cols-1 gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-12">
        {pagePhotos.map((photo, index) => (
          <button
            className={`photo-item group block w-full cursor-zoom-in text-left ${index === 0 ? 'photo-item-featured' : ''}`}
            key={photo.id}
            type="button"
            style={{ '--item-index': index }}
            onClick={() => onPhotoSelect(photo)}
          >
            <span className={`photo-image block overflow-hidden bg-fog ${index === 0 ? 'aspect-[16/10]' : photo.aspect}`}>
              <img className="h-full w-full object-cover" src={photo.src} alt={photo.alt} loading="lazy" />
            </span>
            <span className="mt-3 flex items-baseline justify-between gap-4">
              <span className="font-display text-base sm:text-lg">{photo.title}</span>
              <span className="shrink-0 text-[9px] uppercase tracking-[0.1em] text-mid">{String((currentPage - 1) * photosPerPage + index + 1).padStart(2, '0')}</span>
            </span>
            <span className="mt-1 block text-[10px] uppercase tracking-[0.1em] text-mid">{photo.category}</span>
          </button>
        ))}
      </div>
      {pageCount > 1 && (
        <nav className="mt-10 flex items-center justify-center gap-2 border-t border-line pt-6" aria-label="Paginación de fotografías">
          <button
            className="page-button px-3 py-2 text-xs uppercase tracking-[0.08em] disabled:cursor-not-allowed disabled:opacity-35"
            type="button"
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Página anterior"
          >
            ← <span className="hidden sm:inline">Anterior</span>
          </button>
          {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
            <button
              className="page-button h-9 min-w-9 px-3 text-xs"
              key={page}
              type="button"
              onClick={() => changePage(page)}
              aria-label={`Página ${page}`}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {String(page).padStart(2, '0')}
            </button>
          ))}
          <span className="ml-2 text-[10px] uppercase tracking-[0.1em] text-mid">de {String(pageCount).padStart(2, '0')}</span>
          <button
            className="page-button px-3 py-2 text-xs uppercase tracking-[0.08em] disabled:cursor-not-allowed disabled:opacity-35"
            type="button"
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === pageCount}
            aria-label="Página siguiente"
          >
            <span className="hidden sm:inline">Siguiente</span> →
          </button>
        </nav>
      )}
    </>
  )
}

export default PhotoGallery