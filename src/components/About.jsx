import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import SectionTitle from './SectionTitle'
import { profile, whatIDo } from '../data/profileData'
import { languages } from '../data/softSkillsData'

const whatIDoStyles = [
  { grad: 'from-amber-500/20 to-orange-600/10 border-amber-500/30 hover:border-amber-400/60', icon: 'bg-amber-500/15 text-amber-500', glow: 'rgba(251,191,36,0.12)', line: 'via-amber-400' },
  { grad: 'from-blue-500/20 to-cyan-600/10 border-blue-500/30 hover:border-blue-400/60', icon: 'bg-blue-500/15 text-blue-400', glow: 'rgba(59,130,246,0.12)', line: 'via-blue-400' },
  { grad: 'from-purple-500/20 to-violet-600/10 border-purple-500/30 hover:border-purple-400/60', icon: 'bg-purple-500/15 text-purple-400', glow: 'rgba(168,85,247,0.12)', line: 'via-purple-400' },
  { grad: 'from-emerald-500/20 to-teal-600/10 border-emerald-500/30 hover:border-emerald-400/60', icon: 'bg-emerald-500/15 text-emerald-400', glow: 'rgba(16,185,129,0.12)', line: 'via-emerald-400' },
  { grad: 'from-rose-500/20 to-pink-600/10 border-rose-500/30 hover:border-rose-400/60', icon: 'bg-rose-500/15 text-rose-400', glow: 'rgba(244,63,94,0.12)', line: 'via-rose-400' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28 section-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle eyebrow="Get to know me" title="About Me" />

        {/* Bio + Stats */}
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          <motion.div
            className="lg:col-span-3 space-y-5"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            {profile.bio.map((p, i) => (
              <p key={i} className="text-gray-700 dark:text-slate-400 leading-relaxed text-lg">
                {p}
              </p>
            ))}

            {/* Languages merged here */}
            <div className="pt-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-4">
                Languages
              </p>
              <div className="space-y-3">
                {languages.map((lang, i) => (
                  <div key={lang.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-semibold text-gray-800 dark:text-white">
                        {lang.name}
                      </span>
                      <span className="text-xs font-medium text-amber-600 dark:text-amber-400">
                        {lang.level}
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-gray-200 dark:bg-white/8 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.15, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="lg:col-span-2 grid grid-cols-2 gap-4 content-start"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            {profile.stats.map((s, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-5 text-center hover:border-amber-500/30 transition-colors"
              >
                <div className="font-display text-2xl font-bold text-amber-600 dark:text-amber-400 mb-1">
                  {s.value}
                </div>
                <div className="text-gray-500 dark:text-slate-500 text-xs">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* What I Do */}
        <div className="text-center mb-10">
          <span className="text-sm font-semibold tracking-widest uppercase text-amber-500">
            What I Do
          </span>
          <div className="mx-auto mt-2 w-10 h-0.5 bg-amber-500 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {whatIDo.map((item, i) => {
            const Icon = Icons[item.icon]
            const s = whatIDoStyles[i % whatIDoStyles.length]
            return (
              <motion.div
                key={item.title}
                className={`relative rounded-2xl p-6 bg-gradient-to-br ${s.grad} border backdrop-blur-sm overflow-hidden group transition-all duration-300 cursor-default`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -6, boxShadow: `0 12px 40px ${s.glow}` }}
              >
                {/* Corner glow */}
                <div
                  className="absolute -top-5 -right-5 w-20 h-20 rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                  style={{ background: s.glow }}
                />

                {/* Number */}
                <div className="absolute top-4 right-4 text-xs font-bold text-white/20 font-display">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${s.icon}`}>
                  {Icon && <Icon size={22} strokeWidth={1.8} />}
                </div>

                {/* Text */}
                <h4 className="font-display font-bold text-gray-900 dark:text-white text-base mb-2 leading-snug pr-6">
                  {item.title}
                </h4>
                <p className="text-gray-500 dark:text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent ${s.line} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}