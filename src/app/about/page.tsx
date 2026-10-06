'use client'

import { motion, useInView } from 'framer-motion'
import { Sparkles, Lightbulb, Award, Users, TrendingUp, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'
import { projects, liveProjects } from '@/lib/projects'
import { trackSpotlight } from '@/lib/utils'

// Animated counter hook
function useCounter(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!startOnView || !isInView) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [end, duration, isInView, startOnView])

  return { count, ref }
}

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
  })
}

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
}

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We push boundaries with cutting-edge technology and creative solutions. Every project is an opportunity to innovate and deliver something extraordinary.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
  },
  {
    icon: Award,
    title: 'Uncompromising Quality',
    description: 'Excellence is our standard. From pixel-perfect designs to clean, maintainable code, we never cut corners on quality.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80',
  },
  {
    icon: Users,
    title: 'True Collaboration',
    description: 'We believe the best work happens when we partner closely with our clients. Your vision combined with our expertise creates magic.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Growth',
    description: 'Technology evolves, and so do we. We invest in learning, experimenting, and growing to stay ahead of the curve.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  },
]

interface TeamMember {
  name: string
  initials: string
  role: string
  bio: string
  /** Path under /public/team. If missing, a gradient initials tile is shown instead. */
  photo?: string
  /** Gradient for the initials tile */
  gradient: string
}

const team: TeamMember[] = [
  {
    name: 'D Manoj Bharadwaj',
    initials: 'MB',
    photo: '/team/manoj.jpg',
    role: 'Gen AI Developer & Full Stack Engineer',
    bio: 'Passionate about building AI-powered experiences that feel magical. Combines deep learning expertise with full-stack development skills.',
    gradient: 'from-indigo-500 to-purple-600',
  },
  {
    name: 'R Kushal Kumar',
    initials: 'KK',
    photo: '/team/kushal.jpg',
    role: 'CTO & Security Engineer',
    bio: 'Thinks like an attacker so your systems stay secure. Leads technical strategy while ensuring rock-solid security foundations.',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'Akhil Krishna Prasad',
    initials: 'AK',
    photo: '/team/akhil.jpg',
    role: 'Security Engineer & UI/UX Designer',
    bio: 'Where security meets beautiful design. Creates interfaces that are both stunning and unbreakable.',
    gradient: 'from-violet-500 to-fuchsia-600',
  },
  {
    name: 'Chakradhar Reddy',
    initials: 'CR',
    photo: '/team/chakradhar.jpg',
    role: 'Back End Engineer',
    bio: 'Architecting robust backends that scale effortlessly. Expert in building high-performance APIs and database systems.',
    gradient: 'from-sky-500 to-indigo-600',
  },
]

// Real numbers only — derived from the portfolio data so they stay accurate as projects are added
const stats = [
  { value: projects.length, suffix: '', label: 'Products Built' },
  { value: liveProjects.length, suffix: '', label: 'Live in Production' },
  { value: team.length, suffix: '', label: 'Core Team Members' },
  { value: 2, suffix: '', label: 'App Platforms', hint: 'Android & iOS' },
]

// Floating illustration components
const FloatingIllustration1 = () => (
  <motion.div
    className="absolute left-0 top-1/4 w-32 md:w-48 opacity-60 hidden md:block pointer-events-none"
    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
  >
    <svg viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="40" width="80" height="100" rx="8" fill="url(#grad1)" />
      <rect x="20" y="55" width="60" height="8" rx="4" fill="white" fillOpacity="0.3" />
      <rect x="20" y="70" width="40" height="6" rx="3" fill="white" fillOpacity="0.2" />
      <rect x="20" y="85" width="50" height="6" rx="3" fill="white" fillOpacity="0.2" />
      <circle cx="85" cy="30" r="25" fill="url(#grad2)" />
      <path d="M75 30 L85 20 L95 30 L85 40 Z" fill="white" fillOpacity="0.4" />
      <defs>
        <linearGradient id="grad1" x1="10" y1="40" x2="90" y2="140">
          <stop stopColor="#D4AF37" stopOpacity="0.3" />
          <stop offset="1" stopColor="#D4AF37" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="grad2" x1="60" y1="5" x2="110" y2="55">
          <stop stopColor="#10B981" stopOpacity="0.4" />
          <stop offset="1" stopColor="#10B981" stopOpacity="0.1" />
        </linearGradient>
      </defs>
    </svg>
  </motion.div>
)

const FloatingIllustration2 = () => (
  <motion.div
    className="absolute right-0 top-1/3 w-32 md:w-44 opacity-60 hidden md:block pointer-events-none"
    animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
  >
    <svg viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="url(#grad3)" />
      <circle cx="50" cy="50" r="25" stroke="white" strokeOpacity="0.2" strokeWidth="2" fill="none" />
      <rect x="20" y="100" width="60" height="30" rx="6" fill="url(#grad4)" />
      <rect x="30" y="108" width="40" height="4" rx="2" fill="white" fillOpacity="0.3" />
      <rect x="30" y="118" width="25" height="4" rx="2" fill="white" fillOpacity="0.2" />
      <defs>
        <linearGradient id="grad3" x1="10" y1="10" x2="90" y2="90">
          <stop stopColor="#8B5CF6" stopOpacity="0.3" />
          <stop offset="1" stopColor="#8B5CF6" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="grad4" x1="20" y1="100" x2="80" y2="130">
          <stop stopColor="#D4AF37" stopOpacity="0.25" />
          <stop offset="1" stopColor="#D4AF37" stopOpacity="0.08" />
        </linearGradient>
      </defs>
    </svg>
  </motion.div>
)

// Stat Card Component
function StatCard({ value, suffix, label, hint, index }: { value: number; suffix: string; label: string; hint?: string; index: number }) {
  const { count, ref } = useCounter(value, 1200)

  return (
    <motion.div
      ref={ref}
      className="lg-panel spotlight rounded-[28px] p-6 md:p-8 text-center flex flex-col justify-center
                 transition-shadow duration-500 hover:[box-shadow:var(--lg-shadow-hover)]"
      onPointerMove={trackSpotlight}
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      <p className="relative font-serif text-5xl md:text-6xl font-bold text-brand-gradient mb-3 lining-nums tabular-nums">
        {count}{suffix}
      </p>
      <p className="text-sm text-slate-600 tracking-wide uppercase">{label}</p>
      {hint && <p className="text-xs text-slate-400 mt-1">{hint}</p>}
    </motion.div>
  )
}

// Icon background colors for value cards
const valueIconColors = [
  { bg: 'bg-indigo-100', icon: 'text-indigo-600' },
  { bg: 'bg-emerald-100', icon: 'text-emerald-600' },
  { bg: 'bg-amber-100', icon: 'text-amber-600' },
  { bg: 'bg-purple-100', icon: 'text-purple-600' },
]

// Value Card Component (Horizontal)
function ValueCard({ value, index }: { value: typeof values[0]; index: number }) {
  const isReversed = index % 2 === 1
  const colors = valueIconColors[index % valueIconColors.length]
  
  return (
    <motion.div
      className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} 
                  lg-panel rounded-[32px] overflow-hidden group p-2
                  transition-shadow duration-500 hover:[box-shadow:var(--lg-shadow-hover)]`}
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -5 }}
    >
      {/* Image Side - 50% */}
      <div className="relative w-full md:w-1/2 h-64 md:h-80 overflow-hidden rounded-[26px]">
        <Image
          src={value.image}
          alt={value.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      {/* Text Side - 50% */}
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        <div className={`w-14 h-14 rounded-[16px] flex items-center justify-center ${colors.bg} mb-6 ring-1 ring-white shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_20px_-10px_rgba(79,70,229,0.4)]`}>
          <value.icon className={`w-7 h-7 ${colors.icon}`} />
        </div>
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-4">
          {value.title}
        </h3>
        <p className="text-slate-600 leading-relaxed text-base md:text-lg">
          {value.description}
        </p>
      </div>
    </motion.div>
  )
}

// Team Member Card Component
function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.div
      className="flex flex-row lg-panel rounded-[30px] overflow-hidden group p-2
                 transition-shadow duration-500 hover:[box-shadow:var(--lg-shadow-hover)]"
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -5 }}
    >
      {/* Photo Side */}
      <div className="relative w-28 sm:w-40 md:w-48 min-h-[11rem] shrink-0 overflow-hidden rounded-[24px]">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 112px, 200px"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div
            className={`absolute inset-0 flex items-center justify-center bg-linear-to-br ${member.gradient}`}
            role="img"
            aria-label={member.name}
          >
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white_0%,transparent_55%)]" />
            <span className="relative font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight transition-transform duration-700 group-hover:scale-110">
              {member.initials}
            </span>
          </div>
        )}
      </div>
      
      {/* Info Side */}
      <div className="p-5 sm:p-6 md:p-8 flex flex-col justify-center">
        <h4 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mb-1">
          {member.name}
        </h4>
        <p className="text-indigo-600 text-sm font-medium mb-4 tracking-wide">
          {member.role}
        </p>
        <p className="text-slate-600 text-sm leading-relaxed">
          {member.bio}
        </p>
      </div>
    </motion.div>
  )
}

export default function AboutPage() {
  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[54vh] md:min-h-[60vh] flex flex-col justify-center items-center px-6 md:px-12 pt-28 pb-6 md:pb-10">
        <FloatingIllustration1 />
        <FloatingIllustration2 />
        
        <motion.div
          className="text-center max-w-4xl mx-auto relative z-10"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="mb-6">
            <span className="lg-chip px-4 py-2 text-indigo-600 text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              About Us
            </span>
          </motion.div>
          
          <motion.h1 
            variants={fadeUp}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-6 leading-[1.1]"
          >
            About <span className="inline-flex items-center gap-3 text-brand-gradient animate-sheen pr-1">
              PixelCraft
              <Sparkles className="w-10 h-10 md:w-14 md:h-14 text-violet-500 drop-shadow-[0_6px_14px_rgba(139,92,246,0.45)]" />
            </span>
          </motion.h1>
          
          <motion.p 
            variants={fadeUp}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            We&apos;re a boutique digital studio based in Tirupati, India. Every creation is born 
            from our obsession with detail, beauty, and function.
          </motion.p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
        >
          {stats.map((stat, index) => (
            <StatCard key={stat.label} {...stat} index={index} />
          ))}
        </motion.div>
      </section>

      {/* Values Section - Horizontal Cards */}
      <section className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.span 
            variants={fadeUp}
            className="lg-chip px-4 py-2 text-indigo-600 text-sm font-semibold mb-6"
          >
            Our Values
          </motion.span>
          <motion.h2 
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900"
          >
            What <em className="text-brand-gradient pr-1">Drives</em> Us
          </motion.h2>
        </motion.div>
        
        <motion.div 
          className="flex flex-col gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
        >
          {values.map((value, index) => (
            <ValueCard key={value.title} value={value} index={index} />
          ))}
        </motion.div>
      </section>

      {/* Team Section */}
      <section id="team" className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.span 
            variants={fadeUp}
            className="lg-chip px-4 py-2 text-indigo-600 text-sm font-semibold mb-6"
          >
            Meet the Makers
          </motion.span>
          <motion.h2 
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4"
          >
            The <em className="text-brand-gradient pr-1">Team</em> Behind Every Pixel
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            className="text-lg text-slate-600 max-w-xl mx-auto"
          >
            Four passionate creators who live and breathe digital craft.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
        >
          {team.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </motion.div>
      </section>

      {/* Story Section - Full Width with Background */}
      <section className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <motion.div
          className="relative max-w-6xl mx-auto rounded-[36px] overflow-hidden ring-1 ring-black/5 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.6)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
              alt="Office workspace"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/80 to-black/60" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 p-8 md:p-16 lg:p-20">
            <motion.span 
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                         lg-dark text-white text-sm font-medium mb-6"
            >
              Our Story
            </motion.span>
            
            <motion.h2 
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 max-w-2xl"
            >
              From <em className="text-amber-400">Passion</em> to <em className="text-amber-400">Profession</em>
            </motion.h2>
            
            <motion.div 
              variants={fadeUp}
              className="space-y-4 text-white/80 leading-relaxed max-w-2xl text-base md:text-lg"
            >
              <p>
                PixelCraft was born from a simple belief: that digital products should be both
                beautiful and functional. We started as a group of college friends who shared a
                passion for crafting exceptional digital experiences.
              </p>
              <p>
                Based in Tirupati, India, we&apos;ve grown from building projects for fun to
                delivering solutions for startups and enterprises alike. Our journey has taught us
                that the best products come from teams that genuinely care about every detail.
              </p>
              <p>
                Today, we specialize in websites, mobile apps, automation solutions, and AI
                agents. But at our core, we&apos;re still those passionate builders who believe
                that every pixel matters.
              </p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full 
                           btn-glossy font-semibold
                           group"
              >
                Start a Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
