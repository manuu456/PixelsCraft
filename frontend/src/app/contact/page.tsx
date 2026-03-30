'use client'

import { useState } from 'react'
import { SectionHeader, GlassCard, Button } from '@/components/ui'
import { MapPin, Mail, Phone, Clock, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  { icon: MapPin, label: 'Location', value: 'Tirupati, Andhra Pradesh, India' },
  { icon: Mail, label: 'Email', value: 'hello@pixelcraft.studio' },
  { icon: Phone, label: 'Phone', value: '+91 93912 79070' },
  { icon: Clock, label: 'Hours', value: 'Mon - Sat, 9 AM - 7 PM IST' },
]

const projectTypes = ['Website Development', 'Mobile App', 'AI Agent / Chatbot', 'Automation Solution', 'UI/UX Design', 'Security Audit', 'Other']

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 1500))
    setIsSubmitting(false); setIsSubmitted(true)
  }

  return (
    <div data-testid="contact-page">
      {/* Hero */}
      <div className="page-hero px-6 md:px-12 lg:px-24 flex flex-col items-center text-center">
        <div className="absolute inset-0 z-0">
          <img src="https://static.prod-images.emergentagent.com/jobs/c9e6853e-20f6-47e3-abf0-1943be61c72a/images/9ddef4ace9635fc74fc602f6c400b90db9d02a22d351dadafbf1105cf675775d.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--void)]/20 via-[var(--void)]/60 to-[var(--void)]" />
        </div>
        <div className="relative z-10">
          <SectionHeader label="Get in Touch" title={<>Start a Conversation</>} subtitle="Have a project in mind? Drop us a message and we'll get back to you within 24 hours." />
        </div>
      </div>

      <section className="px-6 md:px-12 lg:px-24 pb-28 -mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-[1140px] mx-auto">
          {/* Info */}
          <div className="lg:col-span-2">
            <GlassCard className="h-full flex flex-col rounded-2xl" data-testid="contact-info-card">
              <h3 className="font-heading text-2xl font-semibold text-[var(--text-primary)] mb-2">Let&apos;s craft something extraordinary.</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-8">We take on select projects — so when we work with you, you get our full attention.</p>
              <div className="space-y-6 flex-1">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4" data-testid={`contact-info-${item.label.toLowerCase()}`}>
                    <div className="w-11 h-11 flex items-center justify-center bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold)] text-[var(--void)] rounded-xl flex-shrink-0 shadow-[0_4px_15px_rgba(212,175,55,0.3)]">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-[0.2em] font-bold">{item.label}</p>
                      <p className="text-sm text-[var(--text-primary)] font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-[var(--border-subtle)]">
                <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-[0.2em] font-bold mb-3">Follow Us</p>
                <div className="flex gap-2 flex-wrap">
                  {[{ label: 'Twitter', href: 'https://twitter.com/pixelcraft' }, { label: 'LinkedIn', href: 'https://linkedin.com/company/pixelcraft' }, { label: 'GitHub', href: 'https://github.com/pixelcraft' }, { label: 'Dribbble', href: 'https://dribbble.com/pixelcraft' }].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" data-testid={`contact-social-${s.label.toLowerCase()}`} className="gold-badge hover:bg-[rgba(212,175,55,0.15)] transition-all">{s.label}</a>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <GlassCard className="rounded-2xl" data-testid="contact-form-card">
              {isSubmitted ? (
                <div className="text-center py-12" data-testid="contact-success-message">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center glass-card rounded-2xl">
                    <CheckCircle className="w-8 h-8 text-[var(--gold)] drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-[var(--text-primary)] mb-3">Message Sent!</h3>
                  <p className="text-[var(--text-secondary)] mb-6">We&apos;ll get back to you within 24 hours.</p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline" data-testid="contact-send-another">Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-[0.2em] mb-2 block">First Name</label>
                      <input type="text" required placeholder="Arjun" data-testid="contact-first-name" className="w-full input-field" />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-[0.2em] mb-2 block">Last Name</label>
                      <input type="text" required placeholder="Sharma" data-testid="contact-last-name" className="w-full input-field" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-[0.2em] mb-2 block">Email Address</label>
                    <input type="email" required placeholder="arjun@company.com" data-testid="contact-email" className="w-full input-field" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-[0.2em] mb-2 block">Project Type</label>
                    <select required data-testid="contact-project-type" className="w-full input-field">
                      <option value="" className="bg-[var(--surface-1)]">Select a service...</option>
                      {projectTypes.map((t) => (<option key={t} value={t} className="bg-[var(--surface-1)]">{t}</option>))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-[0.2em] mb-2 block">Budget Range (Optional)</label>
                    <select data-testid="contact-budget" className="w-full input-field">
                      <option value="" className="bg-[var(--surface-1)]">Select a range...</option>
                      <option value="<50k" className="bg-[var(--surface-1)]">Less than &#8377;50,000</option>
                      <option value="50k-1L" className="bg-[var(--surface-1)]">&#8377;50,000 - &#8377;1,00,000</option>
                      <option value="1L-3L" className="bg-[var(--surface-1)]">&#8377;1,00,000 - &#8377;3,00,000</option>
                      <option value="3L-5L" className="bg-[var(--surface-1)]">&#8377;3,00,000 - &#8377;5,00,000</option>
                      <option value=">5L" className="bg-[var(--surface-1)]">More than &#8377;5,00,000</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-[0.2em] mb-2 block">Message</label>
                    <textarea required rows={4} placeholder="Tell us about your project..." data-testid="contact-message" className="w-full input-field resize-none" />
                  </div>
                  <button type="submit" disabled={isSubmitting} data-testid="contact-submit-button" className="btn-gold rounded-xl w-full flex items-center justify-center gap-2 py-4 disabled:opacity-70 disabled:cursor-not-allowed">
                    {isSubmitting ? (<><div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" /> Sending...</>) : (<><Send className="w-4 h-4" /> Send Message</>)}
                  </button>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  )
}
