import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
  {
    year: '2022',
    title: 'Junior Software Developer',
    company: 'Haryana Knowledge Corporation Ltd',
    period: 'Jul 2022 – Oct 2025',
    description: 'Delivered Java and React.js modules for state examination systems, supporting 20,000+ concurrent users during peak exam windows.',
  },
  {
    year: '2025',
    title: 'Associate Consultant',
    company: 'Infosys Limited',
    period: 'Nov 2025 – Mar 2026',
    description: 'Built production revenue and invoicing microservices with Java 17, Spring Boot, Kafka, Redis, Docker, and React.js.',
  },
]

const Experience = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-surface">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Experience Timeline</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Professional journey building scalable systems
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.year}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                  className="absolute left-6 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-lg shadow-primary/50"
                ></motion.div>

                <div className="glass rounded-xl p-6 card-hover">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-2xl font-bold gradient-text">{exp.year}</span>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="w-5 h-5 text-secondary" />
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                  </div>

                  <p className="text-text-secondary mb-1">{exp.company}</p>
                  {exp.period && <p className="text-sm text-text-muted mb-3">{exp.period}</p>}
                  <p className="text-text-secondary leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
