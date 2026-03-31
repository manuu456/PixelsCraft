'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { LucideIcon, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { BLUR_DATA_URL_DARK } from '@/lib/constants'

export type ServiceCardColor = 'red' | 'pink' | 'navy' | 'mint'

interface ExpandableServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  image: string
  color: ServiceCardColor
  isExpanded: boolean
  onHover: () => void
  onLeave: () => void
}

const colorConfig: Record<ServiceCardColor, { 
  gradient: string
  iconBg: string
  iconColor: string
  textColor: string
  arrowBg: string
}> = {
  red: {
    gradient: 'linear-gradient(135deg, #FF6B6B 0%, #EE5A5A 50%, #DC4444 100%)',
    iconBg: 'bg-white/20',
    iconColor: 'text-white',
    textColor: 'text-white',
    arrowBg: 'bg-white/20 hover:bg-white/30',
  },
  pink: {
    gradient: 'linear-gradient(135deg, #FF9ECD 0%, #FF7EB3 50%, #FF5DA2 100%)',
    iconBg: 'bg-white/20',
    iconColor: 'text-white',
    textColor: 'text-white',
    arrowBg: 'bg-white/20 hover:bg-white/30',
  },
  navy: {
    gradient: 'linear-gradient(135deg, #4A5568 0%, #2D3748 50%, #1A202C 100%)',
    iconBg: 'bg-white/20',
    iconColor: 'text-white',
    textColor: 'text-white',
    arrowBg: 'bg-white/20 hover:bg-white/30',
  },
  mint: {
    gradient: 'linear-gradient(135deg, #68D391 0%, #48BB78 50%, #38A169 100%)',
    iconBg: 'bg-white/20',
    iconColor: 'text-white',
    textColor: 'text-white',
    arrowBg: 'bg-white/20 hover:bg-white/30',
  },
}

export function ExpandableServiceCard({
  title,
  description,
  icon: Icon,
  image,
  color,
  isExpanded,
  onHover,
  onLeave,
}: ExpandableServiceCardProps) {
  const config = colorConfig[color]

  return (
    <motion.div
      className={cn(
        'relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-400',
        isExpanded 
          ? 'shadow-2xl' 
          : 'shadow-lg shadow-slate-200/60 hover:shadow-xl border border-slate-100'
      )}
      style={{
        background: isExpanded ? config.gradient : '#FFFFFF',
      }}
      animate={{
        flex: isExpanded ? 1.5 : 1,
      }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      data-testid={`service-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="relative h-full min-h-[280px] p-6 flex flex-col">
        {/* Icon */}
        <motion.div
          className={cn(
            'w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-400',
            isExpanded ? config.iconBg : 'bg-gray-100'
          )}
          animate={{
            scale: isExpanded ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <Icon
            className={cn(
              'w-6 h-6 transition-colors duration-400',
              isExpanded ? config.iconColor : 'text-gray-700'
            )}
            strokeWidth={2}
          />
        </motion.div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <motion.h3
            className={cn(
              'text-xl font-semibold mb-2 transition-colors duration-400',
              isExpanded ? config.textColor : 'text-gray-900'
            )}
          >
            {title}
          </motion.h3>

          <motion.p
            className={cn(
              'text-sm leading-relaxed transition-colors duration-400',
              isExpanded ? 'text-white/80' : 'text-gray-500'
            )}
            animate={{
              opacity: isExpanded ? 1 : 0.8,
            }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>
        </div>

        {/* Arrow Button */}
        <motion.button
          className={cn(
            'w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 mt-4',
            isExpanded ? config.arrowBg : 'bg-gray-100 hover:bg-gray-200'
          )}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`Learn more about ${title}`}
        >
          <ArrowRight
            className={cn(
              'w-5 h-5 transition-colors duration-400',
              isExpanded ? 'text-white' : 'text-gray-700'
            )}
          />
        </motion.button>

        {/* 3D Illustration - Only visible when expanded */}
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40"
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          animate={{
            opacity: isExpanded ? 1 : 0,
            x: isExpanded ? 0 : 50,
            scale: isExpanded ? 1 : 0.8,
          }}
          transition={{
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={`${title} illustration`}
              fill
              sizes="160px"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL_DARK}
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
