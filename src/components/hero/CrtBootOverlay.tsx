'use client'

import { motion } from 'framer-motion'

export default function CrtBootOverlay() {
  return (
    <>
      {/* CRT Power-on flash + fade */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 25,
          background: '#fff',
          pointerEvents: 'none',
        }}
      />

      {/* CRT flicker sequence */}
      <motion.div
        initial={{ opacity: 0.9 }}
        animate={{
          opacity: [0.9, 0.3, 0.8, 0.1, 0.6, 0],
        }}
        transition={{
          duration: 0.6,
          delay: 0.1,
          times: [0, 0.1, 0.2, 0.35, 0.5, 1],
        }}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 24,
          background: 'rgba(225,29,29,0.15)',
          pointerEvents: 'none',
        }}
      />

      {/* CRT Vignette — stays permanently */}
      <div className="crt-vignette" />

      {/* VHS noise grain — stays permanently */}
      <div className="vhs-noise" />
    </>
  )
}
