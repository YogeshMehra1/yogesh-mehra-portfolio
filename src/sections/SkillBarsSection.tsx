import { motion } from 'framer-motion'
import SkillBars from '../components/SkillBars'

const SkillBarsSection = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Skill Proficiency</h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-text-secondary max-w-2xl mx-auto"
          >
            Interactive skill levels based on project experience
          </motion.p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <SkillBars />
        </div>
      </div>
    </section>
  )
}

export default SkillBarsSection
