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
          ? 'bg-[#060F1D]/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      {/* Red swoosh accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C5192D] via-[#0057B8] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className="relative flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#0057B8] focus:ring-offset-2 focus:ring-offset-[#060F1D] rounded-xl px-2 py-1"
          >
            <div className="relative flex items-center gap-2">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#0057B8]/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Brand mark inspired by logo: S in blue, P in white, S in blue with red dot */}
              <span className="relative font-display text-xl font-bold tracking-tight">
                <span className="text-[#0057B8]">S</span>
                <span className="text-white">P</span>
                <span className="text-[#0057B8]">S</span>
              </span>
              <div className="h-5 w-px bg-white/10" />
              <div className="flex flex-col leading-none">
                <span className="text-[10px] font-bold text-white/80 tracking-wide">SERVICE PETROLEUM</span>
                <span className="text-[10px] font-bold text-white/50 tracking-wide">&amp; SUPPLY C.A.</span>
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Navegacion principal">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0057B8] focus:ring-offset-2 focus:ring-offset-[#060F1D] ${
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
                    <span className="relative z-10">{label}</span>
                  </>
                )}
              </NavLink>
            ))}
            <Link
              to="/contacto"
              className="ml-4 inline-flex items-center gap-2 bg-[#C5192D] hover:bg-[#A01424] text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 text-sm shadow-lg shadow-red-500/20 hover:shadow-xl hover:shadow-red-500/30 hover:-translate-y-0.5 active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-[#C5192D] focus:ring-offset-2 focus:ring-offset-[#060F1D]"
            >
              Contactanos
            </Link>
          </nav>

          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#0057B8] transition-all duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Cerrar menu' : 'Abrir menu'}
          >
            {menuOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#060F1D]/95 backdrop-blur-xl border-t border-white/5 shadow-2xl">
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