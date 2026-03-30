'use client'

import { motion } from 'framer-motion'
import { Section, SectionHeader, GlassCard } from '@/components/ui'
import { Globe, Smartphone, Zap, Bot, Palette, Shield, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { BLUR_DATA_URL_DARK } from '@/lib/constants'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description:
      'Custom websites built with Next.js, React & modern tech stacks. Fast, SEO-optimized, and conversion-focused.',
    features: ['Custom Web Apps', 'E-commerce', 'Landing Pages'],
    href: '/services#websites',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&q=75&auto=format&fit=crop',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description:
      'Native and cross-platform apps for iOS and Android. Beautiful interfaces with buttery-smooth performance.',
    features: ['React Native', 'Flutter', 'Native iOS/Android'],
    href: '/services#apps',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=75&auto=format&fit=crop',
  },
  {
    icon: Zap,
    title: 'Automation',
    description:
      'Streamline your business operations. Connect systems, eliminate manual tasks, and scale effortlessly.',
    features: ['Workflow Automation', 'API Integration', 'Data Pipelines'],
    href: '/services#automation',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&q=75&auto=format&fit=crop',
  },
  {
    icon: Bot,
    title: 'AI Agents',
    description:
      'Intelligent AI solutions powered by GPT-4, Claude & cutting-edge LLMs. Custom chatbots and voice assistants.',
    features: ['Custom Chatbots', 'Voice AI', 'AI Analytics'],
    href: '/services#ai-agents',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=75&auto=format&fit=crop',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'User-centered design that captures your brand essence. From wireframes to complete design systems.',
    features: ['Brand Identity', 'Prototypes', 'Design Systems'],
    href: '/services#design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=75&auto=format&fit=crop',
  },
  {
    icon: Shield,
    title: 'Security Audits',
    description:
      'Comprehensive security reviews to protect your digital assets. We think like attackers so you can sleep peacefully.',
    features: ['Pen Testing', 'Code Review', 'Compliance'],
    href: '/services#security',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=75&auto=format&fit=crop',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
}

export function ServicesSection() {
  return (
    <Section id="services">
      <SectionHeader
        label="What We Build"
        title={
          <>
            Crafting <em>Digital Solutions</em>
            <br />
            That Drive Results
          </>
        }
        subtitle="From concept to deployment, we build products that users love and businesses rely on."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full"
      >
        {services.map((service) => (
          <motion.div key={service.title} variants={itemVariants}>
            <Link href={service.href} className="block h-full">
              <GlassCard padding="none" className="h-full flex flex-col gap-4 group cursor-pointer hover:border-[rgba(245,197,24,0.3)] transition-all overflow-hidden">
                {/* Image */}
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL_DARK}
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/50 to-transparent" />
                  {/* Icon overlay */}
                  <div className="absolute bottom-3 left-4 w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[var(--gold)] to-amber-600 text-black shadow-lg shadow-[var(--gold)]/20">
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 pt-2 flex flex-col gap-3 flex-1">
                  <h3 className="font-serif text-xl font-semibold text-[var(--text-dark)] group-hover:text-[var(--gold)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[var(--text-mid)] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center gap-1 text-xs text-[var(--text-muted)]"
                        >
                          <CheckCircle className="w-3 h-3 text-[var(--gold)]" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center gap-2 text-[var(--gold)] text-sm font-medium pt-2 border-t border-[rgba(245,197,24,0.1)]">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </GlassCard>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Tech Stack Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-16 max-w-4xl w-full"
      >
        <GlassCard className="text-center">
          <p className="text-xs text-[var(--gold)] uppercase tracking-widest mb-3">
            Technologies We Use
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-[var(--text-muted)]">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'OpenAI'].map((tech) => (
              <span key={tech} className="text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </GlassCard>
      </motion.div>
    </Section>
  )
}
