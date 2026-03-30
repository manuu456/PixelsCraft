'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui'
import { ArrowRight, Star } from 'lucide-react'

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let particles: Array<{
      x: number; y: number; vx: number; vy: number
      size: number; opacity: number; life: number; maxLife: number
    }> = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const spawn = () => {
      if (particles.length > 60) return
      const maxLife = 200 + Math.random() * 300
      particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + 10,
        vx: (Math.random() - 0.5) * 0.5,
        vy: -(0.3 + Math.random() * 0.8),
        size: 1 + Math.random() * 2.5,
        opacity: 0,
        life: 0,
        maxLife,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.life++

        const progress = p.life / p.maxLife
        if (progress < 0.1) p.opacity = progress * 10
        else if (progress > 0.8) p.opacity = (1 - progress) * 5
        else p.opacity = 1

        if (p.life >= p.maxLife) {
          particles.splice(i, 1)
          continue
        }

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3)
        gradient.addColorStop(0, `rgba(255, 215, 0, ${p.opacity * 0.8})`)
        gradient.addColorStop(0.4, `rgba(212, 175, 55, ${p.opacity * 0.4})`)
        gradient.addColorStop(1, 'rgba(212, 175, 55, 0)')

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 241, 168, ${p.opacity})`
        ctx.fill()
      }

      if (Math.random() < 0.15) spawn()
      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-[1] pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}

export function HeroSection() {
  return (
    <section data-testid="hero-section" className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 pt-24 pb-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://static.prod-images.emergentagent.com/jobs/c9e6853e-20f6-47e3-abf0-1943be61c72a/images/20a7ee0b05902ebf421af5599b786d28358a31da42009f6ce06ef01c413a7703.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/30 via-[#050505]/50 to-[#050505]" />
      </div>

      {/* Particle System */}
      <ParticleCanvas />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[var(--gold)]/[0.04] rounded-full blur-[150px] pointer-events-none animate-[glow-pulse_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--gold)]/[0.03] rounded-full blur-[120px] pointer-events-none animate-[glow-pulse_8s_ease-in-out_infinite_2s]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-3 justify-center mb-8"
          data-testid="hero-badge"
        >
          <span className="inline-block px-5 py-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--gold)] glass-card rounded-full">
            Trusted by 50+ Clients
          </span>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[var(--gold-light)] text-[var(--gold-light)] drop-shadow-[0_0_4px_rgba(255,215,0,0.5)]" />
            ))}
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tighter leading-[1.05] text-[var(--text-primary)] mb-8"
          data-testid="hero-heading"
        >
          We Build
          <br />
          <span className="text-gold-shine">Digital Products</span>
          <br />
          That Shine
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed mb-12"
          data-testid="hero-subtitle"
        >
          From stunning websites to powerful mobile apps, intelligent AI agents,
          and seamless automations — we transform ideas into pixel-perfect reality.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap gap-5 justify-center mb-16"
        >
          <Button href="/portfolio" variant="primary" data-testid="hero-cta-portfolio">
            View Our Work
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button href="/contact" variant="outline" data-testid="hero-cta-contact">
            Start a Project
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex gap-12 md:gap-16 justify-center"
          data-testid="hero-stats"
        >
          {[
            { value: '50+', label: 'Projects' },
            { value: '30+', label: 'Clients' },
            { value: '4+', label: 'Years' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-3xl md:text-4xl font-bold text-gold-shine">{stat.value}</p>
              <p className="text-xs text-[var(--text-muted)] uppercase tracking-[0.15em] mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
