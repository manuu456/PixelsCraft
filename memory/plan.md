# PixelCraft Mendx-Style Design Transformation Plan

## Project Overview
Transform PixelCraft from Apple-style light theme to Mendx-style dark theme with purple/blue accents and modern interactive animations. This is a **major rebuild (~60-70%)** that preserves the component architecture while completely overhauling the visual design and interactions.

**Current State:** Apple-minimalist light theme with gold accents, Framer Motion foundations
**Target State:** Dark Mendx design with purple/blue/cyan accents, smooth scroll animations, expandable cards, preloader, bento grid hero

---

## Phase 1: Foundation & Setup (Days 1-2)

### 1.1 Color Scheme Update
**File:** `tailwind.config.ts`

Replace Apple-gold theme with Mendx dark theme:
```
- Primary: Purple (#8B5CF6)
- Secondary: Blue (#3B82F6)
- Accent: Cyan (#06B6D4)
- Tertiary: Pink (#EC4899)
- Background Dark: #0A0E27
- Surface 1: #1A1F3A
- Surface 2: #252D47
- Text Primary: #F8FAFC
- Text Secondary: #CBD5E1
- Border: #334155
```

**Tasks:**
- [ ] Create new color palette in tailwind config
- [ ] Add new shadow definitions for dark theme (cyan/blue glow)
- [ ] Define gradient combinations (purple-to-cyan, blue-to-pink)
- [ ] Update animation keyframes for new aesthetic

### 1.2 Install New Dependencies
**File:** `package.json`

**Dependencies to add:**
```bash
npm install framer-motion@^11.0.0 (already present, ensure latest)
npm install @react-icons/all-files@^5.0.0
npm install react-hot-toast@^2.4.1 (for notifications)
npm install clsx@^2.1.0 (already present)
npm install tailwind-merge@^2.3.0 (already present)
```

**Optional but recommended:**
```bash
npm install zustand@^4.4.0 (for animation state management)
npm install react-use-measure@^2.1.1 (for scroll animations)
```

**Tasks:**
- [ ] Verify all dependencies are installed and latest
- [ ] Update package-lock.json
- [ ] Run `npm install` to ensure clean install

### 1.3 Create Theme Configuration File
**New File:** `src/lib/theme-config.ts`

```typescript
export const themeConfig = {
  colors: {
    primary: '#8B5CF6',     // Purple
    secondary: '#3B82F6',   // Blue
    accent: '#06B6D4',      // Cyan
    tertiary: '#EC4899',    // Pink
    background: '#0A0E27',
    surface: {
      1: '#1A1F3A',
      2: '#252D47',
    },
    text: {
      primary: '#F8FAFC',
      secondary: '#CBD5E1',
    },
    border: '#334155',
  },
  animations: {
    fast: 0.3,
    standard: 0.5,
    slow: 0.8,
  },
};
```

**Tasks:**
- [ ] Create theme-config.ts
- [ ] Create reusable animation constants
- [ ] Create color palette utilities

---

## Phase 2: Core Component Rebuild (Days 3-5)

### 2.1 Preloader Component (NEW)
**New File:** `src/components/ui/preloader.tsx`

**Features:**
- Animated percentage counter (0-100%)
- Icon animation synchronized with counter
- Smooth easing curves
- Fade out on completion
- Screen overlay with gradient background

**Implementation Details:**
- Use Framer Motion for counter animation (`useMotionValue` + `useTransform`)
- Duration: 2-3 seconds to reach 100%
- Icon: Animated waveform or pixel pattern (lucide-react)
- Show on page load, dismiss after 100% reached

**Tasks:**
- [ ] Create preloader component
- [ ] Implement animated counter logic
- [ ] Add icon animation
- [ ] Integrate into `src/app/layout.tsx` with context/provider pattern
- [ ] Test timing and transitions

### 2.2 Hero Section - Bento Grid Layout (REBUILD)
**File:** `src/components/sections/hero-section.tsx`

**Current:** Single large hero image with centered text
**New:** Asymmetric bento grid with multiple cards

**Layout Structure:**
```
┌─────────────────────────────────────┐
│  Search Bar (Full Width)            │
├──────────────┬──────────────────────┤
│ Stat Card 1  │   Main Hero Image    │
│              │   (Large)            │
├──────────────┤                      │
│ Stat Card 2  │                      │
├──────────────┴──────────────────────┤
│ CTA Buttons / Quote                 │
└─────────────────────────────────────┘
```

**Components to create:**
- `SearchBar.tsx` - Input with icon, glass morphism styling
- `StatCard.tsx` - Shows metrics with animated numbers
- `HeroImage.tsx` - Main image with parallax scroll

**Styling:**
- Glass morphism backgrounds (backdrop-blur with semi-transparent surface)
- Purple/cyan gradient borders
- Hover effects: slight scale, shadow expansion
- Responsive grid (1 col mobile, 3 cols desktop)

**Animations:**
- Search bar fades in with slight down motion
- Stat cards stagger in on load
- Hero image has subtle parallax on scroll
- Continuous subtle float animations

**Tasks:**
- [ ] Rebuild hero section layout
- [ ] Create SearchBar component
- [ ] Create StatCard component with animated numbers
- [ ] Implement glass morphism styling
- [ ] Add scroll-based parallax animation
- [ ] Ensure responsive behavior across breakpoints
- [ ] Test component integration

### 2.3 Service Cards - Expandable Horizontal (REBUILD)
**File:** `src/components/sections/services-section.tsx`
**New Files:**
- `src/components/ui/service-card.tsx`
- `src/components/ui/expandable-card-group.tsx`

**Current:** Standard grid cards
**New:** Horizontal expandable cards with 3D product images

**Features:**
- Cards displayed horizontally in container
- On hover: card expands left/right
- Reveal product image on expansion (with 3D perspective)
- Content slides in with staggered animation
- Non-hovered cards scale down slightly (focus effect)
- Background remains dark with gradient accent on hover

**Card Structure:**
```
┌─ Collapsed ─┐         ┌─────── Expanded ───────┐
│ Service     │   →     │ Service Name           │
│ Icon        │         │ Description            │
│ Name        │         │ [3D Product Image]     │
│ Brief       │         │ Feature List (bullets) │
└─────────────┘         │ CTA Button             │
                        └───────────────────────┘
```

**3D Product Image:**
- Implement perspective transform
- Slight rotation on parent hover
- Shadow beneath image suggests depth
- Fade in with staggered timing per card

**Animations:**
- Expansion: 0.6s cubic-bezier ease
- Product image: perspective rotation
- Text: fade-in with staggered delays
- Non-active cards: scale(0.95)

**Color:**
- Border: gradient (purple → cyan)
- Background: Surface 1 with opacity
- Text: Primary white
- Icon: Gradient colored

**Tasks:**
- [ ] Create ServiceCard component
- [ ] Implement expandable logic with state management
- [ ] Add 3D perspective transforms
- [ ] Create ExpandableCardGroup wrapper
- [ ] Implement staggered animations
- [ ] Add hover states for non-active cards
- [ ] Test card expansion across different screen sizes

### 2.4 Category Tabs Section (NEW/REFACTOR)
**File:** `src/components/sections/categories-section.tsx`

**Features:**
- Tab buttons: Popular / Top Skills / Trending
- Smooth tab transition animations
- Cards below tabs change based on selected category
- Underline indicator on active tab (animated)

**Implementation:**
- Tab state management (React.useState or Zustand)
- Smooth fade/scale transition when switching
- Active indicator: horizontal line that slides to active tab
- Cards: Staggered fade-in animation when category changes

**Styling:**
- Tab buttons: Minimal, with hover underline preview
- Active tab: Purple text with cyan underline
- Inactive: Gray text
- Cards: Inherit from ServiceCard but with category filtering

**Tasks:**
- [ ] Create CategoryTabs component
- [ ] Implement tab switching logic
- [ ] Create animated underline indicator
- [ ] Filter/display cards by category
- [ ] Add smooth transition animations
- [ ] Test category switching performance

### 2.5 Testimonials Section - Dark with Slide-in (REBUILD)
**File:** `src/components/sections/testimonials-section.tsx`
**New Files:**
- `src/components/ui/testimonial-card.tsx`
- `src/components/ui/testimonials-carousel.tsx`

**Current:** Light theme with standard layout
**New:** Dark theme with left/right slide-in animations and carousel

**Features:**
- Testimonial cards slide in from left and right alternately
- Dark background with subtle gradient
- Profile image with border accent
- Rating stars animated on load
- Quote text animated with word-by-word reveal (optional)
- Auto-rotate carousel every 5 seconds
- Manual navigation with previous/next buttons

**Card Layout:**
- Profile image (left side, circular with border)
- Name + Title (small text)
- Star rating
- Quote (larger text)
- Company logo (if available)

**Animations:**
- First card: Slide in from left (-100% to 0%)
- Second card: Slide in from right (+100% to 0%)
- Stars: Scale up with stagger
- Quote: Fade in with slight delay
- Transition between slides: Cross-fade + slide

**Styling:**
- Background: Dark gradient (surface-1 to surface-2)
- Border: Subtle cyan/purple accent
- Text: Primary white, secondary gray
- Rating: Yellow/gold stars

**Tasks:**
- [ ] Create TestimonialCard component
- [ ] Build testimonials carousel/slider
- [ ] Implement slide-in animations
- [ ] Add star rating animation
- [ ] Create navigation buttons
- [ ] Implement auto-rotation logic
- [ ] Test carousel interactions
- [ ] Ensure accessibility (keyboard nav, ARIA labels)

### 2.6 Infinite Carousel / Marquee Section (NEW)
**New File:** `src/components/ui/infinite-carousel.tsx`

**Features:**
- Horizontal scrolling marquee effect
- Seamlessly loops (infinite scroll)
- Cards continuously flow left to right
- Pause on hover
- No visible beginning or end

**Implementation:**
- Duplicate card set (appears twice)
- Use CSS transform translate-x animation
- Framer Motion variant for smooth looping
- Duration: 20-30 seconds per cycle

**Use Cases:**
- Partner logos section
- Technologies used
- Recent clients
- Award badges

**Styling:**
- Dark background with subtle gradient
- Cards: Consistent with other sections
- Fade effects at edges (gradient overlay)

**Tasks:**
- [ ] Create InfiniteCarousel component
- [ ] Implement seamless looping logic
- [ ] Add pause-on-hover behavior
- [ ] Create gradient edge fades
- [ ] Test performance (no jank)
- [ ] Optimize with will-change

### 2.7 Global Theme Application
**File:** `src/styles/globals.css`

**Tasks:**
- [ ] Update background color to dark (#0A0E27)
- [ ] Update text colors to new primary/secondary
- [ ] Update border colors throughout
- [ ] Apply new shadow definitions
- [ ] Update all hover states
- [ ] Test text contrast (WCAG AA compliance)

---

## Phase 3: Layout & Navigation Updates (Days 6-7)

### 3.1 Header/Navigation Update
**File:** `src/components/layout/header.tsx`

**Changes:**
- Background: Dark with semi-transparent blur
- Logo: Keep current or update to new purple accent
- Navigation links: Purple text, cyan underline on hover
- Mobile menu: Slide from side with dark backdrop

**Styling:**
- Sticky position with glass morphism
- Border-bottom: Subtle gradient
- Links: Smooth color transition on hover
- Mobile: Hamburger menu with smooth animation

**Tasks:**
- [ ] Update header styling for dark theme
- [ ] Implement new color scheme
- [ ] Test navigation interactions
- [ ] Ensure mobile responsiveness
- [ ] Test accessibility

### 3.2 Footer Update
**File:** `src/components/layout/footer.tsx`

**Changes:**
- Background: Gradient (surface-1 to surface-2)
- Links: Cyan/purple accents on hover
- Dividers: Subtle borders
- Social icons: Animated on hover (scale + color change)

**Tasks:**
- [ ] Update footer styling
- [ ] Implement new color scheme
- [ ] Add social icon animations
- [ ] Test layout on all breakpoints

### 3.3 Update All Page Layouts
**Files:**
- `src/app/page.tsx` (home)
- `src/app/about/page.tsx`
- `src/app/services/page.tsx`
- `src/app/portfolio/page.tsx`
- `src/app/contact/page.tsx`

**Tasks:**
- [ ] Apply new dark background
- [ ] Update page transition animations
- [ ] Ensure consistent spacing/padding
- [ ] Test page transitions
- [ ] Verify SEO elements still present

---

## Phase 4: Advanced Animations & Polish (Days 8-9)

### 4.1 Continuous Scroll Animations
**New File:** `src/lib/scroll-animations.ts`

**Implementation:**
- Cards appear with staggered timing as user scrolls
- Fade-in + scale effects on enter viewport
- Use Intersection Observer API or Framer Motion's `whileInView`
- Stagger delay: 0.1s between each card

**Components affected:**
- Service cards
- Portfolio items
- Testimonials
- Any card-based section

**Animations:**
```
Initial: opacity: 0, scale: 0.8
On scroll into view: opacity: 1, scale: 1
Duration: 0.6s cubic-bezier(0.16, 1, 0.3, 1)
Stagger: 0.1s
```

**Tasks:**
- [ ] Create scroll animation utilities
- [ ] Implement Intersection Observer logic
- [ ] Apply to all card-based sections
- [ ] Test performance (60fps target)
- [ ] Optimize with GPU acceleration

### 4.2 Smooth Page Transitions
**File:** `src/app/layout.tsx`

**Implementation:**
- Fade out on navigation
- Page content fades in on load
- Preloader shows between navigation (optional)
- Maintain scroll position logic

**Using:**
- Framer Motion AnimatePresence + variants
- Next.js Layout component

**Tasks:**
- [ ] Implement page transition logic
- [ ] Test transitions between all pages
- [ ] Ensure loading state works
- [ ] Verify back button behavior

### 4.3 Interactive State Animations
**New File:** `src/lib/interactive-animations.ts`

**Include:**
- Button hover states (scale, shadow, color)
- Link underlines (animated reveal)
- Form input focus states (border color glow)
- Icon animations (spin, bounce, morph)
- Loading spinner (custom animated)

**Standardized animations:**
- Button press: scale(0.95) on mouseDown
- Button hover: scale(1.05) + shadow expansion
- Links: underline slides in from left
- Icons: rotate on parent hover

**Tasks:**
- [ ] Create animation constants/utilities
- [ ] Apply to all interactive elements
- [ ] Test on touch devices
- [ ] Ensure smooth performance

### 4.4 Loading States & Skeletons
**New File:** `src/components/ui/skeleton-card.tsx`

**Components:**
- Skeleton card (pulsing gradient)
- Loading spinner (custom animated)
- Skeleton text (multiple lines with gradient shimmer)

**Implementation:**
- Use Framer Motion for animations
- Skeleton appears while data loads
- Smooth fade transition to loaded content

**Tasks:**
- [ ] Create Skeleton component
- [ ] Create LoadingSpinner component
- [ ] Apply to async data sections
- [ ] Test with simulated slow network

### 4.5 Micro-interactions Polish
**All components**

**Details:**
- Toast notifications on form submit
- Icon animations on click
- Dropdown menu animations
- Modal/overlay transitions
- Success/error state animations

**Tasks:**
- [ ] Audit all interactive elements
- [ ] Add subtle animations where appropriate
- [ ] Test performance impact
- [ ] Gather user feedback on animations

---

## Phase 5: Responsive Design & Testing (Days 10-11)

### 5.1 Breakpoint Testing
**Files:** All components

**Breakpoints to test:**
- Mobile: 320px, 375px, 480px
- Tablet: 768px, 1024px
- Desktop: 1280px, 1536px, 2560px

**Focus areas:**
- Bento grid hero (1 → 2 → 3 columns)
- Service cards (horizontal scroll on mobile)
- Preloader (responsive positioning)
- Navigation (mobile menu)
- Text sizes (readable at all sizes)

**Tasks:**
- [ ] Test all pages on each breakpoint
- [ ] Adjust grid/flex layouts as needed
- [ ] Verify touch interactions work
- [ ] Test form inputs on mobile
- [ ] Check horizontal scrolling sections

### 5.2 Performance Optimization
**Files:** Multiple

**Focus:**
- Image optimization (lazy loading, webp)
- Animation performance (60fps target)
- Code splitting (dynamic imports)
- CSS cleanup (unused classes)
- Bundle size analysis

**Tools:**
- Lighthouse audit
- DevTools Performance tab
- `npm run build && npm run start`

**Tasks:**
- [ ] Run Lighthouse audit
- [ ] Optimize images
- [ ] Profile animations
- [ ] Code split heavy sections
- [ ] Minimize animations on low-end devices

### 5.3 Cross-browser Testing
**Browsers:**
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

**Focus:**
- Animations render correctly
- Colors appear consistent
- Layout integrity
- Form functionality
- Scroll behavior

**Tasks:**
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on iOS
- [ ] Test on Android

### 5.4 Accessibility Audit
**Standards:** WCAG 2.1 Level AA

**Checklist:**
- [ ] Color contrast ratios (4.5:1 for text)
- [ ] Keyboard navigation (all interactive elements)
- [ ] Screen reader testing (ARIA labels)
- [ ] Focus indicators (visible on all interactive elements)
- [ ] Form labels (properly associated)
- [ ] Alt text (all meaningful images)
- [ ] Reduced motion (respect prefers-reduced-motion)
- [ ] Zoom support (200% zoom readable)

**Tools:**
- axe DevTools extension
- WAVE extension
- Screen reader (NVDA, JAWS, or VoiceOver)

**Tasks:**
- [ ] Run axe audit
- [ ] Test keyboard navigation
- [ ] Test with screen reader
- [ ] Verify color contrast
- [ ] Test focus states
- [ ] Test with zoom enabled
- [ ] Implement reduced motion media query

---

## Phase 6: Content & Final Integration (Days 12-13)

### 6.1 Update Placeholder Content
**Files:**
- Service descriptions
- Testimonials
- Portfolio items
- Blog posts
- Team members

**Tasks:**
- [ ] Gather all content
- [ ] Update component props
- [ ] Verify images load
- [ ] Update meta descriptions
- [ ] Update OG images

### 6.2 SEO Optimization
**Files:** Layout components, pages

**Checklist:**
- [ ] Meta titles (50-60 chars)
- [ ] Meta descriptions (120-160 chars)
- [ ] OG images (1200x630px)
- [ ] Canonical URLs
- [ ] Schema markup (JSON-LD)
- [ ] Sitemap.xml
- [ ] robots.txt

**Tasks:**
- [ ] Review all meta tags
- [ ] Generate OG images for new design
- [ ] Add schema markup for services/testimonials
- [ ] Verify sitemap
- [ ] Test with Google Search Console

### 6.3 Analytics & Tracking
**Files:** Layout, key pages

**Implementation:**
- Google Analytics (if not already present)
- Event tracking for interactions
- Conversion tracking (contact forms, CTAs)
- Scroll depth tracking

**Tasks:**
- [ ] Verify GA is tracking
- [ ] Set up custom events
- [ ] Track form submissions
- [ ] Track CTA clicks
- [ ] Test tracking in dev vs production

### 6.4 Content Verification
**All pages**

**Tasks:**
- [ ] Proofread all text
- [ ] Verify links work
- [ ] Check email addresses
- [ ] Verify phone numbers
- [ ] Check social links
- [ ] Review all CTAs

---

## Phase 7: Deployment & Launch (Day 14)

### 7.1 Build Optimization
**Command:** `npm run build`

**Checks:**
- [ ] Build completes without errors
- [ ] No console warnings
- [ ] Build size acceptable
- [ ] All pages pre-rendered

**Tasks:**
- [ ] Run production build
- [ ] Check build output
- [ ] Review bundle analysis
- [ ] Fix any build warnings

### 7.2 Staging Deployment
**Environment:** Staging server

**Tasks:**
- [ ] Deploy to staging
- [ ] Test all functionality
- [ ] Performance test (Lighthouse)
- [ ] Final accessibility check
- [ ] Load testing (if applicable)
- [ ] Get stakeholder approval

### 7.3 Production Deployment
**Environment:** Production

**Pre-deployment:**
- [ ] Database backups
- [ ] Environment variables set
- [ ] CDN cache purged (if applicable)
- [ ] DNS ready (if domain change)
- [ ] SSL certificate valid
- [ ] Monitoring/alerting enabled

**Deployment:**
- [ ] Run deployment script
- [ ] Verify all pages load
- [ ] Check server logs
- [ ] Monitor error tracking

**Post-deployment:**
- [ ] Smoke tests (critical paths)
- [ ] Performance monitoring
- [ ] User feedback collection
- [ ] Bug tracking setup

**Tasks:**
- [ ] Prepare deployment checklist
- [ ] Deploy to production
- [ ] Run smoke tests
- [ ] Monitor for issues
- [ ] Collect initial feedback

### 7.4 Post-Launch Support
**Days 15-30**

**Tasks:**
- [ ] Monitor error logs
- [ ] Respond to user feedback
- [ ] Fix critical bugs
- [ ] Performance tuning
- [ ] Additional refinements based on data

---

## Detailed File Structure Reference

### Files to Modify:
```
src/
├── app/
│   ├── layout.tsx (add preloader provider, update theme)
│   ├── page.tsx (import new sections)
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── portfolio/page.tsx
│   ├── contact/page.tsx
│   └── loading.tsx (update styling)
├── components/
│   ├── layout/
│   │   ├── header.tsx (update theme)
│   │   └── footer.tsx (update theme)
│   ├── sections/
│   │   ├── hero-section.tsx (REBUILD)
│   │   ├── services-section.tsx (REBUILD)
│   │   ├── categories-section.tsx (NEW)
│   │   ├── testimonials-section.tsx (REBUILD)
│   │   ├── portfolio-section.tsx (refactor if needed)
│   │   ├── cta-section.tsx (update theme)
│   │   └── marquee-section.tsx (NEW)
│   └── ui/
│       ├── preloader.tsx (NEW)
│       ├── search-bar.tsx (NEW)
│       ├── stat-card.tsx (NEW)
│       ├── service-card.tsx (NEW)
│       ├── expandable-card-group.tsx (NEW)
│       ├── testimonial-card.tsx (NEW)
│       ├── testimonials-carousel.tsx (NEW)
│       ├── infinite-carousel.tsx (NEW)
│       ├── skeleton-card.tsx (NEW)
│       ├── button.tsx (update styling)
│       ├── card.tsx (update styling)
│       ├── input.tsx (update styling)
│       └── loading-spinner.tsx (NEW)
├── lib/
│   ├── theme-config.ts (NEW)
│   ├── scroll-animations.ts (NEW)
│   └── interactive-animations.ts (NEW)
├── styles/
│   ├── globals.css (update colors/themes)
│   └── animations.css (NEW - additional animation definitions)
└── context/ (NEW - if using context)
    └── preloader-context.tsx (NEW)

tailwind.config.ts (update colors & shadow definitions)
```

### New Files to Create (28 total):
1. `src/components/ui/preloader.tsx`
2. `src/components/ui/search-bar.tsx`
3. `src/components/ui/stat-card.tsx`
4. `src/components/ui/service-card.tsx`
5. `src/components/ui/expandable-card-group.tsx`
6. `src/components/ui/testimonial-card.tsx`
7. `src/components/ui/testimonials-carousel.tsx`
8. `src/components/ui/infinite-carousel.tsx`
9. `src/components/ui/skeleton-card.tsx`
10. `src/components/ui/loading-spinner.tsx`
11. `src/components/sections/categories-section.tsx`
12. `src/components/sections/marquee-section.tsx`
13. `src/lib/theme-config.ts`
14. `src/lib/scroll-animations.ts`
15. `src/lib/interactive-animations.ts`
16. `src/styles/animations.css`
17. `src/context/preloader-context.tsx`

### Files to Rebuild (6 total):
1. `src/components/sections/hero-section.tsx`
2. `src/components/sections/services-section.tsx`
3. `src/components/sections/testimonials-section.tsx`
4. `src/components/layout/header.tsx`
5. `src/components/layout/footer.tsx`
6. `tailwind.config.ts`

### Files to Update (6+ total):
1. `src/styles/globals.css`
2. `src/app/layout.tsx`
3. `src/app/page.tsx`
4. `src/app/loading.tsx`
5. All page files in `src/app/`
6. All UI components (button, input, card, etc.)

---

## Color Palette Reference

### Primary Colors
- **Purple:** `#8B5CF6` (brand primary)
- **Blue:** `#3B82F6` (secondary actions)
- **Cyan:** `#06B6D4` (accents, borders)
- **Pink:** `#EC4899` (tertiary)

### Backgrounds
- **Dark Base:** `#0A0E27`
- **Surface 1:** `#1A1F3A`
- **Surface 2:** `#252D47`
- **Elevated:** `#323D57` (for cards on cards)

### Text
- **Primary:** `#F8FAFC` (main text)
- **Secondary:** `#CBD5E1` (muted text)
- **Tertiary:** `#94A3B8` (very muted)

### Borders & Dividers
- **Border:** `#334155`
- **Subtle:** `#1E293B`

### Gradients (for borders/glows)
- **Purple → Cyan:** `from-purple-500 to-cyan-500`
- **Blue → Pink:** `from-blue-500 to-pink-500`
- **Background Gradient:** `from-surface-1 to-surface-2`

### Shadows
- **Glow (Cyan):** `0 0 30px rgba(6, 182, 212, 0.3)`
- **Glow (Purple):** `0 0 30px rgba(139, 92, 246, 0.3)`
- **Card Shadow:** `0 10px 40px rgba(0, 0, 0, 0.4)`
- **Hover Shadow:** `0 20px 60px rgba(139, 92, 246, 0.2)`

---

## Animation Timing Standards

### Durations
- **Fast:** 0.2s (micro-interactions)
- **Quick:** 0.3s (button hovers, small transitions)
- **Standard:** 0.5s (section transitions)
- **Slow:** 0.8s (page enters, large animations)
- **Extra Slow:** 1.2s (preloader, hero animations)

### Easing
- **Default:** `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out)
- **Spring:** `cubic-bezier(0.34, 1.56, 0.64, 1)` (for playful elements)
- **Linear:** `linear` (continuous rotations, scrolling)
- **Ease-in-out:** `cubic-bezier(0.4, 0, 0.2, 1)` (standard smoothness)

### Stagger
- **Cards:** 0.1s delay between each
- **List items:** 0.08s delay between each
- **Sections:** 0.2s delay if multiple animations

---

## Dependency Installation Commands

```bash
# Already present:
npm list framer-motion
npm list tailwindcss
npm list lucide-react
npm list clsx
npm list tailwind-merge

# Verify/update all:
npm install

# Optional additions (if needed):
npm install zustand@^4.4.0
npm install react-use-measure@^2.1.1
npm install react-hot-toast@^2.4.1
```

---

## Quality Assurance Checklist

### Visual Quality
- [ ] All colors match design specs
- [ ] Gradients are smooth
- [ ] Shadows look correct
- [ ] Borders/outlines visible but subtle
- [ ] Consistent spacing throughout
- [ ] Typography hierarchy clear
- [ ] Icons consistent in style
- [ ] Images properly optimized

### Animation Quality
- [ ] All animations are smooth (60fps)
- [ ] Animations feel natural, not jerky
- [ ] Timing is consistent across sections
- [ ] Micro-interactions are subtle but noticeable
- [ ] Animations respect prefers-reduced-motion
- [ ] Loading states are clear
- [ ] Transitions between pages are smooth
- [ ] Scroll animations feel performant

### Functionality
- [ ] All links work
- [ ] Forms submit successfully
- [ ] Navigation works on all devices
- [ ] Mobile menu works smoothly
- [ ] Search bar functional
- [ ] Filters/tabs work correctly
- [ ] Carousel auto-rotates and manual nav works
- [ ] Expandable cards expand/collapse correctly

### Performance
- [ ] Lighthouse score: 90+
- [ ] First Contentful Paint: < 2s
- [ ] Largest Contentful Paint: < 2.5s
- [ ] Cumulative Layout Shift: < 0.1
- [ ] Total bundle size acceptable
- [ ] Images lazy-loaded appropriately
- [ ] No console errors
- [ ] No console warnings (non-critical)

### Accessibility
- [ ] WCAG 2.1 AA compliant
- [ ] Color contrast >= 4.5:1
- [ ] Keyboard navigation works
- [ ] Screen reader labels present
- [ ] Focus indicators visible
- [ ] Form labels associated
- [ ] Alt text on images
- [ ] Reduced motion respected

### Browser Compatibility
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile browsers
- [ ] Older browser degradation acceptable
- [ ] No console errors in any browser

### Mobile Responsiveness
- [ ] 320px width (mobile)
- [ ] 768px width (tablet)
- [ ] 1024px+ width (desktop)
- [ ] Touch interactions work
- [ ] No horizontal scroll (except intentional)
- [ ] Text readable at all sizes
- [ ] Images scale appropriately
- [ ] Forms work on mobile

---

## Implementation Tips & Best Practices

### Component Organization
- Keep components focused (single responsibility)
- Use compound components for complex UI
- Extract reusable animations into separate utilities
- Create variants for different states (hover, active, disabled)

### Animation Implementation
- Use Framer Motion's `variants` for consistency
- Implement `whileInView` for scroll-triggered animations
- Use `AnimatePresence` for exit animations
- Profile animations with DevTools Performance tab
- Disable animations on low-end devices if needed

### Styling Best Practices
- Use Tailwind utility classes for consistency
- Create custom components for repeated patterns
- Use CSS variables for dynamic theming (optional)
- Maintain semantic HTML
- Use `clsx` and `tailwind-merge` for conditional classes

### Performance Optimization
- Lazy load images (Next.js Image component)
- Code split heavy sections (dynamic imports)
- Use `will-change` sparingly on animated elements
- Profile bundle with `next/bundle-analyzer`
- Cache SVG/Icon components appropriately

### Testing Strategy
- Manual testing on all breakpoints
- Cross-browser testing
- Accessibility testing (axe, screen reader)
- Performance testing (Lighthouse)
- Visual regression testing (optional: Percy, Chromatic)

### Git Workflow
- Create feature branches for each phase
- Commit frequently with descriptive messages
- Use pull requests for code review
- Keep commits atomic and logical

---

## Timeline Summary

| Phase | Duration | Key Deliverables |
|-------|----------|------------------|
| Phase 1: Foundation & Setup | Days 1-2 | Tailwind config, dependencies, theme utilities |
| Phase 2: Core Components | Days 3-5 | Preloader, Hero, Services, Testimonials, Carousel |
| Phase 3: Layout & Navigation | Days 6-7 | Header, Footer, Page layouts, Transitions |
| Phase 4: Advanced Animations | Days 8-9 | Scroll animations, interactions, loading states |
| Phase 5: Testing & Optimization | Days 10-11 | Responsive testing, performance, accessibility |
| Phase 6: Content & Integration | Days 12-13 | Content updates, SEO, analytics |
| Phase 7: Deployment | Day 14+ | Build, staging, production, launch support |

**Total Timeline: 14 days for full implementation + ongoing support**

---

## Success Metrics

### Performance
- [ ] Lighthouse Score: 90+
- [ ] First Paint: < 1.5s
- [ ] Time to Interactive: < 3.5s
- [ ] Mobile Score: 85+

### User Experience
- [ ] Smooth animations (60fps)
- [ ] No layout shift
- [ ] Intuitive navigation
- [ ] Clear CTAs
- [ ] Fast interactions

### Business Metrics
- [ ] Engagement (scroll depth, time on page)
- [ ] Conversions (contact form submissions, CTA clicks)
- [ ] Bounce rate decrease
- [ ] User feedback positive

### Technical
- [ ] WCAG 2.1 AA compliant
- [ ] Cross-browser compatible
- [ ] Mobile responsive
- [ ] SEO optimized
- [ ] Codebase maintainable

---

## Notes & Considerations

### Design System
- Consider creating a design system document for future consistency
- Standardize all component variants
- Document animation behaviors

### Future Enhancements
- Dark/light mode toggle (if desired)
- Additional animation libraries (Anime.js, GSAP)
- Advanced filtering for services/portfolio
- Blog section with dark theme
- Advanced search functionality
- User accounts/dashboards (if applicable)

### Risk Mitigation
- Keep backup of current production code
- Test thoroughly before launching
- Have rollback plan ready
- Monitor analytics post-launch
- Maintain communication channel for bug reports

### Team Collaboration
- Assign phases to team members
- Daily standup meetings
- Code review checklist
- Documentation updates
- Feedback loops

---

**Document Version:** 1.0
**Last Updated:** Today
**Status:** Ready for implementation
**Next Step:** Begin Phase 1 - Foundation & Setup
