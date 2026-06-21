import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2200)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505]"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Gold glow ring */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="absolute w-40 h-40 rounded-full bg-amber-500/10 blur-2xl animate-pulse" />
          <div className="absolute w-28 h-28 rounded-full border border-amber-500/30 animate-ping" style={{ animationDuration: '2s' }} />

          {/* JH Logo placeholder */}
          <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-[0_0_40px_rgba(251,191,36,0.4)]">
            <img
              src="/logoJH.png"
              alt="JH Logo"
              className="w-20 h-20 object-contain"
              onError={e => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <span className="hidden text-4xl font-display font-bold text-white tracking-wider" style={{ display: 'none' }}>JH</span>
          </div>
        </motion.div>

        <motion.p
          className="mt-8 text-amber-400/80 text-sm font-sans tracking-widest uppercase"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Building Ideas into Digital Reality
        </motion.p>

        <motion.div
          className="mt-6 flex gap-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {[0, 1, 2].map(i => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-amber-500"
              style={{ animation: `bounce 1.2s ${i * 0.2}s ease-in-out infinite` }}
            />
          ))}
        </motion.div>

        <style>{`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); opacity: 0.4; }
            50% { transform: translateY(-8px); opacity: 1; }
          }
        `}</style>
      </motion.div>
    </AnimatePresence>
  )
}
