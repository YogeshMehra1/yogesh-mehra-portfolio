import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Github, Linkedin, Mail, Phone, ArrowRight, Sparkles, Zap } from 'lucide-react'
import Button from './Button'

const CinematicHero = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])
  const scale = useTransform(scrollY, [0, 500], [1, 0.85])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const contacts = {
    github: { label: 'GitHub', value: 'github.com/YogeshMehra1', href: 'https://github.com/YogeshMehra1/' },
    linkedin: { label: 'LinkedIn', value: 'linkedin.com/in/yogesh-mehra-dev', href: 'https://www.linkedin.com/in/yogesh-mehra-dev/' },
    email: { label: 'Email', value: 'yogeshmehra.mehra1@gmail.com', href: 'mailto:yogeshmehra.mehra1@gmail.com' },
    phone: { label: 'Phone', value: '+91 9675580388', href: 'tel:+919675580388' },
  }

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Cinematic background layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background" />

        {/* Animated gradient orbs */}
        <motion.div
          style={{ y: y1 }}
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/10 blur-[120px]"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-secondary/10 blur-[120px]"
        />
        <motion.div
          style={{ y: y1 }}
          className="absolute top-[30%] right-[20%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[100px]"
        />

        {/* Mouse-following light effect */}
        <motion.div
          animate={{
            x: mousePosition.x - 400,
            y: mousePosition.y - 400,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 100 }}
          className="absolute w-[800px] h-[800px] rounded-full bg-primary/5 blur-[150px]"
        />

        {/* Sophisticated grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }} />
        </div>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * -150],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-12 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Content */}
          <motion.div
            style={{ y: y1, opacity }}
            className="space-y-8"
          >
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 glass-strong rounded-full"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-sm font-semibold text-primary tracking-wider">JAVA FULL STACK ENGINEER</span>
            </motion.div>

            {/* Dramatic name reveal */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold gradient-text mb-6 leading-tight">
                YOGESH MEHRA
              </h1>
            </motion.div>

            {/* Experience highlight */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <div className="h-px w-16 bg-gradient-to-r from-primary to-transparent" />
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 rounded-full bg-primary glow-effect-sm"
                />
                <span className="text-2xl md:text-3xl font-bold text-primary">3.8 Years Experience</span>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-2xl"
            >
              Building scalable enterprise systems with Java, Spring Boot, Microservices, and React.js
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-base md:text-lg text-text-muted max-w-xl leading-relaxed"
            >
              Results-driven developer delivering high-performance production systems, event-driven microservices, and modern web applications
            </motion.p>

            {/* Tech tags */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-wrap gap-3"
            >
              {['Java 17', 'Spring Boot', 'Microservices', 'Kafka', 'Redis', 'AWS', 'Docker', 'Kubernetes', 'React.js', 'GenAI'].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.3 + i * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 glass rounded-lg text-sm text-text-secondary hover:text-primary hover:border-primary/50 transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="primary" size="lg" href="#projects" className="group">
                View Projects
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="secondary" size="lg" href="/resume.pdf" download downloadName="Yogesh_Mehra_Resume.pdf">
                Download Resume
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="flex flex-wrap gap-3"
            >
              {Object.entries(contacts).map(([key, contact], i) => (
                <motion.a
                  key={key}
                  href={contact.href}
                  target={key === 'github' || key === 'linkedin' ? '_blank' : undefined}
                  rel={key === 'github' || key === 'linkedin' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.9 + i * 0.1 }}
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 glass rounded-xl hover:border-primary/50 transition-all"
                  aria-label={contact.label}
                >
                  {key === 'github' && <Github className="w-5 h-5 text-text-secondary hover:text-primary" />}
                  {key === 'linkedin' && <Linkedin className="w-5 h-5 text-text-secondary hover:text-primary" />}
                  {key === 'email' && <Mail className="w-5 h-5 text-text-secondary hover:text-primary" />}
                  {key === 'phone' && <Phone className="w-5 h-5 text-text-secondary hover:text-primary" />}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Premium Photo */}
          <motion.div
            style={{ y: y2, scale, opacity }}
            className="relative flex items-center justify-center min-h-[400px] md:min-h-[500px] lg:min-h-[600px]"
          >
            {/* Background glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]"
              />
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                className="absolute w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[100px]"
              />
            </div>

            {/* Animated orbit rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[450px] h-[450px] rounded-full border border-primary/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear', delay: 0.5 }}
              className="absolute w-[520px] h-[520px] rounded-full border border-dashed border-secondary/20"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 35, repeat: Infinity, ease: 'linear', delay: 1 }}
              className="absolute w-[400px] h-[400px] rounded-full border border-accent/10"
            />

            {/* Light sweep effect */}
            <motion.div
              animate={{ opacity: [0, 0.6, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/15 to-transparent"
              style={{
                width: '140%',
                height: '140%',
                transform: 'rotate(-45deg)',
              }}
            />

            {/* Photo container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="relative"
            >
              {/* Outer gradient border */}
              <motion.div
                animate={{
                  boxShadow: isHovered
                    ? '0 0 60px rgba(139, 92, 246, 0.4), 0 0 100px rgba(6, 182, 212, 0.2)'
                    : '0 0 40px rgba(139, 92, 246, 0.2), 0 0 80px rgba(6, 182, 212, 0.1)'
                }}
                transition={{ duration: 0.5 }}
                className="relative p-[4px] rounded-full bg-gradient-to-br from-primary via-secondary to-accent"
              >
                {/* Inner dark border */}
                <div className="relative p-[3px] rounded-full bg-background">
                  {/* Image */}
                  <div className="relative rounded-full overflow-hidden bg-surface">
                    <img
                      src="/yogesh-mehra-profile.png"
                      alt="Yogesh Mehra, Java Full Stack Developer"
                      className="w-[300px] h-[300px] md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px] object-cover object-center"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </motion.div>

              {/* Floating status badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 glass-strong px-6 py-3 rounded-full"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2.5 h-2.5 rounded-full bg-primary glow-effect-sm"
                  />
                  <span className="text-sm font-semibold text-primary">Available for opportunities</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default CinematicHero
