import { useEffect, useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'

/**
 * OscilloWave — Animated SVG oscilloscope-style wave that runs
 * continuously. Used as a decorative HUD element.
 */
export function OscilloWave({ className = '', color = '#3D8BE8' }) {
  const pathRef = useRef(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce || !pathRef.current) return
    const path = pathRef.current
    const length = path.getTotalLength()
    path.style.strokeDasharray = `${length}`
    path.style.strokeDashoffset = `${length}`
    const animate = () => {
      path.style.transition = 'stroke-dashoffset 3s ease-in-out'
      path.style.strokeDashoffset = '0'
      setTimeout(() => {
        path.style.transition = 'stroke-dashoffset 2s ease-in-out'
        path.style.strokeDashoffset = `${length}`
      }, 3000)
    }
    animate()
    const interval = setInterval(animate, 6000)
    return () => clearInterval(interval)
  }, [reduce])

  return (
    <svg
      viewBox="0 0 200 40"
      className={`w-full h-full ${className}`}
      preserveAspectRatio="none"
    >
      <path
        ref={pathRef}
        d="M 0 20 Q 25 5, 50 20 T 100 20 T 150 20 T 200 20"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        opacity="0.6"
        strokeLinecap="round"
      />
      {/* Ghost trace */}
      <path
        d="M 0 20 Q 25 5, 50 20 T 100 20 T 150 20 T 200 20"
        fill="none"
        stroke={color}
        strokeWidth="3"
        opacity="0.15"
        strokeLinecap="round"
      />
    </svg>
  )
}

/**
 * RadarSweep — Animated circular radar/sonar sweep indicator.
 */
export function RadarSweep({ className = '' }) {
  const reduce = useReducedMotion()
  return (
    <svg viewBox="0 0 80 80" className={`${className}`}>
      {/* Rings */}
      {[28, 38, 48].map((r) => (
        <circle
          key={r}
          cx="40" cy="40" r={r}
          fill="none"
          stroke="rgba(61, 139, 232, 0.12)"
          strokeWidth="0.5"
        />
      ))}
      {/* Crosshairs */}
      <line x1="40" y1="10" x2="40" y2="70" stroke="rgba(61, 139, 232, 0.08)" strokeWidth="0.5" />
      <line x1="10" y1="40" x2="70" y2="40" stroke="rgba(61, 139, 232, 0.08)" strokeWidth="0.5" />
      {/* Sweep wedge */}
      <motion.path
        d="M 40 40 L 70 15 A 38 38 0 0 1 76 40 Z"
        fill="rgba(61, 139, 232, 0.06)"
        animate={reduce ? {} : { rotate: [0, 360] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '40px 40px' }}
      />
      {/* Center dot */}
      <circle cx="40" cy="40" r="2" fill="#3D8BE8" opacity="0.6" />
    </svg>
  )
}

/**
 * IndustrialDiagram — Full animated SVG illustration for the hero panel.
 * Shows an oil well cross-section with steam injection.
 */
export function IndustrialHeroDiagram({ className = '' }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Control panel frame */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/60 backdrop-blur-sm">
        {/* Top bar */}
        <div className="flex items-center gap-2 border-b border-white/5 px-3 py-2 bg-ink-950/60">
          <span className="h-2 w-2 rounded-full bg-brand-red shadow-[0_0_6px_rgba(197,25,45,0.5)]" />
          <span className="h-2 w-2 rounded-full bg-amber-400/60" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/60" />
          <span className="ml-2 font-mono text-[9px] uppercase tracking-[0.15em] text-steel-500">
            SPS — MONITOR DE PROCESO
          </span>
        </div>

        {/* Main illustration */}
        <svg
          viewBox="0 0 320 260"
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="well-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#060F1D" />
              <stop offset="50%" stopColor="#1a2a4a" />
              <stop offset="100%" stopColor="#060F1D" />
            </linearGradient>
            <filter id="glow-orange">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Background grid */}
          <pattern id="grid-small" width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M 16 0 L 0 0 0 16" fill="none" stroke="rgba(61, 139, 232, 0.04)" strokeWidth="0.5" />
          </pattern>
          <rect width="320" height="260" fill="url(#grid-small)" />

          {/* Ground cross-section */}
          <rect x="0" y="160" width="320" height="100" fill="url(#well-grad)" opacity="0.8" />
          <path
            d="M 0 160 Q 80 155, 160 162 T 320 158"
            fill="none"
            stroke="rgba(61, 139, 232, 0.2)"
            strokeWidth="1"
          />
          {/* Stratum lines */}
          <path d="M 0 190 Q 100 185, 200 195 T 320 188" fill="none" stroke="rgba(61, 139, 232, 0.08)" strokeWidth="0.5" />
          <path d="M 0 220 Q 120 215, 200 225 T 320 218" fill="none" stroke="rgba(61, 139, 232, 0.06)" strokeWidth="0.5" />

          {/* Oil well casing */}
          <rect x="145" y="40" width="12" height="130" rx="2" fill="none" stroke="#C5192D" strokeWidth="1.5" />
          <rect x="148" y="55" width="6" height="115" fill="#C5192D" opacity="0.15" />

          {/* Pumpjack head */}
          <g transform="translate(151, 20)">
            <motion.g
              animate={inView && !reduce ? { rotate: [-15, 15, -15] } : {}}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: '0 20px' }}
            >
              {/* Arm */}
              <line x1="0" y1="0" x2="0" y2="35" stroke="#C5192D" strokeWidth="2" opacity="0.8" />
              <line x1="0" y1="0" x2="-12" y2="-8" stroke="#C5192D" strokeWidth="2" opacity="0.8" />
              {/* Counterweight */}
              <rect x="-8" y="-14" width="5" height="8" rx="1" fill="#C5192D" opacity="0.5" />
            </motion.g>
            {/* Base */}
            <rect x="-4" y="32" width="8" height="4" rx="1" fill="rgba(197,25,45,0.3)" />
          </g>

          {/* Steam injection pipe (horizontal) */}
          <motion.line
            x1="160" y1="70" x2="260" y2="70"
            stroke="#3D8BE8" strokeWidth="1.5"
            strokeDasharray="3,3"
            opacity={0.7}
            initial={false}
            animate={inView && !reduce ? { strokeDashoffset: [0, -20] } : {}}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
          {/* Steam cloud */}
          <motion.g
            animate={inView && !reduce ? { opacity: [0.3, 0.7, 0.3], x: [0, 3, 0] } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <circle cx="230" cy="55" r="6" fill="#3D8BE8" opacity="0.15" filter="url(#glow-orange)" />
            <circle cx="245" cy="50" r="4" fill="#3D8BE8" opacity="0.1" />
            <circle cx="260" cy="52" r="3" fill="#3D8BE8" opacity="0.08" />
          </motion.g>

          {/* Oil droplets flowing up */}
          <motion.circle
            cx="154" cy="140" r="2"
            fill="#FF6B35" opacity="0.6"
            animate={inView && !reduce ? { cy: [160, 100, 60], opacity: [0, 0.6, 0] } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
          />
          <motion.circle
            cx="154" cy="140" r="1.5"
            fill="#FF6B35" opacity="0.4"
            animate={inView && !reduce ? { cy: [170, 110, 70], opacity: [0, 0.4, 0] } : {}}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeOut', delay: 1.2 }}
          />

          {/* Labels */}
          <text x="200" y="82" className="fill-steel-400" fontSize="6" fontFamily="JetBrains Mono, monospace">
            INYECCIÓN VAPOR
          </text>
          <text x="200" y="89" className="fill-steel-500" fontSize="4.5" fontFamily="JetBrains Mono, monospace">
            1.500 bbl/día · 328°C
          </text>

          {/* Oil reservoir indicator */}
          <text x="80" y="200" className="fill-steel-500" fontSize="5" fontFamily="JetBrains Mono, monospace">
            YACIMIENTO
          </text>
          <motion.rect
            x="100" y="195" width="30" height="4" rx="1"
            fill="#FF6B35" opacity="0.4"
            animate={inView && !reduce ? { width: [20, 35, 20] } : {}}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Data tags */}
          <g transform="translate(10, 10)">
            <rect x="0" y="0" width="90" height="36" rx="3" fill="rgba(0,87,184,0.08)" stroke="rgba(0,87,184,0.15)" strokeWidth="0.5" />
            <text x="6" y="12" className="fill-steel-500" fontSize="4.5" fontFamily="JetBrains Mono, monospace">TASA INYECCIÓN</text>
            <text x="6" y="27" className="fill-white" fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="bold">1,500 <tspan className="fill-steel-400" fontSize="6">BPD</tspan></text>
          </g>

          <g transform="translate(220, 10)">
            <rect x="0" y="0" width="90" height="36" rx="3" fill="rgba(197,25,45,0.08)" stroke="rgba(197,25,45,0.15)" strokeWidth="0.5" />
            <text x="6" y="12" className="fill-steel-500" fontSize="4.5" fontFamily="JetBrains Mono, monospace">PRESIÓN CABEZA</text>
            <text x="6" y="27" className="fill-white" fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="bold">1,840 <tspan className="fill-steel-400" fontSize="6">PSI</tspan></text>
          </g>

          {/* Oscilloscope wave */}
          <OscilloWaveComponent x={215} y={230} width={95} height={22} inView={inView} reduce={reduce} />

          {/* Temperature readout */}
          <g transform="translate(10, 230)">
            <text className="fill-steel-500" fontSize="4.5" fontFamily="JetBrains Mono, monospace">TEMP: 328°C</text>
            <motion.rect
              x="45" y="-1" width="30" height="3" rx="1.5"
              fill="none" stroke="rgba(197,25,45,0.3)" strokeWidth="1"
            >
              <motion.rect
                x="1" y="1" height="1" rx="0.5"
                fill="#C5192D"
                animate={inView && !reduce ? { width: [5, 28, 5] } : {}}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.rect>
          </g>
        </svg>
      </div>
    </div>
  )
}

/* Oscilloscope wave reusable in SVG */
function OscilloWaveComponent({ x, y, width, height, inView, reduce }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect x="0" y="0" width={width} height={height} rx="2" fill="rgba(0,0,0,0.3)" stroke="rgba(61,139,232,0.15)" strokeWidth="0.5" />
      <motion.path
        d={`M 0 ${height / 2} Q ${width * 0.12} ${height * 0.1}, ${width * 0.25} ${height / 2} T ${width * 0.5} ${height / 2} T ${width * 0.75} ${height / 2} T ${width} ${height / 2}`}
        fill="none"
        stroke="#3D8BE8"
        strokeWidth="1"
        opacity="0.6"
        initial={false}
        animate={inView && !reduce ? { strokeDashoffset: [width, 0] } : {}}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        strokeDasharray={width}
      />
    </g>
  )
}