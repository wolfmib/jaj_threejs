// src/App.jsx
import { Canvas } from '@react-three/fiber'
import SceneWrapper from './components/SceneWrapper'
import FloatingHUD from './components/FloatingHUD' // ✅ new overlay



export default function App() {
  return (
    <>
      <Canvas
        camera={{ position: [0, 1.6, 2], fov: 75 }}

        onClick={() => {
          document.body.requestPointerLock()
        }}
        shadows
      >
        <SceneWrapper />
      </Canvas>

      <FloatingHUD /> {/* ✅ overlay here */}
    </>
  )
    
}
