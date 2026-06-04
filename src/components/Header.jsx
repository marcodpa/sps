import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

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
          ? 'bg-[#060F1D]/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="relative flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#0057B8] focus:ring-offset-2 focus:ring-offset-[#060F1D] rounded-xl px-2 py-1"
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#0057B8]/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative font-display text-xl font-bold text-white tracking-tight">
                SP<span className="text-[#0057B8]">SOIL</span>
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0057B8] focus:ring-offset-2 focus:ring-offset-[#060F1D] group ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <span className="absolute inset-0 bg-[#0057B8]/10 rounded-lg border border-[#0057B8]/20" />
                    )}
                    <span className="relative z-10 flex items-center gap-1">
                      {label}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
            <Link
              to="/contacto"
              className="ml-4 inline-flex items-center gap-2 bg-[#0057B8] hover:bg-[#003B72] text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 text-sm shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-[#0057B8] focus:ring-offset-2 focus:ring-offset-[#060F1D]"
            >
              Contáctanos
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#0057B8] transition-all duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#060F1D]/95 backdrop-blur-xl border-t border-white/5 shadow-2xl">
          <nav className="px-4 py-5 flex flex-col gap-1" aria-label="Menú móvil">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-[#0057B8]/10 border border-[#0057B8]/20'
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
                className="flex items-center justify-center gap-2 bg-[#0057B8] hover:bg-[#003B72] text-white font-semibold px-5 py-3 rounded-xl transition-all duration-200 text-sm"
              >
                Contáctanos
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}