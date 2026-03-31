'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { BLUR_DATA_URL_DARK } from '@/lib/constants'

type CategoryId = 'all' | 'security' | 'healthcare' | 'ai'

interface Project {
  title: string
  subtitle: string
  description: string
  category: CategoryId
  categoryLabel: string
  image: string
  slug: string
  url: string
}

const categories: { id: CategoryId; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'security', label: 'Security' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'ai', label: 'AI & ML' },
]

const projects: Project[] = [
  {
    title: 'CVEarity',
    subtitle: 'Vulnerability Tracker',
    description: 'Real-time CVE tracking and vulnerability management platform for security teams.',
    category: 'security',
    categoryLabel: 'Security',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=85&auto=format&fit=crop',
    slug: 'cvearity',
    url: 'https://cv-earity-jdir.vercel.app/',
  },
  {
    title: 'Mediconnect',
    subtitle: 'Healthcare Platform',
    description: 'Seamless patient-provider connections with intelligent appointment scheduling.',
    category: 'healthcare',
    categoryLabel: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=85&auto=format&fit=crop',
    slug: 'mediconnect',
    url: 'https://mediconnect-liart.vercel.app',
  },
  {
    title: 'ChessAI',
    subtitle: 'AI Chess Engine',
    description: 'Challenge an intelligent AI opponent with adaptive difficulty levels.',
    category: 'ai',
    categoryLabel: 'AI',
    image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&q=85&auto=format&fit=crop',
    slug: 'chessai',
    url: '',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all')

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <Section id="portfolio" className="bg-gradient-to-b from-amber-50/50 to-white">
      {/* Section Header with Sparkle Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <p className="text-slate-600 text-sm uppercase tracking-widest mb-4">
          Portfolio
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
          <motion.span
            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="text-amber-500"
          >
            ✦
          </motion.span>
          Our Recent <em className="not-italic text-blue-600">Work</em>
          <motion.span
            animate={{ rotate: [0, -15, 15, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 0.5 }}
            className="text-amber-500"
          >
            ✦
          </motion.span>
        </h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Real solutions for real businesses. Each project represents our commitment to excellence.
        </p>
      </motion.div>

      {/* Category Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center justify-center gap-2 md:gap-4 mb-12"
      >
        {categories.map((category, index) => (
          <div key={category.id} className="flex items-center gap-2 md:gap-4">
            <button
              onClick={() => setActiveCategory(category.id)}
              className={`text-sm md:text-base font-medium transition-colors duration-300 px-3 py-1 rounded-full ${
                activeCategory === category.id
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
              data-testid={`portfolio-tab-${category.id}`}
            >
              {category.label}
            </button>
            {index < categories.length - 1 && (
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            )}
          </div>
        ))}
      </motion.div>

      {/* Project Cards Grid */}
      <motion.div
        key={activeCategory}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full"
      >
        {filteredProjects.map((project) => (
          <motion.div key={project.slug} variants={itemVariants}>
            <Link
              href={project.url || `/contact?project=${encodeURIComponent(project.title)}`}
              target={project.url ? '_blank' : undefined}
              rel={project.url ? 'noopener noreferrer' : undefined}
              className="block group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL_DARK}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded-full shadow-lg">
                    {project.categoryLabel}
                  </span>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ArrowUpRight className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                    {project.subtitle}
                  </p>
                  <h4 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-12"
      >
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
          View all projects
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </Section>
  )
}
