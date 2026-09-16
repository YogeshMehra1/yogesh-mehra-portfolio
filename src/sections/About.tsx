import { motion } from 'framer-motion'
import useCounter from '../hooks/useCounter'
import GlitchText from '../components/GlitchText'

const MetricCard = ({ label, value, suffix, prefix }: { label: string; value: number; suffix?: string; prefix?: string }) => {
  const { count, ref } = useCounter({ end: value, duration: 2000, suffix: '', prefix: '' })

  return (
    <div ref={ref} className="bg-surface border border-surface2 rounded-xl p-6 text-center hover:border-primary/30 transition-colors">
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-text-secondary">{label}</div>
    </div>
  )
}

const About = () => {
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
          <GlitchText>Engineering, not just coding.</GlitchText>
        </motion.h2>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          I focus primarily on backend engineering and production systems, building scalable solutions that handle real-world traffic.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <MetricCard label="Years Experience" value={3.8} suffix="+" />
          <MetricCard label="Concurrent Users" value={20000} suffix="+" prefix="~" />
          <MetricCard label="API Response Improvement" value={35} suffix="%" prefix="~" />
          <MetricCard label="Query Performance Improvement" value={40} suffix="%" prefix="~" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-surface2 border border-surface2 rounded-xl p-8"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="w-3 h-3 bg-primary rounded-full animate-pulse"></span>
            <span className="text-2xl font-bold text-primary">99.5%</span>
            <span className="text-text-secondary">Production Uptime</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
