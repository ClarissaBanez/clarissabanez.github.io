import usePageMeta from '../hooks/usePageMeta.js'
import { cv } from '../data/cv.js'
import { site } from '../data/site.js'

export default function CV() {
  usePageMeta('Artist CV', 'Artist CV of Clarissa Bañez: education, exhibitions, residencies and recognitions.')
  return (
    <div className="page narrow">
      <h1>Artist CV</h1>
      <p><a href={site.cvPdf}>Download CV</a></p>
      {cv.map((s) => (
        <section key={s.title} className="cv-section">
          <h2>{s.title}</h2>
          {s.rows.map((r, i) => (
            <p key={i} className="cv-row"><span>{r.year || ''}</span><span>{r.text}</span></p>
          ))}
        </section>
      ))}
    </div>
  )
}
