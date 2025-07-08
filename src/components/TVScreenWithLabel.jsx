// src/components/TVScreenWithLabel.jsx
import { useRef } from 'react'
import { Html } from '@react-three/drei'

export default function TVScreenWithLabel({ position = [0, 2, 0], label = "TV", videoUrl }) {
  const meshRef = useRef()

  return (

    
    <group position={position} rotation={[0, -Math.PI / 2, 0]}>

       {/* positon TV totation explain 
      
           <group position={position} rotation={[0, -Math.PI / 2, 0]}>

        📌 Explanation:
        rotation={[x, y, z]} rotates the object around each axis (in radians).

        -Math.PI / 2 means -90 degrees.

        Since the screen originally faces the Z direction, rotating around the Y-axis by -90° turns it to face +X direction.

      
      */}

      {/* TV Frame */}
      <mesh ref={meshRef}>
        <boxGeometry args={[3.2, 1.8, 0.1]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* Label */}
      <Html position={[0, 1.1, 0]} center>
        <div style={{
          fontFamily: 'monospace',
          fontWeight: 'bold',
          color: 'lime',
          background: '#000',
          padding: '4px 10px',
          borderRadius: '6px'
        }}>
          {label}
        </div>
      </Html>

      {/* Embedded YouTube      */}
      <Html transform position={[0, 0, 0.06]} distanceFactor={1.5}>
        <iframe
          width="640"
          height="360"
          src={videoUrl}
          title="TV Player"
          allow="autoplay; fullscreen"
          frameBorder="0"
        />
      </Html>
    </group>
  )
}
