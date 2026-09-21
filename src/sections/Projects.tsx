import { motion } from 'framer-motion'
import { ArrowRight, Database, Server, Cloud, Zap, ExternalLink, Calendar } from 'lucide-react'

const projects = [
  {
    title: 'Revenue & Invoicing Platform',
    company: 'Infosys Limited',
    role: 'Associate Consultant — Java Backend Developer',
    period: 'Nov 2025 – Mar 2026',
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
    period: 'Jul 2022 – Oct 2025',
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
    company: 'Haryana Knowledge Corporation Ltd',
    role: 'Java Full Stack Developer',
    period: 'Jul 2022 – Oct 2025',
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
  {
    title: 'Food Delivery Platform',
    company: 'Personal Project',
    role: 'Java Full Stack Developer',
    description: 'Enterprise-grade food delivery platform with Spring Boot microservices, real-time order tracking, secure payments, and event-driven workflows.',
    architecture: ['Spring Boot', 'Microservices', 'Kafka', 'Redis', 'WebSocket', 'Secure Payments'],
    highlights: [
      'Real-time order tracking with WebSocket support',
      'Kafka-based event streaming for order workflows',
      'Redis caching for responsive platform experiences',
      'Secure payment flow integration',
    ],
    icon: <Server className="w-6 h-6" />,
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
  {
    title: 'Salon Booking Microservices Platform',
    company: 'Personal Project',
    role: 'Java Backend Developer',
    description: 'Production-style salon booking platform designed as independently deployable services with security, caching, event publishing, and observability.',
    architecture: ['API Gateway', 'JWT', 'Kafka', 'Redis', 'PostgreSQL', 'Docker Compose'],
    highlights: [
      'Auth, salon, booking, and notification services',
      'Kafka event publishing and Redis caching',
      'Flyway-managed PostgreSQL schema migrations',
      'Grafana, Prometheus, and Loki observability stack',
    ],
    icon: <Database className="w-6 h-6" />,
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

        <div className="space-y-12 md:space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-strong rounded-3xl p-8 md:p-10 card-hover relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 hover:opacity-100 transition-opacity"
              />
              <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12">
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
