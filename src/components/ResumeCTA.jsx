import { motion } from 'framer-motion'
import { Download, FileText, MessageCircle } from 'lucide-react'
import { profile } from '../data/profileData'

export default function ResumeCTA() {
  const scrollToContact = e => {
    e.preventDefault()
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          className="relative rounded-3xl p-10 sm:p-14 text-center overflow-hidden"
          style={{
            background:
              'linear-gradient(135deg, rgba(251,191,36,0.08) 0%, rgba(0,0,0,0) 60%)',
            border: '1px solid rgba(251,191,36,0.25)',
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-6">
              <FileText size={28} className="text-amber-500 dark:text-amber-400" />
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Resume & CV
            </h2>

            <p className="text-gray-600 dark:text-slate-400 text-base max-w-md mx-auto mb-10">
              Want to know more about my academic, development, and teaching background?
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={profile.resumes.developer}
                download
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm transition-all hover:shadow-[0_0_24px_rgba(251,191,36,0.45)]"
              >
                <Download size={16} />
                Developer CV
              </a>

              <a
                href={profile.resumes.teaching}
                download
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-amber-500/40 text-amber-600 dark:text-amber-400 hover:bg-amber-500/10 font-semibold text-sm transition-all"
              >
                <Download size={16} />
                Teaching CV
              </a>

              <a
                href="#contact"
                onClick={scrollToContact}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-gray-300 dark:border-white/10 text-gray-700 dark:text-slate-300 hover:border-gray-400 dark:hover:border-white/25 hover:text-gray-900 dark:hover:text-white font-semibold text-sm transition-all"
              >
                <MessageCircle size={16} />
                Contact for Collaboration
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}