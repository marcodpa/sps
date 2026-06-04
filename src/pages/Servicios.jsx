import { Link } from 'react-router-dom'
import {
  Wifi,
  Radio,
  Cpu,
  Droplets,
  ArrowRight,
  CheckCircle,
  Monitor,
  Settings,
  Cable,
  Gauge,
  Network,
  Flame,
} from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const HERO_IMG =
  'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=1920&q=80'

const brands = ['Cisco', 'Fanuc', 'Modicon', 'Omron', 'Rockwell', 'Siemens', 'Wonderware']

const services = [
  {
    id: 'conectividad',
    icon: <Wifi size={24} />,
    title: 'Conectividad',
    subtitle: 'Infraestructura de red empresarial',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
    color: '#2563EB',
    bgColor: 'from-blue-600 to-blue-900',
    items: [
      { icon: <Network size={16} />, text: 'Diseño, implantación y construcción de soluciones de conectividad.' },
      { icon: <Cable size={16} />, text: 'Instalación de redes LAN y/o WAN.' },
      { icon: <Monitor size={16} />, text: 'Redes corporativas de servicios de voz, datos y video.' },
    ],
  },
  {
    id: 'telecomunicaciones',
    icon: <Radio size={24} />,
    title: 'Telecomunicaciones',
    subtitle: 'Infraestructura de comunicaciones',
    img: 'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?auto=format&fit=crop&w=900&q=80',
    color: '#0D9488',
    bgColor: 'from-teal-600 to-teal-900',
    items: [
      { icon: <Cable size={16} />, text: 'Instalación de canalizaciones telefónicas.' },
      { icon: <Network size={16} />, text: 'Tendido de redes aéreas, ductos y directamente enterrados.' },
      { icon: <Wifi size={16} />, text: 'Construcción de enlaces por cables de fibra óptica.' },
      { icon: <Radio size={16} />, text: 'Enlaces dedicados de radio o frame relay.' },
    ],
  },
  {
    id: 'automatizacion',
    icon: <Cpu size={24} />,
    title: 'Automatización e Instrumentación',
    subtitle: 'Control y supervisión industrial',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    color: '#4F46E5',
    bgColor: 'from-indigo-600 to-indigo-900',
    items: [
      { icon: <Settings size={16} />, text: 'Instalación de instrumentos en procesos que requieran medición, supervisión y control.' },
      { icon: <Cable size={16} />, text: 'Cableado, conduit, cajas de interconexión y tuberías para instrumentos.' },
      { icon: <Monitor size={16} />, text: 'Suministro de personal técnico para operaciones y mantenimiento.' },
      { icon: <Cpu size={16} />, text: 'Diseño e implementación de sistemas de supervisión, medición y control.' },
      { icon: <Settings size={16} />, text: 'Instalación, programación y mantenimiento de PLC, RTU, HMI y DCS.' },
      { icon: <Monitor size={16} />, text: 'Diseño e implementación de sistemas SCADA.' },
      { icon: <Gauge size={16} />, text: 'Mantenimiento y reparación de equipos de control electrónicos y neumáticos.' },
      { icon: <Settings size={16} />, text: 'Adiestramiento en sistemas de supervisión y control.' },
      { icon: <Gauge size={16} />, text: 'Calibración de instrumentación: flujo, presión, nivel, temperatura.' },
    ],
  },
  {
    id: 'petroleros',
    icon: <Droplets size={24} />,
    title: 'Servicios Petroleros',
    subtitle: 'Recuperación de crudo',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=80',
    color: '#EA580C',
    bgColor: 'from-orange-600 to-orange-900',
    items: [
      { icon: <Flame size={16} />, text: 'Inyección de vapor en pozo para recuperación de crudo.' },
      { icon: <Droplets size={16} />, text: 'Extracción de crudo en fosas y pozos petroleros.' },
    ],
  },
]

export default function Servicios() {
  useScrollAnimation()

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 flex items-center min-h-[55vh] overflow-hidden" aria-label="Servicios">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 hero-gradient opacity-95" />
          <div className="absolute inset-0 dot-pattern opacity-20" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0057B8] animate-pulse" />
            <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Lo que ofrecemos</span>
          </div>
          <h1 className="section-title-light text-5xl lg:text-6xl mb-4">Nuestros Servicios</h1>
          <p className="text-gray-400 text-base max-w-2xl leading-relaxed">
            Cuatro líneas de servicio especializadas para la industria petrolera y manufacturera venezolana e internacional.
          </p>
        </div>
      </section>

      {/* Services - alternating layout */}
      {services.map(({ id, icon, title, subtitle, img, color, bgColor, items }, idx) => (
        <section
          key={id}
          id={id}
          className={`py-20 lg:py-28 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}`}
          aria-labelledby={`${id}-heading`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Image side */}
              <div className={`${idx % 2 !== 0 ? 'lg:order-2' : ''} aos-hidden`}>
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#0057B8] to-[#1C3D5A] rounded-2xl opacity-10 blur" />
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src={img}
                      alt={`Servicio de ${title}`}
                      className="w-full h-72 object-cover"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${bgColor} opacity-40`} />
                    <div className="absolute top-5 left-5 bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 text-white border border-white/10">
                      <span className="block text-white/70 text-[10px] uppercase tracking-wider mb-1">Servicio {idx + 1}</span>
                      <p className="font-display font-bold text-lg">{title}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content side */}
              <div className={`${idx % 2 !== 0 ? 'lg:order-1' : ''} aos-hidden`} style={{ transitionDelay: '0.12s' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-white" style={{ background: color }}>
                  {icon}
                </div>
                <span className="section-eyebrow">Servicio {idx + 1} de 4</span>
                <h2 id={`${id}-heading`} className="section-title mb-2">{title}</h2>
                <p className="text-gray-400 text-xs mb-6 font-medium uppercase tracking-wide">{subtitle}</p>
                <div className="w-10 h-0.5 bg-[#0057B8] rounded-full mb-8" />
                <ul className="space-y-3">
                  {items.map(({ icon: itemIcon, text }) => (
                    <li key={text} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                      <span style={{ color }} className="mt-0.5 shrink-0">
                        <CheckCircle size={15} />
                      </span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Brands */}
      <section className="bg-[#060F1D] py-20 relative overflow-hidden" aria-labelledby="marcas-heading">
        <div className="absolute inset-0 dot-pattern opacity-[0.03]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 aos-hidden">
            <span className="section-eyebrow text-[#5599ff]">Tecnología de punta</span>
            <h2 id="marcas-heading" className="section-title-light">Marcas con las que Trabajamos</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {brands.map((b, i) => (
              <div
                key={b}
                className="bg-white/5 hover:bg-[#0057B8]/20 border border-white/5 hover:border-[#0057B8]/30 rounded-xl px-4 py-5 text-center text-white font-display font-semibold text-sm transition-all duration-300 cursor-default aos-hidden"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060F1D] via-[#0B1F3A] to-[#1C3D5A]" />
        <div className="absolute inset-0 dot-pattern opacity-[0.04]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0057B8]/5 rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
            ¿Necesitas alguno de estos servicios?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto text-sm">
            Nuestro equipo está listo para analizar tu proyecto y ofrecerte la solución más adecuada.
          </p>
          <Link to="/contacto" className="btn-primary text-base">
            Solicitar información <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}