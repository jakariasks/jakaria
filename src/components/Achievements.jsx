import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import SectionTitle from './SectionTitle'
import { achievements } from '../data/achievementsData'

const styleMap = {
  gold: {
    card: 'from-amber-500/20 to-yellow-600/10 border-amber-500/30 hover:border-amber-400/60',
    icon: 'bg-amber-500/20 text-amber-400',
    glow: 'rgba(251,191,36,0.15)',
    badge: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
  },
  blue: {
    card: 'from-blue-500/20 to-cyan-600/10 border-blue-500/30 hover:border-blue-400/60',
    icon: 'bg-blue-500/20 text-blue-400',
    glow: 'rgba(59,130,246,0.15)',
    badge: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
  },
  purple: {
    card: 'from-purple-500/20 to-violet-600/10 border-purple-500/30 hover:border-purple-400/60',
    icon: 'bg-purple-500/20 text-purple-400',
    glow: 'rgba(168,85,247,0.15)',
    badge: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
  },
  emerald: {
    card: 'from-emerald-500/20 to-teal-600/10 border-emerald-500/30 hover:border-emerald-400/60',
    icon: 'bg-emerald-500/20 text-emerald-400',
    glow: 'rgba(16,185,129,0.15)',
    badge: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  },
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-28 section-darker overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <SectionTitle eyebrow="Recognition & Involvement" title="Achievements & Activities" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((a, i) => {
            const Icon = Icons[a.icon]
            const style = styleMap[a.color]

            return (
              <motion.div
                key={a.id}
                className={`relative rounded-2xl p-6 bg-gradient-to-br ${style.card} border backdrop-blur-sm overflow-hidden group transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                style={{
                  boxShadow: `0 0 0 0 ${style.glow}`,
                }}
                whileHover={{ y: -6, boxShadow: `0 8px 40px ${style.glow}` }}
              >
                {/* Top corner glow */}
                <div
                  className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"
                  style={{ background: style.glow }}
                />

                {/* Number badge */}
                <div className={`absolute top-4 right-4 text-xs font-bold px-2 py-0.5 rounded-full border ${style.badge}`}>
                  #{String(i + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${style.icon}`}>
                  {Icon && <Icon size={22} strokeWidth={1.8} />}
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-white text-lg mb-1.5 pr-10 leading-snug">
                  {a.title}
                </h3>
                <p className="text-slate-300 text-base mb-1 font-medium">{a.subtitle}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{a.organizer}</p>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  a.color === 'gold' ? 'from-transparent via-amber-400 to-transparent' :
                  a.color === 'blue' ? 'from-transparent via-blue-400 to-transparent' :
                  a.color === 'purple' ? 'from-transparent via-purple-400 to-transparent' :
                  'from-transparent via-emerald-400 to-transparent'
                }`} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}