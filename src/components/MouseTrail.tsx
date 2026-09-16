import { useEffect, useState } from 'react'

const MouseTrail = () => {
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    
    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return
      setTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY }]
        if (newTrail.length > 20) newTrail.shift()
        return newTrail
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isMobile])

  if (isMobile) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50 hidden md:block">
      {trail.map((point, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary opacity-50"
          style={{
            left: point.x,
            top: point.y,
            opacity: (i / trail.length) * 0.5,
            transform: `scale(${i / trail.length})`,
          }}
        />
      ))}
    </div>
  )
}

export default MouseTrail
