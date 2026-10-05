import usePageMeta from '../hooks/usePageMeta.js'
import { site } from '../data/site.js'
import SignupForm from '../components/SignupForm.jsx'
import { forms } from '../data/forms.js'

export default function Contact() {
  usePageMeta('Contact', 'Contact Clarissa Bañez, or sign up for her monthly Studio Notes newsletter.')
  return (
    <div className="page narrow">
      <h1>Contact</h1>
      <p>email: <a href={`mailto:${site.email}`}>{site.email}</a></p>
      <p>instagram: <a href={`https://instagram.com/${site.instagram}/`} target="_blank" rel="noreferrer">@{site.instagram}</a></p>
      <p>For my monthly Studio Notes, please sign up with the newsletter below:</p>
      <SignupForm config={forms.newsletter} />
    </div>
  )
}
