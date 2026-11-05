import { useState } from 'react'
import { profile } from '../data'
import Reveal from './Reveal'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="section contact">
      <Reveal>
        <h2 className="contact-title">Say hello</h2>
        <p className="muted">Email is the fastest way to reach me.</p>
        <div className="contact-row">
          <button type="button" className="btn btn-primary" onClick={copyEmail}>
            {copied ? 'Copied ✓' : profile.email}
          </button>
          <a href={profile.linkedin} className="btn btn-outline" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.github} className="btn btn-outline" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </Reveal>
    </section>
  )
}
