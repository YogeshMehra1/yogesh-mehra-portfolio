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
import ScrollProgress from './components/ScrollProgress'
import PremiumBackground from './components/PremiumBackground'
import SkillBarsSection from './sections/SkillBarsSection'
import Aspirations from './sections/Aspirations'
import ChatBot from './components/ChatBot'
import AICodingTools from './sections/AICodingTools'

function App() {
  return (
    <div className="min-h-screen bg-background text-text">
      <PremiumBackground />
      <ScrollProgress />
      <Hero />
      <About />
      <TechStack />
      <AICodingTools />
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
