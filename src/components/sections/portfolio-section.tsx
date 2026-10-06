'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section, SegmentedControl, ProjectCard } from '@/components/ui'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { projects, projectCategories, type ProjectCategory } from '@/lib/projects'

type CategoryId = 'all' | ProjectCategory

const homeProjects = projects.filter((p) => p.showOnHome)

// Only offer filters that actually have projects on the home page
const categories: { value: CategoryId; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  ...projectCategories
    .filter((c) => homeProjects.some((p) => p.category === c))
    .map((c) => ({ value: c as CategoryId, label: c })),
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
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
    ? homeProjects
    : homeProjects.filter(p => p.category === activeCategory)

  return (
    <Section id="portfolio" fullHeight={false}>
      {/* Section Header with Sparkle Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10 md:mb-12"
      >
        <span className="section-label">Portfolio</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4 flex items-center justify-center gap-3">
          <motion.span
            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="text-amber-500"
          >
            ✦
          </motion.span>
          Our Recent <em className="not-italic text-brand-gradient">Work</em>
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

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full mb-10 md:mb-12"
      >
        <SegmentedControl
          ariaLabel="Filter projects by category"
          options={categories}
          value={activeCategory}
          onChange={setActiveCategory}
        />
      </motion.div>

      {/* Project Cards Grid */}
      <motion.div
        key={activeCategory}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-5xl w-full"
      >
        {filteredProjects.map((project) => (
          <motion.div key={project.slug} variants={itemVariants}>
            <ProjectCard project={project} />
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
          className="btn-glass group text-sm"
        >
          View all projects
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </Section>
  )
}
