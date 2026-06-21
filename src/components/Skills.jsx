import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import SectionTitle from './SectionTitle'
import { skillCategories, levelColors } from '../data/skillsData'

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
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                    {Icon && <Icon size={18} className="text-amber-600 dark:text-amber-400" />}
                  </div>
                  <h3 className="font-display font-semibold text-gray-900 dark:text-white text-sm">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span
                      key={skill.name}
                      className={`text-xs font-medium px-2.5 py-1.5 rounded-lg border ${levelColors[skill.level]}`}
                      title={skill.level}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
