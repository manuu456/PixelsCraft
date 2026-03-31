import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio — PixelCraft',
  description:
    'Explore our portfolio of websites, apps, AI solutions, and automation projects. See how we help businesses transform digitally.',
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
