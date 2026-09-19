import { motion } from 'framer-motion'
import { Activity, Database as DbIcon, Users, Clock, CheckCircle, AlertTriangle } from 'lucide-react'
import useCounter from '../hooks/useCounter'

const MetricCard = ({ icon: Icon, label, value, suffix, color }: { icon: any; label: string; value: number; suffix?: string; color: string }) => {
  const { count, ref } = useCounter({ end: value, duration: 2000, suffix: '', prefix: '' })

  return (
    <div ref={ref} className="glass rounded-xl p-6 card-hover">
      <div className={`p-3 rounded-lg ${color} mb-4 inline-block`}>
        <Icon className="w-6 h-6" />
      </div>
      <div className="text-3xl font-bold gradient-text mb-2">
        {count}{suffix}
      </div>
      <div className="text-text-secondary">{label}</div>
    </div>
  )
}

const Production = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-background via-surface to-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Inside Production</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Real metrics from production systems
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <MetricCard icon={Activity} label="API Response Time" value={35} suffix="%" color="bg-primary/20 text-primary" />
          <MetricCard icon={DbIcon} label="Query Performance" value={40} suffix="%" color="bg-secondary/20 text-secondary" />
          <MetricCard icon={Users} label="Concurrent Users" value={20000} suffix="+" color="bg-accent/20 text-accent" />
          <MetricCard icon={Clock} label="Uptime" value={99.5} suffix="%" color="bg-green-500/20 text-green-500" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-8 text-center gradient-text">Incident Response Simulation</h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {[
              { icon: AlertTriangle, label: 'Request Spike Detected', color: 'bg-red-500/20 text-red-500' },
              { icon: DbIcon, label: 'Redis Cache', color: 'bg-purple-500/20 text-purple-500' },
              { icon: CheckCircle, label: 'Reduced DB Load', color: 'bg-blue-500/20 text-blue-500' },
              { icon: Activity, label: 'Kafka Async Processing', color: 'bg-orange-500/20 text-orange-500' },
              { icon: CheckCircle, label: 'Stable API', color: 'bg-green-500/20 text-green-500' },
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.2 }}
                  className={`p-4 rounded-xl ${step.color} text-center min-w-[160px]`}
                >
                  <step.icon className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-sm font-medium">{step.label}</div>
                </motion.div>
                {i < 4 && <div className="hidden md:block w-8 h-0.5 bg-surface2"></div>}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Production
