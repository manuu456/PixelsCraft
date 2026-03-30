import { Metadata } from 'next'
import { Globe, Smartphone, Zap, Bot, Palette, Shield, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services — PixelCraft',
  description: 'Web development, mobile apps, automation, AI agents, UI/UX design, and security audits.',
}

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Custom websites built with modern tech stacks like Next.js, React, and Vue. From stunning landing pages to complex e-commerce platforms.',
    features: ['Custom Web Applications', 'E-commerce Solutions', 'Landing Pages & Marketing Sites', 'Progressive Web Apps', 'CMS Integration', 'Performance Optimization'],
    slug: 'websites',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android. Beautiful interfaces, smooth performance.',
    features: ['React Native Development', 'Flutter Applications', 'iOS Native (Swift)', 'Android Native (Kotlin)', 'App Store Optimization', 'Push Notifications & Analytics'],
    slug: 'apps',
  },
  {
    icon: Zap,
    title: 'Automation Solutions',
    description: 'Streamline your business operations with custom automation. Connect your tools, eliminate repetitive tasks.',
    features: ['Workflow Automation', 'API Integrations', 'Data Pipeline Automation', 'Custom Scripts & Tools', 'Zapier/Make Alternatives', 'Business Process Optimization'],
    slug: 'automation',
  },
  {
    icon: Bot,
    title: 'AI Agents & Chatbots',
    description: 'Intelligent AI solutions powered by cutting-edge language models. From support bots to voice assistants.',
    features: ['Custom GPT Integrations', 'Customer Support Chatbots', 'Voice AI Assistants', 'AI-Powered Analytics', 'Document Processing AI', 'Conversational Interfaces'],
    slug: 'ai-agents',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design that captures your brand essence and delights your users.',
    features: ['User Research & Analysis', 'Wireframes & Prototypes', 'Visual Design & Branding', 'Design Systems', 'Usability Testing', 'Design Handoff'],
    slug: 'design',
  },
  {
    icon: Shield,
    title: 'Security Audits',
    description: 'Comprehensive security reviews to protect your digital assets. We think like attackers.',
    features: ['Penetration Testing', 'Code Security Reviews', 'Vulnerability Assessments', 'Security Architecture Review', 'Compliance Consulting', 'Incident Response Planning'],
    slug: 'security',
  },
]

export default function ServicesPage() {
  return (
    <div data-testid="services-page" className="pt-28 pb-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">Our Services</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#ededed] mb-5">
            Everything you need to build & scale
          </h1>
          <p className="text-base text-[#888] leading-relaxed">
            End-to-end digital solutions tailored to your unique needs. From design to deployment and beyond.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-6">
          {services.map((service) => (
            <div
              key={service.slug}
              id={service.slug}
              data-testid={`service-detail-${service.slug}`}
              className="scroll-mt-24 border border-[rgba(255,255,255,0.06)] rounded-xl p-8 hover:border-[rgba(255,255,255,0.1)] transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <service.icon className="w-5 h-5 text-gold" />
                    <h2 className="text-xl font-semibold text-[#ededed]">{service.title}</h2>
                  </div>
                  <p className="text-sm text-[#888] leading-relaxed mb-6 max-w-lg">{service.description}</p>
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    data-testid={`service-quote-${service.slug}`}
                    className="inline-flex items-center gap-2 text-gold text-sm font-semibold hover:gap-3 transition-all"
                  >
                    Get a quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2.5 lg:w-[380px] flex-shrink-0">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-[#888]">
                      <span className="w-1 h-1 bg-gold rounded-full flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-[#888] mb-5">Not sure which service you need?</p>
          <Link href="/contact" data-testid="services-consult-cta" className="inline-flex items-center gap-2 bg-gold text-black text-sm font-semibold px-7 py-3 rounded-lg hover:bg-gold-light transition-colors">
            Get a Free Consultation
          </Link>
        </div>
      </div>
    </div>
  )
}
