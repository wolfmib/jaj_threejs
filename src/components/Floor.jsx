import { usePlane, useContactMaterial } from '@react-three/cannon'

export function Floor() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.01, 0],
    material: 'floor',
  }))

  // Apply friction via contact material
  useContactMaterial('floor', 'default', {
    friction: 0.8,         // ✅ high friction to slow down objects
    restitution: 0.2,      // bounce factor (low = no bounce)
  })

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="#ffffff" />
    </mesh>
  )
}

