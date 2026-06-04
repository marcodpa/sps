import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  WifiHigh,
  Broadcast,
  Cpu,
  Drop,
  Award,
  Users,
  Lightning,
  Globe,
  CaretRight,
  TrendUp,
  ShieldCheck,
  Headphones,
  CheckCircle,
} from '@phosphor-icons/react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const HERO_IMG =
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1920&q=80'

const ABOUT_IMG =
  'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=900&q=80'

const services = [
  {
    icon: WifiHigh,
    title: 'Conectividad',
    desc: 'Soluciones de red LAN/WAN, voz, datos y video para empresas.',
    tag: 'Redes',
  },
  {
    icon: Broadcast,
    title: 'Telecomunicaciones',
    desc: 'Redes de fibra optica, canalizaciones telefonicas y enlaces dedicados.',
    tag: 'Comunicaciones',
  },
  {
    icon: Cpu,
    title: 'Automatizacion',
    desc: 'PLC, SCADA, HMI, RTU e instrumentacion para la industria petrolera.',
    tag: 'Control',
  },
  {
    icon: Drop,
    title: 'Servicios Petroleros',
    desc: 'Inyeccion de vapor para recuperacion de crudo con altos estandares.',
    tag: 'Petroleo',
  },
]

const stats = [
  { value: '7+', label: 'Clientes estrategicos', icon: Users },
  { value: '100%', label: 'Ejecucion comprobada', icon: Award },
  { value: '4', label: 'Lineas de servicio', icon: Lightning },
  { value: '5+', label: 'Paises atendidos', icon: Globe },
]

const clients = [
  'Petroboscan', 'Chevron', 'PDVSA GIV', 'Produsal',
  'Petroquiriquire', 'Cargill Venezuela', 'HPI LLC (Houston)',
]

const brands = ['Cisco', 'Fanuc', 'Modicon', 'Omron', 'Rockwell', 'Siemens', 'Wonderware']

const featuredProjects = [
  {
    client: 'Petroboscan / Chevron',
    desc: 'Inyeccion de vapor en Campo Boscan con capacidad de 1.500 barriles diarios.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
    tag: 'Petrolero',
  },
  {
    client: 'Cargill de Venezuela',
    desc: 'Automatizacion de lineas de produccion con PLC Allen Bradley y robot paletizador.',
    img: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=600&q=80',
    tag: 'Automatizacion',
  },
  {
    client: 'HPI LLC (Houston)',
    desc: 'Programacion PLC/HMI y fibra optica en plantas de generacion en 5 paises.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
    tag: 'Internacional',
  },
]

const values = [
  { icon: TrendUp, label: 'Excelencia operacional' },
  { icon: ShieldCheck, label: 'Seguridad industrial' },
  { icon: Headphones, label: 'Respuesta inmediata' },
]

export default function Home() {
  useScrollAnimation()

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden" aria-label="Portada principal">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 hero-gradient opacity-95" />
          <div className="absolute inset-0 dot-pattern opacity-30" />
        </div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#0057B8]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8FAFC] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0057B8]" />
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">
                Maracaibo, Venezuela
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[0.95] tracking-tight mb-6">
              Servicios petroleros
              <br />
              <span className="text-[#0057B8]">e industriales</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-10 max-w-xl">
              Especialistas en inyeccion de vapor, automatizacion, SCADA, PLC, telecomunicaciones y conectividad para la industria petrolera venezolana e internacional.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/servicios" className="btn-primary text-base">
                Explorar servicios <ArrowRight size={18} />
              </Link>
              <Link to="/contacto" className="btn-outline text-base">
                Contactanos
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6 text-xs text-gray-500">
              {values.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <span className="text-[#0057B8]"><Icon size={16} /></span>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-[#060F1D] relative overflow-hidden" aria-label="Estadisticas">
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#0057B8]/10 text-[#0057B8] mb-3">
                  <Icon size={18} />
                </div>
                <div className="font-display text-3xl sm:text-4xl font-bold text-white mb-0.5">{value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="section-divider" />
      </section>

      {/* CLIENTS STRIP — no eyebrow, no section header */}
      <section className="bg-[#F8FAFC] py-8" aria-label="Clientes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-3">
            {clients.map((c) => (
              <span
                key={c}
                className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-gray-500 hover:text-[#0B1F3A] hover:border-gray-300 transition-all duration-200"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE — eyebrow allowed (section 4 of 8) */}
      <section className="bg-white py-24 lg:py-32" aria-labelledby="quienes-somos-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="aos-hidden">
              <span className="section-eyebrow">Sobre Nosotros</span>
              <h2 id="quienes-somos-heading" className="section-title mb-6">
                Expertos en ingenieria
                <br />
                petrolera e industrial
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8 max-w-[65ch]">
                <p>
                  <strong className="text-[#0B1F3A]">Service Petroleum and Supply C.A. (SPSOIL)</strong> es una empresa venezolana constituida para garantizar la calidad de servicios de inyeccion de vapor para recuperacion de crudo, automatizacion, control de procesos, instrumentacion, SCADA y PLC.
                </p>
                <p>
                  Contamos con tecnicos especialistas que se desplazan con rapidez al terreno para atender emergencias, trabajando en coordinacion con empresas aliadas para brindar un servicio cada vez mejor.
                </p>
              </div>
              <Link
                to="/nosotros"
                className="inline-flex items-center gap-2 text-[#0057B8] font-semibold text-sm hover:gap-3 transition-all duration-200 group"
              >
                Conocer mas
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#0057B8]/10 group-hover:bg-[#0057B8] group-hover:text-white transition-all duration-200">
                  <CaretRight size={14} />
                </span>
              </Link>
            </div>
            <div className="relative aos-hidden" style={{ transitionDelay: '0.15s' }}>
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={ABOUT_IMG}
                  alt="Tecnicos especialistas de SPSOIL"
                  className="w-full h-[28rem] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060F1D]/40 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl border border-gray-100 px-5 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0057B8] flex items-center justify-center">
                  <Headphones size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0B1F3A]">Respuesta</p>
                  <p className="text-[10px] text-gray-500">inmediata 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID — no eyebrow (only 1 per 3 sections used above) */}
      <section className="bg-[#F8FAFC] py-24 lg:py-32 relative" aria-labelledby="servicios-heading">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 aos-hidden">
            <h2 id="servicios-heading" className="section-title">
              Nuestros Servicios
            </h2>
            <p className="text-gray-500 mt-4 text-sm leading-relaxed max-w-[65ch]">
              Cuatro lineas de servicio especializadas para la industria petrolera y manufacturera.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ icon: Icon, title, desc, tag }, i) => (
              <div
                key={title}
                className="group relative bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#0057B8]/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-500 aos-hidden"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-[#0057B8] group-hover:text-white transition-all duration-300">
                  <Icon size={24} className="text-[#0057B8] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#0B1F3A] mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{desc}</p>
                <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-gray-400 bg-gray-100 px-2.5 py-1 rounded-md">
                  {tag}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 aos-hidden">
            <Link to="/servicios" className="btn-primary inline-flex">
              Ver servicios <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS — different layout family (cards with images, not grid of equal cards) */}
      <section className="bg-[#060F1D] py-24 lg:py-32 relative overflow-hidden" aria-labelledby="proyectos-heading">
        <div className="absolute inset-0 dot-pattern opacity-[0.04]" />
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-[#0057B8]/5 rounded-full blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 aos-hidden">
            <div className="max-w-xl">
              <span className="section-eyebrow text-[#5599ff]">Trayectoria</span>
              <h2 id="proyectos-heading" className="section-title-light">
                Proyectos Destacados
              </h2>
            </div>
            <Link
              to="/proyectos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors shrink-0 group"
            >
              Ver todos
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-gray-600 group-hover:border-white transition-colors">
                <ArrowRight size={12} />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredProjects.map(({ client, desc, img, tag }, i) => (
              <div
                key={client}
                className="group relative bg-[#0B1F3A] rounded-2xl overflow-hidden border border-white/5 hover:border-[#0057B8]/30 transition-all duration-500 aos-hidden"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060F1D] via-[#060F1D]/20 to-transparent" />
                  <span className="absolute top-3 left-3 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider bg-[#0057B8]">
                    {tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-white text-base mb-2">{client}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                    <CheckCircle size={12} weight="fill" />
                    100% ejecutado
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS — plain text grid */}
      <section className="bg-white py-16" aria-label="Marcas aliadas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-3">
            {brands.map((b) => (
              <div
                key={b}
                className="px-5 py-2.5 rounded-xl bg-gray-50 border border-gray-100 text-gray-700 font-display font-semibold text-xs hover:bg-[#0057B8] hover:text-white hover:border-[#0057B8] transition-all duration-300 cursor-default"
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — full-width dark section */}
      <section className="py-24 lg:py-28 relative overflow-hidden" aria-labelledby="cta-home-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060F1D] via-[#0B1F3A] to-[#1C3D5A]" />
        <div className="absolute inset-0 dot-pattern opacity-[0.04]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0057B8]/5 rounded-full blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 id="cta-home-heading" className="section-title-light mb-4">
              Listo para tu proximo proyecto?
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-lg mx-auto">
              Hablemos. Nuestro equipo de ingenieros esta listo para analizar tu proyecto y ofrecerte la solucion mas adecuada.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contacto" className="btn-primary text-base">
                Solicitar cotizacion <ArrowRight size={18} />
              </Link>
              <Link to="/servicios" className="btn-outline text-base">
                Ver servicios
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}