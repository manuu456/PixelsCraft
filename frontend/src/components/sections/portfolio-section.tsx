'use client'

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

export function PortfolioSection() {
  return (
    <Section id="portfolio" data-testid="portfolio-section">
      <SectionHeader
        label="Our Portfolio"
        title={<>Projects We&apos;re Proud Of</>}
        subtitle="Real solutions built for real businesses. Each project represents our commitment to excellence."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] w-full">
        {projects.map((project) => (
          <a
            key={project.slug}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`portfolio-card-${project.slug}`}
          >
            <GlassCard padding="none" className="h-[400px] overflow-hidden group cursor-pointer flex flex-col rounded-2xl">
              <div className="relative h-[200px] overflow-hidden flex-shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute top-4 right-4 px-3 py-1 text-[10px] font-bold text-[var(--void)] bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] rounded-full shadow-[0_2px_10px_rgba(212,175,55,0.3)]">
                  {project.category}
                </span>
                <div className="absolute inset-0 bg-[var(--gold)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold)] rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.4)]">
                    <ExternalLink className="w-5 h-5 text-[var(--void)]" />
                  </div>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="text-[10px] text-[var(--gold)] font-bold uppercase tracking-[0.15em] mb-1">{project.subtitle}</p>
                <h4 className="font-heading text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--gold)] transition-colors">
                  {project.title}
                </h4>
                <p className="text-[13px] text-[var(--text-secondary)] mb-4 flex-1">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-[10px] font-medium text-[var(--gold)] bg-[rgba(212,175,55,0.06)] border border-[var(--border-gold)] rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </a>
        ))}
      </div>

      <div className="mt-12">
        <Link href="/portfolio" className="btn-outline inline-flex items-center gap-2 px-8 py-3 rounded-full" data-testid="portfolio-view-all">
          View All Projects <span className="text-[var(--gold)]">&rarr;</span>
        </Link>
      </div>
    </Section>
  )
}
