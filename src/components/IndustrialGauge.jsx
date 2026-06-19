import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'

/**
 * IndustrialGauge — SVG arc gauge with animated needle, tick marks,
 * and digital readout. Triggers on scroll. Looks like a panel-mounted HMI gauge.
 */
export default function IndustrialGauge({
  value = 75,
  max = 100,
  label = 'PSI',
  unit = '',
  subtitle = '',
  thresholds = { warning: 65, danger: 85 },
  size = 200,
}) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const inView = useInView(ref, { once: true, amount: 0.5 })

  const mv = useMotionValue(0)
  const springVal = useSpring(mv, { stiffness: 50, damping: 15 })
  const needleAngle = useTransform(springVal, [0, max], [-120, 120])

  useEffect(() => {
    if (inView && !reduce) mv.set(value)
  }, [inView, value, reduce, mv])

  const cx = size / 2
  const cy = size / 2
  const r = size * 0.35
  const strokeW = size * 0.05

  const tickCount = 11
  const ticks = Array.from({ length: tickCount }, (_, i) => {
    const angle = -120 + (240 / (tickCount - 1)) * i
    const rad = (angle * Math.PI) / 180
    const inner = r - strokeW * 1.2
    const outer = i % 5 === 0 ? r + strokeW * 1.5 : r + strokeW * 0.3
    return {
      angle,
      x1: cx + inner * Math.cos(rad),
      y1: cy + inner * Math.sin(rad),
      x2: cx + outer * Math.cos(rad),
      y2: cy + outer * Math.sin(rad),
      major: i % 5 === 0,
      label: i % 5 === 0 ? Math.round((max / (tickCount - 1)) * i) : null,
    }
  })

  const displayVal = unit ? `${Math.round(springVal.get())} ${unit}` : Math.round(springVal.get())

  return (
    <div ref={ref} className="relative inline-flex flex-col items-center select-none">
      <svg
        width={size}
        height={size * 0.75}
        viewBox={`0 0 ${size} ${size * 0.75}`}
        className="overflow-visible"
      >
        {/* Arc track */}
        <path
          d={describeArc(cx, cy, r, -120, 120)}
          fill="none"
          stroke="currentColor"
          className="text-white/8"
          strokeWidth={strokeW}
          strokeLinecap="round"
        />

        {/* Colored segments */}
        <path
          d={describeArc(cx, cy, r, -120, mapVal(thresholds.warning, 0, max, -120, 120))}
          fill="none"
          className="text-emerald-400"
          strokeWidth={strokeW}
          strokeLinecap="round"
          opacity={0.7}
        />
        <path
          d={describeArc(
            cx,
            cy,
            r,
            mapVal(thresholds.warning, 0, max, -120, 120),
            mapVal(thresholds.danger, 0, max, -120, 120),
          )}
          fill="none"
          className="text-amber-400"
          strokeWidth={strokeW}
          strokeLinecap="round"
          opacity={0.7}
        />
        <path
          d={describeArc(cx, cy, r, mapVal(thresholds.danger, 0, max, -120, 120), 120)}
          fill="none"
          className="text-brand-red"
          strokeWidth={strokeW}
          strokeLinecap="round"
          opacity={0.7}
        />

        {/* Tick marks */}
        {ticks.map((t, i) => (
          <g key={i}>
            <line
              x1={t.x1}
              y1={t.y1}
              x2={t.x2}
              y2={t.y2}
              stroke="currentColor"
              className={t.major ? 'text-white/60' : 'text-white/25'}
              strokeWidth={t.major ? 1.5 : 0.8}
              strokeLinecap="round"
            />
            {t.label !== null && (
              <text
                x={cx + (r + strokeW * 2.8) * Math.cos((t.angle * Math.PI) / 180)}
                y={cy + (r + strokeW * 2.8) * Math.sin((t.angle * Math.PI) / 180)}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-steel-400"
                fontSize={size * 0.045}
                fontFamily="JetBrains Mono, monospace"
              >
                {t.label}
              </text>
            )}
          </g>
        ))}

        {/* Needle */}
        <g
          style={{
            transformOrigin: `${cx}px ${cy}px`,
            transform: `rotate(${reduce ? mapVal(value, 0, max, -120, 120) : 0}deg)`,
          }}
        >
          <motion.g
            style={{ rotate: reduce ? 0 : needleAngle }}
            transition={{ type: 'spring', stiffness: 30, damping: 10 }}
          >
            <line
              x1={cx}
              y1={cy + strokeW * 0.6}
              x2={cx}
              y2={cy - r + strokeW * 2.5}
              stroke="#C5192D"
              strokeWidth={2.5}
              strokeLinecap="round"
            />
            <circle cx={cx} cy={cy} r={strokeW * 0.8} fill="#C5192D" />
            <circle cx={cx} cy={cy} r={strokeW * 0.3} fill="#060F1D" />
          </motion.g>
        </g>
      </svg>

      {/* Digital readout */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center pointer-events-none">
        <motion.div className="font-mono text-xl font-bold text-white tabular-nums">
          {displayVal}
        </motion.div>
        {label && (
          <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-steel-400 mt-0.5">
            {label}
          </div>
        )}
      </div>

      {subtitle && (
        <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-steel-500 text-center">
          {subtitle}
        </div>
      )}
    </div>
  )
}

/* ── Helpers ── */

function describeArc(cx, cy, r, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, r, endAngle)
  const end = polarToCartesian(cx, cy, r, startAngle)
  const largeArc = endAngle - startAngle > 180 ? 1 : 0
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y}`
}

function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
}

function mapVal(val, inMin, inMax, outMin, outMax) {
  return ((val - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin
}