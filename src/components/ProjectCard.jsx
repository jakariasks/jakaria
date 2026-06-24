import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Code2, X, Maximize2 } from 'lucide-react'
import { statusColorMap } from '../data/projectsData'

function ImageLightbox({ src, alt, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-5xl w-full"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        onClick={e => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-4 -right-4 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
          aria-label="Close preview"
        >
          <X size={16} />
        </button>

        <img
          src={src}
          alt={alt}
          className="w-full rounded-2xl border border-white/10 shadow-2xl"
        />

        <p className="text-center text-slate-400 text-sm mt-3">
          {alt}
        </p>
      </motion.div>
    </motion.div>
  )
}

export default function ProjectCard({ project, index }) {
  const [imgError, setImgError] = useState(false)
  const [lightbox, setLightbox] = useState(false)

  const hasImage = project.image && !imgError

  const statusClass =
    statusColorMap[project.statusColor] ||
    'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-slate-400 border-gray-200 dark:border-white/5'

  return (
    <>
      <AnimatePresence>
        {lightbox && hasImage && (
          <ImageLightbox
            src={project.image}
            alt={project.title}
            onClose={() => setLightbox(false)}
          />
        )}
      </AnimatePresence>

      <motion.div
        className="group glass rounded-2xl overflow-hidden hover:border-amber-500/30 transition-all flex flex-col"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        whileHover={{ y: -6 }}
      >
        {/* Image / Preview */}
        <div
          className={`h-44 relative overflow-hidden ${
            hasImage
              ? 'cursor-zoom-in'
              : `bg-gradient-to-br ${project.gradient} flex items-center justify-center`
          }`}
          onClick={() => hasImage && setLightbox(true)}
        >
          {hasImage ? (
            <>
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={() => setImgError(true)}
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center border border-white/30">
                  <Maximize2 size={16} className="text-white" />
                </div>
              </div>
            </>
          ) : (
            <Code2 size={40} className="text-black/10 dark:text-white/15" />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0d0d0d] to-transparent pointer-events-none" />
        </div>

        {/* Card Body */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="font-display font-semibold text-gray-900 dark:text-white text-lg">
              {project.title}
            </h3>

            <span
              className={`flex-shrink-0 text-[10px] font-semibold uppercase tracking-wide px-2 py-1 rounded-full border ${statusClass}`}
            >
              {project.status}
            </span>
          </div>

          <p className="text-gray-500 dark:text-slate-500 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          <p className="text-amber-600 dark:text-amber-400/80 text-sm mb-3">
            Role: {project.role}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {(project.tech || []).map(t => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-slate-400 border border-gray-200 dark:border-white/5"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-2 pt-4 border-t border-gray-200 dark:border-white/5 mt-auto">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-700 dark:text-slate-300 text-sm font-medium transition-colors"
              >
                <Github size={14} />
                GitHub
              </a>
            ) : (
              <span className="flex-1 text-center py-2.5 rounded-xl bg-gray-100/50 dark:bg-white/5 text-gray-400 dark:text-slate-600 text-xs font-medium border border-dashed border-gray-300 dark:border-white/10">
                Private Repo
              </span>
            )}

            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-amber-100 dark:bg-amber-500/15 hover:bg-amber-200 dark:hover:bg-amber-500/25 text-amber-700 dark:text-amber-400 text-sm font-medium transition-colors"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            ) : (
              <span className="flex-1 text-center py-2.5 rounded-xl bg-gray-100/50 dark:bg-white/5 text-gray-400 dark:text-slate-600 text-xs font-medium border border-dashed border-gray-300 dark:border-white/10">
                Coming Soon
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </>
  )
}