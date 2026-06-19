import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useInView, useReducedMotion, motion } from 'framer-motion'
import { ArrowUpRight } from '@phosphor-icons/react'

/**
 * PLCModule — Service card styled as an industrial PLC module.
 * Features: DIN-rail visual, LED indicators, terminal strip, module ID.
 */
export default function PLCModule({
  icon: Icon,
  title,
  desc,
  tag,
  to = '#',
  color = 'blue',
  moduleId = 'SPS-000',
  status = 'online',
  features = [],
  className = '',
}) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const inView = useInView(ref, { once: true, amount: 0.3 })

  const isRed = color === 'red'
  const accentColor = isRed ? '#C5192D' : '#0057B8'
  const accentLight = isRed ? 'rgba(197,25,45,0.1)' : 'rgba(0,87,184,0.1)'
  const accentBorder = isRed ? 'border-brand-red/20' : 'border-brand-blue/20'

  return (
    <Link to={to} className={`block h-full ${className}`}>
      <motion.div
        ref={ref}
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="group relative h-full rounded-xl border border-white/10 bg-ink-900/70 backdrop-blur-sm overflow-hidden hover:-translate-y-0.5 transition-all duration-300"
      >
        {/* DIN-rail top strip */}
        <div className="flex items-center gap-2 border-b border-white/5 bg-ink-950/60 px-3 py-2">
          {/* Module slot label */}
          <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-steel-500">
            {moduleId}
          </span>
          <span className="h-px flex-1 bg-white/5" />
          {/* Status LEDs */}
          <div className="flex items-center gap-1.5">
            <motion.span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: accentColor, boxShadow: `0 0 4px ${accentColor}` }}
              animate={!reduce ? { opacity: [1, 0.3, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="font-mono text-[8px] uppercase text-steel-500 tracking-wider">
              {status}
            </span>
          </div>
        </div>

        {/* Module body */}
        <div className="p-5 sm:p-6">
          {/* Icon + Title row */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg"
                style={{ background: accentLight }}
              >
                <Icon size={20} style={{ color: accentColor }} />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">{title}</h3>
                <span
                  className="font-mono text-[9px] uppercase tracking-[0.15em]"
                  style={{ color: accentColor }}
                >
                  {tag}
                </span>
              </div>
            </div>
            <ArrowUpRight
              size={16}
              className="text-steel-500 transition-all duration-200 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shrink-0 mt-1"
            />
          </div>

          {/* Description */}
          <p className="text-sm text-steel-400 leading-relaxed mb-4">{desc}</p>

          {/* Feature list — styled as terminal labels */}
          {features.length > 0 && (
            <div className="space-y-1.5">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <span
                    className="h-1 w-1 rounded-full shrink-0"
                    style={{ background: accentColor, opacity: 0.5 }}
                  />
                  <span className="text-xs text-stele-500 font-mono">{f}</span>
                </div>
              ))}
            </div>
          )}

          {/* Bottom indicator — Terminal strip visual */}
          <div className="mt-4 flex gap-1">
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className="h-3 flex-1 rounded-sm opacity-30 group-hover:opacity-60 transition-opacity"
                style={{ background: accentColor }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  )
}