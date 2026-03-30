'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui'
import { ChevronDown, Star } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-28 pb-20 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 justify-center mb-6"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] uppercase text-[var(--gold)] bg-[rgba(245,197,24,0.1)] backdrop-blur-sm border border-[rgba(245,197,24,0.2)] rounded-full">
            Trusted by 50+ Clients
          </span>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" />
            ))}
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-serif font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-[var(--text-dark)] mb-6"
        >
          We Build
          <br />
          <span className="text-[var(--gold)]">Digital Products</span>
          <br />
          That Shine
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl text-[var(--text-mid)] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          From stunning websites to powerful mobile apps, intelligent AI agents,
          and seamless automations — we transform your ideas into pixel-perfect reality.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <Button href="/portfolio" variant="primary">
            View Our Work
          </Button>
          <Button href="/contact" variant="glass">
            Start a Project
          </Button>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex gap-8 justify-center"
        >
          {[
            { value: '50+', label: 'Projects' },
            { value: '30+', label: 'Clients' },
            { value: '4+', label: 'Years' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl md:text-4xl font-bold text-[var(--gold)]">
                {stat.value}
              </p>
              <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--gold)]"
      >
        <span className="text-xs font-medium tracking-[0.12em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[var(--gold)]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[var(--gold)]/3 rounded-full blur-[120px] pointer-events-none" />
    </section>
  )
}
