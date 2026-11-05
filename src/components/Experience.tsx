import { useEffect, useRef, useState } from 'react'
import { jobs } from '../data'
import Reveal from './Reveal'

// the timeline line fills in as you scroll through the section
function useFill() {
  const ref = useRef<HTMLOListElement>(null)
  const [fill, setFill] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const mid = window.innerHeight * 0.6
      const p = (mid - r.top) / r.height
      setFill(Math.max(0, Math.min(1, p)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return { ref, fill }
}

export default function Experience() {
  const { ref, fill } = useFill()

  return (
    <section id="experience" className="section">
      <Reveal>
        <h2 className="section-label">Experience</h2>
      </Reveal>

      <ol ref={ref} className="timeline">
        <span className="timeline-line" aria-hidden="true">
          <span style={{ transform: `scaleY(${fill})` }} />
        </span>

        {jobs.map((job) => (
          <li key={job.company} className={`job ${job.current ? 'job-current' : ''}`}>
            <Reveal>
              <span className="job-dot" aria-hidden="true" />
              <p className="job-dates">{job.span}</p>
              <h3>{job.company}</h3>
              <p className="job-about">{job.about}</p>

              {job.roles.map((role) => (
                <div key={role.title} className="role">
                  <div className="role-head">
                    <p className="job-role">{role.title}</p>
                    {job.roles.length > 1 && <p className="role-dates">{role.dates}</p>}
                  </div>
                  {role.summary && <p className="role-summary">{role.summary}</p>}
                  <ul>
                    {role.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
