'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionProps {
  id?: string
  className?: string
  children: ReactNode
  centered?: boolean
  'data-testid'?: string
}

export function Section({ id, className, children, centered = true, 'data-testid': testId }: SectionProps) {
  return (
    <motion.section
      id={id}
      data-testid={testId}
      className={cn(
        'relative px-6 md:px-12 lg:px-24 py-24 md:py-32',
        centered && 'flex flex-col items-center',
        className
      )}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.section>
  )
}

interface SectionHeaderProps {
  label: string
  title: ReactNode
  subtitle?: string
  className?: string
  align?: 'center' | 'left'
}

export function SectionHeader({ label, title, subtitle, className, align = 'center' }: SectionHeaderProps) {
  return (
    <div className={cn('mb-16', align === 'center' ? 'text-center' : 'text-left', className)}>
      <p className="section-overline mb-4">{label}</p>
      <h2 className="section-heading text-4xl sm:text-5xl mb-4">{title}</h2>
      {subtitle && (
        <p className="text-base text-[var(--text-secondary)] max-w-xl leading-relaxed mt-3" style={align === 'center' ? { marginInline: 'auto' } : {}}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
