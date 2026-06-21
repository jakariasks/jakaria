import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import SectionTitle from './SectionTitle'
import { softSkills } from '../data/softSkillsData'

export default function SoftSkills() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionTitle eyebrow="Beyond Technical Ability" title="Soft Skills & Strengths" />

        <div className="flex flex-wrap justify-center gap-3">
          {softSkills.map((s, i) => {
            const Icon = Icons[s.icon]
            return (
              <motion.div
                key={s.label}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full glass hover:border-amber-500/30 hover:text-amber-600 dark:hover:text-amber-400 text-gray-700 dark:text-slate-300 text-sm font-medium transition-all cursor-default"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                whileHover={{ scale: 1.05 }}
              >
                {Icon && <Icon size={14} />}
                {s.label}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
