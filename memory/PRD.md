# PixelCraft Company Website - PRD

## Problem Statement
Build a company website for PixelCraft, a digital agency that builds websites, mobile apps, and automation agents. The website should be neat, clean, not look AI-made, with a rich UI and a gold & black theme. It should be dynamic with working footer links.

## Company Details
- **Name:** PixelCraft
- **Phone:** +919391279070
- **Address:** Tirupati, Andhra Pradesh, India
- **Email:** hello@pixelcraft.studio

## User Personas
- Potential clients looking for web/app development services
- Businesses seeking automation and AI agent solutions
- Recruiters or partners exploring PixelCraft's portfolio

## Core Requirements
- [x] Gold (#C9A227) and black (#000) theme
- [x] Clean, minimalist design (interviewcoder.co aesthetic)
- [x] No blog/case study page
- [x] Working footer links
- [x] Responsive (mobile + desktop)

## Pages
- [x] **Home** - Hero, Services grid, Portfolio showcase, Testimonials, CTA
- [x] **Services** - 6 services: Website Dev, Mobile Apps, Automation, AI Agents, UI/UX, Security
- [x] **Portfolio** - 5 projects: CVEarity, SecurIT, AIText Humanizer, Mediconnect, ChessAI
- [x] **About** - Stats, Values, Team (4 members), Story
- [x] **Pricing** - 3 plans: Starter (INR 49,999), Professional (INR 1,49,999), Enterprise (Custom)
- [x] **Contact** - Form + contact info (phone, email, address, hours)

## Tech Stack
- **Frontend:** Next.js 14 (App Router), React, TypeScript, Tailwind CSS
- **Backend:** Python FastAPI (minimal, port 8001)
- **Fonts:** Inter
- **Icons:** Lucide React

## Architecture
```
/app/frontend/src/
├── app/ (pages: home, services, portfolio, about, pricing, contact)
├── components/
│   ├── layout/ (navbar.tsx, footer.tsx)
│   ├── sections/ (hero, services, portfolio, testimonials, cta)
│   └── ui/ (button.tsx)
├── lib/ (utils.ts, constants.ts)
└── styles/ (globals.css)
```

## Design System
- Background: #000000 (pure black)
- Surface: #0a0a0a
- Card: #111111
- Gold accent: #C9A227
- Gold light: #E8C547
- Text primary: #EDEDED
- Text secondary: #888888
- Text muted: #555555
- Borders: rgba(255,255,255,0.06)
- Font: Inter (all weights 300-800)
- No glassmorphism, no particles, no glow effects

## What's Been Implemented (Feb 2026)
- Complete 6-page website with all sections
- Clean minimalist dark theme (interviewcoder.co aesthetic)
- Responsive navbar with mobile menu
- Footer with contact info, services links, company links
- All data-testid attributes for testing
- Next.js Image component with remotePatterns config
- Contact form (MOCKED - setTimeout only)

## Testing Status
- Frontend: 100% pass (33/33 tests, iteration_2.json)
- All navigation links verified working
- Mobile responsive layout verified
- All images loading correctly
- All data-testid attributes present

## Backlog
- **P2:** Zoho email integration for Contact form (user mentioned free tier later)
- **P3:** Add real portfolio project screenshots instead of Unsplash stock images
