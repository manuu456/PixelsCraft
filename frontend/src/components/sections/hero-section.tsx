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
    let particles: Array<{ x: number; y: number; vx: number; vy: number; size: number; opacity: number; life: number; maxLife: number }> = []
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)
    const spawn = () => {
      if (particles.length > 80) return
      particles.push({ x: Math.random() * canvas.width, y: canvas.height + 10, vx: (Math.random() - 0.5) * 0.6, vy: -(0.4 + Math.random() * 1.2), size: 1 + Math.random() * 3, opacity: 0, life: 0, maxLife: 150 + Math.random() * 250 })
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx; p.y += p.vy; p.life++
        const prog = p.life / p.maxLife
        if (prog < 0.1) p.opacity = prog * 10
        else if (prog > 0.75) p.opacity = (1 - prog) * 4
        else p.opacity = 1
        if (p.life >= p.maxLife) { particles.splice(i, 1); continue }
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4)
        g.addColorStop(0, `rgba(255, 215, 0, ${p.opacity * 0.9})`)
        g.addColorStop(0.3, `rgba(212, 175, 55, ${p.opacity * 0.5})`)
        g.addColorStop(1, 'rgba(212, 175, 55, 0)')
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill()
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size * 0.6, 0, Math.PI * 2); ctx.fillStyle = `rgba(255, 241, 168, ${p.opacity})`; ctx.fill()
      }
      if (Math.random() < 0.2) spawn()
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvasRef} className="absolute inset-0 z-[1] pointer-events-none" style={{ mixBlendMode: 'screen' }} />
}

export function HeroSection() {
  return (
    <section data-testid="hero-section" className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src="https://static.prod-images.emergentagent.com/jobs/c9e6853e-20f6-47e3-abf0-1943be61c72a/images/44508659ce2f70d11413c660a5e6ad2a9446528148ba7e39d3b19548e5b4a640.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--void)]/30 via-[var(--void)]/50 to-[var(--void)]" />
      </div>

      <ParticleCanvas />

      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-[10%] w-[500px] h-[500px] bg-[var(--gold)]/[0.05] rounded-full blur-[180px] pointer-events-none animate-[glow-pulse_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 right-[10%] w-[400px] h-[400px] bg-[var(--gold)]/[0.04] rounded-full blur-[150px] pointer-events-none animate-[glow-pulse_8s_ease-in-out_infinite_2s]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center pt-20">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-3 justify-center mb-10" data-testid="hero-badge">
          <span className="gold-badge">Trusted by 50+ Clients</span>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-[var(--gold-light)] text-[var(--gold-light)] drop-shadow-[0_0_6px_rgba(255,215,0,0.6)]" />)}
          </div>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tighter leading-[1.05] mb-8" data-testid="hero-heading">
          <span className="text-[var(--text-primary)]">We Build</span><br />
          <span className="text-gold-shine">Digital Products</span><br />
          <span className="text-[var(--text-primary)]">That Shine</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed mb-12" data-testid="hero-subtitle">
          From stunning websites to powerful mobile apps, intelligent AI agents, and seamless automations — we transform ideas into pixel-perfect reality.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-wrap gap-5 justify-center mb-20">
          <Button href="/portfolio" variant="primary" data-testid="hero-cta-portfolio">View Our Work <ArrowRight className="w-4 h-4 ml-2" /></Button>
          <Button href="/contact" variant="outline" data-testid="hero-cta-contact">Start a Project</Button>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex gap-16 justify-center" data-testid="hero-stats">
          {[{ value: '50+', label: 'Projects' }, { value: '30+', label: 'Clients' }, { value: '4+', label: 'Years' }].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-4xl md:text-5xl font-bold text-gold-shine drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]">{stat.value}</p>
              <p className="text-[11px] text-[var(--text-muted)] uppercase tracking-[0.2em] mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--void)] to-transparent z-[5]" />
    </section>
  )
}
