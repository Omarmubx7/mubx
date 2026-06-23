'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { stack, StackItem } from '@/data/stack'

const categoryConfig = [
  { id: 'Frontend & UI' as const, label: 'Frontend Development', desc: 'Building responsive, modern, and interactive user experiences.' },
  { id: 'Backend & Database' as const, label: 'Backend & Databases', desc: 'Architecting secure, scalable, and database-driven solutions.' },
  { id: 'Tools & Deployment' as const, label: 'Tools & Infrastructure', desc: 'Leveraging automation, version control, and CI/CD workflows.' },
]

const techLogos: Record<string, string> = {
  'Next.js': '/techstackicons/next.svg',
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
  'Kotlin': '/techstackicons/Kotlin.svg',
  'Vercel': '/techstackicons/vercel.svg',
  'Git': '/techstackicons/git-svgrepo-com.svg',
  'GitHub': '/techstackicons/github (1).svg',
  'Docker': '/techstackicons/docker-svgrepo-com.svg',
  'NPM': '/techstackicons/NPM.svg',
  'VS Code': '/techstackicons/Visual Studio Code (VS Code).svg',
  'Postman': '/techstackicons/postman-icon-svgrepo-com.svg',
  'Bash': '/techstackicons/bash-icon-svgrepo-com.svg',
  'GoLand': '/techstackicons/GoLand.svg',
  'PowerShell': '/techstackicons/Powershell_128.svg',
  'Android Studio': '/techstackicons/Android_Studio_icon_(2023).svg',
  'Groq': '/techstackicons/groq.svg',
  'Claude AI': '/techstackicons/Claude_AI_symbol.svg',
  'Perplexity': '/techstackicons/perplexity-color.svg',
  'OpenCode': '/techstackicons/opencode-logo-dark-square (1).svg',
}

function CoreHexagon({ item, index }: { item: StackItem; index: number }) {
  const logoSrc = techLogos[item.name]
  const isCore = item.core || false

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative"
    >
      <div className="relative w-28 h-[128px] md:w-32 md:h-[144px] cursor-default">
        {/* Core hexagon */}
        <svg viewBox="0 0 100 115" className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id={`core-grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(230,57,70,0.15)" />
              <stop offset="100%" stopColor="rgba(230,57,70,0.04)" />
            </linearGradient>
            <filter id={`core-glow-${index}`}>
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="rgba(230,57,70,0.25)" />
            </filter>
          </defs>
          <polygon
            points="50 0, 93.3 25, 93.3 90, 50 115, 6.7 90, 6.7 25"
            fill={`url(#core-grad-${index})`}
            stroke="rgba(230,57,70,0.4)"
            strokeWidth="1.5"
            filter={`url(#core-glow-${index})`}
            className="group-hover:stroke-[#E63946] group-hover:fill-[#E63946]/[0.15] transition-all duration-300"
          />
          <polygon
            points="50 5, 89 27, 89 88, 50 110, 11 88, 11 27"
            fill="none"
            stroke="rgba(230,57,70,0.15)"
            strokeWidth="0.5"
            className="group-hover:stroke-[#E63946]/30 transition-all duration-300"
          />
        </svg>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-3">
          <div className="relative w-12 h-12 md:w-14 md:h-14 mb-2">
            {logoSrc && (
              <Image
                src={logoSrc}
                alt={item.name}
                fill
                className="object-contain grayscale-[0.15] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                sizes="(max-width: 768px) 48px, 56px"
              />
            )}
            {/* Core badge */}
            <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#E63946] flex items-center justify-center shadow-lg shadow-[#E63946]/30">
              <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>
          <span className="text-[10px] md:text-[11px] font-mono font-medium text-[#EDE8E4] group-hover:text-white transition-colors duration-300 text-center leading-tight">
            {item.name}
          </span>
          {item.role && (
            <span className="text-[8px] md:text-[9px] font-mono text-[#E63946] mt-0.5">
              {item.role}
            </span>
          )}
        </div>

        {/* Tooltip */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30">
          <div className="bg-[#1A1414] border border-[#E63946]/30 rounded-lg px-3 py-1.5 whitespace-nowrap shadow-xl shadow-[#E63946]/10">
            <p className="text-[10px] font-bold font-mono text-[#EDE8E4]">{item.name}</p>
            {item.role && <p className="text-[9px] text-[#E63946] font-mono">{item.role}</p>}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function SmallHexagon({ item, index }: { item: StackItem; index: number }) {
  const logoSrc = techLogos[item.name]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      className="group relative"
    >
      <div className="relative w-16 h-[74px] md:w-20 md:h-[92px] cursor-default">
        {/* Small hexagon */}
        <svg viewBox="0 0 100 115" className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id={`small-grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
            </linearGradient>
          </defs>
          <polygon
            points="50 0, 93.3 25, 93.3 90, 50 115, 6.7 90, 6.7 25"
            fill={`url(#small-grad-${index})`}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
            className="group-hover:stroke-[#E63946]/60 group-hover:fill-[#E63946]/[0.08] transition-all duration-300"
          />
        </svg>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-2">
          <div className="relative w-8 h-8 md:w-10 md:h-10 mb-1">
            {logoSrc && (
              <Image
                src={logoSrc}
                alt={item.name}
                fill
                className="object-contain grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                sizes="(max-width: 768px) 32px, 40px"
              />
            )}
          </div>
          <span className="text-[8px] md:text-[9px] font-mono text-[#9E9490] group-hover:text-[#EDE8E4] transition-colors duration-300 text-center leading-tight">
            {item.name}
          </span>
        </div>

        {/* Tooltip */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30">
          <div className="bg-[#1A1414] border border-[rgba(255,255,255,0.07)] rounded-lg px-3 py-1.5 whitespace-nowrap shadow-xl">
            <p className="text-[10px] font-bold font-mono text-[#EDE8E4]">{item.name}</p>
            {item.role && <p className="text-[9px] text-[#E63946] font-mono">{item.role}</p>}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function MixedSizeHoneycomb({ items }: { items: StackItem[] }) {
  const coreItems = useMemo(() => items.filter(i => i.core), [items])
  const smallItems = useMemo(() => items.filter(i => !i.core), [items])

  const gap = 6;

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex flex-col items-center" style={{ gap: gap }}>
        {/* Top row - small items */}
        <div className="flex justify-center" style={{ gap: gap }}>
          {smallItems.slice(0, Math.ceil(smallItems.length / 2)).map((item, index) => (
            <SmallHexagon key={item.name} item={item} index={index} />
          ))}
        </div>

        {/* Middle row - core items */}
        <div className="flex justify-center" style={{ gap: gap }}>
          {coreItems.map((item, index) => (
            <CoreHexagon key={item.name} item={item} index={index} />
          ))}
        </div>

        {/* Bottom row - remaining small items */}
        <div className="flex justify-center" style={{ gap: gap }}>
          {smallItems.slice(Math.ceil(smallItems.length / 2)).map((item, index) => (
            <SmallHexagon key={item.name} item={item} index={coreItems.length + index} />
          ))}
        </div>
      </div>
    </div>
  )
}

function TechCategory({ category, index }: { category: typeof categoryConfig[number]; index: number }) {
  const items = useMemo(() => stack.filter(i => i.category === category.id), [category.id])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative"
    >
      {/* Category Header */}
      <div className="flex items-center gap-4 mb-8 md:mb-12">
        <span className="text-[10px] font-bold text-[#E63946] uppercase tracking-[0.2em] font-mono">
          // {category.label}
        </span>
        <div className="flex-1 h-px bg-[rgba(255,255,255,0.07)]" />
        <span className="text-[10px] font-mono text-[#9E9490]">
          {items.length} technologies
        </span>
      </div>

      {/* Mixed Size Honeycomb */}
      <MixedSizeHoneycomb items={items} />
    </motion.div>
  )
}

export default function Stack() {
  return (
    <section
      id="tech-stack"
      className="relative bg-[#0D0D0D] border-t border-[rgba(255,255,255,0.07)]"
    >
      {/* Background warm glow */}
      <div className="absolute inset-0 warm-glow pointer-events-none" />

      <div className="relative z-10 py-16 md:py-24 lg:py-32">
        {/* Section Header */}
        <div className="px-6 md:px-12 lg:px-16 xl:px-24 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="text-[10px] font-bold text-[#E63946] uppercase tracking-[0.2em] font-mono mb-4 block">
              // TECHNOLOGIES & TOOLS
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#EDE8E4] mb-4">
              Technologies I Use to Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E63946] to-[#E63946]/60">Fast, Scalable Web Apps</span>
            </h2>
            <p className="text-[#9E9490] text-base md:text-lg max-w-2xl">
              React, Next.js, Node.js, PostgreSQL, and the tools I use to ship production-grade applications.
            </p>
          </motion.div>
        </div>

        {/* Categories */}
        <div className="px-4 md:px-8 lg:px-12 xl:px-16 space-y-16 md:space-y-24">
          {categoryConfig.map((category, index) => (
            <TechCategory key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
