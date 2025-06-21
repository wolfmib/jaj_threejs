// path: src/app.jsx
import { Canvas } from '@react-three/fiber'
import SceneWrapper from './components/SceneWrapper'

import FloatingHUD from './components/FloatingHUD'
import { useEffect } from 'react'
import { useOverlayStore } from './store'
//import PositionTracker from './components/PositionTracker'


export default function App() {
  const setStep = useOverlayStore((s) => s.setStep)
  const showTV = useOverlayStore((s) => s.showTV)

  
  console.log("✅ showTV exists?", typeof showTV) // Check type

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && /^[1-9]$/.test(e.key)) {
        const num = parseInt(e.key)
        console.log(e.key)
        setStep(num - 1)
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 't') {
        console.log(e.key)
        showTV()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [setStep, showTV])

  return (
    <>
     <FloatingHUD /> {/* ✅ overlay for instructional text */}
    <Canvas
      camera={{ position: [0, 1.6, 2], fov: 75 }}
      onClick={() => document.body.requestPointerLock()}
      shadows
    >
      <SceneWrapper />
    </Canvas>
  
    </>
  )
}
