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

const socials = [
  { icon: Github, href: profile.socials.github, label: 'GitHub' },
  { icon: Linkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
  { icon: Facebook, href: profile.socials.facebook, label: 'Facebook' },
  { icon: Mail, href: `mailto:${profile.email}`, label: 'Email', external: false },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] border-t border-white/5">
      <div className="h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-[0_0_20px_rgba(251,191,36,0.3)]">
                <img
                  src="/logoJH.png"
                  alt="JH Logo"
                  className="w-9 h-9 object-contain"
                  onError={e => {
                    e.currentTarget.style.display = 'none'
                    const fallback = e.currentTarget.parentElement.querySelector('span')
                    if (fallback) fallback.style.display = 'block'
                  }}
                />
                <span className="hidden text-white font-bold text-sm font-display">
                  JH
                </span>
              </div>

              <span className="font-display font-semibold text-white text-lg">
                Jakaria Hasan
              </span>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Building Digital Solutions & Inspiring Learners.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socials.map(s => {
                const Icon = s.icon

                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.external === false ? undefined : '_blank'}
                    rel={s.external === false ? undefined : 'noopener noreferrer'}
                    aria-label={s.label}
                    className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/50 hover:bg-amber-500/10 hover:shadow-[0_0_16px_rgba(251,191,36,0.2)] transition-all duration-200"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-semibold text-base mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {quickLinks.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-slate-500 hover:text-amber-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-amber-500/50 group-hover:bg-amber-400 transition-colors" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-display font-semibold text-base mb-5">
              Contact
            </h4>

            <ul className="space-y-3">
              <li className="text-slate-500 text-sm">
                {profile.location}
              </li>

              <li className="text-slate-500 text-sm">
                +880 1306 060688
              </li>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-slate-500 hover:text-amber-400 text-sm transition-colors break-all"
                >
                  {profile.email}
                </a>
              </li>

              <li>
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-amber-400 text-sm transition-colors"
                >
                  github.com/jakariasks
                </a>
              </li>

              <li>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-amber-400 text-sm transition-colors"
                >
                  linkedin.com/in/jakaria-sks
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-sm">
            © 2026 Jakaria Hasan. All rights reserved.
          </p>

          <p className="text-slate-700 text-xs">
            Solutions crafted with ❤️ by Jakaria Hasan.
          </p>
        </div>
      </div>
    </footer>
  )
}