import Link from 'next/link'
import { Globe, Smartphone, Zap, Bot, Palette, Shield, ArrowRight } from 'lucide-react'

const services = [
  { icon: Globe, title: 'Website Development', description: 'Custom websites built with modern stacks. Fast, SEO-optimized, and conversion-focused.', href: '/services#websites' },
  { icon: Smartphone, title: 'Mobile Apps', description: 'Native and cross-platform apps for iOS & Android with buttery-smooth performance.', href: '/services#apps' },
  { icon: Zap, title: 'Automation', description: 'Connect systems, eliminate manual tasks, and scale your operations effortlessly.', href: '/services#automation' },
  { icon: Bot, title: 'AI Agents', description: 'Intelligent AI solutions powered by cutting-edge LLMs. Custom chatbots and assistants.', href: '/services#ai-agents' },
  { icon: Palette, title: 'UI/UX Design', description: 'User-centered design that captures your brand essence and delights users.', href: '/services#design' },
  { icon: Shield, title: 'Security Audits', description: 'Comprehensive security reviews to protect your digital assets from threats.', href: '/services#security' },
]

export function ServicesSection() {
  return (
    <section data-testid="services-section" className="px-6 md:px-12 lg:px-20 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">What We Do</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#ededed] mb-4">Our Services</h2>
        <p className="text-base text-[#888] max-w-lg mb-14">End-to-end digital solutions from concept to deployment. We build products that users love.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              data-testid={`service-card-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-black p-8 group hover:bg-[#0a0a0a] transition-colors"
            >
              <service.icon className="w-5 h-5 text-gold mb-5" />
              <h3 className="text-[15px] font-semibold text-[#ededed] mb-2 group-hover:text-gold transition-colors">{service.title}</h3>
              <p className="text-[13px] text-[#888] leading-relaxed mb-4">{service.description}</p>
              <span className="inline-flex items-center gap-1.5 text-xs text-gold font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center" data-testid="tech-stack-banner">
          <p className="text-xs text-[#555] uppercase tracking-[0.15em] mb-5">Technologies We Work With</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'OpenAI'].map((tech) => (
              <span key={tech} className="text-sm text-[#555] font-mono hover:text-[#888] transition-colors">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
