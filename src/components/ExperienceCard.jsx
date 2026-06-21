import { motion } from 'framer-motion'
import { Calendar, BookOpen } from 'lucide-react'

export default function ExperienceCard({ exp, index }) {
  return (
    <motion.div
      className="glass rounded-2xl p-6 hover:border-amber-500/30 transition-all relative overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      {exp.current && (
        <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/25 px-2 py-0.5 rounded-full">
          Current
        </span>
      )}
      <h3 className="font-display font-semibold text-gray-900 dark:text-white text-base mb-1 pr-16">{exp.position}</h3>
      <p className="text-amber-600 dark:text-amber-400 text-sm mb-3">{exp.institution}</p>

      <div className="flex items-center gap-1.5 text-gray-500 dark:text-slate-500 text-xs mb-2">
        <Calendar size={12} />
        {exp.duration} · {exp.classes}
      </div>

      <div className="flex items-start gap-1.5 text-gray-500 dark:text-slate-500 text-xs mb-4">
        <BookOpen size={12} className="mt-0.5 flex-shrink-0" />
        <span>{exp.subjects.join(', ')}</span>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-200 dark:border-white/5">
        {exp.subjects.map(s => (
          <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-slate-400 border border-gray-200 dark:border-white/5">
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
