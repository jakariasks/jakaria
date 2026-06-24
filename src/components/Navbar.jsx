import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Download, Github, Linkedin, Facebook } from 'lucide-react'
import { profile } from '../data/profileData'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive('#' + e.target.id) })
      },
      { threshold: 0.3 }
    )
    navLinks.forEach(l => {
      const el = document.querySelector(l.href)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#080808]/90 backdrop-blur-xl border-b border-gray-200 dark:border-white/5 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5" aria-label="Jakaria Hasan — Home">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center">
            <img
              src="/logoJH.png"
              alt="JH Logo"
              className="w-8 h-8 object-contain"
              onError={e => {
                e.target.style.display = 'none'
                e.target.parentElement.querySelector('span').style.display = 'block'
              }}
            />
            <span className="hidden text-white font-bold text-sm font-display">JH</span>
          </div>
          <span className="font-display font-semibold text-gray-900 dark:text-white hidden sm:block">Jakaria Hasan</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                active === l.href
                  ? 'text-amber-600 dark:text-amber-400 bg-amber-500/10'
                  : 'text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="hidden lg:flex items-center gap-2">
          <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            <Github size={17} />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            <Linkedin size={17} />
          </a>
          <a href={profile.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            <Facebook size={17} />
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 text-gray-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a
            href={profile.resumes.developer}
            download
            className="ml-1 flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-black text-sm font-semibold transition-colors"
          >
            <Download size={14} />
            CV
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-gray-700 dark:text-slate-300"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="lg:hidden bg-white/98 dark:bg-[#0d0d0d]/98 backdrop-blur-xl border-t border-gray-200 dark:border-white/5"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    active === l.href
                      ? 'text-amber-600 dark:text-amber-400 bg-amber-500/10'
                      : 'text-gray-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-3 px-4 border-t border-gray-200 dark:border-white/5 mt-2">
                <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white"><Github size={18} /></a>
                <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white"><Linkedin size={18} /></a>
                <a href={profile.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white"><Facebook size={18} /></a>
                <button onClick={toggleTheme} aria-label="Toggle theme" className="text-gray-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 ml-auto">
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </div>
              <a
                href={profile.resumes.developer}
                download
                className="ml-1 flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-black text-sm font-semibold transition-colors"
          >
            <Download size={14} />
            Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
