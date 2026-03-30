import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CTASection() {
  return (
    <section data-testid="cta-section" className="px-6 md:px-12 lg:px-20 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">Let&apos;s Work Together</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#ededed] mb-5">
          Ready to bring your vision to life?
        </h2>
        <p className="text-base text-[#888] max-w-md mx-auto leading-relaxed mb-10">
          We take on select projects — when we work with you, you get our full attention and passion.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact" data-testid="cta-start-conversation" className="inline-flex items-center gap-2 bg-gold text-black text-sm font-semibold px-8 py-3.5 rounded-lg hover:bg-gold-light transition-colors">
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/portfolio" data-testid="cta-explore-work" className="inline-flex items-center gap-2 border border-[rgba(255,255,255,0.15)] text-[#ededed] text-sm font-medium px-8 py-3.5 rounded-lg hover:border-gold hover:text-gold transition-colors">
            Explore Our Work
          </Link>
        </div>
      </div>
    </section>
  )
}
