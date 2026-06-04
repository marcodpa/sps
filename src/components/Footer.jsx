import { Link } from 'react-router-dom'
import { MapPin, Phone, ArrowRight, Share2, Globe } from 'lucide-react'

const services = [
  'Conectividad',
  'Telecomunicaciones',
  'Automatización e Instrumentación',
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
    <footer className="bg-[#060F1D] text-gray-300">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-[#C8102E] via-[#1C3D5A] to-[#0B1F3A]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="font-display text-2xl font-bold text-white">
                SP<span className="text-[#0057B8]">SOIL</span>
              </span>
              <p className="text-xs text-gray-400 mt-1">SP Soil &amp; Supply, C.A.</p>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Empresa venezolana especializada en servicios petroleros, automatización industrial y telecomunicaciones de alta calidad.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#0057B8] flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0057B8]"
              >
                <Share2 size={16} />
              </a>
              <a
                href="#"
                aria-label="Sitio web"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#0057B8] flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0057B8]"
              >
                <Globe size={16} />
              </a>
            </div>
          </div>

          {/* s */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 pb-2 border-b border-white/10">
              Servicios
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/servicios"
                    className="text-sm text-gray-400 hover:text-[#0057B8] transition-colors flex items-center gap-2 focus:outline-none focus:text-[#0057B8]"
                  >
                    <ArrowRight size={14} className="text-[#0057B8]" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 pb-2 border-b border-white/10">
              Empresa
            </h3>
            <ul className="space-y-2.5">
              {pages.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-gray-400 hover:text-[#0057B8] transition-colors flex items-center gap-2 focus:outline-none focus:text-[#0057B8]"
                  >
                    <ArrowRight size={14} className="text-[#0057B8]" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 pb-2 border-b border-white/10">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#0057B8] mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400 leading-relaxed">
                  Av. 5, Calle 13, Nº 26A-162<br />
                  San Francisco, Maracaibo<br />
                  Zulia, Venezuela
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#0057B8] shrink-0" />
                <a href="tel:+582613226494" className="text-sm text-gray-400 hover:text-[#0057B8] transition-colors focus:outline-none focus:text-[#0057B8]">
                  0261 322 6494
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#0057B8] shrink-0" />
                <a href="tel:+584146361373" className="text-sm text-gray-400 hover:text-[#0057B8] transition-colors focus:outline-none focus:text-[#0057B8]">
                  +58 414 636 1373
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            SPSOIL © {new Date().getFullYear()} - Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-600">
              and Supply C.A. · RIF: J-XXXXXXXXX-X
          </p>
        </div>
      </div>
    </footer>
  )
}
