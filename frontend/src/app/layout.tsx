import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'PixelCraft — Websites, Apps & AI Agents',
  description: 'PixelCraft is a digital studio crafting websites, mobile apps, automation solutions, and AI agents. Based in Tirupati, India.',
  keywords: ['web development', 'mobile apps', 'AI agents', 'automation', 'digital agency', 'Tirupati'],
  authors: [{ name: 'PixelCraft Team' }],
  openGraph: {
    title: 'PixelCraft — Websites, Apps & AI Agents',
    description: 'Crafting websites, mobile apps, automation solutions, and AI agents.',
    siteName: 'PixelCraft',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
