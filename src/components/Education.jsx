import { motion } from 'framer-motion'
import { GraduationCap, Calendar, Award } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { education } from '../data/educationData'

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionTitle eyebrow="Academic Background" title="Education" />

        <div className="relative">
          <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/40 via-amber-500/20 to-transparent sm:-translate-x-1/2" />

          <div className="space-y-10">
            {education.map((edu, i) => (
              <motion.div
                key={edu.id}
                className={`relative pl-14 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-10 items-start ${
                  i % 2 === 0 ? '' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute left-2 sm:left-1/2 top-1 w-6 h-6 rounded-full bg-amber-500 border-4 border-gray-50 dark:border-[#080808] sm:-translate-x-1/2 flex items-center justify-center z-10">
                  <GraduationCap size={11} className="text-black" />
                </div>

                <div className={`${i % 2 === 0 ? 'sm:col-start-1' : 'sm:col-start-2'}`}>
                  <div className="glass rounded-2xl p-6 hover:border-amber-500/30 transition-colors">
                    <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 text-xs font-medium mb-3">
                      <Calendar size={13} />
                      {edu.duration}
                    </div>
                    <h3 className="font-display font-bold text-gray-900 dark:text-white text-lg mb-1.5">{edu.degree}</h3>
                    <p className="text-gray-600 dark:text-slate-400 text-sm mb-3">{edu.institution}</p>
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-1 rounded-full mb-4">
                      <Award size={12} />
                      {edu.result}
                    </div>
                    {edu.courses.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-200 dark:border-white/5">
                        {edu.courses.map(c => (
                          <span
                            key={c}
                            className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-slate-400 border border-gray-200 dark:border-white/5"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
