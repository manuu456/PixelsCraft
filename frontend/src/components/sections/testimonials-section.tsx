'use client'

import { Section, SectionHeader, GlassCard } from '@/components/ui'
import { Star } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    quote: 'PixelCraft transformed our outdated portal into a work of art. Every screen feels intentional, beautiful, and buttery-smooth.',
    name: 'Ananya Krishnamurthy',
    role: 'Founder, BloomRetail',
    location: 'Bengaluru',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=75&auto=format&fit=crop',
  },
  {
    quote: 'Their security engineer found three critical vulnerabilities before our launch. Saved us from disaster.',
    name: 'Rohit Venkataraman',
    role: 'CTO, FinSecure',
    location: 'Hyderabad',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=75&auto=format&fit=crop',
  },
  {
    quote: "The AI integration they built for us is genuinely magical. Our users can't believe something so powerful feels so effortless.",
    name: 'Priya Subramaniam',
    role: 'Product Lead, TechNova',
    location: 'Chennai',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=75&auto=format&fit=crop',
  },
]

export function TestimonialsSection() {
  return (
    <Section id="testimonials" data-testid="testimonials-section">
      <SectionHeader
        label="Client Love"
        title={<>What Our Clients Say</>}
        subtitle="Real words from real people who trusted us with their vision."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1100px] w-full">
        {testimonials.map((t, i) => (
          <GlassCard key={i} className="h-full flex flex-col rounded-2xl" data-testid={`testimonial-card-${i}`}>
            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-[var(--gold-light)] text-[var(--gold-light)] drop-shadow-[0_0_3px_rgba(255,215,0,0.4)]" />
              ))}
            </div>
            <blockquote className="text-[var(--text-secondary)] leading-relaxed flex-1 mb-8 text-sm">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4 pt-5 border-t border-[var(--glass-border)]">
              <div className="relative w-11 h-11 overflow-hidden rounded-full ring-2 ring-[var(--gold)]/20">
                <Image src={t.avatar} alt={t.name} fill sizes="44px" className="object-cover" />
              </div>
              <div>
                <p className="font-medium text-sm text-[var(--text-primary)]">{t.name}</p>
                <p className="text-xs text-[var(--text-muted)]">{t.role}</p>
                <p className="text-xs text-[var(--gold)]">{t.location}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  )
}
