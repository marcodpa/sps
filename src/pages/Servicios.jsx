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
    icon: <Wifi size={32} />,
    title: 'Conectividad',
    subtitle: 'Infraestructura de red empresarial',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
    color: '#2563EB',
    bgColor: 'from-blue-600 to-blue-900',
    items: [
      {
        icon: <Network size={16} />,
        text: 'Diseño, implantación y construcción de soluciones de conectividad.',
      },
      {
        icon: <Cable size={16} />,
        text: 'Instalación de redes LAN y/o WAN.',
      },
      {
        icon: <Monitor size={16} />,
        text: 'Redes corporativas de servicios de voz, datos y video.',
      },
    ],
  },
  {
    id: 'telecomunicaciones',
    icon: <Radio size={32} />,
    title: 'Telecomunicaciones',
    subtitle: 'Infraestructura de comunicaciones',
    img: 'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?auto=format&fit=crop&w=900&q=80',
    color: '#0D9488',
    bgColor: 'from-teal-600 to-teal-900',
    items: [
      {
        icon: <Cable size={16} />,
        text: 'Instalación de canalizaciones telefónicas.',
      },
      {
        icon: <Network size={16} />,
        text: 'Tendido de redes aéreas, ductos y directamente enterrados.',
      },
      {
        icon: <Wifi size={16} />,
        text: 'Construcción de enlaces por cables de fibra óptica.',
      },
      {
        icon: <Radio size={16} />,
        text: 'Enlaces dedicados de radio o frame relay.',
      },
    ],
  },
  {
    id: 'automatizacion',
    icon: <Cpu size={32} />,
    title: 'Automatización e Instrumentación',
    subtitle: 'Control y supervisión industrial',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    color: '#4F46E5',
    bgColor: 'from-indigo-600 to-indigo-900',
    items: [
      {
        icon: <Settings size={16} />,
        text: 'Instalación de instrumentos en procesos que requieran medición, supervisión y control.',
      },
      {
        icon: <Cable size={16} />,
        text: 'Cableado de distintos calibres, conduit, cajas de interconexión y tuberías para instrumentos.',
      },
      {
        icon: <Monitor size={16} />,
        text: 'Suministro de personal técnico capacitado para operaciones y mantenimiento de instalaciones automatizadas.',
      },
      {
        icon: <Cpu size={16} />,
        text: 'Diseño e implementación de sistemas de supervisión, medición y control mediante automatización.',
      },
      {
        icon: <Settings size={16} />,
        text: 'Instalación, programación y mantenimiento de PLC, RTU, controladores, instrumentación inteligente, HMI y DCS.',
      },
      {
        icon: <Monitor size={16} />,
        text: 'Diseño e implementación de sistemas SCADA.',
      },
      {
        icon: <Gauge size={16} />,
        text: 'Mantenimiento y reparación de equipos de supervisión y control electrónicos y neumáticos.',
      },
      {
        icon: <Settings size={16} />,
        text: 'Adiestramiento en sistemas de supervisión y control.',
      },
      {
        icon: <Gauge size={16} />,
        text: 'Mantenimiento y calibración de instrumentación: transmisores de flujo, presión, nivel, temperatura y multivariable; medidores de flujo másico; sensores y switches; detectores de llama y gas; actuadores eléctricos.',
      },
    ],
  },
  {
    id: 'petroleros',
    icon: <Droplets size={32} />,
    title: 'Servicios Petroleros',
    subtitle: 'Recuperación de crudo',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=80',
    color: '#EA580C',
    bgColor: 'from-orange-600 to-orange-900',
    items: [
      {
        icon: <Flame size={16} />,
        text: 'Inyección de vapor en pozo para recuperación de crudo.',
      },
      {
        icon: <Droplets size={16} />,
        text: 'Extracción de crudo en fosas y pozos petroleros.',
      },
    ],
  },
]

export default function Servicios() {
  useScrollAnimation()

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 flex items-center min-h-[60vh]" aria-label="Servicios">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={HERO_IMG}
            alt="Panel de control industrial"
            className="w-full h-full object-cover"
            loading="eager"
            width="1920"
            height="800"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/90 via-[#0B1F3A]/80 to-[#1C3D5A]/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-eyebrow">Lo que ofrecemos</span>
          <h1 className="section-title-light mb-4">Nuestros Servicios</h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Cuatro líneas de servicio especializadas para la industria petrolera y manufacturera venezolana e internacional.
          </p>
        </div>
      </section>

      {/* Services - alternating layout */}
      {services.map(({ id, icon, title, subtitle, img, color, bgColor, items }, idx) => (
        <section
          key={id}
          id={id}
          className={`py-24 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F4F6F8]'}`}
          aria-labelledby={`${id}-heading`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${
                idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image side */}
              <div
                className={`${idx % 2 !== 0 ? 'lg:order-2' : ''} aos-hidden`}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={img}
                    alt={`Servicio de ${title}`}
                    className="w-full h-72 object-cover"
                    loading="lazy"
                    width="900"
                    height="600"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${bgColor} opacity-60`}
                  />
                  <div className="absolute top-6 left-6 bg-white/15 backdrop-blur-sm rounded-xl p-4 text-white">
                    {icon}
                    <p className="font-display font-bold text-lg mt-2">{title}</p>
                    <p className="text-sm text-white/80">{subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Content side */}
              <div
                className={`${idx % 2 !== 0 ? 'lg:order-1' : ''} aos-hidden`}
                style={{ transitionDelay: '0.12s' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-white"
                  style={{ background: color }}
                >
                  {icon}
                </div>
                <span className="section-eyebrow">Servicio {idx + 1} de 4</span>
                <h2
                  id={`${id}-heading`}
                  className="section-title mb-2"
                >
                  {title}
                </h2>
                <p className="text-gray-400 text-sm mb-6 font-medium uppercase tracking-wide">
                  {subtitle}
                </p>
                <div className="accent-line mb-8" />
                <ul className="space-y-3">
                  {items.map(({ icon: itemIcon, text }) => (
                    <li key={text} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                      <span style={{ color }} className="mt-1 shrink-0">
                        <CheckCircle size={16} />
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
      <section className="bg-[#0B1F3A] py-20" aria-labelledby="marcas-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 aos-hidden">
            <span className="section-eyebrow">Tecnología de punta</span>
            <h2 id="marcas-heading" className="section-title-light">
              Marcas con las que Trabajamos
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {brands.map((b, i) => (
              <div
                key={b}
                className="bg-white/10 hover:bg-[#0057B8] rounded-xl px-4 py-5 text-center text-white font-display font-bold text-sm transition-all duration-200 hover:scale-105 cursor-default aos-hidden"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0057B8] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            ¿Necesitas alguno de estos servicios?
          </h2>
          <p className="text-orange-100 mb-8 max-w-xl mx-auto">
            Nuestro equipo está listo para analizar tu proyecto y ofrecerte la solución más adecuada.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-white text-[#0057B8] hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition-colors text-base"
          >
            Solicitar información <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
