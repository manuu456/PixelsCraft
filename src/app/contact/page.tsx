'use client'

import { useState } from 'react'
import { Section, SectionHeader, GlassCard, Button } from '@/components/ui'
import { MapPin, Mail, Phone, Clock, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Tirupati, Andhra Pradesh, India',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@pixelcraft.studio',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98765 43210',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon – Sat · 9 AM – 7 PM IST',
  },
]

const projectTypes = [
  'Website Development',
  'Mobile App',
  'AI Agent / Chatbot',
  'Automation Solution',
  'UI/UX Design',
  'Security Audit',
  'Other',
]

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="pt-28">
      <Section>
        <SectionHeader
          label="Get in Touch"
          title={
            <>
              Start a <em>Conversation</em>
            </>
          }
          subtitle="Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you within 24 hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl w-full">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <GlassCard className="h-full flex flex-col">
              <h3 className="font-serif text-2xl font-semibold text-[var(--text-dark)] mb-2">
                Let&apos;s craft something{' '}
                <em className="text-[var(--gold)]">extraordinary</em> together.
              </h3>
              <p className="text-sm text-[var(--text-mid)] leading-relaxed mb-8">
                We&apos;re a small team that takes on select projects — so when we work with
                you, you get our full attention and passion.
              </p>

              <div className="space-y-5 flex-1">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[rgba(245,197,24,0.1)] border border-[rgba(245,197,24,0.2)] flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[var(--gold)]" />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-sm text-[var(--text-dark)] font-medium">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-[rgba(245,197,24,0.1)]">
                <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-3">
                  Follow Us
                </p>
                <div className="flex gap-3 flex-wrap">
                  {['Twitter', 'LinkedIn', 'GitHub', 'Dribbble'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="px-4 py-2 text-sm font-medium text-[var(--text-mid)] bg-[rgba(245,197,24,0.08)] hover:bg-[rgba(245,197,24,0.15)] border border-[rgba(245,197,24,0.15)] hover:border-[rgba(245,197,24,0.25)] rounded-lg transition-all hover:text-[var(--gold)]"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <GlassCard>
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[rgba(245,197,24,0.15)] border border-[rgba(245,197,24,0.3)] flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-[var(--gold)]" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[var(--text-dark)] mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-[var(--text-mid)] mb-6">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="glass">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[var(--text-mid)] uppercase tracking-wider mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Arjun"
                        className="w-full px-4 py-3 rounded-xl bg-[rgba(245,197,24,0.05)] border border-[rgba(245,197,24,0.12)] text-[var(--text-light)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)] focus:ring-2 focus:ring-[rgba(245,197,24,0.2)] backdrop-blur-sm transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[var(--text-mid)] uppercase tracking-wider mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-[rgba(245,197,24,0.05)] border border-[rgba(245,197,24,0.12)] text-[var(--text-light)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)] focus:ring-2 focus:ring-[rgba(245,197,24,0.2)] backdrop-blur-sm transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-medium text-[var(--text-mid)] uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="arjun@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[rgba(245,197,24,0.05)] border border-[rgba(245,197,24,0.12)] text-[var(--text-light)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)] focus:ring-2 focus:ring-[rgba(245,197,24,0.2)] backdrop-blur-sm transition-all"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-medium text-[var(--text-mid)] uppercase tracking-wider mb-2">
                      Project Type
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[rgba(245,197,24,0.05)] border border-[rgba(245,197,24,0.12)] text-[var(--text-light)] focus:outline-none focus:border-[var(--gold)] focus:ring-2 focus:ring-[rgba(245,197,24,0.2)] backdrop-blur-sm transition-all"
                    >
                      <option value="" className="bg-[#0a0a0a] text-[var(--text-light)]">Select a service...</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-[#0a0a0a] text-[var(--text-light)]">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget Range */}
                  <div>
                    <label className="block text-xs font-medium text-[var(--text-mid)] uppercase tracking-wider mb-2">
                      Budget Range (Optional)
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl bg-[rgba(245,197,24,0.05)] border border-[rgba(245,197,24,0.12)] text-[var(--text-light)] focus:outline-none focus:border-[var(--gold)] focus:ring-2 focus:ring-[rgba(245,197,24,0.2)] backdrop-blur-sm transition-all">
                      <option value="" className="bg-[#0a0a0a]">Select a range...</option>
                      <option value="<50k" className="bg-[#0a0a0a]">Less than ₹50,000</option>
                      <option value="50k-1L" className="bg-[#0a0a0a]">₹50,000 - ₹1,00,000</option>
                      <option value="1L-3L" className="bg-[#0a0a0a]">₹1,00,000 - ₹3,00,000</option>
                      <option value="3L-5L" className="bg-[#0a0a0a]">₹3,00,000 - ₹5,00,000</option>
                      <option value=">5L" className="bg-[#0a0a0a]">More than ₹5,00,000</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-[var(--text-mid)] uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your project, goals, and timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-[rgba(245,197,24,0.05)] border border-[rgba(245,197,24,0.12)] text-[var(--text-light)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)] focus:ring-2 focus:ring-[rgba(245,197,24,0.2)] backdrop-blur-sm transition-all resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
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
