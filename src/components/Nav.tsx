import { useEffect, useState } from 'react'
import { profile } from '../data'
import { useActiveSection, useScrollProgress } from '../hooks'

const links = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]
const ids = links.map((l) => l.id)

// nav is dark while it sits over the dark hero, light after that
function useOverHero() {
  const [over, setOver] = useState(true)
  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('top')
      const limit = hero ? hero.offsetHeight - 70 : 0
      setOver(window.scrollY < limit)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
  return over
}

export default function Nav() {
  const progress = useScrollProgress()
  const active = useActiveSection(ids)
  const overHero = useOverHero()
  const [open, setOpen] = useState(false)

  return (
    <header className={`nav ${overHero ? 'nav-dark' : 'nav-light'}`}>
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
