import { motion } from 'framer-motion'
import { Home, Mail } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#080808] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative text-center max-w-lg mx-auto">
        {/* 404 big number */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="font-display font-bold text-[10rem] sm:text-[14rem] leading-none text-transparent bg-clip-text bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 select-none">
            404
          </span>
        </motion.div>

        {/* Animated underline */}
        <motion.div
          className="mx-auto h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mb-8 -mt-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="font-display font-bold text-white text-2xl sm:text-3xl mb-3">
            Page Not Found
          </h1>

          <p className="text-slate-500 text-base leading-relaxed mb-10">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has
            been moved. Let&apos;s get you back on track.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <a
            href="/"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm transition-all hover:shadow-[0_0_24px_rgba(251,191,36,0.4)]"
          >
            <Home size={16} />
            Back to Home
          </a>

          <a
            href="/#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-slate-300 hover:border-white/25 hover:text-white font-semibold text-sm transition-all"
          >
            <Mail size={16} />
            Contact Me
          </a>
        </motion.div>

        {/* JH branding */}
        <motion.div
          className="mt-16 flex items-center justify-center gap-2.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-[0_0_16px_rgba(251,191,36,0.3)]">
            <img
              src="/logoJH.png"
              alt="JH"
              className="w-7 h-7 object-contain"
              onError={e => {
                e.currentTarget.style.display = 'none'

                const fallback =
                  e.currentTarget.parentElement.querySelector('span')

                if (fallback) fallback.style.display = 'block'
              }}
            />

            <span className="hidden text-white font-bold text-xs font-display">
              JH
            </span>
          </div>

          <span className="text-slate-500 text-sm font-display">
            Jakaria Hasan
          </span>
        </motion.div>
      </div>
    </div>
  )
}