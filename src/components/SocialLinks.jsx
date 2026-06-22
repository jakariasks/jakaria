import { motion } from 'framer-motion'
import { Mail, MapPin, Facebook, Linkedin, Github } from 'lucide-react'
import { profile } from '../data/profileData'

const cards = [
  {
    icon: Mail,
    label: 'Email',
    text: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    icon: MapPin,
    label: 'Location',
    text: profile.location,
    href: null,
    external: false,
  },
  {
    icon: Facebook,
    label: 'Facebook',
    href: profile.socials.facebook,
    external: true,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: profile.socials.linkedin,
    external: true,
  },
  {
    icon: Github,
    label: 'GitHub',
    href: profile.socials.github,
    external: true,
  },

] 

export default function SocialLinks() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {cards.map((c, i) => {
        const Icon = c.icon
        const content = (
          <>
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
              <Icon size={17} className="text-amber-600 dark:text-amber-400" />
            </div>
            <div className="min-w-0">
              <div className="text-gray-500 dark:text-slate-500 text-xs mb-0.5">{c.label}</div>
              <div className="text-gray-800 dark:text-slate-200 text-sm font-medium truncate">{c.text}</div>
            </div>
          </>
        )
        const className =
          'glass rounded-xl p-4 flex items-center gap-3 hover:border-amber-500/30 hover:gold-glow transition-all'

        return (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            {c.href ? (
              <a
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noopener noreferrer' : undefined}
                className={className}
              >
                {content}
              </a>
            ) : (
              <div className={className}>{content}</div>
            )}
          </motion.div>
        )
      })}
    </div>
  )
}
