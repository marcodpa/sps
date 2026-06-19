import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'
import { EASE } from '../lib/motion'

/**
 * ProcessFlow — Animated P&ID-style process diagram showing SPS's
 * four service lines: Petrolero → Automatización → Conectividad → Telecom.
 *
 * SVG is fully responsive and animates on scroll: flowing pipelines,
 * blinking indicators, and sequential reveals.
 */
const LINE_COLOR_PETRO = '#C5192D'
const LINE_COLOR_AUTO = '#0057B8'
const LINE_COLOR_CONN = '#3D8BE8'
const LINE_COLOR_TELECOM = '#0EA5E9'

const steps = [
  {
    id: 'well',
    x: 8,
    label: 'Pozo petrolero',
    sub: 'Extracción de crudo',
    icon: '⛽',
    lines: [
      { to: 'steam', color: LINE_COLOR_PETRO, label: 'Inyección de vapor' },
    ],
  },
  {
    id: 'steam',
    x: 28,
    label: 'Generador de vapor',
    sub: '1.500 bbl/día',
    icon: '♨',
    lines: [
      { to: 'recovery', color: LINE_COLOR_PETRO, label: 'Recuperación' },
    ],
  },
  {
    id: 'recovery',
    x: 48,
    label: 'Separación',
    sub: 'Crudo / Agua / Gas',
    icon: '⚗',
    lines: [
      { to: 'automation', color: LINE_COLOR_AUTO, label: 'PLC / SCADA' },
      { to: 'storage', color: LINE_COLOR_PETRO, label: 'Almacenamiento' },
    ],
  },
  {
    id: 'automation',
    x: 68,
    label: 'Automatización',
    sub: 'PLC · HMI · RTU · DCS',
    icon: '⚙',
    lines: [
      { to: 'telecom', color: LINE_COLOR_TELECOM, label: 'Telemetría' },
    ],
  },
  {
    id: 'telecom',
    x: 85,
    label: 'Telecomunicaciones',
    sub: 'Fibra · Radio · Redes',
    icon: '📡',
    lines: [
      { to: 'storage', color: LINE_COLOR_CONN, label: 'Monitoreo remoto' },
    ],
  },
  {
    id: 'storage',
    x: 50,
    y: 68,
    label: 'Almacenamiento',
    sub: 'Tanques de crudo',
    icon: '🛢',
    lines: [],
  },
]

export default function ProcessFlow({ className = '' }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div ref={ref} className={`relative w-full overflow-hidden ${className}`}>
      {/* Background panel frame */}
      <div className="relative rounded-2xl border border-white/10 bg-ink-900/60 backdrop-blur-sm p-6 sm:p-8 lg:p-10">
        {/* Corner LEDs */}
        <div className="absolute left-3 top-3 flex gap-2">
          <span className={`h-2 w-2 rounded-full ${inView ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]' : 'bg-steel-700'} transition-all duration-700`} />
          <span className={`h-2 w-2 rounded-full ${inView ? 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]' : 'bg-steel-700'} transition-all duration-700 delay-300`} />
          <span className={`h-2 w-2 rounded-full bg-steel-700`} />
        </div>

        {/* Header label */}
        <div className="mb-6 sm:mb-8 mt-1 flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blueLight">
            P&amp;ID — SPS-001
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          <motion.span
            animate={inView && !reduce ? { opacity: [1, 0.3, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            SISTEMA ACTIVO
          </motion.span>
        </div>

        {/* SVG Diagram */}
        <svg
          viewBox="0 0 100 80"
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label="Diagrama de proceso SPS"
        >
          <defs>
            <marker id="arrow-red" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 Z" fill={LINE_COLOR_PETRO} />
            </marker>
            <marker id="arrow-blue" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 Z" fill={LINE_COLOR_AUTO} />
            </marker>
            <marker id="arrow-sky" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 Z" fill={LINE_COLOR_TELECOM} />
            </marker>
            <marker id="arrow-conn" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 Z" fill={LINE_COLOR_CONN} />
            </marker>
            <filter id="glow-red">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="glow-blue">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Connection lines with animated flow */}
          {/* Steam → Recovery */}
          <AnimatedPipe
            x1={36} y1={22} x2={48} y2={34}
            color={LINE_COLOR_PETRO}
            inView={inView}
            reduce={reduce}
            marker="url(#arrow-red)"
            dashArray="1.5,3"
          />

          {/* Recovery → Automation */}
          <AnimatedPipe
            x1={56} y1={36} x2={62} y2={40}
            color={LINE_COLOR_AUTO}
            inView={inView}
            reduce={reduce}
            marker="url(#arrow-blue)"
            dashArray="1.5,3"
            delay={0.3}
          />

          {/* Automation → Telecom */}
          <AnimatedPipe
            x1={76} y1={44} x2={85} y2={42}
            color={LINE_COLOR_TELECOM}
            inView={inView}
            reduce={reduce}
            marker="url(#arrow-sky)"
            dashArray="1.5,3"
            delay={0.6}
          />

          {/* Well → Steam */}
          <AnimatedPipe
            x1={13} y1={18} x2={28} y2={20}
            color={LINE_COLOR_PETRO}
            inView={inView}
            reduce={reduce}
            marker="url(#arrow-red)"
            dashArray="1.5,3"
          />

          {/* Recovery → Storage (downwards) */}
          <AnimatedPipe
            x1={52} y1={38} x2={50} y2={58}
            color={LINE_COLOR_PETRO}
            inView={inView}
            reduce={reduce}
            marker="url(#arrow-red)"
            dashArray="1.5,3"
            delay={0.15}
          />

          {/* Telecom → Storage (curve) */}
          <path
            d="M 88 48 Q 88 65 60 65"
            fill="none"
            stroke={LINE_COLOR_CONN}
            strokeWidth="1"
            strokeDasharray="2,3"
            strokeLinecap="round"
            markerEnd="url(#arrow-conn)"
            className={inView ? 'opacity-100' : 'opacity-0'}
            style={{
              transition: 'opacity 0.8s ease',
              transitionDelay: '0.9s',
            }}
          />
          <text x="78" y="60" className="fill-steel-500" fontSize="2.5" fontFamily="JetBrains Mono, monospace">
            Monitoreo remoto
          </text>

          {/* Node boxes */}
          {/* Well */}
          <g>
            <motion.rect
              x="2" y="4" width="14" height="14" rx="2"
              fill="none" stroke="#C5192D" strokeWidth="1.2"
              initial={reduce ? false : { strokeDashoffset: 60 }}
              animate={inView ? { strokeDashoffset: 0 } : {}}
              transition={{ duration: 0.8, ease: EASE }}
              strokeDasharray="60"
            />
            <text x="9" y="9" textAnchor="middle" className="fill-white" fontSize="5">⛽</text>
            <text x="9" y="21" textAnchor="middle" className="fill-white" fontSize="3" fontFamily="Space Grotesk, sans-serif" fontWeight="700">Pozo petrolero</text>
            <text x="9" y="24.5" textAnchor="middle" className="fill-steel-400" fontSize="2.2" fontFamily="JetBrains Mono, monospace">Extracción</text>
          </g>

          {/* Steam Generator */}
          <g>
            <motion.rect
              x="22" y="8" width="14" height="14" rx="2"
              fill="none" stroke="#C5192D" strokeWidth="1.2"
              initial={reduce ? false : { strokeDashoffset: 60 }}
              animate={inView ? { strokeDashoffset: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
              strokeDasharray="60"
            />
            <text x="29" y="13" textAnchor="middle" className="fill-white" fontSize="5">♨</text>
            <text x="29" y="25" textAnchor="middle" className="fill-white" fontSize="3" fontFamily="Space Grotesk, sans-serif" fontWeight="700">Generador vapor</text>
            <text x="29" y="28.5" textAnchor="middle" className="fill-steel-400" fontSize="2.2" fontFamily="JetBrains Mono, monospace">1.500 bbl/día</text>
          </g>

          {/* Separation */}
          <g>
            <motion.rect
              x="42" y="22" width="14" height="14" rx="2"
              fill="none" stroke="#C5192D" strokeWidth="1.2"
              initial={reduce ? false : { strokeDashoffset: 60 }}
              animate={inView ? { strokeDashoffset: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
              strokeDasharray="60"
            />
            <text x="49" y="27" textAnchor="middle" className="fill-white" fontSize="5">⚗</text>
            <text x="49" y="39" textAnchor="middle" className="fill-white" fontSize="3" fontFamily="Space Grotesk, sans-serif" fontWeight="700">Separación</text>
            <text x="49" y="42.5" textAnchor="middle" className="fill-steel-400" fontSize="2.2" fontFamily="JetBrains Mono, monospace">Crudo / Agua / Gas</text>
          </g>

          {/* Automation */}
          <g>
            <motion.rect
              x="62" y="32" width="14" height="14" rx="2"
              fill="none" stroke="#0057B8" strokeWidth="1.2"
              initial={reduce ? false : { strokeDashoffset: 60 }}
              animate={inView ? { strokeDashoffset: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
              strokeDasharray="60"
            />
            <text x="69" y="37" textAnchor="middle" className="fill-white" fontSize="5">⚙</text>
            <text x="69" y="49" textAnchor="middle" className="fill-white" fontSize="3" fontFamily="Space Grotesk, sans-serif" fontWeight="700">Automatización</text>
            <text x="69" y="52.5" textAnchor="middle" className="fill-steel-400" fontSize="2.2" fontFamily="JetBrains Mono, monospace">PLC · HMI · RTU</text>
          </g>

          {/* Telecom */}
          <g>
            <motion.rect
              x="80" y="34" width="14" height="14" rx="2"
              fill="none" stroke="#0EA5E9" strokeWidth="1.2"
              initial={reduce ? false : { strokeDashoffset: 60 }}
              animate={inView ? { strokeDashoffset: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
              strokeDasharray="60"
            />
            <text x="87" y="39" textAnchor="middle" className="fill-white" fontSize="5">📡</text>
            <text x="87" y="51" textAnchor="middle" className="fill-white" fontSize="3" fontFamily="Space Grotesk, sans-serif" fontWeight="700">Telecomunicaciones</text>
            <text x="87" y="54.5" textAnchor="middle" className="fill-steel-400" fontSize="2.2" fontFamily="JetBrains Mono, monospace">Fibra · Radio</text>
          </g>

          {/* Storage */}
          <g>
            <motion.rect
              x="42" y="58" width="16" height="14" rx="2"
              fill="none" stroke="#3D8BE8" strokeWidth="1.2"
              initial={reduce ? false : { strokeDashoffset: 60 }}
              animate={inView ? { strokeDashoffset: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.75, ease: EASE }}
              strokeDasharray="60"
            />
            <text x="50" y="63" textAnchor="middle" className="fill-white" fontSize="5">🛢</text>
            <text x="50" y="75" textAnchor="middle" className="fill-white" fontSize="3" fontFamily="Space Grotesk, sans-serif" fontWeight="700">Almacenamiento</text>
            <text x="50" y="78.5" textAnchor="middle" className="fill-steel-400" fontSize="2.2" fontFamily="JetBrains Mono, monospace">Tanques de crudo</text>
          </g>

          {/* Flow direction arrows on pipes */}
          <motion.g
            animate={inView && !reduce ? { opacity: [0, 1, 0] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          >
            {/* Flow dots along pipes */}
            <circle cx="20" cy="18" r="1" fill={LINE_COLOR_PETRO} filter="url(#glow-red)" />
          </motion.g>
        </svg>

        {/* Bottom legend */}
        <div className="mt-4 sm:mt-6 flex flex-wrap gap-4 sm:gap-6">
          {[
            { color: LINE_COLOR_PETRO, label: 'Petrolero' },
            { color: LINE_COLOR_AUTO, label: 'Automatización' },
            { color: LINE_COLOR_TELECOM, label: 'Telecomunicaciones' },
            { color: LINE_COLOR_CONN, label: 'Conectividad' },
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

/* ── Animated pipe SVG path ── */

function AnimatedPipe({ x1, y1, x2, y2, color, inView, reduce, marker, dashArray = '2,3', delay = 0 }) {
  return (
    <motion.line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeDasharray={dashArray}
      markerEnd={marker}
      initial={reduce ? false : { strokeDashoffset: -100 }}
      animate={inView ? { strokeDashoffset: 0 } : {}}
      transition={{
        duration: 1.5,
        delay,
        ease: 'linear',
        repeat: reduce ? 0 : Infinity,
        repeatDelay: 1,
      }}
      style={inView && !reduce ? { filter: `drop-shadow(0 0 3px ${color})` } : {}}
    />
  )
}