import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'PixelCraft transformed our outdated portal into a work of art. Every screen feels intentional and buttery-smooth.',
    name: 'Ananya Krishnamurthy',
    role: 'Founder, BloomRetail',
  },
  {
    quote: 'Their security engineer found three critical vulnerabilities before our launch. Saved us from disaster.',
    name: 'Rohit Venkataraman',
    role: 'CTO, FinSecure',
  },
  {
    quote: "The AI integration they built is genuinely magical. Our users can't believe something so powerful feels so effortless.",
    name: 'Priya Subramaniam',
    role: 'Product Lead, TechNova',
  },
]

export function TestimonialsSection() {
  return (
    <section data-testid="testimonials-section" className="px-6 md:px-12 lg:px-20 py-24 border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-6xl mx-auto">
        <p className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">Testimonials</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#ededed] mb-14">What Our Clients Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} data-testid={`testimonial-card-${i}`} className="flex flex-col">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="text-[15px] text-[#ccc] leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div>
                <p className="text-sm font-semibold text-[#ededed]">{t.name}</p>
                <p className="text-xs text-[#888] mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
