import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Portfolio — PixelCraft',
  description: 'Explore our portfolio of websites, apps, and AI solutions.',
}

const projects = [
  {
    title: 'CVEarity',
    subtitle: 'Vulnerability Tracker',
    description: 'CVE tracking and vulnerability management platform for security professionals.',
    category: 'Security',
    tags: ['Security', 'Full Stack'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=75&auto=format&fit=crop',
    slug: 'cvearity',
    url: 'https://cv-earity-jdir.vercel.app/',
  },
  {
    title: 'SecurIT',
    subtitle: 'Security Solutions',
    description: 'Comprehensive cybersecurity platform providing advanced threat detection and monitoring.',
    category: 'Security',
    tags: ['Cybersecurity', 'Full Stack'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=75&auto=format&fit=crop',
    slug: 'securit',
    url: '',
  },
  {
    title: 'AIText Humanizer',
    subtitle: 'AI-Powered Tool',
    description: 'AI-powered text transformation tool that converts AI-generated content into natural text.',
    category: 'AI Tool',
    tags: ['AI', 'NLP'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=75&auto=format&fit=crop',
    slug: 'aitext-humanizer',
    url: '',
  },
  {
    title: 'Mediconnect',
    subtitle: 'Healthcare Platform',
    description: 'Digital healthcare platform connecting patients with medical professionals.',
    category: 'Healthcare',
    tags: ['Healthcare', 'Full Stack'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=75&auto=format&fit=crop',
    slug: 'mediconnect',
    url: 'https://mediconnect-liart.vercel.app',
  },
  {
    title: 'ChessAI',
    subtitle: 'Intelligent Chess Engine',
    description: 'Advanced chess AI with strategic analysis and interactive gameplay.',
    category: 'AI Tool',
    tags: ['AI', 'Game Development'],
    image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=600&q=75&auto=format&fit=crop',
    slug: 'chessai',
    url: 'https://chess-ai-demo.vercel.app/',
  },
]

export default function PortfolioPage() {
  return (
    <div data-testid="portfolio-page" className="pt-28 pb-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">Our Work</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#ededed] mb-5">
            Projects we&apos;re proud of
          </h1>
          <p className="text-base text-[#888] leading-relaxed">
            A showcase of digital products we&apos;ve built for startups, enterprises, and everything in between.
          </p>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const isExternal = !!project.url
            const Wrapper = isExternal
              ? ({ children }: { children: React.ReactNode }) => (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" data-testid={`portfolio-project-${project.slug}`} className="group block">
                    {children}
                  </a>
                )
              : ({ children }: { children: React.ReactNode }) => (
                  <Link href={`/contact?project=${encodeURIComponent(project.title)}`} data-testid={`portfolio-project-${project.slug}`} className="group block">
                    {children}
                  </Link>
                )

            return (
              <Wrapper key={project.slug}>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-[#111]">
                  <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  {!isExternal && (
                    <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-black/70 text-[10px] text-[#888] font-medium rounded">
                      Coming Soon
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <p className="text-[11px] text-gold font-semibold uppercase tracking-[0.15em]">{project.category}</p>
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] text-[#555] border border-[rgba(255,255,255,0.06)] px-2 py-0.5 rounded">{tag}</span>
                    ))}
                  </div>
                </div>
                <h3 className="text-base font-semibold text-[#ededed] group-hover:text-gold transition-colors mb-1">{project.title}</h3>
                <p className="text-[13px] text-[#888] leading-relaxed">{project.description}</p>
              </Wrapper>
            )
          })}
        </div>
      </div>
    </div>
  )
}
