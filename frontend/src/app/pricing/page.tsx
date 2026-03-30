import { Metadata } from 'next'
import { SectionHeader, GlassCard, Button } from '@/components/ui'
import { Check, ArrowRight } from 'lucide-react'

export const metadata: Metadata = { title: 'Pricing — PixelCraft', description: 'Transparent pricing for web development, mobile apps, AI agents, and automation.' }

const plans = [
  { name: 'Starter', price: '49,999', currency: 'INR', description: 'Perfect for small businesses and startups needing a professional web presence.', features: ['Single-page or 5-page Website', 'Responsive Design', 'Basic SEO Setup', 'Contact Form Integration', 'Social Media Links', '2 Rounds of Revisions', '30 Days Support'], cta: 'Get Started', highlighted: false },
  { name: 'Professional', price: '1,49,999', currency: 'INR', description: 'For growing businesses that need a powerful digital platform with custom features.', features: ['Multi-page Web Application', 'Custom UI/UX Design', 'Advanced SEO & Analytics', 'CMS Integration', 'API Development', 'Mobile Responsive', 'Performance Optimization', '5 Rounds of Revisions', '90 Days Support'], cta: 'Most Popular', highlighted: true },
  { name: 'Enterprise', price: 'Custom', currency: '', description: 'For organizations requiring full-scale digital transformation and ongoing partnership.', features: ['Full-stack Application Suite', 'Mobile App (iOS + Android)', 'AI Agent / Chatbot Integration', 'Automation Workflows', 'Security Audit & Hardening', 'Dedicated Project Manager', 'Priority Support (SLA)', 'Unlimited Revisions', '12 Months Support'], cta: 'Contact Us', highlighted: false },
]

export default function PricingPage() {
  return (
    <div data-testid="pricing-page">
      {/* Hero */}
      <div className="page-hero px-6 md:px-12 lg:px-24 flex flex-col items-center text-center">
        <div className="absolute inset-0 z-0">
          <img src="https://static.prod-images.emergentagent.com/jobs/c9e6853e-20f6-47e3-abf0-1943be61c72a/images/9ddef4ace9635fc74fc602f6c400b90db9d02a22d351dadafbf1105cf675775d.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--void)]/20 via-[var(--void)]/60 to-[var(--void)]" />
        </div>
        <div className="relative z-10">
          <SectionHeader label="Pricing" title={<>Transparent, Fair Pricing</>} subtitle="Choose the plan that fits your needs. Every project includes our obsessive attention to quality and detail." />
        </div>
      </div>

      <section className="px-6 md:px-12 lg:px-24 pb-28 -mt-4">
        <div className="max-w-[1040px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {plans.map((plan) => (
              <GlassCard key={plan.name} padding="none" className={`flex flex-col overflow-hidden rounded-2xl relative ${plan.highlighted ? 'ring-1 ring-[var(--gold)]/50 shadow-[0_0_50px_rgba(212,175,55,0.1)]' : ''}`} data-testid={`pricing-plan-${plan.name.toLowerCase()}`}>
                {plan.highlighted && (
                  <div className="bg-gradient-to-r from-[var(--gold)] via-[var(--gold-light)] to-[var(--gold)] text-[var(--void)] text-center py-2.5 text-[10px] font-bold uppercase tracking-[0.25em]">Most Popular</div>
                )}
                <div className="p-7 flex flex-col flex-1">
                  <p className="section-overline mb-3">{plan.name}</p>
                  <div className="flex items-baseline gap-1 mb-3">
                    {plan.currency && <span className="text-sm text-[var(--text-muted)]">{plan.currency}</span>}
                    <span className="font-heading text-4xl font-bold text-[var(--text-primary)]">{plan.price}</span>
                    {plan.price !== 'Custom' && <span className="text-sm text-[var(--text-muted)]">/project</span>}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-8">{plan.description}</p>
                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                        <Check className="w-4 h-4 text-[var(--gold)] flex-shrink-0 mt-0.5 drop-shadow-[0_0_4px_rgba(212,175,55,0.4)]" />{f}
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact" variant={plan.highlighted ? 'primary' : 'outline'} className="w-full justify-center rounded-xl" data-testid={`pricing-cta-${plan.name.toLowerCase()}`}>{plan.cta} <ArrowRight className="w-4 h-4 ml-2" /></Button>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="mt-20">
            <GlassCard className="text-center rounded-2xl" data-testid="pricing-note">
              <p className="section-overline mb-3">Custom Requirements?</p>
              <h3 className="font-heading text-2xl font-semibold text-[var(--text-primary)] mb-3">Every project is unique</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">These are starting prices. The final cost depends on complexity, timeline, and specific requirements.</p>
              <Button href="/contact" variant="outline" data-testid="pricing-custom-cta">Discuss Your Project</Button>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  )
}
