import { useEffect, useState } from 'react'
import { useInView, useReducedMotion } from '../lib/animations'

export default function IndustrialGauge({
  value = 75,
  max = 100,
  label = 'PSI',
  unit = '',
  subtitle = '',
  thresholds = { warning: 65, danger: 85 },
  size = 200,
}) {
  const [ref, inView] = useInView({ once: true, amount: 0.5 })
  const reduce = useReducedMotion()
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setAnimated(true), 200)
      return () => clearTimeout(t)
    }
  }, [inView])

  const angle = reduce ? ((value / max) * 240 - 120) : (animated ? ((value / max) * 240 - 120) : -120)

  const cx = size / 2
  const cy = size / 2
  const r = size * 0.35
  const strokeW = size * 0.05

  const tickCount = 11
  const ticks = Array.from({ length: tickCount }, (_, i) => {
    const a = -120 + (240 / (tickCount - 1)) * i
    const rad = (a * Math.PI) / 180
    const inner = r - strokeW * 1.2
    const outer = i % 5 === 0 ? r + strokeW * 1.5 : r + strokeW * 0.3
    return { a, x1: cx + inner * Math.cos(rad), y1: cy + inner * Math.sin(rad), x2: cx + outer * Math.cos(rad), y2: cy + outer * Math.sin(rad), major: i % 5 === 0, label: i % 5 === 0 ? Math.round((max / (tickCount - 1)) * i) : null }
  })

  const displayVal = unit ? `${Math.round(value)} ${unit}` : Math.round(value)

  return (
    <div ref={ref} className="relative inline-flex flex-col items-center select-none">
      <svg width={size} height={size * 0.75} viewBox={`0 0 ${size} ${size * 0.75}`} className="overflow-visible">
        {/* Arc track */}
        <path d={describeArc(cx, cy, r, -120, 120)} fill="none" stroke="currentColor" className="text-white/8" strokeWidth={strokeW} strokeLinecap="round" />

        {/* Colored segments */}
        <path d={describeArc(cx, cy, r, -120, mapVal(thresholds.warning, 0, max, -120, 120))} fill="none" className="text-emerald-400" strokeWidth={strokeW} strokeLinecap="round" opacity={animated ? 0.7 : 0} style={{ transition: 'opacity 0.6s ease' }} />
        <path d={describeArc(cx, cy, r, mapVal(thresholds.warning, 0, max, -120, 120), mapVal(thresholds.danger, 0, max, -120, 120))} fill="none" className="text-amber-400" strokeWidth={strokeW} strokeLinecap="round" opacity={animated ? 0.7 : 0} style={{ transition: 'opacity 0.6s ease 0.15s' }} />
        <path d={describeArc(cx, cy, r, mapVal(thresholds.danger, 0, max, -120, 120), 120)} fill="none" className="text-brand-red" strokeWidth={strokeW} strokeLinecap="round" opacity={animated ? 0.7 : 0} style={{ transition: 'opacity 0.6s ease 0.3s' }} />

        {/* Tick marks */}
        {ticks.map((t, i) => (
          <g key={i}>
            <line x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} stroke="currentColor" className={t.major ? 'text-white/60' : 'text-white/25'} strokeWidth={t.major ? 1.5 : 0.8} strokeLinecap="round" />
            {t.label !== null && (
              <text x={cx + (r + strokeW * 2.8) * Math.cos((t.a * Math.PI) / 180)} y={cy + (r + strokeW * 2.8) * Math.sin((t.a * Math.PI) / 180)} textAnchor="middle" dominantBaseline="middle" className="fill-steel-400" fontSize={size * 0.045} fontFamily="JetBrains Mono, monospace">{t.label}</text>
            )}
          </g>
        ))}

        {/* Needle */}
        <line x1={cx} y1={cy + strokeW * 0.6} x2={cx} y2={cy - r + strokeW * 2.5} stroke="#C5192D" strokeWidth={2.5} strokeLinecap="round" style={{ transformOrigin: `${cx}px ${cy}px`, transform: `rotate(${angle}deg)`, transition: reduce ? 'none' : 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)' }} />
        <circle cx={cx} cy={cy} r={strokeW * 0.8} fill="#C5192D" />
        <circle cx={cx} cy={cy} r={strokeW * 0.3} fill="#060F1D" />
      </svg>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center pointer-events-none">
        <div className="font-mono text-xl font-bold text-white tabular-nums">{displayVal}</div>
        {label && <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-steel-400 mt-0.5">{label}</div>}
      </div>
      {subtitle && <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-steel-500 text-center">{subtitle}</div>}
    </div>
  )
}

function describeArc(cx, cy, r, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, r, endAngle)
  const end = polarToCartesian(cx, cy, r, startAngle)
  const largeArc = endAngle - startAngle > 180 ? 1 : 0
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y}`
}
function polarToCartesian(cx, cy, r, a) { const rad = ((a - 90) * Math.PI) / 180; return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) } }
function mapVal(v, iMin, iMax, oMin, oMax) { return ((v - iMin) / (iMax - iMin)) * (oMax - oMin) + oMin }