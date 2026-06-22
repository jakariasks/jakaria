import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import SectionTitle from './SectionTitle'
import { softSkills } from '../data/softSkillsData'

const cardColors = [
  'from-amber-500/15 to-orange-500/10 border-amber-500/25 hover:border-amber-500/50',
  'from-blue-500/15 to-cyan-500/10 border-blue-500/25 hover:border-blue-500/50',
  'from-purple-500/15 to-pink-500/10 border-purple-500/25 hover:border-purple-500/50',
  'from-emerald-500/15 to-teal-500/10 border-emerald-500/25 hover:border-emerald-500/50',
  'from-rose-500/15 to-red-500/10 border-rose-500/25 hover:border-rose-500/50',
  'from-indigo-500/15 to-violet-500/10 border-indigo-500/25 hover:border-indigo-500/50',
]

const iconColors = [
  'text-amber-500 bg-amber-500/15',
  'text-blue-500 bg-blue-500/15',
  'text-purple-500 bg-purple-500/15',
  'text-emerald-500 bg-emerald-500/15',
  'text-rose-500 bg-rose-500/15',
  'text-indigo-500 bg-indigo-500/15',
]

export default function SoftSkills() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle eyebrow="Beyond Technical Ability" title="Soft Skills & Strengths" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {softSkills.map((s, i) => {
            const Icon = Icons[s.icon]
            const color = cardColors[i % cardColors.length]
            const iconColor = iconColors[i % iconColors.length]

            return (
              <motion.div
                key={s.label}
                className={`relative rounded-2xl p-5 bg-gradient-to-br ${color} border backdrop-blur-sm transition-all duration-300 group cursor-default overflow-hidden`}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                {/* Subtle glow blob */}
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                  style={{ background: 'currentColor' }}
                />

                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${iconColor}`}>
                  {Icon && <Icon size={19} strokeWidth={1.8} />}
                </div>

                <p className="text-gray-900 dark:text-white text-base font-semibold font-display leading-snug">
                  {s.label}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}