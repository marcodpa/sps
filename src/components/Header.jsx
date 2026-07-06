import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { ArrowUpRight, List, X } from '@phosphor-icons/react'

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
    <header className="fixed inset-x-0 top-0 z-50">
      <div>
        <div className="flex min-h-24 items-center justify-between border-b border-steel-200 bg-white px-6 shadow-[0_18px_70px_-45px_rgba(11,20,38,.65)] sm:min-h-28 sm:px-8">
          <Link to="/" className="group flex items-center gap-3 rounded-xl" onClick={() => setMenuOpen(false)}>
            <img
              src="/sps-logo.png"
              alt="SPS - Service Petroleum and Supply"
              className="h-20 w-auto object-contain transition-transform duration-300 ease-field group-hover:scale-[1.03] sm:h-24 lg:h-28"
              width="180"
              height="80"
            />
          </Link>

          <nav className="hidden items-center gap-2 md:flex" aria-label="Navegacion principal">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className="group relative rounded-full px-5 py-3 text-base font-extrabold transition-colors duration-200 ease-field"
              >
                {({ isActive }) => (
                  <span className={isActive ? 'text-brand-blue' : 'text-ink-900/70 group-hover:text-ink-900'}>
                    {label}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link to="/contacto" className="btn-primary min-h-12 px-5 py-2.5">
              Cotizar
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-blue">
                <ArrowUpRight size={17} weight="bold" />
              </span>
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-steel-200 bg-steel-50 text-ink-900 transition-[transform,background-color,border-color] duration-200 ease-field hover:bg-white active:scale-[0.97] md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Cerrar menu' : 'Abrir menu'}
          >
            {menuOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`overflow-hidden border-b border-steel-200 bg-white shadow-lift transition-[max-height,opacity,transform] duration-300 ease-field md:hidden ${
            menuOpen ? 'max-h-[520px] translate-y-0 opacity-100' : 'max-h-0 -translate-y-2 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-1 p-3" aria-label="Menu movil">
            {navLinks.map(({ to, label }, index) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-bold transition-[transform,background-color,color] duration-300 ease-field ${
                    isActive
                      ? 'bg-brand-blue text-white'
                      : 'text-ink-900/72 hover:bg-steel-100 hover:text-ink-900'
                  }`
                }
                style={{
                  transitionDelay: menuOpen ? `${index * 35}ms` : '0ms',
                }}
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/contacto"
              onClick={() => setMenuOpen(false)}
              className="btn-primary mt-3 w-full"
            >
              Solicitar cotizacion
              <ArrowUpRight size={17} weight="bold" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
