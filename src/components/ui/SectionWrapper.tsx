'use client'

import { motion } from 'framer-motion'

interface SectionWrapperProps {
  children: React.ReactNode
  delay?: number
  className?: string
  as?: 'section' | 'div' | 'article'
  id?: string
}

export default function SectionWrapper({
  children,
  delay = 0,
  className = '',
  as: Tag = 'section',
  id,
}: SectionWrapperProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -40px 0px' }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
    >
      <Tag className={className}>{children}</Tag>
    </motion.div>
  )
}
