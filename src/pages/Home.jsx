import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'
import { site } from '../data/site.js'

export default function Home() {
  usePageMeta('')
  return (
    <>
      {/* Hidden from view, but read by search engines and screen readers. */}
      <div className="sr-only">
        <h1>Clarissa Bañez</h1>
        <p>
          Clarissa Bañez is a Filipino visual artist based in Prague, Czech Republic. She creates
          representational oil paintings that explore devotion, belief, and ritual.
        </p>
      </div>
      <Link to="/work" className="home-hero">
        <img src={encodeURI(site.homeImage)} alt={site.homeAlt} />
      </Link>
    </>
  )
}
