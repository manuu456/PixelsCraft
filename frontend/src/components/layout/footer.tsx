import Link from 'next/link'
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Dribbble } from 'lucide-react'

const footerLinks = {
  services: [
    { href: '/services#websites', label: 'Website Development' },
    { href: '/services#apps', label: 'Mobile Apps' },
    { href: '/services#automation', label: 'Automation' },
    { href: '/services#ai-agents', label: 'AI Agents' },
    { href: '/services#design', label: 'UI/UX Design' },
  ],
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ],
  social: [
    { href: 'https://twitter.com/pixelcraft', label: 'Twitter', icon: Twitter },
    { href: 'https://linkedin.com/company/pixelcraft', label: 'LinkedIn', icon: Linkedin },
    { href: 'https://github.com/pixelcraft', label: 'GitHub', icon: Github },
    { href: 'https://dribbble.com/pixelcraft', label: 'Dribbble', icon: Dribbble },
  ],
}

export function Footer() {
  return (
    <footer className="relative mt-20">
      {/* Glass background */}
      <div className="absolute inset-0 bg-[rgba(10,10,10,0.85)] backdrop-blur-xl border-t border-[rgba(245,197,24,0.1)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-serif font-bold text-2xl text-[var(--gold)] mb-4 hover:opacity-80 transition-opacity"
            >
              PixelCraft
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--gold)] shadow-[0_0_10px_rgba(245,197,24,0.5)]" />
            </Link>
            <p className="text-[var(--text-mid)] text-sm leading-relaxed mb-6 max-w-xs">
              Building real world websites, apps, automations & AI agents.
              Every pixel crafted with purpose.
            </p>
            <div className="space-y-3">
              <a
                href="https://maps.google.com/?q=Tirupati,Andhra+Pradesh,India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[var(--text-mid)] hover:text-[var(--gold)] transition-colors"
              >
                <MapPin className="w-4 h-4 text-[var(--gold)]" />
                <span>Tirupati, Andhra Pradesh, India</span>
              </a>
              <a
                href="mailto:hello@pixelcraft.studio"
                className="flex items-center gap-3 text-sm text-[var(--text-mid)] hover:text-[var(--gold)] transition-colors"
              >
                <Mail className="w-4 h-4 text-[var(--gold)]" />
                <span>hello@pixelcraft.studio</span>
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-sm text-[var(--text-mid)] hover:text-[var(--gold)] transition-colors"
              >
                <Phone className="w-4 h-4 text-[var(--gold)]" />
                <span>+91 98765 43210</span>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-serif font-semibold text-lg text-[var(--text-dark)] mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-mid)] hover:text-[var(--gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-serif font-semibold text-lg text-[var(--text-dark)] mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-mid)] hover:text-[var(--gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social Column */}
          <div>
            <h4 className="font-serif font-semibold text-lg text-[var(--text-dark)] mb-5">
              Stay Updated
            </h4>
            <p className="text-sm text-[var(--text-mid)] mb-4">
              Get insights on tech, design & AI delivered to your inbox.
            </p>
            <form className="flex gap-2 mb-6">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 rounded-xl bg-[rgba(245,197,24,0.05)] border border-[rgba(245,197,24,0.15)] text-sm text-[var(--text-light)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)] focus:ring-2 focus:ring-[rgba(245,197,24,0.2)] backdrop-blur-sm transition-all"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-[var(--gold)] text-black text-sm font-semibold hover:bg-[var(--gold-light)] transition-colors shadow-[0_4px_15px_rgba(245,197,24,0.3)]"
              >
                Join
              </button>
            </form>

            {/* Social Links */}
            <div className="flex gap-3">
              {footerLinks.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[rgba(245,197,24,0.08)] border border-[rgba(245,197,24,0.15)] flex items-center justify-center text-[var(--text-mid)] hover:text-[var(--gold)] hover:bg-[rgba(245,197,24,0.15)] hover:border-[rgba(245,197,24,0.3)] transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[rgba(245,197,24,0.1)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--text-mid)] opacity-75">
            Every pixel, crafted with care — Tirupati, India © {new Date().getFullYear()}
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            Built with love by D Manoj Bharadwaj · R Kushal Kumar · Akhil Krishna Prasad · Chakradhar Reddy
          </p>
        </div>
      </div>
    </footer>
  )
}
