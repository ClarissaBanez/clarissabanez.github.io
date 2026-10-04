import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { fullSrc } from '../data/artworks.js'

// Full-screen view: large image on the left, details on the right.
export default function Lightbox({ work, index, total, onClose, onPrev, onNext }) {
  const closeRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden' // stop the page scrolling behind
    closeRef.current?.focus()
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={work.title}>
      <button ref={closeRef} type="button" className="lb-close" onClick={onClose} aria-label="Close">×</button>
      <div className="lb-image">
        <img key={work.slug} src={fullSrc(work)} alt={`${work.title}, ${work.year}, ${work.medium}, ${work.dimensions}`} />
      </div>
      <aside className="lb-info">
        <h1>{work.title}</h1>
        <p className="meta">{work.year}</p>
        <p className="meta">{work.medium}</p>
        <p className="meta">{work.dimensions}</p>
        {work.description && <p className="desc">{work.description}</p>}
        {work.available && <p><Link to="/collect">Available — see Collect</Link></p>}
        <div className="lb-nav">
          <button type="button" onClick={onPrev} aria-label="Previous work">‹</button>
          <span>{index + 1} / {total}</span>
          <button type="button" onClick={onNext} aria-label="Next work">›</button>
        </div>
      </aside>
    </div>
  )
}
