import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'

export default function NotFound() {
  usePageMeta('Page not found')
  return (
    <div className="page narrow">
      <h1>Page not found</h1>
      <p>That page doesn't exist. <Link to="/">Return home</Link> or see the <Link to="/work">work</Link>.</p>
    </div>
  )
}
