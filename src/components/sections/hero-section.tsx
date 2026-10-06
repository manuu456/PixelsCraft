'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Search, Briefcase, ChevronDown, Check } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { projects } from '@/lib/projects'

// Shown in the "Latest" badge above the headline
const latestProject = projects.find((p) => p.slug === 'curo')

// Quick shortcuts under the search bar
const popularSearches = ['Web Development', 'Mobile Apps', 'AI Solutions']

// Round glass arrow used inside the photo-card caption bars
function HeroArrow() {
  return (
    <span
      aria-hidden="true"
      className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_6px_14px_-6px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:bg-indigo-600 group-hover:scale-105"
    >
      <ArrowRight className="w-4 h-4 text-slate-800 group-hover:text-white group-hover:-rotate-45 transition-all duration-300" />
    </span>
  )
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.6 + i * 0.15,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

const slideFromLeft = {
  hidden: { opacity: 0, x: '-100vw' },  // Start from left edge of viewport
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
}

const slideFromTop = {
  hidden: { opacity: 0, y: '-50vh' },  // Start from top edge
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
}

const slideFromRight = {
  hidden: { opacity: 0, x: '100vw' },  // Start from right edge of viewport
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
}

const searchBarVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

// SVG Illustrations
const WomanWithCardIllustration = () => (
  <svg viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Hair */}
    <ellipse cx="100" cy="55" rx="38" ry="42" fill="#2D3748" />
    <path d="M62 55 Q62 20 100 20 Q138 20 138 55" fill="#2D3748" />
    {/* Face */}
    <ellipse cx="100" cy="60" rx="30" ry="32" fill="#F5D0C5" />
    {/* Eyes */}
    <ellipse cx="90" cy="55" rx="3" ry="4" fill="#2D3748" />
    <ellipse cx="110" cy="55" rx="3" ry="4" fill="#2D3748" />
    {/* Smile */}
    <path d="M92 70 Q100 78 108 70" stroke="#2D3748" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* Blush */}
    <ellipse cx="82" cy="65" rx="6" ry="3" fill="#F8B4B4" opacity="0.5" />
    <ellipse cx="118" cy="65" rx="6" ry="3" fill="#F8B4B4" opacity="0.5" />
    {/* Body / Dress */}
    <path d="M60 100 Q60 95 100 95 Q140 95 140 100 L150 200 Q100 210 50 200 L60 100Z" fill="#10B981" />
    {/* Arms */}
    <path d="M60 110 Q30 130 45 170" stroke="#F5D0C5" strokeWidth="18" strokeLinecap="round" />
    <path d="M140 110 Q170 130 155 170" stroke="#F5D0C5" strokeWidth="18" strokeLinecap="round" />
    {/* Card in hand */}
    <rect x="130" y="140" width="50" height="70" rx="6" fill="#4F46E5" transform="rotate(15 130 140)" />
    <rect x="138" y="152" width="30" height="4" rx="2" fill="white" transform="rotate(15 130 140)" />
    <rect x="140" y="162" width="20" height="3" rx="1.5" fill="white" opacity="0.6" transform="rotate(15 130 140)" />
    <circle cx="175" cy="175" r="8" fill="#F59E0B" transform="rotate(15 130 140)" />
    {/* Legs */}
    <rect x="75" y="195" width="18" height="60" rx="9" fill="#F5D0C5" />
    <rect x="107" y="195" width="18" height="60" rx="9" fill="#F5D0C5" />
    {/* Shoes */}
    <ellipse cx="84" cy="258" rx="14" ry="8" fill="#2D3748" />
    <ellipse cx="116" cy="258" rx="14" ry="8" fill="#2D3748" />
  </svg>
)

const PersonWithLaptopIllustration = () => (
  <svg viewBox="0 0 220 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Hair */}
    <ellipse cx="110" cy="45" rx="32" ry="35" fill="#4A5568" />
    {/* Face */}
    <ellipse cx="110" cy="50" rx="26" ry="28" fill="#E8C4B8" />
    {/* Glasses */}
    <rect x="92" y="42" width="14" height="12" rx="3" stroke="#2D3748" strokeWidth="2" fill="none" />
    <rect x="112" y="42" width="14" height="12" rx="3" stroke="#2D3748" strokeWidth="2" fill="none" />
    <line x1="106" y1="48" x2="112" y2="48" stroke="#2D3748" strokeWidth="2" />
    {/* Eyes */}
    <ellipse cx="99" cy="48" rx="2" ry="3" fill="#2D3748" />
    <ellipse cx="119" cy="48" rx="2" ry="3" fill="#2D3748" />
    {/* Smile */}
    <path d="M104 62 Q110 68 116 62" stroke="#2D3748" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* Hoodie / Top */}
    <path d="M70 85 Q70 78 110 78 Q150 78 150 85 L155 160 Q110 165 65 160 L70 85Z" fill="#3B82F6" />
    {/* Hoodie hood */}
    <path d="M75 85 Q85 75 110 75 Q135 75 145 85" stroke="#2563EB" strokeWidth="4" fill="none" />
    {/* Chair back */}
    <rect x="55" y="130" width="110" height="80" rx="8" fill="#9CA3AF" />
    {/* Sitting body */}
    <ellipse cx="110" cy="190" rx="45" ry="25" fill="#1E40AF" />
    {/* Legs bent */}
    <path d="M75 200 Q60 240 80 260" stroke="#E8C4B8" strokeWidth="16" strokeLinecap="round" />
    <path d="M145 200 Q160 240 140 260" stroke="#E8C4B8" strokeWidth="16" strokeLinecap="round" />
    {/* Shoes */}
    <ellipse cx="85" cy="265" rx="12" ry="7" fill="#1F2937" />
    <ellipse cx="135" cy="265" rx="12" ry="7" fill="#1F2937" />
    {/* Arms holding laptop */}
    <path d="M75 110 Q55 130 60 155" stroke="#E8C4B8" strokeWidth="14" strokeLinecap="round" />
    <path d="M145 110 Q165 130 160 155" stroke="#E8C4B8" strokeWidth="14" strokeLinecap="round" />
    {/* Laptop */}
    <rect x="55" y="145" width="110" height="8" rx="2" fill="#374151" />
    <rect x="60" y="100" width="100" height="50" rx="4" fill="#1F2937" />
    <rect x="65" y="105" width="90" height="40" rx="2" fill="#60A5FA" />
    {/* Screen content */}
    <rect x="70" y="115" width="35" height="4" rx="2" fill="white" />
    <rect x="70" y="125" width="50" height="3" rx="1.5" fill="white" opacity="0.7" />
    <rect x="70" y="132" width="25" height="3" rx="1.5" fill="white" opacity="0.5" />
    {/* Coffee cup nearby */}
    <rect x="175" y="175" width="20" height="25" rx="3" fill="#F59E0B" />
    <ellipse cx="185" cy="175" rx="10" ry="4" fill="#D97706" />
    <path d="M195 180 Q205 185 195 195" stroke="#F59E0B" strokeWidth="3" fill="none" />
  </svg>
)

// Service options
const services = [
  'Web Development',
  'Mobile Apps',
  'AI Solutions',
  'UI/UX Design',
  'Automation',
]

const serviceTypes = [
  'Web Development',
  'Mobile Apps',
  'AI Solutions',
  'Automation',
  'UI/UX Design',
  'Cloud Services',
  'Other',
]

// Where each dropdown choice lands (anchors match the cards on /services)
const serviceRoutes: Record<string, string> = {
  'Web Development': '/services#websites',
  'Mobile Apps': '/services#apps',
  'AI Solutions': '/services#ai-agents',
  'Automation': '/services#automation',
  'UI/UX Design': '/services#design',
}

// Free-text search: first keyword match wins
const keywordRoutes: [RegExp, string][] = [
  [/secur|pentest|audit|vulnerab|hack/i, '/services#security'],
  [/\bai\b|agent|chat ?bot|gpt|llm|machine learning|\bml\b/i, '/services#ai-agents'],
  [/\bapps?\b|android|\bios\b|mobile|flutter|react native/i, '/services#apps'],
  [/automat|workflow|integrat|script|zapier/i, '/services#automation'],
  [/design|\bui\b|\bux\b|figma|brand|logo/i, '/services#design'],
  [/web|site|landing|e-?commerce|shop|store|next\.?js|react|seo/i, '/services#websites'],
  [/portfolio|\bprojects?\b|case stud/i, '/portfolio'],
  [/price|pricing|cost|quote|hire|contact/i, '/contact'],
]

function resolveSearchRoute(service: string, query: string) {
  const q = query.trim()
  if (q) {
    const match = keywordRoutes.find(([re]) => re.test(q))
    if (match) return match[1]
  }
  if (serviceRoutes[service]) return serviceRoutes[service]
  if (service === 'Cloud Services' || service === 'Other' || q) {
    const topic = service !== 'Select Service' ? service : 'General enquiry'
    const params = new URLSearchParams({ service: topic })
    if (q) params.set('message', q)
    return `/contact?${params.toString()}`
  }
  return '/services'
}

export function HeroSection() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedServiceType, setSelectedServiceType] = useState('Select Service')
  const [isServiceTypeOpen, setIsServiceTypeOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close the dropdown on outside tap / Escape, like a native menu
  useEffect(() => {
    if (!isServiceTypeOpen) return
    const onPointerDown = (e: PointerEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServiceTypeOpen(false)
      }
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsServiceTypeOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isServiceTypeOpen])

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault()
    router.push(resolveSearchRoute(selectedServiceType, searchQuery))
  }

  return (
    <section className="relative min-h-screen overflow-hidden px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-36 md:pb-20">
      {/* Colour fields for the glass to pick up */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 left-1/4 w-[28rem] h-[28rem] rounded-full" style={{ background: 'radial-gradient(closest-side, rgba(129,140,248,0.35), transparent)' }} />
        <div className="absolute top-40 right-[12%] w-80 h-80 rounded-full" style={{ background: 'radial-gradient(closest-side, rgba(244,114,182,0.18), transparent)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(closest-side, rgba(52,211,153,0.18), transparent)' }} />
        {/* Soft dotted texture fading out toward the edges */}
        <div
          className="absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]"
          style={{ backgroundImage: 'radial-gradient(rgba(79,70,229,0.18) 1px, transparent 1px)', backgroundSize: '22px 22px' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Hero Content with Floating Illustrations */}
        <div className="relative flex items-center justify-center">
          {/* Left Floating Illustration - Woman with Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block absolute left-0 xl:-left-8 top-1/2 -translate-y-1/2 w-40 xl:w-48 h-auto z-10"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <WomanWithCardIllustration />
            </motion.div>
          </motion.div>

          {/* Center Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-3xl mx-auto px-4 lg:px-20"
          >
            {/* "Latest work" glass badge */}
            {latestProject && (
              <motion.div variants={itemVariants} className="mb-7">
                <Link
                  href="/portfolio"
                  className="lg-chip group pl-1.5 pr-4 py-1.5 text-[13px] text-slate-700 hover:text-slate-900 transition-colors active:scale-[0.97]"
                >
                  <span className="rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-indigo-500 to-violet-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
                    Latest
                  </span>
                  <span className="truncate max-w-[13rem] sm:max-w-none">
                    <span className="font-semibold">{latestProject.name}</span>
                    <span className="hidden sm:inline"> · {latestProject.tagline}</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-indigo-500 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>
            )}

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-[2.6rem] sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-bold tracking-[-0.035em] text-slate-900 leading-[1.04] mb-6"
            >
              Building Digital{' '}
              <span className="relative inline-flex items-center">
                <span className="relative">
                  <span className="text-brand-gradient animate-sheen pb-1">Excellence</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute -bottom-1 left-0 right-0 h-3 -z-10 origin-left rounded-full bg-gradient-to-r from-indigo-200/70 via-violet-200/70 to-sky-200/70 blur-[2px]"
                  />
                </span>
                {/* Inline Sparkle Icon */}
                <motion.span
                  initial={{ opacity: 0, scale: 0, rotate: -30 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 1, duration: 0.5, type: 'spring', stiffness: 260, damping: 14 }}
                  className="inline-flex ml-2"
                >
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 drop-shadow-[0_6px_14px_rgba(99,102,241,0.45)]" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="hero-star" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#6366f1" />
                        <stop offset="1" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#hero-star)" d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z" />
                  </svg>
                </motion.span>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10"
            >
              Expert digital solutions delivered right to your doorstep. From web development 
              to AI integration, we bring skilled professionals to transform your vision.
            </motion.p>

            {/* Search Bar */}
            <motion.form
              variants={searchBarVariants}
              onSubmit={handleSearch}
              role="search"
              // z-30: backdrop-filter makes this a stacking context, so lift it above the photo cards or the dropdown would open underneath them
              className="lg-panel relative z-30 rounded-[24px] p-2 max-w-2xl mx-auto"
              data-testid="hero-search-bar"
            >
              <div className="flex flex-col sm:flex-row gap-2">
                {/* Service Type Dropdown */}
                <div ref={dropdownRef} className="relative flex-shrink-0 sm:w-48">
                  <button
                    type="button"
                    onClick={() => setIsServiceTypeOpen(!isServiceTypeOpen)}
                    aria-haspopup="listbox"
                    aria-expanded={isServiceTypeOpen}
                    className="w-full flex items-center gap-2 px-4 py-3.5 bg-white/70 hover:bg-white active:bg-slate-100 ring-1 ring-black/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,1)] rounded-[16px] text-left transition-colors"
                    data-testid="hero-service-dropdown"
                  >
                    <Briefcase className="w-4 h-4 text-slate-500 flex-shrink-0" />
                    <span className={`text-sm truncate flex-1 ${selectedServiceType === 'Select Service' ? 'text-slate-500' : 'text-slate-800 font-medium'}`}>
                      {selectedServiceType}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ${isServiceTypeOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isServiceTypeOpen && (
                      <motion.div
                        role="listbox"
                        initial={{ opacity: 0, y: -6, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.97 }}
                        transition={{ duration: 0.16, ease: [0.25, 0.1, 0.25, 1] }}
                        className="absolute top-full left-0 right-0 sm:right-auto sm:w-56 mt-2 p-1.5 rounded-[18px] overflow-hidden z-50 origin-top text-left bg-white/[0.97] backdrop-blur-xl ring-1 ring-black/[0.06] shadow-[0_24px_48px_-16px_rgba(30,27,75,0.35),inset_0_1px_0_rgba(255,255,255,1)]"
                      >
                        {serviceTypes.map((service) => {
                          const selected = service === selectedServiceType
                          return (
                            <button
                              type="button"
                              role="option"
                              aria-selected={selected}
                              key={service}
                              onClick={() => {
                                setSelectedServiceType(service)
                                setIsServiceTypeOpen(false)
                              }}
                              className={`relative w-full flex items-center justify-between px-3 py-2.5 rounded-[12px] text-left text-sm transition-colors ${
                                selected ? 'text-indigo-700 bg-indigo-50/90' : 'text-slate-700 hover:bg-white/80 active:bg-slate-100'
                              }`}
                            >
                              {service}
                              {selected && <Check className="w-4 h-4 text-indigo-600" />}
                            </button>
                          )
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Divider */}
                <div className="hidden sm:block w-px bg-slate-900/[0.08] my-2" />

                {/* Search Input */}
                <label className="flex-1 flex items-center gap-2 px-4 py-3.5 cursor-text">
                  <Search className="w-4 h-4 text-slate-500 flex-shrink-0" />
                  <span className="sr-only">What are you looking for?</span>
                  <input
                    type="search"
                    enterKeyHint="search"
                    placeholder="What are you looking for?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 min-w-0 bg-transparent text-slate-800 placeholder:text-slate-500 outline-none text-base sm:text-sm [&::-webkit-search-cancel-button]:hidden"
                    data-testid="hero-search-input"
                  />
                </label>

                {/* Search Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-glossy flex items-center justify-center gap-2 px-6 py-3.5 font-semibold rounded-[16px]"
                  data-testid="hero-search-button"
                >
                  <span>Search</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.form>

            {/* Popular shortcuts */}
            <motion.div
              variants={itemVariants}
              className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm"
            >
              <span className="hidden sm:inline text-slate-500">Popular:</span>
              {popularSearches.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => router.push(resolveSearchRoute(service, ''))}
                  className="lg-chip px-3 sm:px-3.5 py-1.5 text-[12.5px] sm:text-[13px] font-medium text-slate-700 hover:text-indigo-600 active:scale-95 transition-all"
                >
                  {service}
                </button>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Floating Illustration - Person with Laptop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block absolute right-0 xl:-right-8 top-1/2 -translate-y-1/2 w-44 xl:w-52 h-auto z-10"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <PersonWithLaptopIllustration />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section - 3 Horizontal Photo Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
          {/* Card 1 - Large Card (spans 2 cols on large) */}
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="md:col-span-6 lg:col-span-5 relative group cursor-pointer"
          >
            <Link href="/about" aria-label="Skilled experts, reliable service — meet the team" className="block relative h-72 md:h-80 lg:h-96 rounded-[28px] overflow-hidden ring-1 ring-black/5 shadow-[0_24px_50px_-24px_rgba(30,27,75,0.45)] active:scale-[0.98] transition-transform">
              <Image
                src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&q=90"
                alt="Team working in modern office"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
              <div className="absolute inset-0 bg-radial-gradient pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.15) 100%)' }} />
              
              {/* Frosted caption bar */}
              <div className="lg-dark absolute inset-x-3 bottom-3 rounded-[20px] p-4 pl-5 flex items-center gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg lg:text-xl font-semibold text-white leading-snug tracking-tight">
                    Skilled Experts, Reliable Service
                  </h3>
                  <p className="text-white/75 text-sm mt-1 hidden sm:block leading-relaxed">
                    Professional teams ready to deliver
                  </p>
                </div>
                <HeroArrow />
              </div>
            </Link>
          </motion.div>

          {/* Card 2 - Medium with Stats below */}
          <motion.div
            variants={slideFromTop}
            initial="hidden"
            animate="visible"
            className="md:col-span-6 lg:col-span-4 flex flex-col gap-4"
          >
            {/* Photo Card */}
            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="relative group cursor-pointer flex-1"
            >
              <Link href="/contact" aria-label="Fast booking, instant help — contact us" className="block relative h-48 md:h-52 rounded-[28px] overflow-hidden ring-1 ring-black/5 shadow-[0_24px_50px_-24px_rgba(30,27,75,0.45)] active:scale-[0.98] transition-transform">
                <Image
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=90"
                  alt="Professional meeting"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.15) 100%)' }} />
                
                <div className="lg-dark absolute inset-x-3 bottom-3 rounded-[18px] py-2.5 pl-4 pr-2.5 flex items-center gap-3">
                  <h3 className="flex-1 min-w-0 text-base font-semibold text-white leading-snug tracking-tight">
                    Fast Booking, Instant Help
                  </h3>
                  <HeroArrow />
                </div>
              </Link>
            </motion.div>

            {/* Stats Card */}
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="lg-panel rounded-[24px] p-5"
              data-testid="hero-stats-card"
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {['bg-indigo-500', 'bg-emerald-500', 'bg-amber-500'].map((color, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + i * 0.1 }}
                      className={`w-10 h-10 ${color} rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold`}
                    >
                      {['JD', 'AK', 'MR'][i]}
                    </motion.div>
                  ))}
                </div>
                <div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    className="text-3xl font-bold text-slate-900"
                  >
                    98%
                  </motion.p>
                  <p className="text-sm text-slate-500">Customer Satisfaction</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Card 3 - Medium Card */}
          <motion.div
            variants={slideFromRight}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="md:col-span-12 lg:col-span-3 relative group cursor-pointer"
          >
            <Link href="/services" aria-label="Safe, easy, on-demand — explore our services" className="block relative h-72 md:h-64 lg:h-full min-h-[280px] rounded-[28px] overflow-hidden ring-1 ring-black/5 shadow-[0_24px_50px_-24px_rgba(30,27,75,0.45)] active:scale-[0.98] transition-transform">
              <Image
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=90"
                alt="Clean code dev setup"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.15) 100%)' }} />
              
              <div className="lg-dark absolute inset-x-3 bottom-3 rounded-[20px] p-4 flex items-center gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-white leading-snug tracking-tight">
                    Safe, Easy, On-Demand
                  </h3>
                  <p className="text-white/75 text-sm mt-1 leading-relaxed">
                    Digital solutions anytime
                  </p>
                </div>
                <HeroArrow />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating animation keyframes defined in global styles or inline */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 3.5s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 4s ease-in-out infinite 0.5s;
        }
      `}</style>
    </section>
  )
}
