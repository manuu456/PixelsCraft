'use client'

import { Section, SectionHeader, GlassCard } from '@/components/ui'
import { Globe, Smartphone, Zap, Bot, Palette, Shield, ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  { icon: Globe, title: 'Website Development', description: 'Custom websites built with Next.js, React & modern stacks. Fast, SEO-optimized, and conversion-focused.', features: ['Custom Web Apps', 'E-commerce', 'Landing Pages'], href: '/services#websites', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&q=75&auto=format&fit=crop' },
  { icon: Smartphone, title: 'Mobile Apps', description: 'Native and cross-platform apps for iOS & Android. Beautiful interfaces with buttery-smooth performance.', features: ['React Native', 'Flutter', 'Native iOS/Android'], href: '/services#apps', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=75&auto=format&fit=crop' },
  { icon: Zap, title: 'Automation', description: 'Streamline operations. Connect systems, eliminate manual tasks, and scale effortlessly.', features: ['Workflow Automation', 'API Integration', 'Data Pipelines'], href: '/services#automation', image: 'https://images.pexels.com/photos/30232780/pexels-photo-30232780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
  { icon: Bot, title: 'AI Agents', description: 'Intelligent AI solutions powered by cutting-edge LLMs. Custom chatbots and voice assistants.', features: ['Custom Chatbots', 'Voice AI', 'AI Analytics'], href: '/services#ai-agents', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=75&auto=format&fit=crop' },
  { icon: Palette, title: 'UI/UX Design', description: 'User-centered design that captures your brand essence. Wireframes to complete design systems.', features: ['Brand Identity', 'Prototypes', 'Design Systems'], href: '/services#design', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=75&auto=format&fit=crop' },
  { icon: Shield, title: 'Security Audits', description: 'Comprehensive security reviews to protect your digital assets. We think like attackers.', features: ['Pen Testing', 'Code Review', 'Compliance'], href: '/services#security', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=75&auto=format&fit=crop' },
]

export function ServicesSection() {
  return (
    <section data-testid="services-section" className="relative px-6 md:px-12 lg:px-24 py-28 section-glow">
      <div className="gold-divider mb-28 max-w-4xl mx-auto" />
      <div className="max-w-[1140px] mx-auto">
        <SectionHeader label="Our Expertise" title={<>Crafting Digital Solutions<br />That Drive Results</>} subtitle="From concept to deployment, we build products that users love and businesses rely on." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <Link key={service.title} href={service.href} data-testid={`service-card-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <GlassCard padding="none" className="h-[400px] flex flex-col group cursor-pointer overflow-hidden rounded-2xl">
                <div className="relative h-[150px] overflow-hidden flex-shrink-0">
                  <Image src={service.image} alt={service.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/50 to-transparent" />
                  <div className="absolute bottom-3 left-4 w-11 h-11 flex items-center justify-center bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold)] text-[var(--void)] rounded-xl shadow-[0_4px_20px_rgba(212,175,55,0.4)]">
                    <service.icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-heading text-[1.05rem] font-semibold text-[var(--text-primary)] group-hover:text-gold-gradient transition-colors mb-2">{service.title}</h3>
                  <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed mb-auto line-clamp-2">{service.description}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5 my-3">
                    {service.features.map((f) => (
                      <span key={f} className="inline-flex items-center gap-1.5 text-[11px] text-[var(--text-muted)]"><Check className="w-3 h-3 text-[var(--gold)]" />{f}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-[var(--gold)] text-[13px] font-semibold pt-3 border-t border-[var(--border-subtle)]">
                    Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>

        <div className="mt-16" data-testid="tech-stack-banner">
          <div className="glass-card rounded-2xl p-8 text-center">
            <p className="section-overline mb-5">Technologies We Use</p>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'OpenAI'].map((tech) => (
                <span key={tech} className="text-sm font-medium font-mono text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors cursor-default">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
