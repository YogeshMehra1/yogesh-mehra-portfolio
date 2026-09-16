import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

const Card = ({ children, className = '', hover = true }: CardProps) => {
  return (
    <motion.div
      className={`bg-surface border border-surface2 rounded-xl p-6 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -5, borderColor: 'rgba(0,255,136,0.3)' } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

export default Card
