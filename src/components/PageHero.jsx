import FieldImage from './FieldImage'

export default function PageHero({ kicker, title, accent, subtitle, image, children }) {
  return (
    <section className="relative min-h-dvh overflow-hidden bg-ink-950 text-white">
      {image && (
        <FieldImage
          src={image}
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/92 via-ink-950/72 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
      <div className="absolute inset-0 bp-grid opacity-30" />

      {/* Flex container que empuja contenido al fondo-izquierda */}
      <div className="absolute inset-0 flex flex-col">
        {/* Espacio superior para header fijo */}
        <div className="min-h-20 lg:min-h-28" />
        <div className="flex-1" />
        <div className="mx-auto w-full max-w-[1400px] px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
          <div className="max-w-4xl">
            {kicker && (
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-blueLight">
                {kicker}
              </p>
            )}
            <h1
              className="max-w-[21.5rem] break-words font-display font-bold leading-[0.98] tracking-tight text-white [overflow-wrap:anywhere] sm:max-w-4xl sm:leading-[0.95]"
              style={{ fontSize: 'clamp(2rem, 5.2vw, 4rem)', textWrap: 'wrap' }}
            >
              {title} {accent && <span className="text-brand-blueLight">{accent}</span>}
            </h1>
            {subtitle && (
              <p className="mt-6 max-w-[21.5rem] text-sm leading-relaxed text-steel-100 sm:max-w-2xl sm:text-sm">
                {subtitle}
              </p>
            )}
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}