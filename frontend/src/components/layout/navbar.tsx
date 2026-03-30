'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
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
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav
        data-testid="main-navbar"
        className={cn(
          'fixed top-0 left-0 right-0 z-50 h-16 px-6 md:px-12 lg:px-20',
          'flex items-center justify-between transition-all duration-300',
          scrolled ? 'bg-black/90 backdrop-blur-sm border-b border-[rgba(255,255,255,0.06)]' : 'bg-transparent'
        )}
      >
        <Link href="/" data-testid="nav-logo" className="text-lg font-bold tracking-tight text-[#ededed] hover:text-gold transition-colors">
          PIXELCRAFT
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                data-testid={`nav-${link.label.toLowerCase()}-link`}
                className={cn(
                  'text-[13px] font-medium tracking-wide transition-colors',
                  pathname === link.href ? 'text-gold' : 'text-[#888] hover:text-[#ededed]'
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          data-testid="nav-cta-button"
          className="hidden lg:inline-flex items-center bg-gold text-black text-xs font-semibold px-5 py-2 rounded-lg hover:bg-gold-light transition-colors"
        >
          Start a Project
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[#888] hover:text-[#ededed] transition-colors"
          aria-label="Toggle menu"
          data-testid="mobile-menu-toggle"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden" data-testid="mobile-menu-overlay">
          <div className="absolute inset-0 bg-black/80" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-[260px] bg-[#0a0a0a] border-l border-[rgba(255,255,255,0.06)] pt-20 px-6">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    data-testid={`mobile-nav-${link.label.toLowerCase()}-link`}
                    className={cn(
                      'block py-3 text-[15px] font-medium transition-colors',
                      pathname === link.href ? 'text-gold' : 'text-[#888] hover:text-[#ededed]'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-[rgba(255,255,255,0.06)]">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-gold text-black text-sm font-semibold py-3 rounded-lg hover:bg-gold-light transition-colors"
                data-testid="mobile-nav-cta"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
