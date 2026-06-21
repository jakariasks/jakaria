import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import SectionTitle from './SectionTitle'
import { developerJourney } from '../data/developerExperienceData'

export default function DeveloperExperience() {
  return (
    <section className="relative py-24 sm:py-28 section-darker">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="Always Building, Always Learning"
          title="Developer Journey & Learning Initiatives"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {developerJourney.map((item, i) => {
            const Icon = Icons[item.icon]
            return (
              <motion.div
                key={item.id}
                className="glass rounded-2xl p-6 hover:border-amber-500/30 hover:gold-glow transition-all"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                  {Icon && <Icon size={19} className="text-amber-600 dark:text-amber-400" />}
                </div>
                <h3 className="font-display font-semibold text-gray-900 dark:text-white text-sm mb-2">{item.title}</h3>
                <p className="text-gray-500 dark:text-slate-500 text-xs leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
