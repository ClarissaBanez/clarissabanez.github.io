import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { site } from '../data/site.js'

const links = [
  ['/work', 'WORK'], ['/about', 'ABOUT'], ['/cv', 'CV'], ['/contact', 'CONTACT'], ['/collect', 'COLLECT'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Close the menu when the page changes, or when Escape is pressed.
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="header">
      <Link to="/" className="logo">{site.name}</Link>

      {/* Hamburger button: only visible on phones */}
      <button
        type="button"
        className="menu-btn"
        aria-expanded={open}
        aria-controls="main-nav"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((o) => !o)}
      >
        <span /><span /><span />
      </button>

      <nav id="main-nav" className={open ? 'open' : ''} aria-label="Main">
        {links.map(([to, label]) => (
          <NavLink key={to} to={to} className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setOpen(false)}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
