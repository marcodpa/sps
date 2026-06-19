import { useState, useEffect } from 'react'
import { useReducedMotion } from '../lib/animations'
import { EASE } from '../lib/motion'

/**
 * PageHero — consistent engineered hero band for inner pages.
 * Dark ink, blueprint texture, scan line, kicker + title + subtitle.
 */
export default function PageHero({ kicker, title, accent, subtitle, children }) {
  const reduce = useReducedMotion()
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  const show = mounted || reduce

  return (
    <section className="relative overflow-hidden bg-ink-950 pt-32 pb-20 lg:pt-40 lg:pb-24">
      <div className="absolute inset-0 bp-grid bp-grid-fade opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 top-16 h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent animate-scanline" />
      <div className="pointer-events-none absolute -right-32 top-0 h-[26rem] w-[26rem] rounded-full bg-brand-blue/10 blur-[140px]" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="max-w-3xl"
          style={{
            opacity: show ? 1 : 0,
            transform: show ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)`,
          }}
        >
          {kicker && (
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-brand-blueLight">
              {kicker}
            </p>
          )}
          <h1 className="font-display font-bold text-white tracking-tightest leading-[1.02]"
            style={{ fontSize: 'clamp(2.4rem, 1.4rem + 4vw, 4rem)' }}>
            {title} {accent && <span className="text-brand-blueLight">{accent}</span>}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-steel-300">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}