import { motion } from 'framer-motion'
import { Brain, Lock, Zap, Target, Code, Sparkles } from 'lucide-react'

const aspirations = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'AI-Assisted Development',
    description: 'Using GitHub Copilot, Cursor IDE, ChatGPT/Claude, OpenAI APIs, and LLMs to improve development workflows and build AI features.',
    status: 'Applied',
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: 'Secure APIs',
    description: 'Building Spring Security and JWT-based RBAC APIs for protected application workflows.',
    status: 'Applied',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Event-Driven Systems',
    description: 'Applying Apache Kafka for asynchronous processing and decoupled microservice communication.',
    status: 'Applied',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Cloud & Delivery',
    description: 'Working with AWS S3 and EC2, Docker, GitHub Actions, Maven, and production deployment practices.',
    status: 'Applied',
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Full Stack Delivery',
    description: 'Delivering React.js interfaces alongside Java backend APIs for examination and revenue workflows.',
    status: 'Applied',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Observability',
    description: 'Designing with Grafana, Prometheus, Loki, and production support practices in mind.',
    status: 'Applied',
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
          Capabilities & Continuous Learning
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-text-secondary text-center mb-16 max-w-2xl mx-auto"
        >
          Practical engineering strengths, tools, and areas of ongoing growth
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
                    item.status === 'Applied' ? 'bg-primary/20 text-primary' :
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
          <h3 className="text-2xl font-bold mb-4">Building with a learning mindset</h3>
          <p className="text-text-secondary max-w-2xl mx-auto">
            I combine Java, Spring Boot, React.js, and cloud-native tooling with AI-assisted development
            to build reliable, scalable systems that solve real-world problems.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Aspirations
