import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import Button from '../components/Button'
import BackendNetwork from '../three/BackendNetwork'
import GlitchText from '../components/GlitchText'
import TypingAnimation from '../components/TypingAnimation'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-surface to-background">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwyNTUsMTM2LDAuMSkiLz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <span className="text-primary font-mono text-sm tracking-wider">JAVA BACKEND + FULL STACK DEVELOPER</span>
            </motion.div>
            
            <GlitchText>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
              >
                YOGESH MEHRA
              </motion.h1>
            </GlitchText>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-text-secondary mb-2"
            >
              3.8 Years Experience
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-2xl md:text-3xl font-semibold mb-6 text-primary"
            >
              <TypingAnimation text="Java Backend Engineer building scalable systems and modern web applications." speed={30} />
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-lg text-text-secondary mb-8 max-w-xl"
            >
              3.8 years of experience building production-ready backend systems with Java & Spring Boot, distributed microservices, Kafka, Redis and AWS — with hands-on React.js development for modern application interfaces.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {['Java 17', 'Spring Boot', 'Microservices', 'Kafka', 'Redis', 'AWS', 'Docker', 'React.js', 'TypeScript', 'Node.js'].map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-surface border border-surface2 rounded-full text-sm text-text-secondary hover:border-primary/50 transition-colors">
                  {tech}
                </span>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button variant="primary" size="lg" href="#projects">
                View Projects
              </Button>
              <Button variant="secondary" size="lg" href="/yogesh-mehra-resume.pdf" download downloadName="Yogesh-Mehra-Resume.pdf">
                Download Resume
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="flex gap-4"
            >
              <a
                href="https://github.com/YogeshMehra1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-surface border border-surface2 rounded-lg hover:border-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-surface border border-surface2 rounded-lg hover:border-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:yogeshmehra.mehra1@gmail.com"
                className="p-3 bg-surface border border-surface2 rounded-lg hover:border-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="tel:+919675580388"
                className="p-3 bg-surface border border-surface2 rounded-lg hover:border-primary transition-colors"
                aria-label="Call +91 9675580388"
              >
                <Phone className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px]"
          >
            <BackendNetwork className="w-full h-full" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-surface/80 backdrop-blur-sm px-4 py-2 rounded-full border border-surface2"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-sm font-mono text-primary">FULL STACK ECOSYSTEM</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
