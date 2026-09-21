import { motion } from 'framer-motion'
import useCounter from '../hooks/useCounter'

const MetricCard = ({ label, value, suffix, prefix }: { label: string; value: number; suffix?: string; prefix?: string }) => {
  const { count, ref } = useCounter({ end: value, duration: 2000, suffix: '', prefix: '' })

  return (
    <div ref={ref} className="glass-strong rounded-2xl p-8 text-center card-hover relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 hover:opacity-100 transition-opacity"
      />
      <div className="relative z-10">
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-3">
          {prefix}{count}{suffix}
        </div>
        <div className="text-text-secondary font-medium">{label}</div>
      </div>
    </div>
  )
}

const About = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-12 lg:px-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">Engineering, not just coding</h2>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            I focus primarily on backend engineering and production systems, building scalable solutions that handle real-world traffic
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          <MetricCard label="Years Experience" value={3.8} suffix="+" />
          <MetricCard label="Concurrent Users" value={20000} suffix="+" prefix="~" />
          <MetricCard label="API Response Improvement" value={35} suffix="%" prefix="~" />
          <MetricCard label="Query Performance Improvement" value={40} suffix="%" prefix="~" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass-strong rounded-3xl p-10 mb-16 relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            style={{ backgroundSize: '200% 200%' }}
          />
          <div className="relative z-10 flex items-center justify-center gap-6">
            <motion.div
              animate={{ scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-4 h-4 rounded-full bg-primary glow-effect-sm"
            />
            <span className="text-3xl md:text-4xl font-bold gradient-text">99.5%</span>
            <span className="text-xl text-text-secondary font-medium">Production Uptime</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid gap-6 md:gap-8 md:grid-cols-2"
        >
          <div className="glass-strong rounded-2xl p-8 card-hover">
            <p className="text-sm text-text-secondary mb-3 font-medium">Certification</p>
            <p className="mt-2 font-bold text-primary text-lg">Oracle Agentic AI Certified Foundations Associate</p>
            <p className="mt-2 text-sm text-text-muted">September 2026</p>
          </div>
          <div className="glass-strong rounded-2xl p-8 card-hover">
            <p className="text-sm text-text-secondary mb-3 font-medium">Education</p>
            <p className="mt-2 font-bold text-lg">B.Tech, Computer Science & Engineering</p>
            <p className="mt-2 text-sm text-text-muted">Uttarakhand Technical University · 2016–2020</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
