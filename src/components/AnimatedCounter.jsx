import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring, useReducedMotion } from 'motion/react'

/**
 * AnimatedCounter — counts up to a target when scrolled into view.
 * Supports a numeric `value` plus optional `prefix`/`suffix` (e.g. "+", "%").
 * Non-numeric values (like "1.500") fall back gracefully.
 */
export default function AnimatedCounter({ value, prefix = '', suffix = '', className = '' }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const inView = useInView(ref, { once: true, amount: 0.6 })

  // Parse a number out of strings like "7+", "100%", "1.500", "5"
  const cleaned = String(value).replace(/[^\d.,]/g, '')
  const isThousand = cleaned.includes('.') && !cleaned.includes(',')
  const target = parseFloat(cleaned.replace(/\./g, isThousand ? '' : '.').replace(',', '.')) || 0
  const trailingSuffix = suffix || (String(value).match(/[^\d.,]+$/)?.[0] ?? '')

  const mv = useMotionValue(0)
  const spring = useSpring(mv, { stiffness: 70, damping: 18 })

  useEffect(() => {
    if (inView && !reduce) mv.set(target)
  }, [inView, reduce, target, mv])

  useEffect(() => {
    if (reduce) return
    return spring.on('change', (latest) => {
      if (!ref.current) return
      const display = isThousand
        ? Math.round(latest).toLocaleString('es-VE')
        : Number.isInteger(target)
        ? Math.round(latest).toString()
        : latest.toFixed(1)
      ref.current.textContent = `${prefix}${display}${trailingSuffix}`
    })
  }, [spring, reduce, isThousand, target, prefix, trailingSuffix])

  return (
    <span ref={ref} className={className}>
      {reduce ? value : `${prefix}0${trailingSuffix}`}
    </span>
  )
}
