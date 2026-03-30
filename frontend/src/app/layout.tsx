import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import '@/styles/globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PixelCraft — Building Real World Websites, Apps & AI Agents',
  description:
    'PixelCraft is a boutique digital studio crafting beautiful websites, mobile apps, automation solutions, and AI agents. Every pixel, crafted with purpose.',
  keywords: [
    'web development',
    'mobile apps',
    'AI agents',
    'automation',
    'UI/UX design',
    'React',
    'Next.js',
    'digital agency',
    'India',
  ],
  authors: [{ name: 'PixelCraft Team' }],
  openGraph: {
    title: 'PixelCraft — Building Real World Websites, Apps & AI Agents',
    description:
      'Crafting beautiful websites, mobile apps, automation solutions, and AI agents.',
    url: 'https://pixelcraft.studio',
    siteName: 'PixelCraft',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PixelCraft — Building Real World Websites, Apps & AI Agents',
    description:
      'Crafting beautiful websites, mobile apps, automation solutions, and AI agents.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
