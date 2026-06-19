import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useReducedMotion } from '../lib/animations'
import {
  ArrowRight,
  ArrowUpRight,
  Flame,
  Cpu,
  WifiHigh,
  Broadcast,
  ShieldCheck,
  Headphones,
  Gauge,
} from '@phosphor-icons/react'
import { Reveal, Stagger, StaggerItem, EASE } from '../lib/motion'
import IndustrialGauge from '../components/IndustrialGauge'
import ProcessFlow from '../components/ProcessFlow'
import HUDTelemetry from '../components/HUDTelemetry'
import SCADAPanel from '../components/SCADAPanel'
import PLCModule from '../components/PLCModule'
import { IndustrialHeroDiagram, OscilloWave, RadarSweep } from '../components/IndustrialHero'
import MagneticButton from '../components/MagneticButton'
import Marquee from '../components/Marquee'

const ABOUT_IMG =
  'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=1000&q=80'

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
  const [mounted, setMounted] = useState(false)
  const [heroOpacity, setHeroOpacity] = useState(1)

  /* ── Mount trigger for entrance animations ── */
  useEffect(() => { setMounted(true) }, [])

  /* ── Scroll-driven hero fade (replaces useScroll/useTransform) ── */
  useEffect(() => {
    if (reduce) return
    const handleScroll = () => {
      const el = heroRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const h = rect.height
      const progress = Math.max(0, Math.min(1, -rect.top / h))
      setHeroOpacity(1 - progress)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [reduce])

  /* ── Reusable transition helper ── */
  const fadeSlide = (show, delay = 0, y = 18) => ({
    opacity: show ? 1 : 0,
    transform: show ? 'translateY(0)' : `translateY(${y}px)`,
    transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
  })

  return (
    <>
      {/* ═══════════════ HERO — INDUSTRIAL CONTROL ROOM ═══════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-[100dvh] flex items-center overflow-hidden bg-ink-950"
        aria-label="Portada"
      >
        {/* Blueprint + CRT scan texture */}
        <div className="absolute inset-0 bp-grid bp-grid-fade opacity-60" />
        <div className="pointer-events-none absolute inset-0 crt-scan" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent animate-scanline" />
        <div className="pointer-events-none absolute -right-40 top-1/4 h-[34rem] w-[34rem] rounded-full bg-brand-blue/8 blur-[150px]" />

        <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-14 items-center">
            {/* Copy */}
            <div style={{ opacity: reduce ? 1 : heroOpacity }}>
              {/* Status badge */}
              <div
                style={fadeSlide(mounted || reduce, 0, 16)}
              >
                <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5">
                  <span
                    className={`h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)] ${mounted && !reduce ? 'animate-pulse' : ''}`}
                  />
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel-300">
                    Sistema operativo — Disponible para nuevos proyectos
                  </span>
                </div>
              </div>

              <h1
                style={fadeSlide(mounted || reduce, 0.06, 22)}
                className="font-display font-bold text-white leading-[1.0] tracking-tightest mb-6"
              >
                Servicios petroleros{' '}
                <span className="text-brand-blueLight tracking-tight">e industriales</span>
                <br />
                <span className="relative inline-block">
                  de precision.
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-brand-blue via-brand-blueLight to-transparent"
                    style={{
                      transform: mounted || reduce ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: `transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s`,
                    }}
                  />
                </span>
              </h1>

              <p
                style={fadeSlide(mounted || reduce, 0.14, 18)}
                className="text-steel-300 text-base sm:text-lg leading-relaxed max-w-xl mb-9 font-mono text-sm tracking-wide"
              >
                <span className="text-brand-blueLight">&gt;</span> Inyeccion de vapor, automatizacion, SCADA
                y telecomunicaciones para la industria petrolera y manufacturera.
              </p>

              <div
                style={fadeSlide(mounted || reduce, 0.22, 18)}
                className="flex flex-wrap gap-3"
              >
                <MagneticButton to="/servicios" className="btn-primary">
                  Explorar servicios <ArrowRight size={18} weight="bold" />
                </MagneticButton>
                <Link to="/proyectos" className="btn-ghost-light">
                  Ver proyectos
                </Link>
              </div>

              {/* Oscilloscope wave */}
              <div
                style={fadeSlide(mounted || reduce, 0.6, 0)}
                className="mt-8 h-6 sm:h-8 max-w-xs"
              >
                <OscilloWave color="#3D8BE8" />
              </div>
            </div>

            {/* Right: Industrial diagram panel */}
            <div
              className="relative hidden lg:block"
              style={{
                opacity: mounted || reduce ? 1 : 0,
                transform: mounted || reduce ? 'scale(1)' : 'scale(0.96)',
                transition: `opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.1s`,
              }}
            >
              <IndustrialHeroDiagram />
              {/* Floating radar */}
              <div className="absolute -bottom-4 -left-4 w-16 h-16">
                <RadarSweep />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CLIENTS ═══════════════ */}
      <section className="bg-ink-950 border-b border-white/5" aria-label="Clientes">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Reveal className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel-500 shrink-0">
              &lt; Empresas que confian en SPS /&gt;
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {clients.map((c) => (
                <span
                  key={c}
                  className="font-display text-base font-semibold text-steel-500 transition-colors duration-200 hover:text-steel-300"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ STATS — SCADA PANEL ═══════════════ */}
      <section className="bg-ink-950 py-20 lg:py-24" aria-label="Metricas">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blueLight mb-3">
              PANEL DE CONTROL
            </p>
            <h2
              className="font-display font-bold text-white leading-[1.05] tracking-tightest"
              style={{ fontSize: 'clamp(1.75rem, 1.1rem + 2.4vw, 2.9rem)' }}
            >
              Operaciones en tiempo real.
            </h2>
          </Reveal>

          <SCADAPanel />

          {/* Small gauge row */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 justify-items-center">
            <IndustrialGauge value={78} max={100} label="PRESIÓN" unit="PSI" subtitle="LÍNEA PRINCIPAL" size={180} />
            <IndustrialGauge value={328} max={500} label="TEMP" unit="°C" subtitle="VAPOR" thresholds={{ warning: 350, danger: 420 }} size={180} />
            <IndustrialGauge value={62} max={100} label="CAUDAL" unit="BPM" subtitle="INYECCIÓN" size={180} />
            <IndustrialGauge value={97} max={100} label="SCADA" unit="%" subtitle="DISPONIBILIDAD" size={180} />
          </div>
        </div>
      </section>

      {/* ═══════════════ ABOUT ═══════════════ */}
      <section className="bg-white py-24 lg:py-28" aria-labelledby="about-h">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <Reveal className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-steel-200">
                <img
                  src={ABOUT_IMG}
                  alt="Tecnicos especialistas de SPS en planta"
                  className="h-[28rem] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
                {/* Technical overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-emerald-400/70">
                      PERSONAL TÉCNICO
                    </span>
                  </div>
                  <p className="font-mono text-[11px] text-white/60">SPS — Operaciones de campo</p>
                </div>
              </div>
              {/* Floating data card */}
              <div className="absolute -bottom-5 -right-5 flex items-center gap-4 rounded-xl border border-steel-100 bg-white px-6 py-4 shadow-lift">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-red text-white">
                  <Headphones size={20} weight="fill" />
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-ink-900">Respuesta inmediata</p>
                  <p className="font-mono text-[10px] text-steel-400">Soporte tecnico 24/7</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="order-1 lg:order-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue mb-4">
                &lt; Sobre nosotros /&gt;
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

      {/* ═══════════════ SERVICES — PLC MODULES ═══════════════ */}
      <section className="bg-ink-950 py-24 lg:py-28" aria-labelledby="services-h">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blueLight mb-3">
              &lt; MODULOS DE SERVICIO /&gt;
            </p>
            <h2
              id="services-h"
              className="font-display font-bold text-white leading-[1.05] tracking-tightest mb-4"
              style={{ fontSize: 'clamp(1.75rem, 1.1rem + 2.4vw, 2.9rem)' }}
            >
              Cuatro lineas de servicio para la industria.
            </h2>
            <p className="text-steel-400 leading-relaxed font-mono text-sm tracking-wide">
              Del pozo a la sala de control: cubrimos recuperacion de crudo, automatizacion,
              redes y telecomunicaciones bajo un solo equipo de ingenieria.
            </p>
          </Reveal>

          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            <StaggerItem>
              <PLCModule
                icon={Flame}
                title="Servicios petroleros"
                desc="Inyeccion de vapor para recuperacion de crudo en fosas y pozos."
                tag="Linea principal"
                to="/servicios#petroleros"
                moduleId="SPS-001"
                color="red"
                features={['Inyección de vapor', 'Recuperación de crudo', 'Campo Boscán']}
              />
            </StaggerItem>
            <StaggerItem>
              <PLCModule
                icon={Cpu}
                title="Automatizacion"
                desc="PLC, SCADA, HMI, RTU e instrumentacion industrial."
                tag="Control"
                to="/servicios#automatizacion"
                moduleId="SPS-002"
                color="blue"
                features={['PLC Allen Bradley', 'SCADA Wonderware', 'Diseño de tableros']}
              />
            </StaggerItem>
            <StaggerItem>
              <PLCModule
                icon={WifiHigh}
                title="Conectividad"
                desc="Redes LAN/WAN, voz, datos y video para empresas."
                tag="Redes"
                to="/servicios#conectividad"
                moduleId="SPS-003"
                color="blue"
                features={['Fibra óptica', 'Redes empresariales', 'Enlaces dedicados']}
              />
            </StaggerItem>
            <StaggerItem>
              <PLCModule
                icon={Broadcast}
                title="Telecomunicaciones"
                desc="Fibra optica, canalizaciones telefonicas y enlaces de radio."
                tag="Telecom"
                to="/servicios#telecomunicaciones"
                moduleId="SPS-004"
                color="blue"
                features={['Radio enlaces', 'Canalizaciones', 'Monitoreo remoto']}
              />
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* ═══════════════ PROCESS FLOW — P&amp;ID DIAGRAM ═══════════════ */}
      <section className="bg-ink-950 pb-24 lg:pb-28" aria-labelledby="flow-h">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blueLight mb-3">
              DIAGRAMA DE PROCESO
            </p>
            <h2
              id="flow-h"
              className="font-display font-bold text-white leading-[1.05] tracking-tightest mb-4"
              style={{ fontSize: 'clamp(1.75rem, 1.1rem + 2.4vw, 2.9rem)' }}
            >
              Del pozo al almacenamiento, integrado via SCADA.
            </h2>
            <p className="text-steel-400 leading-relaxed font-mono text-sm tracking-wide">
              Diagrama P&amp;ID del proceso completo de SPS, desde la extraccion hasta el monitoreo remoto.
            </p>
          </Reveal>

          <ProcessFlow />
        </div>
      </section>

      {/* ═══════════════ HUD TELEMETRY ═══════════════ */}
      <section className="bg-steel-50 py-20 lg:py-24" aria-label="Telemetria">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-10">
            <h2 className="h-section mb-4">Monitoreo en tiempo real.</h2>
            <p className="text-steel-500 leading-relaxed">
              Parametros criticos supervisados 24/7 desde nuestra sala de control.
            </p>
          </Reveal>
          <HUDTelemetry />
        </div>
      </section>

      {/* ═══════════════ PROJECTS (editorial list) ═══════════════ */}
      <section className="bg-ink-950 py-24 lg:py-28 relative overflow-hidden" aria-labelledby="projects-h">
        <div className="absolute inset-0 bp-grid bp-grid-fade opacity-50" />
        <div className="absolute inset-0 crt-scan opacity-20" />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blueLight mb-3">
                &lt; PROYECTOS EJECUTADOS /&gt;
              </p>
              <h2 id="projects-h" className="h-section text-white">
                Proyectos destacados.
              </h2>
            </div>
            <Link
              to="/proyectos"
              className="group inline-flex items-center gap-2 text-sm font-medium text-steel-300 hover:text-white transition-colors shrink-0 font-mono text-[11px] tracking-wide"
            >
              Ver todos los proyectos
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
                      <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-steel-500 border border-white/10 rounded px-2 py-0.5">
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
        <div className="absolute inset-0 crt-scan opacity-30" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/10 blur-[140px]" />
        <Reveal className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Panel frame */}
          <div className="relative rounded-2xl border border-white/10 bg-ink-900/40 backdrop-blur-sm p-8 sm:p-12 lg:p-14">
            {/* Corner LED */}
            <div className="absolute left-4 top-4 flex gap-2">
              <span
                className={`h-2 w-2 rounded-full bg-brand-red shadow-[0_0_8px_rgba(197,25,45,0.6)] ${!reduce ? 'animate-pulse' : ''}`}
              />
              <span className="h-2 w-2 rounded-full bg-steel-700" />
              <span className="h-2 w-2 rounded-full bg-steel-700" />
            </div>

            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blueLight mb-4">
              &lt; CONTACTANOS /&gt;
            </p>
            <h2
              id="cta-h"
              className="font-display text-3xl md:text-5xl font-bold text-white tracking-tightest leading-[1.05] mb-5"
            >
              Listo para tu proximo proyecto?
            </h2>
            <p className="text-steel-400 leading-relaxed mb-9 max-w-xl mx-auto font-mono text-sm">
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
            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-steel-500 font-mono text-[11px]">
              <span className="inline-flex items-center gap-2"><ShieldCheck size={15} className="text-brand-blueLight" /> Seguridad industrial</span>
              <span className="inline-flex items-center gap-2"><Gauge size={15} className="text-brand-blueLight" /> Excelencia operacional</span>
              <span className="inline-flex items-center gap-2"><Headphones size={15} className="text-brand-blueLight" /> Respuesta 24/7</span>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}