import { MouseEvent } from 'react'
import { highlights } from '../data'
import Reveal from './Reveal'

// card follows the mouse with a soft glow and a small tilt
function onMove(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  const x = e.clientX - r.left
  const y = e.clientY - r.top
  el.style.setProperty('--x', `${x}px`)
  el.style.setProperty('--y', `${y}px`)
  el.style.setProperty('--rx', `${((y / r.height) - 0.5) * -6}deg`)
  el.style.setProperty('--ry', `${((x / r.width) - 0.5) * 6}deg`)
}

function onLeave(e: MouseEvent<HTMLElement>) {
  e.currentTarget.style.setProperty('--rx', '0deg')
  e.currentTarget.style.setProperty('--ry', '0deg')
}

export default function Highlights() {
  return (
    <section id="work" className="section">
      <Reveal>
        <h2 className="section-label">Things I've led</h2>
      </Reveal>
      <div className="cards">
        {highlights.map((h, i) => (
          <Reveal key={h.title} delay={i * 120}>
            <article className="card" onMouseMove={onMove} onMouseLeave={onLeave}>
              <p className="card-where">{h.where}</p>
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
