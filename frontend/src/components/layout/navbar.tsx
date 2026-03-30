'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  return (
    <>
      <nav
        data-testid="main-navbar"
        className={cn(
          'fixed top-0 left-0 right-0 z-50 h-[72px] px-6 md:px-12 lg:px-24',
          'flex items-center justify-between',
          'glass-header transition-all duration-500',
          isScrolled && 'glass-header-scrolled'
        )}
      >
        <Link
          href="/"
          data-testid="nav-logo"
          className="font-heading font-bold text-xl tracking-tight text-[var(--text-primary)] hover:text-[var(--gold)] transition-colors flex items-center gap-2"
        >
          <span className="w-2 h-2 bg-[var(--gold)] inline-block" />
          PIXELCRAFT
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                data-testid={`nav-${link.label.toLowerCase()}-link`}
                className={cn(
                  'text-sm font-medium tracking-wide transition-colors relative',
                  pathname === link.href
                    ? 'text-[var(--gold)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--gold)]'
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-[var(--gold)]" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          data-testid="nav-cta-button"
          className="hidden lg:flex btn-gold py-2.5 px-7 text-xs"
        >
          Start a Project
        </Link>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors"
          aria-label="Toggle menu"
          data-testid="mobile-menu-toggle"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
            data-testid="mobile-menu-overlay"
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[280px] bg-[var(--surface-1)] border-l border-[var(--border-gold)] pt-20 px-6"
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      data-testid={`mobile-nav-${link.label.toLowerCase()}-link`}
                      className={cn(
                        'block py-3.5 px-4 text-base font-medium transition-all border-b border-[var(--border-subtle)]',
                        pathname === link.href
                          ? 'text-[var(--gold)]'
                          : 'text-[var(--text-secondary)] hover:text-[var(--gold)]'
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-gold w-full text-center block"
                  data-testid="mobile-nav-cta"
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
