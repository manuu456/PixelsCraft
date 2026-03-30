import { Metadata } from 'next'
import { Section, SectionHeader, GlassCard, Button } from '@/components/ui'
import { Globe, Smartphone, Zap, Bot, Palette, Shield, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Services — PixelCraft',
  description: 'Web development, mobile apps, automation, AI agents, UI/UX design, and security audits by PixelCraft.',
}

const services = [
  { icon: Globe, title: 'Website Development', description: 'Custom websites built with modern tech stacks like Next.js, React, and Vue. From stunning landing pages to complex e-commerce platforms.', features: ['Custom Web Applications', 'E-commerce Solutions', 'Landing Pages & Marketing Sites', 'Progressive Web Apps (PWAs)', 'CMS Integration', 'Performance Optimization'], slug: 'websites', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=75&auto=format&fit=crop' },
  { icon: Smartphone, title: 'Mobile App Development', description: 'Native and cross-platform mobile applications for iOS and Android. Beautiful interfaces, smooth performance.', features: ['React Native Development', 'Flutter Applications', 'iOS Native (Swift)', 'Android Native (Kotlin)', 'App Store Optimization', 'Push Notifications & Analytics'], slug: 'apps', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=75&auto=format&fit=crop' },
  { icon: Zap, title: 'Automation Solutions', description: 'Streamline your business operations with custom automation. Connect your tools, eliminate repetitive tasks.', features: ['Workflow Automation', 'API Integrations', 'Data Pipeline Automation', 'Custom Scripts & Tools', 'Zapier/Make Alternatives', 'Business Process Optimization'], slug: 'automation', image: 'https://images.pexels.com/photos/30232780/pexels-photo-30232780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
  { icon: Bot, title: 'AI Agents & Chatbots', description: 'Intelligent AI solutions powered by cutting-edge language models. From support bots to voice assistants.', features: ['Custom GPT Integrations', 'Customer Support Chatbots', 'Voice AI Assistants', 'AI-Powered Analytics', 'Document Processing AI', 'Conversational Interfaces'], slug: 'ai-agents', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=75&auto=format&fit=crop' },
  { icon: Palette, title: 'UI/UX Design', description: 'User-centered design that captures your brand essence and delights your users.', features: ['User Research & Analysis', 'Wireframes & Prototypes', 'Visual Design & Branding', 'Design Systems', 'Usability Testing', 'Design Handoff'], slug: 'design', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=75&auto=format&fit=crop' },
  { icon: Shield, title: 'Security Audits', description: 'Comprehensive security reviews to protect your digital assets. We think like attackers.', features: ['Penetration Testing', 'Code Security Reviews', 'Vulnerability Assessments', 'Security Architecture Review', 'Compliance Consulting', 'Incident Response Planning'], slug: 'security', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=75&auto=format&fit=crop' },
]

export default function ServicesPage() {
  return (
    <div className="pt-[72px]" data-testid="services-page">
      <Section>
        <SectionHeader
          label="Our Services"
          title={<>Everything You Need to<br />Build &amp; Scale</>}
          subtitle="End-to-end digital solutions tailored to your unique needs."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-[1100px] w-full">
          {services.map((service) => (
            <GlassCard
              key={service.slug}
              id={service.slug}
              padding="none"
              className="flex flex-col scroll-mt-28 overflow-hidden rounded-2xl"
              data-testid={`service-detail-${service.slug}`}
            >
              <div className="relative h-40 overflow-hidden flex-shrink-0">
                <Image src={service.image} alt={service.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.95)] via-[rgba(10,10,10,0.5)] to-transparent" />
                <div className="absolute bottom-4 left-6 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold)] text-[var(--void)] rounded-xl shadow-[0_4px_15px_rgba(212,175,55,0.3)]">
                  <service.icon className="w-6 h-6" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl font-semibold text-[var(--text-primary)] mb-2">{service.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">{service.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <span className="w-1.5 h-1.5 bg-[var(--gold)] rounded-full flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
                <Link href={`/contact?service=${encodeURIComponent(service.title)}`} className="inline-flex items-center gap-2 text-[var(--gold)] font-medium text-sm hover:gap-3 transition-all" data-testid={`service-quote-${service.slug}`}>
                  Get a quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-[var(--text-secondary)] mb-6">Not sure which service you need?</p>
          <Button href="/contact" variant="primary" data-testid="services-consult-cta">Get a Free Consultation</Button>
        </div>
      </Section>
    </div>
  )
}
