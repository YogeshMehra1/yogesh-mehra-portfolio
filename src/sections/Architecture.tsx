import { motion } from 'framer-motion'
import { useState } from 'react'
import { Shield, Zap, Database, Globe, Lock, Eye, TestTube, Activity, Cloud } from 'lucide-react'

const architectureComponents = [
  { id: 'client', label: 'Client', icon: Globe },
  { id: 'gateway', label: 'API Gateway', icon: Zap },
  { id: 'microservices', label: 'Spring Boot Microservices', icon: Database },
  { id: 'kafka', label: 'Kafka Event Bus', icon: Activity },
  { id: 'redis', label: 'Redis Cache', icon: Database },
  { id: 'postgres', label: 'PostgreSQL', icon: Database },
  { id: 'aws', label: 'AWS', icon: Cloud },
]

const explanations = {
  scalability: {
    title: 'Scalability',
    icon: Zap,
    description: 'Microservices architecture allows independent scaling of components based on demand.',
    components: ['gateway', 'microservices', 'kafka', 'redis'],
  },
  reliability: {
    title: 'Reliability',
    icon: Shield,
    description: 'Event-driven architecture with Kafka ensures message delivery and system resilience.',
    components: ['kafka', 'microservices', 'postgres'],
  },
  caching: {
    title: 'Caching',
    icon: Database,
    description: 'Redis caching layer reduces database load and improves response times by ~35%.',
    components: ['redis', 'microservices'],
  },
  async: {
    title: 'Asynchronous Processing',
    icon: Activity,
    description: 'Kafka enables asynchronous event processing, reducing downstream latency by ~30%.',
    components: ['kafka', 'microservices'],
  },
  security: {
    title: 'Security',
    icon: Lock,
    description: 'JWT-based authentication and RBAC ensure secure access to protected APIs.',
    components: ['gateway', 'microservices'],
  },
  observability: {
    title: 'Observability',
    icon: Eye,
    description: 'Comprehensive monitoring and logging for production support and RCA.',
    components: ['microservices', 'kafka', 'postgres'],
  },
  testing: {
    title: 'Testing',
    icon: TestTube,
    description: 'JUnit 5 and Mockito ensure code quality and prevent regressions.',
    components: ['microservices'],
  },
}

const Architecture = () => {
  const [selectedConcept, setSelectedConcept] = useState<string | null>(null)

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
        >
          How I think about backend systems
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-text-secondary text-center mb-16 max-w-2xl mx-auto"
        >
          Click on a concept to see how it applies to the architecture
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex flex-col items-center gap-4">
              {architectureComponents.map((comp, i) => (
                <motion.div
                  key={comp.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`w-full max-w-md p-4 rounded-xl border transition-all ${
                    selectedConcept && explanations[selectedConcept as keyof typeof explanations]?.components.includes(comp.id)
                      ? 'bg-primary/20 border-primary'
                      : 'bg-surface border-surface2'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <comp.icon className="w-6 h-6 text-primary" />
                    <span className="font-medium">{comp.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {Object.entries(explanations).map(([key, concept], i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                onClick={() => setSelectedConcept(selectedConcept === key ? null : key)}
                className={`p-6 rounded-xl border cursor-pointer transition-all ${
                  selectedConcept === key
                    ? 'bg-primary/10 border-primary'
                    : 'bg-surface border-surface2 hover:border-primary/30'
                }`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <concept.icon className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold">{concept.title}</h3>
                </div>
                {selectedConcept === key && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-text-secondary"
                  >
                    {concept.description}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Architecture
