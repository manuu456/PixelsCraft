'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

// Thin gradient reading-progress line at the very top of the viewport
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 220, damping: 40, restDelta: 0.001 })

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[70] bg-linear-to-r from-indigo-500 via-violet-500 to-sky-400"
    />
  )
}
