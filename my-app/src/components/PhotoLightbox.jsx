import { useEffect } from 'react'

function PhotoLightbox({ photo, onClose, onNavigate }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') onNavigate(-1)
      if (event.key === 'ArrowRight') onNavigate(1)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, onNavigate])

  return (
    <div className="lightbox-backdrop fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose()
    }}>
      <div className="relative flex h-full w-full max-w-6xl flex-col items-center justify-center" role="dialog" aria-modal="true" aria-label={photo.title}>
        <button className="lightbox-close absolute right-0 top-0 z-10 p-3 text-2xl text-white" type="button" onClick={onClose} aria-label="Cerrar fotografía">×</button>
        <button className="lightbox-control absolute left-0 top-1/2 z-10 -translate-y-1/2 p-3 text-3xl text-white" type="button" onClick={() => onNavigate(-1)} aria-label="Fotografía anterior">‹</button>
        <img className="lightbox-image max-h-[78vh] max-w-[calc(100%-72px)] object-contain" src={photo.src} alt={photo.alt} />
        <button className="lightbox-control absolute right-0 top-1/2 z-10 -translate-y-1/2 p-3 text-3xl text-white" type="button" onClick={() => onNavigate(1)} aria-label="Fotografía siguiente">›</button>
        <div className="mt-4 flex w-full max-w-4xl justify-between gap-4 px-2 text-[10px] uppercase tracking-[0.12em] text-white/70">
          <span>{photo.title}</span><span>{photo.category}</span>
        </div>
      </div>
    </div>
  )
}

export default PhotoLightbox