import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2400)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505]"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Outer glow rings */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-48 h-48 rounded-full bg-amber-500/8 blur-3xl animate-pulse" />
          <motion.div
            className="absolute w-32 h-32 rounded-full border border-amber-500/20"
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.1, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute w-44 h-44 rounded-full border border-amber-500/10"
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.05, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          />

          {/* Logo box */}
          <motion.div
            className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-[0_0_50px_rgba(251,191,36,0.35)]"
            initial={{ scale: 0.6, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <img
              src="/logoJH.png"
              alt="JH Logo"
              className="w-20 h-20 object-contain"
              onError={e => {
                e.target.style.display = 'none'
                document.getElementById('jh-fallback').style.display = 'flex'
              }}
            />
            <div
              id="jh-fallback"
              className="absolute inset-0 items-center justify-center hidden"
            >
              <span className="text-white font-display font-bold text-4xl tracking-wider">JH</span>
            </div>
          </motion.div>
        </div>

        {/* Name */}
        <motion.p
          className="mt-7 text-white font-display font-semibold text-lg tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Jakaria Hasan
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="mt-1.5 text-amber-400/70 text-xs font-sans tracking-widest uppercase"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Building Ideas into Digital Reality
        </motion.p>

        {/* Dots loader */}
        <motion.div
          className="mt-8 flex gap-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          {[0, 1, 2].map(i => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-amber-500"
              style={{ animation: `loadBounce 1.2s ${i * 0.2}s ease-in-out infinite` }}
            />
          ))}
        </motion.div>

        <style>{`
          @keyframes loadBounce {
            0%, 100% { transform: translateY(0); opacity: 0.35; }
            50% { transform: translateY(-8px); opacity: 1; }
          }
        `}</style>
      </motion.div>
    </AnimatePresence>
  )
}