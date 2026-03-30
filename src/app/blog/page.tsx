import { Metadata } from 'next'
import { Section, SectionHeader, GlassCard } from '@/components/ui'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { BLUR_DATA_URL_DARK } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Blog — PixelCraft',
  description:
    'Insights on web development, mobile apps, AI, automation, and digital design from the PixelCraft team.',
}

const posts = [
  {
    title: 'Building AI Agents That Actually Work',
    excerpt:
      'A deep dive into creating AI agents that provide real value, from choosing the right LLM to designing effective prompts.',
    category: 'AI & Machine Learning',
    date: '2025-03-15',
    readTime: '8 min',
    slug: 'building-ai-agents-that-work',
    featured: true,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=75&auto=format&fit=crop',
  },
  {
    title: 'The Art of Glassmorphism in Modern UI',
    excerpt:
      'How to create stunning glass-like interfaces that are both beautiful and accessible.',
    category: 'Design',
    date: '2025-03-10',
    readTime: '5 min',
    slug: 'glassmorphism-modern-ui',
    featured: true,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=75&auto=format&fit=crop',
  },
  {
    title: 'Next.js 14: Everything You Need to Know',
    excerpt:
      'A comprehensive guide to the latest features in Next.js 14 and how to leverage them in your projects.',
    category: 'Web Development',
    date: '2025-03-05',
    readTime: '10 min',
    slug: 'nextjs-14-guide',
    featured: false,
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=75&auto=format&fit=crop',
  },
  {
    title: 'Automating Your Business: Where to Start',
    excerpt:
      'A practical guide to identifying automation opportunities and implementing them effectively.',
    category: 'Automation',
    date: '2025-02-28',
    readTime: '7 min',
    slug: 'automating-business-guide',
    featured: false,
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&q=75&auto=format&fit=crop',
  },
  {
    title: 'Security Best Practices for Web Apps',
    excerpt:
      'Essential security measures every web application should implement, from authentication to data protection.',
    category: 'Security',
    date: '2025-02-20',
    readTime: '12 min',
    slug: 'security-best-practices',
    featured: false,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=75&auto=format&fit=crop',
  },
  {
    title: 'React Native vs Flutter: 2025 Edition',
    excerpt:
      'An honest comparison of the two leading cross-platform frameworks based on our real-world experience.',
    category: 'Mobile Development',
    date: '2025-02-15',
    readTime: '9 min',
    slug: 'react-native-vs-flutter',
    featured: false,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=75&auto=format&fit=crop',
  },
]

const categories = [
  'All',
  'AI & Machine Learning',
  'Web Development',
  'Mobile Development',
  'Design',
  'Automation',
  'Security',
]

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function BlogPage() {
  const featuredPosts = posts.filter((post) => post.featured)
  const regularPosts = posts.filter((post) => !post.featured)

  return (
    <div className="pt-28">
      <Section>
        <SectionHeader
          label="Our Blog"
          title={
            <>
              Insights & <em>Ideas</em>
            </>
          }
          subtitle="Thoughts on technology, design, and building great digital products."
        />

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                category === 'All'
                  ? 'bg-[var(--gold)] text-black shadow-lg shadow-[var(--gold)]/30'
                  : 'bg-white/8 text-[var(--text-mid)] hover:bg-white/15 border border-white/10 hover:border-[var(--gold)]/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full mb-12">
          {featuredPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <GlassCard padding="none" className="overflow-hidden group cursor-pointer h-full">
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL_DARK}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-[var(--gold)] text-black rounded-full text-xs font-semibold">
                    Featured
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs font-medium text-[var(--gold)] uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-[var(--text-dark)] mt-2 mb-3 group-hover:text-[var(--gold)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[var(--text-mid)] leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>

        {/* Regular Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
          {regularPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <GlassCard padding="none" className="h-full group cursor-pointer overflow-hidden">
                {/* Image */}
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL_DARK}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="text-xs font-medium text-[var(--gold)] uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-[var(--text-dark)] mt-2 mb-3 group-hover:text-[var(--gold)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[var(--text-mid)] leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                      <span>{formatDate(post.date)}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  )
}
