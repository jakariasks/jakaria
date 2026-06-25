import { useState, useEffect, lazy, Suspense } from 'react'
import LoadingScreen from './components/LoadingScreen'
import ScrollProgress from './components/ScrollProgress'
import NotFound from './components/NotFound'

// Critical sections — eagerly loaded (above the fold)
import Navbar from './components/Navbar'
import Hero from './components/Hero'

// Non-critical sections — lazy loaded (below the fold)
const About = lazy(() => import('./components/About'))
const Education = lazy(() => import('./components/Education'))
const Skills = lazy(() => import('./components/Skills'))
const TeachingExperience = lazy(() => import('./components/TeachingExperience'))
const DeveloperExperience = lazy(() => import('./components/DeveloperExperience'))
const Projects = lazy(() => import('./components/Projects'))
const Achievements = lazy(() => import('./components/Achievements'))
const SoftSkills = lazy(() => import('./components/SoftSkills'))
const ResumeCTA = lazy(() => import('./components/ResumeCTA'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))
const BackToTop = lazy(() => import('./components/BackToTop'))
const PrintCV = lazy(() => import('./components/PrintCV'))

function SectionFallback() {
  return (
    <div className="w-full py-24 flex items-center justify-center">
      <div className="flex gap-1.5">
        {[0, 1, 2].map(i => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-amber-500/40"
            style={{ animation: `pulse 1.2s ${i * 0.2}s ease-in-out infinite` }}
          />
        ))}
      </div>
    </div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  const [is404, setIs404] = useState(false)

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const path = window.location.pathname
    if (path !== '/' && path !== '') setIs404(true)
  }, [])

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  if (loading) return <LoadingScreen onDone={() => setLoading(false)} />
  if (is404) return <NotFound />

  return (
    <div className="min-h-screen transition-colors duration-300">
      <ScrollProgress />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Education />
          <Skills />
          <TeachingExperience />
          <DeveloperExperience />
          <Projects />
          <Achievements />
          <SoftSkills />
          <ResumeCTA />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <BackToTop />
        <Suspense fallback={null}>
        <Footer />
        <BackToTop />
        <PrintCV />
      </Suspense>
      </Suspense>
    </div>
  )
}