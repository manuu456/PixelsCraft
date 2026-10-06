// Single source of truth for every project shown on the site.
// Home (portfolio section), /portfolio and the About page stats all read from here,
// so adding a project in one place keeps every page (and every count) in sync.

export type ProjectCategory = 'Security' | 'Healthcare' | 'Hospitality' | 'AI'

export interface Project {
  slug: string
  name: string
  tagline: string
  /** One-liner used on the home page cards */
  summary: string
  /** Longer copy used on the /portfolio page */
  description: string
  category: ProjectCategory
  tags: string[]
  image: string
  /** Real product screenshots read best anchored to the top */
  imagePosition?: 'top' | 'center'
  /** Public link. Empty string = not public yet (card links to contact instead) */
  url: string
  status: 'live' | 'coming-soon'
  featured: boolean
  showOnHome: boolean
}

export const projectCategories: ProjectCategory[] = ['Security', 'Healthcare', 'Hospitality', 'AI']

export const projects: Project[] = [
  {
    slug: 'cvearity',
    name: 'CVEarity',
    tagline: 'Vulnerability Tracker',
    summary: 'Real-time CVE tracking and vulnerability management platform for security teams.',
    description:
      'CVE tracking and vulnerability management platform for security professionals and developers.',
    category: 'Security',
    tags: ['Security', 'Full Stack', 'Vulnerability Management'],
    image: '/projects/cvearity.jpg',
    url: 'https://cv-earity-jdir.vercel.app/',
    status: 'live',
    featured: true,
    showOnHome: true,
  },
  {
    slug: 'curo',
    name: 'Curo',
    tagline: 'Healthcare App · Android & iOS',
    summary: 'Find doctors, book appointments and keep health records — one calm app for patients and doctors.',
    description:
      'A healthcare app for Android and iOS. Patients discover nearby doctors, book and reschedule appointments, book lab tests and keep their medical records in one place — while doctors manage their practice, schedule and clinical notes.',
    category: 'Healthcare',
    tags: ['Healthcare', 'Android & iOS', 'Flutter'],
    image: '/projects/curo.jpg',
    url: 'https://curohealth.co.in',
    status: 'live',
    featured: true,
    showOnHome: true,
  },
  {
    slug: 'escape-restaurant',
    name: 'Escape Restaurant',
    tagline: 'Food Ordering & Billing System',
    summary: 'In-house food ordering and billing system — guests order right from their table.',
    description:
      'An internal food ordering and billing system built for Escape Restaurant. Guests browse a 160+ item digital menu by category with veg / non-veg filters and order straight from their table, while the team handles orders and billing in one place.',
    category: 'Hospitality',
    tags: ['Restaurant', 'Ordering', 'Billing'],
    image: '/projects/escape-menu.jpg',
    // The root URL issues a fresh table session, unlike shared /menu?session=… links which expire
    url: 'https://escape-restaurant-web.vercel.app/',
    status: 'live',
    featured: true,
    showOnHome: true,
  },
  {
    slug: 'securit',
    name: 'SecurIT',
    tagline: 'Security Solutions',
    summary: 'Advanced threat detection and security monitoring in one platform.',
    description:
      'Comprehensive cybersecurity platform providing advanced threat detection and security monitoring.',
    category: 'Security',
    tags: ['Cybersecurity', 'Full Stack', 'Threat Detection'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80&auto=format&fit=crop',
    url: '',
    status: 'coming-soon',
    featured: true,
    showOnHome: false,
  },
  {
    slug: 'aitext-humanizer',
    name: 'AIText Humanizer',
    tagline: 'AI Writing Tool',
    summary: 'Turns AI-generated content into natural, human-like text.',
    description:
      'AI-powered text transformation tool that converts AI-generated content into natural, human-like text.',
    category: 'AI',
    tags: ['AI', 'NLP', 'Text Processing'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80&auto=format&fit=crop',
    url: '',
    status: 'coming-soon',
    featured: true,
    showOnHome: false,
  },
  {
    slug: 'chessai',
    name: 'ChessAI',
    tagline: 'AI Chess Engine',
    summary: 'Challenge an intelligent AI opponent with adaptive difficulty levels.',
    description:
      'Advanced chess AI with strategic analysis, move suggestions, and interactive gameplay experience.',
    category: 'AI',
    tags: ['AI', 'Game Development', 'Machine Learning'],
    image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&q=80&auto=format&fit=crop',
    url: '',
    status: 'coming-soon',
    featured: false,
    showOnHome: true,
  },
]

export const liveProjects = projects.filter((p) => p.status === 'live')

/** Where a project card should take the visitor */
export function projectHref(project: Project) {
  return project.url || `/contact?project=${encodeURIComponent(project.name)}`
}
