import { Metadata } from 'next'
import { Section, SectionHeader, GlassCard, Button } from '@/components/ui'
import { Globe, Smartphone, Zap, Bot, Palette, Shield, ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { BLUR_DATA_URL_DARK } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Services — PixelCraft',
  description:
    'Web development, mobile apps, automation, AI agents, UI/UX design, and security audits. Explore our comprehensive digital services.',
}

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description:
      'Custom websites built with modern tech stacks like Next.js, React, and Vue. From stunning landing pages to complex e-commerce platforms and web applications.',
    features: [
      'Custom Web Applications',
      'E-commerce Solutions',
      'Landing Pages & Marketing Sites',
      'Progressive Web Apps (PWAs)',
      'CMS Integration (WordPress, Sanity, Strapi)',
      'Performance Optimization',
    ],
    gradient: 'from-indigo-500 to-violet-600',
    slug: 'websites',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=75&auto=format&fit=crop',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile applications for iOS and Android. Beautiful interfaces, smooth performance, and delightful user experiences.',
    features: [
      'React Native Development',
      'Flutter Applications',
      'iOS Native (Swift)',
      'Android Native (Kotlin)',
      'App Store Optimization',
      'Push Notifications & Analytics',
    ],
    gradient: 'from-indigo-500 to-violet-600',
    slug: 'apps',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=75&auto=format&fit=crop',
  },
  {
    icon: Zap,
    title: 'Automation Solutions',
    description:
      'Streamline your business operations with custom automation. Connect your tools, eliminate repetitive tasks, and scale your processes effortlessly.',
    features: [
      'Workflow Automation',
      'API Integrations',
      'Data Pipeline Automation',
      'Custom Scripts & Tools',
      'Zapier/Make Alternatives',
      'Business Process Optimization',
    ],
    gradient: 'from-indigo-500 to-violet-600',
    slug: 'automation',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&q=75&auto=format&fit=crop',
  },
  {
    icon: Bot,
    title: 'AI Agents & Chatbots',
    description:
      'Intelligent AI solutions powered by cutting-edge language models. From customer support bots to voice assistants and custom AI applications.',
    features: [
      'Custom GPT Integrations',
      'Customer Support Chatbots',
      'Voice AI Assistants',
      'AI-Powered Analytics',
      'Document Processing AI',
      'Conversational Interfaces',
    ],
    gradient: 'from-indigo-500 to-violet-600',
    slug: 'ai-agents',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=75&auto=format&fit=crop',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'User-centered design that captures your brand essence and delights your users. From research to high-fidelity prototypes and complete design systems.',
    features: [
      'User Research & Analysis',
      'Wireframes & Prototypes',
      'Visual Design & Branding',
      'Design Systems',
      'Usability Testing',
      'Design Handoff',
    ],
    gradient: 'from-indigo-500 to-violet-600',
    slug: 'design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=75&auto=format&fit=crop',
  },
  {
    icon: Shield,
    title: 'Security Audits',
    description:
      'Comprehensive security reviews to protect your digital assets. We think like attackers so you can sleep peacefully knowing your systems are secure.',
    features: [
      'Penetration Testing',
      'Code Security Reviews',
      'Vulnerability Assessments',
      'Security Architecture Review',
      'Compliance Consulting',
      'Incident Response Planning',
    ],
    gradient: 'from-indigo-500 to-violet-600',
    slug: 'security',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=75&auto=format&fit=crop',
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-28">
      <Section>
        <SectionHeader
          label="Our Services"
          title={
            <>
              Everything You Need to
              <br />
              <em>Build & Scale</em>
            </>
          }
          subtitle="From concept to deployment and beyond, we provide end-to-end digital solutions tailored to your unique needs."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl w-full">
          {services.map((service) => (
            <GlassCard
              key={service.slug}
              id={service.slug}
              padding="none"
              className="flex flex-col scroll-mt-28 p-2"
            >
              {/* Image Header */}
              <div className="relative h-44 overflow-hidden rounded-[22px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL_DARK}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                <div
                  className={`absolute bottom-4 left-4 w-14 h-14 rounded-[16px] flex items-center justify-center bg-gradient-to-br ${service.gradient} text-white ring-1 ring-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_10px_24px_-8px_rgba(79,70,229,0.7)]`}
                >
                  <service.icon className="w-7 h-7" />
                </div>
              </div>

              {/* Content */}
              <div className="relative p-5 md:p-6 flex-1 flex flex-col">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="font-serif text-[1.65rem] font-semibold tracking-tight text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 content-start gap-x-4 gap-y-2.5 mb-6 flex-1">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-slate-700"
                    >
                      <span className="mt-0.5 w-4 h-4 rounded-full bg-indigo-500/10 ring-1 ring-indigo-500/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-indigo-600" strokeWidth={3} />
                      </span>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="group/cta self-start inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-indigo-700 bg-white/80 ring-1 ring-indigo-100 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_6px_16px_-8px_rgba(79,70,229,0.35)] hover:bg-indigo-600 hover:text-white hover:ring-indigo-600 active:scale-[0.97] transition-all"
                >
                  Get a quote for {service.title}
                  <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="lg-chip px-5 py-2 text-[var(--text-mid)] mb-6">
            Not sure which service you need? Let&apos;s discuss your project.
          </p>
          <Button href="/contact" variant="primary">
            Get a Free Consultation
          </Button>
        </div>
      </Section>
    </div>
  )
}
