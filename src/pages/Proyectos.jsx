import { Link } from 'react-router-dom'
import { Medal, ArrowRight, CheckCircle, Globe, Factory, Cpu } from '@phosphor-icons/react'
import { Reveal, Stagger, StaggerItem } from '../lib/motion'
import PageHero from '../components/PageHero'
import AnimatedCounter from '../components/AnimatedCounter'
import SpotlightCard from '../components/SpotlightCard'
import MagneticButton from '../components/MagneticButton'

// Brand-locked category accents: petrolero = red, automatizacion = blue, internacional = steel
const CAT = {
  Petrolero: { dot: 'bg-brand-red', text: 'text-brand-red', badge: 'bg-brand-red/10 text-brand-red border-brand-red/20' },
  Automatizacion: { dot: 'bg-brand-blue', text: 'text-brand-blue', badge: 'bg-brand-blue/10 text-brand-blue border-brand-blue/20' },
  Internacional: { dot: 'bg-steel-500', text: 'text-steel-600', badge: 'bg-steel-100 text-steel-600 border-steel-200' },
}

const projects = [
  { client: 'Petroboscan', category: 'Petrolero', icon: Factory,
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=700&q=80',
    works: ['Inyeccion de vapor en Campo Boscan (contrato 3M-043-004-D-16-S-102).', 'Capacidad de recuperacion de 1.500 barriles diarios.', 'Multiples extensiones de contrato con ejecucion del 100%.'] },
  { client: 'Chevron', category: 'Petrolero', icon: Factory,
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80',
    works: ['Inyeccion de vapor en Campo Boscan (contratos CW1402520 y CW1299675).', 'Ejecucion del 100% en ambos contratos.'] },
  { client: 'PDVSA GIV', category: 'Petrolero', icon: Factory,
    img: 'https://images.unsplash.com/photo-1623227413711-25ee4388dae3?auto=format&fit=crop&w=700&q=80',
    works: ['Suministro, operacion y mantenimiento de generadores de vapor portatiles.', 'Ejecucion del 100%.'] },
  { client: 'Produsal', category: 'Automatizacion', icon: Cpu,
    img: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=700&q=80',
    works: ['Suministro e instalacion de CCM inteligente para manejo de motores.', 'Programacion de PLC y HMI Wonderware.'] },
  { client: 'Petroquiriquire', category: 'Automatizacion', icon: Cpu,
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80',
    works: ['Automatizacion de estacion de flujo EF-H4 con Allen Bradley.', 'Red de comunicacion, tanques de medida y produccion.', 'Control de bombas, HMI y CCM inteligente.'] },
  { client: 'Cargill de Venezuela', category: 'Automatizacion', icon: Cpu,
    img: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?auto=format&fit=crop&w=700&q=80',
    works: ['Automatizacion de lineas de produccion: pasta, lasana, pasticho.', 'Sistemas RTD, cosedora, robot paletizador.', 'Soporte Wonderware InTouch y PLC/PanelView Allen Bradley.', 'Redes de fibra optica y sistema OEE.'] },
  { client: 'HPI LLC, Houston', category: 'Internacional', icon: Globe,
    img: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&w=700&q=80',
    works: ['Programacion de PLC y HMI en plantas de generacion electrica.', 'Networking y fibra optica en EE.UU., Arabia Saudita, Abu Dabi, Venezuela y Ghana.', 'Arranque de turbinas de generacion electrica.'] },
]

const stats = [
  { value: '7', suffix: '+', label: 'Clientes atendidos' },
  { value: '100', suffix: '%', label: 'Tasa de ejecucion' },
  { value: '5', suffix: '', label: 'Paises' },
  { value: '10', suffix: '+', label: 'Contratos completados' },
]

export default function Proyectos() {
  return (
    <>
      <PageHero
        kicker="Trayectoria comprobada"
        title="Nuestros"
        accent="proyectos."
        subtitle="Proyectos completados al 100% para los principales actores de la industria petrolera, manufacturera y energetica."
      />

      {/* Stats band */}
      <section className="bg-ink-950 border-t border-white/10" aria-label="Metricas">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <Stagger className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/10">
            {stats.map(({ value, suffix, label }) => (
              <StaggerItem key={label} className="px-6 py-10 text-center">
                <div className="font-display text-4xl lg:text-5xl font-bold text-white tabular-nums">
                  <AnimatedCounter value={value} suffix={suffix} />
                </div>
                <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-steel-400">{label}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Projects grid */}
      <section className="bg-steel-50 py-24 lg:py-28" aria-labelledby="grid-h">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12">
            <h2 id="grid-h" className="h-section">Proyectos ejecutados.</h2>
          </Reveal>
          <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map(({ client, category, icon: Icon, img, works }) => {
              const c = CAT[category]
              return (
                <StaggerItem key={client}>
                  <SpotlightCard
                    as="article"
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-steel-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img src={img} alt="" className="h-full w-full object-cover transition-transform duration-[1.1s] group-hover:scale-110" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/10 to-transparent" />
                      <span className={`absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] backdrop-blur-sm ${c.badge}`}>
                        <Icon size={12} /> {category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-4 flex items-start justify-between gap-3">
                        <h3 className="font-display text-lg font-bold leading-tight text-ink-900">{client}</h3>
                        <span className="inline-flex shrink-0 items-center gap-1 rounded-md border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                          <Medal size={10} weight="fill" /> 100%
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {works.map((w) => (
                          <li key={w} className="flex items-start gap-2 text-sm leading-relaxed text-steel-500">
                            <CheckCircle size={14} weight="fill" className={`mt-0.5 shrink-0 ${c.text}`} />
                            {w}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </SpotlightCard>
                </StaggerItem>
              )
            })}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink-950 py-24" aria-labelledby="cta-proy-h">
        <div className="absolute inset-0 bp-grid bp-grid-fade opacity-60" />
        <Reveal className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-proy-h" className="font-display text-3xl md:text-4xl font-bold text-white tracking-tightest mb-4">
            Tu proyecto podria ser el proximo.
          </h2>
          <p className="text-steel-300 mb-9 max-w-xl mx-auto leading-relaxed">
            Unete a la lista de empresas que confian en la calidad y experiencia de SPS.
          </p>
          <MagneticButton to="/contacto" className="btn-primary">
            Iniciar un proyecto <ArrowRight size={18} weight="bold" />
          </MagneticButton>
        </Reveal>
      </section>
    </>
  )
}
