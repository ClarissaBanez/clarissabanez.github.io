import { useEffect, useId, useRef, useState } from 'react'
import { site } from '../data/site.js'

// A plain HTML signup form that posts directly to MailerLite.
// The form submits into a hidden frame, so the visitor stays on the page,
// and the thank-you message appears as soon as MailerLite has responded.
export default function SignupForm({ config }) {
  const { account, formId, layout = 'stacked', title, text = [], button, note, successTitle, successText } = config
  const uid = useId()
  const frameName = `ml-frame-${formId}`
  const [status, setStatus] = useState('idle') // idle | sending | done | error
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  const onSubmit = () => {
    setStatus('sending')
    clearTimeout(timer.current)
    // If MailerLite has not answered after 15 seconds, show an error.
    timer.current = setTimeout(() => setStatus((s) => (s === 'sending' ? 'error' : s)), 15000)
  }

  const onFrameLoad = () => {
    if (status === 'sending') {
      clearTimeout(timer.current)
      setStatus('done')
    }
  }

  return (
    <section className={`signup ${layout}`} aria-labelledby={`${uid}-title`}>
      {status === 'done' ? (
        <div role="status">
          <h2>{successTitle}</h2>
          <p>{successText}</p>
        </div>
      ) : (
        <>
          <h2 id={`${uid}-title`}>{title}</h2>
          {text.map((p) => <p key={p}>{p}</p>)}
          <form
            action={`https://assets.mailerlite.com/jsonp/${account}/forms/${formId}/subscribe`}
            method="post"
            target={frameName}
            onSubmit={onSubmit}
          >
            <div className="signup-fields">
              <label className="sr-only" htmlFor={`${uid}-name`}>Name</label>
              <input id={`${uid}-name`} type="text" name="fields[name]" placeholder="Name" autoComplete="given-name" />
              <label className="sr-only" htmlFor={`${uid}-email`}>Email</label>
              <input id={`${uid}-email`} type="email" name="fields[email]" placeholder="Email" autoComplete="email" required />
              <button type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : button}</button>
            </div>
            <input type="hidden" name="ml-submit" value="1" />
            <input type="hidden" name="anticsrf" value="true" />
            {note && <p className="signup-note">{note}</p>}
            {status === 'error' && (
              <p role="alert" className="signup-error">
                Sorry, that didn't go through. Please try again, or email <a href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
            )}
          </form>
        </>
      )}
      {/* Hidden frame that receives MailerLite's response */}
      <iframe name={frameName} title="" aria-hidden="true" tabIndex={-1} hidden onLoad={onFrameLoad} />
    </section>
  )
}
