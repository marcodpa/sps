import { useState } from 'react'
import { MapPin, Phone, Envelope, PaperPlaneTilt, CheckCircle, WarningCircle } from '@phosphor-icons/react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const HERO_IMG =
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80'

export default function Contacto() {
  useScrollAnimation()

  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'El nombre es requerido.'
    if (!form.email.trim()) {
      e.email = 'El correo es requerido.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Ingresa un correo válido.'
    }
    if (!form.message.trim()) e.message = 'El mensaje es requerido.'
    return e
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 flex items-center min-h-[55vh] overflow-hidden" aria-label="Contacto">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 hero-gradient opacity-95" />
          <div className="absolute inset-0 dot-pattern opacity-20" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0057B8] animate-pulse" />
            <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Estamos para ayudarte</span>
          </div>
          <h1 className="section-title-light text-5xl lg:text-6xl mb-4">Contáctanos</h1>
          <p className="text-gray-400 text-base max-w-2xl leading-relaxed">
            Escríbenos sobre tu proyecto. Nuestro equipo te responderá a la brevedad posible.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="bg-[#F8FAFC] py-24 lg:py-28" aria-labelledby="contacto-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Contact info */}
            <div className="lg:col-span-2 aos-hidden">
              <span className="section-eyebrow">Información de contacto</span>
              <h2 id="contacto-heading" className="section-title mb-2">Hablemos</h2>
              <p className="text-gray-500 text-sm mb-8 max-w-sm">
                Estamos ubicados en Maracaibo, Venezuela. Contáctanos por cualquiera de nuestros canales.
              </p>

              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-[#0057B8]/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#0057B8]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0B1F3A] text-sm mb-1">Dirección fiscal</p>
                    <address className="not-italic text-gray-500 text-sm leading-relaxed">
                      Av. 5, Calle 13, Nº 26A-162<br />
                      San Francisco, Maracaibo<br />
                      Zulia, Venezuela
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-[#0057B8]/10 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[#0057B8]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0B1F3A] text-sm mb-1">Teléfonos</p>
                    <a href="tel:+582613226494" className="block text-gray-500 text-sm hover:text-[#0057B8] transition-colors">
                      Oficina: 0261 322 6494
                    </a>
                    <a href="tel:+584146361373" className="block text-gray-500 text-sm hover:text-[#0057B8] transition-colors">
                      Móvil: +58 414 636 1373
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-[#0057B8]/10 flex items-center justify-center shrink-0">
                    <Envelope size={18} className="text-[#0057B8]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0B1F3A] text-sm mb-1">Correo electrónico</p>
                    <span className="text-gray-500 text-sm">Usa el formulario de contacto</span>
                  </div>
                </div>
              </div>

              {/* Mini map */}
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-44">
                <iframe
                  title="Mapa de ubicación SPSOIL Maracaibo"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.9327657204856!2d-72.2131!3d10.6290!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8999000000001%3A0x0!2sCalle+13+%26+Avenida+5%2C+Maracaibo+4004%2C+Zulia!5e0!3m2!1ses!2sve!4v1620000000000!5m2!1ses!2sve"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3 aos-hidden" style={{ transitionDelay: '0.12s' }}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-black/5 p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle size={32} className="text-emerald-600" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[#0B1F3A] mb-2">Mensaje enviado</h3>
                    <p className="text-gray-500 text-sm">
                      Gracias por contactarnos. Nuestro equipo te responderá a la brevedad.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h3 className="font-display text-xl font-bold text-[#0B1F3A]">Envíanos un mensaje</h3>
                      <p className="text-gray-400 text-sm mt-1">
                        Campos marcados con <span className="text-red-400">*</span> son obligatorios
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">
                            Nombre completo <span className="text-red-400">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Juan Pérez"
                            aria-invalid={!!errors.name}
                            className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 focus:outline-none focus:ring-2 ${
                              errors.name
                                ? 'border-red-300 bg-red-50 focus:ring-red-400'
                                : 'border-gray-200 bg-white focus:ring-[#0057B8] hover:border-gray-300'
                            }`}
                          />
                          {errors.name && (
                            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                              <WarningCircle size={11} /> {errors.name}
                            </p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">
                            Correo electrónico <span className="text-red-400">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="juan@empresa.com"
                            aria-invalid={!!errors.email}
                            className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 focus:outline-none focus:ring-2 ${
                              errors.email
                                ? 'border-red-300 bg-red-50 focus:ring-red-400'
                                : 'border-gray-200 bg-white focus:ring-[#0057B8] hover:border-gray-300'
                            }`}
                          />
                          {errors.email && (
                            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                              <WarningCircle size={11} /> {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">
                          Empresa <span className="text-gray-300 font-normal">(opcional)</span>
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          autoComplete="organization"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Mi Empresa C.A."
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0057B8] hover:border-gray-300 transition-all duration-200"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">
                          Mensaje <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Cuéntanos sobre tu proyecto o consulta..."
                          aria-invalid={!!errors.message}
                          className={`w-full px-4 py-3 rounded-xl border text-sm resize-none transition-all duration-200 focus:outline-none focus:ring-2 ${
                            errors.message
                              ? 'border-red-300 bg-red-50 focus:ring-red-400'
                              : 'border-gray-200 bg-white focus:ring-[#0057B8] hover:border-gray-300'
                          }`}
                        />
                        {errors.message && (
                          <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                            <WarningCircle size={11} /> {errors.message}
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full btn-primary justify-center text-base py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                            </svg>
                            Enviando...
                          </>
                        ) : (
                          <>
                            Enviar mensaje <PaperPlaneTilt size={18} />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}