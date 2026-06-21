'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { stack } from '@/data/stack'

const categoryOrder = ['Frontend & UI', 'Backend & Database', 'Tools & Deployment'] as const

const techLogos: Record<string, string> = {
  'Next.js': '/techstackicons/next-dot-js-svgrepo-com.svg',
  'React': '/techstackicons/react-svgrepo-com.svg',
  'TypeScript': '/techstackicons/typescript-icon-svgrepo-com.svg',
  'Tailwind CSS': '/techstackicons/tailwindcss-icon-svgrepo-com.svg',
  'Figma': '/techstackicons/figma-icon.svg',
  'HTML5': '/techstackicons/HTML5.svg',
  'CSS3': '/techstackicons/CSS3.svg',
  'Bootstrap': '/techstackicons/Bootstrap.svg',
  'Node.js': '/techstackicons/nodejs-icon-svgrepo-com.svg',
  'PostgreSQL': '/techstackicons/postgresql-svgrepo-com.svg',
  'Supabase': '/techstackicons/supabase-logo-icon.svg',
  'Prisma': '/techstackicons/prisma-svgrepo-com.svg',
  'Python': '/techstackicons/python-svgrepo-com.svg',
  'FastAPI': '/techstackicons/FastAPI.svg',
  'Laravel': '/techstackicons/laravel-2.svg',
  'Java': '/techstackicons/java-svgrepo-com.svg',
  'C++': '/techstackicons/c-1.svg',
  'Swift': '/techstackicons/swift-svgrepo-com.svg',
  'Vercel': '/techstackicons/vercel-logo-svgrepo-com.svg',
  'Git': '/techstackicons/git-svgrepo-com.svg',
  'GitHub': '/techstackicons/github-svgrepo-com.svg',
  'Docker': '/techstackicons/docker-svgrepo-com.svg',
  'NPM': '/techstackicons/NPM.svg',
  'VS Code': '/techstackicons/Visual Studio Code (VS Code).svg',
  'Postman': '/techstackicons/postman-icon-svgrepo-com.svg',
  'Bash': '/techstackicons/bash-icon-svgrepo-com.svg',
  'GoLand': '/techstackicons/GoLand.svg',
}

// Alternating directions per row for a belt-conveyor feel
const rowConfig = [
  { speed: 35, direction: 1 },   // Frontend → left
  { speed: 42, direction: -1 },  // Backend ← right
  { speed: 50, direction: 1 },   // Tools → left
]

interface ScrollingRowProps {
  category: string
  items: typeof stack
  speed: number
  direction: number
  rowIndex: number
}

function TechCard({ name, logoSrc }: { name: string; logoSrc: string | undefined }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="inline-flex items-center gap-3 px-5 py-3 font-mono tracking-tight shrink-0 cursor-default"
      style={{
        border: hovered
          ? '1px solid rgba(230,57,70,0.45)'
          : '1px solid rgba(255,255,255,0.06)',
        color: hovered ? '#EDE8E4' : '#C8C0BC',
        background: hovered ? 'rgba(230,57,70,0.06)' : 'transparent',
        boxShadow: hovered ? '0 0 20px rgba(230,57,70,0.15), inset 0 0 12px rgba(230,57,70,0.04)' : 'none',
        transform: hovered ? 'translateY(-2px) scale(1.03)' : 'translateY(0) scale(1)',
        transition: 'all 0.22s ease',
        borderRadius: 2,
        userSelect: 'none',
      }}
    >
      {logoSrc && (
        <img
          src={logoSrc}
          alt={name}
          className="w-8 h-8 object-contain shrink-0"
          style={{
            filter: hovered ? 'grayscale(0) brightness(1)' : 'grayscale(0.3) brightness(0.75)',
            transition: 'filter 0.22s ease',
          }}
        />
      )}
      <span className="text-lg whitespace-nowrap">{name}</span>
    </div>
  )
}

function ScrollingRow({ category, items, speed, direction, rowIndex }: ScrollingRowProps) {
  const [paused, setPaused] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: false, margin: '-10% 0px' })

  // When direction is -1 (right-to-left reversed), we animate from -50% to 0%
  const from = direction === 1 ? '0%' : '-50%'
  const to   = direction === 1 ? '-50%' : '0%'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: rowIndex * 0.12, ease: 'easeOut' }}
    >
      {/* Category label — outside overflow container so it's never clipped */}
      <div
        className="text-sm font-mono uppercase tracking-wider mb-5"
        style={{ color: '#E63946' }}
      >
        {category}
      </div>

      {/* Marquee strip */}
      <div
        className="relative overflow-hidden w-full"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{
          // 3D perspective tilt for depth
          perspective: '800px',
        }}
      >
        {/* Left fade */}
        <div
          className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, #0D0D0D 0%, transparent 100%)' }}
        />
        {/* Right fade */}
        <div
          className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(270deg, #0D0D0D 0%, transparent 100%)' }}
        />

        {/* Pause indicator */}
        {paused && (
          <div
            className="absolute top-2 right-28 z-20 text-[10px] font-mono tracking-widest uppercase"
            style={{ color: '#E63946', opacity: 0.6 }}
          >
            ⏸ paused
          </div>
        )}

        <motion.div
          className="flex gap-4"
          style={{ width: 'max-content', willChange: 'transform' }}
          animate={{ x: paused ? undefined : [from, to] }}
          transition={
            paused
              ? { duration: 0 }
              : {
                  x: {
                    duration: speed,
                    repeat: Infinity,
                    ease: 'linear',
                    repeatType: 'loop',
                  },
                }
          }
        >
          {[...items, ...items].map((item, i) => {
            const logoSrc = techLogos[item.name]
            return (
              <TechCard key={`${item.name}-${i}`} name={item.name} logoSrc={logoSrc} />
            )
          })}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Stack() {
  const grouped = categoryOrder.map((cat) => ({
    category: cat,
    items: stack.filter((item) => item.category === cat),
  }))

  return (
    <section
      id="tech-stack"
      className="relative py-14 md:py-20 px-6 md:px-12 overflow-hidden"
      style={{ backgroundColor: '#0D0D0D' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(230,57,70,0.04) 0%, transparent 60%)',
        }}
      />
      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        <SectionWrapper>
          <div className="text-sm font-mono uppercase tracking-[0.15em] text-text-secondary-dark mb-14">
            TOOLS &amp; STACK
          </div>
        </SectionWrapper>

        <div className="space-y-14">
          {grouped.map((group, i) => (
            <SectionWrapper key={group.category} delay={0.05 + i * 0.08}>
              <ScrollingRow
                category={group.category}
                items={group.items}
                speed={rowConfig[i].speed}
                direction={rowConfig[i].direction}
                rowIndex={i}
              />
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
