'use client'

import { useState } from 'react'
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
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div data-testid="contact-page" className="pt-28 pb-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">Get in Touch</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#ededed] mb-5">
            Start a conversation
          </h1>
          <p className="text-base text-[#888] leading-relaxed">
            Have a project in mind? Drop us a message and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div data-testid="contact-info-card">
              <div className="space-y-6 mb-10">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4" data-testid={`contact-info-${item.label.toLowerCase()}`}>
                    <item.icon className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[10px] text-[#555] uppercase tracking-[0.15em] font-semibold mb-1">{item.label}</p>
                      <p className="text-sm text-[#ededed]">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-[rgba(255,255,255,0.06)] pt-6">
                <p className="text-[10px] text-[#555] uppercase tracking-[0.15em] font-semibold mb-3">Follow Us</p>
                <div className="flex gap-4">
                  {[
                    { label: 'Twitter', href: 'https://twitter.com/pixelcraft' },
                    { label: 'LinkedIn', href: 'https://linkedin.com/company/pixelcraft' },
                    { label: 'GitHub', href: 'https://github.com/pixelcraft' },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" data-testid={`contact-social-${s.label.toLowerCase()}`} className="text-sm text-[#888] hover:text-gold transition-colors">
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="border border-[rgba(255,255,255,0.06)] rounded-xl p-7" data-testid="contact-form-card">
              {isSubmitted ? (
                <div className="text-center py-12" data-testid="contact-success-message">
                  <CheckCircle className="w-8 h-8 text-gold mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-[#ededed] mb-2">Message Sent!</h3>
                  <p className="text-sm text-[#888] mb-6">We&apos;ll get back to you within 24 hours.</p>
                  <button onClick={() => setIsSubmitted(false)} data-testid="contact-send-another" className="text-sm text-gold font-medium hover:underline">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-semibold text-[#555] uppercase tracking-[0.15em] mb-2 block">First Name</label>
                      <input type="text" required placeholder="Arjun" data-testid="contact-first-name" className="w-full bg-[#0a0a0a] border border-[rgba(255,255,255,0.06)] text-[#ededed] text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-gold transition-colors placeholder:text-[#333]" />
                    </div>
                    <div>
                      <label className="text-[10px] font-semibold text-[#555] uppercase tracking-[0.15em] mb-2 block">Last Name</label>
                      <input type="text" required placeholder="Sharma" data-testid="contact-last-name" className="w-full bg-[#0a0a0a] border border-[rgba(255,255,255,0.06)] text-[#ededed] text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-gold transition-colors placeholder:text-[#333]" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-semibold text-[#555] uppercase tracking-[0.15em] mb-2 block">Email Address</label>
                    <input type="email" required placeholder="arjun@company.com" data-testid="contact-email" className="w-full bg-[#0a0a0a] border border-[rgba(255,255,255,0.06)] text-[#ededed] text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-gold transition-colors placeholder:text-[#333]" />
                  </div>
                  <div>
                    <label className="text-[10px] font-semibold text-[#555] uppercase tracking-[0.15em] mb-2 block">Project Type</label>
                    <select required data-testid="contact-project-type" className="w-full bg-[#0a0a0a] border border-[rgba(255,255,255,0.06)] text-[#ededed] text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-gold transition-colors">
                      <option value="" className="bg-[#0a0a0a]">Select a service...</option>
                      {projectTypes.map((t) => (<option key={t} value={t} className="bg-[#0a0a0a]">{t}</option>))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-semibold text-[#555] uppercase tracking-[0.15em] mb-2 block">Budget Range (Optional)</label>
                    <select data-testid="contact-budget" className="w-full bg-[#0a0a0a] border border-[rgba(255,255,255,0.06)] text-[#ededed] text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-gold transition-colors">
                      <option value="" className="bg-[#0a0a0a]">Select a range...</option>
                      <option value="<50k" className="bg-[#0a0a0a]">Less than &#8377;50,000</option>
                      <option value="50k-1L" className="bg-[#0a0a0a]">&#8377;50,000 - &#8377;1,00,000</option>
                      <option value="1L-3L" className="bg-[#0a0a0a]">&#8377;1,00,000 - &#8377;3,00,000</option>
                      <option value="3L-5L" className="bg-[#0a0a0a]">&#8377;3,00,000 - &#8377;5,00,000</option>
                      <option value=">5L" className="bg-[#0a0a0a]">More than &#8377;5,00,000</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-semibold text-[#555] uppercase tracking-[0.15em] mb-2 block">Message</label>
                    <textarea required rows={4} placeholder="Tell us about your project..." data-testid="contact-message" className="w-full bg-[#0a0a0a] border border-[rgba(255,255,255,0.06)] text-[#ededed] text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-gold transition-colors resize-none placeholder:text-[#333]" />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    data-testid="contact-submit-button"
                    className="w-full flex items-center justify-center gap-2 bg-gold text-black text-sm font-semibold py-3.5 rounded-lg hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <><div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="w-4 h-4" /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
