'use client'

import { useEffect, useRef } from 'react'

export default function ParticlesBackground() {
  const mountRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!mountRef.current) return

    let animFrameId
    let renderer, scene, camera, particles, geometry, material

    const init = async () => {
      const THREE = await import('three')

      const container = mountRef.current
      const width = container.clientWidth
      const height = container.clientHeight

      // Scene
      scene = new THREE.Scene()

      // Camera
      camera = new THREE.PerspectiveCamera(60, width / height, 1, 3000)
      camera.position.z = 1000

      // Renderer
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(width, height)
      renderer.setClearColor(0x000000, 0)
      container.appendChild(renderer.domElement)

      // Particles
      const COUNT = 1800
      const positions = new Float32Array(COUNT * 3)
      const colors = new Float32Array(COUNT * 3)

      for (let i = 0; i < COUNT; i++) {
        // Scatter in 3D sphere
        const radius = 400 + Math.random() * 400
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(2 * Math.random() - 1)

        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
        positions[i * 3 + 2] = radius * Math.cos(phi)

        // 60% white/bright, 40% blue
        if (Math.random() < 0.6) {
          const brightness = 0.6 + Math.random() * 0.4
          colors[i * 3] = brightness
          colors[i * 3 + 1] = brightness
          colors[i * 3 + 2] = brightness
        } else {
          colors[i * 3] = 0.2 + Math.random() * 0.2
          colors[i * 3 + 1] = 0.5 + Math.random() * 0.2
          colors[i * 3 + 2] = 0.9 + Math.random() * 0.1
        }
      }

      geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

      material = new THREE.PointsMaterial({
        size: 2,
        sizeAttenuation: true,
        vertexColors: true,
        transparent: true,
        opacity: 0.75
      })

      particles = new THREE.Points(geometry, material)
      scene.add(particles)

      // Mouse parallax
      let mouseX = 0
      let mouseY = 0
      let targetX = 0
      let targetY = 0

      const onMouseMove = (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 0.3
        mouseY = (e.clientY / window.innerHeight - 0.5) * 0.15
      }
      window.addEventListener('mousemove', onMouseMove)

      // Resize handler
      const onResize = () => {
        if (!container) return
        const w = container.clientWidth
        const h = container.clientHeight
        camera.aspect = w / h
        camera.updateProjectionMatrix()
        renderer.setSize(w, h)
      }
      window.addEventListener('resize', onResize)

      // Animation loop
      const animate = () => {
        animFrameId = requestAnimationFrame(animate)

        // Base rotation
        particles.rotation.y += 0.0004
        particles.rotation.x += 0.0001

        // Mouse parallax — lerp
        targetX += (mouseX - targetX) * 0.05
        targetY += (mouseY - targetY) * 0.05
        particles.rotation.y += targetX * 0.002
        particles.rotation.x += targetY * 0.002

        renderer.render(scene, camera)
      }
      animate()

      // Cleanup stored for unmount
      container._cleanup = () => {
        window.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('resize', onResize)
        cancelAnimationFrame(animFrameId)
        geometry.dispose()
        material.dispose()
        renderer.dispose()
        if (container && renderer.domElement.parentNode === container) {
          container.removeChild(renderer.domElement)
        }
      }
    }

    init()

    return () => {
      if (mountRef.current && mountRef.current._cleanup) {
        mountRef.current._cleanup()
      } else {
        cancelAnimationFrame(animFrameId)
        if (geometry) geometry.dispose()
        if (material) material.dispose()
        if (renderer) renderer.dispose()
      }
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  )
}
