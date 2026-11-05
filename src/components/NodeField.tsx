import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../hooks'

// background for the hero: a small "edge fleet" of nodes that drift,
// link up when close, and send packets along the links.

type Node = { x: number; y: number; vx: number; vy: number; r: number }
type Packet = { a: number; b: number; t: number; speed: number }

const LINK_DIST = 140
const MOUSE_DIST = 160

export default function NodeField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    const still = prefersReducedMotion()

    let w = 0
    let h = 0
    let nodes: Node[] = []
    let packets: Packet[] = []
    let frame = 0
    let visible = true
    const mouse = { x: -9999, y: -9999 }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      // fewer nodes on small screens
      const count = Math.round(Math.min(80, Math.max(28, (w * h) / 14000)))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: 1.5 + Math.random() * 1.8,
      }))
      packets = []
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < LINK_DIST) {
            ctx.strokeStyle = `rgba(29, 78, 216, ${0.24 * (1 - d / LINK_DIST)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // nodes, brighter near the mouse
      for (const n of nodes) {
        const md = Math.hypot(n.x - mouse.x, n.y - mouse.y)
        const near = md < MOUSE_DIST ? 1 - md / MOUSE_DIST : 0
        ctx.fillStyle = `rgba(29, 78, 216, ${0.45 + near * 0.5})`
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r + near * 2, 0, Math.PI * 2)
        ctx.fill()

        if (near > 0) {
          ctx.strokeStyle = `rgba(29, 78, 216, ${near * 0.35})`
          ctx.beginPath()
          ctx.moveTo(n.x, n.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }
      }

      // packets travelling along links
      for (const p of packets) {
        const a = nodes[p.a]
        const b = nodes[p.b]
        const x = a.x + (b.x - a.x) * p.t
        const y = a.y + (b.y - a.y) * p.t
        ctx.fillStyle = 'rgba(37, 99, 235, 0.9)'
        ctx.shadowColor = 'rgba(37, 99, 235, 0.8)'
        ctx.shadowBlur = 8
        ctx.beginPath()
        ctx.arc(x, y, 2.4, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    const step = () => {
      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1
      }

      // start a new packet now and then between two linked nodes
      if (packets.length < 6 && Math.random() < 0.04) {
        const a = Math.floor(Math.random() * nodes.length)
        let best = -1
        let bestD = LINK_DIST
        for (let j = 0; j < nodes.length; j++) {
          if (j === a) continue
          const d = Math.hypot(nodes[a].x - nodes[j].x, nodes[a].y - nodes[j].y)
          if (d < bestD) {
            bestD = d
            best = j
          }
        }
        if (best >= 0) packets.push({ a, b: best, t: 0, speed: 0.012 + Math.random() * 0.01 })
      }

      packets.forEach((p) => (p.t += p.speed))
      packets = packets.filter((p) => p.t < 1)
    }

    const loop = () => {
      if (visible) {
        step()
        draw()
      }
      frame = requestAnimationFrame(loop)
    }

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    // stop drawing when the hero is off screen
    const obs = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting))
    obs.observe(canvas)

    resize()
    if (still) {
      draw()
    } else {
      frame = requestAnimationFrame(loop)
    }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(frame)
      obs.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="node-field" aria-hidden="true" />
}
