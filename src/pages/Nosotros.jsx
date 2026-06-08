import { Link } from 'react-router-dom'
import {
  Crosshair, Eye, ArrowRight, ShieldCheck, Users, Headphones,
  Target, Lightning, TrendUp, CheckCircle,
} from '@phosphor-icons/react'
import { Reveal, Stagger, StaggerItem } from '../lib/motion'
import PageHero from '../components/PageHero'
import MagneticButton from '../components/MagneticButton'

const IMG_MISION = 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=80'
const IMG_VISION = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80'

const values = [
  { icon: TrendUp, text: 'Calidad e innovacion continua' },
  { icon: ShieldCheck, text: 'Seguridad e higiene industrial' },
  { icon: Users, text: 'Talento humano motivado' },
  { icon: Headphones, text: 'Respuesta rapida ante emergencias' },
  { icon: Target, text: 'Coordinacion con empresas aliadas' },
  { icon: Lightning, text: 'Armonia con el ambiente' },
]

export default function Nosotros() {
  return (
    <>
      <PageHero
        kicker="La empresa"
        title="Quienes"
        accent="somos."
        subtitle="Una empresa venezolana de ingenieria petrolera e industrial, construida sobre calidad, seguridad y respuesta en campo."
      />

      {/* Intro */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl mx-auto text-center">
            <h2 className="h-section mb-6">Service Petroleum and Supply C.A.</h2>
            <div className="mx-auto mb-8 h-1 w-12 rounded-full bg-brand-blue" />
            <p className="mx-auto mb-4 max-w-[65ch] text-steel-600 leading-relaxed">
              Empresa venezolana constituida para garantizar la calidad de servicios de
              inyeccion de vapor para recuperacion de crudo en fosas y pozos petroleros, asi
              como proyectos de automatizacion, control de procesos, instrumentacion, SCADA y PLC.
            </p>
            <p className="mx-auto max-w-[65ch] text-sm leading-relaxed text-steel-500">
              Nuestro objetivo es superar las expectativas de los clientes mediante un talento
              humano motivado y la mejora continua. Contamos con tecnicos especialistas que se
              desplazan con rapidez al terreno para atender emergencias.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission — split image left */}
      <section className="bg-steel-50 py-24 lg:py-28" aria-labelledby="mision-h">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
            <Reveal>
              <div className="relative clip-corner overflow-hidden rounded-2xl">
                <img src={IMG_MISION} alt="Operacion de inyeccion de vapor" className="h-[26rem] w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                <Crosshair size={22} />
              </div>
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-blue">Mision</p>
              <h2 id="mision-h" className="h-section mb-6">Nuestra mision</h2>
              <p className="max-w-[60ch] text-steel-600 leading-relaxed">
                Prestar un servicio de inyeccion de vapor para la recuperacion de crudo de
                excelente calidad, superando las necesidades de clientes y proveedores.
                Garantizar el crecimiento y la rentabilidad con un talento humano efectivo,
                estimulando la mejora permanente del proceso productivo en condiciones de
                seguridad e higiene, en armonia con el ambiente.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision — split image right, dark */}
      <section className="relative overflow-hidden bg-ink-950 py-24 lg:py-28" aria-labelledby="vision-h">
        <div className="absolute inset-0 bp-grid bp-grid-fade opacity-50" />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
            <Reveal className="lg:order-2">
              <div className="relative clip-corner overflow-hidden rounded-2xl border border-white/10">
                <img src={IMG_VISION} alt="Automatizacion y control industrial" className="h-[26rem] w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 to-transparent" />
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:order-1">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-blueLight">
                <Eye size={22} />
              </div>
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-blueLight">Vision</p>
              <h2 id="vision-h" className="h-section text-white mb-6">Nuestra vision</h2>
              <p className="max-w-[60ch] text-steel-300 leading-relaxed">
                Posicionarse entre las empresas lideres del sector, buscando cada dia un mayor
                reconocimiento por su alta capacidad, excelencia operacional, calidad de
                servicio y responsabilidad.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values — grid (breaks the split pattern) */}
      <section className="bg-white py-24 lg:py-28" aria-labelledby="valores-h">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-12">
            <h2 id="valores-h" className="h-section mb-4">Lo que nos define.</h2>
            <p className="text-steel-500 leading-relaxed">
              La respuesta ante emergencias es prioritaria: nuestros tecnicos especialistas se
              mueven rapido en el terreno para prestar el servicio que el cliente requiere.
            </p>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map(({ icon: I, text }) => (
              <StaggerItem key={text}>
                <div className="group flex h-full items-start gap-4 rounded-2xl border border-steel-200 bg-steel-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:bg-white hover:shadow-lift">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                    <I size={20} />
                  </span>
                  <span className="pt-1.5 text-sm font-medium leading-snug text-ink-800">{text}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink-950 py-24" aria-labelledby="cta-nos-h">
        <div className="absolute inset-0 bp-grid bp-grid-fade opacity-60" />
        <Reveal className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-nos-h" className="font-display text-3xl md:text-4xl font-bold text-white tracking-tightest mb-4">
            Listo para trabajar con nosotros?
          </h2>
          <p className="text-steel-300 mb-9 max-w-xl mx-auto leading-relaxed">
            Descubre como podemos llevar tu proyecto petrolero o industrial al siguiente nivel.
          </p>
          <MagneticButton to="/contacto" className="btn-primary">
            Contactanos ahora <ArrowRight size={18} weight="bold" />
          </MagneticButton>
        </Reveal>
      </section>
    </>
  )
}
