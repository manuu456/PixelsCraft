'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Smartphone, Zap, Bot, Palette, Shield, Cloud, GitBranch, LucideIcon, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { SegmentedControl } from '@/components/ui'

type TabId = 'popular' | 'skills' | 'trending'

interface ServiceItem {
  icon: LucideIcon
  title: string
  description: string
  image: string
  /** Where tapping the card goes; defaults to the services page */
  href?: string
}

interface TabConfig {
  id: TabId
  label: string
}

const tabs: TabConfig[] = [
  { id: 'popular', label: 'Popular' },
  { id: 'skills', label: 'Top Skills' },
  { id: 'trending', label: 'Trending' },
]

// Card color palette - cycling through these 4 colors
const cardColors = [
  { bg: '#4A1A2C', textLight: true },   // Dark maroon
  { bg: '#E8B4CB', textLight: false },  // Lavender pink
  { bg: '#4338CA', textLight: true },   // Indigo blue
  { bg: '#A7F3D0', textLight: false },  // Mint green
]

const servicesData: Record<TabId, ServiceItem[]> = {
  popular: [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom websites built with Next.js, React & modern tech. Fast, SEO-optimized.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=90',
      href: '/services#websites',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform apps for iOS and Android with smooth performance.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&q=90',
      href: '/services#apps',
    },
    {
      icon: Bot,
      title: 'AI Solutions',
      description: 'Intelligent AI solutions powered by GPT-4, Claude & cutting-edge LLMs.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&q=90',
      href: '/services#ai-agents',
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Streamline operations. Connect systems, eliminate manual tasks.',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&q=80',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design that captures your brand. From wireframes to systems.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80',
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Comprehensive security reviews to protect your digital assets.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&q=80',
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure on AWS, Azure, and Google Cloud.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80',
    },
    {
      icon: GitBranch,
      title: 'DevOps',
      description: 'CI/CD pipelines, containerization, and infrastructure as code.',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&q=80',
    },
  ],
  skills: [
    {
      icon: Globe,
      title: 'React & Next.js',
      description: 'Modern frontend development with React ecosystem and server components.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&q=90',
    },
    {
      icon: Bot,
      title: 'Python & ML',
      description: 'Machine learning, data science, and AI development with Python.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&q=90',
    },
    {
      icon: Cloud,
      title: 'AWS & Cloud',
      description: 'Cloud architecture and deployment on major cloud platforms.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&q=90',
    },
    {
      icon: GitBranch,
      title: 'Node.js & APIs',
      description: 'Backend development with Node.js, Express, and REST/GraphQL APIs.',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&q=80',
    },
    {
      icon: Smartphone,
      title: 'React Native',
      description: 'Cross-platform mobile development with React Native.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80',
    },
    {
      icon: Palette,
      title: 'Figma & Design',
      description: 'UI/UX design, prototyping, and design system creation.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80',
    },
    {
      icon: Shield,
      title: 'TypeScript',
      description: 'Type-safe development with TypeScript for scalable applications.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&q=80',
    },
    {
      icon: Zap,
      title: 'Docker & K8s',
      description: 'Container orchestration with Docker and Kubernetes.',
      image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&q=80',
    },
  ],
  trending: [
    {
      icon: Bot,
      title: 'LLM Integration',
      description: 'Integrate GPT-4, Claude, and other LLMs into your applications.',
      image: 'https://images.unsplash.com/photo-1676299081847-5c6e87c397dc?w=500&q=90',
    },
    {
      icon: Zap,
      title: 'RAG Systems',
      description: 'Retrieval-augmented generation for intelligent document processing.',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=500&q=90',
    },
    {
      icon: Globe,
      title: 'Edge Computing',
      description: 'Deploy applications at the edge for ultra-low latency.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&q=90',
    },
    {
      icon: Shield,
      title: 'Zero Trust Security',
      description: 'Modern security architecture with zero trust principles.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&q=80',
    },
    {
      icon: Smartphone,
      title: 'Flutter',
      description: 'Beautiful cross-platform apps with Flutter and Dart.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80',
    },
    {
      icon: Cloud,
      title: 'Serverless',
      description: 'Event-driven serverless architecture for scalable backends.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80',
    },
    {
      icon: Palette,
      title: '3D & WebGL',
      description: 'Immersive 3D experiences with Three.js and WebGL.',
      image: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=400&q=80',
    },
    {
      icon: GitBranch,
      title: 'Web3 & Blockchain',
      description: 'Decentralized applications and smart contract development.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&q=80',
    },
  ],
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
}

interface ServiceCardProps {
  service: ServiceItem
  colorIndex: number
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
}

function ServiceCard({ service, colorIndex, isHovered, onHover, onLeave }: ServiceCardProps) {
  const color = cardColors[colorIndex % cardColors.length]
  const Icon = service.icon
  
  return (
    <motion.div
      variants={cardVariants}
      className="relative rounded-[28px] min-h-[200px] lg:min-h-[280px] flex flex-row overflow-hidden cursor-pointer shadow-[0_24px_48px_-26px_rgba(15,23,42,0.55)]"
      style={{
        backgroundColor: color.bg,
        backgroundImage: `radial-gradient(120% 90% at 100% 0%, rgba(255,255,255,${color.textLight ? 0.16 : 0.45}) 0%, transparent 55%)`,
        flex: isHovered ? 2 : 1,
        transition: 'flex 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      {/* Glass rim + top sheen */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ${color.textLight ? 'ring-white/15' : 'ring-white/50'} shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]`}
      />
      <Link
        href={service.href ?? '/services'}
        className="relative flex flex-row flex-1 min-w-0 rounded-[28px] focus-visible:outline-offset-[-4px]"
        aria-label={`${service.title} — learn more`}
      >
      {/* Left content - fixed width on desktop so the hover image can expand beside it */}
      <div className="w-full lg:w-56 shrink-0 p-6 flex flex-col justify-between gap-8">
        {/* Icon container */}
        <div className="flex items-center justify-between">
          <div
            className={`w-12 h-12 rounded-[14px] flex items-center justify-center backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] ring-1 ${
              color.textLight ? 'bg-white/15 ring-white/25' : 'bg-white/40 ring-white/60'
            }`}
          >
            <Icon
              className={`w-6 h-6 ${color.textLight ? 'text-white' : 'text-gray-800'}`}
            />
          </div>
          {/* Tap affordance on touch screens (desktop shows the hover image instead) */}
          <span
            aria-hidden="true"
            className={`lg:hidden w-9 h-9 rounded-full flex items-center justify-center ring-1 ${
              color.textLight ? 'bg-white/15 ring-white/25' : 'bg-white/45 ring-white/60'
            }`}
          >
            <ArrowRight className={`w-4 h-4 -rotate-45 ${color.textLight ? 'text-white' : 'text-gray-800'}`} />
          </span>
        </div>

        {/* Title & Description */}
        <div className="space-y-3">
          <h3 
            className={`text-xl font-bold leading-tight ${
              color.textLight ? 'text-white' : 'text-gray-900'
            }`}
          >
            {service.title}
          </h3>
          <p 
            className={`text-sm leading-relaxed ${
              color.textLight ? 'text-white/80' : 'text-gray-700'
            }`}
          >
            {service.description}
          </p>
        </div>
      </div>

      {/* Image area - expands to fill remaining space (desktop hover only) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden lg:flex flex-1 p-4 items-center justify-center"
          >
            <div className="relative w-full h-48 md:h-56">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="rounded-[20px] object-cover shadow-2xl ring-1 ring-white/30"
                sizes="(max-width: 768px) 160px, 192px"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </Link>
    </motion.div>
  )
}

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState<TabId>('popular')
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Get first 3 services - when one is hovered (flex: 2), it expands while others stay at flex: 1
  const currentServices = servicesData[activeTab].slice(0, 3)

  return (
    <section id="services" className="relative py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Top row: Tabs on left, Description + Button on right */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-6">
            {/* Left side: Tabs and Title */}
            <div className="space-y-4">
              {/* Pill Tabs */}
              <SegmentedControl
                className="justify-start"
                tone="dark"
                ariaLabel="Service categories"
                options={tabs.map((tab) => ({ value: tab.id, label: tab.label }))}
                value={activeTab}
                onChange={(tab) => {
                  setActiveTab(tab)
                  setHoveredIndex(null)
                }}
              />
              
              {/* Large Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 max-w-md leading-tight">
                Check out our top services for you.
              </h2>
            </div>
            
            {/* Right side: Description and Button */}
            <div className="lg:max-w-sm space-y-4 lg:text-right">
              <p className="text-gray-600 leading-relaxed">
                From concept to deployment, we build products that users love and businesses rely on. 
                Explore our expertise across modern technologies.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-full font-medium bg-linear-to-b from-gray-700 to-gray-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_12px_26px_-12px_rgba(0,0,0,0.7)] hover:brightness-125 active:scale-[0.97] transition-all group"
              >
                Explore Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Service Cards - Flex row with expand on hover */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col lg:flex-row gap-4"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {currentServices.map((service, index) => (
              <ServiceCard
                key={`${activeTab}-${service.title}`}
                service={service}
                colorIndex={index}
                isHovered={hoveredIndex === index}
                onHover={() => setHoveredIndex(index)}
                onLeave={() => {}}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
