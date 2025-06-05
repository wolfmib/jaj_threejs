import { useOverlayStore } from '../store'

const steps = [
  "This is a modular React Three.js setup using Vite, Cannon for physics, and Zustand for state.",
  "On launch, we render into a fullscreen immersive scene using realistic lighting with Environment preset.",
  "The player can move with WASD and mouse thanks to PointerLockControls and a physics capsule.",
  "Every object reacts to physics – friction, collision – just like a game world.",
  "Each entity is modular – birds, agents, obstacles – reusable and reactive."
]

export default function FloatingHUD() {
  const step = useOverlayStore((s) => s.step)

  if (step >= steps.length) return null

  return (
    <div style={{
      position: 'absolute',
      top: '40%',
      left: '50%',
      transform: 'translateX(-50%)',
      padding: '20px 40px',
      background: 'rgba(0,0,0,0.8)',
      color: 'lime',
      fontSize: '20px',
      fontFamily: 'monospace',
      borderRadius: '10px',
      zIndex: 9999
    }}>
      {steps[step]}
    </div>
  )
}
