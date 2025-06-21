// src/components/SceneWrapper.jsx
import { Environment, PointerLockControls } from '@react-three/drei'
import { Physics, useBox } from '@react-three/cannon'
import AgentBird from './AgentBird'
import PlayerController from './PlayerController'

import { Floor } from './Floor'  // adjust path if needed
import TVScreen from './TVScreen'
import FloatingTextSpawner from './FloatingTextSpawner' // jun-2025

import { useOverlayStore } from '../store'

function TestBox() {
  const [ref] = useBox(() => ({
    type: 'Static',
    args: [1, 1, 1],          // width, height, depth
    position: [2, 0.5, -5],   // center of box at y = 0.5 sits on floor
  }))
  return (
    <mesh ref={ref} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#8e44ad" />
    </mesh>
  )
}

export default function SceneWrapper() {

  const showTV = useOverlayStore((s) => s.showTV)
  return (
    <>
      <Environment preset="lobby" background />

      <fog attach="fog" args={['#e8ecf0', 2, 25]} />
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <PointerLockControls />
      <Environment preset="city" />

      
        <Physics key="physics-reset" gravity={[0, -9.81, 0]}>


        <Floor />

      
      
  
        <AgentBird position={[0, 1, -5]} />

        <PlayerController />



        
          {/* <TVScreen position={[2, 1, -5]} />  ✅ moved to the right and slightly back */}
          <TVScreen position={[4, 1.2, -6]} />  
  

  
      </Physics> 

      <FloatingTextSpawner />
       
      

 
        
   
    </>
  )
}
