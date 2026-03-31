'use client'

import { motion } from 'framer-motion'
import { Users, Zap, Headphones } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our seasoned professionals bring years of industry experience to deliver exceptional results for every project.',
    color: 'bg-blue-500',
    pattern: 'radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'We prioritize efficiency without compromising quality, ensuring your projects launch on time, every time.',
    color: 'bg-amber-500',
    pattern: 'radial-gradient(circle at 20% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock assistance means you\'re never alone. We\'re here whenever you need us, day or night.',
    color: 'bg-emerald-500',
    pattern: 'radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
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
    <section className="relative py-24 px-6 bg-[#1e293b] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <span className="text-amber-400">✦</span>
            Why Choose PixelCraft?
            <span className="text-amber-400">✦</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We combine expertise, speed, and dedication to bring your vision to life
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundImage: feature.pattern }}
            >
              {/* Decorative corner pattern */}
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-tr-2xl">
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-gray-100 to-transparent rounded-full opacity-50" />
              </div>

              {/* Icon */}
              <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom decorative line */}
              <div className={`absolute bottom-0 left-8 right-8 h-1 ${feature.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
