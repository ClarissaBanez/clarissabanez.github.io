import { NavLink, Link } from 'react-router-dom'
import { site } from '../data/site.js'

const links = [
  ['/work', 'WORK'], ['/about', 'ABOUT'], ['/cv', 'CV'], ['/contact', 'CONTACT'], ['/collect', 'COLLECT'],
]

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">{site.name}</Link>
      <nav aria-label="Main">
        {links.map(([to, label]) => (
          <NavLink key={to} to={to} className={({ isActive }) => (isActive ? 'active' : '')}>{label}</NavLink>
        ))}
      </nav>
    </header>
  )
}
