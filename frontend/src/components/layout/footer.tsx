import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

const footerServices = [
  { href: '/services#websites', label: 'Website Development' },
  { href: '/services#apps', label: 'Mobile Apps' },
  { href: '/services#automation', label: 'Automation' },
  { href: '/services#ai-agents', label: 'AI Agents' },
  { href: '/services#design', label: 'UI/UX Design' },
  { href: '/services#security', label: 'Security Audits' },
]

const footerCompany = [
  { href: '/about', label: 'About Us' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
]

const footerSocial = [
  { href: 'https://twitter.com/pixelcraft', label: 'Twitter' },
  { href: 'https://linkedin.com/company/pixelcraft', label: 'LinkedIn' },
  { href: 'https://github.com/pixelcraft', label: 'GitHub' },
  { href: 'https://dribbble.com/pixelcraft', label: 'Dribbble' },
]

export function Footer() {
  return (
    <footer data-testid="site-footer" className="relative mt-24 border-t border-[var(--border-gold)]">
      <div className="bg-[var(--surface-1)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-4">
              <Link
                href="/"
                data-testid="footer-logo"
                className="inline-flex items-center gap-2 font-heading font-bold text-xl tracking-tight text-[var(--text-primary)] hover:text-[var(--gold)] transition-colors mb-5"
              >
                <span className="w-2 h-2 bg-[var(--gold)] inline-block" />
                PIXELCRAFT
              </Link>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-8 max-w-xs">
                Building real world websites, apps, automations &amp; AI agents.
                Every pixel crafted with purpose.
              </p>
              <div className="space-y-3">
                <a
                  href="https://maps.google.com/?q=Tirupati,Andhra+Pradesh,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-address-link"
                  className="flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[var(--gold)] flex-shrink-0" />
                  Tirupati, Andhra Pradesh, India
                </a>
                <a
                  href="mailto:hello@pixelcraft.studio"
                  data-testid="footer-email-link"
                  className="flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[var(--gold)] flex-shrink-0" />
                  hello@pixelcraft.studio
                </a>
                <a
                  href="tel:+919391279070"
                  data-testid="footer-phone-link"
                  className="flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[var(--gold)] flex-shrink-0" />
                  +91 93912 79070
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
              <h4 data-testid="footer-services-heading" className="font-heading font-semibold text-sm tracking-wide uppercase text-[var(--text-primary)] mb-5">
                Services
              </h4>
              <ul className="space-y-3">
                {footerServices.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      data-testid={`footer-service-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="lg:col-span-2">
              <h4 data-testid="footer-company-heading" className="font-heading font-semibold text-sm tracking-wide uppercase text-[var(--text-primary)] mb-5">
                Company
              </h4>
              <ul className="space-y-3">
                {footerCompany.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      data-testid={`footer-${link.label.toLowerCase().replace(/\s+/g, '-')}-link`}
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & Newsletter */}
            <div className="lg:col-span-3">
              <h4 data-testid="footer-connect-heading" className="font-heading font-semibold text-sm tracking-wide uppercase text-[var(--text-primary)] mb-5">
                Connect
              </h4>
              <div className="flex flex-wrap gap-3 mb-8">
                {footerSocial.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`footer-social-${social.label.toLowerCase()}`}
                    className="px-4 py-2 text-xs font-medium text-[var(--text-secondary)] bg-[var(--surface-2)] border border-[var(--border-subtle)] hover:border-[var(--border-gold-active)] hover:text-[var(--gold)] transition-all flex items-center gap-1.5"
                  >
                    {social.label}
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                ))}
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Get insights on tech &amp; AI.
              </p>
              <form className="flex gap-2" data-testid="footer-newsletter-form">
                <input
                  type="email"
                  placeholder="your@email.com"
                  data-testid="footer-newsletter-input"
                  className="flex-1 px-4 py-2.5 text-sm input-field"
                />
                <button
                  type="submit"
                  data-testid="footer-newsletter-submit"
                  className="btn-gold py-2.5 px-5 text-xs"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-[var(--border-subtle)] flex flex-col md:flex-row justify-between items-center gap-4">
            <p data-testid="footer-copyright" className="text-sm text-[var(--text-muted)]">
              &copy; {new Date().getFullYear()} PixelCraft. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/contact" className="text-xs text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="text-xs text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Large brand text */}
        <div className="border-t border-[var(--border-subtle)] py-12 text-center overflow-hidden">
          <p className="font-heading font-bold text-6xl md:text-8xl lg:text-9xl tracking-tighter text-[var(--surface-2)] select-none">
            PIXELCRAFT
          </p>
        </div>
      </div>
    </footer>
  )
}
