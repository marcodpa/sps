import { Link } from 'react-router-dom'
import { MapPin, Phone, ArrowUpRight } from '@phosphor-icons/react'

const services = [
  { label: 'Conectividad', hash: '#conectividad' },
  { label: 'Telecomunicaciones', hash: '#telecomunicaciones' },
  { label: 'Automatizacion', hash: '#automatizacion' },
  { label: 'Servicios petroleros', hash: '#petroleros' },
]

const pages = [
  { to: '/', label: 'Inicio' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Footer() {
  return (
    <footer className="relative bg-ink-950 text-steel-400 overflow-hidden">
      <div className="h-0.5 bg-gradient-to-r from-brand-red via-brand-blue to-transparent" />
      <div className="absolute inset-0 bp-grid bp-grid-fade opacity-40" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <img
              src="/sps-logo.png"
              alt="SPS - Service Petroleum and Supply"
              className="h-16 w-auto object-contain"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-steel-500">
              Empresa venezolana especializada en servicios petroleros, automatizacion
              industrial y telecomunicaciones de alta calidad.
            </p>
          </div>

          <nav className="lg:col-span-2" aria-label="Servicios">
            <h3 className="mb-5 font-display text-sm font-semibold text-white">Servicios</h3>
            <ul className="space-y-2.5">
              {services.map(({ label, hash }) => (
                <li key={label}>
                  <Link
                    to={`/servicios${hash}`}
                    className="text-sm text-steel-500 transition-colors hover:text-brand-blueLight"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-2" aria-label="Empresa">
            <h3 className="mb-5 font-display text-sm font-semibold text-white">Empresa</h3>
            <ul className="space-y-2.5">
              {pages.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-steel-500 transition-colors hover:text-brand-blueLight"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h3 className="mb-5 font-display text-sm font-semibold text-white">Contacto</h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10">
                  <MapPin size={14} className="text-brand-blueLight" />
                </span>
                <span className="text-sm leading-relaxed text-steel-500">
                  Av. 5, Calle 13, N 26A-162<br />
                  San Francisco, Maracaibo<br />
                  Zulia, Venezuela
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10">
                  <Phone size={14} className="text-brand-blueLight" />
                </span>
                <span className="flex flex-col gap-0.5">
                  <a href="tel:+582613226494" className="text-sm text-steel-500 transition-colors hover:text-brand-blueLight">
                    0261 322 6494
                  </a>
                  <a href="tel:+584146361373" className="text-sm text-steel-500 transition-colors hover:text-brand-blueLight">
                    +58 414 636 1373
                  </a>
                </span>
              </li>
            </ul>
            <Link
              to="/contacto"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-brand-blueLight"
            >
              Solicitar cotizacion <ArrowUpRight size={15} weight="bold" />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="font-mono text-xs text-steel-600">
            SPS &copy; {new Date().getFullYear()}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-steel-600">Service Petroleum and Supply C.A.</p>
        </div>
      </div>
    </footer>
  )
}
