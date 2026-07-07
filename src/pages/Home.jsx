import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from '@phosphor-icons/react'
import { clients, featuredServices, media, projectCases, serviceGroups } from '../data/spsContent'
import FieldImage from '../components/FieldImage'
import { Reveal, Stagger, StaggerItem } from '../lib/motion'

const ease = [0.16, 1, 0.3, 1]

const clientLogoMap = {
  PDVSA: {
    src: '/assets/client-logos/pdvsa.png',
    alt: 'PDVSA',
  },
  Petroboscan: {
    src: '/assets/client-logos/petroboscan.png',
    alt: 'PDVSA Petroboscan',
  },
  Chevron: {
    src: '/assets/client-logos/chevron.png',
    alt: 'Chevron',
  },
  'Gobernacion del Zulia': {
    src: '/assets/client-logos/gobernacion-zulia.png',
    alt: 'Gobernacion del Zulia',
  },
}

export default function Home() {
  const mainCases = projectCases.slice(0, 3)
  const heroImage = '/assets/sps-field/hero-home-field.jpg'

  return (
    <>
      <section className="relative isolate flex min-h-screen items-end overflow-hidden bg-ink-950 pb-16 pt-36 text-white lg:pb-24 lg:pt-44">
        <FieldImage
          src={heroImage}
          alt="Patio operativo SPS con equipos, tanques y caldera en campo"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
          width="1920"
          height="1080"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,13,24,.97)_0%,rgba(7,13,24,.84)_44%,rgba(7,13,24,.42)_74%,rgba(7,13,24,.12)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/10 to-ink-950/45" />
        <div className="bp-grid absolute inset-0 opacity-20" />
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.08]" />

        <div className="section-shell relative w-full">
          <div className="max-w-3xl">
            <motion.p
              className="mono-label text-brand-redLight"
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease }}
            >
              Service Petroleum and Supply C.A.
            </motion.p>
            <motion.h1
              className="max-w-2xl font-display font-black uppercase leading-[0.95] tracking-tight text-white"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.6rem)' }}
              initial={{ y: 36, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.08, ease }}
            >
              Respuesta tecnica para operaciones criticas.
            </motion.h1>
            <motion.div
              className="mt-6 max-w-xl field-line pl-5"
              initial={{ y: 26, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.85, delay: 0.22, ease }}
            >
              <p className="text-sm font-medium leading-relaxed text-steel-100 sm:text-base">
                Vapor, recuperacion, saneamiento, automatizacion y soporte industrial con equipos movilizados en campo.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link to="/servicios" className="btn-primary group">
                  Ver servicios
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-brand-blue transition-transform duration-300 ease-field group-hover:translate-x-1">
                    <ArrowRight size={17} weight="bold" />
                  </span>
                </Link>
                <Link to="/proyectos" className="btn-ghost-light">
                  Ver evidencia
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 text-ink-900 lg:py-32">
        <div className="section-shell">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="mono-label text-brand-red">Quienes somos</p>
              <h2 className="mt-5 font-display text-4xl font-black uppercase leading-[0.96] tracking-tight text-ink-900 md:text-6xl">
                Una empresa de campo,<br />
                <span className="text-brand-blue">no de escritorio.</span>
              </h2>
              <div className="mt-8 space-y-4 text-sm leading-relaxed text-steel-600">
                <p>
                  SPS combina personal tecnico, equipos moviles y criterio operativo para atender pozos,
                  estaciones, patios de tanques, fosas y plantas industriales con mas de una decada de
                  experiencia en la Cuenca del Lago de Maracaibo.
                </p>
                <p>
                  Hemos participado en operaciones de inyeccion de vapor, calentamiento de crudo,
                  saneamiento de fosas, telemetria y automatizacion para clientes como PDVSA,
                  Petroboscan y Chevron.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="media-frame aspect-[4/5]">
                  <FieldImage
                    src={media.bajoGrandePatio}
                    alt=""
                    className="h-full w-full object-cover"
                    width="600"
                    height="750"
                    sizes="(min-width: 1024px) 25vw, 50vw"
                  />
                </div>
                <div className="mt-8 grid gap-4">
                  <div className="media-frame aspect-[4/3]">
                    <FieldImage
                      src={media.boscanAntes}
                      alt=""
                      className="h-full w-full object-cover"
                      width="600"
                      height="450"
                      sizes="(min-width: 1024px) 25vw, 50vw"
                    />
                  </div>
                  <div className="media-frame aspect-[4/3]">
                    <FieldImage
                      src={media.fracModern01}
                      alt=""
                      className="h-full w-full object-cover"
                      width="600"
                      height="450"
                      sizes="(min-width: 1024px) 25vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink-950 py-20 text-white lg:py-28">
        <div className="bp-grid absolute inset-0 opacity-20" />
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.1]" />
        <div className="section-shell relative">
          <Reveal className="mb-12 max-w-4xl">
            <p className="mono-label text-brand-redLight">Servicios principales</p>
            <h2 className="mt-5 max-w-4xl font-display text-4xl font-black uppercase leading-[0.96] tracking-tight text-white md:text-6xl">
              Vapor, fluidos y control para operaciones que no pueden esperar.
            </h2>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-4">
            <Reveal className="media-frame relative min-h-[34rem] md:col-span-1">
              <FieldImage
                src={media.bajoGrandeCaldera}
                alt="Caldera portatil SPS instalada para servicio de vapor"
                className="absolute inset-0 h-full w-full object-cover"
                width="1100"
                height="900"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="mono-label text-brand-blueLight">Equipo movil</p>
                <h3 className="mt-4 max-w-xl font-display text-4xl font-black uppercase leading-[0.95] text-white">
                  Equipos reales para operaciones reales.
                </h3>
              </div>
            </Reveal>

            {featuredServices.slice(0, 3).map(({ title, copy, image, icon: Icon }, index) => (
              <Reveal key={title} delay={0.08 * (index + 1)}>
                <article className="group flex min-h-[34rem] flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.055] p-5 transition-[transform,background-color,border-color] duration-300 ease-field hover:-translate-y-1 hover:border-brand-blueLight/60 hover:bg-white/[0.085]">
                  <div>
                    <div className="media-frame h-36 rounded-xl">
                      <FieldImage
                        src={image}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-700 ease-field group-hover:scale-[1.04]"
                        width="640"
                        height="360"
                        sizes="(min-width: 1024px) 25vw, 100vw"
                      />
                    </div>
                    <div className="mt-7 flex items-start justify-between gap-4">
                      <Icon size={30} weight="bold" className="shrink-0 text-brand-redLight" />
                      <span className="font-mono text-xs font-bold text-brand-blueLight">0{index + 1}</span>
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-black uppercase leading-[0.96] text-white">
                      {title}
                    </h3>
                    <p className="mt-4 text-sm font-medium leading-relaxed text-steel-300">{copy}</p>
                  </div>
                  <Link to="/servicios" className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-brand-blueLight transition-colors hover:text-white">
                    Ver detalle <ArrowRight size={17} weight="bold" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-steel-200 bg-white py-14 text-ink-900">
        <div className="section-shell grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
          <Reveal>
            <p className="mono-label text-brand-red">Nuestros clientes</p>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-black uppercase leading-[0.96] tracking-tight text-ink-900 sm:text-4xl">
              Aliados de operaciones petroleras e industriales.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-steel-200 bg-steel-200 sm:grid-cols-2 lg:grid-cols-4">
              {clients.map((client) => {
                const logo = clientLogoMap[client]

                return (
                <div key={client} className="flex min-h-28 items-center justify-center bg-white px-5 text-center transition-colors duration-300 ease-field hover:bg-steel-50">
                  {logo ? (
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-16 w-auto max-w-[11rem] object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <span className="text-sm font-extrabold uppercase tracking-[0.08em] text-ink-900">{client}</span>
                  )}
                </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-steel-50 py-20 text-ink-900 lg:py-28">
        <div className="section-shell">
          <Reveal className="mb-12 max-w-4xl">
            <p className="mono-label text-brand-red">Frentes de trabajo</p>
            <h2 className="h-section mt-5">Tres lineas operativas, una sola respuesta de campo.</h2>
          </Reveal>
          <Stagger className="grid gap-4 lg:grid-cols-3">
            {serviceGroups.map(({ id, title, intro, image, icon: Icon }, index) => (
              <StaggerItem key={id}>
                <Link
                  to={`/servicios#${id}`}
                  className="group relative block min-h-[31rem] overflow-hidden rounded-2xl bg-ink-950 shadow-lift"
                >
                  <FieldImage
                    src={image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-700 ease-field group-hover:scale-[1.04]"
                    width="900"
                    height="1100"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-blue">
                        <Icon size={25} weight="bold" />
                      </span>
                      <span className="font-mono text-xs font-bold text-brand-redLight">0{index + 1}</span>
                    </div>
                    <h3 className="mt-5 font-display text-3xl font-black uppercase leading-[0.95] text-white">{title}</h3>
                    <p className="mt-4 text-sm font-medium leading-relaxed text-steel-200">{intro}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-white py-20 text-ink-900 lg:py-28">
        <div className="section-shell">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal className="max-w-4xl">
              <p className="mono-label text-brand-blue">Evidencia de campo</p>
              <h2 className="h-section mt-5">Proyectos visibles, documentados desde el sitio.</h2>
            </Reveal>
            <Link to="/proyectos" className="btn-red w-fit">
              Ver informe <ArrowRight size={18} weight="bold" />
            </Link>
          </div>

          <Stagger className="grid gap-4 lg:grid-cols-3">
            {mainCases.map((item) => (
              <StaggerItem key={item.title}>
                <article className="group h-full overflow-hidden rounded-2xl border border-steel-200 bg-steel-50 transition-[transform,border-color,box-shadow] duration-300 ease-field hover:-translate-y-1 hover:border-brand-blue hover:shadow-lift">
                  <div className="media-frame h-72 rounded-none">
                    <FieldImage
                      src={item.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-700 ease-field group-hover:scale-[1.04]"
                      width="900"
                      height="600"
                      sizes="(min-width: 1024px) 33vw, 100vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="mono-label text-brand-blue">{item.category}</p>
                    <h3 className="mt-4 font-display text-2xl font-black uppercase leading-[0.98] text-ink-900">{item.title}</h3>
                    <p className="mt-5 flex items-start gap-2 text-sm font-bold text-steel-700">
                      <MapPin size={18} weight="bold" className="mt-0.5 shrink-0 text-brand-red" />
                      {item.location}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-steel-50 px-4 pb-24 text-ink-900 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-t border-steel-200 pt-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mono-label text-brand-red">Cotizacion y visita tecnica</p>
            <h2 className="mt-4 max-w-4xl font-display text-4xl font-black uppercase leading-[0.98] tracking-tight text-ink-900 md:text-6xl">
              Hablemos de tu proxima operacion.
            </h2>
          </div>
          <Link to="/contacto" className="btn-primary w-fit">
            Solicitar atencion <ArrowRight size={18} weight="bold" />
          </Link>
        </div>
      </section>
    </>
  )
}
