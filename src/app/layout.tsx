import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Providers } from '@/components/providers'
import { AmbientBackground } from '@/components/layout/ambient-background'
import { ScrollProgress } from '@/components/layout/scroll-progress'
import { MobileTabBar } from '@/components/layout/mobile-tab-bar'
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

// Tints the Safari / Chrome mobile toolbar to match the page
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f6f6f2',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://pixelscraft.online'),
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
    url: 'https://pixelscraft.online',
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
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        {/* Hide the intro preloader before first paint if it already played this session */}
        <script
          dangerouslySetInnerHTML={{
            __html: "try{if(sessionStorage.getItem('preloaderShown')==='true')document.documentElement.setAttribute('data-preloader-shown','')}catch(e){}",
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[#f6f6f2] text-slate-900">
        <Providers>
          <AmbientBackground />
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <MobileTabBar />
        </Providers>
      </body>
    </html>
  )
}
