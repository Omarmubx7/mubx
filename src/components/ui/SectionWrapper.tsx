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
      initial={{ opacity: 0, y: 48, clipPath: 'inset(12% 0% 0% 0%)' }}
      whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -60px 0px' }}
      transition={{
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1],
        delay,
        opacity: { duration: 0.55 },
        clipPath: { duration: 0.65, delay: delay + 0.05 },
      }}
    >
      <Tag className={className}>{children}</Tag>
    </motion.div>
  )
}
