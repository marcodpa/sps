import { Link } from 'react-router-dom'
import { Target, Eye, Zap, ArrowRight, CheckCircle } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const HERO_IMG =
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80'

const IMG_MISION =
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=80'

const IMG_VISION =
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80'

const IMG_VALOR =
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80'

const values = [
  'Calidad e innovación continua',
  'Seguridad e higiene industrial',
  'Armonía con el ambiente',
  'Talento humano motivado',
  'Respuesta rápida ante emergencias',
  'Coordinación con empresas aliadas',
]

export default function Nosotros() {
  useScrollAnimation()

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 flex items-center min-h-[60vh]" aria-label="Nosotros">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={HERO_IMG}
            alt="Instalaciones industriales SPSOIL"
            className="w-full h-full object-cover"
            loading="eager"
            width="1920"
            height="800"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/90 via-[#0B1F3A]/80 to-[#1C3D5A]/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-eyebrow">La empresa</span>
          <h1 className="section-title-light mb-4">Quiénes Somos</h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Conoce nuestra misión, visión y los valores que guían cada uno de nuestros proyectos petroleros e industriales.
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center aos-hidden">
            <span className="section-eyebrow">Sobre SPSOIL</span>
            <h2 className="section-title mb-6">Service Petroleum and Supply C.A.</h2>
            <div className="accent-line mx-auto mb-8" />
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Empresa venezolana constituida para garantizar la calidad de servicios de inyección de vapor para recuperación de crudo en fosas y pozos petroleros, desarrollo de proyectos de automatización, control de procesos, instrumentación, SCADA y PLC.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nuestro objetivo es satisfacer y superar las necesidades y expectativas de los clientes mediante un talento humano motivado y la mejora continua. Contamos con técnicos especialistas que se desplazan con rapidez al terreno para atender emergencias.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#F4F6F8] py-24" aria-labelledby="mision-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-80 aos-hidden">
              <img
                src={IMG_MISION}
                alt="Operación de inyección de vapor en campo"
                className="w-full h-full object-cover"
                loading="lazy"
                width="900"
                height="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/40 to-transparent" />
            </div>
            <div className="aos-hidden" style={{ transitionDelay: '0.15s' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#E8842B] rounded-xl flex items-center justify-center">
                  <Target size={20} className="text-white" />
                </div>
                <span className="section-eyebrow mb-0">Misión</span>
              </div>
              <h2 id="mision-heading" className="section-title mb-4">
                Nuestra Misión
              </h2>
              <div className="accent-line mb-6" />
              <p className="text-gray-600 leading-relaxed text-base">
                Prestar un servicio de inyección de vapor para la recuperación de crudo en fosas y pozos petroleros de excelente calidad, para satisfacer y superar las necesidades, requisitos y expectativas de clientes y proveedores. Garantizar el crecimiento y la rentabilidad manteniendo un talento humano efectivo, estimulando el mejoramiento permanente del proceso productivo en condiciones de seguridad e higiene, en armonía con el ambiente y la calidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-[#0B1F3A] py-24" aria-labelledby="vision-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 aos-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#E8842B] rounded-xl flex items-center justify-center">
                  <Eye size={20} className="text-white" />
                </div>
                <span className="section-eyebrow mb-0">Visión</span>
              </div>
              <h2 id="vision-heading" className="section-title-light mb-4">
                Nuestra Visión
              </h2>
              <div className="accent-line mb-6" />
              <p className="text-gray-300 leading-relaxed text-base">
                Posicionarse entre las empresas líderes del sector, buscando cada día un mayor reconocimiento por su alta capacidad, excelencia operacional, calidad de servicio y responsabilidad.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-80 order-1 lg:order-2 aos-hidden" style={{ transitionDelay: '0.15s' }}>
              <img
                src={IMG_VISION}
                alt="Automatización y control industrial"
                className="w-full h-full object-cover"
                loading="lazy"
                width="900"
                height="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Value */}
      <section className="bg-white py-24" aria-labelledby="valor-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-80 aos-hidden">
              <img
                src={IMG_VALOR}
                alt="Equipo de técnicos especialistas SPSOIL"
                className="w-full h-full object-cover"
                loading="lazy"
                width="900"
                height="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/40 to-transparent" />
            </div>
            <div className="aos-hidden" style={{ transitionDelay: '0.15s' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#E8842B] rounded-xl flex items-center justify-center">
                  <Zap size={20} className="text-white" />
                </div>
                <span className="section-eyebrow mb-0">Valor diferencial</span>
              </div>
              <h2 id="valor-heading" className="section-title mb-4">
                Nuestro Valor
              </h2>
              <div className="accent-line mb-6" />
              <p className="text-gray-600 leading-relaxed mb-8">
                El valor de respuesta ante emergencias es de suma importancia. Contamos con técnicos especialistas que se mueven rápido en el terreno para prestar el servicio que requiere el cliente. Con el crecimiento de la empresa también ha crecido la coordinación con empresas aliadas, en beneficio de los clientes, mediante intercambio de conocimientos técnicos y un servicio cada vez mejor.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {values.map((v) => (
                  <li key={v} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-[#E8842B] shrink-0 mt-0.5" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E8842B] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            ¿Listo para trabajar con nosotros?
          </h2>
          <p className="text-orange-100 mb-8 max-w-xl mx-auto">
            Contáctanos y descubre cómo podemos llevar tu proyecto petrolero o industrial al siguiente nivel.
          </p>
          <Link to="/contacto" className="inline-flex items-center gap-2 bg-white text-[#E8842B] hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition-colors text-base">
            Contáctanos ahora <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
