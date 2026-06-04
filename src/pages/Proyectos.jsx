import { Link } from 'react-router-dom'
import { Medal, ArrowRight, CheckCircle, Globe, Factory, Cpu } from '@phosphor-icons/react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const HERO_IMG =
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1920&q=80'

const projects = [
  {
    client: 'Petroboscan',
    category: 'Petrolero',
    categoryColor: '#EA580C',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=700&q=80',
    icon: Factory,
    works: [
      'Servicio especializado de inyeccion de vapor en Campo Boscan (contrato 3M-043-004-D-16-S-102).',
      'Capacidad de recuperacion de 1.500 barriles diarios.',
      'Multiples extensiones de contrato con ejecucion del 100%.',
    ],
  },
  {
    client: 'Chevron',
    category: 'Petrolero',
    categoryColor: '#EA580C',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80',
    icon: Factory,
    works: [
      'Servicio especializado de inyeccion de vapor en Campo Boscan (contratos CW1402520 y CW1299675).',
      'Ejecucion del 100% en ambos contratos.',
    ],
  },
  {
    client: 'PDVSA GIV',
    category: 'Petrolero',
    categoryColor: '#EA580C',
    img: 'https://images.unsplash.com/photo-1623227413711-25ee4388dae3?auto=format&fit=crop&w=700&q=80',
    icon: Factory,
    works: [
      'Suministro, operacion y mantenimiento de generadores de vapor portatiles.',
      'Ejecucion del 100%.',
    ],
  },
  {
    client: 'Produsal',
    category: 'Automatizacion',
    categoryColor: '#4F46E5',
    img: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=700&q=80',
    icon: Cpu,
    works: [
      'Suministro e instalacion de CCM inteligente para manejo de motores.',
      'Programacion de PLC y HMI Wonderware.',
    ],
  },
  {
    client: 'Petroquiriquire',
    category: 'Automatizacion',
    categoryColor: '#4F46E5',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80',
    icon: Cpu,
    works: [
      'Automatizacion de estacion de flujo EF-H4 con Allen Bradley.',
      'Red de comunicacion, tanques de medida y produccion.',
      'Control de bombas, HMI y CCM inteligente.',
    ],
  },
  {
    client: 'Cargill de Venezuela',
    category: 'Automatizacion',
    categoryColor: '#4F46E5',
    img: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?auto=format&fit=crop&w=700&q=80',
    icon: Cpu,
    works: [
      'Automatizacion de lineas de produccion: pasta, lasana, pasticho.',
      'Sistemas RTD, cosedora, robot paletizador.',
      'Soporte Wonderware InTouch y PLC/PanelView Allen Bradley.',
      'Redes de fibra optica y sistema OEE.',
    ],
  },
  {
    client: 'HPI LLC (Houston)',
    category: 'Internacional',
    categoryColor: '#0D9488',
    img: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&w=700&q=80',
    icon: Globe,
    works: [
      'Programacion de PLC y HMI en plantas de generacion electrica.',
      'Networking y fibra optica en EE.UU., Arabia Saudita, Abu Dabi, Venezuela y Ghana.',
      'Arranque de turbinas de generacion electrica.',
    ],
  },
]

const stats = [
  { value: '7+', label: 'Clientes atendidos' },
  { value: '100%', label: 'Tasa de ejecucion' },
  { value: '5', label: 'Paises' },
  { value: '10+', label: 'Contratos completados' },
]

export default function Proyectos() {
  useScrollAnimation()

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 min-h-[55vh] flex items-center overflow-hidden" aria-label="Proyectos">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 hero-gradient opacity-95" />
          <div className="absolute inset-0 dot-pattern opacity-20" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0057B8]" />
            <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Trayectoria comprobada</span>
          </div>
          <h1 className="section-title-light text-5xl lg:text-6xl mb-4">Nuestros Proyectos</h1>
          <p className="text-gray-400 text-base max-w-2xl leading-relaxed">
            Una historia de proyectos completados al 100% para los principales actores de la industria petrolera, manufacturera y energetica.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-[#060F1D] relative overflow-hidden" aria-label="Metricas">
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-display text-3xl sm:text-4xl font-bold text-white mb-0.5">{value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="section-divider" />
      </section>

      {/* Projects grid */}
      <section className="bg-[#F8FAFC] py-24 lg:py-28" aria-labelledby="proyectos-grid-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 aos-hidden">
            <h2 id="proyectos-grid-heading" className="section-title">Proyectos Ejecutados</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map(({ client, category, categoryColor, img, icon: Icon, works }, i) => (
              <article
                key={client}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#0057B8]/20 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-0.5 aos-hidden"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060F1D]/50 to-transparent" />
                  <span
                    className="absolute top-3 right-3 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider flex items-center gap-1"
                    style={{ background: categoryColor }}
                  >
                    <Icon size={12} /> {category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-display font-bold text-[#0B1F3A] text-base leading-tight">{client}</h3>
                    <span className="shrink-0 ml-3 inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-md border border-emerald-200">
                      <Medal size={10} weight="fill" />
                      100%
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {works.map((w) => (
                      <li key={w} className="flex items-start gap-2 text-sm text-gray-500 leading-relaxed">
                        <CheckCircle size={13} className="text-[#0057B8] shrink-0 mt-0.5" weight="fill" />
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060F1D] via-[#0B1F3A] to-[#1C3D5A]" />
        <div className="absolute inset-0 dot-pattern opacity-[0.04]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0057B8]/5 rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
              Tu proyecto podria ser el proximo
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto text-sm">
              Contactanos y unite a la lista de empresas que confian en la calidad y experiencia de SPSOIL.
            </p>
            <Link to="/contacto" className="btn-primary text-base">
              Iniciar un proyecto <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}