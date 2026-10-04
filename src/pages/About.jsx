import usePageMeta from '../hooks/usePageMeta.js'
import { site } from '../data/site.js'

export default function About() {
  usePageMeta('About', 'Clarissa Bañez is a Filipino visual artist in Prague creating representational oil paintings on devotion, belief, and ritual.')
  return (
    <div className="page about">
      <img src={encodeURI(site.aboutImage)} alt="Clarissa Bañez" />
      <div>
        <h1>About</h1>
        <p>{site.about}</p>
      </div>
    </div>
  )
}
