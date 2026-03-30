'use client'

import { Button } from '@/components/ui'
import { ArrowRight } from 'lucide-react'

export function CTASection() {
  return (
    <section data-testid="cta-section" className="relative py-28 px-6 md:px-12 lg:px-24">
      <div className="gold-divider mb-28 max-w-4xl mx-auto" />
      <div className="max-w-4xl mx-auto">
        <div className="glass-card rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          {/* Decorative gold line top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[2px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
          {/* Ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[var(--gold)]/[0.04] blur-[80px] rounded-full" />

          <span className="gold-badge mb-8 inline-flex">Let&apos;s Build Together</span>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[var(--text-primary)] mb-6 relative">
            Ready to bring your<br /><span className="text-gold-shine">vision to life?</span>
          </h2>

          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            We&apos;re a small team that takes on select projects — so when we work with you, you get our full attention and passion.
          </p>

          <div className="flex flex-wrap gap-5 justify-center">
            <Button href="/contact" variant="primary" size="lg" data-testid="cta-start-conversation">Start a Conversation <ArrowRight className="w-4 h-4 ml-2" /></Button>
            <Button href="/portfolio" variant="outline" size="lg" data-testid="cta-explore-work">Explore Our Work</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
