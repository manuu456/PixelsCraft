'use client'

import { cn } from '@/lib/utils'
import { motion, HTMLMotionProps } from 'framer-motion'
import { forwardRef } from 'react'

interface GlassCardProps extends HTMLMotionProps<'div'> {
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
  'data-testid'?: string
}

const paddingMap = {
  none: '',
  sm: 'p-5',
  md: 'p-6 md:p-8',
  lg: 'p-8 md:p-12',
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, hover = true, padding = 'md', children, 'data-testid': testId, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        data-testid={testId}
        className={cn(
          'card-surface',
          paddingMap[padding],
          hover && 'hover:-translate-y-1',
          className
        )}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

GlassCard.displayName = 'GlassCard'
