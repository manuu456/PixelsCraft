'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui'

export function CTASection() {
  return (
    <section className="relative py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto glass p-12 md:p-16 text-center"
      >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-[0.2em] uppercase text-bloom bg-bloom/10 border border-bloom/25 rounded-full"
        >
          Let&apos;s Build Together
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-dark)] mb-6"
        >
          Ready to bring your
          <br />
          <em className="text-bloom">vision to life?</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-[var(--text-mid)] text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          We&apos;re a small team that takes on select projects — so when we work with you,
          you get our full attention and passion. Let&apos;s create something extraordinary.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button href="/contact" variant="primary" size="lg">
            Start a Conversation
          </Button>
          <Button href="/portfolio" variant="glass" size="lg">
            Explore Our Work
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
