import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../lib/animations'

/* ── Oscillosope wave (uses JS for timing control) ── */
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
    <svg viewBox="0 0 200 40" className={`w-full h-full ${className}`} preserveAspectRatio="none">
      <path ref={pathRef} d="M 0 20 Q 25 5, 50 20 T 100 20 T 150 20 T 200 20" fill="none" stroke={color} strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
      <path d="M 0 20 Q 25 5, 50 20 T 100 20 T 150 20 T 200 20" fill="none" stroke={color} strokeWidth="3" opacity="0.15" strokeLinecap="round" />
    </svg>
  )
}

/* ── RadarSweep — uses SVG animateTransform for rotation ── */
export function RadarSweep({ className = '' }) {
  const reduce = useReducedMotion()
  return (
    <svg viewBox="0 0 80 80" className={`${className}`}>
      {[28, 38, 48].map((r) => (
        <circle key={r} cx="40" cy="40" r={r} fill="none" stroke="rgba(61,139,232,0.12)" strokeWidth="0.5" />
      ))}
      <line x1="40" y1="10" x2="40" y2="70" stroke="rgba(61,139,232,0.08)" strokeWidth="0.5" />
      <line x1="10" y1="40" x2="70" y2="40" stroke="rgba(61,139,232,0.08)" strokeWidth="0.5" />
      {!reduce && (
        <g>
          <path d="M 40 40 L 70 15 A 38 38 0 0 1 76 40 Z" fill="rgba(61,139,232,0.06)" style={{ transformOrigin: '40px 40px' }}>
            <animateTransform attributeName="transform" type="rotate" from="0 40 40" to="360 40 40" dur="4s" repeatCount="indefinite" />
          </path>
        </g>
      )}
      <circle cx="40" cy="40" r="2" fill="#3D8BE8" opacity="0.6" />
    </svg>
  )
}

/* ── Industrial diagram — SVG-native animations ── */
export function IndustrialHeroDiagram({ className = '' }) {
  const reduce = useReducedMotion()
  const run = !reduce

  return (
    <div className={`relative ${className}`}>
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/60 backdrop-blur-sm">
        <div className="flex items-center gap-2 border-b border-white/5 px-3 py-2 bg-ink-950/60">
          <span className="h-2 w-2 rounded-full bg-brand-red shadow-[0_0_6px_rgba(197,25,45,0.5)]" />
          <span className="h-2 w-2 rounded-full bg-amber-400/60" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/60" />
          <span className="ml-2 font-mono text-[9px] uppercase tracking-[0.15em] text-steel-500">SPS — MONITOR DE PROCESO</span>
        </div>

        <svg viewBox="0 0 320 260" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="well-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#060F1D" /><stop offset="50%" stopColor="#1a2a4a" /><stop offset="100%" stopColor="#060F1D" />
            </linearGradient>
            <filter id="glow-orange"><feGaussianBlur stdDeviation="3" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            <pattern id="grid-small" width="16" height="16" patternUnits="userSpaceOnUse">
              <path d="M 16 0 L 0 0 0 16" fill="none" stroke="rgba(61,139,232,0.04)" strokeWidth="0.5" />
            </pattern>
          </defs>

          <rect width="320" height="260" fill="url(#grid-small)" />
          <rect x="0" y="160" width="320" height="100" fill="url(#well-grad)" opacity="0.8" />
          <path d="M 0 160 Q 80 155, 160 162 T 320 158" fill="none" stroke="rgba(61,139,232,0.2)" strokeWidth="1" />
          <path d="M 0 190 Q 100 185, 200 195 T 320 188" fill="none" stroke="rgba(61,139,232,0.08)" strokeWidth="0.5" />
          <path d="M 0 220 Q 120 215, 200 225 T 320 218" fill="none" stroke="rgba(61,139,232,0.06)" strokeWidth="0.5" />

          {/* Oil well casing */}
          <rect x="145" y="40" width="12" height="130" rx="2" fill="none" stroke="#C5192D" strokeWidth="1.5" />
          <rect x="148" y="55" width="6" height="115" fill="#C5192D" opacity="0.15" />

          {/* Pumpjack head — SVG animateTransform */}
          <g transform="translate(151, 20)">
            {run ? (
              <g style={{ transformOrigin: '0 20px' }}>
                <animateTransform attributeName="transform" type="rotate" values="-15,0,20;15,0,20;-15,0,20" dur="2.5s" repeatCount="indefinite" />
                <line x1="0" y1="0" x2="0" y2="35" stroke="#C5192D" strokeWidth="2" opacity="0.8" />
                <line x1="0" y1="0" x2="-12" y2="-8" stroke="#C5192D" strokeWidth="2" opacity="0.8" />
                <rect x="-8" y="-14" width="5" height="8" rx="1" fill="#C5192D" opacity="0.5" />
              </g>
            ) : (
              <g>
                <line x1="0" y1="0" x2="0" y2="35" stroke="#C5192D" strokeWidth="2" opacity="0.8" />
                <line x1="0" y1="0" x2="-12" y2="-8" stroke="#C5192D" strokeWidth="2" opacity="0.8" />
                <rect x="-8" y="-14" width="5" height="8" rx="1" fill="#C5192D" opacity="0.5" />
              </g>
            )}
            <rect x="-4" y="32" width="8" height="4" rx="1" fill="rgba(197,25,45,0.3)" />
          </g>

          {/* Steam injection pipe — animated dash */}
          {run && (
            <line x1="160" y1="70" x2="260" y2="70" stroke="#3D8BE8" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.7">
              <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1s" repeatCount="indefinite" />
            </line>
          )}
          {!run && <line x1="160" y1="70" x2="260" y2="70" stroke="#3D8BE8" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.7" />}

          {/* Steam cloud */}
          {run && (
            <g>
              <circle cx="230" cy="55" r="6" fill="#3D8BE8" opacity="0.15" filter="url(#glow-orange)">
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="245" cy="50" r="4" fill="#3D8BE8" opacity="0.1">
                <animate attributeName="opacity" values="0.1;0.5;0.1" dur="3s" repeatCount="indefinite" begin="0.5s" />
              </circle>
              <circle cx="260" cy="52" r="3" fill="#3D8BE8" opacity="0.08">
                <animate attributeName="opacity" values="0.08;0.4;0.08" dur="3s" repeatCount="indefinite" begin="1s" />
              </circle>
            </g>
          )}

          {/* Oil droplets */}
          {run && (
            <>
              <circle cx="154" cy="140" r="2" fill="#FF6B35" opacity="0">
                <animate attributeName="cy" values="160;110;60" dur="3s" repeatCount="indefinite" begin="0.5s" />
                <animate attributeName="opacity" values="0;0.6;0" dur="3s" repeatCount="indefinite" begin="0.5s" />
              </circle>
              <circle cx="154" cy="140" r="1.5" fill="#FF6B35" opacity="0">
                <animate attributeName="cy" values="170;120;70" dur="3.5s" repeatCount="indefinite" begin="1.2s" />
                <animate attributeName="opacity" values="0;0.4;0" dur="3.5s" repeatCount="indefinite" begin="1.2s" />
              </circle>
            </>
          )}

          {/* Labels */}
          <text x="200" y="82" className="fill-steel-400" fontSize="6" fontFamily="JetBrains Mono, monospace">INYECCIÓN VAPOR</text>
          <text x="200" y="89" className="fill-steel-500" fontSize="4.5" fontFamily="JetBrains Mono, monospace">1.500 bbl/día · 328°C</text>

          {/* Oil reservoir */}
          <text x="80" y="200" className="fill-steel-500" fontSize="5" fontFamily="JetBrains Mono, monospace">YACIMIENTO</text>
          <rect x="100" y="195" width="30" height="4" rx="1" fill="#FF6B35" opacity="0.4">
            {run && <animate attributeName="width" values="20;35;20" dur="4s" repeatCount="indefinite" />}
          </rect>

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

          {/* Oscilloscope */}
          <g transform="translate(215, 230)">
            <rect x="0" y="0" width="95" height="22" rx="2" fill="rgba(0,0,0,0.3)" stroke="rgba(61,139,232,0.15)" strokeWidth="0.5" />
            <path d="M 0 11 Q 11.4 2.2, 23.8 11 T 47.5 11 T 71.3 11 T 95 11" fill="none" stroke="#3D8BE8" strokeWidth="1" opacity="0.6" strokeDasharray="95">
              {run && <animate attributeName="stroke-dashoffset" from="95" to="0" dur="2s" repeatCount="indefinite" />}
            </path>
          </g>

          {/* Temperature */}
          <g transform="translate(10, 230)">
            <text className="fill-steel-500" fontSize="4.5" fontFamily="JetBrains Mono, monospace">TEMP: 328°C</text>
            <rect x="45" y="-1" width="30" height="3" rx="1.5" fill="none" stroke="rgba(197,25,45,0.3)" strokeWidth="1">
              <rect x="1" y="1" height="1" rx="0.5" fill="#C5192D">
                {run && <animate attributeName="width" values="5;28;5" dur="2s" repeatCount="indefinite" />}
              </rect>
            </rect>
          </g>
        </svg>
      </div>
    </div>
  )
}