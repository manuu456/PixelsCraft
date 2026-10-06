'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, Sparkles, ChevronRight, Mail, Phone } from 'lucide-react'

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About us' },
  { href: '/contact', label: 'Contact' },
]

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className="flex items-center gap-2.5 group" aria-label="PixelCraft home">
      <motion.div
        whileHover={{ rotate: 12, scale: 1.06 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        className="relative flex items-center justify-center w-9 h-9 rounded-[11px] bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_6px_16px_-6px_rgba(99,102,241,0.7)]"
      >
        <Sparkles className="w-4 h-4 text-white" />
      </motion.div>
      <span className="text-[19px] font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors duration-200">
        PixelCraft
      </span>
    </Link>
  )
}

export function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!isMobileMenuOpen) return
    document.body.style.overflow = 'hidden'
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* Floating glass capsule navbar */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 pt-3"
      >
        <nav
          aria-label="Main"
          className={cn(
            'lg-panel mx-auto max-w-6xl rounded-full transition-all duration-500 ease-expo-out',
            isScrolled
              ? 'lg-strong shadow-[inset_0_1px_0_rgba(255,255,255,1),0_18px_40px_-18px_rgba(30,27,75,0.3)]'
              : ''
          )}
        >
          <div
            className={cn(
              'flex items-center justify-between pl-3 pr-2 sm:pl-4 transition-all duration-500',
              isScrolled ? 'h-14 md:h-[60px]' : 'h-14 md:h-16'
            )}
          >
            <Logo />

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-1 p-1 rounded-full bg-slate-900/[0.04] ring-1 ring-inset ring-black/[0.03]">
              {navLinks.map((link) => {
                const active = isActive(link.href)
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'relative flex items-center px-4 py-2 text-[14.5px] font-medium rounded-full transition-colors duration-200',
                        active ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-900'
                      )}
                    >
                      {active && (
                        <motion.span
                          layoutId="nav-active-pill"
                          className="absolute inset-0 rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.06),0_4px_12px_-4px_rgba(79,70,229,0.25)]"
                          transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                        />
                      )}
                      <span className="relative">{link.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* CTA Button - Desktop */}
            <motion.div className="hidden md:block" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="btn-glossy group flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/70 ring-1 ring-black/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,1)] transition-colors duration-200"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5 text-slate-700" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5 text-slate-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu — floating glass sheet */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/25 backdrop-blur-[6px]"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel - Slide from right, swipe right to dismiss */}
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              initial={{ x: '110%' }}
              animate={{ x: 0 }}
              exit={{ x: '110%' }}
              transition={{ type: 'spring', damping: 32, stiffness: 320 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={{ left: 0, right: 0.6 }}
              onDragEnd={(_, info) => {
                if (info.offset.x > 80 || info.velocity.x > 500) setIsMobileMenuOpen(false)
              }}
              className="lg-panel lg-strong absolute right-2 top-2 bottom-2 w-[310px] max-w-[calc(100vw-1rem)] rounded-[30px] flex flex-col overflow-hidden overscroll-contain"
            >
              {/* Grabber, like an iOS sheet */}
              <div className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-10 rounded-full bg-slate-300/80" aria-hidden="true" />

              {/* Mobile menu header */}
              <div className="flex items-center justify-between px-5 h-[68px]">
                <Logo onClick={() => setIsMobileMenuOpen(false)} />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900/[0.05] active:bg-slate-900/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-slate-600" />
                </button>
              </div>

              {/* Mobile menu links — iOS grouped-list style */}
              <div className="px-4 pb-6 flex-1 overflow-y-auto">
                <ul className="flex flex-col rounded-[20px] bg-white/80 ring-1 ring-black/[0.04] shadow-[0_8px_24px_-14px_rgba(30,27,75,0.25)] overflow-hidden divide-y divide-slate-100">
                  {navLinks.map((link, index) => {
                    const active = isActive(link.href)
                    return (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.04 + 0.08 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          aria-current={active ? 'page' : undefined}
                          className={cn(
                            'flex items-center justify-between py-3.5 px-4 text-base font-medium transition-colors duration-150 active:bg-slate-100',
                            active ? 'text-indigo-600 bg-indigo-50/70' : 'text-slate-800'
                          )}
                        >
                          {link.label}
                          <ChevronRight className={cn('w-4 h-4', active ? 'text-indigo-400' : 'text-slate-300')} />
                        </Link>
                      </motion.li>
                    )
                  })}
                </ul>

                {/* CTA in mobile menu */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="mt-5"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-glossy flex items-center justify-center gap-2 w-full py-3.5 text-sm font-semibold rounded-full"
                  >
                    Contact Us
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>

                <div className="mt-5 rounded-[20px] bg-white/60 ring-1 ring-black/[0.04] divide-y divide-slate-100 text-sm">
                  <a href="mailto:contact@pixelscraft.online" className="flex items-center gap-3 px-4 py-3 text-slate-600 active:bg-slate-100">
                    <Mail className="w-4 h-4 text-indigo-500" />
                    contact@pixelscraft.online
                  </a>
                  <a href="tel:+919391279070" className="flex items-center gap-3 px-4 py-3 text-slate-600 active:bg-slate-100">
                    <Phone className="w-4 h-4 text-indigo-500" />
                    +91 93912 79070
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
