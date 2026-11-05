import { stats } from '../data'
import { useCountUp, useInView } from '../hooks'

function Stat({ value, prefix = '', suffix = '', label, start }: {
  value: number
  prefix?: string
  suffix?: string
  label: string
  start: boolean
}) {
  const n = useCountUp(value, start)
  return (
    <div className="stat">
      <p className="stat-value">
        {prefix}
        {n.toLocaleString('en-US')}
        {suffix}
      </p>
      <p className="stat-label">{label}</p>
    </div>
  )
}

export default function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>(0.4)
  return (
    <div ref={ref} className="stats">
      {stats.map((s) => (
        <Stat key={s.label} {...s} start={inView} />
      ))}
    </div>
  )
}
