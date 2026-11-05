import { useState } from 'react'
import { profile } from '../data'
import { useActiveSection, useScrollProgress } from '../hooks'

const links = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]
const ids = links.map((l) => l.id)

export default function Nav() {
  const progress = useScrollProgress()
  const active = useActiveSection(ids)
  const [open, setOpen] = useState(false)

  return (
    <header className={`nav ${progress > 0.01 ? 'nav-scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#top" className="brand">
          {profile.name}
          <span className="brand-dot" aria-hidden="true" />
        </a>

        <button
          type="button"
          className="menu-btn"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>

        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Sections">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href={profile.resumePdf} className="btn btn-outline" download>
            Resume PDF
          </a>
        </nav>
      </div>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} />
    </header>
  )
}
