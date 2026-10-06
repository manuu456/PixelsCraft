'use client'

import { cn, trackSpotlight } from '@/lib/utils'
import { motion, HTMLMotionProps } from 'framer-motion'
import { forwardRef } from 'react'

interface GlassCardProps extends HTMLMotionProps<'div'> {
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
  variant?: 'default' | 'elevated'
}

const paddingClasses = {
  none: '',
  sm: 'p-5',
  md: 'p-6 md:p-8',
  lg: 'p-8 md:p-12',
}

// v2: real frosted "liquid glass" surface with a light rim and a cursor-following spotlight
export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, hover = true, padding = 'md', variant = 'default', children, onPointerMove, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          'lg-panel overflow-hidden rounded-[28px]',
          hover && 'spotlight transition-shadow duration-500 ease-expo-out hover:[box-shadow:var(--lg-shadow-hover)]',
          paddingClasses[padding],
          variant === 'elevated' && 'lg-strong',
          className
        )}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={hover ? { y: -6, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } } : undefined}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        onPointerMove={(e) => {
          if (hover) trackSpotlight(e)
          onPointerMove?.(e)
        }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

GlassCard.displayName = 'GlassCard'
