import { motion } from 'framer-motion'
import { ArrowRight, Database, Server, Cloud, Zap } from 'lucide-react'
import TiltCard from '../components/TiltCard'

const projects = [
  {
    title: 'Revenue & Invoicing Platform',
    company: 'Infosys Limited',
    role: 'Associate Consultant — Java Backend Developer',
    period: '3 Nov 2025 – 13 Mar 2026',
    description: 'Built backend microservices for invoice generation using Java 17 and Spring Boot, following REST API best practices across 3+ internal service consumers.',
    architecture: ['REST API', 'Spring Boot Microservice', 'Kafka', 'Redis', 'Invoice Processing', 'AWS / Docker'],
    highlights: [
      'Kafka asynchronous payment notifications',
      '~30% lower downstream event-processing latency',
      'Redis caching - ~35% faster average response time',
      'JUnit 5 + Mockito testing',
      'Docker deployment',
      'Supporting React.js revenue/refund modules',
    ],
    icon: <Server className="w-6 h-6" />,
  },
  {
    title: 'State Examination Management System',
    company: 'Haryana Knowledge Corporation Ltd',
    role: 'Junior Software Developer',
    period: 'Jul 2022 – 2026',
    description: 'Built examination system handling 20,000+ concurrent users with PostgreSQL performance tuning and JPA/Hibernate optimization.',
    architecture: ['React.js', 'REST API', 'Spring Boot', 'PostgreSQL', 'JPA/Hibernate'],
    highlights: [
      'Candidate registration and admit card processing',
      'PostgreSQL performance tuning with execution plan analysis',
      'JPA/Hibernate optimization - ~40% query-time reduction',
      '99.5% uptime',
      'Production support and RCA',
      'JUnit 5 + Mockito testing',
      'React.js supporting UI',
    ],
    icon: <Database className="w-6 h-6" />,
  },
  {
    title: 'Citizen Services & Application Processing Portal',
    company: 'Government Project',
    role: 'Java Backend Developer',
    period: '2025',
    description: 'Secure document verification system processing 15,000+ citizen applications with JWT-based RBAC and AWS S3 integration.',
    architecture: ['React.js', 'Secure REST API', 'Spring Security', 'JWT', 'RBAC', 'Application Processing', 'AWS S3'],
    highlights: [
      '15,000+ citizen applications processed',
      'Secure document verification APIs',
      'JWT-based RBAC implementation',
      'AWS S3 document storage',
      'Java Streams and Lambdas - ~25% duplicate-code reduction',
      'Swagger/OpenAPI documentation',
      'Postman API testing - ~20% integration handoff improvement',
    ],
    icon: <Cloud className="w-6 h-6" />,
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-surface">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
        >
          Production Systems
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-text-secondary text-center mb-16 max-w-2xl mx-auto"
        >
          Real-world backend systems built for scale and reliability
        </motion.p>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <TiltCard
              key={index}
              className="bg-background border border-surface2 rounded-2xl p-8 hover:border-primary/30 transition-colors"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="p-4 bg-primary/10 rounded-xl text-primary">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h3>
                    <p className="text-primary font-mono mb-1">{project.company}</p>
                    <p className="text-text-secondary mb-2">{project.role}</p>
                    <p className="text-text-secondary text-sm">{project.period}</p>
                  </div>
                </div>

                <p className="text-lg text-text-secondary mb-8">{project.description}</p>

                <div className="mb-8">
                  <h4 className="text-sm font-mono text-primary mb-4">ARCHITECTURE FLOW</h4>
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    {project.architecture.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-surface border border-surface2 rounded-lg">{item}</span>
                        {i < project.architecture.length - 1 && <ArrowRight className="w-4 h-4 text-text-secondary" />}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-mono text-primary mb-4">KEY ACHIEVEMENTS</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-text-secondary">
                        <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
