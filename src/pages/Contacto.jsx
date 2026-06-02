import { useState } from 'react'
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'
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
    // Simulate submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 flex items-center min-h-[60vh]" aria-label="Contacto">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={HERO_IMG}
            alt="Equipo de trabajo SPSOIL"
            className="w-full h-full object-cover"
            loading="eager"
            width="1920"
            height="800"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/90 via-[#0B1F3A]/80 to-[#1C3D5A]/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-eyebrow">Estamos para ayudarte</span>
          <h1 className="section-title-light mb-4">Contáctanos</h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Escríbenos sobre tu proyecto. Nuestro equipo te responderá a la brevedad posible.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="bg-[#F4F6F8] py-24" aria-labelledby="contacto-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 aos-hidden">
              <span className="section-eyebrow">Información de contacto</span>
              <h2 id="contacto-heading" className="section-title mb-4">
                Hablemos
              </h2>
              <div className="accent-line mb-8" />

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-[#0B1F3A] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#E8842B] transition-colors duration-200">
                    <MapPin size={20} className="text-[#E8842B] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0B1F3A] text-sm mb-1">Dirección fiscal</p>
                    <address className="not-italic text-gray-600 text-sm leading-relaxed">
                      Av. 5, Calle 13, Nº 26A-162<br />
                      San Francisco, Maracaibo<br />
                      Zulia, Venezuela
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-[#0B1F3A] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#E8842B] transition-colors duration-200">
                    <Phone size={20} className="text-[#E8842B] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0B1F3A] text-sm mb-1">Teléfonos</p>
                    <a
                      href="tel:+582613226494"
                      className="block text-gray-600 text-sm hover:text-[#E8842B] transition-colors focus:outline-none focus:text-[#E8842B]"
                    >
                      Oficina: 0261 322 6494
                    </a>
                    <a
                      href="tel:+584146361373"
                      className="block text-gray-600 text-sm hover:text-[#E8842B] transition-colors focus:outline-none focus:text-[#E8842B]"
                    >
                      Móvil: +58 414 636 1373
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-[#0B1F3A] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#E8842B] transition-colors duration-200">
                    <Mail size={20} className="text-[#E8842B] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0B1F3A] text-sm mb-1">Correo electrónico</p>
                    <span className="text-gray-600 text-sm">
                      Usa el formulario de contacto
                    </span>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-52">
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

            {/* Form */}
            <div className="lg:col-span-3 aos-hidden" style={{ transitionDelay: '0.15s' }}>
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-green-600" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[#0B1F3A] mb-2">
                      ¡Mensaje enviado!
                    </h3>
                    <p className="text-gray-500">
                      Gracias por contactarnos. Nuestro equipo te responderá a la brevedad.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="font-display text-2xl font-bold text-[#0B1F3A] mb-2">
                      Envíanos un mensaje
                    </h3>
                    <p className="text-gray-500 text-sm mb-8">
                      Todos los campos marcados con <span className="text-red-500">*</span> son obligatorios.
                    </p>

                    <form onSubmit={handleSubmit} noValidate className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-[#0B1F3A] mb-2"
                          >
                            Nombre completo <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Juan Pérez"
                            aria-describedby={errors.name ? 'name-error' : undefined}
                            aria-invalid={!!errors.name}
                            className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#E8842B] ${
                              errors.name
                                ? 'border-red-400 bg-red-50'
                                : 'border-gray-200 bg-gray-50 focus:border-[#E8842B]'
                            }`}
                          />
                          {errors.name && (
                            <p id="name-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                              <AlertCircle size={12} /> {errors.name}
                            </p>
                          )}
                        </div>

                        {/* Email */}
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-[#0B1F3A] mb-2"
                          >
                            Correo electrónico <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="juan@empresa.com"
                            aria-describedby={errors.email ? 'email-error' : undefined}
                            aria-invalid={!!errors.email}
                            className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#E8842B] ${
                              errors.email
                                ? 'border-red-400 bg-red-50'
                                : 'border-gray-200 bg-gray-50 focus:border-[#E8842B]'
                            }`}
                          />
                          {errors.email && (
                            <p id="email-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                              <AlertCircle size={12} /> {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Company */}
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-semibold text-[#0B1F3A] mb-2"
                        >
                          Empresa (opcional)
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          autoComplete="organization"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Mi Empresa C.A."
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8842B] focus:border-[#E8842B] transition-colors"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-semibold text-[#0B1F3A] mb-2"
                        >
                          Mensaje <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Cuéntanos sobre tu proyecto o consulta..."
                          aria-describedby={errors.message ? 'message-error' : undefined}
                          aria-invalid={!!errors.message}
                          className={`w-full px-4 py-3 rounded-xl border text-sm resize-none transition-colors focus:outline-none focus:ring-2 focus:ring-[#E8842B] ${
                            errors.message
                              ? 'border-red-400 bg-red-50'
                              : 'border-gray-200 bg-gray-50 focus:border-[#E8842B]'
                          }`}
                        />
                        {errors.message && (
                          <p id="message-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.message}
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full btn-primary justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
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
                            Enviar mensaje <Send size={18} />
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
