import { motion } from 'framer-motion'
import { ArrowRight, Lock, Shield, Key, UserCheck, FileText } from 'lucide-react'

const securityFlow = [
  { label: 'Client', icon: UserCheck },
  { label: 'Login', icon: Key },
  { label: 'JWT', icon: FileText },
  { label: 'Spring Security', icon: Shield },
  { label: 'Authentication', icon: Lock },
  { label: 'Authorization', icon: UserCheck },
  { label: 'RBAC', icon: Shield },
  { label: 'Protected API', icon: Lock },
]

const concepts = [
  {
    title: 'Authentication',
    icon: Lock,
    description: 'Verifying user identity through JWT tokens and secure login mechanisms.',
  },
  {
    title: 'Authorization',
    icon: Shield,
    description: 'Controlling access to resources based on user roles and permissions.',
  },
  {
    title: 'JWT',
    icon: FileText,
    description: 'JSON Web Tokens for stateless, secure authentication across microservices.',
  },
  {
    title: 'RBAC',
    icon: UserCheck,
    description: 'Role-Based Access Control ensuring users only access authorized endpoints.',
  },
  {
    title: 'Secure REST APIs',
    icon: Shield,
    description: 'Implementing Spring Security with proper validation and sanitization.',
  },
]

const Security = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Security Architecture</h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-text-secondary max-w-2xl mx-auto"
          >
            End-to-end authentication and authorization flow
          </motion.p>
        </motion.div>

        <div className="mb-16">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {securityFlow.map((step, i) => (
              <div key={i} className="flex items-center gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3 p-4 glass rounded-xl card-hover"
                >
                  <step.icon className="w-6 h-6 text-primary" />
                  <span className="font-medium">{step.label}</span>
                </motion.div>
                {i < securityFlow.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-text-secondary hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {concepts.map((concept, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass rounded-xl p-6 card-hover"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <concept.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">{concept.title}</h3>
              </div>
              <p className="text-text-secondary">{concept.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Security
