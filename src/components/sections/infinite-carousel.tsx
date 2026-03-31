'use client'

import { Section, SectionHeader } from '@/components/ui'

interface TechCard {
  name: string
  icon: string
  color: string
}

const technologies: TechCard[] = [
  { name: 'React', icon: '⚛️', color: '#61DAFB' },
  { name: 'Next.js', icon: '▲', color: '#000000' },
  { name: 'TypeScript', icon: '🔷', color: '#3178C6' },
  { name: 'Node.js', icon: '🟢', color: '#339933' },
  { name: 'Python', icon: '🐍', color: '#3776AB' },
  { name: 'AI/ML', icon: '🤖', color: '#FF6F61' },
  { name: 'Docker', icon: '🐳', color: '#2496ED' },
  { name: 'AWS', icon: '☁️', color: '#FF9900' },
  { name: 'Figma', icon: '🎨', color: '#F24E1E' },
  { name: 'GraphQL', icon: '◈', color: '#E10098' },
  { name: 'PostgreSQL', icon: '🐘', color: '#4169E1' },
  { name: 'Tailwind', icon: '💨', color: '#06B6D4' },
]

function TechCardItem({ tech }: { tech: TechCard }) {
  return (
    <div className="flex-shrink-0 w-36 md:w-44 mx-3 md:mx-4">
      <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        {/* Colored header bar */}
        <div 
          className="h-2 md:h-3" 
          style={{ backgroundColor: tech.color }}
        />
        
        {/* Card body */}
        <div className="p-4 md:p-5 flex flex-col items-center">
          {/* Icon/Image area */}
          <div 
            className="w-14 h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center text-2xl md:text-3xl mb-3"
            style={{ backgroundColor: `${tech.color}15` }}
          >
            {tech.icon}
          </div>
          
          {/* Title */}
          <span className="text-sm md:text-base font-medium text-gray-800 text-center">
            {tech.name}
          </span>
        </div>
      </div>
    </div>
  )
}

export function InfiniteCarousel() {
  // Duplicate items for seamless loop (need enough copies to fill screen + loop)
  const duplicatedTechs = [...technologies, ...technologies, ...technologies]

  return (
    <Section 
      id="technologies" 
      className="bg-gradient-to-b from-amber-50 to-orange-50" 
      fullHeight={false}
    >
      <style jsx>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
        @keyframes scroll-right {
          from { transform: translateX(-33.333%); }
          to { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 35s linear infinite;
        }
        .carousel-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <SectionHeader
        label="Technologies"
        title={
          <>
            Our <em>tech stack</em>
          </>
        }
        subtitle="We leverage cutting-edge technologies to build scalable, modern solutions."
      />

      {/* Carousel container - Row 1 */}
      <div className="w-full max-w-7xl overflow-hidden relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-amber-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-orange-50 to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling track */}
        <div 
          className="flex py-4 animate-scroll-left carousel-track"
          style={{ width: 'fit-content' }}
        >
          {duplicatedTechs.map((tech, index) => (
            <TechCardItem key={`${tech.name}-${index}`} tech={tech} />
          ))}
        </div>
      </div>

      {/* Carousel container - Row 2 (reverse direction) */}
      <div className="w-full max-w-7xl overflow-hidden relative mt-6">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-amber-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-orange-50 to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling track - reverse direction */}
        <div 
          className="flex py-4 animate-scroll-right carousel-track"
          style={{ width: 'fit-content' }}
        >
          {[...duplicatedTechs].reverse().map((tech, index) => (
            <TechCardItem key={`${tech.name}-reverse-${index}`} tech={tech} />
          ))}
        </div>
      </div>
    </Section>
  )
}
