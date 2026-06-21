'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function FloatingLogo() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [docHeight, setDocHeight] = useState(1)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [visible, setVisible] = useState(false)

  const { scrollY } = useScroll()
  const smoothScrollY = useSpring(scrollY, { stiffness: 120, damping: 30 })

  if (pathname?.startsWith('/links')) return null

  useEffect(() => {
    setMounted(true)
    const updateHeight = () =>
      setDocHeight(document.documentElement.scrollHeight - window.innerHeight)
    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  // Track scroll progress for the arc + visibility
  useEffect(() => {
    return smoothScrollY.on('change', (v) => {
      const progress = Math.max(0, Math.min(1, v / Math.max(docHeight, 1)))
      setScrollProgress(progress)
      setVisible(v > 180)
    })
  }, [smoothScrollY, docHeight])

  if (!mounted) return null

  // SVG arc geometry
  const SIZE = 56          // total svg size
  const STROKE = 2.5
  const R = (SIZE - STROKE * 2) / 2
  const CX = SIZE / 2
  const CY = SIZE / 2
  const circumference = 2 * Math.PI * R
  const dashOffset = circumference * (1 - scrollProgress)
  const pct = Math.round(scrollProgress * 100)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.7 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="fixed bottom-8 right-8 z-50 hidden lg:flex flex-col items-center gap-1.5"
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
    >
      {/* Ring + logo */}
      <div style={{ position: 'relative', width: SIZE, height: SIZE }}>
        {/* SVG ring */}
        <svg
          width={SIZE}
          height={SIZE}
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          style={{ position: 'absolute', top: 0, left: 0, transform: 'rotate(-90deg)' }}
        >
          {/* Track circle */}
          <circle
            cx={CX} cy={CY} r={R}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth={STROKE}
          />
          {/* Progress arc */}
          <circle
            cx={CX} cy={CY} r={R}
            fill="none"
            stroke="#E63946"
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            style={{ transition: 'stroke-dashoffset 0.15s linear' }}
          />
        </svg>

        {/* Logo inside ring */}
        <motion.div
          animate={{
            boxShadow: [
              '0 0 10px rgba(230,57,70,0.15)',
              '0 0 22px rgba(230,57,70,0.3)',
              '0 0 10px rgba(230,57,70,0.15)',
            ],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            inset: STROKE + 3,
            borderRadius: 10,
            border: '1px solid rgba(230,57,70,0.2)',
            background: 'rgba(13,13,13,0.9)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <Image
            src="/mubxlogoloader.svg"
            alt="MUBX"
            width={28}
            height={28}
            style={{ objectFit: 'contain' }}
          />
        </motion.div>
      </div>

      {/* Scroll % */}
      <span
        style={{
          fontSize: 9,
          fontFamily: 'var(--font-mono)',
          letterSpacing: '0.1em',
          color: pct > 0 ? '#E63946' : '#6B625E',
          textTransform: 'uppercase',
          transition: 'color 0.3s',
        }}
      >
        {pct}%
      </span>
    </motion.div>
  )
}
