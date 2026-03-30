'use client'

import { motion } from 'framer-motion'
import { Section, SectionHeader, GlassCard } from '@/components/ui'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'CVEarity',
    subtitle: 'Vulnerability Tracker',
    description: 'CVE tracking and vulnerability management platform for security professionals.',
    category: 'Security',
    tags: ['Security', 'Full Stack'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=75&auto=format&fit=crop',
    slug: 'cvearity',
    url: 'https://cv-earity-jdir.vercel.app/',
  },
  {
    title: 'Mediconnect',
    subtitle: 'Healthcare Platform',
    description: 'Connect patients with healthcare providers through seamless telemedicine.',
    category: 'Healthcare',
    tags: ['Full Stack', 'Healthcare'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=75&auto=format&fit=crop',
    slug: 'mediconnect',
    url: 'https://mediconnect-liart.vercel.app',
  },
  {
    title: 'ChessAI',
    subtitle: 'AI Chess Engine',
    description: 'Play chess against an intelligent AI opponent with strategic analysis.',
    category: 'AI Tool',
    tags: ['Gen AI', 'Game'],
    image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=400&q=75&auto=format&fit=crop',
    slug: 'chessai',
    url: 'https://chess-ai-demo.vercel.app/',
  },
]

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}

export function PortfolioSection() {
  return (
    <Section id="portfolio" data-testid="portfolio-section">
      <SectionHeader
        label="Our Portfolio"
        title={<>Projects We&apos;re Proud Of</>}
        subtitle="Real solutions built for real businesses. Each project represents our commitment to excellence."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full"
      >
        {projects.map((project) => (
          <motion.div key={project.slug} variants={fadeUp}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`portfolio-card-${project.slug}`}
            >
              <GlassCard padding="none" className="overflow-hidden group cursor-pointer h-full">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute top-4 right-4 px-3 py-1 text-xs font-bold text-[var(--void)] bg-[var(--gold)]">
                    {project.category}
                  </span>
                  <div className="absolute inset-0 bg-[var(--gold)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-[var(--gold)] flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300">
                      <ExternalLink className="w-5 h-5 text-[var(--void)]" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-[var(--gold)] font-bold uppercase tracking-[0.15em] mb-1">{project.subtitle}</p>
                  <h4 className="font-heading text-xl font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--gold)] transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{project.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 text-xs font-medium text-[var(--gold)] bg-[rgba(212,175,55,0.08)] border border-[var(--border-gold)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </a>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-12"
      >
        <Link href="/portfolio" className="btn-outline inline-flex items-center gap-2 px-8 py-3" data-testid="portfolio-view-all">
          View All Projects <span className="text-[var(--gold)]">&rarr;</span>
        </Link>
      </motion.div>
    </Section>
  )
}
