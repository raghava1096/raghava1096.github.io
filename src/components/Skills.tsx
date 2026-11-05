import { education, languages, skills } from '../data'
import { useInView } from '../hooks'
import Reveal from './Reveal'

export default function Skills() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15)
  let n = 0

  return (
    <section id="skills" className="section">
      <Reveal>
        <h2 className="section-label">Skills</h2>
      </Reveal>

      <div ref={ref} className={`skills ${inView ? 'is-in' : ''}`}>
        {skills.map((s) => (
          <div key={s.group} className="skill-group">
            <p className="skill-title">{s.group}</p>
            <div className="chips">
              {s.items.map((item) => (
                // each chip pops in a little after the one before it
                <span key={item} className="chip" style={{ transitionDelay: `${n++ * 25}ms` }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Reveal className="extra">
        <div>
          <h2 className="section-label">Education</h2>
          <p className="strong">{education.degree}</p>
          <p className="muted">
            {education.school} · {education.year}
          </p>
        </div>
        <div>
          <h2 className="section-label">Languages</h2>
          <p className="muted">{languages.join(', ')}</p>
        </div>
      </Reveal>
    </section>
  )
}
