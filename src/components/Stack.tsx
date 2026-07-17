'use client'

import { useMemo, useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { stack } from '@/data/stack'
import { ChevronDown } from 'lucide-react'

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

const categoryMeta: Record<string, { label: string; desc: string }> = {
  Frontend: { label: 'Frontend', desc: 'Building responsive, modern, and interactive user experiences.' },
  Backend: { label: 'Backend', desc: 'Architecting secure, scalable, and database-driven solutions.' },
  Tools: { label: 'Tools', desc: 'Leveraging automation, version control, and CI/CD workflows.' },
}

type CellData =
  | { type: 'label'; key: string; id: string }
  | { type: 'item'; name: string; id: string }

function buildCells(): CellData[] {
  const fe = stack.filter(i => i.category === 'Frontend & UI')
  const be = stack.filter(i => i.category === 'Backend & Database')
  const tl = stack.filter(i => i.category === 'Tools & Deployment')
  return [
    { type: 'label', key: 'Frontend', id: 'lbl-fe' },
    ...fe.map(i => ({ type: 'item' as const, name: i.name, id: i.name })),
    { type: 'label', key: 'Backend', id: 'lbl-be' },
    ...be.map(i => ({ type: 'item' as const, name: i.name, id: i.name })),
    { type: 'label', key: 'Tools', id: 'lbl-tl' },
    ...tl.map(i => ({ type: 'item' as const, name: i.name, id: i.name })),
  ]
}

function HexCell({ cell, globalIndex }: { cell: CellData; globalIndex: number }) {
  const isLabel = cell.type === 'label'
  const item = !isLabel ? stack.find(s => s.name === cell.name) : null
  const logoSrc = !isLabel ? techLogos[cell.name] : undefined
  const isCore = item?.core || false
  const meta = isLabel ? categoryMeta[cell.key] : null

  return (
    <div className="relative w-[120px] h-[138px] cursor-default">
      <svg viewBox="0 0 100 115" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id={`hg-${globalIndex}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isCore ? 'rgba(230,57,70,0.15)' : isLabel ? 'rgba(230,57,70,0.08)' : 'rgba(255,255,255,0.05)'} />
            <stop offset="100%" stopColor={isCore ? 'rgba(230,57,70,0.04)' : isLabel ? 'rgba(230,57,70,0.02)' : 'rgba(255,255,255,0.02)'} />
          </linearGradient>
          {(isCore || isLabel) && (
            <filter id={`hg-${globalIndex}-glow`}>
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="rgba(230,57,70,0.2)" />
            </filter>
          )}
        </defs>
        <polygon
          points="50 0, 93.3 25, 93.3 90, 50 115, 6.7 90, 6.7 25"
          fill={`url(#hg-${globalIndex})`}
          stroke={isCore ? 'rgba(230,57,70,0.4)' : isLabel ? 'rgba(230,57,70,0.3)' : 'rgba(255,255,255,0.08)'}
          strokeWidth={isCore || isLabel ? '1.5' : '1'}
          filter={(isCore || isLabel) ? `url(#hg-${globalIndex}-glow)` : undefined}
          className="transition-all duration-300"
        />
        <polygon
          points="50 5, 89 27, 89 88, 50 110, 11 88, 11 27"
          fill="none"
          stroke={isCore ? 'rgba(230,57,70,0.12)' : 'rgba(255,255,255,0.04)'}
          strokeWidth="0.5"
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-2">
        {isLabel ? (
          <span className="text-[12px] font-bold text-[#E63946] uppercase tracking-wider font-mono text-center leading-tight">
            {meta?.label}
          </span>
        ) : (
          <>
            <div className="relative w-12 h-12 md:w-14 md:h-14 mb-1">
              {logoSrc && (
                <Image
                  src={logoSrc}
                  alt={cell.name}
                  fill
                  className="object-contain grayscale-[0.3] transition-all duration-300"
                  sizes="56px"
                />
              )}
              {isCore && (
                <div className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#E63946] flex items-center justify-center shadow-lg shadow-[#E63946]/30">
                  <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              )}
            </div>
            <span className="text-[10px] md:text-[11px] font-mono text-[#9E9490] text-center leading-tight">
              {cell.name}
            </span>
            {item?.role && (
              <span className="text-[8px] md:text-[9px] font-mono text-[#E63946] mt-0.5 leading-tight">
                {item.role}
              </span>
            )}
          </>
        )}
      </div>
    </div>
  )
}

function ScatteredHex({
  cell,
  globalIndex,
  scatteredX,
  scatteredY,
  scatteredRotate,
  assembledX,
  assembledY,
  scrollYProgress,
}: {
  cell: CellData
  globalIndex: number
  scatteredX: number
  scatteredY: number
  scatteredRotate: number
  assembledX: number
  assembledY: number
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const start = globalIndex * 0.005
  const x = useTransform(scrollYProgress, [start, 0.8], [scatteredX, assembledX])
  const y = useTransform(scrollYProgress, [start, 0.8], [scatteredY, assembledY])
  const rotate = useTransform(scrollYProgress, [start, 0.8], [scatteredRotate, 0])
  const scale = useTransform(scrollYProgress, [start, start + 0.15, 0.8], [0.3, 0.85, 1])
  const opacity = useTransform(scrollYProgress, [start, start + 0.1], [0, 1])

  return (
    <motion.div
      style={{ x, y, rotate, scale, opacity }}
      className="absolute"
    >
      <HexCell cell={cell} globalIndex={globalIndex} />
    </motion.div>
  )
}

function MobileHex({ cell, globalIndex }: { cell: CellData; globalIndex: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.45, delay: globalIndex * 0.03 }}
      className="group relative shrink-0"
    >
      <div className="relative w-[100px] h-[115px] cursor-default">
        <HexCellContent cell={cell} globalIndex={globalIndex} />
      </div>
    </motion.div>
  )
}

function HexCellContent({ cell, globalIndex }: { cell: CellData; globalIndex: number }) {
  const isLabel = cell.type === 'label'
  const item = !isLabel ? stack.find(s => s.name === cell.name) : null
  const logoSrc = !isLabel ? techLogos[cell.name] : undefined
  const isCore = item?.core || false
  const meta = isLabel ? categoryMeta[cell.key] : null

  return (
    <>
      <svg viewBox="0 0 100 115" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id={`mg-${globalIndex}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isCore ? 'rgba(230,57,70,0.15)' : isLabel ? 'rgba(230,57,70,0.08)' : 'rgba(255,255,255,0.05)'} />
            <stop offset="100%" stopColor={isCore ? 'rgba(230,57,70,0.04)' : isLabel ? 'rgba(230,57,70,0.02)' : 'rgba(255,255,255,0.02)'} />
          </linearGradient>
          {(isCore || isLabel) && (
            <filter id={`mg-${globalIndex}-glow`}>
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="rgba(230,57,70,0.2)" />
            </filter>
          )}
        </defs>
        <polygon
          points="50 0, 93.3 25, 93.3 90, 50 115, 6.7 90, 6.7 25"
          fill={`url(#mg-${globalIndex})`}
          stroke={isCore ? 'rgba(230,57,70,0.4)' : isLabel ? 'rgba(230,57,70,0.3)' : 'rgba(255,255,255,0.08)'}
          strokeWidth={isCore || isLabel ? '1.5' : '1'}
          filter={(isCore || isLabel) ? `url(#mg-${globalIndex}-glow)` : undefined}
          className="group-hover:stroke-[#E63946]/70 group-hover:fill-[#E63946]/[0.1] transition-all duration-300"
        />
        <polygon
          points="50 5, 89 27, 89 88, 50 110, 11 88, 11 27"
          fill="none"
          stroke={isCore ? 'rgba(230,57,70,0.12)' : 'rgba(255,255,255,0.04)'}
          strokeWidth="0.5"
          className="group-hover:stroke-[#E63946]/25 transition-all duration-300"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-2">
        {isLabel ? (
          <span className="text-[12px] font-bold text-[#E63946] uppercase tracking-wider font-mono text-center leading-tight">
            {meta?.label}
          </span>
        ) : (
          <>
            <div className="relative w-12 h-12 md:w-14 md:h-14 mb-1">
              {logoSrc && (
                <Image
                  src={logoSrc}
                  alt={cell.name}
                  fill
                  className="object-contain grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                  sizes="56px"
                />
              )}
              {isCore && (
                <div className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#E63946] flex items-center justify-center shadow-lg shadow-[#E63946]/30">
                  <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              )}
            </div>
            <span className="text-[10px] md:text-[11px] font-mono text-[#9E9490] group-hover:text-[#EDE8E4] transition-colors duration-300 text-center leading-tight">
              {cell.name}
            </span>
            {item?.role && (
              <span className="text-[8px] md:text-[9px] font-mono text-[#E63946] mt-0.5 leading-tight">
                {item.role}
              </span>
            )}
          </>
        )}
      </div>
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30">
        <div className="bg-[#1A1414] border border-[rgba(255,255,255,0.07)] rounded-lg px-3 py-1.5 whitespace-nowrap shadow-xl">
          <p className="text-[10px] font-bold font-mono text-[#EDE8E4]">{isLabel ? meta?.label : cell.name}</p>
          {item?.role && <p className="text-[9px] text-[#E63946] font-mono">{item.role}</p>}
          {isLabel && meta?.desc && (
            <p className="text-[9px] text-[#9E9490] font-mono max-w-[200px] whitespace-normal mt-0.5">{meta.desc}</p>
          )}
        </div>
      </div>
    </>
  )
}

function seededRandom(seed: number) {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453
  return x - Math.floor(x)
}

export default function Stack() {
  const cells = useMemo(() => buildCells(), [])
  const containerRef = useRef<HTMLDivElement>(null)
  const [hydrated, setHydrated] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    setHydrated(true)
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const { scrollYProgress } = useScroll({
    target: hydrated ? containerRef : undefined,
    offset: ['start start', 'end end'],
  })

  const COLS = 7
  const HEX_W = 120
  const HEX_H = 104

  const assembledPositions = useMemo(() => {
    const gridWidth = COLS * HEX_W
    const totalRows = Math.ceil(cells.length / COLS)
    const gridHeight = totalRows * HEX_H
    return cells.map((_, i) => {
      const row = Math.floor(i / COLS)
      const col = i % COLS
      const x = col * HEX_W + (row % 2 === 1 ? 60 : 0)
      const y = row * HEX_H
      return {
        x: x - gridWidth / 2 + HEX_W / 2,
        y: y - gridHeight / 2 + HEX_H / 2,
      }
    })
  }, [cells.length])

  const scatteredPositions = useMemo(() => {
    return cells.map((_, i) => ({
      x: (seededRandom(i * 3 + 1) - 0.5) * 900,
      y: (seededRandom(i * 3 + 2) - 0.5) * 600,
      rotate: (seededRandom(i * 3 + 3) - 0.5) * 90,
    }))
  }, [cells.length])

  const mobileRows = useMemo(() => {
    const r: CellData[][] = []
    for (let i = 0; i < cells.length; i += 3) {
      r.push(cells.slice(i, i + 3))
    }
    return r
  }, [cells])

  if (isMobile) {
    return (
      <section id="tech-stack" className="relative bg-[#0D0D0D] border-t border-[rgba(255,255,255,0.07)] overflow-hidden">
        <div className="absolute inset-0 warm-glow pointer-events-none" />
        <div className="relative z-10 py-16 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] font-bold text-[#E63946] uppercase tracking-[0.2em] font-mono mb-4 block">
              // TOOLS OF THE TRADE
            </span>
            <h2 className="text-3xl font-bold text-[#EDE8E4] mb-4">My Tech Stack</h2>
            <p className="text-[#9E9490] text-sm">React, Next.js, Node.js, PostgreSQL — and everything I ship with.</p>
          </motion.div>
          <div className="mt-12 space-y-[-18px]">
            {mobileRows.map((row, ri) => (
              <div key={ri} className="flex justify-center gap-2">
                {row.map((cell, ci) => (
                  <MobileHex key={cell.id} cell={cell} globalIndex={ri * 3 + ci} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="pt-24 pb-16 relative bg-[#0D0D0D] border-t border-[rgba(255,255,255,0.07)]">
        <div className="relative z-10 px-6 md:px-12 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] font-bold text-[#E63946] uppercase tracking-[0.2em] font-mono mb-4 block">
              // TOOLS OF THE TRADE
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#EDE8E4] mb-4">
              My Tech Stack
            </h2>
            <p className="text-[#9E9490] text-base md:text-lg max-w-2xl">
              React, Next.js, Node.js, PostgreSQL — and everything I ship with.
            </p>
            <p className="text-[#9E9490]/60 text-xs font-mono mt-4 flex items-center gap-2">
              <ChevronDown className="w-4 h-4 animate-bounce" />
              Scroll to assemble
            </p>
          </motion.div>
        </div>
      </section>

      <div ref={containerRef} style={{ height: '400vh' }} className="relative bg-[#0D0D0D]">
        <div className="sticky top-0 h-screen w-full overflow-hidden" style={{ willChange: 'transform', contain: 'layout style' }}>
          <div className="absolute inset-0 warm-glow pointer-events-none" />
          <div className="relative w-full h-full flex items-center justify-center">
            {cells.map((cell, i) => (
              <ScatteredHex
                key={cell.id}
                cell={cell}
                globalIndex={i}
                scatteredX={scatteredPositions[i].x}
                scatteredY={scatteredPositions[i].y}
                scatteredRotate={scatteredPositions[i].rotate}
                assembledX={assembledPositions[i].x}
                assembledY={assembledPositions[i].y}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
