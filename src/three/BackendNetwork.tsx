import { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'
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

interface BackendNetworkProps {
  className?: string
}

const BackendNetwork = ({ className = '' }: BackendNetworkProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <Scene />
      </Canvas>
    </div>
  )
}

export default BackendNetwork
