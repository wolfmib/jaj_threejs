// src/components/PlayerController.jsx
import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useSphere } from '@react-three/cannon'
import * as THREE from 'three'

export default function PlayerController() {
  const { camera } = useThree()
  const [ref, api] = useSphere(() => ({
    mass: 1,
    position: [0, 1, 0],
    args: [0.5],
    type: 'Dynamic',
  }))

  const velocity = useRef([0, 0, 0])
  const direction = new THREE.Vector3()
  const frontVector = new THREE.Vector3()
  const sideVector = new THREE.Vector3()

  const keys = useRef({ w: false, a: false, s: false, d: false, space: false })

  useEffect(() => {
    const handleKeyDown = (e) => (keys.current[e.key.toLowerCase()] = true)
    const handleKeyUp = (e) => (keys.current[e.key.toLowerCase()] = false)

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  useFrame(() => {
    frontVector.set(0, 0, Number(keys.current.s) - Number(keys.current.w))
    sideVector.set(Number(keys.current.d) - Number(keys.current.a), 0, 0)

    // mouhses
    direction.addVectors(frontVector, sideVector).normalize().applyEuler(camera.rotation).multiplyScalar(5)

    api.velocity.set(direction.x, velocity.current[1], direction.z)
    ref.current.getWorldPosition(camera.position)
  })

  useEffect(() => {
    const unsubscribe = api.velocity.subscribe((v) => (velocity.current = v))
    return () => unsubscribe()
  }, [api.velocity])

  return (
    <mesh ref={ref} visible={false}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshBasicMaterial color="hotpink" />
    </mesh>
  )
}

