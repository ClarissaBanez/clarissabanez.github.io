import { useEffect, useRef } from 'react'
import { site } from '../data/site.js'

// Shows a MailerLite embedded form.
// MailerLite's script only scans the page for forms when it first loads, and
// React pages swap without a reload. So each time the form appears we reset
// MailerLite and load its script again, like a fresh page load.
export default function MailerLiteForm({ formId }) {
  const ref = useRef(null)

  useEffect(() => {
    // Fresh queue-stub, discarding any already-initialised copy.
    window.ml = function () {
      ;(window.ml.q = window.ml.q || []).push(arguments)
    }
    window.ml('account', site.mailerLite.account)

    const script = document.createElement('script')
    script.async = true
    script.src = `https://assets.mailerlite.com/js/universal.js?t=${Date.now()}`
    document.body.appendChild(script)

    // Safety net: if the form still has not appeared, reload the page once.
    const key = `ml-reload-${formId}`
    const timer = setTimeout(() => {
      const last = Number(sessionStorage.getItem(key) || 0)
      if (ref.current && ref.current.childElementCount === 0 && Date.now() - last > 10000) {
        sessionStorage.setItem(key, String(Date.now()))
        window.location.reload()
      }
    }, 1500)

    return () => {
      clearTimeout(timer)
      script.remove()
    }
  }, [formId])

  return <div ref={ref} className="ml-embedded" data-form={formId} />
}
