'use client'

import { SectionHeader, GlassCard } from '@/components/ui'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

const projects = [
  { title: 'CVEarity', subtitle: 'Vulnerability Tracker', description: 'CVE tracking and vulnerability management platform for security professionals.', category: 'Security', tags: ['Security', 'Full Stack'], image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=75&auto=format&fit=crop', slug: 'cvearity', url: 'https://cv-earity-jdir.vercel.app/' },
  { title: 'Mediconnect', subtitle: 'Healthcare Platform', description: 'Connect patients with healthcare providers through seamless telemedicine.', category: 'Healthcare', tags: ['Full Stack', 'Healthcare'], image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=75&auto=format&fit=crop', slug: 'mediconnect', url: 'https://mediconnect-liart.vercel.app' },
  { title: 'ChessAI', subtitle: 'AI Chess Engine', description: 'Play chess against an intelligent AI opponent with strategic analysis.', category: 'AI Tool', tags: ['Gen AI', 'Game'], image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=400&q=75&auto=format&fit=crop', slug: 'chessai', url: 'https://chess-ai-demo.vercel.app/' },
]

export function PortfolioSection() {
  return (
    <section data-testid="portfolio-section" className="relative px-6 md:px-12 lg:px-24 py-28 section-glow">
      <div className="gold-divider mb-28 max-w-4xl mx-auto" />
      <div className="max-w-[1140px] mx-auto flex flex-col items-center">
        <SectionHeader label="Our Portfolio" title={<>Projects We&apos;re Proud Of</>} subtitle="Real solutions built for real businesses. Each project represents our commitment to excellence." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {projects.map((project) => (
            <a key={project.slug} href={project.url} target="_blank" rel="noopener noreferrer" data-testid={`portfolio-card-${project.slug}`}>
              <GlassCard padding="none" className="h-[420px] overflow-hidden group cursor-pointer flex flex-col rounded-2xl">
                <div className="relative h-[210px] overflow-hidden flex-shrink-0">
                  <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-black/40 to-transparent" />
                  <span className="absolute top-4 right-4 gold-badge">{project.category}</span>
                  <div className="absolute inset-0 bg-[var(--gold)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold)] rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300 shadow-[0_4px_25px_rgba(212,175,55,0.5)]">
                      <ExternalLink className="w-6 h-6 text-[var(--void)]" />
                    </div>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-[10px] text-[var(--gold)] font-bold uppercase tracking-[0.2em] mb-1">{project.subtitle}</p>
                  <h4 className="font-heading text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--gold)] transition-colors">{project.title}</h4>
                  <p className="text-[13px] text-[var(--text-secondary)] mb-auto">{project.description}</p>
                  <div className="flex gap-2 flex-wrap mt-3">
                    {project.tags.map((tag) => (<span key={tag} className="gold-badge text-[9px] py-1 px-2.5">{tag}</span>))}
                  </div>
                </div>
              </GlassCard>
            </a>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/portfolio" className="btn-outline inline-flex items-center gap-2 px-8 py-3 rounded-xl" data-testid="portfolio-view-all">View All Projects <span className="text-[var(--gold)]">&rarr;</span></Link>
        </div>
      </div>
    </section>
  )
}
