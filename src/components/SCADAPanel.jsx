import { useRef } from 'react'
import { useInView, useReducedMotion, motion } from 'motion/react'

/**
 * SCADAPanel — Replaces the simple stats grid with an industrial
 * HMI/SCADA dashboard panel showing operational telemetry.
 */
const telemetryData = [
  {
    label: 'INYECCIÓN DIARIA',
    value: '1,500',
    unit: 'BBL',
    target: '1,500',
    status: 'nominal',
    barPct: 100,
    sub: 'Campo Boscán',
  },
  {
    label: 'CUMPLIMIENTO',
    value: '100',
    unit: '%',
    target: '100',
    status: 'nominal',
    barPct: 100,
    sub: 'Contratos ejecutados',
  },
  {
    label: 'PAÍSES CON PROYECTOS',
    value: '5',
    unit: '',
    target: '7',
    status: 'growing',
    barPct: 71,
    sub: 'Operaciones activas',
  },
  {
    label: 'TRAYECTORIA',
    value: '7+',
    unit: 'AÑOS',
    target: '10',
    status: 'nominal',
    barPct: 70,
    sub: 'Sector petrolero',
  },
]

export default function SCADAPanel({ className = '' }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div ref={ref} className={className}>
      <div className="relative rounded-2xl border border-white/10 bg-ink-900/60 backdrop-blur-sm overflow-hidden">
        {/* Scanline overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-30"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,87,184,0.04) 2px, rgba(0,87,184,0.04) 4px)',
            backgroundSize: '100% 4px',
          }}
        />

        {/* Panel header */}
        <div className="flex items-center justify-between border-b border-white/5 px-5 py-3 bg-ink-950/50">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-brand-blueLight">
              PANEL DE CONTROL — OPERACIONES
            </span>
          </div>
          <div className="flex items-center gap-2">
            <motion.span
              animate={inView && !reduce ? { opacity: [1, 0.3, 1] } : {}}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-emerald-400"
            />
            <span className="font-mono text-[9px] text-emerald-400/70 tracking-wider uppercase">
              Sistema operativo
            </span>
          </div>
        </div>

        {/* Telemetry grid — 2x2 for industrial panel feel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 divide-x-0 sm:divide-x divide-y sm:divide-y-0 divide-white/5">
          {telemetryData.map((d, i) => (
            <div key={d.label} className="relative p-5 sm:p-6 lg:p-7">
              {/* Row label */}
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-steel-500">
                  {d.label}
                </span>
                {d.target && (
                  <span className="font-mono text-[8px] text-steel-600">
                    META: {d.target}{d.unit}
                  </span>
                )}
              </div>

              {/* Value display */}
              <div className="flex items-baseline gap-1.5 mb-1">
                <motion.span
                  className="font-mono text-3xl sm:text-4xl font-bold text-white tabular-nums tracking-tight"
                  initial={false}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                >
                  {d.value}
                </motion.span>
                {d.unit && (
                  <span className="font-mono text-sm text-steel-400">{d.unit}</span>
                )}
              </div>

              {/* Progress bar */}
              <div className="mt-3 h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: d.status === 'growing'
                      ? 'linear-gradient(90deg, #0057B8, #3D8BE8)'
                      : 'linear-gradient(90deg, #C5192D, #E23B4E)',
                  }}
                  initial={{ width: '0%' }}
                  animate={inView ? { width: `${d.barPct}%` } : {}}
                  transition={{ duration: 1.2, delay: 0.3 + 0.1 * i, ease: 'easeOut' }}
                />
              </div>

              {/* Subtitle */}
              <div className="mt-2 flex items-center gap-2">
                <span className="font-mono text-[10px] text-stele-500">{d.sub}</span>
                {d.status === 'nominal' && (
                  <span className="font-mono text-[8px] text-emerald-400/60">● NOMINAL</span>
                )}
                {d.status === 'growing' && (
                  <motion.span
                    animate={inView && !reduce ? { opacity: [1, 0.4, 1] } : {}}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="font-mono text-[8px] text-amber-400/60"
                  >
                    ● EN CRECIMIENTO
                  </motion.span>
                )}
              </div>

              {/* Divider for internal cells */}
              {i < telemetryData.length - 1 && (
                <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-white/5 hidden sm:block" />
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-white/5 px-5 py-2 bg-ink-950/40">
          <span className="font-mono text-[8px] text-steel-600 tracking-wider">
            SPS-DASH-001 | ÚLTIMA SINCRONIZACIÓN: {new Date().toLocaleTimeString('es-VE')}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-emerald-400" />
            <span className="font-mono text-[8px] text-steel-600">ALL SYSTEMS NOMINAL</span>
          </span>
        </div>
      </div>
    </div>
  )
}