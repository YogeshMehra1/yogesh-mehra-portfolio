import { motion } from 'framer-motion'
import { Brain, Lock, Zap, Target, Code, Sparkles } from 'lucide-react'

const aspirations = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'AI & LLM Integration',
    description: 'Exploring Large Language Models and AI integration with backend systems for intelligent applications.',
    status: 'Learning',
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: 'OTP Payment Systems',
    description: 'Building secure OTP-based payment gateway integrations with fraud detection mechanisms.',
    status: 'Exploring',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Advanced Microservices',
    description: 'Deep dive into event-driven architecture with Kafka, service mesh, and distributed tracing.',
    status: 'In Progress',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Cloud Architecture',
    description: 'Mastering AWS serverless, lambda functions, and container orchestration with Kubernetes.',
    status: 'Learning',
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Full Stack Mastery',
    description: 'Advancing React.js skills with Next.js, GraphQL, and modern frontend architectures.',
    status: 'In Progress',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'System Design',
    description: 'Designing scalable distributed systems handling millions of requests with high availability.',
    status: 'Learning',
  },
]

const Aspirations = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-surface">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
        >
          Learning & Aspirations
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-text-secondary text-center mb-16 max-w-2xl mx-auto"
        >
          Technologies and domains I'm actively exploring and mastering
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aspirations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-background border border-surface2 rounded-xl p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.status === 'Learning' ? 'bg-secondary/20 text-secondary' :
                    item.status === 'In Progress' ? 'bg-primary/20 text-primary' :
                    'bg-accent/20 text-accent'
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>
              <p className="text-text-secondary">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-surface2 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Continuous Learning Journey</h3>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Beyond my professional experience, I'm actively exploring cutting-edge technologies 
            including AI/LLM integration, secure payment systems, and advanced cloud architectures. 
            My goal is to build intelligent, scalable systems that solve real-world problems.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Aspirations
