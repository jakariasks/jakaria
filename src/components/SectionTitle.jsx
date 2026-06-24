import { motion } from 'framer-motion'

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {eyebrow && (
        <motion.span
          className="text-sm font-sans font-semibold tracking-widest uppercase text-amber-500 mb-3 block"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.15, ease: 'easeOut' }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="mx-auto w-16 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
      />
      {subtitle && (
        <motion.p
          className="mt-5 text-gray-600 dark:text-slate-400 max-w-xl mx-auto text-base leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}