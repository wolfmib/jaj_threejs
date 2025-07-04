// src/components/WorldDirectionTags.jsx

import { Text, Html } from '@react-three/drei'

export default function WorldDirectionTags() {
  return (
    <>
      {/* Origin */}
      <Text position={[0, 0.2, 0]} fontSize={0.4} color="red">
        0,0,0
      </Text>

      {/* X Axis */}
      <Text position={[10, 0.2, 0]} fontSize={0.4} color="orange">
        +X → (10,0,0)
      </Text>

      {/* Y Axis - floating ball */}
      <mesh position={[0, 10, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="lime" />
      </mesh>
      <Text position={[0.5, 10, 0]} fontSize={0.4} color="lime">
        ↑ Y (0,10,0)
      </Text>

      {/* Z Axis */}
      <Text position={[0, 0.2, -10]} fontSize={0.4} color="skyblue">
        -Z(0,0,-10) 
      </Text>
    </>
  )
}
