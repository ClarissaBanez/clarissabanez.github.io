import usePageMeta from '../hooks/usePageMeta.js'
import PhotoCredit from '../components/PhotoCredit.jsx'
import { site } from '../data/site.js'

export default function About() {
  usePageMeta('About', 'Clarissa Bañez is a Filipino visual artist in Prague creating representational oil paintings on devotion, belief, and ritual.')

  // Works with a list of paragraphs, or a single piece of text.
  const paragraphs = Array.isArray(site.about) ? site.about : [site.about]

  return (
    <div className="page about">
      <div>
        <img src={encodeURI(site.aboutImage)} alt="Clarissa Bañez" />
        <PhotoCredit credit={site.aboutImageCredit} />
      </div>
      <div>
        <h1>About</h1>
        {paragraphs.map((text, i) => <p key={i}>{text}</p>)}
      </div>
    </div>
  )
}
