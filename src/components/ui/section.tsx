'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionProps {
  id?: string
  className?: string
  children: ReactNode
  fullHeight?: boolean
  centered?: boolean
}

export function Section({
  id,
  className,
  children,
  fullHeight = true,
  centered = true
}: SectionProps) {
  return (
    <motion.section
      id={id}
      className={cn(
        'relative px-6 md:px-12 lg:px-16 py-24 md:py-32',
        fullHeight && 'min-h-screen',
        centered && 'flex flex-col justify-center items-center',
        className
      )}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
}

export function SectionHeader({ label, title, subtitle, className }: SectionHeaderProps) {
  return (
    <motion.div 
      className={cn('text-center mb-16 md:mb-20 max-w-3xl mx-auto', className)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="section-label">{label}</span>
      <h2 className="section-title text-display-md">{title}</h2>
      {subtitle && (
        <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed mt-6">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
