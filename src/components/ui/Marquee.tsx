'use client'

import { motion } from 'framer-motion'

interface MarqueeProps {
  items: string[]
  speed?: number
}

export default function Marquee({ items, speed = 30 }: MarqueeProps) {
  return (
    <div className="relative overflow-hidden w-full" aria-hidden="true">
      <div
        className="absolute inset-y-0 left-0 w-12 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, #0D0D0D 0%, transparent 100%)',
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-12 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(270deg, #0D0D0D 0%, transparent 100%)',
        }}
      />
      <motion.div
        className="flex gap-8"
        style={{ width: 'max-content', willChange: 'transform' }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-lg uppercase font-mono whitespace-nowrap"
            style={{ color: '#FFFFFF' }}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
