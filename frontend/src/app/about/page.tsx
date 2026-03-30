import { Metadata } from 'next'
import { Section, SectionHeader, GlassCard } from '@/components/ui'
import { Lightbulb, Heart, Rocket, Users } from 'lucide-react'
import Image from 'next/image'
import { BLUR_DATA_URL_DARK } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Us — PixelCraft',
  description:
    'Meet the team behind PixelCraft. We are passionate developers, designers, and creators building digital excellence.',
}

const values = [
  {
    icon: Lightbulb,
    title: 'Design-First Philosophy',
    description:
      'Every screen we touch begins with a blank canvas and a bold vision. We believe beautiful interfaces aren\'t a luxury — they\'re the product itself.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=75&auto=format&fit=crop',
  },
  {
    icon: Heart,
    title: 'Passion for Craft',
    description:
      'We don\'t just build software; we craft experiences. Every pixel, every interaction, every line of code is infused with intention and care.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=75&auto=format&fit=crop',
  },
  {
    icon: Rocket,
    title: 'Built to Scale',
    description:
      'Robust architectures that handle your growth gracefully. From prototype to millions of users — we architect for tomorrow, today.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=75&auto=format&fit=crop',
  },
  {
    icon: Users,
    title: 'Partners, Not Vendors',
    description:
      'We invest in your success as if it were our own. Your goals become our goals, and we celebrate your wins together.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=75&auto=format&fit=crop',
  },
]

const team = [
  {
    name: 'D Manoj Bharadwaj',
    roles: ['Gen AI Developer', 'Full Stack Engineer'],
    gradient: 'from-[var(--gold)] to-amber-600',
    bio: 'Passionate about building AI-powered experiences that feel magical.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=75&auto=format&fit=crop',
  },
  {
    name: 'R Kushal Kumar',
    roles: ['Security Engineer', 'CTO'],
    gradient: 'from-[var(--gold)] to-amber-600',
    bio: 'Thinks like an attacker so your systems stay secure.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=75&auto=format&fit=crop',
  },
  {
    name: 'Akhil Krishna Prasad',
    roles: ['Security Engineer', 'UI/UX Designer'],
    gradient: 'from-[var(--gold)] to-amber-600',
    bio: 'Where security meets beautiful design.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=75&auto=format&fit=crop',
  },
  {
    name: 'Chakradhar Reddy',
    roles: ['Back End Engineer'],
    gradient: 'from-[var(--gold)] to-amber-600',
    bio: 'Architecting robust backends that scale effortlessly.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=75&auto=format&fit=crop',
  },
]

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '4', label: 'Team Members' },
  { value: '100%', label: 'Client Satisfaction' },
]

export default function AboutPage() {
  return (
    <div className="pt-28">
      {/* Hero Section */}
      <Section>
        <SectionHeader
          label="About PixelCraft"
          title={
            <>
              Crafting <em>Digital Worlds</em>
              <br />
              with Purpose
            </>
          }
          subtitle="We're a boutique digital studio based in Tirupati, India. Every creation is born from our obsession with detail, beauty, and function."
        />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl w-full mb-20">
          {stats.map((stat) => (
            <GlassCard key={stat.label} className="text-center py-8">
              <p className="font-serif text-4xl md:text-5xl font-bold text-[var(--gold)] mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-[var(--text-mid)]">{stat.label}</p>
            </GlassCard>
          ))}
        </div>

        {/* Values */}
        <div className="max-w-6xl w-full">
          <h3 className="section-label text-center mb-4">Our Values</h3>
          <h2 className="section-title text-3xl md:text-4xl text-center mb-12">
            What <em>Drives</em> Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <GlassCard key={value.title} className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[var(--gold)]/20 to-[var(--gold)]/5 border border-[var(--gold)]/20 flex-shrink-0">
                  <value.icon className="w-6 h-6 text-[var(--gold)]" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-semibold text-[var(--text-dark)] mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-[var(--text-mid)] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section>
        <SectionHeader
          label="Meet the Makers"
          title={
            <>
              The <em>Team</em> Behind
              <br />
              Every Pixel
            </>
          }
          subtitle="Four passionate creators who live and breathe digital craft."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl w-full">
          {team.map((member) => (
            <GlassCard key={member.name} className="text-center">
              {/* Avatar */}
              <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden mb-5 ring-4 ring-[var(--gold)]/30">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  sizes="96px"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL_DARK}
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <h4 className="font-serif text-lg font-semibold text-[var(--text-dark)] mb-2">
                {member.name}
              </h4>
              <p className="text-xs text-[var(--text-mid)] mb-4 leading-relaxed">
                {member.bio}
              </p>

              {/* Roles */}
              <div className="flex flex-wrap gap-2 justify-center">
                {member.roles.map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1 text-xs font-medium text-[var(--gold)] bg-[rgba(245,197,24,0.1)] border border-[rgba(245,197,24,0.2)] rounded-full"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Story Section */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <GlassCard className="p-8 md:p-12">
            <h3 className="section-label mb-4">Our Story</h3>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--text-dark)] mb-6">
              From <em>Passion</em> to <em>Profession</em>
            </h2>
            <div className="space-y-4 text-[var(--text-mid)] leading-relaxed">
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
            </div>
          </GlassCard>
        </div>
      </Section>
    </div>
  )
}
