import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

const services = [
  { href: '/services#websites', label: 'Website Development' },
  { href: '/services#apps', label: 'Mobile Apps' },
  { href: '/services#automation', label: 'Automation' },
  { href: '/services#ai-agents', label: 'AI Agents' },
  { href: '/services#design', label: 'UI/UX Design' },
]

const company = [
  { href: '/about', label: 'About Us' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
]

const socials = [
  { href: 'https://twitter.com/pixelcraft', label: 'Twitter' },
  { href: 'https://linkedin.com/company/pixelcraft', label: 'LinkedIn' },
  { href: 'https://github.com/pixelcraft', label: 'GitHub' },
]

export function Footer() {
  return (
    <footer data-testid="site-footer" className="border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" data-testid="footer-logo" className="text-lg font-bold tracking-tight text-[#ededed] hover:text-gold transition-colors">
              PIXELCRAFT
            </Link>
            <p className="text-sm text-[#888] leading-relaxed mt-4 max-w-xs">
              Building websites, apps, automations & AI agents. Every pixel crafted with purpose.
            </p>
            <div className="mt-6 space-y-3">
              <a href="https://maps.google.com/?q=Tirupati,Andhra+Pradesh,India" target="_blank" rel="noopener noreferrer" data-testid="footer-address-link" className="flex items-center gap-2.5 text-sm text-[#888] hover:text-gold transition-colors">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />Tirupati, Andhra Pradesh
              </a>
              <a href="mailto:hello@pixelcraft.studio" data-testid="footer-email-link" className="flex items-center gap-2.5 text-sm text-[#888] hover:text-gold transition-colors">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />hello@pixelcraft.studio
              </a>
              <a href="tel:+919391279070" data-testid="footer-phone-link" className="flex items-center gap-2.5 text-sm text-[#888] hover:text-gold transition-colors">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />+91 93912 79070
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 data-testid="footer-services-heading" className="text-xs font-semibold uppercase tracking-[0.15em] text-[#ededed] mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} data-testid={`footer-service-${link.label.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-[#888] hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 data-testid="footer-company-heading" className="text-xs font-semibold uppercase tracking-[0.15em] text-[#ededed] mb-5">Company</h4>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} data-testid={`footer-${link.label.toLowerCase().replace(/\s+/g, '-')}-link`} className="text-sm text-[#888] hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 data-testid="footer-connect-heading" className="text-xs font-semibold uppercase tracking-[0.15em] text-[#ededed] mb-5">Connect</h4>
            <ul className="space-y-3">
              {socials.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" data-testid={`footer-social-${link.label.toLowerCase()}`} className="text-sm text-[#888] hover:text-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p data-testid="footer-copyright" className="text-xs text-[#555]">&copy; {new Date().getFullYear()} PixelCraft. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="text-xs text-[#555] hover:text-[#888] transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="text-xs text-[#555] hover:text-[#888] transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
