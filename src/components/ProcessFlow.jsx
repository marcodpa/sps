import { useEffect, useState } from 'react'
import { useInView, useReducedMotion } from '../lib/animations'

const C = {
  PETRO: '#C5192D',
  AUTO: '#0057B8',
  CONN: '#3D8BE8',
  TELECOM: '#0EA5E9',
}

export default function ProcessFlow({ className = '' }) {
  const [ref, inView] = useInView({ once: true, amount: 0.2 })
  const reduce = useReducedMotion()
  const [show, setShow] = useState(false)

  useEffect(() => { if (inView) setShow(true) }, [inView])

  /* ── SVG DEFINITIONS ── */
  const arrowDefs = [
    { id: 'arrow-red', fill: C.PETRO },
    { id: 'arrow-blue', fill: C.AUTO },
    { id: 'arrow-sky', fill: C.TELECOM },
    { id: 'arrow-conn', fill: C.CONN },
  ].map(({ id, fill }) => (
    <marker key={id} id={id} viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 Z" fill={fill} />
    </marker>
  ))

  /* ── BOXES ── */
  const boxes = [
    { x: 2, y: 4, icon: '⛽', label: 'Pozo petrolero', sub: 'Extracción', stroke: C.PETRO, iconX: 9, iconY: 9, delay: 0 },
    { x: 22, y: 8, icon: '♨', label: 'Generador vapor', sub: '1.500 bbl/día', stroke: C.PETRO, iconX: 29, iconY: 13, delay: 0.15 },
    { x: 42, y: 22, icon: '⚗', label: 'Separación', sub: 'Crudo / Agua / Gas', stroke: C.PETRO, iconX: 49, iconY: 27, delay: 0.3 },
    { x: 62, y: 32, icon: '⚙', label: 'Automatización', sub: 'PLC · HMI · RTU', stroke: C.AUTO, iconX: 69, iconY: 37, delay: 0.45 },
    { x: 80, y: 34, icon: '📡', label: 'Telecomunicaciones', sub: 'Fibra · Radio', stroke: C.TELECOM, iconX: 87, iconY: 39, delay: 0.6 },
    { x: 42, y: 58, icon: '🛢', label: 'Almacenamiento', sub: 'Tanques de crudo', stroke: C.CONN, iconX: 50, iconY: 63, delay: 0.75 },
  ]

  /* ── PIPES ── */
  const pipes = [
    { x1: 36, y1: 22, x2: 48, y2: 34, color: C.PETRO, marker: 'url(#arrow-red)', delay: 0 },
    { x1: 56, y1: 36, x2: 62, y2: 40, color: C.AUTO, marker: 'url(#arrow-blue)', delay: 0.3 },
    { x1: 76, y1: 44, x2: 85, y2: 42, color: C.TELECOM, marker: 'url(#arrow-sky)', delay: 0.6 },
    { x1: 13, y1: 18, x2: 28, y2: 20, color: C.PETRO, marker: 'url(#arrow-red)', delay: 0 },
    { x1: 52, y1: 38, x2: 50, y2: 58, color: C.PETRO, marker: 'url(#arrow-red)', delay: 0.15 },
  ]

  return (
    <div ref={ref} className={`relative w-full overflow-hidden ${className}`}>
      <div className="relative rounded-2xl border border-white/10 bg-ink-900/60 backdrop-blur-sm p-6 sm:p-8 lg:p-10">
        {/* Corner LEDs */}
        <div className="absolute left-3 top-3 flex gap-2">
          <span className={`h-2 w-2 rounded-full transition-all duration-700 ${show ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]' : 'bg-steel-700'}`} />
          <span className={`h-2 w-2 rounded-full transition-all duration-700 delay-300 ${show ? 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]' : 'bg-steel-700'}`} />
          <span className="h-2 w-2 rounded-full bg-steel-700" />
        </div>

        {/* Header */}
        <div className="mb-6 sm:mb-8 mt-1 flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blueLight">P&amp;ID — SPS-001</span>
          <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          <span className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400">
            <span className={`h-1.5 w-1.5 rounded-full bg-emerald-400 ${show && !reduce ? 'animate-pulse' : ''}`} />
            SISTEMA ACTIVO
          </span>
        </div>

        {/* SVG */}
        <svg viewBox="0 0 100 80" className="w-full h-auto" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Diagrama de proceso SPS">
          <defs>{arrowDefs}
            <filter id="glow-red"><feGaussianBlur stdDeviation="1.5" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
          </defs>

          {/* Pipes */}
          {pipes.map((p, i) => (
            <line key={i} x1={p.x1} y1={p.y1} x2={p.x2} y2={p.y2} stroke={p.color} strokeWidth="1.2" strokeLinecap="round" strokeDasharray="1.5,3" markerEnd={p.marker}
              className={`transition-all duration-[1500ms] ease-linear ${show ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${p.delay}s`, filter: show && !reduce ? `drop-shadow(0 0 3px ${p.color})` : 'none' }} />
          ))}

          {/* Telecom → Storage curve */}
          <path d="M 88 48 Q 88 65 60 65" fill="none" stroke={C.CONN} strokeWidth="1" strokeDasharray="2,3" strokeLinecap="round" markerEnd="url(#arrow-conn)"
            className={`transition-opacity duration-800 ${show ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.9s' }} />
          <text x="78" y="60" className="fill-steel-500" fontSize="2.5" fontFamily="JetBrains Mono, monospace">Monitoreo remoto</text>

          {/* Boxes */}
          {boxes.map((b, i) => (
            <g key={i}>
              <rect x={b.x} y={b.y} width="14" height="14" rx="2" fill="none" stroke={b.stroke} strokeWidth="1.2"
                strokeDasharray="60"
                style={{
                  strokeDashoffset: show ? '0' : '60',
                  transition: `stroke-dashoffset 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${b.delay}s`,
                }} />
              <text x={b.iconX} y={b.iconY} textAnchor="middle" className="fill-white" fontSize="5">{b.icon}</text>
              <text x={b.iconX} y={b.iconY + 12} textAnchor="middle" className="fill-white" fontSize="3" fontFamily="Space Grotesk, sans-serif" fontWeight="700">{b.label}</text>
              <text x={b.iconX} y={b.iconY + 15.5} textAnchor="middle" className="fill-steel-400" fontSize="2.2" fontFamily="JetBrains Mono, monospace">{b.sub}</text>
            </g>
          ))}

          {/* Flow dot */}
          {show && !reduce && (
            <circle cx="20" cy="18" r="1" fill={C.PETRO} filter="url(#glow-red)">
              <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
            </circle>
          )}
        </svg>

        {/* Legend */}
        <div className="mt-4 sm:mt-6 flex flex-wrap gap-4 sm:gap-6">
          {[
            { color: C.PETRO, label: 'Petrolero' },
            { color: C.AUTO, label: 'Automatización' },
            { color: C.TELECOM, label: 'Telecomunicaciones' },
            { color: C.CONN, label: 'Conectividad' },
          ].map(({ color, label }) => (
            <div key={label} className="flex items-center gap-2">
              <span className="h-0.5 w-6 rounded" style={{ background: color }} />
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-steel-400">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}