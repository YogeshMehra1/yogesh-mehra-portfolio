import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

const Section = ({ children, className = '', id }: SectionProps) => {
  return (
    <motion.section
      id={id}
      className={`py-24 px-6 md:px-12 lg:px-24 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  )
}

export default Section
