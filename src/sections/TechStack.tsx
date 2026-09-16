import { motion } from 'framer-motion'
import { useState } from 'react'
import SkillOrbs from '../components/SkillOrbs'

const techCategories = {
  '01 — BACKEND': [
    'Java 8 / Java 17',
    'Spring Boot',
    'Spring MVC',
    'Spring Data JPA',
    'Spring Security',
    'Hibernate',
    'REST APIs',
  ],
  '02 — MICROSERVICES': [
    'Microservices',
    'Apache Kafka',
    'Multithreading',
    'Design Patterns',
    'SOLID Principles',
  ],
  '03 — DATABASE & CACHE': [
    'PostgreSQL',
    'MySQL',
    'Redis',
    'SQL Optimization',
  ],
  '04 — CLOUD & DEVOPS': [
    'AWS',
    'S3',
    'EC2',
    'Docker',
    'Git',
    'GitHub Actions',
    'Maven',
    'Swagger/OpenAPI',
    'Postman',
  ],
  '05 — FRONTEND': [
    'React.js',
    'TypeScript',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Bootstrap',
  ],
  '06 — NODE ECOSYSTEM': [
    'Node.js',
    'Express.js',
  ],
  '07 — TESTING': [
    'JUnit 5',
    'Mockito',
    'Production Support',
    'RCA',
    'Agile Scrum',
  ],
}

const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const javaConnections = [
    'Spring Boot',
    'REST APIs',
    'Microservices',
    'Apache Kafka',
    'PostgreSQL',
    'Redis',
    'AWS',
    'React.js',
  ]

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Technology Ecosystem
        </motion.h2>
        
        <div className="space-y-12">
          {Object.entries(techCategories).map(([category, techs], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-bold text-primary mb-4 font-mono">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {techs.map((tech, techIndex) => {
                  const isConnected = hoveredTech === 'Java 8 / Java 17' && javaConnections.includes(tech)
                  const isJava = tech === 'Java 8 / Java 17'
                  const isReact = tech === 'React.js'
                  
                  return (
                    <motion.div
                      key={tech}
                      onMouseEnter={() => setHoveredTech(tech)}
                      onMouseLeave={() => setHoveredTech(null)}
                      className={`px-4 py-2 rounded-lg border transition-all cursor-default ${
                        isConnected
                          ? 'bg-primary/20 border-primary text-primary'
                          : isJava && hoveredTech
                          ? 'bg-primary/10 border-primary text-primary'
                          : isReact && hoveredTech
                          ? 'bg-secondary/10 border-secondary text-secondary'
                          : 'bg-surface border-surface2 hover:border-primary/50'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.05 }}
                    >
                      {tech}
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
        
        {(hoveredTech === 'Java 8 / Java 17' || hoveredTech === 'React.js') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-4 bg-surface border border-primary/30 rounded-lg text-center"
          >
            <p className="text-text-secondary">
              {hoveredTech === 'Java 8 / Java 17' 
                ? 'Hover over Java to see connected technologies in the ecosystem'
                : 'React.js connects to REST APIs and modern frontend development'
              }
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 hidden md:block"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">3D Skills Visualization</h3>
          <SkillOrbs />
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack
