'use client'

import { useState, useEffect } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import Image from 'next/image'
import { stack } from '@/data/stack'

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

const BRANCHES = [
  { key: 'Frontend & UI', meta: 'Frontend', chip: 'feat/frontend-ui' },
  { key: 'Backend & Database', meta: 'Backend', chip: 'core/backend-db' },
  { key: 'Tools & Deployment', meta: 'Tools', chip: 'chore/tools-deployment' },
] as const

const EASE = [0.16, 1, 0.3, 1] as const

const laneV = (i: number): Variants => ({
  hidden: { scaleY: 0 },
  show: {
    scaleY: 1,
    transition: { duration: 0.9, delay: 0.1 + i * 0.1, ease: EASE },
  },
})

const chipV: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
}

const nodeV: Variants = {
  hidden: { opacity: 0, x: -12, scale: 0.92 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.4, delay: 0.25 + i * 0.06, ease: EASE },
  }),
}

const mergeV = (i: number): Variants => ({
  hidden: { pathLength: 0 },
  show: {
    pathLength: 1,
    transition: { duration: 0.6, delay: 1.15 + i * 0.12, ease: EASE },
  },
})

const endDotV: Variants = {
  hidden: { scale: 0 },
  show: {
    scale: [0, 1.35, 1],
    transition: { duration: 0.45, delay: 1.65, ease: EASE },
  },
}

const endTextV: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, delay: 1.72, ease: EASE },
  },
}

function GitNode({ name, role, core, index }: { name: string; role?: string; core?: boolean; index: number }) {
  const logoSrc = techLogos[name]
  return (
    <motion.div
      variants={nodeV}
      custom={index}
      className="group flex h-12 items-center hover:bg-foreground/[0.03] hover:translate-x-1 transition-all duration-200"
    >
      <span className="flex w-6 shrink-0 items-center justify-center">
        {core ? (
          <span className="h-3 w-3 rounded-full bg-neon shadow-[0_0_10px_rgba(225,29,29,0.7)] group-hover:shadow-[0_0_16px_rgba(225,29,29,0.9)] transition-shadow duration-200" />
        ) : (
          <span className="h-2.5 w-2.5 rounded-full border border-foreground/40 bg-[#0D0D0D] group-hover:border-neon/70 group-hover:shadow-[0_0_8px_rgba(225,29,29,0.4)] transition-all duration-200" />
        )}
      </span>
      <span className="relative w-8 h-8 shrink-0">
        {logoSrc && (
          <Image
            src={logoSrc}
            alt=""
            fill
            className="object-contain grayscale-[0.35] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
            sizes="32px"
          />
        )}
      </span>
      <span className={`ml-3 font-mono text-[15px] md:text-base leading-tight ${core ? 'text-foreground font-bold' : 'text-muted'} group-hover:text-foreground transition-colors duration-200`}>
        {name}
      </span>
      {role && (
        <span className="ml-auto hidden lg:block pl-3 font-mono text-[11px] text-neon whitespace-nowrap">
          {role}
        </span>
      )}
    </motion.div>
  )
}

function BranchLane({ branchKey, chip, metaKey, index }: { branchKey: string; chip: string; metaKey: string; index: number }) {
  const items = stack.filter(s => s.category === branchKey)
  const meta = categoryMeta[metaKey]
  const rm = useReducedMotion()
  return (
    <div className="flex flex-col">
      <motion.div variants={chipV} className="h-14 pl-7 flex flex-col justify-center gap-0.5">
        <p className="font-mono text-sm md:text-base font-bold text-neon">
          &#9095; {chip}
          <span className="ml-2 text-muted font-normal">({items.length})</span>
        </p>
        <p className="hidden xl:block font-mono text-[10px] text-muted/70 leading-snug">{meta.desc}</p>
      </motion.div>

      <div className="relative flex-1">
        <motion.span
          aria-hidden="true"
          variants={laneV(index)}
          style={{ transformOrigin: 'top' }}
          className="absolute left-[11px] top-1 bottom-0 w-px bg-gradient-to-b from-neon/50 via-foreground/20 to-neon/40"
        />
        {!rm && (
          <motion.span
            aria-hidden="true"
            className="absolute left-[11px] -translate-x-1/2 h-1 w-3 rounded-full bg-neon shadow-[0_0_8px_rgba(225,29,29,0.9)]"
            animate={{ top: ['1%', '97%'], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, repeatDelay: 2.5, delay: index * 1.4, ease: 'linear' }}
          />
        )}
        <div className="relative pt-1">
          {items.map((item, i) => (
            <GitNode key={item.name} name={item.name} role={item.role} core={item.core} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Stack() {
  const [isMobile, setIsMobile] = useState(true)
  const rm = useReducedMotion()

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

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
              {'// TOOLS OF THE TRADE'}
            </span>
            <h2 className="text-3xl font-bold text-[#EDE8E4] mb-4">My Tech Stack</h2>
            <p className="text-[#9E9490] text-sm">React, Next.js, Node.js, PostgreSQL and everything I ship with.</p>
          </motion.div>
          <MobileHexGrid />
        </div>
      </section>
    )
  }

  return (
    <section id="tech-stack" className="relative pt-24 pb-24 bg-[#0D0D0D] border-t border-[rgba(255,255,255,0.07)] overflow-hidden">
      <div className="absolute inset-0 warm-glow pointer-events-none" />

      <div className="relative z-10 px-6 md:px-12 lg:px-16 xl:px-24 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[10px] font-bold text-[#E63946] uppercase tracking-[0.2em] font-mono mb-4 block">
            {'// TOOLS OF THE TRADE'}
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#EDE8E4] mb-4">
            My Tech Stack
          </h2>
          <p className="text-[#9E9490] text-base md:text-lg max-w-2xl">
            React, Next.js, Node.js, PostgreSQL and everything I ship with.
          </p>
        </motion.div>

        {/* Git log graph */}
        <motion.div
          className="mt-14"
          initial={rm ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          <div className="grid md:grid-cols-3 gap-x-10">
            {BRANCHES.map((b, i) => (
              <BranchLane key={b.key} branchKey={b.key} chip={b.chip} metaKey={b.meta} index={i} />
            ))}
          </div>

          {/* Merge fan */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 96"
            preserveAspectRatio="none"
            className="w-full h-16 md:h-20 mt-1"
          >
            {[0, 1, 2].map(i => {
              const x = [12, 426, 840][i]
              return (
                <motion.path
                  key={i}
                  variants={mergeV(i)}
                  d={`M ${x} 0 C ${x} 58, 600 38, 600 94`}
                  fill="none"
                  stroke="rgba(225,29,29,0.45)"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                />
              )
            })}
          </svg>

          {/* Merge point: your systems */}
          <div className="flex flex-col items-center -mt-1">
            <motion.span
              aria-hidden="true"
              variants={endDotV}
              className={`h-3 w-3 rounded-full bg-neon shadow-[0_0_14px_rgba(225,29,29,0.7)] ${rm ? '' : 'animate-glow-pulse'}`}
              style={rm ? undefined : { animationDelay: '2.4s' }}
            />
            <motion.p
              variants={endTextV}
              className="mt-3 font-mono text-2xl md:text-3xl font-black tracking-tight"
            >
              <span className="text-foreground">merged into&nbsp;</span>
              <span className="text-neon [text-shadow:0_0_30px_rgba(225,29,29,0.35)]">
                your systems
              </span>
            </motion.p>
            <p className="mt-1 font-mono text-[10px] text-muted/60 uppercase tracking-[0.2em]">
              36 commits &#183; 3 branches &#183; 1 trunk
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ---------- Mobile hex grid (unchanged legacy layout) ---------- */

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

function MobileHexGrid() {
  const cells = buildCells()
  const rows: CellData[][] = []
  for (let i = 0; i < cells.length; i += 3) {
    rows.push(cells.slice(i, i + 3))
  }
  return (
    <div className="mt-12 space-y-[-18px]">
      {rows.map((row, ri) => (
        <div key={ri} className="flex justify-center gap-2">
          {row.map((cell, ci) => (
            <MobileHex key={cell.id} cell={cell} globalIndex={ri * 3 + ci} />
          ))}
        </div>
      ))}
    </div>
  )
}
