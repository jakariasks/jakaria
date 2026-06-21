import { motion } from 'framer-motion'
import { Languages as LangIcon } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { languages } from '../data/softSkillsData'

export default function Languages() {
  return (
    <section className="relative py-24 sm:py-28 section-darker">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <SectionTitle eyebrow="Communication" title="Languages" />

        <div className="space-y-5">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.name}
              className="glass rounded-2xl p-5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <LangIcon size={16} className="text-amber-600 dark:text-amber-400" />
                  <span className="font-display font-semibold text-gray-900 dark:text-white text-sm">{lang.name}</span>
                </div>
                <span className="text-xs text-amber-600 dark:text-amber-400 font-medium">{lang.level}</span>
              </div>
              <div className="h-1.5 rounded-full bg-gray-200 dark:bg-white/5 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
