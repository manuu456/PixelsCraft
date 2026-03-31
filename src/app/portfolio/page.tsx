'use client'

import { useState } from 'react'
import { Section, SectionHeader, GlassCard } from '@/components/ui'
import Link from 'next/link'
import Image from 'next/image'
import { BLUR_DATA_URL_DARK } from '@/lib/constants'

const projects = [
  {
    title: 'CVEarity — Vulnerability Tracker',
    description:
      'CVE tracking and vulnerability management platform for security professionals and developers.',
    category: 'Security',
    tags: ['Security', 'Full Stack', 'Vulnerability Management'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=75&auto=format&fit=crop',
    slug: 'cvearity',
    url: 'https://cv-earity-jdir.vercel.app/',
    featured: true,
  },
  {
    title: 'SecurIT — Security Solutions',
    description:
      'Comprehensive cybersecurity platform providing advanced threat detection and security monitoring.',
    category: 'Security',
    tags: ['Cybersecurity', 'Full Stack', 'Threat Detection'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=75&auto=format&fit=crop',
    slug: 'securit',
    url: '',
    featured: true,
  },
  {
    title: 'AIText Humanizer',
    description:
      'AI-powered text transformation tool that converts AI-generated content into natural, human-like text.',
    category: 'AI Tool',
    tags: ['AI', 'NLP', 'Text Processing'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=75&auto=format&fit=crop',
    slug: 'aitext-humanizer',
    url: '',
    featured: true,
  },
  {
    title: 'Mediconnect — Healthcare Platform',
    description:
      'Digital healthcare platform connecting patients with medical professionals through seamless telemedicine solutions.',
    category: 'Healthcare',
    tags: ['Healthcare', 'Full Stack', 'Telemedicine'],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=75&auto=format&fit=crop',
    slug: 'mediconnect',
    url: 'https://mediconnect-liart.vercel.app',
    featured: true,
  },
  {
    title: 'ChessAI — Intelligent Chess Engine',
    description:
      'Advanced chess AI with strategic analysis, move suggestions, and interactive gameplay experience.',
    category: 'AI Tool',
    tags: ['AI', 'Game Development', 'Machine Learning'],
    image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=600&q=75&auto=format&fit=crop',
    slug: 'chessai',
    url: '',
    featured: false,
  },
]

const categories = ['All', 'Security', 'AI Tool', 'Healthcare']

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <div className="pt-28 bg-[#faf9f6] min-h-screen">
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
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-white/8 text-slate-600 hover:bg-white/15 border border-white/10 hover:border-indigo-600/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
          {filteredProjects.map((project) => (
            project.url ? (
              <a key={project.slug} href={project.url} target="_blank" rel="noopener noreferrer">
                <GlassCard padding="none" className="overflow-hidden group cursor-pointer h-full">
                  {/* Thumbnail */}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Featured Badge */}
                    {project.featured && (
                      <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold text-white bg-indigo-600 rounded-full shadow-lg">
                        Featured
                      </span>
                    )}

                    {/* Category Tag */}
                    <span className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold text-black bg-white/90 backdrop-blur-sm rounded-full">
                      {project.category}
                    </span>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </a>
            ) : (
              <Link key={project.slug} href={`/contact?project=${encodeURIComponent(project.title)}`}>
                <GlassCard padding="none" className="overflow-hidden group cursor-pointer h-full">
                  {/* Thumbnail */}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Featured Badge */}
                    {project.featured && (
                      <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold text-white bg-indigo-600 rounded-full shadow-lg">
                        Featured
                      </span>
                    )}

                    {/* Category Tag */}
                    <span className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold text-black bg-white/90 backdrop-blur-sm rounded-full">
                      {project.category}
                    </span>

                    {/* Coming Soon Badge */}
                    <span className="absolute bottom-3 left-3 px-3 py-1 text-xs font-semibold text-black bg-white/90 backdrop-blur-sm rounded-full">
                      Coming Soon
                    </span>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </Link>
            )
          ))}
        </div>
      </Section>
    </div>
  )
}
