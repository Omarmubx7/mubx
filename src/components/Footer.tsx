'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer style={{ background: '#0D0D0D' }}>
      <div
        className="max-w-[1200px] mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-2"
        style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
      >
        <motion.div
          className="text-[11px] font-mono"
          style={{ color: '#6B625E' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          &copy; 2026 Omar Mubaidin
        </motion.div>
        <motion.div
          className="text-[11px] font-mono"
          style={{ color: '#6B625E' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Designed &amp; built by Omar &middot; mubx.dev
        </motion.div>
        <motion.div
          className="text-[11px] font-mono"
          style={{ color: '#FF2E2E' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            $
          </motion.span>{' '}
          omar --version 2026
        </motion.div>
      </div>
    </footer>
  )
}
