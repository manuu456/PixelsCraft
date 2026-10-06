'use client'

import { MotionConfig } from 'framer-motion'
import { ReactNode } from 'react'

// Honour the OS "Reduce Motion" setting (iOS / macOS / Windows) for every framer-motion animation
export function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
