import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { ReactNode } from 'react'

interface TiltCardProps {
  children: ReactNode
  className?: string
}

const TiltCard = ({ children, className = '' }: TiltCardProps) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 })
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 })

  function onMove({ x: currentX, y: currentY }: { x: number; y: number }) {
    x.set(currentX)
    y.set(currentY)
  }

  function onMouseLeave() {
    x.set(0)
    y.set(0)
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10])

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        onMove({ x, y })
      }}
      onMouseLeave={onMouseLeave}
      className={`transform-style-3d ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default TiltCard
