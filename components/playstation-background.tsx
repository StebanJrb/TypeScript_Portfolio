"use client"

import { useEffect, useRef } from "react"

export function PlayStationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    // Geometrías 3D
    interface GeometryShape {
      type: "octahedron" | "sphere" | "pyramid" | "cylinder" | "cube" | "diamond" | "torus"
      x: number
      y: number
      z: number
      rotX: number
      rotY: number
      rotZ: number
      size: number
      speedX: number
      speedY: number
      speedZ: number
      rotSpeedX: number
      rotSpeedY: number
      rotSpeedZ: number
      color: string
    }

    interface Particle {
      x: number
      y: number
      z: number
      vx: number
      vy: number
      vz: number
      life: number
      maxLife: number
    }

    const geometries: GeometryShape[] = []
    const particles: Particle[] = []
    const numGeometries = 15
    const numParticles = 100

    const shapeTypes: GeometryShape["type"][] = [
      "octahedron",
      "sphere",
      "pyramid",
      "cylinder",
      "cube",
      "diamond",
      "torus",
    ]

    // Crear geometrías
    for (let i = 0; i < numGeometries; i++) {
      geometries.push({
        type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
        x: Math.random() * 2000 - 1000,
        y: Math.random() * 2000 - 1000,
        z: Math.random() * 2000 + 500,
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        rotZ: Math.random() * Math.PI * 2,
        size: 80 + Math.random() * 120,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        speedZ: -1.5 - Math.random() * 2,
        rotSpeedX: (Math.random() - 0.5) * 0.02,
        rotSpeedY: (Math.random() - 0.5) * 0.02,
        rotSpeedZ: (Math.random() - 0.5) * 0.02,
        color: Math.random() > 0.6 ? "#00ff00" : "#ffffff",
      })
    }

    // Crear partículas
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * 2000 - 1000,
        y: Math.random() * 2000 - 1000,
        z: Math.random() * 3000,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        vz: -5 - Math.random() * 5,
        life: Math.random(),
        maxLife: Math.random() * 100 + 50,
      })
    }

    const project = (x: number, y: number, z: number) => {
      const scale = 800 / (z + 800)
      return {
        x: canvas.width / 2 + x * scale,
        y: canvas.height / 2 + y * scale,
        scale: scale,
      }
    }

    // Rotación 3D
    const rotate3D = (x: number, y: number, z: number, rotX: number, rotY: number, rotZ: number) => {
      // Rotación en X
      const y1 = y * Math.cos(rotX) - z * Math.sin(rotX)
      const z1 = y * Math.sin(rotX) + z * Math.cos(rotX)

      // Rotación en Y
      const x2 = x * Math.cos(rotY) + z1 * Math.sin(rotY)
      const z2 = -x * Math.sin(rotY) + z1 * Math.cos(rotY)

      // Rotación en Z
      const x3 = x2 * Math.cos(rotZ) - y1 * Math.sin(rotZ)
      const y3 = x2 * Math.sin(rotZ) + y1 * Math.cos(rotZ)

      return { x: x3, y: y3, z: z2 }
    }

    const drawWireframe = (vertices: number[][], edges: number[][], shape: GeometryShape) => {
      const rotatedVertices = vertices.map((v) => {
        const rotated = rotate3D(v[0], v[1], v[2], shape.rotX, shape.rotY, shape.rotZ)
        return [rotated.x, rotated.y, rotated.z]
      })

      const projected = rotatedVertices.map((v) => project(shape.x + v[0], shape.y + v[1], shape.z + v[2]))

      const alpha = Math.max(0.2, Math.min(0.8, 1 - shape.z / 2500))

      ctx.strokeStyle = `${shape.color}${Math.floor(alpha * 255)
        .toString(16)
        .padStart(2, "0")}`
      ctx.lineWidth = 1.5
      ctx.shadowBlur = 10
      ctx.shadowColor = shape.color

      edges.forEach((edge) => {
        const start = projected[edge[0]]
        const end = projected[edge[1]]

        ctx.beginPath()
        ctx.moveTo(start.x, start.y)
        ctx.lineTo(end.x, end.y)
        ctx.stroke()
      })

      ctx.shadowBlur = 0
    }

    const drawGeometry = (shape: GeometryShape) => {
      const s = shape.size

      switch (shape.type) {
        case "octahedron": {
          const vertices = [
            [0, s, 0],
            [s, 0, 0],
            [0, 0, s],
            [-s, 0, 0],
            [0, 0, -s],
            [0, -s, 0],
          ]
          const edges = [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 2],
            [2, 3],
            [3, 4],
            [4, 1],
            [5, 1],
            [5, 2],
            [5, 3],
            [5, 4],
          ]
          drawWireframe(vertices, edges, shape)
          break
        }

        case "sphere": {
          const vertices: number[][] = []
          const rings = 8
          const segments = 12

          for (let i = 0; i <= rings; i++) {
            const theta = (i * Math.PI) / rings
            for (let j = 0; j < segments; j++) {
              const phi = (j * 2 * Math.PI) / segments
              vertices.push([
                s * Math.sin(theta) * Math.cos(phi),
                s * Math.cos(theta),
                s * Math.sin(theta) * Math.sin(phi),
              ])
            }
          }

          const edges: number[][] = []
          for (let i = 0; i < rings; i++) {
            for (let j = 0; j < segments; j++) {
              const current = i * segments + j
              const next = i * segments + ((j + 1) % segments)
              const below = (i + 1) * segments + j

              edges.push([current, next])
              if (i < rings) edges.push([current, below])
            }
          }
          drawWireframe(vertices, edges, shape)
          break
        }

        case "pyramid": {
          const vertices = [
            [0, -s, 0],
            [s, s, s],
            [-s, s, s],
            [-s, s, -s],
            [s, s, -s],
          ]
          const edges = [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 0],
            [4, 5],
            [5, 6],
            [6, 7],
            [7, 4],
            [0, 4],
            [1, 5],
            [2, 6],
            [3, 7],
          ]
          drawWireframe(vertices, edges, shape)
          break
        }

        case "cylinder": {
          const vertices: number[][] = []
          const segments = 16

          for (let i = 0; i < segments; i++) {
            const angle = (i * 2 * Math.PI) / segments
            vertices.push([s * Math.cos(angle), s, s * Math.sin(angle)])
            vertices.push([s * Math.cos(angle), -s, s * Math.sin(angle)])
          }

          const edges: number[][] = []
          for (let i = 0; i < segments; i++) {
            const top = i * 2
            const bottom = i * 2 + 1
            const nextTop = ((i + 1) % segments) * 2
            const nextBottom = ((i + 1) % segments) * 2 + 1

            edges.push([top, nextTop])
            edges.push([bottom, nextBottom])
            edges.push([top, bottom])
          }
          drawWireframe(vertices, edges, shape)
          break
        }

        case "cube": {
          const vertices = [
            [-s, -s, -s],
            [s, -s, -s],
            [s, s, -s],
            [-s, s, -s],
            [-s, -s, s],
            [s, -s, s],
            [s, s, s],
            [-s, s, s],
          ]
          const edges = [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 0],
            [4, 5],
            [5, 6],
            [6, 7],
            [7, 4],
            [0, 4],
            [1, 5],
            [2, 6],
            [3, 7],
          ]
          drawWireframe(vertices, edges, shape)
          break
        }

        case "diamond": {
          const vertices = [
            [0, s * 1.5, 0],
            [s, s * 0.3, 0],
            [0, s * 0.3, s],
            [-s, s * 0.3, 0],
            [0, s * 0.3, -s],
            [0, -s, 0],
          ]
          const edges = [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 2],
            [2, 3],
            [3, 4],
            [4, 1],
            [1, 5],
            [2, 5],
            [3, 5],
            [4, 5],
          ]
          drawWireframe(vertices, edges, shape)
          break
        }

        case "torus": {
          const vertices: number[][] = []
          const segments = 12
          const tubes = 8
          const R = s * 0.8
          const r = s * 0.3

          for (let i = 0; i < segments; i++) {
            const theta = (i * 2 * Math.PI) / segments
            for (let j = 0; j < tubes; j++) {
              const phi = (j * 2 * Math.PI) / tubes
              vertices.push([
                (R + r * Math.cos(phi)) * Math.cos(theta),
                r * Math.sin(phi),
                (R + r * Math.cos(phi)) * Math.sin(theta),
              ])
            }
          }

          const edges: number[][] = []
          for (let i = 0; i < segments; i++) {
            for (let j = 0; j < tubes; j++) {
              const current = i * tubes + j
              const nextSegment = ((i + 1) % segments) * tubes + j
              const nextTube = i * tubes + ((j + 1) % tubes)

              edges.push([current, nextSegment])
              edges.push([current, nextTube])
            }
          }
          drawWireframe(vertices, edges, shape)
          break
        }
      }
    }

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.15)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Actualizar y dibujar geometrías
      geometries.forEach((shape) => {
        shape.x += shape.speedX
        shape.y += shape.speedY
        shape.z += shape.speedZ
        shape.rotX += shape.rotSpeedX
        shape.rotY += shape.rotSpeedY
        shape.rotZ += shape.rotSpeedZ

        if (shape.z < -500) {
          shape.z = 2500
          shape.x = Math.random() * 2000 - 1000
          shape.y = Math.random() * 2000 - 1000
          shape.type = shapeTypes[Math.floor(Math.random() * shapeTypes.length)]
        }

        drawGeometry(shape)
      })

      // Actualizar y dibujar partículas
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.z += particle.vz
        particle.life += 1

        if (particle.life > particle.maxLife || particle.z < -500) {
          particle.x = Math.random() * 2000 - 1000
          particle.y = Math.random() * 2000 - 1000
          particle.z = 3000
          particle.life = 0
        }

        const pos = project(particle.x, particle.y, particle.z)
        const alpha = Math.max(0, 1 - particle.life / particle.maxLife)

        ctx.beginPath()
        ctx.arc(pos.x, pos.y, pos.scale * 3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 255, 0, ${alpha * 0.6})`
        ctx.fill()

        ctx.beginPath()
        ctx.arc(pos.x, pos.y, pos.scale * 6, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 255, 0, ${alpha * 0.2})`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ mixBlendMode: "screen" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
    </>
  )
}
