import { Link } from 'react-router-dom'
import {
  WifiHigh, Broadcast, Cpu, Flame, Drop, ArrowRight, ArrowUpRight, CheckCircle,
  Monitor, Gear, Plugs, Gauge, Network, ShieldCheck, Lightning, Medal,
} from '@phosphor-icons/react'
import { Reveal, Stagger, StaggerItem } from '../lib/motion'
import PageHero from '../components/PageHero'
import SpotlightCard from '../components/SpotlightCard'
import Marquee from '../components/Marquee'
import MagneticButton from '../components/MagneticButton'

const brands = ['Cisco', 'Siemens', 'Rockwell', 'Fanuc', 'Modicon', 'Omron', 'Wonderware']

function ServiceSplit({
  id, icon: Icon, accent, kicker, title, desc, img, items, tags, reverse, bg,
}) {
  const isRed = accent === 'red'
  const accentText = isRed ? 'text-brand-red' : 'text-brand-blue'
  const accentBg = isRed ? 'bg-brand-red' : 'bg-brand-blue'
  const accentSoft = isRed ? 'bg-brand-red/10 text-brand-red' : 'bg-brand-blue/10 text-brand-blue'

  return (
    <section id={id} className={`scroll-mt-24 ${bg}`} aria-labelledby={`${id}-h`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal className={reverse ? 'lg:order-2' : ''}>
            <div className="relative clip-corner overflow-hidden rounded-2xl group">
              <img
                src={img}
                alt={`Servicio de ${title}`}
                className="aspect-[4/3] w-full object-cover transition-transform duration-[1.1s] group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
              <div className={`absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lift ${accentBg}`}>
                <Icon size={24} weight={isRed ? 'fill' : 'regular'} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className={reverse ? 'lg:order-1' : ''}>
            <p className={`mb-3 font-mono text-[11px] uppercase tracking-[0.2em] ${accentText}`}>{kicker}</p>
            <h2 id={`${id}-h`} className="h-section mb-4">{title}</h2>
            <p className="text-steel-600 leading-relaxed max-w-lg mb-8">{desc}</p>

            <Stagger className="grid sm:grid-cols-2 gap-2.5 mb-8">
              {items.map((text) => (
                <StaggerItem key={text} className="flex items-start gap-3 rounded-xl border border-steel-100 bg-white/60 p-3.5">
                  <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${accentSoft}`}>
                    <CheckCircle size={15} weight="fill" />
                  </span>
                  <span className="text-sm leading-relaxed text-steel-600">{text}</span>
                </StaggerItem>
              ))}
            </Stagger>

            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="rounded-lg border border-steel-200 bg-white px-3 py-1 font-mono text-[11px] font-medium text-steel-500">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default function Servicios() {
  return (
    <>
      <PageHero
        kicker="Lo que ofrecemos"
        title="Cuatro lineas de servicio"
        accent="especializadas."
        subtitle="Para la industria petrolera y manufacturera, en Venezuela e internacional. Del pozo a la sala de control."
      >
        <div className="mt-8 flex flex-wrap gap-2.5">
          {[
            { l: 'Servicios petroleros', h: '#petroleros' },
            { l: 'Automatizacion', h: '#automatizacion' },
            { l: 'Conectividad', h: '#conectividad' },
            { l: 'Telecomunicaciones', h: '#telecomunicaciones' },
          ].map(({ l, h }) => (
            <a key={l} href={h} className="rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm text-steel-300 transition-colors hover:border-brand-blue/40 hover:text-white">
              {l}
            </a>
          ))}
        </div>
      </PageHero>

      {/* Petroleros — split, red flagship */}
      <ServiceSplit
        id="petroleros"
        icon={Flame}
        accent="red"
        kicker="Linea principal"
        title="Servicios petroleros"
        desc="Servicios especializados para la industria petrolera con tecnologia de punta y personal altamente calificado."
        img="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=80"
        items={[
          'Inyeccion de vapor en pozo para recuperacion de crudo.',
          'Extraccion de crudo en fosas y pozos petroleros.',
        ]}
        tags={['Vapor', 'Crudo pesado', 'Recuperacion', 'Pozos']}
        bg="bg-white"
      />

      {/* Automatizacion — split reversed, blue */}
      <ServiceSplit
        id="automatizacion"
        icon={Cpu}
        accent="blue"
        kicker="Control y supervision"
        title="Automatizacion e instrumentacion"
        desc="Soluciones de automatizacion industrial que optimizan procesos, mejoran la seguridad y maximizan la productividad."
        img="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
        items={[
          'Instalacion de instrumentos de medicion, supervision y control.',
          'Cableado, conduit, cajas de interconexion y tuberias.',
          'Personal tecnico para operaciones y mantenimiento.',
          'Instalacion, programacion y mantenimiento de PLC, RTU, HMI y DCS.',
          'Diseno e implementacion de sistemas SCADA.',
          'Calibracion de flujo, presion, nivel y temperatura.',
        ]}
        tags={['PLC', 'SCADA', 'HMI', 'RTU', 'DCS']}
        reverse
        bg="bg-steel-50"
      />

      {/* Conectividad — dark full-width break (no image+text split) */}
      <section id="conectividad" className="scroll-mt-24 relative overflow-hidden bg-ink-950 py-20 lg:py-28" aria-labelledby="conectividad-h">
        <div className="absolute inset-0 bp-grid bp-grid-fade opacity-50" />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-12">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-blueLight">Infraestructura de red</p>
            <h2 id="conectividad-h" className="h-section text-white mb-4">Conectividad empresarial</h2>
            <p className="text-steel-300 leading-relaxed">
              Redes robustas, seguras y de alto rendimiento para empresas que dependen de su
              infraestructura de voz, datos y video.
            </p>
          </Reveal>
          <Stagger className="grid md:grid-cols-3 gap-4">
            {[
              { icon: Network, t: 'Diseno e implantacion', d: 'Soluciones de conectividad de extremo a extremo.' },
              { icon: Plugs, t: 'Redes LAN / WAN', d: 'Instalacion y configuracion de redes corporativas.' },
              { icon: Monitor, t: 'Voz, datos y video', d: 'Redes corporativas de servicios convergentes.' },
            ].map(({ icon: I, t, d }) => (
              <StaggerItem key={t}>
                <SpotlightCard className="h-full rounded-2xl border border-ink-700 bg-ink-900 p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-blueLight mb-5">
                    <I size={22} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-1.5">{t}</h3>
                  <p className="text-sm text-steel-400 leading-relaxed">{d}</p>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-8 flex flex-wrap gap-2">
            {['LAN/WAN', 'Fibra optica', 'VoIP', 'VPN'].map((t) => (
              <span key={t} className="rounded-lg border border-white/10 px-3 py-1 font-mono text-[11px] text-steel-400">{t}</span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Telecomunicaciones — split, blue */}
      <ServiceSplit
        id="telecomunicaciones"
        icon={Broadcast}
        accent="blue"
        kicker="Infraestructura de comunicaciones"
        title="Telecomunicaciones"
        desc="Despliegue de infraestructura de telecomunicaciones con los mas altos estandares de calidad y confiabilidad."
        img="https://images.unsplash.com/photo-1519558260268-cde7e03a0152?auto=format&fit=crop&w=900&q=80"
        items={[
          'Instalacion de canalizaciones telefonicas.',
          'Tendido de redes aereas, ductos y enterradas.',
          'Construccion de enlaces por fibra optica.',
          'Enlaces dedicados de radio o frame relay.',
        ]}
        tags={['Fibra optica', 'Radio enlaces', 'Frame relay', 'Ductos']}
        bg="bg-white"
      />

      {/* Benefits */}
      <section className="bg-steel-50 py-20" aria-label="Beneficios">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <Stagger className="grid md:grid-cols-3 gap-5">
            {[
              { icon: Medal, t: 'Calidad certificada', d: 'Estandares internacionales en cada proyecto.' },
              { icon: Lightning, t: 'Mejora continua', d: 'Optimizacion permanente de procesos.' },
              { icon: ShieldCheck, t: 'Seguridad garantizada', d: 'Cumplimiento de normas de seguridad industrial.' },
            ].map(({ icon: I, t, d }) => (
              <StaggerItem key={t}>
                <div className="flex items-start gap-4 rounded-2xl border border-steel-200 bg-white p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                    <I size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-ink-900">{t}</h3>
                    <p className="mt-1 text-sm text-steel-500">{d}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Brands */}
      <section className="bg-white py-16" aria-label="Marcas">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Reveal><h2 className="h-section text-center">Trabajamos con marcas lideres.</h2></Reveal>
        </div>
        <Reveal><Marquee items={brands} /></Reveal>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink-950 py-24" aria-labelledby="cta-serv-h">
        <div className="absolute inset-0 bp-grid bp-grid-fade opacity-60" />
        <Reveal className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-serv-h" className="font-display text-3xl md:text-4xl font-bold text-white tracking-tightest mb-4">
            Necesitas alguno de estos servicios?
          </h2>
          <p className="text-steel-300 mb-9 max-w-xl mx-auto leading-relaxed">
            Analizamos tu proyecto y te proponemos la solucion mas adecuada para tu industria.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <MagneticButton to="/contacto" className="btn-primary">
              Solicitar informacion <ArrowRight size={18} weight="bold" />
            </MagneticButton>
            <Link to="/proyectos" className="btn-ghost-light">Ver proyectos</Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
