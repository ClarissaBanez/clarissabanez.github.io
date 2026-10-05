import { useEffect, useRef, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Work from './pages/Work.jsx'
import About from './pages/About.jsx'
import CV from './pages/CV.jsx'
import Contact from './pages/Contact.jsx'
import Collect from './pages/Collect.jsx'
import Commissions from './pages/Commissions.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  const { pathname } = useLocation()
  const mainRef = useRef(null)
  const firstRender = useRef(true)
  const [announcement, setAnnouncement] = useState('')

  // When the page changes: scroll to top, move keyboard focus to the content,
  // and tell screen readers the new page title.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    window.scrollTo(0, 0)
    mainRef.current?.focus({ preventScroll: true })
    setAnnouncement(document.title)
  }, [pathname])

  return (
    <>
      <button type="button" className="skip-link" onClick={() => mainRef.current?.focus()}>Skip to content</button>
      <Header />
      <main id="main" tabIndex={-1} ref={mainRef}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/collect" element={<Collect />} />
          <Route path="/commissions" element={<Commissions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <div className="sr-only" role="status" aria-live="polite">{announcement}</div>
      <Footer />
    </>
  )
}
