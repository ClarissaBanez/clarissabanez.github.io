import usePageMeta from '../hooks/usePageMeta.js'
import { Link } from 'react-router-dom'
import { site } from '../data/site.js'
import SignupForm from '../components/SignupForm.jsx'
import { forms } from '../data/forms.js'

export default function Collect() {
  usePageMeta('Collect', 'Available paintings, limited edition prints and inquiries from Clarissa Bañez.')
  return (
    <div className="page narrow">
      <h1>Collect</h1>
      <p>A selection of available paintings and limited edition prints can be viewed in the <a href={site.shopUrl} target="_blank" rel="noreferrer">COLLECT</a> site.</p>
      <p>For portrait commissions, please see my <Link to="/commissions">Portrait Commissions Page</Link> for more details.</p>
      <p>For other inquiries, please message at <a href={`mailto:${site.email}`}>{site.email}</a> or through Instagram <a href={`https://instagram.com/${site.instagram}/`} target="_blank" rel="noreferrer">@{site.instagram}</a></p>
      <SignupForm config={forms.catalogue} />
    </div>
  )
}
