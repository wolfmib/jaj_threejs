//src/components/PositionTracker.jsx

import { useEffect, useState } from 'react'
import { useOverlayStore } from '../store'
import { useFrame } from '@react-three/fiber'

export default function PositionTracker() {
  const playerAPI = useOverlayStore((s) => s.playerAPI)
  const [position, setPosition] = useState([0, 0, 0])

  useEffect(() => {
    if (!playerAPI?.position) return

    const unsub = playerAPI.position.subscribe((pos) => {
      setPosition([...pos])
    })

    return () => unsub?.()  // ✅ clean up
  }, [playerAPI])

  return (
    <div style={{
      position: 'absolute',
      bottom: 20,
      right: 20,
      padding: '10px 15px',
      background: 'rgba(0,0,0,0.7)',
      color: 'lime',
      fontFamily: 'monospace',
      fontSize: '14px',
      borderRadius: '8px',
      zIndex: 1000
    }}>
      <div><b>X:</b> {position[0].toFixed(2)}</div>
      <div><b>Y:</b> {position[1].toFixed(2)}</div>
      <div><b>Z:</b> {position[2].toFixed(2)}</div>
    </div>
  )
}
