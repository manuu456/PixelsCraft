'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui'
import { ArrowRight } from 'lucide-react'

export function CTASection() {
  return (
    <section data-testid="cta-section" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto card-surface p-12 md:p-20 text-center"
      >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-block px-5 py-2 mb-8 text-xs font-bold tracking-[0.15em] uppercase text-[var(--gold)] bg-[rgba(212,175,55,0.08)] border border-[var(--border-gold)]"
        >
          Let&apos;s Build Together
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[var(--text-primary)] mb-6"
        >
          Ready to bring your
          <br />
          <span className="text-gold-gradient">vision to life?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          We&apos;re a small team that takes on select projects — so when we work with you,
          you get our full attention and passion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-5 justify-center"
        >
          <Button href="/contact" variant="primary" size="lg" data-testid="cta-start-conversation">
            Start a Conversation
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button href="/portfolio" variant="outline" size="lg" data-testid="cta-explore-work">
            Explore Our Work
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
