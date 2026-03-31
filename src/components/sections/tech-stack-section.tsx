'use client'

import { motion } from 'framer-motion'

interface TechItem {
  name: string
  logo: string
  gradient: string
  bg: string
}

const techRow1: TechItem[] = [
  { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', gradient: 'from-orange-400 to-yellow-400', bg: 'bg-orange-50' },
  { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', gradient: 'from-pink-400 to-rose-400', bg: 'bg-pink-50' },
  { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', gradient: 'from-pink-500 to-fuchsia-500', bg: 'bg-fuchsia-50' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', gradient: 'from-cyan-400 to-blue-400', bg: 'bg-cyan-50' },
  { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', gradient: 'from-teal-400 to-cyan-400', bg: 'bg-teal-50' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', gradient: 'from-purple-400 to-violet-400', bg: 'bg-purple-50' },
]

const techRow2: TechItem[] = [
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', gradient: 'from-blue-400 to-blue-600', bg: 'bg-blue-50' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', gradient: 'from-gray-700 to-gray-900', bg: 'bg-gray-100' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', gradient: 'from-green-400 to-emerald-500', bg: 'bg-green-50' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', gradient: 'from-blue-400 to-yellow-400', bg: 'bg-blue-50' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', gradient: 'from-blue-400 to-blue-500', bg: 'bg-blue-50' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', gradient: 'from-green-500 to-green-600', bg: 'bg-green-50' },
]

interface TechCardProps {
  tech: TechItem
}

function TechCard({ tech }: TechCardProps) {
  return (
    <div className="flex-shrink-0 w-32 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Gradient top bar */}
      <div className={`h-1 bg-gradient-to-r ${tech.gradient}`} />
      
      {/* Content */}
      <div className="p-4 flex flex-col items-center justify-center">
        {/* Icon container */}
        <div className={`w-14 h-14 mb-3 flex items-center justify-center ${tech.bg} rounded-xl p-2`}>
          <img 
            src={tech.logo} 
            alt={tech.name}
            className="w-9 h-9 object-contain"
          />
        </div>
        <span className="text-gray-800 font-medium text-sm">{tech.name}</span>
      </div>
    </div>
  )
}

export function TechStackSection() {
  // Duplicate arrays 3x for seamless loop
  const row1Items = [...techRow1, ...techRow1, ...techRow1]
  const row2Items = [...techRow2, ...techRow2, ...techRow2]

  return (
    <section className="bg-[#faf9f6] py-20 overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 max-w-3xl mx-auto leading-tight">
            We leverage cutting-edge technologies to build scalable, modern solutions.
          </h2>
        </motion.div>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#faf9f6] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#faf9f6] to-transparent z-10 pointer-events-none" />

        {/* Row 1 - Scrolling Left */}
        <div className="mb-4">
          <div className="flex gap-4 carousel-track animate-scroll-left">
            {row1Items.map((tech, index) => (
              <TechCard key={`row1-${tech.name}-${index}`} tech={tech} />
            ))}
          </div>
        </div>

        {/* Row 2 - Scrolling Right */}
        <div>
          <div className="flex gap-4 carousel-track animate-scroll-right">
            {row2Items.map((tech, index) => (
              <TechCard key={`row2-${tech.name}-${index}`} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
