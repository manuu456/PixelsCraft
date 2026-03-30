import { Metadata } from 'next'
import { Section, SectionHeader, GlassCard, Button } from '@/components/ui'
import { Globe, Smartphone, Zap, Bot, Palette, Shield, ArrowRight } from 'lucide-react'
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
    gradient: 'from-[var(--gold)] to-amber-600',
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
    gradient: 'from-[var(--gold)] to-amber-600',
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
    gradient: 'from-[var(--gold)] to-amber-600',
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
    gradient: 'from-[var(--gold)] to-amber-600',
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
    gradient: 'from-[var(--gold)] to-amber-600',
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
    gradient: 'from-[var(--gold)] to-amber-600',
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
              className="flex flex-col scroll-mt-28 overflow-hidden"
            >
              {/* Image Header */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL_DARK}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/60 to-transparent" />
                <div
                  className={`absolute bottom-4 left-6 w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.gradient} text-black shadow-lg`}
                >
                  <service.icon className="w-7 h-7" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="font-serif text-2xl font-semibold text-[var(--text-dark)] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[var(--text-mid)] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6 flex-1">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-[var(--text-mid)]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center gap-2 text-[var(--gold)] font-medium text-sm hover:gap-3 transition-all"
                >
                  Get a quote for {service.title}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-[var(--text-mid)] mb-6">
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
