import { useState } from 'react'
import { MapPin, Phone, Envelope, PaperPlaneTilt, CheckCircle, WarningCircle, Clock } from '@phosphor-icons/react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { Reveal, EASE } from '../lib/motion'
import PageHero from '../components/PageHero'

const infoCards = [
  {
    icon: MapPin, title: 'Direccion fiscal',
    lines: ['Av. 5, Calle 13, N 26A-162', 'San Francisco, Maracaibo', 'Zulia, Venezuela'],
  },
]

export default function Contacto() {
  const reduce = useReducedMotion()
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'El nombre es requerido.'
    if (!form.email.trim()) e.email = 'El correo es requerido.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Ingresa un correo valido.'
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
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1200)
  }

  const inputBase =
    'w-full rounded-xl border px-4 py-3 text-sm text-ink-900 placeholder:text-steel-400 transition-all duration-200 focus:outline-none focus:ring-2'
  const ok = 'border-steel-200 bg-white focus:ring-brand-blue hover:border-steel-300'
  const bad = 'border-brand-red/40 bg-brand-red/5 focus:ring-brand-red'

  return (
    <>
      <PageHero
        kicker="Estamos para ayudarte"
        title="Hablemos de tu"
        accent="proyecto."
        subtitle="Escribenos sobre tu proyecto petrolero o industrial. Nuestro equipo te respondera a la brevedad."
      />

      <section className="bg-steel-50 py-24 lg:py-28" aria-labelledby="contacto-h">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Info */}
            <Reveal className="lg:col-span-2">
              <h2 id="contacto-h" className="h-section mb-3">Informacion de contacto</h2>
              <p className="mb-8 max-w-sm text-steel-500 leading-relaxed">
                Estamos ubicados en Maracaibo, Venezuela. Contactanos por cualquiera de nuestros canales.
              </p>

              <div className="space-y-3 mb-8">
                {infoCards.map(({ icon: Icon, title, lines }) => (
                  <div key={title} className="flex items-start gap-4 rounded-2xl border border-steel-200 bg-white p-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink-900">{title}</p>
                      <address className="mt-1 not-italic text-sm leading-relaxed text-steel-500">
                        {lines.map((l) => <span key={l} className="block">{l}</span>)}
                      </address>
                    </div>
                  </div>
                ))}

                <div className="flex items-start gap-4 rounded-2xl border border-steel-200 bg-white p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                    <Phone size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">Telefonos</p>
                    <a href="tel:+582613226494" className="mt-1 block text-sm text-steel-500 transition-colors hover:text-brand-blue">Oficina: 0261 322 6494</a>
                    <a href="tel:+584146361373" className="block text-sm text-steel-500 transition-colors hover:text-brand-blue">Movil: +58 414 636 1373</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-steel-200 bg-white p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                    <Clock size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">Soporte tecnico</p>
                    <p className="mt-1 text-sm text-steel-500">Respuesta ante emergencias 24/7</p>
                  </div>
                </div>
              </div>

              <div className="h-48 overflow-hidden rounded-2xl border border-steel-200 shadow-sm">
                <iframe
                  title="Mapa de ubicacion SPS Maracaibo"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.9327657204856!2d-72.2131!3d10.6290!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8999000000001%3A0x0!2sCalle+13+%26+Avenida+5%2C+Maracaibo+4004%2C+Zulia!5e0!3m2!1ses!2sve!4v1620000000000!5m2!1ses!2sve"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={0.1} className="lg:col-span-3">
              <div className="rounded-2xl border border-steel-200 bg-white p-8 shadow-lift md:p-10">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="done"
                      initial={reduce ? false : { opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="py-12 text-center"
                    >
                      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                        <CheckCircle size={32} className="text-emerald-600" weight="fill" />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-ink-900 mb-2">Mensaje enviado</h3>
                      <p className="text-sm text-steel-500">
                        Gracias por contactarnos. Nuestro equipo te respondera a la brevedad.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={false}
                      exit={reduce ? {} : { opacity: 0, y: -8 }}
                    >
                      <div className="mb-8">
                        <h3 className="font-display text-xl font-bold text-ink-900">Envianos un mensaje</h3>
                        <p className="mt-1 text-sm text-steel-400">
                          Campos con <span className="text-brand-red">*</span> son obligatorios
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} noValidate className="space-y-5">
                        <div className="grid gap-5 sm:grid-cols-2">
                          <div>
                            <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink-900">
                              Nombre completo <span className="text-brand-red">*</span>
                            </label>
                            <input id="name" name="name" type="text" autoComplete="name" value={form.name}
                              onChange={handleChange} placeholder="Maria Gutierrez" aria-invalid={!!errors.name}
                              className={`${inputBase} ${errors.name ? bad : ok}`} />
                            {errors.name && <p className="mt-1 flex items-center gap-1 text-xs text-brand-red"><WarningCircle size={12} /> {errors.name}</p>}
                          </div>
                          <div>
                            <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink-900">
                              Correo electronico <span className="text-brand-red">*</span>
                            </label>
                            <input id="email" name="email" type="email" autoComplete="email" value={form.email}
                              onChange={handleChange} placeholder="maria@empresa.com" aria-invalid={!!errors.email}
                              className={`${inputBase} ${errors.email ? bad : ok}`} />
                            {errors.email && <p className="mt-1 flex items-center gap-1 text-xs text-brand-red"><WarningCircle size={12} /> {errors.email}</p>}
                          </div>
                        </div>

                        <div>
                          <label htmlFor="company" className="mb-1.5 block text-sm font-semibold text-ink-900">
                            Empresa <span className="font-normal text-steel-400">(opcional)</span>
                          </label>
                          <input id="company" name="company" type="text" autoComplete="organization" value={form.company}
                            onChange={handleChange} placeholder="Mi Empresa C.A." className={`${inputBase} ${ok}`} />
                        </div>

                        <div>
                          <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink-900">
                            Mensaje <span className="text-brand-red">*</span>
                          </label>
                          <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange}
                            placeholder="Cuentanos sobre tu proyecto o consulta..." aria-invalid={!!errors.message}
                            className={`${inputBase} resize-none ${errors.message ? bad : ok}`} />
                          {errors.message && <p className="mt-1 flex items-center gap-1 text-xs text-brand-red"><WarningCircle size={12} /> {errors.message}</p>}
                        </div>

                        <button type="submit" disabled={loading}
                          className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
                          {loading ? (
                            <>
                              <svg className="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                              </svg>
                              Enviando...
                            </>
                          ) : (
                            <>Enviar mensaje <PaperPlaneTilt size={18} weight="fill" /></>
                          )}
                        </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
