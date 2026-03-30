'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section data-testid="hero-section" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto w-full pt-24">
        <p data-testid="hero-badge" className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-6">
          Websites &middot; Apps &middot; AI Agents &middot; Automation
        </p>

        <h1 data-testid="hero-heading" className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-[#ededed] mb-6">
          We build digital<br />
          products that<br />
          <span className="text-gold">actually work.</span>
        </h1>

        <p data-testid="hero-subtitle" className="text-base sm:text-lg text-[#888] max-w-lg leading-relaxed mb-10">
          From stunning websites to powerful mobile apps, intelligent AI agents, and seamless automations — we turn ideas into pixel-perfect products.
        </p>

        <div className="flex flex-wrap gap-4 mb-24">
          <Link href="/portfolio" data-testid="hero-cta-portfolio" className="inline-flex items-center gap-2 bg-gold text-black text-sm font-semibold px-7 py-3 rounded-lg hover:bg-gold-light transition-colors">
            View Our Work <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/contact" data-testid="hero-cta-contact" className="inline-flex items-center gap-2 border border-[rgba(255,255,255,0.15)] text-[#ededed] text-sm font-medium px-7 py-3 rounded-lg hover:border-gold hover:text-gold transition-colors">
            Start a Project
          </Link>
        </div>

        <div data-testid="hero-stats" className="flex gap-12 sm:gap-16 border-t border-[rgba(255,255,255,0.06)] pt-8">
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '30+', label: 'Happy Clients' },
            { value: '4+', label: 'Years Experience' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl sm:text-3xl font-bold text-[#ededed]">{stat.value}</p>
              <p className="text-xs text-[#555] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
