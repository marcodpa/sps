import { Link } from 'react-router-dom'
import {
  Flame, Cpu, WifiHigh, Broadcast,
  Drop, Thermometer, GasPump, Ruler, Trash, Truck, Wrench,
  Lightning, ArrowRight, ShieldCheck, Headphones, Gauge,
  Cloud, Fan, BatteryCharging, Plug, Radio, Circuitry, SolarRoof,
  GearSix, Wind, FireExtinguisher, Monitor,
} from '@phosphor-icons/react'

/* ── Imágenes de alta calidad ── */
const IMG = {
  calderas: 'https://images.unsplash.com/photo-1581092335901-5e50b5e8f3c0?auto=format&fit=crop&w=1400&q=80',
  petroleros: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1400&q=80',
  automatizacion: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
  pozo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=80',
  tanques: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1000&q=80',
  scada: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit-crop&w=1000&q=80',
}

/* ── Datos de servicios petroleros ── */
const serviciosPetroleros = [
  { icon: Drop, title: 'Inyección de vapor a pozos',
    desc: 'Servicio de inyección de vapor para recuperación mejorada de crudo en pozos petroleros. Equipos de alta capacidad y personal especializado.' },
  { icon: Tank, title: 'Inyección de vapor para patio de tanques',
    desc: 'Vapor para calentamiento y mantenimiento de tanques de almacenamiento en patios y estaciones de flujo.' },
  { icon: Tank, title: 'Alquiler de Frac Tank 500 bls',
    desc: 'Frac tanks con capacidad de 500 barriles para almacenamiento temporal de crudo, agua y fluidos de proceso.' },
  { icon: GasPump, title: 'Bombeo de crudo',
    desc: 'Servicio de bombeo de crudo para transferencia, carga y descarga en patios de tanques y estaciones.' },
  { icon: Drop, title: 'Saneamiento con hidrojet',
    desc: 'Limpieza y saneamiento de áreas contaminadas con petróleo mediante equipo hidrojet de alta presión.' },
  { icon: Truck, title: 'Trasegado con vacuum 160 bls',
    desc: 'Servicio de trasegado de crudo y fluidos con unidad vacuum de 160 barriles para operaciones de campo.' },
  { icon: Wrench, title: 'Camiones con equipos de soldadura',
    desc: 'Unidades móviles con equipos de soldadura para reparaciones y trabajos en campo, listas para despliegue inmediato.' },
  { icon: Wind, title: 'Vapor para calentamiento de sellos',
    desc: 'Vapor para calentamiento de sellos de bomba en operaciones de carga de buques en terminales marítimos.' },
  { icon: Recycle, title: 'Recuperación de crudo en fosas',
    desc: 'Recuperación de crudo en fosas de pasivos ambientales, cumpliendo normas ambientales y de seguridad.' },
  { icon: Wrench, title: 'Reparación y mantenimiento a calentadores',
    desc: 'Mantenimiento preventivo y correctivo de calentadores industriales utilizados en procesos de producción.' },
  { icon: Tool, title: 'Reparación y mantenimiento a calderas',
    desc: 'Servicio integral de reparación y mantenimiento de calderas portátiles y estacionarias. Certificación y pruebas.' },
]

const serviciosAutomatizacion = [
  { icon: Radio, title: 'Rehabilitación de telemetría',
    desc: 'Rehabilitación de sistemas de telemetría en pozos y estaciones de producción para monitoreo remoto en tiempo real.' },
  { icon: Circuitry, title: 'Programación de PLC',
    desc: 'Programación, configuración y puesta en marcha de controladores lógicos programables (PLC) en estaciones de producción.' },
  { icon: Cpu, title: 'Programación de RTU',
    desc: 'Programación de unidades remotas (RTU) para pozos de producción e inyección de agua, con enlace a SCADA.' },
  { icon: Monitor, title: 'Servicio SCADA Wonderware',
    desc: 'Implementación y soporte del sistema SCADA Wonderware CIBO para supervisión y control de procesos industriales.' },
  { icon: Gauge, title: 'Variadores y bombas BCP',
    desc: 'Instalación y programación de variadores de frecuencia en pozos con bombas BCP, integrados con RTU.' },
  { icon: Ruler, title: 'Instrumentación de campo',
    desc: 'Instrumentación de pozos y estaciones: sensores de presión, temperatura, flujo y nivel para monitoreo continuo.' },
  { icon: Plug, title: 'Sistemas de puesta a tierra',
    desc: 'Cableado e instalación de sistemas de puesta a tierra y protección contra pararrayos para infraestructura crítica.' },
  { icon: SolarRoof, title: 'Paneles solares para telemetría',
    desc: 'Instalación de paneles solares para alimentar sistemas de telemetría en pozos de inyección de agua sin electrificación.' },
]

export default function Servicios() {
  return (
    <>
      {/* ═══════════════ HERO ─────────────────── */}
      <section className="relative min-h-[60dvh] flex items-center overflow-hidden bg-ink-950" aria-label="Servicios">
        <div className="absolute inset-0">
          <img src={IMG.petroleros} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/60 to-ink-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
        </div>

        <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 mb-5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.5)]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel-300">
                Lo que ofrecemos
              </span>
            </div>

            <h1 className="font-display font-bold text-white leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(2.2rem, 1.3rem + 4vw, 4.2rem)' }}>
              Servicios petroleros{' '}
              <span className="text-brand-blueLight">e industriales</span>
              <br />especializados.
            </h1>

            <p className="text-steel-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              Desde inyección de vapor y alquiler de calderas hasta automatización SCADA y
              telecomunicaciones — ofrecemos soluciones integrales para la industria petrolera y manufacturera.
            </p>

            <div className="flex flex-wrap gap-2.5">
              {[
                { l: 'Calderas portátiles', h: '#calderas' },
                { l: 'Servicios petroleros', h: '#petroleros' },
                { l: 'Automatización', h: '#automatizacion' },
              ].map(({ l, h }) => (
                <a key={h} href={h}
                  className="rounded-lg border border-white/20 bg-white/[0.06] px-4 py-2 text-sm text-steel-200 transition-all duration-200 hover:border-brand-blue/50 hover:bg-brand-blue/10 hover:text-white">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CALDERAS PORTÁTILES ──── */}
      <section id="calderas" className="scroll-mt-20 relative overflow-hidden bg-ink-950" aria-labelledby="calderas-h">
        <div className="absolute inset-0">
          <img src={IMG.calderas} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/85 via-ink-950/60 to-ink-950/70" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-red mb-4">
                &lt; Alquiler de equipos /&gt;
              </p>
              <h2 id="calderas-h"
                className="font-display font-bold text-white leading-[1.05] tracking-tightest mb-6"
                style={{ fontSize: 'clamp(1.75rem, 1.1rem + 2.4vw, 2.9rem)' }}>
                Alquiler de calderas portátiles
              </h2>
              <p className="text-steel-300 leading-relaxed max-w-xl mb-8">
                Contamos con calderas portátiles de alta capacidad para proyectos de inyección
                de vapor, calentamiento de procesos y aplicaciones industriales.
                Equipos certificados, con mantenimiento preventivo incluido y operadores capacitados.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Capacidad', value: 'Hasta 50 MMBTU/h' },
                  { label: 'Presión', value: 'Hasta 1.500 PSI' },
                  { label: 'Disponibilidad', value: 'Inmediata' },
                  { label: 'Operación', value: '24/7' },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-steel-500 mb-1">{s.label}</p>
                    <p className="font-display text-lg font-bold text-white">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden">
                <img src={IMG.pozo} alt="Caldera portátil en operación" className="w-full aspect-[4/3] object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.5)]" />
                  <span className="font-mono text-[10px] text-white/60">Equipos certificados — Disponibles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ SERVICIOS PETROLEROS ─── */}
      <section id="petroleros" className="scroll-mt-20 bg-white py-24 lg:py-28" aria-labelledby="petroleros-h">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-red mb-3">
              &lt; Manejo, tratamiento y disposición /&gt;
            </p>
            <h2 id="petroleros-h"
              className="font-display font-bold text-ink-900 leading-[1.05] tracking-tightest mb-4"
              style={{ fontSize: 'clamp(1.75rem, 1.1rem + 2.4vw, 2.9rem)' }}>
              Servicios petroleros
            </h2>
            <p className="text-steel-500 leading-relaxed max-w-2xl">
              Soluciones integrales para la industria petrolera: desde inyección de vapor para
              recuperación de crudo hasta saneamiento ambiental y mantenimiento de equipos.
              Más de 7 años de experiencia en Campo Boscán y otros yacimientos del occidente del país.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviciosPetroleros.map((s, i) => (
              <div key={i}
                className="group relative rounded-2xl border border-steel-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-brand-blue/20">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue mb-4 transition-all duration-200 group-hover:bg-brand-blue group-hover:text-white">
                  <s.icon size={22} weight="bold" />
                </div>
                <h3 className="font-display text-base font-bold text-ink-900 mb-2">{s.title}</h3>
                <p className="text-sm text-steel-500 leading-relaxed">{s.desc}</p>
                {/* Hover indicator line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-brand-blue scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ AUTOMATIZACIÓN ───────── */}
      <section id="automatizacion" className="scroll-mt-20 relative overflow-hidden bg-ink-950 py-24 lg:py-28" aria-labelledby="auto-h">
        <div className="absolute inset-0">
          <img src={IMG.automatizacion} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-l from-ink-950/90 via-ink-950/70 to-ink-950/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blueLight mb-3">
              &lt; Automatización y control /&gt;
            </p>
            <h2 id="auto-h"
              className="font-display font-bold text-white leading-[1.05] tracking-tightest mb-4"
              style={{ fontSize: 'clamp(1.75rem, 1.1rem + 2.4vw, 2.9rem)' }}>
              Automatización industrial
            </h2>
            <p className="text-steel-300 leading-relaxed max-w-2xl">
              Soluciones de automatización, control y telemetría para pozos, estaciones y plantas.
              Desde programación de PLC y RTU hasta sistemas SCADA Wonderware y paneles solares para
              telemetría remota.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviciosAutomatizacion.map((s, i) => (
              <div key={i}
                className="group relative rounded-2xl border border-white/10 bg-ink-900/70 backdrop-blur-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-2xl hover:shadow-brand-blue/5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/15 text-brand-blueLight mb-4 transition-all duration-200 group-hover:bg-brand-blue group-hover:text-white">
                  <s.icon size={20} weight="bold" />
                </div>
                <h3 className="font-display text-base font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-steel-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <div className="mt-10 flex flex-wrap gap-3">
            {['Allen Bradley', 'Wonderware', 'Siemens', 'Modicon', 'Omron', 'Fanuc'].map((t) => (
              <span key={t}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-1.5 font-mono text-[11px] text-steel-400 transition-colors duration-200 hover:border-brand-blue/30 hover:text-brand-blueLight">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ BENEFICIOS ──────────── */}
      <section className="bg-white py-20" aria-label="Beneficios">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: ShieldCheck, t: 'Seguridad industrial', d: 'Cumplimiento estricto de normas de seguridad en todas nuestras operaciones.' },
              { icon: Headphones, t: 'Soporte 24/7', d: 'Respuesta inmediata ante emergencias. Personal técnico disponible en todo momento.' },
              { icon: Gauge, t: 'Excelencia operacional', d: 'Optimización continua de procesos con estándares internacionales de calidad.' },
            ].map(({ icon: I, t, d }) => (
              <div key={t}
                className="flex items-start gap-5 rounded-2xl border border-steel-200 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                  <I size={24} weight="bold" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-ink-900">{t}</h3>
                  <p className="mt-1 text-sm text-steel-500 leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ─────────────────── */}
      <section className="relative overflow-hidden bg-ink-950 py-24 lg:py-28" aria-labelledby="cta-serv-h">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-transparent to-transparent" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/8 blur-[140px]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative rounded-2xl border border-white/10 bg-ink-900/50 backdrop-blur-sm p-8 sm:p-12 lg:p-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blueLight mb-4">
              &lt; Contactanos /&gt;
            </p>
            <h2 id="cta-serv-h"
              className="font-display text-3xl md:text-4xl font-bold text-white tracking-tightest leading-[1.05] mb-4">
              Necesitas alguno de estos servicios?
            </h2>
            <p className="text-steel-300 leading-relaxed mb-9 max-w-xl mx-auto">
              Analizamos tu proyecto y te proponemos la solución más adecuada para tu industria.
              Solicita una cotización sin compromiso.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contacto"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-red px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-red/90 hover:-translate-y-0.5">
                Solicitar cotización <ArrowRight size={18} weight="bold" />
              </Link>
              <Link to="/proyectos"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5">
                Ver proyectos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

/* ── Iconos auxiliares no disponibles en @phosphor-icons ── */
function Tank({ size, weight, className, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="8" width="24" height="18" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="10" y="11" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
      <line x1="4" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="4" y1="20" x2="28" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <circle cx="26" cy="13" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="26" cy="17" r="1.5" fill="currentColor" opacity="0.6" />
      <line x1="28" y1="11" x2="31" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="28" y1="15" x2="31" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="28" y1="19" x2="31" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <polyline points="4,26 4,30 28,30 28,26" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  )
}

function Recycle({ size, weight, className, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M16 4 L22 14 L10 14 Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <path d="M22 14 L28 26 L16 26 Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <path d="M10 14 L16 26 L4 26 Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <circle cx="16" cy="14" r="1.5" fill="currentColor" />
      <path d="M16 19 L16 23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13 21 L16 23 L19 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Tool({ size, weight, className, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M16 5 L16 27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 16 L27 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="16" cy="16" r="1.5" fill="currentColor" />
    </svg>
  )
}