import { buildWords, profile } from '../data'
import NodeField from './NodeField'
import Typer from './Typer'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <NodeField />
      <div className="hero-inner">
        <p className="eyebrow rise">
          <span className="live-dot" aria-hidden="true" />
          {profile.title} · {profile.location}
        </p>
        <h1 className="rise d1">
          Full-stack engineer, 9+ years.
          <br />
          I build <Typer words={buildWords} />
        </h1>
        <p className="lead rise d2">
          React, TypeScript, Node, Deno, Go and AWS. Right now I work on a healthcare scheduling and
          payroll platform at Introsort. Before that I spent close to five years on ZedControl at
          Zededa, a console that manages 10,000+ edge nodes.
        </p>
        <div className="hero-actions rise d3">
          <a href="#contact" className="btn btn-primary">
            Get in touch
          </a>
          <a href={profile.github} className="btn btn-outline" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} className="btn btn-outline" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
      <a href="#work" className="scroll-hint" aria-label="Scroll to work">
        <span />
      </a>
    </section>
  )
}
