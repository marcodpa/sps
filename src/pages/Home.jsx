import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import {
  ArrowRight,
  ArrowUpRight,
  Flame,
  Cpu,
  WifiHigh,
  Broadcast,
  ShieldCheck,
  Headphones,
  CheckCircle,
  Gauge,
} from '@phosphor-icons/react'
import { Reveal, Stagger, StaggerItem, EASE } from '../lib/motion'
import AnimatedCounter from '../components/AnimatedCounter'
import SpotlightCard from '../components/SpotlightCard'
import MagneticButton from '../components/MagneticButton'
import Marquee from '../components/Marquee'

const HERO_IMG =
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1400&q=80'
const ABOUT_IMG =
  'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=1000&q=80'

const stats = [
  { value: '1.500', suffix: '', label: 'Barriles diarios de inyeccion', sub: 'Campo Boscan' },
  { value: '100', suffix: '%', label: 'Tasa de ejecucion en contratos', sub: 'Historico' },
  { value: '5', suffix: '', label: 'Paises con proyectos ejecutados', sub: 'Operaciones' },
  { value: '7', suffix: '+', label: 'Anos en el sector petrolero', sub: 'Trayectoria' },
]

const clients = [
  'Petroboscan', 'Chevron', 'PDVSA GIV', 'Produsal',
  'Petroquiriquire', 'Cargill', 'HPI LLC',
]

const brands = ['Cisco', 'Siemens', 'Rockwell', 'Fanuc', 'Modicon', 'Omron', 'Wonderware']

const featuredProjects = [
  {
    n: '01',
    client: 'Petroboscan / Chevron',
    result: 'Inyeccion de vapor en Campo Boscan, 1.500 barriles diarios.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80',
    tag: 'Petrolero',
  },
  {
    n: '02',
    client: 'Cargill de Venezuela',
    result: 'Automatizacion de lineas con PLC Allen Bradley y robot paletizador.',
    img: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=700&q=80',
    tag: 'Automatizacion',
  },
  {
    n: '03',
    client: 'HPI LLC, Houston',
    result: 'Programacion PLC/HMI y fibra optica en plantas de 5 paises.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80',
    tag: 'Internacional',
  },
]

export default function Home() {
  const heroRef = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '14%'])
  const heroFade = useTransform(scrollYProgress, [0, 0.9], [1, 0])

  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-[100dvh] flex items-center overflow-hidden bg-ink-950"
        aria-label="Portada"
      >
        {/* Blueprint texture + scan line */}
        <div className="absolute inset-0 bp-grid bp-grid-fade opacity-70" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/60 to-transparent animate-scanline" />
        <div className="pointer-events-none absolute -right-40 top-1/4 h-[34rem] w-[34rem] rounded-full bg-brand-blue/10 blur-[150px]" />

        <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
            {/* Copy */}
            <motion.div style={{ opacity: reduce ? 1 : heroFade }}>
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 mb-7"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-dot" />
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-steel-300">
                  Disponible para nuevos proyectos
                </span>
              </motion.div>

              <motion.h1
                initial={reduce ? false : { opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.06, ease: EASE }}
                className="font-display font-bold text-white leading-[1.0] tracking-tightest mb-6"
                style={{ fontSize: 'clamp(2.5rem, 1.4rem + 4.6vw, 4.6rem)' }}
              >
                Servicios petroleros
                <br />
                e <span className="text-brand-blueLight">industriales</span> de precision.
              </motion.h1>

              <motion.p
                initial={reduce ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.14, ease: EASE }}
                className="text-steel-300 text-base sm:text-lg leading-relaxed max-w-xl mb-9"
              >
                Inyeccion de vapor, automatizacion, SCADA y telecomunicaciones para
                la industria petrolera y manufacturera.
              </motion.p>

              <motion.div
                initial={reduce ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.22, ease: EASE }}
                className="flex flex-wrap gap-3"
              >
                <MagneticButton to="/servicios" className="btn-primary">
                  Explorar servicios <ArrowRight size={18} weight="bold" />
                </MagneticButton>
                <Link to="/proyectos" className="btn-ghost-light">
                  Ver proyectos
                </Link>
              </motion.div>
            </motion.div>

            {/* Engineered photo frame */}
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
              className="relative hidden lg:block"
            >
              <div className="relative clip-corner overflow-hidden rounded-2xl border border-white/10 shadow-lift">
                <motion.img
                  src={HERO_IMG}
                  alt="Operacion de inyeccion de vapor en campo petrolero"
                  style={{ y: imgY }}
                  className="h-[32rem] w-full object-cover scale-110"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />
                {/* corner ticks */}
                <div className="absolute left-4 top-4 h-5 w-5 border-l-2 border-t-2 border-white/40" />
                <div className="absolute right-4 top-4 h-5 w-5 border-r-2 border-t-2 border-white/40" />
              </div>

              {/* Floating data card */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-ink-900/90 backdrop-blur-xl p-5 shadow-lift w-60">
                <div className="flex items-center gap-2 mb-3">
                  <Flame size={16} className="text-brand-red" weight="fill" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel-400">
                    Capacidad de inyeccion
                  </span>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-3xl font-bold text-white">1.500</span>
                  <span className="text-steel-400 text-sm">bbl/dia</span>
                </div>
                <div className="mt-3 h-px w-full bg-white/10" />
                <div className="mt-3 flex items-center gap-2 text-[12px] text-emerald-400">
                  <CheckCircle size={14} weight="fill" />
                  100% de ejecucion en contratos
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CLIENTS ═══════════════ */}
      <section className="bg-white border-b border-steel-100" aria-label="Clientes">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Reveal className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel-400 shrink-0 max-w-[10rem]">
              Empresas que confian en SPS
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {clients.map((c) => (
                <span
                  key={c}
                  className="font-display text-base font-semibold text-steel-400 transition-colors duration-200 hover:text-ink-800"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ STATS ═══════════════ */}
      <section className="bg-steel-50 py-20 lg:py-24" aria-label="Metricas">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <Stagger className="grid grid-cols-2 lg:grid-cols-4 rounded-2xl border border-steel-200 bg-white overflow-hidden">
            {stats.map(({ value, suffix, label, sub }, i) => (
              <StaggerItem
                key={label}
                className={`relative p-7 lg:p-8 ${
                  i !== 0 ? 'border-t lg:border-t-0 lg:border-l border-steel-200' : ''
                } ${i === 2 ? 'border-t lg:border-t-0' : ''} ${i % 2 !== 0 ? 'border-l' : ''} lg:[&]:border-steel-200`}
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
                  {sub}
                </span>
                <div className="mt-3 font-display text-4xl lg:text-5xl font-bold text-ink-900 tabular-nums">
                  <AnimatedCounter value={value} suffix={suffix} />
                </div>
                <p className="mt-2 text-sm text-steel-500 leading-snug">{label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ═══════════════ ABOUT ═══════════════ */}
      <section className="bg-white py-24 lg:py-28" aria-labelledby="about-h">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <Reveal className="relative order-2 lg:order-1">
              <div className="relative clip-corner overflow-hidden rounded-2xl">
                <img
                  src={ABOUT_IMG}
                  alt="Tecnicos especialistas de SPS en planta"
                  className="h-[28rem] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent" />
              </div>
              <div className="absolute -bottom-5 -right-5 flex items-center gap-4 rounded-2xl border border-steel-100 bg-white px-6 py-4 shadow-lift">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-red text-white">
                  <Headphones size={20} weight="fill" />
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-ink-900">Respuesta inmediata</p>
                  <p className="text-xs text-steel-400">Soporte tecnico 24/7</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="order-1 lg:order-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-blue mb-4">
                Sobre nosotros
              </p>
              <h2 id="about-h" className="h-section mb-6">
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
                  atender emergencias, trabajando en coordinacion con empresas aliadas.
                </p>
              </div>
              <Link
                to="/nosotros"
                className="group mt-8 inline-flex items-center gap-2 font-semibold text-sm text-brand-blue"
              >
                Conocer mas
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue/10 transition-all duration-200 group-hover:bg-brand-blue group-hover:text-white">
                  <ArrowRight size={13} weight="bold" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ SERVICES (bento) ═══════════════ */}
      <section aria-labelledby="services-h">
        {/* ── Blue header ── */}
        <div className="bg-brand-blue py-24 lg:py-28">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-2xl">
              <p className="text-white/70 text-sm font-semibold tracking-[0.15em] uppercase mb-3">
                Lo que ofrecemos
              </p>
              <h2
                id="services-h"
                className="font-display font-bold text-white leading-[1.05] tracking-tightest mb-4"
                style={{ fontSize: 'clamp(1.75rem, 1.1rem + 2.4vw, 2.9rem)' }}
              >
                Cuatro lineas de servicio para la industria.
              </h2>
              <p className="text-white/80 leading-relaxed">
                Del pozo a la sala de control: cubrimos recuperacion de crudo, automatizacion,
                redes y telecomunicaciones bajo un solo equipo de ingenieria.
              </p>
            </Reveal>
          </div>
        </div>

        {/* ── White cards ── */}
        <div className="bg-white py-24 lg:py-28">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <Stagger className="grid md:grid-cols-6 gap-4 lg:gap-5">
            {/* Flagship — wide, image, red accent */}
            <StaggerItem className="md:col-span-4">
              <Link to="/servicios#petroleros" className="block h-full">
                <SpotlightCard className="group relative h-full min-h-[19rem] overflow-hidden rounded-2xl border border-steel-200">
                  <img
                    src="https://images.unsplash.com/photo-1623227413711-25ee4388dae3?auto=format&fit=crop&w=1000&q=80"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-ink-950 via-ink-950/80 to-ink-900/30" />
                  <div className="relative flex h-full flex-col justify-between p-7 lg:p-9">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red text-white">
                      <Flame size={24} weight="fill" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-redLight">
                        Linea principal
                      </span>
                      <h3 className="mt-2 font-display text-2xl font-bold text-white">
                        Servicios petroleros
                      </h3>
                      <p className="mt-2 max-w-md text-sm text-steel-300 leading-relaxed">
                        Inyeccion de vapor para recuperacion de crudo en fosas y pozos, con
                        altos estandares de seguridad.
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                        Ver detalle <ArrowUpRight size={15} weight="bold" />
                      </span>
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            </StaggerItem>

            {/* Automatizacion — small */}
            <StaggerItem className="md:col-span-2">
              <ServiceTile
                icon={Cpu}
                title="Automatizacion"
                desc="PLC, SCADA, HMI, RTU e instrumentacion industrial."
                tag="Control"
                to="/servicios#automatizacion"
              />
            </StaggerItem>

            {/* Conectividad — small */}
            <StaggerItem className="md:col-span-2">
              <ServiceTile
                icon={WifiHigh}
                title="Conectividad"
                desc="Redes LAN/WAN, voz, datos y video para empresas."
                tag="Redes"
                to="/servicios#conectividad"
              />
            </StaggerItem>

            {/* Telecom — wide, tinted */}
            <StaggerItem className="md:col-span-4">
              <Link to="/servicios#telecomunicaciones" className="block h-full">
                <SpotlightCard className="group relative h-full min-h-[15rem] overflow-hidden rounded-2xl border border-ink-700 bg-ink-900">
                  <div className="absolute inset-0 bp-grid opacity-40" />
                  <div className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-brand-blue/15 blur-3xl" />
                  <div className="relative flex h-full flex-col justify-between p-7 lg:p-9">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-blueLight">
                      <Broadcast size={24} />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white">
                        Telecomunicaciones
                      </h3>
                      <p className="mt-2 max-w-md text-sm text-steel-300 leading-relaxed">
                        Fibra optica, canalizaciones telefonicas y enlaces dedicados de radio.
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blueLight">
                        Ver detalle <ArrowUpRight size={15} weight="bold" />
                      </span>
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            </StaggerItem>
          </Stagger>
        </div>
        </div>
      </section>

      {/* ═══════════════ PROJECTS (editorial list) ═══════════════ */}
      <section className="bg-ink-950 py-24 lg:py-28 relative overflow-hidden" aria-labelledby="projects-h">
        <div className="absolute inset-0 bp-grid bp-grid-fade opacity-50" />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <h2 id="projects-h" className="h-section text-white">
              Proyectos destacados.
            </h2>
            <Link
              to="/proyectos"
              className="group inline-flex items-center gap-2 text-sm font-medium text-steel-300 hover:text-white transition-colors shrink-0"
            >
              Ver todos
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" weight="bold" />
            </Link>
          </Reveal>

          <Stagger className="divide-y divide-white/10 border-y border-white/10">
            {featuredProjects.map(({ n, client, result, img, tag }) => (
              <StaggerItem key={n}>
                <Link
                  to="/proyectos"
                  className="group grid grid-cols-[auto_1fr] sm:grid-cols-[auto_5rem_1fr_auto] items-center gap-4 sm:gap-6 py-6"
                >
                  <span className="font-mono text-sm text-steel-500">{n}</span>
                  <div className="hidden sm:block h-16 w-20 overflow-hidden rounded-lg border border-white/10">
                    <img
                      src={img}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-display text-lg sm:text-xl font-bold text-white transition-colors group-hover:text-brand-blueLight">
                        {client}
                      </h3>
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-steel-500 border border-white/10 rounded px-2 py-0.5">
                        {tag}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-steel-400 leading-relaxed">{result}</p>
                  </div>
                  <ArrowUpRight
                    size={22}
                    className="hidden sm:block text-steel-500 transition-all duration-200 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ═══════════════ BRANDS (marquee) ═══════════════ */}
      <section className="bg-white py-20" aria-label="Marcas aliadas">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-9">
            <h2 className="h-section">Tecnologia de marcas lideres.</h2>
          </Reveal>
        </div>
        <Reveal>
          <Marquee items={brands} />
        </Reveal>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="relative overflow-hidden bg-ink-950 py-24 lg:py-28" aria-labelledby="cta-h">
        <div className="absolute inset-0 bp-grid bp-grid-fade opacity-60" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/10 blur-[140px]" />
        <Reveal className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-h" className="font-display text-3xl md:text-5xl font-bold text-white tracking-tightest leading-[1.05] mb-5">
            Listo para tu proximo proyecto?
          </h2>
          <p className="text-steel-300 leading-relaxed mb-9 max-w-xl mx-auto">
            Nuestro equipo de ingenieros analiza tu proyecto y te propone la solucion mas
            adecuada para tu industria.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <MagneticButton to="/contacto" className="btn-red">
              Solicitar cotizacion <ArrowRight size={18} weight="bold" />
            </MagneticButton>
            <Link to="/servicios" className="btn-ghost-light">
              Ver servicios
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-steel-400">
            <span className="inline-flex items-center gap-2"><ShieldCheck size={16} className="text-brand-blueLight" /> Seguridad industrial</span>
            <span className="inline-flex items-center gap-2"><Gauge size={16} className="text-brand-blueLight" /> Excelencia operacional</span>
            <span className="inline-flex items-center gap-2"><Headphones size={16} className="text-brand-blueLight" /> Respuesta 24/7</span>
          </div>
        </Reveal>
      </section>
    </>
  )
}

function ServiceTile({ icon: Icon, title, desc, tag, to }) {
  return (
    <Link to={to} className="block h-full">
      <SpotlightCard className="group flex h-full min-h-[14rem] flex-col justify-between rounded-2xl border border-steel-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
          <Icon size={22} />
        </div>
        <div>
          <h3 className="font-display text-lg font-bold text-ink-900">{title}</h3>
          <p className="mt-1.5 text-sm text-steel-500 leading-relaxed">{desc}</p>
          <span className="mt-3 inline-block font-mono text-[10px] uppercase tracking-[0.18em] text-steel-400">
            {tag}
          </span>
        </div>
      </SpotlightCard>
    </Link>
  )
}
