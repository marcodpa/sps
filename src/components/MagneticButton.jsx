import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'

const MotionLink = motion.create(Link)

/**
 * MagneticButton — subtle pull toward the cursor (motion values, no state).
 * Renders as a router <Link> when `to` is set, otherwise an <a>.
 */
export default function MagneticButton({ to, href, className = '', children, strength = 0.32, ...rest }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18 })
  const sy = useSpring(y, { stiffness: 220, damping: 18 })

  const onMove = (e) => {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  const common = {
    ref,
    onMouseMove: onMove,
    onMouseLeave: reset,
    style: { x: sx, y: sy },
    className,
    ...rest,
  }

  if (to) return <MotionLink to={to} {...common}>{children}</MotionLink>
  return <motion.a href={href} {...common}>{children}</motion.a>
}
