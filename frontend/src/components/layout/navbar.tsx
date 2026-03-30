'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* Curved Navbar */}
      <nav
        className={cn(
          'fixed top-4 left-4 right-4 z-50 h-[64px] px-6 md:px-10',
          'flex items-center justify-between',
          'rounded-full',
          'glass-nav transition-all duration-400',
          isScrolled && 'glass-nav-scrolled top-2'
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-serif font-bold text-2xl text-bloom flex items-center gap-2.5 tracking-tight hover:opacity-80 transition-opacity"
        >
          PixelCraft
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--gold)] animate-pulse shadow-[0_0_10px_rgba(245,197,24,0.5)]" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[0.85rem] font-medium uppercase tracking-[0.08em] text-[var(--text-mid)] relative transition-colors hover:text-bloom group"
              >
                {link.label}
                <span className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-bloom scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 rounded-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button - Desktop */}
        <Link
          href="/contact"
          className="hidden lg:flex btn-primary py-2.5 px-6 text-sm"
        >
          Start Project
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-bloom" />
          ) : (
            <Menu className="w-6 h-6 text-[var(--text-mid)]" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-4 top-20 bottom-4 w-[280px] glass rounded-3xl pt-6 px-6 overflow-hidden"
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 px-4 text-lg font-medium text-[var(--text-mid)] hover:text-bloom hover:bg-white/5 rounded-xl transition-all"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* CTA in mobile menu */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary w-full text-center"
                >
                  Start a Project
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
