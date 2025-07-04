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
            //src="https://www.youtube.com/embed/CJ0djllyqwY?autoplay=1?rel=0&modestbranding=1" TARA
            //src="https://www.youtube.com/embed/vx2u5uUu3DE?autoplay=1?rel=0&modestbranding=1"  Its my life
            //src="https://www.youtube.com/embed/6VzM7CE3VoE?autoplay=1?rel=0&modestbranding=1" //creazy live
            src="https://www.youtube.com/embed/f22ntPkwEA4?autoplay=1?rel=0&modestbranding=1" // src="https://youtube.com/shorts/f22ntPkwEA4?si=81JC7TiYDPHZI5II" // july-04: add little green
            
            title="YouTube video"
            allow="autoplay; fullscreen"
            frameBorder="0"
          />
        </Html>
      
    </group>
  )
}
