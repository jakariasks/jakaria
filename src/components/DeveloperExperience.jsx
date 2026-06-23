import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import SectionTitle from './SectionTitle'
import { developerJourney } from '../data/developerExperienceData'

const cardStyles = [
  { grad: 'from-amber-500/20 to-orange-600/10 border-amber-500/30 hover:border-amber-400/60', icon: 'bg-amber-500/15 text-amber-400', glow: 'rgba(251,191,36,0.12)', line: 'via-amber-400' },
  { grad: 'from-blue-500/20 to-cyan-600/10 border-blue-500/30 hover:border-blue-400/60', icon: 'bg-blue-500/15 text-blue-400', glow: 'rgba(59,130,246,0.12)', line: 'via-blue-400' },
  { grad: 'from-purple-500/20 to-violet-600/10 border-purple-500/30 hover:border-purple-400/60', icon: 'bg-purple-500/15 text-purple-400', glow: 'rgba(168,85,247,0.12)', line: 'via-purple-400' },
  { grad: 'from-emerald-500/20 to-teal-600/10 border-emerald-500/30 hover:border-emerald-400/60', icon: 'bg-emerald-500/15 text-emerald-400', glow: 'rgba(16,185,129,0.12)', line: 'via-emerald-400' },
  { grad: 'from-rose-500/20 to-pink-600/10 border-rose-500/30 hover:border-rose-400/60', icon: 'bg-rose-500/15 text-rose-400', glow: 'rgba(244,63,94,0.12)', line: 'via-rose-400' },
  { grad: 'from-indigo-500/20 to-blue-600/10 border-indigo-500/30 hover:border-indigo-400/60', icon: 'bg-indigo-500/15 text-indigo-400', glow: 'rgba(99,102,241,0.12)', line: 'via-indigo-400' },
]

export default function DeveloperExperience() {
  return (
    <section className="relative py-24 sm:py-28 section-darker overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <SectionTitle
          eyebrow="Always Building, Always Learning"
          title="Developer Journey & Learning Initiatives"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {developerJourney.map((item, i) => {
            const Icon = Icons[item.icon]
            const s = cardStyles[i % cardStyles.length]

            return (
              <motion.div
                key={item.id}
                className={`relative rounded-2xl p-6 bg-gradient-to-br ${s.grad} border backdrop-blur-sm overflow-hidden group transition-all duration-300 cursor-default`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -6, boxShadow: `0 12px 40px ${s.glow}` }}
              >
                {/* Corner glow */}
                <div
                  className="absolute -top-5 -right-5 w-20 h-20 rounded-full blur-2xl opacity-30 group-hover:opacity-70 transition-opacity duration-500"
                  style={{ background: s.glow }}
                />

                {/* Number badge */}
                <div className="absolute top-4 right-4 text-xs font-bold text-white/20 font-display">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${s.icon}`}>
                  {Icon && <Icon size={22} strokeWidth={1.8} />}
                </div>

                {/* Text */}
                <h3 className="font-display font-bold text-gray-900 dark:text-white text-base mb-2 leading-snug pr-8">
                  {item.title}
                </h3>
                <p className="text-gray-500 dark:text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent ${s.line} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}