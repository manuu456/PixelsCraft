'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const footerColumns = {
  company: {
    title: 'Company',
    links: [
      { href: '/about', label: 'About Us' },
      { href: '/about#team', label: 'Our Team' },
      { href: '/careers', label: 'Careers' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  services: {
    title: 'Services',
    links: [
      { href: '/services#websites', label: 'Web Development' },
      { href: '/services#apps', label: 'Mobile Apps' },
      { href: '/services#ai-agents', label: 'AI Solutions' },
      { href: '/services#automation', label: 'Automation' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { href: '/blog', label: 'Blog' },
      { href: '/portfolio', label: 'Portfolio' },
      { href: '/portfolio', label: 'Case Studies' },
      { href: '/contact#faq', label: 'FAQ' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
      { href: '/cookies', label: 'Cookie Policy' },
    ],
  },
}

const socialLinks = [
  { href: 'https://facebook.com/pixelcraft', label: 'Facebook', icon: Facebook },
  { href: 'https://twitter.com/pixelcraft', label: 'Twitter', icon: Twitter },
  { href: 'https://linkedin.com/company/pixelcraft', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://instagram.com/pixelcraft', label: 'Instagram', icon: Instagram },
]

type SubscribeStatus = 'idle' | 'sending' | 'done' | 'error'

export function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<SubscribeStatus>('idle')

  // Newsletter sign-ups are delivered to the team inbox through the same endpoint as the contact form
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || status === 'sending') return
    setStatus('sending')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Newsletter subscriber',
          email,
          projectType: 'Newsletter sign-up',
          message: `Please add ${email} to the PixelCraft newsletter.`,
        }),
      })
      if (!response.ok) throw new Error('Request failed')
      setStatus('done')
      setEmail('')
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
    }
  }

  return (
    <footer className="relative bg-[#0b1120] overflow-hidden">
      {/* Soft glows + top hairline */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[40rem] h-[22rem] rounded-full" style={{ background: 'radial-gradient(closest-side, rgba(99,102,241,0.22), transparent)' }} />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      {/* Newsletter Section */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-16 pb-12">
        <div className="lg-dark max-w-xl mx-auto text-center mb-14 rounded-[28px] px-5 py-8 sm:px-8">
          <h3 className="text-xl font-semibold text-white mb-3">
            Stay Updated
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Subscribe to our newsletter for the latest updates and insights.
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="email"
                inputMode="email"
                autoComplete="email"
                enterKeyHint="send"
                aria-label="Email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (status === 'error') setStatus('idle')
                }}
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 rounded-full bg-white/[0.06] ring-1 ring-white/15 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/70 focus:bg-white/[0.09] transition-all text-base sm:text-sm"
                required
              />
            </div>
            <motion.button
              type="submit"
              disabled={status === 'sending'}
              className="btn-glossy px-5 py-3 rounded-full font-semibold text-sm disabled:opacity-70 min-w-[7rem]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {status === 'sending' ? 'Sending…' : status === 'done' ? 'Subscribed!' : 'Subscribe'}
            </motion.button>
          </form>
          <p aria-live="polite" className="min-h-[1.25rem] mt-3 text-xs">
            {status === 'done' && <span className="text-emerald-400">Thanks — you&apos;re on the list.</span>}
            {status === 'error' && (
              <span className="text-rose-400">
                Couldn&apos;t subscribe right now. Please email{' '}
                <a href="mailto:contact@pixelscraft.online" className="underline">contact@pixelscraft.online</a>.
              </span>
            )}
          </p>
        </div>

        {/* Link Columns - 4 Column Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {Object.values(footerColumns).map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold text-white text-sm mb-5 tracking-wide">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, index) => (
                  <li key={`${link.href}-${index}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-10 pt-8 border-t border-white/[0.08]">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400">
            <a
              href="mailto:contact@pixelscraft.online"
              className="flex items-center gap-2 hover:text-indigo-400 transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              contact@pixelscraft.online
            </a>
            <span className="hidden sm:block text-white/15">|</span>
            <a
              href="tel:+919391279070"
              className="flex items-center gap-2 hover:text-indigo-400 transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 93912 79070
            </a>
          </div>
        </div>
      </div>

      {/* Middle Section - Social Icons */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-8 border-t border-white/[0.08]">
        <div className="flex items-center justify-center">
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/[0.06] ring-1 ring-white/15 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] flex items-center justify-center text-gray-300 hover:text-white hover:bg-indigo-500/80 hover:ring-indigo-400 transition-all duration-300"
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section - Giant Watermark */}
      <div className="relative h-32 sm:h-40 md:h-52 lg:h-64 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-center pointer-events-none select-none">
          <span
            className="text-[80px] sm:text-[120px] md:text-[180px] lg:text-[240px] xl:text-[300px] font-bold leading-none tracking-tight whitespace-nowrap bg-gradient-to-b from-white/[0.12] to-white/[0.01] bg-clip-text text-transparent"
            style={{
              transform: 'translateY(25%)',
            }}
          >
            PixelCraft
          </span>
        </div>
      </div>

      {/* Copyright - below watermark */}
      <div className="absolute bottom-[6.5rem] md:bottom-2 left-0 right-0 text-center">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} PixelCraft. All rights reserved.
        </p>
      </div>

      {/* Room for the floating tab bar on phones */}
      <div className="h-24 md:hidden" aria-hidden="true" />
    </footer>
  )
}
