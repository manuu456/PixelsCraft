'use client'

import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
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
  ({ className, hover = true, padding = 'md', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'glass-card rounded-2xl',
          paddingMap[padding],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

GlassCard.displayName = 'GlassCard'
