import { motion, useReducedMotion } from 'motion/react'

export const EASE = [0.16, 1, 0.3, 1]

/**
 * Reveal — fades + slides content in as it enters the viewport.
 * Honors prefers-reduced-motion (renders static).
 */
export function Reveal({
  children,
  delay = 0,
  y = 26,
  className = '',
  as = 'div',
  amount = 0.25,
  once = true,
}) {
  const reduce = useReducedMotion()
  const Comp = motion[as] || motion.div
  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </Comp>
  )
}

/**
 * Stagger — parent that orchestrates staggered children.
 * Pair with <StaggerItem>.
 */
export function Stagger({
  children,
  className = '',
  gap = 0.08,
  amount = 0.2,
  once = true,
  as = 'div',
}) {
  const Comp = motion[as] || motion.div
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap } },
      }}
    >
      {children}
    </Comp>
  )
}

export function StaggerItem({ children, className = '', y = 24, as = 'div' }) {
  const reduce = useReducedMotion()
  const Comp = motion[as] || motion.div
  return (
    <Comp
      className={className}
      variants={{
        hidden: reduce ? {} : { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
      }}
    >
      {children}
    </Comp>
  )
}
