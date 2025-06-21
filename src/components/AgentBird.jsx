// src/components/AgentBird.jsx
import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useBox } from '@react-three/cannon'

export default function AgentBird(props) {
  const [ref, api] = useBox(() => ({
    mass: 1, // now it's dynamic
    position: props.position || [0, 1, -5],
    ...props
  }))



  // Optional rotation (comment if not needed)
  //useFrame(() => {
  //  if (ref.current) ref.current.rotation.y += 0.01
  //})

  return (
   
    <group ref={ref} >
      <mesh position={[0, 0, 0]}>
        <coneGeometry args={[0.2, 0.5, 32]} />
        <meshStandardMaterial color="orange" />
      </mesh>
      <mesh position={[0, 0.3, 0.1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.2, 16]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </group>

  )
}
