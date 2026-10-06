import Link from 'next/link'
import { ArrowRight, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-6 pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-100/40 rounded-full blur-3xl" />
      </div>

      <div className="lg-panel relative text-center max-w-xl rounded-[36px] px-6 py-12 sm:px-12">
        <p className="text-sm font-semibold tracking-widest uppercase text-indigo-600 mb-4">Error 404</p>
        <h1 className="font-serif text-5xl md:text-7xl font-semibold text-slate-900 mb-4 leading-tight">
          This page is still <em className="text-brand-gradient pr-1">being crafted</em>
        </h1>
        <p className="text-lg text-slate-600 mb-10">
          The page you&apos;re looking for doesn&apos;t exist yet. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="btn-glossy inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold"
          >
            <Home className="w-4 h-4" />
            Back to home
          </Link>
          <Link
            href="/contact"
            className="btn-glass inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold"
          >
            Talk to us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
