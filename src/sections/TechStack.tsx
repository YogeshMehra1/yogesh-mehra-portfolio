import { motion } from 'framer-motion'
import { useState } from 'react'
import { Code, Cloud, Database, Server, Cpu, Shield, Rocket } from 'lucide-react'

const techCategories = {
  '01 — BACKEND': [
    'Java 17',
    'Spring Boot',
    'Spring Security',
    'Microservices',
    'REST APIs',
  ],
  '02 — DATA & CACHING': [
    'PostgreSQL',
    'MySQL',
    'Redis',
  ],
  '03 — MESSAGING & EVENTS': [
    'Apache Kafka',
  ],
  '04 — CLOUD & DEVOPS': [
    'AWS',
    'Docker',
    'Kubernetes',
    'Git',
    'CI/CD',
  ],
  '05 — FRONTEND': [
    'React.js',
    'TypeScript',
  ],
  '06 — AI & PRODUCTIVITY': [
    'GenAI',
  ],
}

const categoryIcons: Record<string, any> = {
  '01 — BACKEND': <Server className="w-6 h-6" />,
  '02 — DATA & CACHING': <Database className="w-6 h-6" />,
  '03 — MESSAGING & EVENTS': <Rocket className="w-6 h-6" />,
  '04 — CLOUD & DEVOPS': <Cloud className="w-6 h-6" />,
  '05 — FRONTEND': <Code className="w-6 h-6" />,
  '06 — AI & PRODUCTIVITY': <Cpu className="w-6 h-6" />,
}

const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  return (
    <section className="py-20 md:py-32 px-4 md:px-12 lg:px-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">Technology Ecosystem</h2>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Core technologies I use to build scalable, production-ready systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {Object.entries(techCategories).map(([category, techs], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              onMouseEnter={() => setActiveCategory(category)}
              onMouseLeave={() => setActiveCategory(null)}
              className={`glass-strong rounded-2xl p-6 md:p-8 card-hover cursor-pointer relative overflow-hidden ${
                activeCategory === category ? 'border-primary/50' : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl ${
                  activeCategory === category ? 'bg-primary/20 text-primary' : 'bg-surface2 text-text-secondary'
                }`}>
                  {categoryIcons[category]}
                </div>
                <h3 className="text-lg font-bold font-mono">{category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {techs.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    onMouseEnter={() => setHoveredTech(tech)}
                    onMouseLeave={() => setHoveredTech(null)}
                    className={`px-3 py-2 rounded-lg text-sm transition-all ${
                      hoveredTech === tech
                        ? 'bg-primary/20 text-primary border-primary/50'
                        : 'bg-surface2 text-text-secondary hover:border-primary/30'
                    } border border-transparent`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: techIndex * 0.03 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {hoveredTech && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-12 max-w-2xl mx-auto glass rounded-xl p-6 text-center"
          >
            <p className="text-primary font-medium mb-2">{hoveredTech}</p>
            <p className="text-text-secondary text-sm">
              Core technology in my full-stack development toolkit
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default TechStack
