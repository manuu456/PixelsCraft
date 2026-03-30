'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui'
import { ArrowRight, Star } from 'lucide-react'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section data-testid="hero-section" className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 pt-24 pb-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://static.prod-images.emergentagent.com/jobs/c9e6853e-20f6-47e3-abf0-1943be61c72a/images/20a7ee0b05902ebf421af5599b786d28358a31da42009f6ce06ef01c413a7703.png"
          alt=""
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/60 to-[#050505]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 justify-center mb-8"
          data-testid="hero-badge"
        >
          <span className="inline-block px-5 py-2 text-xs font-bold tracking-[0.15em] uppercase text-[var(--gold)] bg-[rgba(212,175,55,0.08)] border border-[var(--border-gold)]">
            Trusted by 50+ Clients
          </span>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[var(--gold)] text-[var(--gold)]" />
            ))}
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter leading-[1.05] text-[var(--text-primary)] mb-8"
          data-testid="hero-heading"
        >
          We Build
          <br />
          <span className="text-gold-gradient">Digital Products</span>
          <br />
          That Shine
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed mb-12"
          data-testid="hero-subtitle"
        >
          From stunning websites to powerful mobile apps, intelligent AI agents,
          and seamless automations — we transform ideas into pixel-perfect reality.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap gap-5 justify-center mb-16"
        >
          <Button href="/portfolio" variant="primary" data-testid="hero-cta-portfolio">
            View Our Work
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button href="/contact" variant="outline" data-testid="hero-cta-contact">
            Start a Project
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex gap-12 md:gap-16 justify-center"
          data-testid="hero-stats"
        >
          {[
            { value: '50+', label: 'Projects' },
            { value: '30+', label: 'Clients' },
            { value: '4+', label: 'Years' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-3xl md:text-4xl font-bold text-[var(--gold)]">
                {stat.value}
              </p>
              <p className="text-xs text-[var(--text-muted)] uppercase tracking-[0.15em] mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
