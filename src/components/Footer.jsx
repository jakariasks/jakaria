import { Github, Linkedin, Facebook, Mail } from 'lucide-react'
import { profile } from '../data/profileData'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] border-t border-white/5">
      <div className="h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center gold-glow">
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
              <span className="font-display font-semibold text-white">Jakaria Hasan</span>
            </div>
           <p className="text-slate-500 text-base leading-relaxed">
              Building Digital Solutions & Inspiring Learners.
            </p>
          </div>

          <div>
           <h4 className="text-white font-display font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-slate-500 hover:text-amber-400 text-base transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold text-sm mb-4">Connect</h4>
            <div className="flex items-center gap-3">
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/30 transition-colors">
                <Github size={15} />
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/30 transition-colors">
                <Linkedin size={15} />
              </a>
              <a href={profile.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/30 transition-colors">
                <Facebook size={15} />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/30 transition-colors">
                <Mail size={15} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 text-center">
          <p className="text-slate-600 text-sm">© 2026 Jakaria Hasan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
