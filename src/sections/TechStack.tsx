import { motion } from 'framer-motion'
import { useState } from 'react'
import { Code, Cloud, Database, Server, Cpu, Shield, Rocket } from 'lucide-react'

const techCategories = {
  '01 — BACKEND': [
    'Java 17',
    'Spring Boot',
    'Spring MVC',
    'Spring Data JPA',
    'Hibernate',
    'Spring Security',
    'Microservices',
    'REST APIs',
  ],
  '02 — DATA & CACHING': [
    'MySQL',
    'Redis',
  ],
  '03 — MESSAGING & EVENTS': [
    'Apache Kafka',
  ],
  '04 — CLOUD & DEVOPS': [
    'AWS',
    'Docker',
    'Git',
    'CI/CD',
  ],
  '05 — FRONTEND': [
    'React.js',
    'Angular',
    'HTML5 / CSS3',
  ],
  '06 — AI & PRODUCTIVITY': [
    'GitHub Copilot',
    'Cursor AI',
    'ChatGPT',
    'Spring AI',
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
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-surface">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">Technology Ecosystem</h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Core technologies I use to build scalable, production-ready systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {Object.entries(techCategories).map(([category, techs], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              onMouseEnter={() => setActiveCategory(category)}
              onMouseLeave={() => setActiveCategory(null)}
              className={`glass rounded-2xl p-4 md:p-6 card-hover cursor-pointer ${
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
