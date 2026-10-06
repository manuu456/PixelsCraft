'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Home, LayoutGrid, Briefcase, Users, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const tabs = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/services', label: 'Services', icon: LayoutGrid },
  { href: '/portfolio', label: 'Work', icon: Briefcase },
  { href: '/about', label: 'About', icon: Users },
  { href: '/contact', label: 'Contact', icon: MessageCircle },
]

/**
 * iOS-style floating glass tab bar for phones.
 * Slides away while scrolling down (like Safari), returns on scroll up,
 * and steps aside while the keyboard is open for a form field.
 */
export function MobileTabBar() {
  const pathname = usePathname()
  const [hidden, setHidden] = useState(false)
  const [typing, setTyping] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const delta = y - lastY.current
      const nearBottom = window.innerHeight + y >= document.documentElement.scrollHeight - 40
      if (y < 80 || nearBottom || delta < -6) setHidden(false)
      else if (delta > 6) setHidden(true)
      lastY.current = y
    }
    const isField = (el: EventTarget | null) =>
      el instanceof HTMLElement && el.matches('input, textarea, select, [contenteditable="true"]')
    const onFocusIn = (e: FocusEvent) => setTyping(isField(e.target))
    const onFocusOut = () => setTyping(false)

    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('focusin', onFocusIn)
    document.addEventListener('focusout', onFocusOut)
    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('focusin', onFocusIn)
      document.removeEventListener('focusout', onFocusOut)
    }
  }, [])

  // Always reveal the bar after navigating
  useEffect(() => setHidden(false), [pathname])

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`))

  return (
    <motion.nav
      aria-label="Quick navigation"
      initial={false}
      animate={{ y: hidden || typing ? 120 : 0, opacity: hidden || typing ? 0 : 1 }}
      transition={{ type: 'spring', stiffness: 380, damping: 34 }}
      className="md:hidden fixed bottom-3 inset-x-3 z-50"
    >
      <ul className="lg-panel lg-strong rounded-[26px] grid grid-cols-5 p-1.5 shadow-[0_18px_40px_-16px_rgba(30,27,75,0.35)]">
        {tabs.map(({ href, label, icon: Icon }) => {
          const active = isActive(href)
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'relative flex flex-col items-center justify-center gap-0.5 h-[52px] rounded-[20px] text-[10.5px] font-medium transition-colors active:scale-95',
                  active ? 'text-indigo-600' : 'text-slate-500'
                )}
              >
                {active && (
                  <motion.span
                    layoutId="tabbar-active"
                    className="absolute inset-0 rounded-[20px] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.06),0_6px_14px_-6px_rgba(79,70,229,0.35)]"
                    transition={{ type: 'spring', stiffness: 500, damping: 38 }}
                  />
                )}
                <Icon className="relative w-[22px] h-[22px]" strokeWidth={active ? 2.2 : 1.8} />
                <span className="relative">{label}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </motion.nav>
  )
}
