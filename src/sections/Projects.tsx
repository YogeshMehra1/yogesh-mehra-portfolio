import { motion } from 'framer-motion'
import { ArrowRight, Database, Server, Cloud, Zap, Calendar } from 'lucide-react'

const projects = [
  {
    title: 'Healthcare Management Platform',
    company: 'Infosys Limited',
    role: 'Associate Consultant — Java Full Stack Developer',
    period: 'Nov 2025 – Mar 2026',
    description: 'Contributed to an existing microservices-based healthcare platform for patient management, provider management, and appointment workflows.',
    architecture: ['Java 17', 'Spring Boot', 'Spring Cloud', 'REST APIs', 'MySQL', 'Kafka', 'Redis'],
    highlights: [
      'Request validation, business logic, exception handling, and JPA database operations',
      'API Gateway, Eureka, OpenFeign, and Resilience4j',
      'Kafka notification events and Redis caching',
      'Docker and AWS deployment support',
      'React.js integration with backend REST APIs',
    ],
    icon: <Server className="w-6 h-6" />,
  },
  {
    title: 'Online Recruitment System',
    company: 'Haryana Knowledge Corporation Ltd',
    role: 'Junior Software Developer',
    period: 'Jul 2022 – Oct 2025',
    description: 'Developed backend modules for candidate registration, application submission, admit-card, payment, and notification workflows.',
    architecture: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'JPA/Hibernate', 'Angular', 'AWS'],
    highlights: [
      'Third-party payment gateway integration',
      'OTP verification with email and AWS SNS notifications',
      'PDF and Excel report/document generation',
      'AWS S3 document storage and EC2 application hosting',
      'Angular modules integrated with REST APIs',
      'JUnit and Mockito unit/integration testing',
    ],
    icon: <Database className="w-6 h-6" />,
  },
  {
    title: 'Online Transfer System',
    company: 'Haryana Knowledge Corporation Ltd',
    role: 'Java Full Stack Developer',
    period: 'Jul 2022 – Oct 2025',
    description: 'Developed secure application and document-verification workflows with Java, Spring Boot, React.js, and MySQL.',
    architecture: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'Spring Security', 'JWT', 'React.js'],
    highlights: [
      'Request validation and exception handling',
      'JWT-based authentication and role-based authorization',
      'Service-layer business logic and database operations',
      'Refactored logic with Java Streams and Lambda expressions',
      'Swagger/OpenAPI documentation',
      'Postman testing, debugging, and issue resolution',
    ],
    icon: <Cloud className="w-6 h-6" />,
  },
  {
    title: 'Resume Analyzer AI',
    company: 'Personal Project',
    role: 'AI Application Developer',
    description: 'AI-powered resume analysis app that extracts resume text and returns practical ATS feedback for candidates.',
    architecture: ['Spring Boot', 'Spring AI', 'Google Gemini', 'Apache Tika', 'Thymeleaf'],
    highlights: [
      'Extracts resume text with Apache Tika',
      'Generates ATS score, strengths, weaknesses, and keyword gaps',
      'Provides actionable improvement suggestions',
      'Integrates Spring AI with Google Gemini',
    ],
    icon: <Cloud className="w-6 h-6" />,
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Selected Work</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Production experience and personal projects built for scale, reliability, and real-world use
          </p>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass rounded-2xl p-6 md:p-8 card-hover"
            >
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                {/* Left side - Icon and main info */}
                <div className="lg:w-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.1 }}
                    className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl mb-6"
                  >
                    <div className="text-primary mb-4">
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <div className="space-y-2">
                      <p className="text-primary font-mono text-sm">{project.company}</p>
                      <p className="text-text-secondary text-sm">{project.role}</p>
                      {project.period && (
                        <div className="flex items-center gap-2 text-text-muted text-sm">
                          <Calendar className="w-4 h-4" />
                          {project.period}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Right side - Details */}
                <div className="lg:w-2/3">
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                    className="text-lg text-text-secondary mb-8 leading-relaxed"
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                    className="mb-8"
                  >
                    <h4 className="text-sm font-mono text-primary mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      ARCHITECTURE
                    </h4>
                    <div className="flex flex-wrap items-center gap-2">
                      {project.architecture.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="px-3 py-1.5 bg-surface2 border border-surface3 rounded-lg text-sm text-text-secondary hover:border-primary/50 transition-colors">
                            {item}
                          </span>
                          {i < project.architecture.length - 1 && (
                            <ArrowRight className="w-4 h-4 text-text-muted" />
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.4 }}
                  >
                    <h4 className="text-sm font-mono text-primary mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      KEY ACHIEVEMENTS
                    </h4>
                    <ul className="space-y-3">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-text-secondary">
                          <div className="p-1.5 bg-primary/10 rounded-lg mt-0.5">
                            <Zap className="w-4 h-4 text-primary" />
                          </div>
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
