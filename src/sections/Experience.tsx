import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
  {
    year: '2022',
    title: 'Junior Software Developer',
    company: 'Haryana Knowledge Corporation Ltd',
    period: '11 Jul 2022 – 31 Oct 2025',
    description: 'Built examination management systems handling 20,000+ concurrent users with PostgreSQL performance tuning.',
  },
  {
    year: '2025',
    title: 'Associate Consultant',
    company: 'Infosys Limited',
    period: '3 Nov 2025 – 13 Mar 2026',
    description: 'Worked on enterprise-level revenue and invoicing platforms with Java 17, Spring Boot, and Kafka.',
  },
  {
    year: '2026',
    title: 'Immediate Joiner',
    company: 'Available for Opportunities',
    description: 'Ready to take on new challenges in backend and full stack engineering.',
  },
]

const Experience = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-surface">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Experience Timeline
        </motion.h2>

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
                  className="absolute left-6 w-5 h-5 bg-primary rounded-full border-4 border-background"
                ></motion.div>
                
                <div className="bg-background border border-surface2 rounded-xl p-6 hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-2xl font-bold text-primary">{exp.year}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="w-5 h-5 text-secondary" />
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                  </div>
                  
                  <p className="text-text-secondary mb-1">{exp.company}</p>
                  {exp.period && <p className="text-sm text-text-secondary mb-3">{exp.period}</p>}
                  <p className="text-text-secondary">{exp.description}</p>
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
