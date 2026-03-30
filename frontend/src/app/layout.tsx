import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'PixelCraft — Websites, Apps & AI Agents',
  description:
    'PixelCraft is a boutique digital studio crafting websites, mobile apps, automation solutions, and AI agents. Based in Tirupati, India.',
  keywords: [
    'web development',
    'mobile apps',
    'AI agents',
    'automation',
    'UI/UX design',
    'digital agency',
    'Tirupati',
    'India',
  ],
  authors: [{ name: 'PixelCraft Team' }],
  openGraph: {
    title: 'PixelCraft — Websites, Apps & AI Agents',
    description:
      'Crafting websites, mobile apps, automation solutions, and AI agents.',
    url: 'https://pixelcraft.studio',
    siteName: 'PixelCraft',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
