'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Send, CheckCircle, Sparkles, Globe } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@pixelscraft.online',
    href: 'mailto:contact@pixelscraft.online',
    color: 'bg-indigo-500',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 93912 79070',
    href: 'tel:+919391279070',
    color: 'bg-purple-500',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Tirupati, Andhra Pradesh, India',
    href: 'https://maps.google.com/?q=Tirupati,Andhra+Pradesh,India',
    color: 'bg-violet-500',
  },
]

const socialLinks = [
  { name: 'Twitter', icon: 'X' },
  { name: 'LinkedIn', icon: 'in' },
  { name: 'GitHub', icon: 'GH' },
  { name: 'Dribbble', icon: 'Dr' },
]

const faqs = [
  {
    question: 'How long does it take to build a website?',
    answer: 'Typically 2-4 weeks for a standard website, depending on complexity and requirements. We provide detailed timelines after initial consultation.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'We offer project-based pricing tailored to your specific needs. Contact us for a free quote based on your requirements.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes! We offer maintenance packages and ongoing support to keep your digital products running smoothly.',
  },
  {
    question: 'Can you help with existing projects?',
    answer: 'Absolutely. We can take over, improve, or scale existing projects. Just share the details and we will assess how we can help.',
  },
  {
    question: 'What technologies do you work with?',
    answer: 'We specialize in React, Next.js, React Native, Node.js, Python, and AI/ML technologies. We choose the best stack for each project.',
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

const easeOutExpo = [0.16, 1, 0.3, 1]

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.1,
      ease: easeOutExpo,
    },
  }),
}

const ContactIllustration = () => (
  <svg viewBox="0 0 280 140" className="w-full h-full">
    <defs>
      <linearGradient id="envGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.7" />
      </linearGradient>
      <linearGradient id="bubbleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    
    {/* Decorative dots */}
    <circle cx="30" cy="20" r="4" fill="#6366f1" opacity="0.4" />
    <circle cx="50" cy="35" r="3" fill="#8b5cf6" opacity="0.5" />
    <circle cx="240" cy="25" r="5" fill="#a855f7" opacity="0.4" />
    <circle cx="260" cy="45" r="3" fill="#6366f1" opacity="0.3" />
    
    {/* Decorative lines */}
    <line x1="20" y1="60" x2="45" y2="60" stroke="#6366f1" strokeWidth="2" opacity="0.3" strokeLinecap="round" />
    <line x1="235" y1="70" x2="270" y2="70" stroke="#8b5cf6" strokeWidth="2" opacity="0.3" strokeLinecap="round" />
    
    {/* Main envelope */}
    <g transform="translate(90, 30)">
      <rect x="0" y="20" width="100" height="70" rx="8" fill="url(#envGradient)" />
      <path d="M0 28 L50 60 L100 28" fill="none" stroke="white" strokeWidth="2" opacity="0.8" />
      <rect x="0" y="20" width="100" height="70" rx="8" fill="none" stroke="white" strokeWidth="1.5" opacity="0.3" />
    </g>
    
    {/* Message bubble */}
    <g transform="translate(160, 10)">
      <rect x="0" y="0" width="60" height="40" rx="8" fill="url(#bubbleGradient)" />
      <path d="M10 45 L20 35 L30 45" fill="url(#bubbleGradient)" />
      <line x1="12" y1="14" x2="48" y2="14" stroke="white" strokeWidth="2" opacity="0.6" strokeLinecap="round" />
      <line x1="12" y1="22" x2="40" y2="22" stroke="white" strokeWidth="2" opacity="0.4" strokeLinecap="round" />
      <line x1="12" y1="30" x2="32" y2="30" stroke="white" strokeWidth="2" opacity="0.3" strokeLinecap="round" />
    </g>
    
    {/* Small envelope flying */}
    <g transform="translate(40, 80)">
      <rect x="0" y="0" width="35" height="25" rx="4" fill="#6366f1" opacity="0.5" />
      <path d="M0 4 L17.5 15 L35 4" fill="none" stroke="white" strokeWidth="1.5" opacity="0.6" />
    </g>
    
    {/* Sparkles */}
    <g transform="translate(75, 15)">
      <path d="M0 5 L5 0 L10 5 L5 10 Z" fill="#fbbf24" opacity="0.8" />
    </g>
    <g transform="translate(200, 85)">
      <path d="M0 4 L4 0 L8 4 L4 8 Z" fill="#fbbf24" opacity="0.6" />
    </g>
  </svg>
)

const FloatingIllustrationLeft = () => (
  <motion.div
    className="absolute left-0 top-1/4 w-32 md:w-48 opacity-60 pointer-events-none hidden lg:block"
    animate={{ y: [0, -20, 0], rotate: [0, 3, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
  >
    <svg viewBox="0 0 120 200" className="w-full h-full">
      <defs>
        <linearGradient id="leftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="50" r="40" fill="url(#leftGrad)" />
      <circle cx="30" cy="120" r="25" fill="#6366f1" opacity="0.15" />
      <circle cx="80" cy="160" r="30" fill="#a855f7" opacity="0.1" />
      <rect x="45" y="80" width="50" height="3" rx="1.5" fill="#6366f1" opacity="0.2" />
      <rect x="55" y="90" width="35" height="3" rx="1.5" fill="#8b5cf6" opacity="0.15" />
    </svg>
  </motion.div>
)

const FloatingIllustrationRight = () => (
  <motion.div
    className="absolute right-0 top-1/3 w-32 md:w-48 opacity-60 pointer-events-none hidden lg:block"
    animate={{ y: [0, -15, 0], rotate: [0, -3, 0] }}
    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
  >
    <svg viewBox="0 0 120 200" className="w-full h-full">
      <defs>
        <linearGradient id="rightGrad" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="35" fill="url(#rightGrad)" />
      <circle cx="90" cy="130" r="28" fill="#8b5cf6" opacity="0.12" />
      <circle cx="40" cy="170" r="22" fill="#6366f1" opacity="0.15" />
      <path d="M20 100 L40 80 L60 100 L40 120 Z" fill="#a855f7" opacity="0.1" />
    </svg>
  </motion.div>
)

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      projectType: formData.get('projectType'),
      budget: formData.get('budget'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        alert('Failed to send message. Please try again or email us directly.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to send message. Please try again or email us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-28 pb-20 overflow-hidden relative">
      {/* Background ambient elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-1/4 w-80 h-80 bg-purple-100/40 rounded-full blur-3xl" />
      </div>

      <FloatingIllustrationLeft />
      <FloatingIllustrationRight />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-6"
            variants={fadeUpVariants}
            custom={0}
          >
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-medium text-indigo-600">We&apos;d love to hear from you</span>
          </motion.div>

          <motion.h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 mb-4"
            variants={fadeUpVariants}
            custom={1}
          >
            Get In <em className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Touch</em>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            variants={fadeUpVariants}
            custom={2}
          >
            Let&apos;s discuss your project and bring your vision to life
          </motion.p>
        </motion.div>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 mb-20">
          {/* Left Column - Contact Info Card */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: easeOutExpo }}
          >
            <div className="h-full bg-gradient-to-br from-indigo-50 via-purple-50 to-violet-50 rounded-3xl border border-indigo-100/50 overflow-hidden shadow-lg shadow-indigo-100/30">
              {/* Illustration Section - 30% */}
              <div className="h-[140px] relative bg-gradient-to-br from-indigo-100/50 to-purple-100/50 p-4">
                <ContactIllustration />
              </div>

              {/* Content Section - 70% */}
              <div className="p-6 md:p-8">
                <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-2">
                  Let&apos;s create something{' '}
                  <em className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">amazing</em>
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-8">
                  We&apos;re a passionate team ready to bring your ideas to life. Reach out through any channel below.
                </p>

                {/* Contact Details */}
                <div className="space-y-5 mb-8">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target={item.label === 'Address' ? '_blank' : undefined}
                      rel={item.label === 'Address' ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 group cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      whileHover={{ x: 4 }}
                    >
                      <div className={`w-11 h-11 rounded-full ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-200/50 group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                          {item.label}
                        </p>
                        <p className="text-sm text-gray-800 font-medium group-hover:text-indigo-600 transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-indigo-100">
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-4">
                    Connect With Us
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href="#"
                        className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center text-sm font-semibold text-gray-600 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all duration-300 shadow-sm"
                        whileHover={{ scale: 1.15, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form Card */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: easeOutExpo }}
          >
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 p-6 md:p-10">
              {isSubmitted ? (
                <motion.div
                  className="text-center py-16"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-200"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                  >
                    <CheckCircle className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="font-serif text-3xl font-semibold text-gray-900 mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 mb-8 max-w-sm mx-auto">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field - Full Width */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Name"
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 text-gray-900 placeholder:text-gray-400 focus:outline-none transition-all duration-300 ${
                        focusedField === 'name'
                          ? 'border-indigo-500 bg-white shadow-lg shadow-indigo-100/50'
                          : 'border-gray-100 hover:border-gray-200'
                      }`}
                    />
                  </div>

                  {/* Email Field - Full Width */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email"
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 text-gray-900 placeholder:text-gray-400 focus:outline-none transition-all duration-300 ${
                        focusedField === 'email'
                          ? 'border-indigo-500 bg-white shadow-lg shadow-indigo-100/50'
                          : 'border-gray-100 hover:border-gray-200'
                      }`}
                    />
                  </div>

                  {/* Subject Dropdown */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      name="projectType"
                      required
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 text-gray-900 focus:outline-none transition-all duration-300 appearance-none cursor-pointer ${
                        focusedField === 'subject'
                          ? 'border-indigo-500 bg-white shadow-lg shadow-indigo-100/50'
                          : 'border-gray-100 hover:border-gray-200'
                      }`}
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 1rem center',
                        backgroundSize: '1.5rem',
                      }}
                    >
                      <option value="">Select a topic...</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Message"
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 text-gray-900 placeholder:text-gray-400 focus:outline-none transition-all duration-300 resize-none ${
                        focusedField === 'message'
                          ? 'border-indigo-500 bg-white shadow-lg shadow-indigo-100/50'
                          : 'border-gray-100 hover:border-gray-200'
                      }`}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-semibold text-lg flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-indigo-200/50 hover:shadow-xl hover:shadow-indigo-300/50 transition-all duration-300"
                    whileHover={{ scale: 1.01, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: easeOutExpo }}
        >
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Frequently Asked <em className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Questions</em>
            </h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <span className="ml-4 flex-shrink-0 text-indigo-500 group-open:rotate-180 transition-transform duration-200">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section - Global CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: easeOutExpo }}
        >
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 left-10 w-20 h-20 border border-white/30 rounded-full" />
              <div className="absolute bottom-4 right-10 w-32 h-32 border border-white/20 rounded-full" />
              <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-3 text-white">
                <Globe className="w-8 h-8" />
                <span className="font-serif text-2xl md:text-3xl font-semibold">We&apos;re Global</span>
              </div>
              
              <div className="hidden md:block w-px h-12 bg-white/30" />
              
              <div className="text-center md:text-left">
                <p className="text-white/90 text-lg mb-2">
                  Prefer email? Reach us directly at
                </p>
                <a
                  href="mailto:contact@pixelscraft.online"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full text-indigo-600 font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <Mail className="w-5 h-5" />
                  contact@pixelscraft.online
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
