'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SegmentedOption<T extends string> {
  value: T
  label: string
}

interface SegmentedControlProps<T extends string> {
  options: SegmentedOption<T>[]
  value: T
  onChange: (value: T) => void
  ariaLabel: string
  /** light: white thumb on a soft track (iOS default). dark: dark thumb with white text */
  tone?: 'light' | 'dark'
  className?: string
}

/**
 * iOS-style segmented control: a sliding thumb follows the active option.
 * Never wraps — on narrow screens it scrolls horizontally and keeps the active option in view.
 */
export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  ariaLabel,
  tone = 'light',
  className,
}: SegmentedControlProps<T>) {
  const layoutId = `segment-thumb-${useId()}`
  const scrollerRef = useRef<HTMLDivElement>(null)
  // Soft edge fades hint that more options are off-screen (only when it actually overflows)
  const [fade, setFade] = useState({ left: false, right: false })

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return
    const update = () => {
      setFade({
        left: scroller.scrollLeft > 4,
        right: scroller.scrollLeft + scroller.clientWidth < scroller.scrollWidth - 4,
      })
    }
    update()
    scroller.addEventListener('scroll', update, { passive: true })
    const observer = new ResizeObserver(update)
    observer.observe(scroller)
    return () => {
      scroller.removeEventListener('scroll', update)
      observer.disconnect()
    }
  }, [])

  const mask = fade.left || fade.right
    ? `linear-gradient(to right, ${fade.left ? 'transparent' : 'black'}, black 28px, black calc(100% - 28px), ${fade.right ? 'transparent' : 'black'})`
    : undefined

  const select = (next: T, target: HTMLButtonElement) => {
    onChange(next)
    // Center the tapped option inside the scroller without moving the page vertically
    const scroller = scrollerRef.current
    if (scroller && scroller.scrollWidth > scroller.clientWidth) {
      scroller.scrollTo({
        left: target.offsetLeft - (scroller.clientWidth - target.clientWidth) / 2,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className={cn('flex justify-center w-full', className)}>
      <div
        ref={scrollerRef}
        className="max-w-full overflow-x-auto no-scrollbar rounded-full"
        style={{ maskImage: mask, WebkitMaskImage: mask }}
      >
        <div
          role="tablist"
          aria-label={ariaLabel}
          className={cn(
            // Frosted glass track (v2)
            'relative inline-flex items-center gap-1 p-1 rounded-full whitespace-nowrap',
            'bg-white/55 backdrop-blur-xl backdrop-saturate-150 ring-1 ring-inset ring-white/80',
            'shadow-[inset_0_1px_0_rgba(255,255,255,1),0_8px_22px_-12px_rgba(30,27,75,0.3)]',
            tone === 'light' ? '' : 'bg-white/60'
          )}
        >
          {options.map((option) => {
            const isActive = option.value === value
            return (
              <button
                key={option.value}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={(e) => select(option.value, e.currentTarget)}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 active:scale-[0.97]',
                  isActive
                    ? tone === 'light'
                      ? 'text-indigo-700'
                      : 'text-white'
                    : 'text-slate-500 hover:text-slate-800'
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId={layoutId}
                    className={cn(
                      'absolute inset-0 rounded-full',
                      tone === 'light'
                        ? 'bg-white shadow-[0_1px_2px_rgba(0,0,0,0.06),0_4px_12px_-4px_rgba(79,70,229,0.3)]'
                        : 'bg-gradient-to-b from-gray-700 to-gray-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_6px_14px_-6px_rgba(0,0,0,0.5)]'
                    )}
                    transition={{ type: 'spring', stiffness: 500, damping: 38 }}
                  />
                )}
                <span className="relative z-10">{option.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
