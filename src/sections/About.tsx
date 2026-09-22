import { motion } from 'framer-motion'
import useCounter from '../hooks/useCounter'

const MetricCard = ({ label, value, suffix, prefix }: { label: string; value: number; suffix?: string; prefix?: string }) => {
  const { count, ref } = useCounter({ end: value, duration: 2000, suffix: '', prefix: '' })

  return (
    <div ref={ref} className="glass rounded-xl p-6 text-center card-hover">
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Engineering, not just coding</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            I build backend services and web applications with Java, Spring Boot, microservices, REST APIs, and modern frontend frameworks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <MetricCard label="Years Experience" value={3.8} suffix="+" />
          <MetricCard label="Core Experience" value={17} suffix="" prefix="Java " />
          <MetricCard label="Primary Backend" value={3} suffix="+" />
          <MetricCard label="Frontend Frameworks" value={2} suffix="" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass rounded-xl p-8 mb-12"
        >
          <div className="flex items-center justify-center gap-4">
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 bg-primary rounded-full"
            />
            <span className="text-2xl font-bold gradient-text">Immediate Joiner</span>
            <span className="text-text-secondary">Available for Java full-stack opportunities</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid gap-6 md:grid-cols-2"
        >
          <div className="glass rounded-xl p-6 card-hover">
            <p className="text-sm text-text-secondary mb-2">Profile</p>
            <p className="mt-1 font-semibold text-primary">Java Full Stack Developer</p>
            <p className="mt-1 text-sm text-text-muted">Java 17 · Spring Boot · Microservices · React.js</p>
          </div>
          <div className="glass rounded-xl p-6 card-hover">
            <p className="text-sm text-text-secondary mb-2">Education</p>
            <p className="mt-1 font-semibold">B.Tech, Computer Science & Engineering</p>
            <p className="mt-1 text-sm text-text-muted">Uttarakhand Technical University · 2016–2020</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
