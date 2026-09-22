import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import Button from '../components/Button'
import PremiumPhotoReveal from '../components/PremiumPhotoReveal'

const Hero = () => {
  const [activeContact, setActiveContact] = useState<string | null>(null)

  const contacts = {
    github: { label: 'GitHub', value: 'github.com/YogeshMehra1', href: 'https://github.com/YogeshMehra1/' },
    linkedin: { label: 'LinkedIn', value: 'linkedin.com/in/yogesh-mehra-dev', href: 'https://www.linkedin.com/in/yogesh-mehra-dev/' },
    email: { label: 'Email', value: 'yogeshmehra.mehra1@gmail.com', href: 'mailto:yogeshmehra.mehra1@gmail.com' },
    phone: { label: 'Phone', value: '+91 9675580388', href: 'tel:+919675580388' },
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-12 md:py-0">
      <div className="container mx-auto px-4 md:px-12 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 glass rounded-full text-sm font-mono text-primary-light tracking-wider">
                JAVA FULL STACK DEVELOPER
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold mb-6 gradient-text"
            >
              YOGESH MEHRA
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 md:w-12 bg-gradient-to-r from-primary to-transparent" />
                <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary">3.8 Years Experience</span>
              </div>
              <h2 className="text-lg md:text-xl lg:text-2xl text-text-secondary leading-relaxed">
                Java Full Stack Developer building scalable systems and modern web applications
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-base md:text-lg text-text-secondary mb-8 md:mb-10 max-w-xl leading-relaxed"
            >
              Java Full Stack Developer with 3.8 years of experience building backend services and web applications with Java 17, Spring Boot, REST APIs, microservices, and React.js.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {['Java 17', 'Spring Boot', 'Microservices', 'REST APIs', 'Kafka', 'Redis', 'AWS', 'Docker', 'React.js', 'Angular'].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 + i * 0.05 }}
                  className="px-4 py-2 glass rounded-lg text-sm text-text-secondary hover:text-primary hover:border-primary/50 transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Button variant="primary" size="lg" href="#projects" className="magnetic-button">
                View Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="secondary" size="lg" href="/resume.pdf" download downloadName="yogesh_Mehra_Resume.pdf" className="magnetic-button">
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 }}
              className="flex flex-wrap gap-3"
            >
              <button
                type="button"
                onClick={() => setActiveContact(activeContact === 'github' ? null : 'github')}
                className="p-3 glass rounded-xl hover:border-primary/50 transition-all magnetic-button"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-text-secondary hover:text-primary" />
              </button>
              <button
                type="button"
                onClick={() => setActiveContact(activeContact === 'linkedin' ? null : 'linkedin')}
                className="p-3 glass rounded-xl hover:border-primary/50 transition-all magnetic-button"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-text-secondary hover:text-primary" />
              </button>
              <button
                type="button"
                onClick={() => setActiveContact(activeContact === 'email' ? null : 'email')}
                className="p-3 glass rounded-xl hover:border-primary/50 transition-all magnetic-button"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-text-secondary hover:text-primary" />
              </button>
              <button
                type="button"
                onClick={() => setActiveContact(activeContact === 'phone' ? null : 'phone')}
                className="p-3 glass rounded-xl hover:border-primary/50 transition-all magnetic-button"
                aria-label="Call +91 9675580388"
              >
                <Phone className="w-5 h-5 text-text-secondary hover:text-primary" />
              </button>
            </motion.div>

            {activeContact && (
              <motion.a
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                href={contacts[activeContact as keyof typeof contacts].href}
                target={activeContact === 'github' || activeContact === 'linkedin' ? '_blank' : undefined}
                rel={activeContact === 'github' || activeContact === 'linkedin' ? 'noopener noreferrer' : undefined}
                className="mt-4 inline-flex max-w-full flex-wrap items-center gap-3 glass px-5 py-3 text-sm text-primary"
              >
                <span className="text-text-secondary">{contacts[activeContact as keyof typeof contacts].label}:</span>
                <span className="break-all font-medium">{contacts[activeContact as keyof typeof contacts].value}</span>
              </motion.a>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex items-center justify-center min-h-[350px] md:min-h-[500px] lg:min-h-[600px] order-first lg:order-last"
          >
            <PremiumPhotoReveal />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2"
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
