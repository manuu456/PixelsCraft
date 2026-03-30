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
        'relative px-6 md:px-12 py-20 md:py-28',
        fullHeight && 'min-h-screen',
        centered && 'flex flex-col justify-center items-center',
        className
      )}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
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
    <div className={cn('text-center mb-12 md:mb-16', className)}>
      <p className="section-label">{label}</p>
      <h2 className="section-title text-3xl md:text-4xl lg:text-5xl">{title}</h2>
      {subtitle && (
        <p className="text-base text-[var(--text-mid)] max-w-xl mx-auto leading-relaxed mt-4">
          {subtitle}
        </p>
      )}
    </div>
  )
}
