// src/components/DroppingLogo.jsx
import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'

export default function DroppingLogo({ position, image, trigger }) {
  const meshRef = useRef()
  const yRef = useRef(20)

  // 🔍 Debug init
  console.log('🔧 DroppingLogo initialized:', { trigger, position })

  useFrame(() => {
    if (!trigger) return

    if (yRef.current > position[1]) {
      const prevY = yRef.current
      yRef.current = Math.max(position[1], yRef.current - 0.1)

      if (meshRef.current) {
        meshRef.current.position.y = yRef.current

        // 🧪 Debug movement frame-by-frame
        console.log(`🟢 Dropping... y=${prevY.toFixed(2)} → ${yRef.current.toFixed(2)}`)
      }
    } else {
      // ✅ Landed
      console.log(`✅ Logo landed at y=${yRef.current}`)
    }
  })

  return (
    <group ref={meshRef} position={[position[0], yRef.current, position[2]]}>
      <Html distanceFactor={10}>
        <div style={{
          width: '120px',
          height: '120px',
          background: 'lime',
          border: '2px solid red',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold'
        }}>
          Logo Here
        </div>
      </Html>
    </group>
  )
}
