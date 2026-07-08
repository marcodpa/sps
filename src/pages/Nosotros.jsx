import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Clock, Wrench, Truck, ShieldCheck, Camera, Lightning, Target, Users, GearSix, ThermometerSimple, Cpu, Radio, Factory, Gauge, Drop } from '@phosphor-icons/react'
import PageHero from '../components/PageHero'
import { Reveal, Stagger, StaggerItem } from '../lib/motion'
import { capabilityIcons, media } from '../data/spsContent'
import FieldImage from '../components/FieldImage'

const principles = [
  'Respuesta rapida ante requerimientos de campo.',
  'Seguridad industrial como condicion de trabajo.',
  'Mejora continua en equipos, procesos y personal.',
  'Coordinacion con clientes y empresas aliadas.',
  'Respeto ambiental en operaciones con hidrocarburos.',
]

export default function Nosotros() {
  return (
    <>
      <PageHero
        kicker="La empresa"
        title="SPS trabaja donde la operacion"
        accent="no puede detenerse."
        subtitle="Service Petroleum and Supply C.A. es una empresa venezolana enfocada en servicios petroleros, recuperacion de crudo, vapor, automatizacion y soporte industrial."
        image={media.heroAbout}
      />

      <section className="bg-white py-20 text-ink-900 lg:py-28">
        <div className="grid gap-12 px-4 sm:px-6 lg:grid-cols-[.95fr_1.05fr] lg:px-8">
          <Reveal>
            <FieldImage src={media.bajoGrandeCaldera} className="h-full min-h-[30rem] w-full rounded-[1.5rem] object-cover" />
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col justify-center">
            <p className="mono-label mb-4 text-brand-red">Service Petroleum and Supply C.A.</p>
            <h2 className="font-display text-2xl font-bold leading-tight text-ink-900 sm:text-3xl">Una empresa de campo, no solo de escritorio.</h2>
            <div className="mt-6 space-y-5 text-sm leading-relaxed text-steel-600">
              <p>
                SPS presta servicios para recuperacion de crudo, inyeccion de vapor, manejo de
                hidrocarburos, saneamiento, automatizacion, control de procesos, instrumentacion,
                SCADA y PLC.
              </p>
              <p>
                Su trabajo se reconoce en estaciones, patios de tanques, pozos, fosas y plantas
                industriales: lugares donde la respuesta tecnica debe llegar con equipos,
                personal y criterio operativo.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink-950 py-20 text-white lg:py-28">
        <FieldImage src={media.fracLine01} className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,13,24,.96),rgba(7,13,24,.7))]" />
        <div className="relative grid gap-10 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <Reveal>
            <p className="mono-label mb-4 text-brand-blueLight">Como trabajamos</p>
            <h2 className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
              Entrar, resolver y dejar evidencia.
            </h2>
          </Reveal>
          <div className="grid gap-4">
            {principles.map((item) => (
              <Reveal key={item}>
                <div className="flex items-start gap-4 border border-white/12 bg-white/[0.05] p-5 backdrop-blur">
                  <CheckCircle size={26} weight="fill" className="mt-0.5 shrink-0 text-brand-blueLight" />
                  <p className="text-sm leading-snug text-steel-100">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink-950 py-20 text-white lg:py-28">
        <div className="bp-grid absolute inset-0 opacity-15" />
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.08]" />
        <div className="px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-14 max-w-4xl">
            <p className="mono-label mb-4 text-brand-blueLight">Por que elegirnos</p>
            <h2 className="font-display text-4xl font-black uppercase leading-[0.96] tracking-tight text-white md:text-6xl">
              SPS lleva la respuesta donde otros no llegan.
            </h2>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            <Reveal>
              <div className="group relative h-full bg-ink-950 p-7 transition-colors duration-300 hover:bg-white/[0.06]">
                <span className="pointer-events-none absolute -right-3 -top-3 select-none font-display text-[7rem] font-black leading-none text-white/[0.03]">01</span>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/20 text-brand-blueLight">
                  <Clock size={28} weight="bold" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold text-white">Respuesta rapida</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel-400">
                  Movilizacion de equipos y personal en tiempo reducido para operaciones criticas.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="group relative h-full bg-ink-950 p-7 transition-colors duration-300 hover:bg-white/[0.06]">
                <span className="pointer-events-none absolute -right-3 -top-3 select-none font-display text-[7rem] font-black leading-none text-white/[0.03]">02</span>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-red/20 text-brand-redLight">
                  <Users size={28} weight="bold" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold text-white">Personal tecnico</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel-400">
                  Experiencia comprobada en vapor, instrumentacion, automatizacion y manejo de hidrocarburos.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="group relative h-full bg-ink-950 p-7 transition-colors duration-300 hover:bg-white/[0.06]">
                <span className="pointer-events-none absolute -right-3 -top-3 select-none font-display text-[7rem] font-black leading-none text-white/[0.03]">03</span>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400">
                  <GearSix size={28} weight="bold" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold text-white">Equipos propios</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel-400">
                  Calderas, tanques, unidades moviles y herramientas para resolver en sitio sin depender de terceros.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="group relative h-full bg-ink-950 p-7 transition-colors duration-300 hover:bg-white/[0.06]">
                <span className="pointer-events-none absolute -right-3 -top-3 select-none font-display text-[7rem] font-black leading-none text-white/[0.03]">04</span>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-400">
                  <ShieldCheck size={28} weight="bold" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold text-white">Seguridad industrial</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel-400">
                  Cada intervencion sigue protocolos de seguridad industrial y proteccion ambiental.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="group relative h-full bg-ink-950 p-7 transition-colors duration-300 hover:bg-white/[0.06]">
                <span className="pointer-events-none absolute -right-3 -top-3 select-none font-display text-[7rem] font-black leading-none text-white/[0.03]">05</span>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/20 text-violet-400">
                  <Camera size={28} weight="bold" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold text-white">Evidencia visual</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel-400">
                  Registro fotografico y documentacion tecnica de todas las operaciones realizadas en campo.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-steel-50 py-20 text-ink-900">
        <div className="grid gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal className="rounded-[1.5rem] border border-steel-200 border-l-brand-blue bg-white p-8">
            <p className="mono-label mb-4 text-brand-blue">Mision</p>
            <h2 className="font-display text-xl font-bold text-ink-900">Prestar servicios confiables en condiciones exigentes.</h2>
            <p className="mt-5 text-sm leading-relaxed text-steel-600">
              Garantizar calidad, seguridad y continuidad operativa en servicios petroleros e
              industriales, con personal tecnico preparado y mejora permanente del proceso.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-[1.5rem] border border-steel-200 border-l-brand-red bg-white p-8">
            <p className="mono-label mb-4 text-brand-red">Vision</p>
            <h2 className="font-display text-xl font-bold text-ink-900">Ser reconocidos por respuesta y excelencia operacional.</h2>
            <p className="mt-5 text-sm leading-relaxed text-steel-600">
              Consolidarse como aliado tecnico para operaciones petroleras, manufactureras e
              industriales por capacidad, responsabilidad y calidad de servicio.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 text-ink-900 lg:py-28">
        <div className="px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-14 max-w-4xl">
            <p className="mono-label mb-4 text-brand-blue">Capacidades</p>
            <h2 className="font-display text-4xl font-black uppercase leading-[0.96] tracking-tight text-ink-900 md:text-6xl">
              La empresa combina mecanica, vapor, fluidos, electricidad y control.
            </h2>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-steel-500">
              Diez disciplinas operativas que SPS integra para dar respuesta completa en cada intervencion de campo, respaldadas por equipos propios y personal tecnico calificado.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Reveal>
              <div className="group overflow-hidden rounded-2xl border border-steel-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="media-frame relative h-56 rounded-none">
                  <FieldImage src={media.bajoGrandeCaldera} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
                  <span className="absolute bottom-4 left-5 font-display text-5xl font-black leading-none text-white/20">01</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue"><ThermometerSimple size={18} weight="bold" /></span>
                    <h3 className="font-display text-lg font-bold text-ink-900">Vapor y temperatura</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-steel-600">Calderas portatiles, inyeccion de vapor, calentamiento de crudo en patios de tanques y fosas para operaciones de recuperacion.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="group overflow-hidden rounded-2xl border border-steel-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="media-frame relative h-56 rounded-none">
                  <FieldImage src={media.boscanCosta} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
                  <span className="absolute bottom-4 left-5 font-display text-5xl font-black leading-none text-white/20">02</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red"><Gauge size={18} weight="bold" /></span>
                    <h3 className="font-display text-lg font-bold text-ink-900">Instrumentacion</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-steel-600">Medicion de presion, temperatura, nivel y flujo en estaciones, patios y pozos. Calibracion y puesta a punto de equipos de campo.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="group overflow-hidden rounded-2xl border border-steel-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="media-frame relative h-56 rounded-none">
                  <FieldImage src={media.fracLine01} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
                  <span className="absolute bottom-4 left-5 font-display text-5xl font-black leading-none text-white/20">03</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500"><Cpu size={18} weight="bold" /></span>
                    <h3 className="font-display text-lg font-bold text-ink-900">Control de procesos</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-steel-600">Automatizacion de estaciones con PLC, RTU y SCADA. Tableros de control, logicas de seguridad y monitoreo remoto de variables.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="group overflow-hidden rounded-2xl border border-steel-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="media-frame relative h-56 rounded-none">
                  <FieldImage src={media.bajoGrandePatio} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
                  <span className="absolute bottom-4 left-5 font-display text-5xl font-black leading-none text-white/20">04</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500"><Truck size={18} weight="bold" /></span>
                    <h3 className="font-display text-lg font-bold text-ink-900">Equipos moviles</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-steel-600">Calderas, tanques, grupos electrogenos, bombas y unidades de servicio movilizadas directamente al sitio de operacion.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="group overflow-hidden rounded-2xl border border-steel-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="media-frame relative h-56 rounded-none">
                  <FieldImage src={media.bajoGrandeEquipos} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
                  <span className="absolute bottom-4 left-5 font-display text-5xl font-black leading-none text-white/20">05</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-500"><Wrench size={18} weight="bold" /></span>
                    <h3 className="font-display text-lg font-bold text-ink-900">Mantenimiento</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-steel-600">Reparacion de calderas, tanques, lineas de vapor, sistemas de bombeo y equipos de campo. Mantenimiento preventivo y correctivo.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="group overflow-hidden rounded-2xl border border-steel-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="media-frame relative h-56 rounded-none">
                  <FieldImage src={media.boscanFosa} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
                  <span className="absolute bottom-4 left-5 font-display text-5xl font-black leading-none text-white/20">06</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-500"><Drop size={18} weight="bold" /></span>
                    <h3 className="font-display text-lg font-bold text-ink-900">Saneamiento industrial</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-steel-600">Limpieza y saneamiento de fosas, tanques, patios y areas de operacion. Manejo de residuos y control de derrames en sitio.</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Stagger className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {capabilityIcons.slice(6).map(({ label, icon: Icon }, i) => (
              <StaggerItem key={label}>
                <div className="flex items-center gap-4 rounded-2xl border border-steel-200 bg-steel-50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue hover:bg-white hover:shadow-sm">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                    <Icon size={20} weight="bold" />
                  </span>
                  <p className="text-sm font-bold text-ink-800">{label}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-ink-950 py-20 text-white">
        <div className="grid gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <h2 className="max-w-4xl font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
            Conoce los servicios que SPS puede llevar a tu operacion.
          </h2>
          <Link to="/servicios" className="btn-primary text-sm">
            Ver servicios <ArrowRight size={20} weight="bold" />
          </Link>
        </div>
      </section>
    </>
  )
}
