// src/components/SceneWrapper.jsx
import { Environment, PointerLockControls } from '@react-three/drei'
import { Physics, useBox } from '@react-three/cannon'
import AgentBird from './AgentBird'
import PlayerController from './PlayerController'

import { Floor } from './Floor'  // adjust path if needed
import TVScreen from './TVScreen'
import FloatingTextSpawner from './FloatingTextSpawner' // jun-2025
import WorldDirectionTags from './WorldDirectionTags'  //july-2025 

import TVScreenWithLabel from './TVScreenWithLabel' // july-08-2025 short video 
import DroppingLogo from './DroppingLogo' // july-08-2025 short video 



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
  const showLogos = useOverlayStore((s) => s.showLogos)
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

          {/* july-020-2025 , used to added the sign  x, y, z !!! */}
        <WorldDirectionTags />

        
          {/* <TVScreen position={[2, 1, -5]} />  ✅ moved to the right and slightly back */}
          <TVScreen position={[4, 1.2, -6]} />  
  



           
          {/* July 08 2025, i miss my wife, three splunk/grafna/dynatrace video */}
          
          <TVScreenWithLabel
            position={[15, 2, 0]}
            label="Splunk"
            videoUrl="https://www.youtube.com/embed/3CiRs6WaWaU"
            //https://www.youtube.com/watch?v=3CiRs6WaWaU
            // splunk 
          />
          <TVScreenWithLabel
            position={[15, 2, 5]}
            label="Grafana"
            videoUrl="https://www.youtube.com/embed/lILY8eSspEo"
            // https://www.youtube.com/watch?v=lILY8eSspEo
          />
          <TVScreenWithLabel
            position={[15, 2, 10]}
            label="Dynatrace"
            videoUrl="https://www.youtube.com/embed/2zcMeMC4ibQ"
            // https://www.youtube.com/watch?v=2zcMeMC4ibQ
          />

          {/* Logos near TVs */}
          {showLogos && (
            <>
              <DroppingLogo position={[13, 2, 0]} image="/images/logo1.png" trigger={showLogos} />
              <DroppingLogo position={[13, 2, 5]} image="/images/logo2.png" trigger={showLogos} />
              <DroppingLogo position={[13, 2, 10]} image="/images/logo3.png" trigger={showLogos} />
            </>
          )}


  
      </Physics> 

      <FloatingTextSpawner />
       
      

 
        
   
    </>
  )
}
