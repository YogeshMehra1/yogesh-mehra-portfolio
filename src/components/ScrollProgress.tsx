import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  
  const sections = ['Hero', 'About', 'Skills', 'Full Stack', 'Projects', 'Production', 'Terminal', 'Simulation', 'Architecture', 'Experience', 'Aspirations', 'Security', 'Contact']
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const currentSection = Math.floor(scrollPosition / windowHeight)
      setActiveSection(Math.min(currentSection, sections.length - 1))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index].toLowerCase().replace(/\s+/g, '-'))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent origin-left z-50"
        style={{ scaleX }}
      />
      
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3 pointer-events-none">
        {sections.map((section, i) => (
          <button
            key={i}
            onClick={() => scrollToSection(i)}
            className={`pointer-events-auto w-2 h-2 rounded-full transition-all ${
              activeSection === i ? 'bg-primary w-3' : 'bg-surface2 hover:bg-primary/50'
            }`}
            aria-label={`Scroll to ${section}`}
          />
        ))}
      </div>
        
        {/* Mobile scroll indicator */}
        <div className="fixed bottom-6 right-6 z-40 lg:hidden pointer-events-none">
          <div className="flex items-center gap-2 bg-surface/80 backdrop-blur-sm px-3 py-2 rounded-full border border-surface2">
            <span className="text-xs text-text-secondary">{activeSection + 1}/{sections.length}</span>
          </div>
        </div>
    </>
  )
}

export default ScrollProgress
