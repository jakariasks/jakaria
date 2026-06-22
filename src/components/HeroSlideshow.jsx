import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { heroImages } from '../data/heroImagesData'

const SLIDE_DURATION = 5000

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0)
  const [failed, setFailed] = useState({})
  const [paused, setPaused] = useState(false)

  const slides = heroImages.filter(img => !failed[img.src])

  const goTo = useCallback(i => {
    setIndex(i)
  }, [])

  useEffect(() => {
    if (paused || slides.length <= 1) return
    const t = setInterval(() => {
      setIndex(i => (i + 1) % slides.length)
    }, SLIDE_DURATION)
    return () => clearInterval(t)
  }, [paused, slides.length])

  useEffect(() => {
    if (index >= slides.length && slides.length > 0) setIndex(0)
  }, [slides.length, index])

  const handleError = src => {
    setFailed(f => ({ ...f, [src]: true }))
  }

  if (heroImages.length === 0) return null

  const current = slides[index]

  return (
    <div
      className="relative w-full h-full rounded-3xl border-2 border-amber-500/30 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a1a1a] dark:to-[#111] shadow-[0_0_60px_rgba(251,191,36,0.15)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {heroImages.map(img => (
        <img
          key={img.src}
          src={img.src}
          alt=""
          className="hidden"
          onError={() => handleError(img.src)}
        />
      ))}

      {current ? (
        <AnimatePresence mode="sync">
          <motion.img
            key={current.src}
            src={current.src}
            alt={current.alt}
            className="absolute inset-0 w-full h-full object-cover object-top"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.16 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1, ease: 'easeInOut' },
              scale: { duration: SLIDE_DURATION / 1000 + 1, ease: 'linear' },
            }}
          />
        </AnimatePresence>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-9xl select-none">👨‍💻</div>
        </div>
      )}

      {slides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-black/30 backdrop-blur-sm">
          {slides.map((s, i) => (
            <button
              key={s.src}
              onClick={() => goTo(i)}
              aria-label={`Show slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-5 bg-amber-400' : 'w-1.5 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}