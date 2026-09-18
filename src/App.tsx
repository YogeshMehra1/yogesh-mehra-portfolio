import Hero from './sections/Hero'
import About from './sections/About'
import TechStack from './sections/TechStack'
import Projects from './sections/Projects'
import Production from './sections/Production'
import FullStackFlow from './sections/FullStackFlow'
import Terminal from './sections/Terminal'
import ProductionSimulation from './sections/ProductionSimulation'
import Architecture from './sections/Architecture'
import Experience from './sections/Experience'
import Security from './sections/Security'
import Contact from './sections/Contact'
import CodeEditor from './components/CodeEditor'
import ParticleBackground from './components/Particles'
import ScrollProgress from './components/ScrollProgress'
import MouseTrail from './components/MouseTrail'
import ThemeToggle from './components/ThemeToggle'
import ParallaxBackground from './components/ParallaxBackground'
import SkillBarsSection from './sections/SkillBarsSection'
import Aspirations from './sections/Aspirations'
import ChatBot from './components/ChatBot'

function App() {
  return (
    <div className="min-h-screen bg-background text-text">
      <ParallaxBackground />
      <ParticleBackground />
      <MouseTrail />
      <ScrollProgress />
      <ThemeToggle />
      <Hero />
      <About />
      <TechStack />
      <CodeEditor />
      <SkillBarsSection />
      <FullStackFlow />
      <Projects />
      <Production />
      <Terminal />
      <ProductionSimulation />
      <Architecture />
      <Experience />
      <Aspirations />
      <Security />
      <Contact />
      <ChatBot />
    </div>
  )
}

export default App
