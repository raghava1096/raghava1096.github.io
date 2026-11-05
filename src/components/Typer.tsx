import { useEffect, useState } from 'react'
import { prefersReducedMotion } from '../hooks'

// types a word, waits, deletes it, moves to the next one
export default function Typer({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion()) {
      setText(words[0])
      return
    }

    const word = words[index]
    let delay = deleting ? 45 : 85

    if (!deleting && text === word) delay = 1600
    if (deleting && text === '') delay = 300

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true)
      } else if (deleting && text === '') {
        setDeleting(false)
        setIndex((index + 1) % words.length)
      } else {
        const next = deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)
        setText(next)
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [text, deleting, index, words])

  return (
    <span className="typer">
      <span className="typer-text">{text}</span>
      <span className="typer-caret" aria-hidden="true" />
      <span className="sr-only">{words.join(', ')}</span>
    </span>
  )
}
