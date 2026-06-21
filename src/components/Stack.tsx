'use client'

import { motion } from 'framer-motion'
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

const speeds = [35, 45, 55]

function ScrollingRow({ category, items, speed }: { category: string; items: typeof stack; speed: number }) {
  return (
    <div>
      <div
        className="text-sm font-mono uppercase tracking-wider mb-5"
        style={{ color: '#E63946' }}
      >
        {category}
      </div>
      <div className="relative overflow-hidden w-full">
        <div
          className="absolute inset-y-0 left-0 w-16 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, #0D0D0D 0%, transparent 100%)' }}
        />
        <div
          className="absolute inset-y-0 right-0 w-16 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(270deg, #0D0D0D 0%, transparent 100%)' }}
        />
      <motion.div
        className="flex gap-4"
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
        {[...items, ...items].map((item, i) => {
          const logoSrc = techLogos[item.name]
          return (
            <div
              key={`${item.name}-${i}`}
              className="inline-flex items-center gap-3 px-5 py-3 font-mono tracking-tight shrink-0"
              style={{
                border: '1px solid rgba(255,255,255,0.06)',
                color: '#C8C0BC',
              }}
            >
              {logoSrc && (
                <img
                  src={logoSrc}
                  alt={item.name}
                  className="w-8 h-8 object-contain shrink-0"
                  style={{ filter: 'grayscale(0.3) brightness(0.8)' }}
                />
              )}
              <span className="text-lg whitespace-nowrap">{item.name}</span>
            </div>
          )
        })}
      </motion.div>
      </div>
    </div>
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
            <SectionWrapper key={group.category} delay={0.1 + i * 0.1}>
              <ScrollingRow
                category={group.category}
                items={group.items}
                speed={speeds[i]}
              />
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
