import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Particles = ({ count = 60 }: { count?: number }) => {
  const meshRef = useRef<THREE.Points>(null)
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 10
    }
    return pos
  }, [count])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.025
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.01
    }
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#00ff88"
        transparent
        opacity={0.6}
      />
    </points>
  )
}

const ParticleBackground = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  if (isMobile) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 hidden md:block">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Particles count={60} />
      </Canvas>
    </div>
  )
}

export default ParticleBackground
