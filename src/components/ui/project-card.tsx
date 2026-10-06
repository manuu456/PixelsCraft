'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Lock, Mail } from 'lucide-react'
import { BLUR_DATA_URL_DARK } from '@/lib/constants'
import { projectHref, type Project } from '@/lib/projects'
import { cn, trackSpotlight } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
  /** compact: home page (summary). detailed: /portfolio (description + tags + featured) */
  variant?: 'compact' | 'detailed'
}

function hostname(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

/** Liquid-glass project card. Live products are framed in a mini browser window showing their real URL. */
export function ProjectCard({ project, variant = 'compact' }: ProjectCardProps) {
  const isLive = Boolean(project.url)
  const detailed = variant === 'detailed'
  const Title = detailed ? 'h3' : 'h4'

  const card = (
    <article
      onPointerMove={trackSpotlight}
      className="lg-panel spotlight h-full flex flex-col rounded-[30px] p-2.5 transition-all duration-500 ease-expo-out group-hover:-translate-y-1.5 group-hover:[box-shadow:var(--lg-shadow-hover)] group-active:scale-[0.985]"
    >
      {/* Media */}
      <div className="relative overflow-hidden rounded-[22px] bg-slate-900/5 ring-1 ring-black/[0.06]">
        {isLive && (
          <div className="relative z-[2] flex items-center gap-3 px-3.5 h-9 bg-white/85 backdrop-blur-md border-b border-black/[0.05]">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            </span>
            <span className="flex-1 flex justify-center min-w-0">
              <span className="inline-flex items-center gap-1.5 max-w-full px-3 py-0.5 rounded-full bg-slate-900/[0.05] text-[11px] text-slate-500 truncate">
                <Lock className="w-2.5 h-2.5 shrink-0" />
                <span className="truncate">{hostname(project.url)}</span>
              </span>
            </span>
            <span className="w-[42px]" aria-hidden="true" />
          </div>
        )}

        <div className={cn('relative overflow-hidden', isLive ? 'h-44 sm:h-52' : 'h-[13.25rem] sm:h-[15.25rem]')}>
          <Image
            src={project.image}
            alt={`${project.name} — ${project.tagline}`}
            fill
            sizes={detailed ? '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw' : '(max-width: 768px) 100vw, 50vw'}
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL_DARK}
            className={cn(
              'object-cover transition-transform duration-700 ease-expo-out group-hover:scale-[1.04]',
              project.imagePosition === 'top' ? 'object-top' : 'object-center'
            )}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {detailed && project.featured && (
              <span className="px-2.5 py-1 text-[11px] font-semibold text-white rounded-full bg-linear-to-r from-indigo-500 to-violet-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_4px_10px_-4px_rgba(79,70,229,0.6)]">
                Featured
              </span>
            )}
            <span className="px-2.5 py-1 text-[11px] font-semibold text-slate-800 rounded-full bg-white/80 backdrop-blur-md ring-1 ring-white/80 shadow-xs">
              {project.category}
            </span>
          </div>

          {isLive ? (
            <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold text-slate-800 bg-white/85 backdrop-blur-md rounded-full ring-1 ring-white/80 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Live
            </span>
          ) : (
            <span className="absolute bottom-3 left-3 px-2.5 py-1 text-[11px] font-semibold text-slate-800 bg-white/85 backdrop-blur-md rounded-full ring-1 ring-white/80 shadow-xs">
              Coming Soon
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="relative z-[2] flex-1 flex flex-col px-3.5 pt-5 pb-3">
        <p className="text-[11px] font-medium text-slate-400 uppercase tracking-[0.12em] mb-1.5">
          {project.tagline}
        </p>
        <Title className={cn('font-bold tracking-tight text-slate-900 mb-2 transition-colors group-hover:text-indigo-600', detailed ? 'text-xl' : 'text-lg')}>
          {project.name}
        </Title>
        <p className="text-sm text-slate-600 leading-relaxed">
          {detailed ? project.description : project.summary}
        </p>

        {detailed && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[11px] font-medium text-indigo-700 bg-indigo-50/80 ring-1 ring-indigo-100 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action row */}
        <div className="mt-auto pt-5 flex items-center justify-between">
          <span className="text-[13px] font-semibold text-slate-700 group-hover:text-indigo-600 transition-colors">
            {isLive ? 'Visit live site' : 'Ask us about it'}
          </span>
          <span className="w-9 h-9 rounded-full flex items-center justify-center bg-white ring-1 ring-black/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,1),0_4px_10px_-4px_rgba(30,27,75,0.25)] transition-all duration-300 group-hover:bg-indigo-600 group-hover:ring-indigo-600">
            {isLive ? (
              <ArrowUpRight className="w-4 h-4 text-slate-700 group-hover:text-white transition-colors" />
            ) : (
              <Mail className="w-4 h-4 text-slate-700 group-hover:text-white transition-colors" />
            )}
          </span>
        </div>
      </div>
    </article>
  )

  return isLive ? (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full rounded-[30px]"
      data-testid={`portfolio-card-${project.slug}`}
    >
      {card}
    </a>
  ) : (
    <Link
      href={projectHref(project)}
      className="group block h-full rounded-[30px]"
      data-testid={`portfolio-card-${project.slug}`}
    >
      {card}
    </Link>
  )
}
