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
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)] border-b border-gray-100'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
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
                className="h-10 md:h-11 w-auto object-contain"
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
                      ? 'text-[#0B1F3A]'
                      : 'text-gray-500 hover:text-[#0B1F3A]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <span className="absolute inset-0 bg-[#0057B8]/5 rounded-lg" />
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
            className="md:hidden text-[#0B1F3A] p-2 rounded-lg hover:bg-gray-100 transition-all duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Cerrar menu' : 'Abrir menu'}
          >
            {menuOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
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
                      ? 'text-[#0B1F3A] bg-[#0057B8]/5 border border-[#0057B8]/10'
                      : 'text-gray-500 hover:text-[#0B1F3A] hover:bg-gray-50'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <div className="mt-3 pt-3 border-t border-gray-100">
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