import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { List, X } from '@phosphor-icons/react'

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#060F1D] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className="relative flex items-center gap-3 group focus:outline-none rounded-xl"
          >
            <div className="flex items-center gap-3">
              <img
                src="/sps-logo.png"
                alt="SPS - Service Petroleum and Supply"
                className="h-14 md:h-16 w-auto object-contain"
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Navegacion principal">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <span className="absolute inset-0 bg-white/5 rounded-lg" />
                    )}
                    <span className="relative z-10">{label}</span>
                  </>
                )}
              </NavLink>
            ))}
            <Link
              to="/contacto"
              className="ml-4 inline-flex items-center gap-2 bg-[#C5192D] hover:bg-[#A01424] text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-[0.97]"
            >
              Contactanos
            </Link>
          </nav>

          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Cerrar menu' : 'Abrir menu'}
          >
            {menuOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#060F1D] border-t border-white/5 shadow-xl">
          <nav className="px-4 py-5 flex flex-col gap-1" aria-label="Menu movil">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/5 border border-white/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <div className="mt-3 pt-3 border-t border-white/10">
              <Link
                to="/contacto"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-[#C5192D] hover:bg-[#A01424] text-white font-semibold px-5 py-3 rounded-xl transition-all duration-200 text-sm"
              >
                Contactanos
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}