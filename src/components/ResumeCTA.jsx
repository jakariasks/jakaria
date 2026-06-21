import { motion } from 'framer-motion'
import { Download, FileText, MessageCircle } from 'lucide-react'
import { profile } from '../data/profileData'

export default function ResumeCTA() {
  return (
    <section className="relative py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          className="relative rounded-3xl p-10 sm:p-14 text-center overflow-hidden glass gold-border"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl" />

          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center mx-auto mb-6">
              <FileText size={24} className="text-amber-600 dark:text-amber-400" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">Resume & CV</h2>
            <p className="text-gray-600 dark:text-slate-400 text-sm max-w-md mx-auto mb-8">
              Want to know more about my academic, development, and teaching background?
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={profile.resumes.developer}
                download
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm transition-all hover:shadow-[0_0_20px_rgba(251,191,36,0.4)]"
              >
                <Download size={15} />
                Developer CV
              </a>
              <a
                href={profile.resumes.teaching}
                download
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-amber-500/40 text-amber-600 dark:text-amber-400 hover:bg-amber-500/10 font-semibold text-sm transition-all"
              >
                <Download size={15} />
                Teaching CV
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 dark:border-white/10 text-gray-700 dark:text-slate-300 hover:border-gray-400 dark:hover:border-white/20 hover:text-gray-900 dark:hover:text-white font-semibold text-sm transition-all"
              >
                <MessageCircle size={15} />
                Contact for Collaboration
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
