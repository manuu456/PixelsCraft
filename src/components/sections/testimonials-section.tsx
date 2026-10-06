'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section } from '@/components/ui'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { BLUR_DATA_URL_DARK } from '@/lib/constants'

const testimonials = [
  {
    quote:
      'Working with PixelCraft transformed our online presence. The team delivered beyond expectations!',
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop',
    accentColors: ['#ec4899', '#a855f7', '#22c55e'],
  },
  {
    quote:
      'The AI automation they built saved us 40 hours per week. Incredible ROI.',
    name: 'Rajesh Kumar',
    location: 'Bangalore, India',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop',
    accentColors: ['#3b82f6', '#8b5cf6', '#06b6d4'],
  },
  {
    quote:
      'Best mobile app development experience. Professional, fast, and pixel-perfect.',
    name: 'Ananya Patel',
    location: 'Hyderabad, India',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80&auto=format&fit=crop',
    accentColors: ['#f59e0b', '#ef4444', '#10b981'],
  },
]

const slideVariants = {
  enterFromRight: {
    x: 100,
    opacity: 0,
  },
  enterFromLeft: {
    x: -100,
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exitToLeft: {
    x: -100,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exitToRight: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
}

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  // Pause autoplay while the visitor is reading / interacting with the card
  const [isPaused, setIsPaused] = useState(false)

  const goToNext = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const goToPrev = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  // Auto-advance every 5 seconds (paused on hover/touch and while the tab is hidden)
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      if (!document.hidden) goToNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [goToNext, isPaused, currentIndex])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <Section id="testimonials" fullHeight={false} className="overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <p className="lg-chip px-5 py-2.5 text-[var(--text-secondary)] text-base md:text-lg">
          <span className="text-[var(--accent)]">✦</span>
          People like you trust our service
          <span className="text-[var(--accent)]">✦</span>
        </p>
      </motion.div>

      {/* Testimonial Card */}
      <div className="max-w-4xl w-full mx-auto">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial={direction === 1 ? 'enterFromRight' : 'enterFromLeft'}
            animate="center"
            exit={direction === 1 ? 'exitToLeft' : 'exitToRight'}
            // Swipe left/right to change testimonial (iOS-style)
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.35}
            onDragStart={() => setIsPaused(true)}
            onDragEnd={(_, info) => {
              setIsPaused(false)
              if (info.offset.x < -60 || info.velocity.x < -400) goToNext()
              else if (info.offset.x > 60 || info.velocity.x > 400) goToPrev()
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative overflow-hidden rounded-[32px] p-8 md:p-12 cursor-grab active:cursor-grabbing touch-pan-y select-none bg-[#111a2e]/95 ring-1 ring-white/10 shadow-[0_40px_80px_-32px_rgba(15,23,42,0.7),inset_0_1px_0_rgba(255,255,255,0.08)]"
          >
            {/* Ambient light tinted by this testimonial's accent colours */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div
                className="absolute -top-24 -left-16 w-80 h-80 rounded-full opacity-40"
                style={{ background: `radial-gradient(closest-side, ${currentTestimonial.accentColors[0]}, transparent)` }}
              />
              <div
                className="absolute -bottom-28 right-0 w-96 h-96 rounded-full opacity-30"
                style={{ background: `radial-gradient(closest-side, ${currentTestimonial.accentColors[1]}, transparent)` }}
              />
              <div className="absolute inset-0 bg-grid-dark opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
              <span className="absolute -bottom-16 md:-bottom-24 right-6 md:right-auto md:left-10 font-serif text-[9rem] md:text-[13rem] leading-none text-white/[0.07] select-none">&ldquo;</span>
            </div>
            <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Photo with colored frames */}
              <div className="relative shrink-0">
                <div className="relative w-32 h-32 md:w-40 md:h-40">
                  {/* Stacked accent frames */}
                  <div
                    className="absolute inset-0 rounded-2xl transform rotate-6 translate-x-2 translate-y-2"
                    style={{ backgroundColor: currentTestimonial.accentColors[2] }}
                  />
                  <div
                    className="absolute inset-0 rounded-2xl transform rotate-3 translate-x-1 translate-y-1"
                    style={{ backgroundColor: currentTestimonial.accentColors[1] }}
                  />
                  <div
                    className="absolute inset-0 rounded-2xl overflow-hidden"
                    style={{ backgroundColor: currentTestimonial.accentColors[0] }}
                  >
                    <div className="absolute inset-1 rounded-xl overflow-hidden ring-1 ring-white/20">
                      <Image
                        src={currentTestimonial.avatar}
                        alt={currentTestimonial.name}
                        fill
                        sizes="(max-width: 768px) 128px, 160px"
                        placeholder="blur"
                        blurDataURL={BLUR_DATA_URL_DARK}
                        draggable={false}
                        className="object-cover pointer-events-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote and info */}
              <div className="flex-1 text-center md:text-left">
                <motion.blockquote
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  custom={0.1}
                  className="text-xl md:text-2xl lg:text-3xl text-white/95 font-light leading-relaxed mb-6"
                >
                  &ldquo;{currentTestimonial.quote}&rdquo;
                </motion.blockquote>

                <motion.p
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  custom={0.25}
                  className="text-white font-semibold text-lg"
                >
                  {currentTestimonial.name}
                </motion.p>

                <motion.p
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  custom={0.35}
                  className="text-white/60 text-sm"
                >
                  {currentTestimonial.location}
                </motion.p>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="relative flex justify-center md:justify-end gap-3 mt-8">
              <motion.button
                onClick={goToPrev}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full flex items-center justify-center text-white/80 bg-white/10 backdrop-blur-md ring-1 ring-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] hover:bg-white/20 hover:text-white transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={goToNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full flex items-center justify-center text-white/80 bg-white/10 backdrop-blur-md ring-1 ring-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] hover:bg-white/20 hover:text-white transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Pagination dots */}
            <div className="relative flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-white w-6'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  )
}
