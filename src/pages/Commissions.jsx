import usePageMeta from '../hooks/usePageMeta.js'
import { commissions as c } from '../data/commissions.js'

export default function Commissions() {
  usePageMeta('Portrait Commissions', 'Graphite, charcoal and oil portrait commissions by Clarissa Bañez, made from photographic reference.')
  return (
    <div className="page commissions">
      <ul className="comm-images">
        {c.images.map((img) => (
          <li key={img.file}><img src={encodeURI(`/images/thumbs/${img.file}`)} alt={img.alt} loading="lazy" /></li>
        ))}
      </ul>

      <div className="comm-text">
        <h1>{c.title}</h1>
        {c.intro.map((p, i) => <p key={i}>{p}</p>)}
        <p>
          To inquire about a portrait commission please send a request through the{' '}
          <a href={c.formUrl} target="_blank" rel="noreferrer">{c.formLabel}</a>.
        </p>

        <h2 className="comm-h">{c.offersTitle}</h2>
        {c.offers.map((o) => (
          <div key={o.title} className="option">
            <p className="option-title">{o.title} <span className="cap-year">{o.price}</span></p>
            <p>{o.text}</p>
          </div>
        ))}

        <h2 className="comm-h">{c.processTitle}</h2>
        <ul className="process">
          {c.process.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      </div>
    </div>
  )
}
