import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const commands = [
  { cmd: '$ whoami', output: 'Java Backend Developer' },
  { cmd: '$ experience', output: '3.8 years' },
  { cmd: '$ primary-stack', output: 'Java • Spring Boot • Microservices' },
  { cmd: '$ messaging', output: 'Apache Kafka' },
  { cmd: '$ caching', output: 'Redis' },
  { cmd: '$ frontend', output: 'React.js • TypeScript' },
  { cmd: '$ cloud', output: 'AWS • Docker' },
  { cmd: '$ status', output: 'AVAILABLE FOR NEW OPPORTUNITIES' },
]

const Terminal = () => {
  const [currentCommand, setCurrentCommand] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommand((prev) => (prev + 1) % commands.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-surface border border-surface2 rounded-xl overflow-hidden">
            <div className="bg-surface2 px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-sm text-text-secondary font-mono">yogesh@portfolio:~$</span>
            </div>
            <div className="p-6 font-mono text-sm md:text-base">
              <div className="text-primary mb-2">yogesh@portfolio:~$</div>
              <div className="space-y-2">
                {commands.slice(0, currentCommand + 1).map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-text-secondary">{item.cmd}</div>
                    <div className="text-primary mt-1">{item.output}</div>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-primary">yogesh@portfolio:~$</span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-2 h-5 bg-primary"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Terminal
