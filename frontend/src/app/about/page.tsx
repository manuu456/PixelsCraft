import { Metadata } from 'next'
import { SectionHeader, GlassCard } from '@/components/ui'
import { Lightbulb, Heart, Rocket, Users } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = { title: 'About Us — PixelCraft', description: 'Meet the team behind PixelCraft.' }

const values = [
  { icon: Lightbulb, title: 'Design-First Philosophy', description: 'Every screen begins with a blank canvas and a bold vision. Beautiful interfaces are not a luxury — they are the product.' },
  { icon: Heart, title: 'Passion for Craft', description: "We don't just build software; we craft experiences. Every pixel, every interaction, every line of code is infused with intention." },
  { icon: Rocket, title: 'Built to Scale', description: 'Robust architectures that handle your growth gracefully. From prototype to millions of users — we architect for tomorrow.' },
  { icon: Users, title: 'Partners, Not Vendors', description: 'We invest in your success as if it were our own. Your goals become our goals, and we celebrate your wins together.' },
]

const team = [
  { name: 'D Manoj Bharadwaj', roles: ['Gen AI Developer', 'Full Stack'], bio: 'Passionate about building AI-powered experiences.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=75&auto=format&fit=crop' },
  { name: 'R Kushal Kumar', roles: ['Security Engineer', 'CTO'], bio: 'Thinks like an attacker so your systems stay secure.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=75&auto=format&fit=crop' },
  { name: 'Akhil Krishna Prasad', roles: ['Security', 'UI/UX Design'], bio: 'Where security meets beautiful design.', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=75&auto=format&fit=crop' },
  { name: 'Chakradhar Reddy', roles: ['Back End Engineer'], bio: 'Architecting robust backends that scale effortlessly.', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=75&auto=format&fit=crop' },
]

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '4', label: 'Team Members' },
  { value: '100%', label: 'Client Satisfaction' },
]

export default function AboutPage() {
  return (
    <div data-testid="about-page">
      {/* Hero */}
      <div className="page-hero px-6 md:px-12 lg:px-24 flex flex-col items-center text-center">
        <div className="absolute inset-0 z-0">
          <img src="https://static.prod-images.emergentagent.com/jobs/c9e6853e-20f6-47e3-abf0-1943be61c72a/images/8dfa3499dcbb59bb27728a9367f922317674a332e595d4e5ac3354850a1fe61e.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--void)]/20 via-[var(--void)]/60 to-[var(--void)]" />
        </div>
        <div className="relative z-10">
          <SectionHeader label="About PixelCraft" title={<>Crafting Digital Worlds<br />with Purpose</>} subtitle="We're a boutique digital studio based in Tirupati, India. Every creation is born from our obsession with detail, beauty, and function." />
        </div>
      </div>

      {/* Stats */}
      <section className="px-6 md:px-12 lg:px-24 pb-20 -mt-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <GlassCard key={stat.label} className="text-center py-8 rounded-2xl" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <p className="font-heading text-4xl md:text-5xl font-bold text-gold-shine drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">{stat.value}</p>
                <p className="text-sm text-[var(--text-secondary)] mt-2">{stat.label}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 md:px-12 lg:px-24 py-20 section-glow">
        <div className="gold-divider mb-20 max-w-4xl mx-auto" />
        <div className="max-w-[1140px] mx-auto">
          <p className="section-overline text-center mb-3">Our Values</p>
          <h2 className="section-heading text-3xl md:text-4xl text-center mb-12">What Drives Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((v) => (
              <GlassCard key={v.title} className="flex gap-5 rounded-2xl" data-testid={`value-${v.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold)] text-[var(--void)] rounded-xl flex-shrink-0 shadow-[0_4px_20px_rgba(212,175,55,0.35)]">
                  <v.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-semibold text-[var(--text-primary)] mb-2">{v.title}</h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{v.description}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 md:px-12 lg:px-24 py-20 section-glow" data-testid="team-section">
        <div className="gold-divider mb-20 max-w-4xl mx-auto" />
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <SectionHeader label="Meet the Makers" title={<>The Team Behind Every Pixel</>} subtitle="Four passionate creators who live and breathe digital craft." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
            {team.map((m) => (
              <GlassCard key={m.name} className="text-center rounded-2xl" data-testid={`team-member-${m.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="relative w-20 h-20 mx-auto overflow-hidden rounded-full mb-5 ring-2 ring-[var(--gold)]/30 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                  <Image src={m.avatar} alt={m.name} fill sizes="80px" className="object-cover" />
                </div>
                <h4 className="font-heading text-base font-semibold text-[var(--text-primary)] mb-1">{m.name}</h4>
                <p className="text-xs text-[var(--text-secondary)] mb-4 leading-relaxed">{m.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {m.roles.map((role) => (<span key={role} className="gold-badge text-[9px] py-1 px-2.5">{role}</span>))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 md:px-12 lg:px-24 py-20" data-testid="story-section">
        <div className="gold-divider mb-20 max-w-4xl mx-auto" />
        <div className="max-w-3xl mx-auto">
          <GlassCard className="p-8 md:p-12 rounded-2xl">
            <p className="section-overline mb-3">Our Story</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tighter text-[var(--text-primary)] mb-6">From Passion to Profession</h2>
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed text-[15px]">
              <p>PixelCraft was born from a simple belief: that digital products should be both beautiful and functional. We started as a group of college friends who shared a passion for crafting exceptional digital experiences.</p>
              <p>Based in Tirupati, India, we&apos;ve grown from building projects for fun to delivering solutions for startups and enterprises alike. Our journey has taught us that the best products come from teams that genuinely care about every detail.</p>
              <p>Today, we specialize in websites, mobile apps, automation solutions, and AI agents. But at our core, we&apos;re still those passionate builders who believe that every pixel matters.</p>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  )
}
