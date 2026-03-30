import { Metadata } from 'next'
import { Section, SectionHeader, GlassCard } from '@/components/ui'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Portfolio — PixelCraft',
  description: 'Explore our portfolio of websites, apps, AI solutions, and automation projects.',
}

const projects = [
  { title: 'CVEarity', subtitle: 'Vulnerability Tracker', description: 'CVE tracking and vulnerability management platform for security professionals and developers.', category: 'Security', tags: ['Security', 'Full Stack', 'Vulnerability Management'], image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=75&auto=format&fit=crop', slug: 'cvearity', url: 'https://cv-earity-jdir.vercel.app/', featured: true },
  { title: 'SecurIT', subtitle: 'Security Solutions', description: 'Comprehensive cybersecurity platform providing advanced threat detection and security monitoring.', category: 'Security', tags: ['Cybersecurity', 'Full Stack', 'Threat Detection'], image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=75&auto=format&fit=crop', slug: 'securit', url: '', featured: true },
  { title: 'AIText Humanizer', subtitle: 'AI-Powered Tool', description: 'AI-powered text transformation tool that converts AI-generated content into natural, human-like text.', category: 'AI Tool', tags: ['AI', 'NLP', 'Text Processing'], image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=75&auto=format&fit=crop', slug: 'aitext-humanizer', url: '', featured: true },
  { title: 'Mediconnect', subtitle: 'Healthcare Platform', description: 'Digital healthcare platform connecting patients with medical professionals through seamless telemedicine.', category: 'Healthcare', tags: ['Healthcare', 'Full Stack', 'Telemedicine'], image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=75&auto=format&fit=crop', slug: 'mediconnect', url: 'https://mediconnect-liart.vercel.app', featured: true },
  { title: 'ChessAI', subtitle: 'Intelligent Chess Engine', description: 'Advanced chess AI with strategic analysis, move suggestions, and interactive gameplay.', category: 'AI Tool', tags: ['AI', 'Game Development', 'Machine Learning'], image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=600&q=75&auto=format&fit=crop', slug: 'chessai', url: 'https://chess-ai-demo.vercel.app/', featured: false },
]

const categories = ['All', 'Security', 'AI Tool', 'Healthcare']

export default function PortfolioPage() {
  return (
    <div className="pt-[72px]" data-testid="portfolio-page">
      <Section>
        <SectionHeader
          label="Our Portfolio"
          title={<>Projects We&apos;re Proud Of</>}
          subtitle="A showcase of digital products we've built for startups, enterprises, and everything in between."
        />

        <div className="flex flex-wrap gap-3 justify-center mb-14" data-testid="portfolio-category-filter">
          {categories.map((cat) => (
            <button
              key={cat}
              data-testid={`portfolio-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              className={`px-5 py-2 text-sm font-medium transition-all rounded-full ${
                cat === 'All'
                  ? 'bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-[var(--void)] shadow-[0_4px_15px_rgba(212,175,55,0.3)]'
                  : 'glass-card text-[var(--text-secondary)] hover:text-[var(--gold)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] w-full">
          {projects.map((project) => {
            const isExternal = !!project.url
            const Wrapper = isExternal
              ? ({ children }: { children: React.ReactNode }) => (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" data-testid={`portfolio-project-${project.slug}`}>{children}</a>
                )
              : ({ children }: { children: React.ReactNode }) => (
                  <Link href={`/contact?project=${encodeURIComponent(project.title)}`} data-testid={`portfolio-project-${project.slug}`}>{children}</Link>
                )

            return (
              <Wrapper key={project.slug}>
                <GlassCard padding="none" className="overflow-hidden group cursor-pointer h-[420px] flex flex-col rounded-2xl">
                  <div className="relative h-[200px] overflow-hidden flex-shrink-0">
                    <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    {project.featured && <span className="absolute top-3 left-3 px-3 py-1 text-[10px] font-bold text-[var(--void)] bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] rounded-full shadow-[0_2px_10px_rgba(212,175,55,0.3)]">Featured</span>}
                    <span className="absolute top-3 right-3 px-3 py-1 text-[10px] font-bold text-[var(--void)] bg-white/90 backdrop-blur-sm rounded-full">{project.category}</span>
                    {!isExternal && <span className="absolute bottom-3 left-3 px-3 py-1 text-[10px] font-semibold text-[var(--void)] bg-white/90 backdrop-blur-sm rounded-full">Coming Soon</span>}
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-[10px] text-[var(--gold)] font-bold uppercase tracking-[0.15em] mb-1">{project.subtitle}</p>
                    <h3 className="font-heading text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--gold)] transition-colors">{project.title}</h3>
                    <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 text-[10px] font-medium text-[var(--gold)] bg-[rgba(212,175,55,0.06)] border border-[var(--border-gold)] rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </Wrapper>
            )
          })}
        </div>
      </Section>
    </div>
  )
}
