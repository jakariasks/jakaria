import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import SectionTitle from './SectionTitle'
import { skillCategories, levelColors, levelBar } from '../data/skillsData'

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28 section-darker">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="What I Work With"
          title="Technical Skills"
          subtitle="Honest snapshot of where I am right now — from comfortable tools to things I'm actively learning."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => {
            const Icon = Icons[cat.icon]
            return (
              <motion.div
                key={cat.id}
                className="glass rounded-2xl p-6 hover:border-amber-500/30 hover:gold-glow transition-all"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                    {Icon && <Icon size={18} className="text-amber-600 dark:text-amber-400" />}
                  </div>
                  <h3 className="font-display font-semibold text-gray-900 dark:text-white text-sm">{cat.title}</h3>
                </div>

                {/* Skill rows with progress bar */}
                <div className="space-y-3">
                  {cat.skills.map((skill, si) => {
                    const bar = levelBar[skill.level]
                    return (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700 dark:text-slate-300">{skill.name}</span>
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${levelColors[skill.level]}`}>
                            {skill.level}
                          </span>
                        </div>
                        <div className="h-1.5 rounded-full bg-gray-200 dark:bg-white/8 overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${bar.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${bar.percent}%` }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.8, delay: si * 0.08, ease: 'easeOut' }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Legend */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
        </motion.div>
      </div>
    </section>
  )
}