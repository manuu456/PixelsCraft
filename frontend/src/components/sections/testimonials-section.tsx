'use client'

import { SectionHeader, GlassCard } from '@/components/ui'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  { quote: 'PixelCraft transformed our outdated portal into a work of art. Every screen feels intentional, beautiful, and buttery-smooth.', name: 'Ananya Krishnamurthy', role: 'Founder, BloomRetail', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=75&auto=format&fit=crop' },
  { quote: 'Their security engineer found three critical vulnerabilities before our launch. Saved us from disaster.', name: 'Rohit Venkataraman', role: 'CTO, FinSecure', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=75&auto=format&fit=crop' },
  { quote: "The AI integration they built for us is genuinely magical. Our users can't believe something so powerful feels so effortless.", name: 'Priya Subramaniam', role: 'Product Lead, TechNova', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=75&auto=format&fit=crop' },
]

export function TestimonialsSection() {
  return (
    <section data-testid="testimonials-section" className="relative px-6 md:px-12 lg:px-24 py-28 section-glow">
      <div className="gold-divider mb-28 max-w-4xl mx-auto" />
      <div className="max-w-[1140px] mx-auto flex flex-col items-center">
        <SectionHeader label="Client Love" title={<>What Our Clients Say</>} subtitle="Real words from real people who trusted us with their vision." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {testimonials.map((t, i) => (
            <GlassCard key={i} className="h-full flex flex-col rounded-2xl relative" data-testid={`testimonial-card-${i}`}>
              <Quote className="w-8 h-8 text-[var(--gold)]/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-[var(--gold-light)] text-[var(--gold-light)] drop-shadow-[0_0_4px_rgba(255,215,0,0.5)]" />)}
              </div>
              <blockquote className="text-[var(--text-secondary)] leading-relaxed flex-1 mb-8 text-[15px] italic">&ldquo;{t.quote}&rdquo;</blockquote>
              <div className="flex items-center gap-4 pt-5 border-t border-[var(--border-subtle)]">
                <div className="relative w-12 h-12 overflow-hidden rounded-full ring-2 ring-[var(--gold)]/30">
                  <Image src={t.avatar} alt={t.name} fill sizes="48px" className="object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-[var(--text-primary)]">{t.name}</p>
                  <p className="text-xs text-[var(--gold)]">{t.role}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
