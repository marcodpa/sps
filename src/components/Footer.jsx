import { Link } from 'react-router-dom'
import { MapPin, Phone } from '@phosphor-icons/react'

const services = [
  'Conectividad',
  'Telecomunicaciones',
  'Automatizacion e Instrumentacion',
  'Servicios Petroleros',
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
    <footer className="bg-[#060F1D] text-gray-400 relative">
      {/* Top accent swoosh */}
      <div className="h-[2px] bg-gradient-to-r from-[#C5192D] via-[#0057B8] to-transparent" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <div className="mb-5">
              <img
                src="/sps-logo.png"
                alt="SPS - Service Petroleum and Supply"
                className="h-14 w-auto object-contain"
              />
              <p className="text-xs text-gray-500 mt-2 font-medium tracking-wide">
                Service Petroleum &amp; Supply, C.A.
              </p>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-xs">
              Empresa venezolana especializada en servicios petroleros, automatizacion industrial y telecomunicaciones de alta calidad.
            </p>
          </div>

          {/* Servicios */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-display font-semibold text-sm mb-5 tracking-wide">
              Servicios
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/servicios"
                    className="text-sm text-gray-500 hover:text-[#0057B8] transition-colors duration-200"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-display font-semibold text-sm mb-5 tracking-wide">
              Empresa
            </h3>
            <ul className="space-y-2.5">
              {pages.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-gray-500 hover:text-[#0057B8] transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="lg:col-span-4">
            <h3 className="text-white font-display font-semibold text-sm mb-5 tracking-wide">
              Contacto
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0057B8]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={14} className="text-[#0057B8]" />
                </div>
                <span className="text-sm text-gray-500 leading-relaxed">
                  Av. 5, Calle 13, N 26A-162<br />
                  San Francisco, Maracaibo<br />
                  Zulia, Venezuela
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0057B8]/10 flex items-center justify-center shrink-0">
                  <Phone size={14} className="text-[#0057B8]" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <a href="tel:+582613226494" className="text-sm text-gray-500 hover:text-[#0057B8] transition-colors duration-200">
                    0261 322 6494
                  </a>
                  <a href="tel:+584146361373" className="text-sm text-gray-500 hover:text-[#0057B8] transition-colors duration-200">
                    +58 414 636 1373
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            SPS &copy; {new Date().getFullYear()} - Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-600/60">
            Service Petroleum and Supply C.A.
          </p>
        </div>
      </div>
    </footer>
  )
}