import { Link } from 'react-router-dom'
import {
  WifiHigh,
  Broadcast,
  Cpu,
  Drop,
  DropHalf,
  ArrowRight,
  CheckCircle,
  Monitor,
  Gear,
  Plugs,
  Gauge,
  Network,
  Fire,
  Star,
  TrendUp,
  ShieldCheck,
} from '@phosphor-icons/react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const HERO_IMG =
  'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=1920&q=80'

const brands = ['Cisco', 'Fanuc', 'Modicon', 'Omron', 'Rockwell', 'Siemens', 'Wonderware']

const services = [
  {
    id: 'conectividad',
    icon: WifiHigh,
    title: 'Conectividad',
    subtitle: 'Infraestructura de red empresarial',
    desc: 'Soluciones integrales de conectividad para empresas que requieren redes robustas, seguras y de alto rendimiento.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
    color: '#2563EB',
    gradient: 'from-blue-600/90 to-blue-900/95',
    stats: { label: 'Proyectos', value: '50+' },
    items: [
      { icon: Network, text: 'Diseno, implantacion y construccion de soluciones de conectividad.' },
      { icon: Plugs, text: 'Instalacion de redes LAN y/o WAN.' },
      { icon: Monitor, text: 'Redes corporativas de servicios de voz, datos y video.' },
    ],
    tags: ['LAN/WAN', 'Fibra optica', 'VoIP', 'VPN'],
  },
  {
    id: 'telecomunicaciones',
    icon: Broadcast,
    title: 'Telecomunicaciones',
    subtitle: 'Infraestructura de comunicaciones',
    desc: 'Despliegue de infraestructura de telecomunicaciones con los mas altos estandares de calidad y confiabilidad.',
    img: 'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?auto=format&fit=crop&w=900&q=80',
    color: '#0D9488',
    gradient: 'from-teal-600/90 to-teal-900/95',
    stats: { label: 'Enlaces', value: '200+' },
    items: [
      { icon: Plugs, text: 'Instalacion de canalizaciones telefonicas.' },
      { icon: Network, text: 'Tendido de redes aereas, ductos y directamente enterrados.' },
      { icon: WifiHigh, text: 'Construccion de enlaces por cables de fibra optica.' },
      { icon: Broadcast, text: 'Enlaces dedicados de radio o frame relay.' },
    ],
    tags: ['Fibra optica', 'Radio enlaces', 'Frame relay', 'Ductos'],
  },
  {
    id: 'automatizacion',
    icon: Cpu,
    title: 'Automatizacion e Instrumentacion',
    subtitle: 'Control y supervision industrial',
    desc: 'Soluciones de automatizacion industrial que optimizan procesos, mejoran la seguridad y maximizan la productividad.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    color: '#4F46E5',
    gradient: 'from-indigo-600/90 to-indigo-900/95',
    stats: { label: 'Sistemas', value: '120+' },
    items: [
      { icon: Gear, text: 'Instalacion de instrumentos en procesos que requieran medicion, supervision y control.' },
      { icon: Plugs, text: 'Cableado, conduit, cajas de interconexion y tuberias para instrumentos.' },
      { icon: Monitor, text: 'Suministro de personal tecnico para operaciones y mantenimiento.' },
      { icon: Cpu, text: 'Diseno e implementacion de sistemas de supervision, medicion y control.' },
      { icon: Gear, text: 'Instalacion, programacion y mantenimiento de PLC, RTU, HMI y DCS.' },
      { icon: Monitor, text: 'Diseno e implementacion de sistemas SCADA.' },
      { icon: Gauge, text: 'Mantenimiento y reparacion de equipos de control electronicos y neumaticos.' },
      { icon: Gear, text: 'Adiestramiento en sistemas de supervision y control.' },
      { icon: Gauge, text: 'Calibracion de instrumentacion: flujo, presion, nivel, temperatura.' },
    ],
    tags: ['PLC', 'SCADA', 'HMI', 'RTU', 'DCS'],
  },
  {
    id: 'petroleros',
    icon: DropHalf,
    title: 'Servicios Petroleros',
    subtitle: 'Recuperacion de crudo',
    desc: 'Servicios especializados para la industria petrolera con tecnologia de punta y personal altamente calificado.',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=80',
    color: '#EA580C',
    gradient: 'from-orange-600/90 to-orange-900/95',
    stats: { label: 'Barriles/dia', value: '1.500' },
    items: [
      { icon: Fire, text: 'Inyeccion de vapor en pozo para recuperacion de crudo.' },
      { icon: Drop, text: 'Extraccion de crudo en fosas y pozos petroleros.' },
    ],
    tags: ['Vapor', 'Crudo pesado', 'Recuperacion', 'Pozos'],
  },
]

export default function Servicios() {
  useScrollAnimation()

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-24 min-h-[60vh] flex items-center overflow-hidden" aria-label="Servicios">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 hero-gradient opacity-95" />
          <div className="absolute inset-0 dot-pattern opacity-20" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F8FAFC]" />
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-[#0057B8]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-[#0057B8]/5 rounded-full blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 aos-hidden">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0057B8] animate-pulse" />
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Lo que ofrecemos</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[0.95] tracking-tight mb-5 aos-hidden">
              Nuestros{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#5599ff]">
                Servicios
              </span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed aos-hidden" style={{ transitionDelay: '0.1s' }}>
              Cuatro lineas de servicio especializadas para la industria petrolera y manufacturera venezolana e internacional.
            </p>
            <div className="flex flex-wrap gap-3 mt-8 aos-hidden" style={{ transitionDelay: '0.2s' }}>
              {['Ingenieria', 'Petroleo', 'Automatizacion', 'Telecomunicaciones'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      {services.map(({ id, icon: Icon, title, subtitle, desc, img, color, gradient, stats, items, tags }, idx) => (
        <section
          key={id}
          id={id}
          className={`relative ${idx === 0 ? '' : ''} ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}`}
          aria-labelledby={`${id}-heading`}
        >
          {/* Edge accent bar */}
          <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* ── Image card ── */}
              <div className={`relative ${idx % 2 !== 0 ? 'lg:order-2' : ''} aos-hidden`}>
                <div className="relative rounded-2xl overflow-hidden group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={img}
                      alt={`Servicio de ${title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-t ${gradient}`} />

                  {/* Icon over image */}
                  <div className="absolute top-5 left-5 flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-lg backdrop-blur-sm"
                      style={{ background: color }}
                    >
                      <Icon size={22} />
                    </div>
                    <span className="text-white font-display font-bold text-lg drop-shadow-lg">{title}</span>
                  </div>

                  {/* Stats badge */}
                  <div className="absolute bottom-5 right-5 bg-white/10 backdrop-blur-md rounded-xl px-5 py-3 border border-white/10 text-center">
                    <span className="block text-2xl font-bold text-white font-display">{stats.value}</span>
                    <span className="block text-[10px] text-gray-300 uppercase tracking-wider font-medium">{stats.label}</span>
                  </div>
                </div>
              </div>

              {/* ── Content ── */}
              <div className={`${idx % 2 !== 0 ? 'lg:order-1' : ''} aos-hidden`} style={{ transitionDelay: '0.12s' }}>
                <h2 id={`${id}-heading`} className="font-display text-3xl lg:text-4xl font-bold text-[#0B1F3A] leading-[1.08] tracking-tight mb-4">
                  {title}
                </h2>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] mb-3" style={{ color }}>
                  {subtitle}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-lg">
                  {desc}
                </p>

                {/* Feature grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {items.map(({ icon: ItemIcon, text }) => (
                    <div
                      key={text}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-200"
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: `${color}15`, color }}
                      >
                        <ItemIcon size={15} />
                      </div>
                      <span className="text-gray-600 text-sm leading-relaxed">{text}</span>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg text-xs font-semibold"
                      style={{
                        background: `${color}10`,
                        color,
                        border: `1px solid ${color}20`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group"
                  style={{ color }}
                >
                  Solicitar informacion
                  <span
                    className="inline-flex items-center justify-center w-6 h-6 rounded-full transition-all duration-200 group-hover:translate-x-0.5"
                    style={{ background: `${color}15` }}
                  >
                    <ArrowRight size={12} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── BENEFITS STRIP ── */}
      <section className="bg-[#060F1D] py-16 relative overflow-hidden" aria-label="Beneficios">
        <div className="absolute inset-0 dot-pattern opacity-[0.03]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Star, label: 'Calidad certificada', desc: 'Estandares internacionales en cada proyecto' },
              { icon: TrendUp, label: 'Mejora continua', desc: 'Optimizacion permanente de procesos' },
              { icon: ShieldCheck, label: 'Seguridad garantizada', desc: 'Cumplimiento de normas de seguridad industrial' },
            ].map(({ icon: BIcon, label, desc }) => (
              <div key={label} className="text-center aos-hidden">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#0057B8]/10 text-[#0057B8] mb-4">
                  <BIcon size={22} />
                </div>
                <h3 className="font-display font-bold text-white text-base mb-1">{label}</h3>
                <p className="text-gray-500 text-xs">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRANDS ── */}
      <section className="bg-white py-20 relative" aria-labelledby="marcas-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 aos-hidden">
            <span className="section-eyebrow">Tecnologia de punta</span>
            <h2 id="marcas-heading" className="section-title">Marcas con las que Trabajamos</h2>
            <p className="text-gray-500 text-sm mt-3 max-w-lg mx-auto">
              Trabajamos con los lideres mundiales en tecnologia industrial para garantizar los mejores resultados.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {brands.map((b, i) => (
              <div
                key={b}
                className="group relative bg-gray-50 hover:bg-white border border-gray-200 hover:border-[#0057B8]/30 rounded-xl px-4 py-6 text-center cursor-default transition-all duration-300 aos-hidden hover:-translate-y-1 hover:shadow-lg"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#0057B8]/0 via-[#0057B8]/0 to-[#0057B8]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative font-display font-bold text-gray-700 group-hover:text-[#0057B8] text-sm transition-colors duration-300">
                  {b}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 lg:py-28 relative overflow-hidden" aria-labelledby="cta-servicios-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060F1D] via-[#0B1F3A] to-[#1C3D5A]" />
        <div className="absolute inset-0 dot-pattern opacity-[0.04]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0057B8]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0057B8]/20 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto aos-hidden">
            <h2 id="cta-servicios-heading" className="section-title-light mb-4">
              Necesitas alguno de estos servicios?
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-lg mx-auto">
              Nuestro equipo esta listo para analizar tu proyecto y ofrecerte la solucion mas adecuada para tu industria.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contacto" className="btn-primary text-base">
                Solicitar informacion <ArrowRight size={18} />
              </Link>
              <Link to="/proyectos" className="btn-outline text-base">
                Ver proyectos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}