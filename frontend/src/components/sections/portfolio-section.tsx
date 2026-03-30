import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'CVEarity',
    category: 'Security',
    description: 'CVE tracking and vulnerability management for security professionals.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=75&auto=format&fit=crop',
    url: 'https://cv-earity-jdir.vercel.app/',
    slug: 'cvearity',
  },
  {
    title: 'Mediconnect',
    category: 'Healthcare',
    description: 'Connecting patients with healthcare providers through seamless telemedicine.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=75&auto=format&fit=crop',
    url: 'https://mediconnect-liart.vercel.app',
    slug: 'mediconnect',
  },
  {
    title: 'ChessAI',
    category: 'AI / Game',
    description: 'Play chess against an intelligent AI opponent with strategic analysis.',
    image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=600&q=75&auto=format&fit=crop',
    url: 'https://chess-ai-demo.vercel.app/',
    slug: 'chessai',
  },
]

export function PortfolioSection() {
  return (
    <section data-testid="portfolio-section" className="px-6 md:px-12 lg:px-20 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <div>
            <p className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">Portfolio</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#ededed]">Selected Work</h2>
          </div>
          <Link href="/portfolio" data-testid="portfolio-view-all" className="text-sm text-[#888] hover:text-gold transition-colors inline-flex items-center gap-1.5">
            View all projects <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project) => (
            <a
              key={project.slug}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`portfolio-card-${project.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-[#111]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-[11px] text-gold font-semibold uppercase tracking-[0.15em] mb-1">{project.category}</p>
              <h3 className="text-base font-semibold text-[#ededed] group-hover:text-gold transition-colors mb-1">{project.title}</h3>
              <p className="text-[13px] text-[#888] leading-relaxed">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
