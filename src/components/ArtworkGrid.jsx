import { thumbSrc } from '../data/artworks.js'

// Every tile is the same height and paintings sit on a shared baseline, so
// landscape and portrait works keep their true proportions and captions line up.
export default function ArtworkGrid({ works, onOpen }) {
  if (!works.length) return <p>No works in this category yet.</p>
  return (
    <ul className="grid">
      {works.map((w) => (
        <li key={w.slug} className="tile">
          <button type="button" onClick={() => onOpen(w.slug)} aria-label={`View ${w.title}`}>
            <img src={thumbSrc(w)} alt={`${w.title}, ${w.year}`} loading="lazy" />
          </button>
          <p className="caption"><span className="cap-title">{w.title}</span>,<span className="cap-year">{w.year}</span></p>
        </li>
      ))}
    </ul>
  )
}
