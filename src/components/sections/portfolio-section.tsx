'use client'

import { motion } from 'framer-motion'
import { Section, SectionHeader, GlassCard } from '@/components/ui'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { BLUR_DATA_URL_DARK } from '@/lib/constants'

const projects = [
  {
    title: 'CVEarity — Vulnerability Tracker',
    description: 'CVE tracking and vulnerability management platform',
    category: 'Security',
    tags: ['Security', 'Full Stack'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=75&auto=format&fit=crop',
    slug: 'cvearity',
    url: 'https://cv-earity-jdir.vercel.app/',
  },
  {
    title: 'Mediconnect — Healthcare Platform',
    description: 'Connect patients with healthcare providers',
    category: 'Healthcare',
    tags: ['Full Stack', 'Healthcare'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=75&auto=format&fit=crop',
    slug: 'mediconnect',
    url: 'https://mediconnect-liart.vercel.app',
  },
  {
    title: 'ChessAI — AI Chess Engine',
    description: 'Play chess against an intelligent AI opponent',
    category: 'AI Tool',
    tags: ['Gen AI', 'Game'],
    image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=400&q=75&auto=format&fit=crop',
    slug: 'chessai',
    url: 'https://chess-ai-demo.vercel.app/',
  },
  {
    title: 'SecurIT — Security Solutions',
    description: 'Enterprise security monitoring and management',
    category: 'Security',
    tags: ['Security', 'Dashboard'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=75&auto=format&fit=crop',
    slug: 'securit',
    url: null, // Will be added later
  },
  {
    title: 'AIText Humanizer',
    description: 'AI-powered text humanization tool',
    category: 'AI Tool',
    tags: ['Gen AI', 'NLP'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=75&auto=format&fit=crop',
    slug: 'aitext-humanizer',
    url: null, // Will be uploaded later
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
}

export function PortfolioSection() {
  return (
    <Section id="portfolio">
      <SectionHeader
        label="Our Portfolio"
        title={
          <>
            Projects We&apos;re <em>Proud Of</em>
          </>
        }
        subtitle="Real solutions we've built for real businesses. Each project represents our commitment to excellence."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full"
      >
        {projects.map((project) => (
          <motion.div key={project.slug} variants={itemVariants}>
            <Link href={`/contact?project=${encodeURIComponent(project.title)}`}>
              <GlassCard padding="none" className="overflow-hidden group cursor-pointer h-full">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL_DARK}
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Category Tag */}
                  <span className="absolute top-4 right-4 px-3 py-1.5 text-xs font-semibold text-black bg-[var(--gold)] rounded-full shadow-lg">
                    {project.category}
                  </span>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[var(--gold)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[var(--gold)] flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <ExternalLink className="w-5 h-5 text-black" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h4 className="font-serif text-xl font-semibold text-[var(--text-dark)] mb-1 group-hover:text-[var(--gold)] transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-[var(--text-muted)] mb-3">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium text-[var(--gold)] bg-[rgba(245,197,24,0.1)] border border-[rgba(245,197,24,0.2)] rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-12"
      >
        <Link
          href="/portfolio"
          className="btn-glass inline-flex items-center gap-2"
        >
          View All Projects
          <span>→</span>
        </Link>
      </motion.div>
    </Section>
  )
}
