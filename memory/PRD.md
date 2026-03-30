# PixelCraft Company Website — PRD

## Original Problem Statement
Build a company website for PixelCraft — a digital studio that builds websites, mobile apps, automation agents, and AI solutions. Gold and black theme, clean, professional, not AI-looking. Dynamic with rich UI elements. Every footer link should work.

## Architecture
- **Framework**: Next.js 14 (App Router) with TypeScript
- **Styling**: Tailwind CSS + Custom CSS (glassmorphism, shiny gold shimmer)
- **Animations**: Framer Motion (hero only) + Canvas API (particles)
- **Backend**: Minimal FastAPI health endpoint
- **Database**: Not needed (static marketing site)

## User Personas
- **Potential Clients**: Startups and businesses looking for web/app/AI development services
- **Visitors**: People exploring PixelCraft's portfolio and pricing

## Core Requirements (Static)
- Gold (#D4AF37) and black (#050505) theme with shiny metallic gold
- Apple-style glassmorphism on all cards
- Canvas particle animation on hero section
- No loading/scroll animations (instant content render)
- No blog page
- All footer links functional
- Phone: +91 93912 79070, Address: Tirupati, AP, India

## What's Been Implemented (Jan 30, 2026)
- [x] Home page with hero (particles, shiny gold shimmer text), services grid (6 cards), portfolio showcase (3 projects), testimonials (3 cards), CTA section
- [x] About page with stats, values, team (4 members), story
- [x] Services page with 6 detailed service cards
- [x] Portfolio page with 5 projects and category filter
- [x] Pricing page with 3 plans (Starter, Professional, Enterprise)
- [x] Contact page with comprehensive form and contact info
- [x] Responsive navigation with mobile drawer menu
- [x] Footer with all working links, newsletter signup
- [x] Apple glassmorphism design system
- [x] Shiny gold shimmer animation on key text
- [x] Canvas-based particle system on hero

## Testing Status
- Frontend: 98% pass rate
- All nav links work, no blog references, correct contact info
- Mobile responsive verified

## Prioritized Backlog
### P0 (Critical)
- None remaining

### P1 (Important)
- Email integration for contact form (user will use Zoho Mail)
- SEO optimization (meta tags, sitemap, robots.txt)
- Portfolio project detail pages

### P2 (Nice to Have)
- Blog section (if user changes mind)
- Client dashboard/login
- Animation on scroll for inner pages
- Dark/light mode toggle

## Next Tasks
1. User to add their own email server (Zoho Mail) for contact form
2. Add real portfolio project screenshots/images
3. Update team member photos with actual photos
4. SEO enhancements (Open Graph images, structured data)
