import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Work from './pages/Work.jsx'
import About from './pages/About.jsx'
import CV from './pages/CV.jsx'
import Contact from './pages/Contact.jsx'
import Collect from './pages/Collect.jsx'
import Commissions from './pages/Commissions.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/collect" element={<Collect />} />
          <Route path="/commissions" element={<Commissions />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
