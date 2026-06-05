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
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
    color: '#2563EB',
    items: [
      { icon: Network, text: 'Diseno, implantacion y construccion de soluciones de conectividad.' },
      { icon: Plugs, text: 'Instalacion de redes LAN y/o WAN.' },
      { icon: Monitor, text: 'Redes corporativas de servicios de voz, datos y video.' },
    ],
  },
  {
    id: 'telecomunicaciones',
    icon: Broadcast,
    title: 'Telecomunicaciones',
    subtitle: 'Infraestructura de comunicaciones',
    img: 'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?auto=format&fit=crop&w=900&q=80',
    color: '#0D9488',
    items: [
      { icon: Plugs, text: 'Instalacion de canalizaciones telefonicas.' },
      { icon: Network, text: 'Tendido de redes aereas, ductos y directamente enterrados.' },
      { icon: WifiHigh, text: 'Construccion de enlaces por cables de fibra optica.' },
      { icon: Broadcast, text: 'Enlaces dedicados de radio o frame relay.' },
    ],
  },
  {
    id: 'automatizacion',
    icon: Cpu,
    title: 'Automatizacion e Instrumentacion',
    subtitle: 'Control y supervision industrial',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    color: '#4F46E5',
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
  },
  {
    id: 'petroleros',
    icon: DropHalf,
    title: 'Servicios Petroleros',
    subtitle: 'Recuperacion de crudo',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=80',
    color: '#EA580C',
    items: [
      { icon: Fire, text: 'Inyeccion de vapor en pozo para recuperacion de crudo.' },
      { icon: Drop, text: 'Extraccion de crudo en fosas y pozos petroleros.' },
    ],
  },
]

export default function Servicios() {
  useScrollAnimation()

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 min-h-[55vh] flex items-center overflow-hidden" aria-label="Servicios">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 hero-gradient opacity-95" />
          <div className="absolute inset-0 dot-pattern opacity-20" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0057B8]" />
            <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Lo que ofrecemos</span>
          </div>
          <h1 className="section-title-light text-5xl lg:text-6xl mb-4">Nuestros Servicios</h1>
          <p className="text-gray-400 text-base max-w-2xl leading-relaxed">
            Cuatro lineas de servicio especializadas para la industria petrolera y manufacturera venezolana e internacional.
          </p>
        </div>
      </section>

      {/* Services - each with a unique layout */}
      {services.map(({ id, icon: Icon, title, subtitle, img, color, items }, idx) => (
        <section
          key={id}
          id={id}
          className={`py-20 lg:py-28 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}`}
          aria-labelledby={`${id}-heading`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className={`${idx % 2 !== 0 ? 'lg:order-2' : ''} aos-hidden`}>
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src={img}
                      alt={`Servicio de ${title}`}
                      className="w-full h-72 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060F1D]/30 to-transparent" />
                    <div className="absolute top-5 left-5 bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 text-white border border-white/10">
                      <p className="font-display font-bold text-lg">{title}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${idx % 2 !== 0 ? 'lg:order-1' : ''} aos-hidden`} style={{ transitionDelay: '0.12s' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-white" style={{ background: color }}>
                  <Icon size={20} />
                </div>
                <h2 id={`${id}-heading`} className="section-title mb-2">{title}</h2>
                <p className="text-gray-400 text-xs mb-6 font-semibold uppercase tracking-wider">{subtitle}</p>
                <div className="w-10 h-0.5 bg-[#0057B8] rounded-full mb-8" />
                <ul className="space-y-3">
                  {items.map(({ icon: ItemIcon, text }) => (
                    <li key={text} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                      <span style={{ color }} className="mt-0.5 shrink-0">
                        <CheckCircle size={15} weight="fill" />
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

      {/* Brands — full-width dark, different layout */}
      <section className="bg-[#060F1D] py-20 relative overflow-hidden" aria-labelledby="marcas-heading">
        <div className="absolute inset-0 dot-pattern opacity-[0.03]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 aos-hidden">
            <span className="section-eyebrow text-[#5599ff]">Tecnologia de punta</span>
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
            Necesitas alguno de estos servicios?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto text-sm">
            Nuestro equipo esta listo para analizar tu proyecto y ofrecerte la solucion mas adecuada.
          </p>
          <Link to="/contacto" className="btn-primary text-base">
            Solicitar informacion <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}