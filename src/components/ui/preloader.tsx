'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PreloaderProps {
  onComplete?: () => void
}

function alreadyShownThisSession() {
  try {
    return sessionStorage.getItem('preloaderShown') === 'true'
  } catch {
    return false
  }
}

export function Preloader({ onComplete }: PreloaderProps) {
  // Starts false on both server and client so hydration matches; repeat visits are hidden
  // before paint by the inline script in the root layout (html[data-preloader-shown]).
  const [hasShown, setHasShown] = useState(false)

  const [percentage, setPercentage] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    // Skip animation if already shown
    if (hasShown) return
    if (alreadyShownThisSession()) {
      setHasShown(true)
      return
    }

    const duration = 1000 // 1 second
    const intervalTime = 25 // Update every 25ms for smooth animation
    const increment = 100 / (duration / intervalTime)

    const interval = setInterval(() => {
      setPercentage((prev) => {
        const next = prev + increment
        if (next >= 100) {
          clearInterval(interval)
          return 100
        }
        return next
      })
    }, intervalTime)

    return () => clearInterval(interval)
  }, [hasShown])

  useEffect(() => {
    // Skip if already shown
    if (hasShown) return

    if (percentage >= 100) {
      // Small delay before starting exit animation
      const timeout = setTimeout(() => {
        setIsComplete(true)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [percentage, hasShown])

  // Early return if already shown
  if (hasShown) return null

  const handleExitComplete = () => {
    // Also flag <html> so returning to Home via client-side navigation never flashes it again
    document.documentElement.setAttribute('data-preloader-shown', '')
    try {
      sessionStorage.setItem('preloaderShown', 'true')
    } catch {
      // storage unavailable (private mode) — preloader simply shows again next time
    }
    setShouldRender(false)
    onComplete?.()
  }

  if (!shouldRender) return null

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {!isComplete && (
        <motion.div
          data-preloader
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#f6f6f2] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -20,
          }}
          transition={{ 
            duration: 0.5, 
            ease: 'easeInOut' 
          }}
        >
          {/* Aurora behind the glass card */}
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[10%] left-[15%] w-[28rem] h-[28rem] rounded-full animate-aurora-1" style={{ background: 'radial-gradient(closest-side, rgba(129,140,248,0.45), transparent)' }} />
            <div className="absolute bottom-[5%] right-[10%] w-[26rem] h-[26rem] rounded-full animate-aurora-2" style={{ background: 'radial-gradient(closest-side, rgba(192,132,252,0.35), transparent)' }} />
            <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full animate-aurora-3" style={{ background: 'radial-gradient(closest-side, rgba(56,189,248,0.25), transparent)' }} />
          </div>

          <div className="lg-panel relative flex flex-col items-center gap-6 rounded-[36px] px-12 py-10">
            {/* PixelCraft Logo - Stylized "P" */}
            <motion.div
              className="relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className="relative flex h-20 w-20 items-center justify-center">
                {/* Animated background glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-indigo-500/20"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                {/* Logo container */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30">
                  {/* Stylized "P" icon */}
                  <svg
                    viewBox="0 0 32 32"
                    className="h-10 w-10 text-white"
                    fill="currentColor"
                  >
                    <path d="M8 6h10a6 6 0 0 1 0 12h-6v8H8V6zm4 8h6a2 2 0 1 0 0-4h-6v4z" />
                    {/* Pixel accent */}
                    <rect x="22" y="20" width="4" height="4" rx="0.5" />
                    <rect x="26" y="24" width="2" height="2" rx="0.25" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Brand name */}
            <motion.div
              className="text-xl font-semibold tracking-wide text-gray-800"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              PixelCraft
            </motion.div>

            {/* Percentage counter */}
            <motion.div
              className="flex items-baseline gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <motion.span
                className="text-5xl font-bold tabular-nums text-brand-gradient"
                key={Math.floor(percentage)}
              >
                {Math.floor(percentage)}
              </motion.span>
              <span className="text-2xl font-medium text-indigo-400">%</span>
            </motion.div>

            {/* Progress bar */}
            <div className="h-1.5 w-48 overflow-hidden rounded-full bg-slate-900/[0.07]">
              <motion.div
                className="h-full rounded-full bg-linear-to-r from-indigo-500 via-violet-500 to-sky-400"
                initial={{ width: '0%' }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 0.1, ease: 'linear' }}
              />
            </div>

            {/* Loading text */}
            <motion.p
              className="text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              Crafting your experience...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
