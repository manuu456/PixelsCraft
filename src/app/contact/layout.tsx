import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us — PixelCraft',
  description:
    'Get in touch with PixelCraft. Start a conversation about your next website, app, automation, or AI project.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
