'use client'

import { useRef, useCallback, useEffect, CSSProperties } from 'react'

export function useMouseTilt(maxDegrees: number = 4) {
  const ref = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  const targetRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef({ x: 0, y: 0 })

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t

  const animate = useCallback(() => {
    const lerpFactor = 0.08
    currentRef.current.x = lerp(currentRef.current.x, targetRef.current.x, lerpFactor)
    currentRef.current.y = lerp(currentRef.current.y, targetRef.current.y, lerpFactor)

    if (ref.current) {
      ref.current.style.transform =
        `perspective(1200px) rotateX(${currentRef.current.y}deg) rotateY(${currentRef.current.x}deg)`
    }

    const dx = Math.abs(currentRef.current.x - targetRef.current.x)
    const dy = Math.abs(currentRef.current.y - targetRef.current.y)
    if (dx > 0.01 || dy > 0.01) {
      rafRef.current = requestAnimationFrame(animate)
    }
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const parent = el.closest('section')
    const target = parent || el

    const handleMove = (e: MouseEvent) => {
      const rect = target.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const x = ((e.clientX - centerX) / (rect.width / 2)) * maxDegrees
      const y = -((e.clientY - centerY) / (rect.height / 2)) * maxDegrees
      targetRef.current = { x: Math.max(-maxDegrees, Math.min(maxDegrees, x)), y: Math.max(-maxDegrees, Math.min(maxDegrees, y)) }
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(animate)
    }

    const handleLeave = () => {
      targetRef.current = { x: 0, y: 0 }
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(animate)
    }

    target.addEventListener('mousemove', handleMove)
    target.addEventListener('mouseleave', handleLeave)
    return () => {
      target.removeEventListener('mousemove', handleMove)
      target.removeEventListener('mouseleave', handleLeave)
      cancelAnimationFrame(rafRef.current)
    }
  }, [maxDegrees, animate])

  return ref
}
