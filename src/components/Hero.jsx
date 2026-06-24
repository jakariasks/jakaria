import { motion } from 'framer-motion'
import { Github, Linkedin, Facebook, Mail, Download, ArrowDown } from 'lucide-react'
import { profile } from '../data/profileData'
import HeroSlideshow from './HeroSlideshow'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden section-dark">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-600/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div className="order-2 lg:order-1">
            <motion.div className="flex flex-wrap items-center gap-3 mb-4" {...fadeUp(0.1)}>
              <span className="inline-flex items-center text-xs font-semibold tracking-widest uppercase text-amber-500 px-3 py-1.5 rounded-full border border-amber-500/25 bg-amber-500/8">
                👋 Welcome to my portfolio
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Open to Opportunities
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-4xl sm:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white leading-[1.1] mb-6"
              {...fadeUp(0.2)}
            >
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Jakaria Hasan
              </span>
            </motion.h1>

            <motion.p
              className="text-gray-700 dark:text-slate-300 text-lg sm:text-xl leading-relaxed mb-4 font-medium"
              {...fadeUp(0.3)}
            >
              <span className="flex flex-wrap gap-x-2 gap-y-1 items-center">
                <span>CSE Student</span>
                <span className="text-amber-500">·</span>
                <span>Full Stack Web Developer</span>
                <span className="text-amber-500">·</span>
                <span>Passionate Educator</span>
              </span>
            </motion.p>

            <motion.p className="text-gray-500 dark:text-slate-400 text-base leading-relaxed mb-8 max-w-lg" {...fadeUp(0.35)}>
              {profile.heroDescription}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="flex flex-wrap gap-3 mb-10" {...fadeUp(0.45)}>
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm transition-all hover:shadow-[0_0_20px_rgba(251,191,36,0.4)]"
              >
                View Projects
              </a>
              <a
                href={profile.resumes.developer}
                download
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-amber-500/40 text-amber-400 hover:bg-amber-500/10 font-semibold text-sm transition-all"
              >
                <Download size={15} />
                Download CV
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl border border-gray-300 dark:border-white/10 text-gray-700 dark:text-slate-300 hover:border-gray-400 dark:hover:border-white/20 hover:text-gray-900 dark:hover:text-white font-semibold text-sm transition-all"
              >
                Call me ➟ 01306 060688
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div className="flex items-center gap-4" {...fadeUp(0.5)}>
              <span className="text-gray-500 dark:text-slate-500 text-sm">Find me on</span>
              {[
                { href: profile.socials.facebook, icon: <Facebook size={18} />, label: 'Facebook' },
                { href: profile.socials.linkedin, icon: <Linkedin size={18} />, label: 'LinkedIn' },
                { href: profile.socials.github, icon: <Github size={18} />, label: 'GitHub' },
                { href: `mailto:${profile.email}`, icon: <Mail size={18} />, label: 'Email' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl border border-gray-300 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-500/40 hover:bg-amber-500/5 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — Image */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="relative">
              {/* Floating stat cards */}
              <motion.div
                className="absolute -left-14 top-12 z-10 bg-white/95 dark:bg-[#111]/90 backdrop-blur border border-amber-500/25 rounded-2xl px-4 py-3 shadow-xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="text-amber-600 dark:text-amber-400 font-bold text-lg font-display">6+</div>
                <div className="text-gray-500 dark:text-slate-400 text-xs">Years Teaching</div>
              </motion.div>


              <motion.div
                className="absolute -left-10 bottom-16 z-10 bg-white/95 dark:bg-[#111]/90 backdrop-blur border border-emerald-500/25 rounded-2xl px-4 py-3 shadow-xl"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="text-emerald-600 dark:text-emerald-400 font-bold text-xs font-display">Quick Learner</div>
                <div className="text-gray-500 dark:text-slate-400 text-xs">Learning ML&AI</div>
              </motion.div>

{/* Profile slideshow container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 xl:w-96 xl:h-96">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/30 to-amber-700/10 blur-xl" />
                <HeroSlideshow />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <a href="#about" aria-label="Scroll to About" className="flex flex-col items-center gap-2 text-gray-500 dark:text-slate-500 hover:text-amber-500 dark:hover:text-amber-400 transition-colors">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ArrowDown size={16} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
