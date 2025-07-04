// src/components/FloatingTextSpawner.jsx
import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'

const contextData = [
  { en: "How are you", fr: "Comment ca va?" },
  { en: "I wana sleep", fr: "Je veux dormir" },
  { en: "My wife is Alin", fr: "Ma femme est Alin" }
]

function FloatingContext({ text, startX }) {
  const groupRef = useRef()

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.z += 0.01
      if (groupRef.current.position.z > 20) groupRef.current.position.z = -20
    }
  })

  return (
    <group ref={groupRef} position={[startX, 1.5, -20]} rotation={[0, Math.PI, 0]}>
      <Html distanceFactor={10} style={{
        background: 'rgba(0,0,0,0.6)',
        color: 'white',
        padding: '10px',
        borderRadius: '8px',
        fontSize: '16px',
        fontFamily: 'monospace',
        minWidth: '120px',
        textAlign: 'center'
      }}>
        <div>{text.en}</div>
        <div style={{ fontSize: '14px', color: '#aaa' }}>{text.fr}</div>
      </Html>
    </group>
  )
}

export default function FloatingTextSpawner() {
  return (
    <>
      {contextData.map((ctx, idx) => {
        const randX = 5 + Math.floor(Math.random() * 6) // 5 to 10
        return <FloatingContext key={idx} text={ctx} startX={randX} />
      })}
    </>
  )
}
