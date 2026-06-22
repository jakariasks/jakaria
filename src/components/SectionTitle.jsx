import { motion } from 'framer-motion'

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      {eyebrow && (
        <span className="text-sm font-sans font-semibold tracking-widest uppercase text-amber-500 mb-3 block">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      <div className="mx-auto w-16 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full" />
      {subtitle && (
        <p className="mt-5 text-gray-600 dark:text-slate-400 max-w-xl mx-auto text-base leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  )
}