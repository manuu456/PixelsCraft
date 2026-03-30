'use client'

import { useState } from 'react'
import { Section, SectionHeader, GlassCard, Button } from '@/components/ui'
import { MapPin, Mail, Phone, Clock, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  { icon: MapPin, label: 'Location', value: 'Tirupati, Andhra Pradesh, India' },
  { icon: Mail, label: 'Email', value: 'hello@pixelcraft.studio' },
  { icon: Phone, label: 'Phone', value: '+91 93912 79070' },
  { icon: Clock, label: 'Working Hours', value: 'Mon - Sat, 9 AM - 7 PM IST' },
]

const projectTypes = ['Website Development', 'Mobile App', 'AI Agent / Chatbot', 'Automation Solution', 'UI/UX Design', 'Security Audit', 'Other']

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="pt-[72px]" data-testid="contact-page">
      <Section>
        <SectionHeader
          label="Get in Touch"
          title={<>Start a Conversation</>}
          subtitle="Have a project in mind? Drop us a message and we'll get back to you within 24 hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-[1100px] w-full">
          {/* Info */}
          <div className="lg:col-span-2">
            <GlassCard className="h-full flex flex-col rounded-2xl" data-testid="contact-info-card">
              <h3 className="font-heading text-2xl font-semibold text-[var(--text-primary)] mb-2">
                Let&apos;s craft something extraordinary.
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-8">
                We take on select projects — so when we work with you, you get our full attention.
              </p>
              <div className="space-y-5 flex-1">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4" data-testid={`contact-info-${item.label.toLowerCase()}`}>
                    <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold)] text-[var(--void)] rounded-xl flex-shrink-0 shadow-[0_4px_12px_rgba(212,175,55,0.2)]">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-bold">{item.label}</p>
                      <p className="text-sm text-[var(--text-primary)] font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-[var(--glass-border)]">
                <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-bold mb-3">Follow Us</p>
                <div className="flex gap-3 flex-wrap">
                  {[
                    { label: 'Twitter', href: 'https://twitter.com/pixelcraft' },
                    { label: 'LinkedIn', href: 'https://linkedin.com/company/pixelcraft' },
                    { label: 'GitHub', href: 'https://github.com/pixelcraft' },
                    { label: 'Dribbble', href: 'https://dribbble.com/pixelcraft' },
                  ].map((s) => (
                    <a
                      key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      data-testid={`contact-social-${s.label.toLowerCase()}`}
                      className="px-4 py-2 text-xs font-medium text-[var(--text-secondary)] glass-card rounded-lg hover:border-[var(--border-gold-active)] hover:text-[var(--gold)] transition-all"
                    >
                      {s.label}
                    </a>
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
                    <CheckCircle className="w-8 h-8 text-[var(--gold)]" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-[var(--text-primary)] mb-3">Message Sent!</h3>
                  <p className="text-[var(--text-secondary)] mb-6">We&apos;ll get back to you within 24 hours.</p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline" data-testid="contact-send-another">Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2 block">First Name</label>
                      <input type="text" required placeholder="Arjun" data-testid="contact-first-name" className="w-full input-field" />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2 block">Last Name</label>
                      <input type="text" required placeholder="Sharma" data-testid="contact-last-name" className="w-full input-field" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2 block">Email Address</label>
                    <input type="email" required placeholder="arjun@company.com" data-testid="contact-email" className="w-full input-field" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2 block">Project Type</label>
                    <select required data-testid="contact-project-type" className="w-full input-field">
                      <option value="" className="bg-[var(--surface-1)]">Select a service...</option>
                      {projectTypes.map((t) => (<option key={t} value={t} className="bg-[var(--surface-1)]">{t}</option>))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2 block">Budget Range (Optional)</label>
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
                    <label className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2 block">Message</label>
                    <textarea required rows={4} placeholder="Tell us about your project..." data-testid="contact-message" className="w-full input-field resize-none" />
                  </div>
                  <button
                    type="submit" disabled={isSubmitting}
                    data-testid="contact-submit-button"
                    className="btn-gold rounded-xl w-full flex items-center justify-center gap-2 py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <><div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="w-4 h-4" /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </Section>
    </div>
  )
}
