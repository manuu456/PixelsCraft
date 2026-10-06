'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section, SectionHeader, SegmentedControl, ProjectCard } from '@/components/ui'
import { projects, projectCategories, type ProjectCategory } from '@/lib/projects'

type CategoryFilter = 'All' | ProjectCategory

const categories: { value: CategoryFilter; label: string }[] = [
  { value: 'All', label: 'All' },
  ...projectCategories.map((c) => ({ value: c as CategoryFilter, label: c })),
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All')

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <div className="pt-28 min-h-screen">
      <Section>
        <SectionHeader
          label="Our Portfolio"
          title={
            <>
              Projects We&apos;re <em>Proud Of</em>
            </>
          }
          subtitle="A showcase of digital products we've built for startups, enterprises, and everything in between."
        />

        {/* Category Filter */}
        <SegmentedControl
          className="mb-12"
          ariaLabel="Filter projects by category"
          options={categories}
          value={activeCategory}
          onChange={setActiveCategory}
        />

        {/* Projects Grid — cards re-flow smoothly when the filter changes */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl w-full">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectCard project={project} variant="detailed" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>
    </div>
  )
}
