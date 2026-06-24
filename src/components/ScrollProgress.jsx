import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9998] h-0.5 origin-left bg-gradient-to-r from-amber-600 via-amber-400 to-amber-300"
      style={{ scaleX }}
    />
  )
}