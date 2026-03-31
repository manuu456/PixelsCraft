import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'About Us — PixelCraft',
  description:
    'Meet the team behind PixelCraft. We are passionate developers, designers, and creators building digital excellence.',
}

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children
}
