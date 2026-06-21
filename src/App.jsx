import { useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import TeachingExperience from './components/TeachingExperience'
import DeveloperExperience from './components/DeveloperExperience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import SoftSkills from './components/SoftSkills'
import Languages from './components/Languages'
import ResumeCTA from './components/ResumeCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  if (loading) return <LoadingScreen onDone={() => setLoading(false)} />

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <TeachingExperience />
        <DeveloperExperience />
        <Projects />
        <Achievements />
        <SoftSkills />
        <Languages />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
