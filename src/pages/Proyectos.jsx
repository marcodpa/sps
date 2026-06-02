import { Link } from 'react-router-dom'
import { Award, ArrowRight, CheckCircle, Globe, Factory, Cpu } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const HERO_IMG =
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1920&q=80'

const projects = [
  {
    client: 'Petroboscan',
    category: 'Industria Petrolera',
    categoryColor: '#EA580C',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=700&q=80',
    icon: <Factory size={20} />,
    works: [
      'Servicio especializado de inyección de vapor en Campo Boscán (contrato 3M-043-004-D-16-S-102).',
      'Capacidad de recuperación de 1.500 barriles diarios.',
      'Múltiples extensiones de contrato con ejecución del 100%.',
    ],
    execution: '100%',
  },
  {
    client: 'Chevron',
    category: 'Industria Petrolera',
    categoryColor: '#EA580C',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80',
    icon: <Factory size={20} />,
    works: [
      'Servicio especializado de inyección de vapor en Campo Boscán (contratos CW1402520 y CW1299675).',
      'Ejecución del 100% en ambos contratos.',
    ],
    execution: '100%',
  },
  {
    client: 'PDVSA GIV',
    category: 'Industria Petrolera',
    categoryColor: '#EA580C',
    img: 'https://images.unsplash.com/photo-1623227413711-25ee4388dae3?auto=format&fit=crop&w=700&q=80',
    icon: <Factory size={20} />,
    works: [
      'Suministro, operación y mantenimiento de generadores de vapor portátiles.',
      'Ejecución del 100%.',
    ],
    execution: '100%',
  },
  {
    client: 'Produsal',
    category: 'Automatización',
    categoryColor: '#4F46E5',
    img: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=700&q=80',
    icon: <Cpu size={20} />,
    works: [
      'Suministro e instalación de CCM inteligente para manejo de motores.',
      'Programación de PLC y HMI Wonderware.',
    ],
    execution: '100%',
  },
  {
    client: 'Petroquiriquire',
    category: 'Automatización',
    categoryColor: '#4F46E5',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80',
    icon: <Cpu size={20} />,
    works: [
      'Automatización de estación de flujo EF-H4 con Allen Bradley.',
      'Red de comunicación, tanques de medida y producción.',
      'Control de bombas, HMI y CCM inteligente.',
    ],
    execution: '100%',
  },
  {
    client: 'Cargill de Venezuela',
    category: 'Automatización',
    categoryColor: '#4F46E5',
    img: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?auto=format&fit=crop&w=700&q=80',
    icon: <Cpu size={20} />,
    works: [
      'Automatización de múltiples líneas de producción: pasta, lasaña, pasticho.',
      'Sistemas RTD, cosedora, robot paletizador.',
      'Soporte Wonderware InTouch.',
      'Suministro de PLC/PanelView Allen Bradley.',
      'Redes de fibra óptica y sistema OEE.',
      'Upgrades de PLC en producción.',
    ],
    execution: '100%',
  },
  {
    client: 'HPI LLC (Houston) / SWES Ghana y Venezuela',
    category: 'Internacional',
    categoryColor: '#0D9488',
    img: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&w=700&q=80',
    icon: <Globe size={20} />,
    works: [
      'Programación de PLC y HMI en plantas de generación eléctrica.',
      'Networking y fibra óptica en EE.UU., Arabia Saudita, Abu Dabi, Venezuela y Ghana.',
      'Arranque de turbinas de generación eléctrica.',
    ],
    execution: '100%',
  },
]

const stats = [
  { value: '7+', label: 'Clientes atendidos' },
  { value: '100%', label: 'Tasa de ejecución' },
  { value: '5', label: 'Países' },
  { value: '10+', label: 'Contratos completados' },
]

export default function Proyectos() {
  useScrollAnimation()

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 flex items-center min-h-[60vh]" aria-label="Proyectos">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={HERO_IMG}
            alt="Proyectos industriales SPSOIL"
            className="w-full h-full object-cover"
            loading="eager"
            width="1920"
            height="800"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/90 via-[#0B1F3A]/80 to-[#1C3D5A]/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-eyebrow">Trayectoria comprobada</span>
          <h1 className="section-title-light mb-4">Nuestros Proyectos</h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Una historia de proyectos completados al 100% para los principales actores de la industria petrolera, manufacturera y energética.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#E8842B] py-12" aria-label="Métricas de proyectos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-display text-4xl font-bold text-white mb-1">{value}</div>
                <div className="text-sm text-orange-100 uppercase tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="bg-[#F4F6F8] py-24" aria-labelledby="proyectos-grid-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 aos-hidden">
            <span className="section-eyebrow">Cartera de clientes</span>
            <h2 id="proyectos-grid-heading" className="section-title">
              Proyectos Ejecutados
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(({ client, category, categoryColor, img, icon, works, execution }, i) => (
              <article
                key={client}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 aos-hidden"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={img}
                    alt={`Proyecto para ${client}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="700"
                    height="466"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/60 to-transparent" />
                  <span
                    className="absolute top-3 right-3 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1"
                    style={{ background: categoryColor }}
                  >
                    {icon} {category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-display font-bold text-[#0B1F3A] text-lg leading-tight">
                      {client}
                    </h3>
                    <span className="shrink-0 ml-3 inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full border border-green-200">
                      <Award size={12} />
                      {execution}
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {works.map((w) => (
                      <li key={w} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                        <CheckCircle size={14} className="text-[#E8842B] shrink-0 mt-0.5" />
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
      <section className="bg-[#0B1F3A] py-20" aria-labelledby="proyectos-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1C3D5A] rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#E8842B]/10 rounded-full" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#E8842B]/5 rounded-full" />
            <div className="relative">
              <h2
                id="proyectos-cta"
                className="font-display text-3xl font-bold text-white mb-4"
              >
                Tu proyecto podría ser el próximo
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Contáctanos y únete a la lista de empresas que confían en la calidad y experiencia de SPSOIL.
              </p>
              <Link to="/contacto" className="btn-primary inline-flex text-base px-8 py-4">
                Iniciar un proyecto <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
