// src/components/TVScreen.jsx
import { useRef, useState } from 'react'
import { Html } from '@react-three/drei'

import { useOverlayStore } from '../store'

export default function TVScreen({ position = [0, 1, -3] }) {
  const meshRef = useRef(() => ({
    mass: 2, // now it's dynamic
  
  }))



  return (
    <group position={position}>
      {/* ✅ TV Frame (no rotation!) */}
      <mesh ref={meshRef}>
        <boxGeometry args={[3.2, 1.8, 0.1]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* ✅ YouTube player embedded */}
      
        <Html
          transform
          occlude
          position={[0, 0, 0.06]}
          distanceFactor={1.5}
          style={{
            width: '640px',
            height: '360px',
            borderRadius: '8px',
            pointerEvents: 'auto',
          }}
        >
          <iframe
            width="640"
            height="360"
            src="https://www.youtube.com/embed/CJ0djllyqwY?autoplay=1?rel=0&modestbranding=1"
            title="YouTube video"
            allow="autoplay; fullscreen"
            frameBorder="0"
          />
        </Html>
      
    </group>
  )
}
