import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { PointerEvent } from 'react'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Feeds the pointer position to `.spotlight` cards so a soft light follows the cursor */
export function trackSpotlight(e: PointerEvent<HTMLElement>) {
  const el = e.currentTarget
  const rect = el.getBoundingClientRect()
  el.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
  el.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
}
