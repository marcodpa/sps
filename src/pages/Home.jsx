import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Wifi,
  Radio,
  Cpu,
  Droplets,
  ChevronRight,
  Award,
  Users,
  Zap,
  Globe,
} from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const HERO_IMG =
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1920&q=80'

const ABOUT_IMG =
  'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=900&q=80'

const PROJECTS_IMG =
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=900&q=80'

const services = [
  {
    icon: <Wifi size={28} />,
    title: 'Conectividad',
    desc: 'Diseño, implantación y construcción de soluciones de red LAN/WAN y redes corporativas de voz, datos y video.',
    color: 'from-blue-600 to-blue-800',
  },
  {
    icon: <Radio size={28} />,
    title: 'Telecomunicaciones',
    desc: 'Tendido de redes, enlaces de fibra óptica, canalizaciones telefónicas y redes de radio dedicadas.',
    color: 'from-teal-600 to-teal-800',
  },
  {
    icon: <Cpu size={28} />,
    title: 'Automatización e Instrumentación',
    desc: 'PLC, SCADA, HMI, RTU, instrumentación electrónica y neumática para la industria petrolera y manufacturera.',
    color: 'from-indigo-600 to-indigo-900',
  },
  {
    icon: <Droplets size={28} />,
    title: 'Servicios Petroleros',
    desc: 'Inyección de vapor en pozo y extracción de crudo con altos estándares operacionales.',
    color: 'from-orange-600 to-orange-800',
  },
]

const stats = [
  { value: '7+', label: 'Clientes estratégicos', icon: <Users size={22} /> },
  { value: '100%', label: 'Ejecución en proyectos', icon: <Award size={22} /> },
  { value: '4', label: 'Líneas de servicio', icon: <Zap size={22} /> },
  { value: '5+', label: 'Países atendidos', icon: <Globe size={22} /> },
]

const clients = [
  'Petroboscan',
  'Chevron',
  'PDVSA GIV',
  'Produsal',
  'Petroquiriquire',
  'Cargill de Venezuela',
  'HPI LLC (Houston)',
]

const brands = ['Cisco', 'Fanuc', 'Modicon', 'Omron', 'Rockwell', 'Siemens', 'Wonderware']

const featuredProjects = [
  {
    client: 'Petroboscan / Chevron',
    desc: 'Servicio especializado de inyección de vapor en Campo Boscán. Capacidad de recuperación de 1.500 barriles diarios.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
    tag: 'Industria Petrolera',
  },
  {
    client: 'Cargill de Venezuela',
    desc: 'Automatización de múltiples líneas de producción con PLC Allen Bradley, sistemas RTD y robot paletizador.',
    img: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=600&q=80',
    tag: 'Automatización',
  },
  {
    client: 'HPI LLC (Houston)',
    desc: 'Programación de PLC/HMI y fibra óptica en plantas de generación eléctrica en EE.UU., Arabia Saudita y Ghana.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
    tag: 'Internacional',
  },
]

export default function Home() {
  useScrollAnimation()

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center" aria-label="Portada principal">
        {/* Background image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={HERO_IMG}
            alt="Planta industrial petrolera"
            className="w-full h-full object-cover"
            loading="eager"
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/90 via-[#0B1F3A]/75 to-[#1C3D5A]/50" />
          {/* Industrial pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />
        </div>

        {/* Diagonal bottom shape */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-[#F4F6F8]"
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 60%, 0 100%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
          <div className="max-w-3xl">
            <span className="section-eyebrow">Maracaibo, Venezuela</span>
            <div className="mb-4">
              <img src="/assets/sps-oil-logo.png" alt="SPSOIL logo" className="h-14 w-auto mb-2" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
              Servicios petroleros e industriales de{' '}
              <span className="text-[#0057B8]">alta calidad</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl">
              Especialistas en inyección de vapor, automatización, SCADA, PLC, telecomunicaciones y conectividad para la industria petrolera venezolana y latinoamericana.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/servicios" className="btn-primary text-base px-8 py-4">
                Nuestros Servicios <ArrowRight size={18} />
              </Link>
              <Link to="/contacto" className="btn-outline text-base px-8 py-4">
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-[#0B1F3A] py-12" aria-label="Estadísticas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ value, label, icon }) => (
              <div key={label} className="text-center group">
                <div className="flex justify-center mb-3">
                  <div className="text-[#0057B8]">{icon}</div>
                </div>
                <div className="font-display text-4xl font-bold text-white mb-1">{value}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENTS STRIP ── */}
      <section className="bg-[#F4F6F8] py-8 border-b border-gray-200" aria-label="Clientes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-6 font-medium">
            Clientes que confían en nosotros
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {clients.map((c) => (
              <span
                key={c}
                className="text-sm font-semibold text-gray-500 hover:text-[#0B1F3A] transition-colors px-3 py-1.5 rounded-full border border-gray-200 bg-white"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="bg-white py-24" aria-labelledby="quienes-somos-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aos-hidden">
              <span className="section-eyebrow">Sobre Nosotros</span>
              <h2 id="quienes-somos-heading" className="section-title mb-4">
                ¿Quiénes somos?
              </h2>
              <div className="accent-line mb-6" />
              <p className="text-gray-600 leading-relaxed mb-5">
                <strong className="text-[#0B1F3A]">Service Petroleum and Supply C.A. (SPSOIL)</strong> es una empresa venezolana constituida para garantizar la calidad de servicios de inyección de vapor para recuperación de crudo, automatización, control de procesos, instrumentación, SCADA y PLC.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Contamos con técnicos especialistas que se desplazan con rapidez al terreno para atender emergencias, y trabajamos en coordinación con empresas aliadas para brindar un servicio cada vez mejor a nuestros clientes.
              </p>
              <Link to="/nosotros" className="btn-outline-dark inline-flex items-center gap-2">
                Conocer más <ChevronRight size={16} />
              </Link>
            </div>
            <div className="relative aos-hidden" style={{ transitionDelay: '0.15s' }}>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#0057B8]/10 rounded-3xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#1C3D5A]/10 rounded-3xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={ABOUT_IMG}
                  alt="Técnicos especialistas de SPSOIL en campo"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                  width="900"
                  height="600"
                />
                <div className="absolute bottom-4 left-4 bg-[#0057B8] text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
                  Respuesta inmediata
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="bg-[#F4F6F8] py-24" aria-labelledby="servicios-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 aos-hidden">
            <span className="section-eyebrow">Lo que hacemos</span>
            <h2 id="servicios-heading" className="section-title">
              Nuestros Servicios
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon, title, desc, color }, i) => (
              <div
                key={title}
                className="card-service group aos-hidden"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200`}
                >
                  {icon}
                </div>
                <h3 className="font-display text-lg font-bold text-[#0B1F3A] mb-3">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{desc}</p>
                <Link
                  to="/servicios"
                  className="inline-flex items-center text-[#0057B8] text-sm font-semibold hover:gap-2 gap-1 transition-all"
                >
                  Ver más <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 aos-hidden">
            <Link to="/servicios" className="btn-primary inline-flex">
              Ver todos los servicios <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="bg-[#0B1F3A] py-24 relative overflow-hidden" aria-labelledby="proyectos-heading">
        {/* subtle pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230057B8' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 aos-hidden">
            <span className="section-eyebrow">Trayectoria</span>
            <h2 id="proyectos-heading" className="section-title-light">
              Proyectos Destacados
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map(({ client, desc, img, tag }, i) => (
              <div
                key={client}
                className="group rounded-2xl overflow-hidden bg-[#1C3D5A] hover:bg-[#234E6E] transition-colors duration-300 aos-hidden"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={img}
                    alt={`Proyecto ${client}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width="600"
                    height="400"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/70 to-transparent" />
                  <span className="absolute top-3 left-3 bg-[#0057B8] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-white text-lg mb-2">{client}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{desc}</p>
                  <span className="inline-flex items-center text-[#0057B8] text-sm font-semibold gap-1">
                    100% ejecutado <Award size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 aos-hidden">
            <Link to="/proyectos" className="btn-outline inline-flex">
              Ver todos los proyectos <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── BRANDS ── */}
      <section className="bg-white py-16 border-b border-gray-100" aria-label="Marcas aliadas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-8 font-medium">
            Marcas con las que trabajamos
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {brands.map((b) => (
              <div
                key={b}
                className="px-6 py-3 border-2 border-gray-100 rounded-xl text-gray-600 font-semibold font-display hover:border-[#0057B8] hover:text-[#0B1F3A] transition-all duration-200 text-sm"
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA / MAP ── */}
      <section className="bg-[#F4F6F8] py-24" aria-labelledby="contacto-home-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aos-hidden">
              <span className="section-eyebrow">Ubicación</span>
              <h2 id="contacto-home-heading" className="section-title mb-4">
                Encuéntranos en Maracaibo
              </h2>
              <div className="accent-line mb-6" />
              <div className="space-y-4 mb-8 text-gray-600">
                <p className="flex items-start gap-3">
                  <span className="text-[#0057B8] font-bold mt-0.5">📍</span>
                  Av. 5, Calle 13, Nº 26A-162, San Francisco, Maracaibo, Zulia, Venezuela.
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-[#0057B8] font-bold">📞</span>
                  Oficina: 0261 322 6494
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-[#0057B8] font-bold">📱</span>
                  Móvil: +58 414 636 1373
                </p>
              </div>
              <Link to="/contacto" className="btn-primary">
                Envíanos un mensaje <ArrowRight size={18} />
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl h-80 aos-hidden" style={{ transitionDelay: '0.15s' }}>
              <iframe
                title="Ubicación SPSOIL en Maracaibo"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.9327657204856!2d-72.2131!3d10.6290!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8999000000001%3A0x0!2sCalle+13+%26+Avenida+5%2C+Maracaibo+4004%2C+Zulia!5e0!3m2!1ses!2sve!4v1620000000000!5m2!1ses!2sve"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
