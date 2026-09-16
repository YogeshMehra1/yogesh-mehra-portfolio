import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlitchTextProps {
  children: ReactNode
  className?: string
}

const GlitchText = ({ children, className = '' }: GlitchTextProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{
        textShadow: [
          '2px 0 #ff0000, -2px 0 #00ff00',
          '-2px 0 #ff0000, 2px 0 #00ff00',
          '2px 0 #ff0000, -2px 0 #00ff00',
          '0 0 transparent',
        ],
      }}
      transition={{
        duration: 0.3,
        repeat: 3,
        repeatDelay: 0.5,
      }}
    >
      {children}
    </motion.div>
  )
}

export default GlitchText
