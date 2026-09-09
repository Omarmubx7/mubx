'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'

const lines = [
  'Building MUBXAI AI-powered academic tools for HTU students',
  'Exploring AI agent patterns and LLM orchestration',
  'Learning distributed systems and system design',
  'Shipping new experiments weekly on mubx.dev',
]

export default function Now() {
  return (
<section
      id="now"
      className="relative py-14 md:py-20 px-6 md:px-12"
      style={{
        backgroundColor: '#0D0D0D',
      }}
    >
      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        <SectionWrapper>
          <h2 className="text-lg font-mono font-bold uppercase tracking-[0.15em] text-red mb-8">
            CURRENTLY BUILDING
          </h2>
        </SectionWrapper>

        <SectionWrapper delay={0.1}>
          <motion.div
            className="p-8 md:p-10 font-sans text-lg space-y-4"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
            }}
            whileHover={{ y: -2, boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="text-text-secondary-dark text-sm mb-5 flex items-center gap-2"
            >
              <motion.span
                className="text-red"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                $
              </motion.span>
              cat /now.md
            </div>

            {lines.map((line, i) => (
              <motion.div
                key={line}
                className="flex items-start gap-2 text-text-primary-dark"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
              >
                <motion.span
                  className="text-red shrink-0"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                >
                  &gt;
                </motion.span>
                <span>{line}</span>
              </motion.div>
            ))}

            <div
              className="text-text-secondary-dark text-xs mt-6 pt-4"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              Updated June 2026
            </div>
          </motion.div>
        </SectionWrapper>
      </div>
    </section>
  )
}
