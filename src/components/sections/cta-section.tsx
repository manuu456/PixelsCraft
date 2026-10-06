'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Users, Zap, Headphones, ArrowRight, ArrowUpRight } from 'lucide-react'
import { trackSpotlight } from '@/lib/utils'

const features = [
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our seasoned professionals bring years of industry experience to deliver exceptional results for every project.',
    color: 'from-blue-400 to-blue-600',
    glow: 'rgba(59, 130, 246, 0.45)',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'We prioritize efficiency without compromising quality, ensuring your projects launch on time, every time.',
    color: 'from-amber-300 to-amber-500',
    glow: 'rgba(245, 158, 11, 0.45)',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock assistance means you\'re never alone. We\'re here whenever you need us, day or night.',
    color: 'from-emerald-400 to-emerald-600',
    glow: 'rgba(16, 185, 129, 0.45)',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export function CTASection() {
  return (
    <section className="relative py-24 md:py-28 px-4 sm:px-6 overflow-hidden bg-[#0b1120]">
      {/* Night-sky backdrop: aurora glows + hairline grid */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-[10%] w-[36rem] h-[36rem] rounded-full animate-aurora-1" style={{ background: 'radial-gradient(closest-side, rgba(99,102,241,0.35), transparent)' }} />
        <div className="absolute top-1/3 -right-32 w-[32rem] h-[32rem] rounded-full animate-aurora-2" style={{ background: 'radial-gradient(closest-side, rgba(168,85,247,0.28), transparent)' }} />
        <div className="absolute -bottom-48 left-1/3 w-[34rem] h-[34rem] rounded-full animate-aurora-3" style={{ background: 'radial-gradient(closest-side, rgba(14,165,233,0.22), transparent)' }} />
        <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 flex items-center justify-center gap-3">
            <span className="text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.6)]">✦</span>
            Why Choose PixelCraft?
            <span className="text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.6)]">✦</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We combine expertise, speed, and dedication to bring your vision to life
          </p>
        </motion.div>

        {/* Feature Cards — glass on dark */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              onPointerMove={trackSpotlight}
              className="lg-dark spotlight group rounded-[28px] p-7 md:p-8 transition-colors duration-500 hover:bg-white/[0.09]"
            >
              {/* Coloured glow behind the icon */}
              <div
                aria-hidden="true"
                className="absolute -top-10 -left-10 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(closest-side, ${feature.glow}, transparent)` }}
              />

              {/* Icon */}
              <div
                className={`relative w-14 h-14 bg-gradient-to-br ${feature.color} rounded-[16px] flex items-center justify-center mb-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] group-hover:scale-110 transition-transform duration-300`}
                style={{ boxShadow: `inset 0 1px 0 rgba(255,255,255,0.4), 0 10px 28px -8px ${feature.glow}` }}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="relative text-white/65 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing call-to-action band */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg-dark mt-10 md:mt-14 rounded-[32px] p-7 md:p-10 overflow-hidden"
        >
          <div aria-hidden="true" className="absolute -right-20 -top-24 w-72 h-72 rounded-full" style={{ background: 'radial-gradient(closest-side, rgba(129,140,248,0.35), transparent)' }} />
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                Have a project in mind?
              </h3>
              <p className="text-white/60 mt-2 max-w-xl">
                Tell us what you&apos;re building — websites, apps, AI or security — and we&apos;ll get back to you within 24 hours.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link href="/contact" className="btn-glossy group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold">
                Start a Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-white bg-white/10 ring-1 ring-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] hover:bg-white/15 active:scale-[0.97] transition-all"
              >
                See Our Work
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
