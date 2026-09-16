import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

interface SkillOrbProps {
  position: [number, number, number]
  color: string
}

const SkillOrb = ({ position, color }: SkillOrbProps) => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
    }
  })

  return (
    <Float floatIntensity={1} rotationIntensity={0.3} speed={2}>
      <group position={position}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </group>
    </Float>
  )
}

const SkillOrbs = () => {
  const skills = [
    { position: [-3, 2, 0] as [number, number, number], color: '#00ff88' },
    { position: [-1, 2, 0] as [number, number, number], color: '#00d4ff' },
    { position: [1, 2, 0] as [number, number, number], color: '#ff6b35' },
    { position: [3, 2, 0] as [number, number, number], color: '#ff00ff' },
    { position: [-2, 0, 0] as [number, number, number], color: '#00ff00' },
    { position: [0, 0, 0] as [number, number, number], color: '#ffaa00' },
    { position: [2, 0, 0] as [number, number, number], color: '#61dafb' },
    { position: [-1, -2, 0] as [number, number, number], color: '#3178c6' },
    { position: [1, -2, 0] as [number, number, number], color: '#68a063' },
  ]

  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ff88" />
        
        {skills.map((skill, i) => (
          <SkillOrb key={i} {...skill} />
        ))}
      </Canvas>
    </div>
  )
}

export default SkillOrbs
