import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Code2 } from 'lucide-react'
import { statusColorMap } from '../data/projectsData'

export default function ProjectCard({ project, index }) {
  const [imgError, setImgError] = useState(false)

  const hasImage = project?.image && !imgError
  const statusClass = statusColorMap?.[project?.statusColor] || 'text-gray-500 border-gray-300'
  const gradientClass = project?.gradient || 'from-amber-200 to-orange-300'

  return (
    <motion.div
      className="group glass rounded-2xl overflow-hidden hover:border-amber-500/30 transition-all"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
    >
      <div
        className={`h-44 relative overflow-hidden ${
          hasImage
            ? ''
            : `bg-gradient-to-br ${gradientClass} flex items-center justify-center`
        }`}
      >
        {hasImage ? (
          <img
            src={project.image}
            alt={`${project.title} preview screenshot`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <Code2 size={40} className="text-black/10 dark:text-white/15" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0d0d0d] to-transparent" />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-display font-semibold text-gray-900 dark:text-white text-base">
            {project.title}
          </h3>

          <span
            className={`flex-shrink-0 text-[10px] font-semibold uppercase tracking-wide px-2 py-1 rounded-full border ${statusClass}`}
          >
            {project.status}
          </span>
        </div>

        <p className="text-gray-500 dark:text-slate-500 text-xs leading-relaxed mb-4">
          {project.description}
        </p>

        <p className="text-amber-600 dark:text-amber-400/80 text-xs mb-3">
          Role: {project.role}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {(project.tech || []).map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-slate-400 border border-gray-200 dark:border-white/5"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-2 pt-4 border-t border-gray-200 dark:border-white/5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-700 dark:text-slate-300 text-xs font-medium transition-colors"
            >
              <Github size={13} />
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-amber-100 dark:bg-amber-500/15 hover:bg-amber-200 dark:hover:bg-amber-500/25 text-amber-700 dark:text-amber-400 text-xs font-medium transition-colors"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}

          {!project.github && !project.demo && (
            <span className="flex-1 text-center py-2 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-slate-600 text-xs font-medium">
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}