import { motion } from 'framer-motion'
import { Calendar, BookOpen } from 'lucide-react'

const cardStyles = [
  { grad: 'from-amber-500/20 to-orange-600/10 border-amber-500/30 hover:border-amber-400/60', icon: 'bg-amber-500/15 text-amber-500', glow: 'rgba(251,191,36,0.12)', line: 'via-amber-400', badge: 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-400/30' },
  { grad: 'from-blue-500/20 to-cyan-600/10 border-blue-500/30 hover:border-blue-400/60', icon: 'bg-blue-500/15 text-blue-400', glow: 'rgba(59,130,246,0.12)', line: 'via-blue-400', badge: 'bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-400/30' },
  { grad: 'from-purple-500/20 to-violet-600/10 border-purple-500/30 hover:border-purple-400/60', icon: 'bg-purple-500/15 text-purple-400', glow: 'rgba(168,85,247,0.12)', line: 'via-purple-400', badge: 'bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-400/30' },
  { grad: 'from-emerald-500/20 to-teal-600/10 border-emerald-500/30 hover:border-emerald-400/60', icon: 'bg-emerald-500/15 text-emerald-400', glow: 'rgba(16,185,129,0.12)', line: 'via-emerald-400', badge: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-400/30' },
  { grad: 'from-rose-500/20 to-pink-600/10 border-rose-500/30 hover:border-rose-400/60', icon: 'bg-rose-500/15 text-rose-400', glow: 'rgba(244,63,94,0.12)', line: 'via-rose-400', badge: 'bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-400/30' },
  { grad: 'from-indigo-500/20 to-blue-600/10 border-indigo-500/30 hover:border-indigo-400/60', icon: 'bg-indigo-500/15 text-indigo-400', glow: 'rgba(99,102,241,0.12)', line: 'via-indigo-400', badge: 'bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border-indigo-400/30' },
]

export default function ExperienceCard({ exp, index }) {
  const s = cardStyles[index % cardStyles.length]

  return (
    <motion.div
      className={`relative rounded-2xl p-6 bg-gradient-to-br ${s.grad} border backdrop-blur-sm overflow-hidden group transition-all duration-300 cursor-default`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -6, boxShadow: `0 12px 40px ${s.glow}` }}
    >
      {/* Corner glow */}
      <div
        className="absolute -top-5 -right-5 w-20 h-20 rounded-full blur-2xl opacity-30 group-hover:opacity-70 transition-opacity duration-500"
        style={{ background: s.glow }}
      />

      {/* Current badge */}
      {exp.current && (
        <span className={`absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full border ${s.badge}`}>
          Current
        </span>
      )}

      {/* Number */}
      <div className="absolute bottom-4 right-4 text-xs font-bold text-white/15 font-display">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Icon */}
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${s.icon}`}>
        <BookOpen size={22} strokeWidth={1.8} />
      </div>

      {/* Title & Institution */}
      <h3 className="font-display font-bold text-gray-900 dark:text-white text-base mb-1 pr-16 leading-snug">
        {exp.position}
      </h3>
      <p className="text-gray-600 dark:text-slate-300 text-sm font-medium mb-4">
        {exp.institution}
      </p>

      {/* Meta info */}
      <div className="flex items-center gap-1.5 text-gray-500 dark:text-slate-500 text-xs mb-2">
        <Calendar size={12} className="flex-shrink-0" />
        {exp.duration} · {exp.classes}
      </div>

      {/* Subject tags */}
      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10 dark:border-white/5 mt-3">
        {exp.subjects.map(s => (
          <span
            key={s}
            className="text-xs px-2.5 py-1 rounded-full bg-white/20 dark:bg-white/5 text-gray-700 dark:text-slate-400 border border-white/30 dark:border-white/5"
          >
            {s}
          </span>
        ))}
      </div>

      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent ${s.line} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    </motion.div>
  )
}