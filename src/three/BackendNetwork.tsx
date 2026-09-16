import { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Float, Text } from '@react-three/drei'
import * as THREE from 'three'

interface NodeProps {
  position: [number, number, number]
  color: string
  scale?: number
}

const Node = ({ position, color, scale = 1 }: NodeProps) => {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
    }
  })

  return (
    <group position={position}>
      <Float floatIntensity={2} rotationIntensity={0.5} speed={2}>
        <mesh
          ref={meshRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          scale={hovered ? scale * 1.2 : scale}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={hovered ? 0.8 : 0.3}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </Float>
    </group>
  )
}

interface ConnectionProps {
  start: [number, number, number]
  end: [number, number, number]
}

const Connection = ({ start, end }: ConnectionProps) => {
  const lineRef = useRef<THREE.Line>(null)

  useFrame((state) => {
    if (lineRef.current) {
      const material = lineRef.current.material as THREE.LineBasicMaterial
      material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.2
    }
  })

  const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)]
  const geometry = new THREE.BufferGeometry().setFromPoints(points)

  return <primitive object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0x00ff88, transparent: true, opacity: 0.5 }))} ref={lineRef} />
}

const Scene = () => {
  const { mouse } = useThree()

  useFrame((state) => {
    state.camera.position.x += (mouse.x * 2 - state.camera.position.x) * 0.05
    state.camera.position.y += (-mouse.y * 2 - state.camera.position.y) * 0.05
    state.camera.lookAt(0, 0, 0)
  })

  const backendNodes = [
    { position: [-3.6, 1.8, 0] as [number, number, number], color: '#00ff88' },
    { position: [-1.8, 1.6, 0] as [number, number, number], color: '#00d4ff' },
    { position: [-0.4, 1.2, 0] as [number, number, number], color: '#ff6b35' },
    { position: [-2.1, -0.4, 0] as [number, number, number], color: '#ff00ff' },
    { position: [-3.2, -1.8, 0] as [number, number, number], color: '#00ff00' },
  ]

  const fullStackNodes = [
    { position: [2.2, 1.7, 0] as [number, number, number], color: '#61dafb' },
    { position: [3.9, 1.3, 0] as [number, number, number], color: '#3178c6' },
    { position: [3.3, -0.5, 0] as [number, number, number], color: '#f7df1e' },
    { position: [2.1, -1.8, 0] as [number, number, number], color: '#68a063' },
  ]

  const allNodes = [...backendNodes, ...fullStackNodes]

  const connections = [
    { start: backendNodes[0].position, end: backendNodes[1].position },
    { start: backendNodes[1].position, end: backendNodes[2].position },
    { start: backendNodes[1].position, end: backendNodes[3].position },
    { start: backendNodes[0].position, end: backendNodes[4].position },
    { start: fullStackNodes[0].position, end: fullStackNodes[1].position },
    { start: fullStackNodes[1].position, end: fullStackNodes[2].position },
    { start: fullStackNodes[2].position, end: fullStackNodes[3].position },
    { start: fullStackNodes[0].position, end: backendNodes[1].position },
  ]

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ff88" />
      
      {allNodes.map((node, i) => (
        <Node key={i} position={node.position} color={node.color} />
      ))}
      
      {connections.map((conn, i) => (
        <Connection key={i} start={conn.start} end={conn.end} />
      ))}
      
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  )
}

const TechNode = ({ position, label, color }: { position: [number, number, number]; label: string; color: string }) => {
  const ref = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.4 + position[0]) * 0.08
    }
  })

  return (
    <group ref={ref} position={position}>
      <mesh>
        <sphereGeometry args={[0.38, 24, 24]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.5} metalness={0.35} roughness={0.2} />
      </mesh>
      <Text position={[0, -0.68, 0]} fontSize={0.2} color="#dbeafe" anchorX="center">
        {label}
      </Text>
    </group>
  )
}

const TechLink = ({ start, end, color }: { start: [number, number, number]; end: [number, number, number]; color: string }) => {
  const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)]
  const geometry = new THREE.BufferGeometry().setFromPoints(points)

  return <primitive object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.6 }))} />
}

const DeveloperWorkspace = () => {
  const ref = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.45) * 0.08
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.06
    }
  })

  const nodes = [
    { position: [-2.75, 1.25, 0] as [number, number, number], label: 'Java', color: '#f97316' },
    { position: [-1.35, 2.05, 0] as [number, number, number], label: 'Spring', color: '#22c55e' },
    { position: [1.5, 1.95, 0] as [number, number, number], label: 'Kafka', color: '#facc15' },
    { position: [2.75, 1.05, 0] as [number, number, number], label: 'AWS', color: '#38bdf8' },
    { position: [2.5, -1.05, 0] as [number, number, number], label: 'Postgres', color: '#60a5fa' },
    { position: [-2.4, -1.05, 0] as [number, number, number], label: 'Redis', color: '#ef4444' },
  ]

  return (
    <>
      <ambientLight intensity={1.2} />
      <pointLight position={[-4, 4, 5]} intensity={2.5} color="#18d6a3" />
      <pointLight position={[4, 2, 4]} intensity={2} color="#4f8cff" />
      <group ref={ref} scale={0.86}>
        <mesh position={[0, -1.95, -0.3]} rotation={[-0.05, 0, 0]}>
          <boxGeometry args={[5.7, 0.16, 2.8]} />
          <meshStandardMaterial color="#142235" metalness={0.55} roughness={0.28} />
        </mesh>
        <mesh position={[0, 0.1, 0]}>
          <boxGeometry args={[3.7, 2.35, 0.18]} />
          <meshStandardMaterial color="#1b3148" metalness={0.55} roughness={0.22} />
        </mesh>
        <mesh position={[0, 0.1, 0.12]}>
          <planeGeometry args={[3.3, 1.95]} />
          <meshBasicMaterial color="#071b2c" />
        </mesh>
        <Text position={[-1.35, 0.65, 0.24]} fontSize={0.19} color="#18d6a3" anchorX="left">
          {'$ ./deploy --production'}
        </Text>
        <Text position={[-1.35, 0.25, 0.24]} fontSize={0.17} color="#7dd3fc" anchorX="left">
          {'  api-gateway     online'}
        </Text>
        <Text position={[-1.35, -0.12, 0.24]} fontSize={0.17} color="#facc15" anchorX="left">
          {'  services        12 ready'}
        </Text>
        <Text position={[-1.35, -0.49, 0.24]} fontSize={0.17} color="#a7f3d0" anchorX="left">
          {'  system healthy  99.99%'}
        </Text>
        <mesh position={[0, -1.18, 0.18]} rotation={[-0.2, 0, 0]}>
          <boxGeometry args={[4.2, 0.12, 1.65]} />
          <meshStandardMaterial color="#263d55" metalness={0.7} roughness={0.2} />
        </mesh>
        <mesh position={[0, -1.1, 0.25]}>
          <boxGeometry args={[0.35, 0.03, 0.35]} />
          <meshStandardMaterial color="#18d6a3" emissive="#18d6a3" emissiveIntensity={1.2} />
        </mesh>

        {nodes.map((node) => (
          <TechNode key={node.label} {...node} />
        ))}
        <TechLink start={nodes[0].position} end={[-1, 0.8, 0]} color="#f97316" />
        <TechLink start={nodes[1].position} end={[-0.8, 1.1, 0]} color="#22c55e" />
        <TechLink start={nodes[2].position} end={[0.9, 1.1, 0]} color="#facc15" />
        <TechLink start={nodes[3].position} end={[1.1, 0.7, 0]} color="#38bdf8" />
        <TechLink start={nodes[4].position} end={[1, -0.35, 0]} color="#60a5fa" />
        <TechLink start={nodes[5].position} end={[-1, -0.35, 0]} color="#ef4444" />
      </group>
    </>
  )
}

const DeveloperScene = () => {
  const developerRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (developerRef.current) {
      developerRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.45) * 0.08
      developerRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.04
    }
  })

  return (
    <>
      <ambientLight intensity={1.5} />
      <pointLight position={[-4, 5, 5]} intensity={2} color="#18d6a3" />
      <pointLight position={[4, 2, 4]} intensity={1.5} color="#55aaff" />
      <group ref={developerRef} position={[0, -0.3, 0]}>
        <mesh position={[0, -1.9, 0]}>
          <boxGeometry args={[5.4, 0.18, 2.7]} />
          <meshStandardMaterial color="#172331" metalness={0.35} roughness={0.5} />
        </mesh>
        <mesh position={[0, 0.65, -0.25]}>
          <boxGeometry args={[2.8, 1.7, 0.16]} />
          <meshStandardMaterial color="#26364a" metalness={0.5} roughness={0.25} />
        </mesh>
        <mesh position={[0, 0.65, -0.15]}>
          <planeGeometry args={[2.45, 1.35]} />
          <meshBasicMaterial color="#0c2c3b" />
        </mesh>
        <Text position={[-1, 0.98, -0.08]} fontSize={0.16} color="#18d6a3" anchorX="left">
          {'> build scalable APIs'}
        </Text>
        <Text position={[-1, 0.64, -0.08]} fontSize={0.14} color="#7dd3fc" anchorX="left">
          {'  spring.boot()'}
        </Text>
        <Text position={[-1, 0.32, -0.08]} fontSize={0.14} color="#facc15" anchorX="left">
          {'  deploy AWS'}
        </Text>
        <mesh position={[0, -0.28, -0.18]} rotation={[-0.12, 0, 0]}>
          <boxGeometry args={[3.2, 0.14, 1.8]} />
          <meshStandardMaterial color="#33465a" metalness={0.55} roughness={0.3} />
        </mesh>
        <mesh position={[0, 1.2, 0.15]}>
          <sphereGeometry args={[0.55, 24, 24]} />
          <meshStandardMaterial color="#d99163" roughness={0.8} />
        </mesh>
        <mesh position={[0, 1.43, 0.12]} scale={[1, 0.55, 1]}>
          <sphereGeometry args={[0.59, 24, 16]} />
          <meshStandardMaterial color="#172331" roughness={0.8} />
        </mesh>
        <mesh position={[0, 0.15, 0.05]}>
          <capsuleGeometry args={[0.62, 1.05, 8, 16]} />
          <meshStandardMaterial color="#1d75a8" roughness={0.7} />
        </mesh>
        <mesh position={[-0.7, 0.12, 0.55]} rotation={[0.72, 0, -0.5]}>
          <capsuleGeometry args={[0.14, 1.15, 8, 12]} />
          <meshStandardMaterial color="#d99163" roughness={0.8} />
        </mesh>
        <mesh position={[0.7, 0.12, 0.55]} rotation={[0.72, 0, 0.5]}>
          <capsuleGeometry args={[0.14, 1.15, 8, 12]} />
          <meshStandardMaterial color="#d99163" roughness={0.8} />
        </mesh>
        <mesh position={[-0.4, -1.2, 0]} rotation={[0.05, 0, -0.15]}>
          <capsuleGeometry args={[0.22, 1.6, 8, 12]} />
          <meshStandardMaterial color="#245070" roughness={0.7} />
        </mesh>
        <mesh position={[0.4, -1.2, 0]} rotation={[0.05, 0, 0.15]}>
          <capsuleGeometry args={[0.22, 1.6, 8, 12]} />
          <meshStandardMaterial color="#245070" roughness={0.7} />
        </mesh>
      </group>
    </>
  )
}

interface BackendNetworkProps {
  className?: string
}

const BackendNetwork = ({ className = '' }: BackendNetworkProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <DeveloperWorkspace />
      </Canvas>
    </div>
  )
}

export default BackendNetwork
