import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

interface OrbitOrbProps {
  angle: number
  radius: number
  color: string
  name: string
  size?: number
}

const OrbitOrb = ({ angle, radius, color, name, size = 0.75 }: OrbitOrbProps) => {
  const ref = useRef<THREE.Group>(null)

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
    <group ref={ref} scale={size}>
      <mesh>
        <sphereGeometry args={[1, 24, 24]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.8}
          metalness={0.6}
          roughness={0.25}
        />
      </mesh>
      <Text position={[0, 0, 1.02]} fontSize={0.27} color="#f8fafc" anchorX="center" anchorY="middle">
        {name}
      </Text>
    </group>
  )
}

const OrbitGroup = () => {
  const groupRef = useRef<THREE.Group>(null)

  const skills = [
    { name: 'Java', color: '#34d399', size: 0.95 },
    { name: 'Spring', color: '#22d3ee', size: 0.82 },
    { name: 'Kafka', color: '#f97316', size: 0.8 },
    { name: 'React', color: '#d946ef', size: 0.78 },
    { name: 'SQL', color: '#a3e635', size: 0.88 },
    { name: 'Redis', color: '#facc15', size: 0.8 },
    { name: 'Docker', color: '#38bdf8', size: 0.78 },
    { name: 'AWS', color: '#10b981', size: 0.8 },
    { name: 'API', color: '#2563eb', size: 0.8 },
  ]

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.65) * 0.4
    }
  })

  return (
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
          name={skill.name}
          size={skill.size}
        />
      ))}
    </group>
  )
}


const Laptop = () => {
  const screenRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (screenRef.current) {
      const material = screenRef.current.material as THREE.MeshBasicMaterial
      material.opacity = 0.72 + Math.sin(state.clock.elapsedTime * 3) * 0.12
    }
  })

  return (
    <group position={[0, 0.15, 1.2]} rotation={[-0.08, 0, 0]}>
      <mesh position={[0, 0, 0]} rotation={[-0.12, 0, 0]}>
        <boxGeometry args={[2.7, 0.12, 1.7]} />
        <meshStandardMaterial color="#26364a" metalness={0.6} roughness={0.25} />
      </mesh>
      <mesh position={[0, 1.18, 0.65]} rotation={[-0.16, 0, 0]}>
        <boxGeometry args={[2.5, 1.5, 0.12]} />
        <meshStandardMaterial color="#182536" metalness={0.5} roughness={0.3} />
      </mesh>
      <mesh ref={screenRef} position={[0, 1.18, 0.57]} rotation={[-0.16, 0, 0]}>
        <planeGeometry args={[2.15, 1.15]} />
        <meshBasicMaterial color="#18d6a3" transparent opacity={0.8} />
      </mesh>
      <Text position={[-0.72, 1.48, 0.5]} rotation={[-0.16, 0, 0]} fontSize={0.17} color="#06251f" anchorX="left">
        {'class Developer {'}
      </Text>
      <Text position={[-0.6, 1.18, 0.5]} rotation={[-0.16, 0, 0]} fontSize={0.15} color="#06251f" anchorX="left">
        {'  build();'}
      </Text>
      <Text position={[-0.72, 0.9, 0.5]} rotation={[-0.16, 0, 0]} fontSize={0.17} color="#06251f" anchorX="left">
        {'}' }
      </Text>
    </group>
  )
}

const Developer = () => {
  const headRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (headRef.current) {
      headRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.08
    }
  })

  return (
    <group position={[0, -0.2, 0]}>
      <mesh position={[0, -1.2, 0]}>
        <boxGeometry args={[4.8, 0.18, 2.4]} />
        <meshStandardMaterial color="#172331" metalness={0.35} roughness={0.5} />
      </mesh>
      <mesh position={[1.65, 0.05, -0.15]}>
        <boxGeometry args={[0.22, 3.2, 0.22]} />
        <meshStandardMaterial color="#26364a" metalness={0.4} roughness={0.4} />
      </mesh>
      <mesh position={[1.65, 1.55, -0.15]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.22, 3.2, 0.22]} />
        <meshStandardMaterial color="#26364a" metalness={0.4} roughness={0.4} />
      </mesh>

      <mesh position={[0, 0.15, -0.15]}>
        <capsuleGeometry args={[0.62, 1.05, 8, 16]} />
        <meshStandardMaterial color="#1d75a8" metalness={0.15} roughness={0.7} />
      </mesh>
      <group ref={headRef} position={[0, 1.35, -0.12]}>
        <mesh>
          <sphereGeometry args={[0.62, 24, 24]} />
          <meshStandardMaterial color="#d99163" roughness={0.8} />
        </mesh>
        <mesh position={[0, 0.2, -0.46]}>
          <sphereGeometry args={[0.64, 24, 12, 0, Math.PI * 2, 0, Math.PI * 0.55]} />
          <meshStandardMaterial color="#172331" roughness={0.8} />
        </mesh>
      </group>
      <mesh position={[-0.72, 0.3, 0.68]} rotation={[0.7, 0, -0.55]}>
        <capsuleGeometry args={[0.16, 1.15, 8, 12]} />
        <meshStandardMaterial color="#d99163" roughness={0.8} />
      </mesh>
      <mesh position={[0.72, 0.3, 0.68]} rotation={[0.7, 0, 0.55]}>
        <capsuleGeometry args={[0.16, 1.15, 8, 12]} />
        <meshStandardMaterial color="#d99163" roughness={0.8} />
      </mesh>
      <mesh position={[-0.48, -1, 0.05]} rotation={[0.05, 0, -0.18]}>
        <capsuleGeometry args={[0.25, 1.7, 8, 12]} />
        <meshStandardMaterial color="#245070" roughness={0.7} />
      </mesh>
      <mesh position={[0.48, -1, 0.05]} rotation={[0.05, 0, 0.18]}>
        <capsuleGeometry args={[0.25, 1.7, 8, 12]} />
        <meshStandardMaterial color="#245070" roughness={0.7} />
      </mesh>
      <Laptop />
    </group>
  )
}

const Scene = () => {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.45) * 0.08
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.05
    }
  })

  return (
    <>
      <ambientLight intensity={1.4} />
      <pointLight position={[-4, 5, 5]} intensity={2} color="#18d6a3" />
      <pointLight position={[4, 2, 4]} intensity={1.4} color="#55aaff" />
      <group ref={groupRef}>
        <Developer />
      </group>
    </>
  )
}

const SkillOrbs = () => (
  <div className="relative h-[420px] w-full overflow-hidden rounded-2xl bg-surface/10">
    <Canvas camera={{ position: [0, 0, 9], fov: 45 }}>
      <ambientLight intensity={1} />
      <pointLight position={[6, 6, 6]} intensity={1.4} color="#7dd3fc" />
      <pointLight position={[-6, -5, 5]} intensity={1.2} color="#34d399" />
      <OrbitGroup />
    </Canvas>
  </div>
)

export default SkillOrbs
