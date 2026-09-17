import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { useState } from 'react'
import Button from '../components/Button'
import GlitchText from '../components/GlitchText'
import TypingAnimation from '../components/TypingAnimation'

const Hero = () => {
  const [activeContact, setActiveContact] = useState<string | null>(null)

  const contacts = {
    github: { label: 'GitHub', value: 'github.com/YogeshMehra1', href: 'https://github.com/YogeshMehra1/' },
    linkedin: { label: 'LinkedIn', value: 'linkedin.com/in/yogesh-mehra-dev', href: 'https://www.linkedin.com/in/yogesh-mehra-dev/' },
    email: { label: 'Email', value: 'yogeshmehra.mehra1@gmail.com', href: 'mailto:yogeshmehra.mehra1@gmail.com' },
    phone: { label: 'Phone', value: '+91 9675580388', href: 'tel:+919675580388' },
  }

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
              <TypingAnimation text="Java Full Stack Developer building scalable systems and modern web applications." speed={30} />
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-lg text-text-secondary mb-8 max-w-xl"
            >
              Results-driven developer with 3.8 years of experience delivering high-performance Java and Spring Boot systems, event-driven microservices, and React.js interfaces.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {['Java 8 / 17', 'Spring Boot', 'Microservices', 'Kafka', 'Redis', 'AWS', 'Docker', 'React.js', 'OpenAI API', 'LLMs'].map((tech, i) => (
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
              <Button variant="secondary" size="lg" href="/resume.pdf" download downloadName="Yogesh_Mehra_Resume.pdf">
                Download Resume
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="flex flex-wrap gap-4"
            >
              <button
                type="button"
                onClick={() => setActiveContact(activeContact === 'github' ? null : 'github')}
                className="p-3 bg-surface border border-surface2 rounded-lg hover:border-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={() => setActiveContact(activeContact === 'linkedin' ? null : 'linkedin')}
                className="p-3 bg-surface border border-surface2 rounded-lg hover:border-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={() => setActiveContact(activeContact === 'email' ? null : 'email')}
                className="p-3 bg-surface border border-surface2 rounded-lg hover:border-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={() => setActiveContact(activeContact === 'phone' ? null : 'phone')}
                className="p-3 bg-surface border border-surface2 rounded-lg hover:border-primary transition-colors"
                aria-label="Call +91 9675580388"
              >
                <Phone className="w-6 h-6" />
              </button>
            </motion.div>

            {activeContact && (
              <motion.a
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                href={contacts[activeContact as keyof typeof contacts].href}
                target={activeContact === 'github' || activeContact === 'linkedin' ? '_blank' : undefined}
                rel={activeContact === 'github' || activeContact === 'linkedin' ? 'noopener noreferrer' : undefined}
                className="mt-3 inline-flex max-w-full flex-wrap items-center gap-2 rounded-lg border border-primary/40 bg-surface px-4 py-3 text-sm text-primary hover:border-primary"
              >
                <span className="text-text-secondary">{contacts[activeContact as keyof typeof contacts].label}:</span>
                <span className="break-all">{contacts[activeContact as keyof typeof contacts].value}</span>
              </motion.a>
            )}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex min-h-[400px] items-center justify-center md:min-h-[500px] lg:min-h-[600px]"
          >
            <div className="absolute h-72 w-72 rounded-full bg-primary/20 blur-3xl md:h-96 md:w-96" />
            <div className="absolute h-[340px] w-[340px] rounded-full border border-primary/20 md:h-[460px] md:w-[460px]" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
              className="absolute h-[370px] w-[370px] rounded-full border border-dashed border-secondary/30 md:h-[510px] md:w-[510px]"
            />
            <div className="relative rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1.5 shadow-2xl shadow-primary/30">
              <div className="rounded-full bg-background p-1.5">
                <img
                  src="/yogesh-mehra-profile.png"
                  alt="Yogesh Mehra, Java Full Stack Developer"
                  className="h-64 w-64 rounded-full object-cover object-top md:h-80 md:w-80 lg:h-96 lg:w-96"
                />
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-2 bg-surface/80 backdrop-blur-sm px-4 py-2 rounded-full border border-surface2"
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
