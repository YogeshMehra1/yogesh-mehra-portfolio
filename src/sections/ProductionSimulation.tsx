import { motion } from 'framer-motion'
import { ArrowDown, Activity } from 'lucide-react'

const ProductionSimulation = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-surface via-background to-surface">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Production Simulation</h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-text-secondary max-w-2xl mx-auto"
          >
            Visual simulation of request flow through the architecture
          </motion.p>
        </motion.div>

        <div className="flex flex-col items-center gap-4 mb-16">
          {[
            { label: '1,000 Requests', color: 'bg-primary/20 border-primary text-primary' },
            { label: 'API Gateway', color: 'bg-secondary/20 border-secondary text-secondary' },
            { label: 'Spring Boot', color: 'bg-accent/20 border-accent text-accent' },
            { label: 'Redis Cache', color: 'bg-purple-500/20 border-purple-500 text-purple-500' },
            { label: 'Kafka', color: 'bg-orange-500/20 border-orange-500 text-orange-500' },
            { label: 'Database', color: 'bg-blue-500/20 border-blue-500 text-blue-500' },
          ].map((stage, i) => (
            <div key={i} className="flex items-center gap-4 w-full max-w-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.2 }}
                className={`flex-1 p-4 rounded-xl border text-center font-semibold card-hover ${stage.color}`}
              >
                {stage.label}
              </motion.div>
              {i < 5 && <ArrowDown className="w-6 h-6 text-text-secondary hidden md:block" />}
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="max-w-4xl mx-auto glass rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center gradient-text">Actual Production Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Concurrent Users', value: '20,000+', icon: Activity },
              { label: 'API Response Improvement', value: '~35%', icon: Activity },
              { label: 'Query Performance Improvement', value: '~40%', icon: Activity },
              { label: 'Production Uptime', value: '99.5%', icon: Activity },
            ].map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.6 + i * 0.1 }}
                className="text-center p-4 glass rounded-lg card-hover"
              >
                <metric.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold gradient-text mb-1">{metric.value}</div>
                <div className="text-sm text-text-secondary">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductionSimulation
