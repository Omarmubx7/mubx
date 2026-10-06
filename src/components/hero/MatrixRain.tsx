'use client'

import { useRef, useEffect } from 'react'

const CHARS = '01█▓▒░@#$%&*{}[]<>/\\|~^'
const RED = [225, 29, 29]

interface Column {
  y: number
  speed: number
  chars: string[]
  opacity: number
}

export default function MatrixRain({ density = 30 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let raf: number
    let columns: Column[] = []
    const fontSize = 14
    let cols = 0

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      ctx.scale(dpr, dpr)

      const newCols = Math.floor(window.innerWidth / fontSize * (density / 30))
      if (newCols !== cols) {
        cols = newCols
        columns = Array.from({ length: cols }, () => ({
          y: Math.random() * -window.innerHeight,
          speed: 0.5 + Math.random() * 2,
          chars: Array.from({ length: 40 }, () => CHARS[Math.floor(Math.random() * CHARS.length)]),
          opacity: 0.03 + Math.random() * 0.1,
        }))
      }
    }

    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      ctx.clearRect(0, 0, w, h)

      for (let i = 0; i < columns.length; i++) {
        const col = columns[i]
        const x = (i / columns.length) * w

        for (let j = 0; j < col.chars.length; j++) {
          const charY = col.y - j * fontSize
          if (charY < -fontSize || charY > h + fontSize) continue

          const fade = j === 0 ? 1 : Math.max(0, 1 - j / col.chars.length)
          const a = col.opacity * fade

          ctx.font = `${fontSize}px "JetBrains Mono", monospace`
          ctx.fillStyle = `rgba(${RED[0]},${RED[1]},${RED[2]},${a})`

          if (Math.random() < 0.02) {
            col.chars[j] = CHARS[Math.floor(Math.random() * CHARS.length)]
          }

          ctx.fillText(col.chars[j], x, charY)
        }

        col.y += col.speed
        if (col.y - col.chars.length * fontSize > h) {
          col.y = Math.random() * -200
          col.speed = 0.5 + Math.random() * 2
          col.opacity = 0.03 + Math.random() * 0.1
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
      document.removeEventListener('visibilitychange', handleVis)
    }
  }, [density])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
