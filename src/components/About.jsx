import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import SectionTitle from './SectionTitle'
import { profile, whatIDo } from '../data/profileData'

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28 section-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle eyebrow="Get to know me" title="About Me" />

        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          <motion.div
            className="lg:col-span-3 space-y-5"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            {profile.bio.map((p, i) => (
              <p key={i} className="text-gray-700 dark:text-slate-400 leading-relaxed text-base">
                {p}
              </p>
            ))}
          </motion.div>

          <motion.div
            className="lg:col-span-2 grid grid-cols-2 gap-4"
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
                <div className="font-display text-2xl font-bold text-amber-600 dark:text-amber-400 mb-1">{s.value}</div>
                <div className="text-gray-500 dark:text-slate-500 text-xs">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* What I Do */}
        <h3 className="font-display text-xl font-semibold text-gray-900 dark:text-white text-center mb-10">What I Do</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {whatIDo.map((item, i) => {
            const Icon = Icons[item.icon]
            return (
              <motion.div
                key={item.title}
                className="glass rounded-2xl p-6 hover:gold-glow hover:border-amber-500/30 transition-all group"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                  {Icon && <Icon size={20} className="text-amber-600 dark:text-amber-400" />}
                </div>
                <h4 className="font-display font-semibold text-gray-900 dark:text-white text-sm mb-2">{item.title}</h4>
                <p className="text-gray-500 dark:text-slate-500 text-xs leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
