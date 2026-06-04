import { Link } from 'react-router-dom'
import {
  Crosshair,
  Eye,
  Lightning,
  ArrowRight,
  ShieldCheck,
  Users,
  Headphones,
  CheckCircle,
  Compass,
  TrendUp,
  Target,
} from '@phosphor-icons/react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const HERO_IMG =
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80'

const IMG_MISION =
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=80'

const IMG_VISION =
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80'

const IMG_TEAM =
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80'

const values = [
  { icon: TrendUp, text: 'Calidad e innovacion continua' },
  { icon: ShieldCheck, text: 'Seguridad e higiene industrial' },
  { icon: Users, text: 'Talento humano motivado' },
  { icon: Headphones, text: 'Respuesta rapida ante emergencias' },
  { icon: Target, text: 'Coordinacion con empresas aliadas' },
  { icon: Lightning, text: 'Armonia con el ambiente' },
]

export default function Nosotros() {
  useScrollAnimation()

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 min-h-[55vh] flex items-center overflow-hidden" aria-label="Nosotros">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 hero-gradient opacity-95" />
          <div className="absolute inset-0 dot-pattern opacity-20" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0057B8]" />
            <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">La empresa</span>
          </div>
          <h1 className="section-title-light text-5xl lg:text-6xl mb-4">Quienes Somos</h1>
          <p className="text-gray-400 text-base max-w-2xl leading-relaxed">
            Conoce nuestra mision, vision y los valores que guian cada uno de nuestros proyectos petroleros e industriales.
          </p>
        </div>
      </section>

      {/* Description — no eyebrow */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center aos-hidden">
            <h2 className="section-title mb-6">Service Petroleum and Supply C.A.</h2>
            <div className="w-12 h-1 bg-[#0057B8] rounded-full mx-auto mb-8" />
            <p className="text-gray-600 leading-relaxed text-base mb-4 max-w-[65ch] mx-auto">
              Empresa venezolana constituida para garantizar la calidad de servicios de inyeccion de vapor para recuperacion de crudo en fosas y pozos petroleros, desarrollo de proyectos de automatizacion, control de procesos, instrumentacion, SCADA y PLC.
            </p>
            <p className="text-gray-500 leading-relaxed text-sm max-w-[65ch] mx-auto">
              Nuestro objetivo es satisfacer y superar las necesidades y expectativas de los clientes mediante un talento humano motivado y la mejora continua. Contamos con tecnicos especialistas que se desplazan con rapidez al terreno para atender emergencias.
            </p>
          </div>
        </div>
      </section>

      {/* Mission — single image+text split (eyebrow allowed, section 4 of 7) */}
      <section className="bg-[#F8FAFC] py-24 lg:py-28" aria-labelledby="mision-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aos-hidden">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={IMG_MISION}
                  alt="Operacion de inyeccion de vapor"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060F1D]/30 to-transparent" />
              </div>
            </div>
            <div className="aos-hidden" style={{ transitionDelay: '0.12s' }}>
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#0057B8] flex items-center justify-center mb-4">
                <Crosshair size={20} />
              </div>
              <span className="section-eyebrow">Mision</span>
              <h2 id="mision-heading" className="section-title mb-6">Nuestra Mision</h2>
              <p className="text-gray-600 leading-relaxed text-sm max-w-[65ch]">
                Prestar un servicio de inyeccion de vapor para la recuperacion de crudo en fosas y pozos petroleros de excelente calidad, para satisfacer y superar las necesidades, requisitos y expectativas de clientes y proveedores. Garantizar el crecimiento y la rentabilidad manteniendo un talento humano efectivo, estimulando el mejoramiento permanente del proceso productivo en condiciones de seguridad e higiene, en armonia con el ambiente y la calidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision — dark background, same layout family but inverted order = different feel */}
      <section className="bg-[#060F1D] py-24 lg:py-28 relative overflow-hidden" aria-labelledby="vision-heading">
        <div className="absolute inset-0 dot-pattern opacity-[0.03]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aos-hidden">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#0057B8] flex items-center justify-center mb-4">
                <Eye size={20} />
              </div>
              <span className="section-eyebrow text-[#5599ff]">Vision</span>
              <h2 id="vision-heading" className="section-title-light mb-6">Nuestra Vision</h2>
              <p className="text-gray-400 leading-relaxed text-sm max-w-[65ch]">
                Posicionarse entre las empresas lideres del sector, buscando cada dia un mayor reconocimiento por su alta capacidad, excelencia operacional, calidad de servicio y responsabilidad.
              </p>
            </div>
            <div className="relative aos-hidden" style={{ transitionDelay: '0.12s' }}>
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={IMG_VISION}
                  alt="Automatizacion y control industrial"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060F1D]/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values — different layout (grid of mini-cards), no image+text split */}
      <section className="bg-white py-24 lg:py-28" aria-labelledby="valores-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14 aos-hidden">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#0057B8] flex items-center justify-center mx-auto mb-4">
                <Compass size={20} />
              </div>
              <span className="section-eyebrow">Valores</span>
              <h2 id="valores-heading" className="section-title">Nuestros Valores</h2>
              <p className="text-gray-500 text-sm mt-4 leading-relaxed max-w-[65ch] mx-auto">
                El valor de respuesta ante emergencias es de suma importancia. Contamos con tecnicos especialistas que se mueven rapido en el terreno para prestar el servicio que requiere el cliente.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {values.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100 aos-hidden">
                  <span className="text-[#0057B8] shrink-0 mt-0.5"><Icon size={18} /></span>
                  <span className="text-sm text-gray-600">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060F1D] via-[#0B1F3A] to-[#1C3D5A]" />
        <div className="absolute inset-0 dot-pattern opacity-[0.04]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0057B8]/5 rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
            Listo para trabajar con nosotros?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto text-sm">
            Contactanos y descubre como podemos llevar tu proyecto petrolero o industrial al siguiente nivel.
          </p>
          <Link to="/contacto" className="btn-primary text-base">
            Contactanos ahora <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}