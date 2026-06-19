import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'
import { Gauge, WifiHigh, Thermometer, DropHalf } from '@phosphor-icons/react'

/**
 * HUDTelemetry — A SCADA/HMI-style panel that displays real-time-ish
 * telemetry data with blinking indicators, progress bars, and a
 * technical aesthetic. Triggered on scroll.
 */
const metrics = [
  { icon: Thermometer, label: 'TEMP VAPOR', value: '328', unit: '°C', status: 'ok' },
  { icon: Gauge, label: 'PRESIÓN LÍNEA', value: '1,840', unit: 'PSI', status: 'ok' },
  { icon: DropHalf, label: 'CAUDAL INYECCIÓN', value: '62.5', unit: 'BPM', status: 'warning' },
  { icon: WifiHigh, label: 'ENLACE SCADA', value: '99.7', unit: '%', status: 'ok' },
]

export default function HUDTelemetry({ className = '' }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Panel frame */}
      <div className="relative rounded-xl border border-white/10 bg-ink-900/80 backdrop-blur-sm overflow-hidden">
        {/* Scan line overlay */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-10"
          animate={inView && !reduce ? { backgroundPosition: ['0 0', '0 100%'] } : {}}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,87,184,0.03) 2px, rgba(0,87,184,0.03) 4px)',
            backgroundSize: '100% 4px',
          }}
        />

        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-white/5 px-4 py-2.5 bg-ink-950/60">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.5)]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-emerald-400/80">
              SCADA — MONITOREO EN VIVO
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <motion.span
              animate={inView && !reduce ? { opacity: [1, 0.3, 1] } : {}}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="font-mono text-[9px] text-steel-500"
            >
              ● EN LÍNEA
            </motion.span>
          </div>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-white/5">
          {metrics.map(({ icon: Icon, label, value, unit, status }, i) => (
            <motion.div
              key={label}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i, ease: 'easeOut' }}
              className="relative p-4 sm:p-5"
            >
              {/* Status dot */}
              <div className="absolute right-3 top-3 flex items-center gap-1.5">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    status === 'warning' ? 'bg-amber-400 animate-pulse' : 'bg-emerald-400'
                  }`}
                />
                <span className="font-mono text-[8px] uppercase text-steale-600">
                  {status === 'warning' ? 'ALERTA' : 'OK'}
                </span>
              </div>

              {/* Icon */}
              <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-lg bg-white/5">
                <Icon size={14} className="text-brand-blueLight" />
              </div>

              {/* Value */}
              <div className="font-mono text-xl sm:text-2xl font-bold text-white tabular-nums tracking-tight">
                {value}
                <span className="text-sm font-normal text-steel-400 ml-0.5">{unit}</span>
              </div>

              {/* Label */}
              <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-steel-500">
                {label}
              </div>

              {/* Mini progress bar */}
              <div className="mt-2 h-0.5 w-full rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${
                    status === 'warning' ? 'bg-amber-400' : 'bg-emerald-400/60'
                  }`}
                  initial={{ width: '0%' }}
                  animate={inView ? { width: status === 'warning' ? '76%' : ['0%', '92%', '88%'] } : {}}
                  transition={{ duration: 1.5, delay: 0.3 + 0.1 * i, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer status bar */}
        <div className="flex items-center justify-between border-t border-white/5 px-4 py-1.5 bg-ink-950/40">
          <span className="font-mono text-[8px] text-steel-600 tracking-wider">
            ULTIMA ACTUALIZACIÓN: {new Date().toLocaleTimeString('es-VE', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </span>
          <span className="font-mono text-[8px] text-steel-600 tracking-wider">
            SPS-CONTROL-001
          </span>
        </div>
      </div>
    </div>
  )
}