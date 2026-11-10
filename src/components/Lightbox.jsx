import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { altText } from '../data/artworks.js'
import PhotoCredit from './PhotoCredit.jsx'
import { galleryImages } from '../lib/galleryImages.js'

// Full-screen view: large image on the left, details on the right.
// If a painting has extra views (detail, installation...), thumbnails appear under the image.
export default function Lightbox({ work, index, total, onClose, onPrev, onNext, preload = [] }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const imgRef = useRef(null)
  const touchStart = useRef(null)

  // Which view of this painting is showing. Resets to the first view when the painting changes.
  const [viewState, setViewState] = useState({ slug: work.slug, view: 0 })
  const images = galleryImages(work)
  const view = viewState.slug === work.slug ? Math.min(viewState.view, images.length - 1) : 0
  const current = images[view]
  const imgAlt = view === 0 ? altText(work) : `${work.title}. ${current.alt || current.label}`

  // Move focus into the dialog on open, and back to the painting you clicked on close.
  useEffect(() => {
    const previous = document.activeElement
    closeRef.current?.focus()
    return () => previous?.focus?.()
  }, [])

  // Load this painting's other views, and the next and previous paintings, in the background.
  useEffect(() => {
    images.slice(1).forEach((i) => { new Image().src = i.src })
    preload.forEach((src) => { new Image().src = src })
  }, [work.slug]) // eslint-disable-line

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'Tab') {
        // Keep Tab inside the dialog.
        const items = dialogRef.current?.querySelectorAll('a[href], button:not([disabled])')
        if (!items?.length) return
        const first = items[0]
        const last = items[items.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden' // stop the page scrolling behind
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  // Click on empty space (outside the painting and the text) closes the lightbox.
  const onBackgroundClick = (e) => {
    if (e.target.closest('button, a, h1, p, .lb-nav, .lb-thumbs')) return
    const img = imgRef.current
    if (e.target === img && img.naturalWidth) {
      // The image box fills its area, so work out where the painting is actually drawn.
      const r = img.getBoundingClientRect()
      const scale = Math.min(r.width / img.naturalWidth, r.height / img.naturalHeight)
      const w = img.naturalWidth * scale
      const h = img.naturalHeight * scale
      const left = r.left + (r.width - w) / 2
      const top = r.top + (r.height - h) / 2
      const inside = e.clientX >= left && e.clientX <= left + w && e.clientY >= top && e.clientY <= top + h
      if (inside) return
    }
    onClose()
  }

  // Swipe left / right to move between works on touch screens.
  const onTouchStart = (e) => {
    const t = e.touches[0]
    touchStart.current = { x: t.clientX, y: t.clientY }
  }
  const onTouchEnd = (e) => {
    const s = touchStart.current
    touchStart.current = null
    if (!s) return
    const t = e.changedTouches[0]
    const dx = t.clientX - s.x
    const dy = t.clientY - s.y
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) (dx < 0 ? onNext : onPrev)()
  }

  return (
    <div
      ref={dialogRef}
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={work.title}
      onClick={onBackgroundClick}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button ref={closeRef} type="button" className="lb-close" onClick={onClose} aria-label="Close">×</button>

      <div className="lb-media">
        <div className="lb-image">
          <img ref={imgRef} key={current.src} src={current.src} alt={imgAlt} draggable="false" />
        </div>
        <PhotoCredit credit={current.credit} className="lb-credit" />
        {images.length > 1 && (
          <div className="lb-thumbs" role="group" aria-label="Views of this work">
            {images.map((im, i) => (
              <button
                key={im.src}
                type="button"
                aria-label={im.label}
                aria-current={i === view}
                onClick={() => setViewState({ slug: work.slug, view: i })}
              >
                <img src={im.thumb} alt="" />
              </button>
            ))}
            <span className="lb-viewlabel">{current.label}</span>
          </div>
        )}
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
        <p className="lb-hint">Swipe to browse</p>
      </aside>
    </div>
  )
}
