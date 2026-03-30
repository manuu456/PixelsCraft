import { Metadata } from 'next'
import { SectionHeader, GlassCard } from '@/components/ui'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = { title: 'Portfolio — PixelCraft', description: 'Explore our portfolio of websites, apps, AI solutions.' }

const projects = [
  { title: 'CVEarity', subtitle: 'Vulnerability Tracker', description: 'CVE tracking and vulnerability management platform for security professionals.', category: 'Security', tags: ['Security', 'Full Stack', 'Vulnerability Management'], image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=75&auto=format&fit=crop', slug: 'cvearity', url: 'https://cv-earity-jdir.vercel.app/', featured: true },
  { title: 'SecurIT', subtitle: 'Security Solutions', description: 'Comprehensive cybersecurity platform providing advanced threat detection and security monitoring.', category: 'Security', tags: ['Cybersecurity', 'Full Stack'], image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=75&auto=format&fit=crop', slug: 'securit', url: '', featured: true },
  { title: 'AIText Humanizer', subtitle: 'AI-Powered Tool', description: 'AI-powered text transformation tool that converts AI-generated content into natural text.', category: 'AI Tool', tags: ['AI', 'NLP', 'Text Processing'], image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=75&auto=format&fit=crop', slug: 'aitext-humanizer', url: '', featured: true },
  { title: 'Mediconnect', subtitle: 'Healthcare Platform', description: 'Digital healthcare platform connecting patients with medical professionals.', category: 'Healthcare', tags: ['Healthcare', 'Full Stack'], image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=75&auto=format&fit=crop', slug: 'mediconnect', url: 'https://mediconnect-liart.vercel.app', featured: true },
  { title: 'ChessAI', subtitle: 'Intelligent Chess Engine', description: 'Advanced chess AI with strategic analysis and interactive gameplay.', category: 'AI Tool', tags: ['AI', 'Game Development'], image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=600&q=75&auto=format&fit=crop', slug: 'chessai', url: 'https://chess-ai-demo.vercel.app/', featured: false },
]

const categories = ['All', 'Security', 'AI Tool', 'Healthcare']

export default function PortfolioPage() {
  return (
    <div data-testid="portfolio-page">
      {/* Hero */}
      <div className="page-hero px-6 md:px-12 lg:px-24 flex flex-col items-center text-center">
        <div className="absolute inset-0 z-0">
          <img src="https://static.prod-images.emergentagent.com/jobs/c9e6853e-20f6-47e3-abf0-1943be61c72a/images/0bfd4742d2cea1a0c7f02498752efba5b7770757288d18e337d77ae3b2d28114.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--void)]/20 via-[var(--void)]/60 to-[var(--void)]" />
        </div>
        <div className="relative z-10">
          <SectionHeader label="Our Portfolio" title={<>Projects We&apos;re Proud Of</>} subtitle="A showcase of digital products we've built for startups, enterprises, and everything in between." />
        </div>
      </div>

      <section className="px-6 md:px-12 lg:px-24 pb-28 -mt-4">
        <div className="max-w-[1140px] mx-auto flex flex-col items-center">
          <div className="flex flex-wrap gap-3 justify-center mb-14" data-testid="portfolio-category-filter">
            {categories.map((cat) => (
              <button key={cat} data-testid={`portfolio-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`} className={`px-5 py-2.5 text-sm font-semibold transition-all rounded-full ${cat === 'All' ? 'bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-[var(--void)] shadow-[0_4px_20px_rgba(212,175,55,0.35)]' : 'glass-card text-[var(--text-secondary)] hover:text-[var(--gold)]'}`}>{cat}</button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
            {projects.map((project) => {
              const isExternal = !!project.url
              const Wrapper = isExternal
                ? ({ children }: { children: React.ReactNode }) => (<a href={project.url} target="_blank" rel="noopener noreferrer" data-testid={`portfolio-project-${project.slug}`}>{children}</a>)
                : ({ children }: { children: React.ReactNode }) => (<Link href={`/contact?project=${encodeURIComponent(project.title)}`} data-testid={`portfolio-project-${project.slug}`}>{children}</Link>)
              return (
                <Wrapper key={project.slug}>
                  <GlassCard padding="none" className="overflow-hidden group cursor-pointer h-[420px] flex flex-col rounded-2xl">
                    <div className="relative h-[200px] overflow-hidden flex-shrink-0">
                      <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-black/40 to-transparent" />
                      {project.featured && <span className="absolute top-3 left-3 gold-badge text-[9px] py-1">Featured</span>}
                      <span className="absolute top-3 right-3 px-3 py-1 text-[10px] font-bold text-[var(--void)] bg-white/90 backdrop-blur-sm rounded-full">{project.category}</span>
                      {!isExternal && <span className="absolute bottom-3 left-3 gold-badge text-[9px] py-1">Coming Soon</span>}
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <p className="text-[10px] text-[var(--gold)] font-bold uppercase tracking-[0.2em] mb-1">{project.subtitle}</p>
                      <h3 className="font-heading text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--gold)] transition-colors">{project.title}</h3>
                      <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed mb-auto">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.tags.map((tag) => (<span key={tag} className="gold-badge text-[9px] py-1 px-2.5">{tag}</span>))}
                      </div>
                    </div>
                  </GlassCard>
                </Wrapper>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
