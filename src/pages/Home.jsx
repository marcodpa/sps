import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Cpu,
  WifiHigh,
  Broadcast,
  Flame,
  GearSix,
  Headphones,
  ShieldCheck,
  Gauge,
} from '@phosphor-icons/react'

/* ── High-quality industrial / oil & gas images ── */
const IMG = {
  hero: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80',
  about: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=1000&q=80',
  service1: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
  service2: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
  service3: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
  service4: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800&q=80',
  project1: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80',
  project2: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
  project3: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
}

/* ── Data ── */
const clients = [
  'Petroboscan', 'Chevron', 'PDVSA GIV', 'Produsal',
  'Petroquiriquire', 'Cargill', 'HPI LLC',
]

const services = [
  {
    icon: Flame, title: 'Servicios petroleros',
    desc: 'Inyeccion de vapor para recuperacion mejorada de crudo en pozos y fosas. Mas de 7 anos de experiencia en Campo Boscan.',
    img: IMG.service1, to: '/servicios#petroleros',
  },
  {
    icon: Cpu, title: 'Automatizacion industrial',
    desc: 'PLC, SCADA, HMI, RTU e instrumentacion. Programacion Allen Bradley, Wonderware y diseno de tableros de control.',
    img: IMG.service2, to: '/servicios#automatizacion',
  },
  {
    icon: WifiHigh, title: 'Conectividad y redes',
    desc: 'Redes LAN/WAN, fibra optica, voz sobre IP y videovigilancia para empresas y plantas industriales.',
    img: IMG.service3, to: '/servicios#conectividad',
  },
  {
    icon: Broadcast, title: 'Telecomunicaciones',
    desc: 'Radio enlaces digitales, canalizaciones telefonicas y monitoreo remoto de instalaciones a nivel nacional.',
    img: IMG.service4, to: '/servicios#telecomunicaciones',
  },
]

const projects = [
  { n: '01', client: 'Petroboscan / Chevron', tag: 'Petrolero', img: IMG.project1,
    result: 'Inyeccion de vapor en Campo Boscan con capacidad de 1.500 barriles diarios.' },
  { n: '02', client: 'Cargill de Venezuela', tag: 'Automatizacion', img: IMG.project2,
    result: 'Automatizacion de lineas de produccion con PLC Allen Bradley y robot paletizador.' },
  { n: '03', client: 'HPI LLC, Houston', tag: 'Internacional', img: IMG.project3,
    result: 'Programacion PLC/HMI y fibra optica en plantas ubicadas en 5 paises.' },
]

const stats = [
  { value: '1.500+', label: 'Barriles diarios' },
  { value: '100%', label: 'Ejecucion de contratos' },
  { value: '5', label: 'Paises operando' },
  { value: '7+', label: 'Anos de trayectoria' },
]

export default function Home() {
  return (
    <>
      {/* ═══════════════ HERO ─────────────────── */}
      <section className="relative min-h-[90dvh] flex items-center overflow-hidden bg-ink-950" aria-label="Portada">
        {/* Imagen de fondo con overlay */}
        <div className="absolute inset-0">
          <img src={IMG.hero} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/60 to-ink-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
        </div>

        <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.5)]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel-300">
                Ingenieria petrolera e industrial
              </span>
            </div>

            <h1 className="font-display font-bold text-white leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(2.5rem, 1.5rem + 4.5vw, 5rem)' }}>
              Servicios petroleros{' '}
              <span className="text-brand-blueLight">e industriales</span>
              <br />de precision.
            </h1>

            <p className="text-steel-300 text-base sm:text-lg leading-relaxed max-w-xl mb-10">
              Inyeccion de vapor, automatizacion, SCADA y telecomunicaciones
              para la industria petrolera y manufacturera en Venezuela y el exterior.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link to="/servicios" className="inline-flex items-center gap-2 rounded-xl bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-blue/90 hover:-translate-y-0.5">
                Explorar servicios <ArrowRight size={18} weight="bold" />
              </Link>
              <Link to="/contacto" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5">
                Contactar ahora
              </Link>
            </div>
          </div>
        </div>

        {/* Indicador inferior */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">Desplazar</span>
          <div className="h-10 w-[1px] bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* ═══════════════ CLIENTS ─────────────── */}
      <section className="bg-white border-b border-steel-100" aria-label="Clientes">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel-400 shrink-0">
              Empresas que confian en SPS
            </p>
            <div className="h-px w-12 bg-steel-200 hidden lg:block" />
            <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
              {clients.map((c) => (
                <span key={c} className="font-display text-base font-semibold text-steel-400 transition-colors duration-200 hover:text-ink-900">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ ABOUT ───────────────── */}
      <section className="bg-white py-24 lg:py-28" aria-labelledby="about-h">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Imagen */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img src={IMG.about} alt="Tecnicos especialistas de SPS en planta"
                  className="h-[32rem] w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-emerald-400/70">PERSONAL TÉCNICO</span>
                  </div>
                  <p className="font-mono text-[11px] text-white/60">SPS — Operaciones de campo</p>
                </div>
              </div>
            </div>

            {/* Texto */}
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue mb-4">
                &lt; Sobre nosotros /&gt;
              </p>
              <h2 id="about-h" className="font-display font-bold text-ink-900 leading-[1.05] tracking-tightest mb-6"
                style={{ fontSize: 'clamp(1.75rem, 1.1rem + 2.4vw, 2.9rem)' }}>
                Ingenieria petrolera e industrial, ejecutada en campo.
              </h2>
              <div className="space-y-4 text-steel-600 leading-relaxed max-w-xl">
                <p>
                  <strong className="text-ink-900">Service Petroleum and Supply C.A.</strong> es
                  una empresa venezolana especializada en inyeccion de vapor para recuperacion
                  de crudo, automatizacion, control de procesos, instrumentacion, SCADA y PLC.
                </p>
                <p>
                  Nuestros tecnicos especialistas se desplazan con rapidez al terreno para
                  atender emergencias, trabajando en coordinacion con empresas aliadas en
                  cada uno de los proyectos que ejecutamos.
                </p>
              </div>

              {/* Stats inline */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-2xl sm:text-3xl font-bold text-brand-blue">{s.value}</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-steel-400 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>

              <Link to="/nosotros"
                className="group mt-8 inline-flex items-center gap-2 font-semibold text-sm text-brand-blue transition-all duration-200 hover:gap-3">
                Conocer mas <ArrowRight size={15} weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ SERVICES ────────────── */}
      <section className="bg-steel-50 py-24 lg:py-28" aria-labelledby="services-h">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue mb-3">
              &lt; Nuestros servicios /&gt;
            </p>
            <h2 id="services-h"
              className="font-display font-bold text-ink-900 leading-[1.05] tracking-tightest mb-4"
              style={{ fontSize: 'clamp(1.75rem, 1.1rem + 2.4vw, 2.9rem)' }}>
              Cuatro lineas de servicio para la industria.
            </h2>
            <p className="text-steel-500 leading-relaxed max-w-xl">
              Del pozo a la sala de control: cubrimos recuperacion de crudo, automatizacion,
              redes y telecomunicaciones bajo un solo equipo de ingenieria.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <Link key={s.title} to={s.to}
                className="group relative flex flex-col rounded-2xl overflow-hidden bg-white border border-steel-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {/* Imagen */}
                <div className="relative h-44 overflow-hidden">
                  <img src={s.img} alt=""
                    className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm shadow-sm">
                    <s.icon size={20} className="text-brand-blue" />
                  </div>
                </div>
                {/* Contenido */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="font-display text-lg font-bold text-ink-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-steel-500 leading-relaxed flex-1">{s.desc}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-brand-blue group-hover:gap-2 transition-all duration-200">
                    Ver mas <ArrowRight size={14} weight="bold" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PROJECTS ────────────── */}
      <section className="bg-ink-950 py-24 lg:py-28" aria-labelledby="projects-h">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blueLight mb-3">
                &lt; Proyectos ejecutados /&gt;
              </p>
              <h2 id="projects-h"
                className="font-display font-bold text-white leading-[1.05] tracking-tightest"
                style={{ fontSize: 'clamp(1.75rem, 1.1rem + 2.4vw, 2.9rem)' }}>
                Proyectos destacados.
              </h2>
            </div>
            <Link to="/proyectos"
              className="group inline-flex items-center gap-2 text-sm font-medium text-steel-300 hover:text-white transition-colors shrink-0 font-mono text-[11px] tracking-wide">
              Ver todos los proyectos
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" weight="bold" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <Link key={p.n} to="/proyectos"
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-ink-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="relative h-64 overflow-hidden">
                  <img src={p.img} alt=""
                    className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/70 border border-white/20 rounded-full px-3 py-1 bg-ink-950/40 backdrop-blur-sm">
                      {p.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-mono text-xs text-steel-500 mb-1">{p.n}</p>
                  <h3 className="font-display text-lg font-bold text-white transition-colors group-hover:text-brand-blueLight">{p.client}</h3>
                  <p className="mt-2 text-sm text-steel-400 leading-relaxed">{p.result}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ BRANDS ──────────────── */}
      <section className="bg-white py-20" aria-label="Marcas aliadas">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <h2 className="font-display font-bold text-ink-900 leading-[1.05] tracking-tightest mb-4"
            style={{ fontSize: 'clamp(1.5rem, 1rem + 2vw, 2.5rem)' }}>
            Tecnologia de marcas lideres.
          </h2>
          <p className="text-steel-500 max-w-lg mx-auto">
            Trabajamos con equipos y software de los fabricantes mas reconocidos de la industria.
          </p>
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {['Cisco', 'Siemens', 'Rockwell', 'Fanuc', 'Modicon', 'Omron', 'Wonderware'].map((b) => (
              <span key={b} className="font-display text-lg sm:text-xl font-bold text-steel-300 transition-colors duration-200 hover:text-ink-900">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ─────────────────── */}
      <section className="relative overflow-hidden bg-ink-950 py-24 lg:py-28" aria-labelledby="cta-h">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-transparent to-transparent" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/8 blur-[140px]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative rounded-2xl border border-white/10 bg-ink-900/50 backdrop-blur-sm p-8 sm:p-12 lg:p-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blueLight mb-4">
              &lt; Contactanos /&gt;
            </p>
            <h2 id="cta-h"
              className="font-display text-3xl md:text-5xl font-bold text-white tracking-tightest leading-[1.05] mb-5">
              Listo para tu proximo proyecto?
            </h2>
            <p className="text-steel-400 leading-relaxed mb-9 max-w-xl mx-auto">
              Nuestro equipo de ingenieros analiza tu proyecto y te propone la solucion mas
              adecuada para tu industria.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contacto"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-red px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-red/90 hover:-translate-y-0.5">
                Solicitar cotizacion <ArrowRight size={18} weight="bold" />
              </Link>
              <Link to="/servicios"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5">
                Ver servicios
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-steel-500 font-mono text-[11px]">
              <span className="inline-flex items-center gap-2"><ShieldCheck size={15} className="text-brand-blueLight" /> Seguridad industrial</span>
              <span className="inline-flex items-center gap-2"><Gauge size={15} className="text-brand-blueLight" /> Excelencia operacional</span>
              <span className="inline-flex items-center gap-2"><Headphones size={15} className="text-brand-blueLight" /> Respuesta 24/7</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}