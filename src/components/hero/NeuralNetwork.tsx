'use client'

import { useRef, useEffect } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  baseOpacity: number
  targetOpacity: number
  currentOpacity: number
}

const MAX_DIST = 160

export default function NeuralNetwork({ nodeCount = 50 }: { nodeCount?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let raf: number
    let nodes: Node[] = []
    let mouse = { x: -1000, y: -1000 }
    let w = 0
    let h = 0

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      if (nodes.length === 0) {
        nodes = Array.from({ length: nodeCount }, () => ({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: 1.5 + Math.random() * 2,
          baseOpacity: 0.15 + Math.random() * 0.2,
          targetOpacity: 0,
          currentOpacity: 0,
        }))
      }
    }

    resize()
    window.addEventListener('resize', resize)

    const handleMouse = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    window.addEventListener('mousemove', handleMouse)

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        const dx = mouse.x - n.x
        const dy = mouse.y - n.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < MAX_DIST) {
          n.targetOpacity = 0.7 + (1 - dist / MAX_DIST) * 0.3
          n.x += dx * 0.003
          n.y += dy * 0.003
        } else {
          n.targetOpacity = 0
        }

        n.currentOpacity += (n.targetOpacity - n.currentOpacity) * 0.05

        n.x += n.vx
        n.y += n.vy

        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1
        n.x = Math.max(0, Math.min(w, n.x))
        n.y = Math.max(0, Math.min(h, n.y))

        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j]
          const ldx = n.x - m.x
          const ldy = n.y - m.y
          const ldist = Math.sqrt(ldx * ldx + ldy * ldy)
          if (ldist < MAX_DIST) {
            const lineAlpha = (1 - ldist / MAX_DIST) * 0.12
            const mouseBoost = Math.max(n.currentOpacity, m.currentOpacity) * 0.3
            ctx.beginPath()
            ctx.moveTo(n.x, n.y)
            ctx.lineTo(m.x, m.y)
            ctx.strokeStyle = `rgba(255,46,46,${lineAlpha + mouseBoost})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }

        const totalOpacity = n.baseOpacity + n.currentOpacity
        const nodeRadius = n.radius + n.currentOpacity * 2

        ctx.beginPath()
        ctx.arc(n.x, n.y, nodeRadius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,46,46,${totalOpacity})`
        ctx.fill()

        if (n.currentOpacity > 0.1) {
          ctx.beginPath()
          ctx.arc(n.x, n.y, nodeRadius + 4, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255,46,46,${n.currentOpacity * 0.15})`
          ctx.fill()
        }
      }

      raf = requestAnimationFrame(draw)
    }

    draw()

    const handleVis = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf)
      } else {
        raf = requestAnimationFrame(draw)
      }
    }
    document.addEventListener('visibilitychange', handleVis)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouse)
      document.removeEventListener('visibilitychange', handleVis)
    }
  }, [nodeCount])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  )
}
