'use client'

import { motion } from 'framer-motion'
import { Section, SectionHeader, GlassCard } from '@/components/ui'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'
import { BLUR_DATA_URL_DARK } from '@/lib/constants'

const testimonials = [
  {
    quote:
      'PixelCraft transformed our outdated portal into a work of art. Every screen feels intentional, beautiful, and buttery-smooth.',
    name: 'Ananya Krishnamurthy',
    role: 'Founder, BloomRetail',
    location: 'Bengaluru',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=75&auto=format&fit=crop',
  },
  {
    quote:
      'Their security engineer found three critical vulnerabilities before our launch. Saved us from disaster.',
    name: 'Rohit Venkataraman',
    role: 'CTO, FinSecure',
    location: 'Hyderabad',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=75&auto=format&fit=crop',
  },
  {
    quote:
      "The AI integration they built for us is genuinely magical. Our users can't believe something so powerful feels so effortless.",
    name: 'Priya Subramaniam',
    role: 'Product Lead, TechNova',
    location: 'Chennai',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=75&auto=format&fit=crop',
  },
  {
    quote:
      "Delivered ahead of schedule with zero compromises on quality. Their attention to detail is unlike anything I've seen.",
    name: 'Vikram Narasimhan',
    role: 'CEO, Krishi Digital',
    location: 'Pune',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=75&auto=format&fit=crop',
  },
  {
    quote:
      "PixelCraft doesn't just build apps — they craft experiences your users will fall in love with.",
    name: 'Divya Raghunathan',
    role: 'Design Director, Craftle',
    location: 'Mumbai',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=75&auto=format&fit=crop',
  },
  {
    quote:
      'From the first call to final delivery, it felt like they understood our brand better than we did.',
    name: 'Siddharth Iyer',
    role: 'Founder, SwiftKart',
    location: 'Coimbatore',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=75&auto=format&fit=crop',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
}

export function TestimonialsSection() {
  return (
    <Section id="testimonials">
      <SectionHeader
        label="Client Love"
        title={
          <>
            What Our <em>Clients</em> Say
          </>
        }
        subtitle="Real words from real people who trusted us with their vision."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div key={index} variants={itemVariants}>
            <GlassCard className="h-full flex flex-col relative">
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[var(--gold)]/20" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[var(--text-mid)] leading-relaxed flex-1 mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Reviewer */}
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-[var(--gold)]/30">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    sizes="48px"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL_DARK}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-sm text-[var(--text-dark)]">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[var(--text-muted)]">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-[var(--gold)]">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>

      {/* Trust Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12"
      >
        {['Google', 'Microsoft', 'Amazon', 'Stripe', 'Vercel'].map((company) => (
          <div
            key={company}
            className="text-[var(--text-muted)]/50 font-medium text-lg tracking-wide"
          >
            {company}
          </div>
        ))}
      </motion.div>
    </Section>
  )
}
