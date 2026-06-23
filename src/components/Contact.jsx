import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'
import SectionTitle from './SectionTitle'
import SocialLinks from './SocialLinks'

const SERVICE_ID  = 'service_2im4fcp'
const TEMPLATE_ID = 'template_3p0kja9'
const PUBLIC_KEY  = 'Je1pV_VV3wQ1B64Pc'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name:    form.name,
          email:   form.email,
          title:   form.subject,
          message: form.message,
          time:    new Date().toLocaleString('en-BD', { timeZone: 'Asia/Dhaka' }),
        },
        PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus(null), 6000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setTimeout(() => setStatus(null), 6000)
    }
  }

  const inputClass = "w-full px-4 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-slate-200 text-sm placeholder:text-gray-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 transition-colors"

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="Get In Touch"
          title="Let's Connect"
          subtitle="Feel free to contact me for internship opportunities, web development projects, teaching collaboration, academic guidance, or professional networking."
        />

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <SocialLinks />
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-gray-600 dark:text-slate-400 mb-2">Name</label>
                  <input
                    id="name" name="name" type="text" required
                    value={form.name} onChange={handleChange}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-gray-600 dark:text-slate-400 mb-2">Email</label>
                  <input
                    id="email" name="email" type="email" required
                    value={form.email} onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-gray-600 dark:text-slate-400 mb-2">Subject</label>
                <input
                  id="subject" name="subject" type="text" required
                  value={form.subject} onChange={handleChange}
                  placeholder="What's this about?"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-gray-600 dark:text-slate-400 mb-2">Message</label>
                <textarea
                  id="message" name="message" required rows={5}
                  value={form.message} onChange={handleChange}
                  placeholder="Tell me a bit about what you have in mind..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-60 disabled:cursor-not-allowed text-black font-semibold text-sm transition-all hover:shadow-[0_0_20px_rgba(251,191,36,0.4)]"
              >
                {status === 'loading' ? (
                  <><Loader2 size={15} className="animate-spin" /> Sending...</>
                ) : (
                  <><Send size={15} /> Send Message</>
                )}
              </button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-start gap-2.5 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/25 text-emerald-700 dark:text-emerald-400 text-sm"
                  >
                    <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" />
                    <span>Message sent successfully! I'll get back to you soon. 🎉</span>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-start gap-2.5 p-4 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-300 dark:border-red-500/25 text-red-700 dark:text-red-400 text-sm"
                  >
                    <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                    <span>Something went wrong. Please try again or contact directly via email.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}