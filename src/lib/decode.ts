'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

const DECODE_CHARS = '01█▓▒░@#$%&*'

export function useDecodeText(
  target: string,
  options?: {
    speed?: number
    delay?: number
    direction?: 'ltr' | 'rtl' | 'center'
    charSet?: string
  }
) {
  const {
    speed = 30,
    delay = 0,
    direction = 'ltr',
    charSet = DECODE_CHARS,
  } = options ?? {}

  const [display, setDisplay] = useState('')
  const [done, setDone] = useState(false)
  const frameRef = useRef<number>(0)
  const startTime = useRef<number>(0)
  const hasStarted = useRef(false)

  const getCharIndex = useCallback(
    (i: number, progress: number) => {
      switch (direction) {
        case 'rtl':
          return progress > 1 - i / target.length
        case 'center': {
          const center = target.length / 2
          return progress > Math.abs(i - center) / center
        }
        default:
          return progress > i / target.length
      }
    },
    [target.length, direction]
  )

  useEffect(() => {
    if (!target) return

    const timeout = setTimeout(() => {
      hasStarted.current = true
      startTime.current = performance.now()

      const tick = (now: number) => {
        const elapsed = now - startTime.current
        const progress = Math.min(elapsed / (target.length * speed), 1)

        const result = target
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' '
            if (getCharIndex(i, progress)) return char
            return charSet[Math.floor(Math.random() * charSet.length)]
          })
          .join('')

        setDisplay(result)

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(tick)
        } else {
          setDisplay(target)
          setDone(true)
        }
      }

      frameRef.current = requestAnimationFrame(tick)
    }, delay)

    return () => {
      clearTimeout(timeout)
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [target, speed, delay, charSet, getCharIndex])

  return { display, done }
}

export function generateAsciiFromImage(
  img: HTMLImageElement,
  columns: number = 80,
  charSet: string = ' .:-=+*#%@'
): { text: string; colors: string[] }[] {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')!

  const aspectRatio = img.height / img.width
  const charAspect = 0.55
  const rows = Math.floor(columns * aspectRatio * charAspect)

  canvas.width = columns
  canvas.height = rows
  ctx.drawImage(img, 0, 0, columns, rows)

  const imageData = ctx.getImageData(0, 0, columns, rows)
  const pixels = imageData.data
  const lines: { text: string; colors: string[] }[] = []

  for (let y = 0; y < rows; y++) {
    let text = ''
    const colors: string[] = []

    for (let x = 0; x < columns; x++) {
      const idx = (y * columns + x) * 4
      const r = pixels[idx]
      const g = pixels[idx + 1]
      const b = pixels[idx + 2]
      const brightness = (r + g + b) / 3
      const charIdx = Math.min(
        Math.floor((brightness / 255) * (charSet.length - 1)),
        charSet.length - 1
      )
      text += charSet[charIdx]
      colors.push(`rgb(${r},${g},${b})`)
    }

    lines.push({ text, colors })
  }

  return lines
}
