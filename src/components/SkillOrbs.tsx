import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface OrbitOrbProps {
  angle: number
  radius: number
  color: string
  size?: number
}

const OrbitOrb = ({ angle, radius, color, size = 0.75 }: OrbitOrbProps) => {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (ref.current) {
      const x = Math.cos(angle + state.clock.elapsedTime * 0.7) * radius
      const y = Math.sin(angle + state.clock.elapsedTime * 0.7) * radius * 0.7
      ref.current.position.set(x, y, 0)
      ref.current.rotation.x = state.clock.elapsedTime * 0.8
      ref.current.rotation.y = state.clock.elapsedTime * 0.6
    }
  })

  return (
    <mesh ref={ref} scale={size}>
      <sphereGeometry args={[1, 24, 24]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.8}
        metalness={0.6}
        roughness={0.25}
      />
    </mesh>
  )
}

const SkillOrbs = () => {
  const groupRef = useRef<THREE.Group>(null)

  const skills = [
    { color: '#34d399', size: 0.95 },
    { color: '#22d3ee', size: 0.82 },
    { color: '#f97316', size: 0.8 },
    { color: '#d946ef', size: 0.78 },
    { color: '#a3e635', size: 0.88 },
    { color: '#facc15', size: 0.8 },
    { color: '#38bdf8', size: 0.78 },
    { color: '#10b981', size: 0.8 },
    { color: '#2563eb', size: 0.8 },
  ]

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.65) * 0.4
    }
  })

  return (
    <div className="w-full h-[420px] rounded-2xl overflow-hidden bg-surface/10">
      <Canvas camera={{ position: [0, 0, 9], fov: 45 }}>
        <ambientLight intensity={1} />
        <pointLight position={[6, 6, 6]} intensity={1.4} color="#7dd3fc" />
        <pointLight position={[-6, -5, 5]} intensity={1.2} color="#34d399" />

        <group ref={groupRef}>
          <mesh position={[0, 0, -0.5]}>
            <sphereGeometry args={[1.2, 32, 32]} />
            <meshStandardMaterial
              color="#34d399"
              emissive="#34d399"
              emissiveIntensity={1.1}
              metalness={0.5}
              roughness={0.3}
            />
          </mesh>

          {skills.map((skill, index) => (
            <OrbitOrb
              key={index}
              angle={(Math.PI * 2 * index) / skills.length}
              radius={3.3}
              color={skill.color}
              size={skill.size}
            />
          ))}
        </group>
      </Canvas>
    </div>
  )
}

export default SkillOrbs
