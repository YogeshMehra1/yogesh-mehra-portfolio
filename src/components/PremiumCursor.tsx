import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface PremiumCursorProps {
  children: ReactNode
  className?: string
}

const PremiumCursor = ({ children, className = '' }: PremiumCursorProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 300 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const distanceX = e.clientX - rect.left - rect.width / 2
    const distanceY = e.clientY - rect.top - rect.height / 2

    x.set(distanceX * 0.15)
    y.set(distanceY * 0.15)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default PremiumCursor
