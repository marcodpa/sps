import { Link } from 'react-router-dom'
import { ArrowRight, Camera, CheckCircle, Clock, Cpu, Drop, Flask, Gauge, GearSix, Rocket, ShieldCheck, ThermometerSimple, Truck, Users, Wrench } from '@phosphor-icons/react'
import PageHero from '../components/PageHero'
import { Reveal, Stagger, StaggerItem } from '../lib/motion'
import { media } from '../data/spsContent'
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
            <p className="mono-label mb-4 text-brand-blue">Trayectoria</p>
            <h2 className="font-display text-4xl font-black uppercase leading-[0.96] tracking-tight text-ink-900 md:text-6xl">
              Treinta anos de operacion continua en la industria petrolera.
            </h2>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-steel-500">
              Desde 1990, SPS ha construido una experiencia solida en servicios de vapor, instrumentacion, automatizacion y saneamiento industrial en los principales campos de Venezuela.
            </p>
          </Reveal>

          <div className="relative mx-auto max-w-5xl">
            {/* Linea vertical */}
            <div className="absolute left-8 top-0 hidden h-full w-px bg-brand-blue/20 md:block" />

            {[
              {
                year: '1990', icon: Rocket, title: 'Fundacion de la empresa',
                img: media.boscanCosta,
                desc: 'SPS nace en Maracaibo, estado Zulia, para prestar servicios de vapor, calderas y mantenimiento mecanico a la industria petrolera en los campos de la costa occidental.',
                circleCls: 'text-brand-blue border-brand-blue/30', iconCls: 'bg-brand-blue/10 text-brand-blue',
              },
              {
                year: '2000', icon: Gauge, title: 'Instrumentacion y automatizacion',
                img: media.fracLine01,
                desc: 'La empresa incorpora servicios de instrumentacion, medicion y control de procesos. Primeros contratos en los campos Boscan y Tia Juana con PDVSA y empresas aliadas.',
                circleCls: 'text-brand-red border-brand-red/30', iconCls: 'bg-brand-red/10 text-brand-red',
              },
              {
                year: '2010', icon: Truck, title: 'Crecimiento y equipos propios',
                img: media.bajoGrandePatio,
                desc: 'Adquisicion de calderas portatiles, tanques, grupos electrogenos y unidades de servicio movil. Expansion a patios de tanques, estaciones de flujo y pozos de recuperacion.',
                circleCls: 'text-emerald-500 border-emerald-500/30', iconCls: 'bg-emerald-500/10 text-emerald-500',
              },
              {
                year: '2020', icon: Cpu, title: 'Control de procesos y saneamiento',
                img: media.boscanFosa,
                desc: 'Integracion de SCADA, PLC, RTU y tableros de control. Se consolida la linea de saneamiento industrial: limpieza de fosas, tanques y control de derrames en sitio.',
                circleCls: 'text-amber-500 border-amber-500/30', iconCls: 'bg-amber-500/10 text-amber-500',
              },
              {
                year: 'Hoy', icon: Flask, title: 'Presente operacional',
                img: media.bajoGrandeEquipos,
                desc: 'SPS opera en multiples frentes de la industria con equipos propios, personal tecnico calificado y mas de tres decadas de experiencia en cada intervencion de campo.',
                circleCls: 'text-violet-500 border-violet-500/30', iconCls: 'bg-violet-500/10 text-violet-500',
              },
            ].map((item, i) => (
              <Reveal key={item.year} delay={i * 0.08}>
                <div className="group relative mb-8 md:mb-14">
                  <div className="md:flex md:items-stretch md:gap-8 lg:gap-12">
                    {/* Indicador de año */}
                    <div className="hidden shrink-0 md:flex md:w-16 md:flex-col md:items-center">
                      <span className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 bg-white font-display text-lg font-black ${item.circleCls}`}>
                        {item.year}
                      </span>
                    </div>

                    {/* Imagen */}
                    <div className="overflow-hidden rounded-2xl border border-steel-200 bg-white shadow-sm transition-all duration-300 group-hover:shadow-lift md:w-[360px] lg:w-[400px]">
                      <div className="relative h-52 md:h-full md:min-h-[200px]">
                        <FieldImage src={item.img} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 to-transparent" />
                        <span className="absolute bottom-4 left-5 font-display text-5xl font-black leading-none text-white/20 md:hidden">{item.year}</span>
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="mt-4 flex flex-1 flex-col justify-center md:mt-0 md:py-4">
                      <div className="flex items-center gap-3">
                        <span className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.iconCls}`}>
                          <item.icon size={20} weight="bold" />
                        </span>
                        <h3 className="font-display text-xl font-bold text-ink-900">{item.title}</h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-steel-600">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
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
