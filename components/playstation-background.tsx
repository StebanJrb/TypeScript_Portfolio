"use client"

import { useEffect, useRef } from "react"

export function PlayStationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    interface GeometryShape {
      type: "octahedron" | "cube" | "diamond"
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
    const numGeometries = 5
    const numParticles = 30

    const shapeTypes: GeometryShape["type"][] = ["octahedron", "cube", "diamond"]

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
        size: 80 + Math.random() * 100,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        speedZ: -1.5 - Math.random() * 2,
        rotSpeedX: (Math.random() - 0.5) * 0.02,
        rotSpeedY: (Math.random() - 0.5) * 0.02,
        rotSpeedZ: (Math.random() - 0.5) * 0.02,
        color: Math.random() > 0.5 ? "#00ff00" : "#ffffff",
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

    const rotate3D = (x: number, y: number, z: number, rotX: number, rotY: number, rotZ: number) => {
      const y1 = y * Math.cos(rotX) - z * Math.sin(rotX)
      const z1 = y * Math.sin(rotX) + z * Math.cos(rotX)
      const x2 = x * Math.cos(rotY) + z1 * Math.sin(rotY)
      const z2 = -x * Math.sin(rotY) + z1 * Math.cos(rotY)
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

      if (projected.some((p) => !p || isNaN(p.x) || isNaN(p.y))) return

      const alpha = Math.max(0.2, Math.min(0.7, 1 - shape.z / 2500))

      ctx.strokeStyle = `${shape.color}${Math.floor(alpha * 255)
        .toString(16)
        .padStart(2, "0")}`
      ctx.lineWidth = 1.5

      edges.forEach((edge) => {
        if (edge[0] >= projected.length || edge[1] >= projected.length) return
        const start = projected[edge[0]]
        const end = projected[edge[1]]
        if (!start || !end || isNaN(start.x) || isNaN(start.y) || isNaN(end.x) || isNaN(end.y)) return

        ctx.beginPath()
        ctx.moveTo(start.x, start.y)
        ctx.lineTo(end.x, end.y)
        ctx.stroke()
      })
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
      }
    }

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

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
        ctx.arc(pos.x, pos.y, pos.scale * 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 255, 0, ${alpha * 0.4})`
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
