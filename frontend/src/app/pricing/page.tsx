import { Metadata } from 'next'
import { Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing — PixelCraft',
  description: 'Transparent pricing for web development, mobile apps, AI agents, and automation.',
}

const plans = [
  {
    name: 'Starter',
    price: '49,999',
    currency: 'INR',
    description: 'Perfect for small businesses needing a professional web presence.',
    features: ['Single-page or 5-page Website', 'Responsive Design', 'Basic SEO Setup', 'Contact Form Integration', 'Social Media Links', '2 Rounds of Revisions', '30 Days Support'],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '1,49,999',
    currency: 'INR',
    description: 'For growing businesses that need a powerful digital platform.',
    features: ['Multi-page Web Application', 'Custom UI/UX Design', 'Advanced SEO & Analytics', 'CMS Integration', 'API Development', 'Mobile Responsive', 'Performance Optimization', '5 Rounds of Revisions', '90 Days Support'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    currency: '',
    description: 'For organizations requiring full-scale digital transformation.',
    features: ['Full-stack Application Suite', 'Mobile App (iOS + Android)', 'AI Agent / Chatbot Integration', 'Automation Workflows', 'Security Audit & Hardening', 'Dedicated Project Manager', 'Priority Support (SLA)', 'Unlimited Revisions', '12 Months Support'],
    highlighted: false,
  },
]

export default function PricingPage() {
  return (
    <div data-testid="pricing-page" className="pt-28 pb-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">Pricing</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#ededed] mb-5">
            Transparent, fair pricing
          </h1>
          <p className="text-base text-[#888] max-w-md mx-auto leading-relaxed">
            Choose the plan that fits your needs. Every project includes our obsessive attention to quality.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              data-testid={`pricing-plan-${plan.name.toLowerCase()}`}
              className={`border rounded-xl p-7 flex flex-col ${
                plan.highlighted
                  ? 'border-gold bg-[#0a0a0a]'
                  : 'border-[rgba(255,255,255,0.06)]'
              }`}
            >
              {plan.highlighted && (
                <p className="text-[10px] text-gold font-bold uppercase tracking-[0.2em] mb-4">Most Popular</p>
              )}
              <p className="text-xs text-[#888] uppercase tracking-[0.15em] font-semibold mb-3">{plan.name}</p>
              <div className="flex items-baseline gap-1 mb-3">
                {plan.currency && <span className="text-sm text-[#555]">{plan.currency}</span>}
                <span className="text-3xl font-bold text-[#ededed]">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-sm text-[#555]">/project</span>}
              </div>
              <p className="text-sm text-[#888] leading-relaxed mb-8">{plan.description}</p>
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[#888]">
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />{f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                data-testid={`pricing-cta-${plan.name.toLowerCase()}`}
                className={`w-full text-center text-sm font-semibold py-3 rounded-lg transition-colors ${
                  plan.highlighted
                    ? 'bg-gold text-black hover:bg-gold-light'
                    : 'border border-[rgba(255,255,255,0.15)] text-[#ededed] hover:border-gold hover:text-gold'
                }`}
              >
                {plan.highlighted ? 'Get Started' : plan.price === 'Custom' ? 'Contact Us' : 'Get Started'}
                {' '}<ArrowRight className="w-4 h-4 inline" />
              </Link>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-16 border border-[rgba(255,255,255,0.06)] rounded-xl p-8 text-center" data-testid="pricing-note">
          <h3 className="text-lg font-semibold text-[#ededed] mb-2">Every project is unique</h3>
          <p className="text-sm text-[#888] leading-relaxed mb-5">These are starting prices. Final cost depends on complexity, timeline, and specific requirements.</p>
          <Link href="/contact" data-testid="pricing-custom-cta" className="inline-flex items-center gap-2 border border-[rgba(255,255,255,0.15)] text-[#ededed] text-sm font-medium px-7 py-3 rounded-lg hover:border-gold hover:text-gold transition-colors">
            Discuss Your Project
          </Link>
        </div>
      </div>
    </div>
  )
}
