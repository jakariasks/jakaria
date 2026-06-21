import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import SectionTitle from './SectionTitle'
import { achievements } from '../data/achievementsData'

const colorMap = {
  gold: 'bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-500/25',
  blue: 'bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-500/25',
  purple: 'bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-300 dark:border-purple-500/25',
  emerald: 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-500/25',
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-28 section-darker">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle eyebrow="Recognition & Involvement" title="Achievements & Activities" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((a, i) => {
            const Icon = Icons[a.icon]
            return (
              <motion.div
                key={a.id}
                className="glass rounded-2xl p-6 text-center hover:border-amber-500/30 hover:gold-glow transition-all"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 border ${colorMap[a.color]}`}>
                  {Icon && <Icon size={20} />}
                </div>
                <h3 className="font-display font-semibold text-gray-900 dark:text-white text-sm mb-1.5">{a.title}</h3>
                <p className="text-gray-600 dark:text-slate-400 text-xs mb-1">{a.subtitle}</p>
                <p className="text-gray-400 dark:text-slate-600 text-xs">{a.organizer}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
