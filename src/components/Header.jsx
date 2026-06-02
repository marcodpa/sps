import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

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
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0B1F3A] shadow-xl' : 'bg-[#0B1F3A]/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#E8842B] focus:ring-offset-2 focus:ring-offset-[#0B1F3A] rounded-lg">
            <div className="flex flex-col leading-none">
              <span className="font-display font-800 text-xl text-white tracking-wide">
                SP<span className="text-[#E8842B]">SOIL</span>
              </span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">
                Service Petroleum &amp; Supply
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
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#E8842B] focus:ring-offset-2 focus:ring-offset-[#0B1F3A] ${
                    isActive
                      ? 'text-[#E8842B] bg-white/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link to="/contacto" className="ml-4 btn-primary text-sm">
              Contáctanos
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#E8842B] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Abrir menú"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0B1F3A] border-t border-white/10">
          <nav className="px-4 py-4 flex flex-col gap-1" aria-label="Menú móvil">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[#E8842B] bg-white/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/contacto"
              onClick={() => setMenuOpen(false)}
              className="mt-2 btn-primary text-sm justify-center"
            >
              Contáctanos
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
