'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui'
import { ArrowRight } from 'lucide-react'

export function CTASection() {
  return (
    <section data-testid="cta-section" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto glass-card rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[2px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-60" />

        <span className="inline-block px-5 py-2 mb-8 text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--gold)] glass-card rounded-full">
          Let&apos;s Build Together
        </span>

        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[var(--text-primary)] mb-6">
          Ready to bring your
          <br />
          <span className="text-gold-shine">vision to life?</span>
        </h2>

        <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          We&apos;re a small team that takes on select projects — so when we work with you,
          you get our full attention and passion.
        </p>

        <div className="flex flex-wrap gap-5 justify-center">
          <Button href="/contact" variant="primary" size="lg" data-testid="cta-start-conversation">
            Start a Conversation
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button href="/portfolio" variant="outline" size="lg" data-testid="cta-explore-work">
            Explore Our Work
          </Button>
        </div>
      </div>
    </section>
  )
}
