import { fullSrc, thumbSrc } from '../data/artworks.js'

// Returns every view of a painting: the main image first, then any `extras`
// you listed for it in artworks.js (details, installation views, etc.).
export function galleryImages(work) {
  const main = { src: fullSrc(work), thumb: thumbSrc(work), label: 'Painting', alt: '' }
  const extras = (work.extras || []).map((e) => ({
    src: encodeURI(e.fullFile ? `/images/${e.fullFile}` : `/images/thumbs/${e.file}`),
    thumb: encodeURI(`/images/thumbs/${e.file}`),
    label: e.label || 'Additional view',
    alt: e.alt || '',
  }))
  return [main, ...extras]
}
