/**
 * Re-export from framer-motion.
 * This file exists to work around Rolldown's handling of deep
 * re-export chains from motion/react → framer-motion.
 */
export {
  motion,
  m,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useInView,
  useReducedMotion,
  useMotionValueEvent,
} from 'framer-motion'