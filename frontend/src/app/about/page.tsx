import { Metadata } from 'next'
import { Lightbulb, Heart, Rocket, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us — PixelCraft',
  description: 'Meet the team behind PixelCraft. Based in Tirupati, India.',
}

const values = [
  { icon: Lightbulb, title: 'Design-First', description: 'Every screen begins with a blank canvas and a bold vision. Beautiful interfaces are the product.' },
  { icon: Heart, title: 'Passion for Craft', description: "We don't just build software; we craft experiences. Every pixel, every interaction is intentional." },
  { icon: Rocket, title: 'Built to Scale', description: 'Robust architectures that handle your growth. From prototype to millions of users.' },
  { icon: Users, title: 'Partners, Not Vendors', description: 'We invest in your success as our own. Your goals become our goals.' },
]

const team = [
  { name: 'D Manoj Bharadwaj', role: 'Gen AI Developer & Full Stack' },
  { name: 'R Kushal Kumar', role: 'Security Engineer & CTO' },
  { name: 'Akhil Krishna Prasad', role: 'Security & UI/UX Design' },
  { name: 'Chakradhar Reddy', role: 'Back End Engineer' },
]

export default function AboutPage() {
  return (
    <div data-testid="about-page" className="pt-28 pb-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">About PixelCraft</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#ededed] mb-5">
            Crafting digital worlds with purpose
          </h1>
          <p className="text-base text-[#888] leading-relaxed">
            We&apos;re a boutique digital studio based in Tirupati, India. Every creation is born from our obsession with detail, beauty, and function.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden mb-20">
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '30+', label: 'Happy Clients' },
            { value: '4', label: 'Team Members' },
            { value: '100%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`} className="bg-black p-8 text-center">
              <p className="text-3xl font-bold text-[#ededed] mb-1">{stat.value}</p>
              <p className="text-xs text-[#888]">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-20">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">Our Values</p>
          <h2 className="text-3xl font-bold tracking-tight text-[#ededed] mb-10">What Drives Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} data-testid={`value-${v.title.toLowerCase().replace(/\s+/g, '-')}`} className="border border-[rgba(255,255,255,0.06)] rounded-xl p-7">
                <v.icon className="w-5 h-5 text-gold mb-4" />
                <h3 className="text-base font-semibold text-[#ededed] mb-2">{v.title}</h3>
                <p className="text-sm text-[#888] leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20" data-testid="team-section">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">The Team</p>
          <h2 className="text-3xl font-bold tracking-tight text-[#ededed] mb-10">Meet the Makers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <div key={m.name} data-testid={`team-member-${m.name.toLowerCase().replace(/\s+/g, '-')}`} className="border border-[rgba(255,255,255,0.06)] rounded-xl p-7">
                <div className="w-10 h-10 bg-[#111] rounded-full flex items-center justify-center text-gold font-bold text-sm mb-4">
                  {m.name.charAt(0)}
                </div>
                <h3 className="text-sm font-semibold text-[#ededed] mb-1">{m.name}</h3>
                <p className="text-xs text-[#888]">{m.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story */}
        <div data-testid="story-section" className="border border-[rgba(255,255,255,0.06)] rounded-xl p-8 md:p-12 max-w-3xl">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">Our Story</p>
          <h2 className="text-2xl font-bold tracking-tight text-[#ededed] mb-6">From Passion to Profession</h2>
          <div className="space-y-4 text-sm text-[#888] leading-relaxed">
            <p>PixelCraft was born from a simple belief: that digital products should be both beautiful and functional. We started as a group of college friends who shared a passion for crafting exceptional digital experiences.</p>
            <p>Based in Tirupati, India, we&apos;ve grown from building projects for fun to delivering solutions for startups and enterprises alike. Our journey has taught us that the best products come from teams that genuinely care about every detail.</p>
            <p>Today, we specialize in websites, mobile apps, automation solutions, and AI agents. But at our core, we&apos;re still those passionate builders who believe that every pixel matters.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
