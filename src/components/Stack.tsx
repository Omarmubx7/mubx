'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from 'framer-motion'
import Image from 'next/image'
import { stack, type StackItem } from '@/data/stack'
import { techLogos } from '@/data/techLogos'

type CategoryKey = 'Frontend & UI' | 'Backend & Database' | 'Tools & Deployment'

type ChapterCfg = {
  key: CategoryKey
  num: string
  label: string
  desc: string
  range: [number, number]
}

const CHAPTERS: ChapterCfg[] = [
  {
    key: 'Frontend & UI',
    num: '01',
    label: 'FRONTEND & UI',
    desc: 'responsive, modern, interactive user interfaces',
    range: [0.0, 0.3],
  },
  {
    key: 'Backend & Database',
    num: '02',
    label: 'BACKEND & DATABASE',
    desc: 'secure, scalable, database-driven solutions',
    range: [0.27, 0.6],
  },
  {
    key: 'Tools & Deployment',
    num: '03',
    label: 'TOOLS & DEPLOYMENT',
    desc: 'automation, version control, and CI/CD workflows',
    range: [0.58, 0.92],
  },
]

const TOTAL_HEIGHT = 360

const rootsOf = (key: CategoryKey) => stack.filter(s => s.category === key && s.core)
const kidsOf = (key: CategoryKey) => stack.filter(s => s.category === key && !s.core)

/* Pinned story: every chapter cross-fades into the next inside one sticky viewport. */
function Story() {
  const ref = useRef<HTMLDivElement>(null)
  const rm = useReducedMotion()
  const { scrollYProgress: p } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  if (rm) return <StaticStory />

  return (
    <div ref={ref} className="relative" style={{ height: `${TOTAL_HEIGHT}vh` }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="progress-track hidden md:block">
          <motion.div className="progress-fill" style={{ scaleY: p }} />
        </div>

        <div className="relative h-screen w-full">
          {CHAPTERS.map(config => (
            <ChapterScene key={config.key} config={config} p={p} />
          ))}
        </div>
      </div>
    </div>
  )
}

/* One chapter: root icon(s) first, then the offspring branches out below. */
function ChapterScene({ config, p }: { config: ChapterCfg; p: MotionValue<number> }) {
  const local = useTransform(p, config.range, [0, 1])

  const sceneOp = useTransform(local, [0, 0.05, 0.92, 1], [0, 1, 1, 0])
  const sceneScale = useTransform(local, [0, 0.05], [0.985, 1])
  const pointer = useTransform(local, v => (v > 0.03 && v < 0.97 ? 'auto' : 'none'))

  const introOp = useTransform(local, [0.02, 0.09], [0, 1])
  const introY = useTransform(local, [0.02, 0.09], [24, 0])
  const truncOp = useTransform(local, [0.3, 0.36], [0, 1])
  const trunkScaleY = useTransform(local, [0.3, 0.36], [0, 1])

  const roots = rootsOf(config.key)
  const kids = kidsOf(config.key)

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-12"
      style={{ opacity: sceneOp, scale: sceneScale, pointerEvents: pointer }}
    >
      {/* Chapter intro */}
      <motion.div style={{ opacity: introOp, y: introY }} className="text-center">
        <div className="flex items-center justify-center gap-3 md:gap-4">
          <span className="font-mono text-3xl md:text-4xl font-black text-[#FF2E2E] leading-none">
            {config.num}
          </span>
          <span className="h-px w-10 md:w-16 bg-[#FF2E2E]/40" />
          <span className="font-mono text-sm md:text-lg font-bold tracking-[0.25em] text-[#EDE8E4]">
            {config.label}
            <span className="ml-2 inline-block h-4 md:h-5 w-2 bg-[#FF2E2E] align-middle cursor-blink" />
          </span>
        </div>
        <p className="mt-3 font-mono text-[10px] md:text-xs text-[#9E9490] tracking-[0.2em] uppercase">
          {'// '}
          {config.desc}
        </p>
        <p className="mt-1.5 font-mono text-[10px] text-[#9E9490]/60">
          <span className="text-[#FF2E2E]">{roots.length}</span> core · <span className="text-[#FF2E2E]">{kids.length}</span> supporting tools
        </p>
      </motion.div>

      {/* The root */}
      <div className="mt-8 md:mt-10 flex flex-wrap items-end justify-center gap-5 md:gap-10">
        {roots.map((r, i) => (
          <RootTile key={r.name} item={r} index={i} local={local} />
        ))}
      </div>

      {/* Trunk */}
      <motion.div aria-hidden="true" className="mt-5 h-7 md:h-9">
        <motion.div
          className="mx-auto h-full w-px bg-[#FF2E2E]/40"
          style={{ scaleY: trunkScaleY, transformOrigin: 'top' }}
        >
          <span className="block h-1.5 w-1.5 -translate-x-[2.5px] translate-y-full rounded-full bg-[#FF2E2E] shadow-[0_0_8px_rgba(255,46,46,0.8)]" />
        </motion.div>
      </motion.div>

      {/* Offspring */}
      <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-center gap-2 gap-y-2.5 md:gap-3">
        {kids.map((kid, i) => (
          <KidChip key={kid.name} item={kid} index={i} count={kids.length} local={local} />
        ))}
      </div>
      <motion.span aria-hidden="true" className="mt-5 h-1.5 w-1.5 rounded-full bg-[#FF2E2E]/70" style={{ opacity: truncOp }} />
    </motion.div>
  )
}

function RootTile({ item, index, local }: { item: StackItem; index: number; local: MotionValue<number> }) {
  const start = 0.09 + index * 0.045
  const end = start + 0.07
  const opacity = useTransform(local, [start, end], [0, 1])
  const scale = useTransform(local, [start, end], [0.82, 1])
  const y = useTransform(local, [start, end], [26, 0])
  const src = techLogos[item.name]

  return (
    <motion.div style={{ opacity, scale, y }} className="group flex flex-col items-center gap-2">
      <div className="relative h-16 w-16 md:h-24 md:w-24 rounded-2xl border-2 border-[#FF2E2E]/60 bg-[#FF2E2E]/[0.06] shadow-[0_0_24px_rgba(255,46,46,0.22)] transition-shadow duration-300 group-hover:shadow-[0_0_36px_rgba(255,46,46,0.38)]">
        {src && (
          <Image
            src={src}
            alt=""
            fill
            className="object-contain p-2.5 md:p-3.5 transition-transform duration-300 group-hover:scale-110"
            sizes="96px"
          />
        )}
      </div>
      <p className="font-mono text-sm font-bold text-[#EDE8E4] md:text-base">{item.name}</p>
      <p className="-mt-1 font-mono text-[10px] text-[#FF2E2E] md:text-[11px]">{item.role}</p>
    </motion.div>
  )
}

function KidChip({ item, index, count, local }: { item: StackItem; index: number; count: number; local: MotionValue<number> }) {
  const span = 0.54
  const start = 0.37 + index * (span / count)
  const end = Math.min(start + (span / count) * 0.75, 0.95)
  const opacity = useTransform(local, [start, end], [0, 1])
  const y = useTransform(local, [start, end], [16, 0])
  const src = techLogos[item.name]

  return (
    <motion.div
      style={{ opacity, y }}
      className="group flex shrink-0 cursor-default items-center gap-2 rounded-lg border border-[rgba(255,255,255,0.08)] bg-white/[0.02] px-3 py-1.5 transition-colors duration-300 hover:border-[#FF2E2E]/50 hover:bg-[#FF2E2E]/[0.06]"
    >
      <span className="relative h-5 w-5 shrink-0 md:h-6 md:w-6">
        {src && (
          <Image
            src={src}
            alt=""
            fill
            className="object-contain grayscale-[0.35] transition-all duration-300 group-hover:grayscale-0"
            sizes="24px"
          />
        )}
      </span>
      <span className="font-mono text-[11px] text-[#9E9490] transition-colors duration-300 group-hover:text-[#EDE8E4] md:text-xs">
        {item.name}
      </span>
    </motion.div>
  )
}

/* Finale: hand off straight into the contact block — the story just ends. */
/* Reduced-motion fallback: the same story, fully visible, no scroll pinning. */
function StaticStory() {
  return (
    <div className="mx-auto max-w-4xl space-y-16 px-6 py-16">
      {CHAPTERS.map(config => {
        const roots = rootsOf(config.key)
        const kids = kidsOf(config.key)
        const desc = config.desc
        return (
          <div key={config.key} className="text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="font-mono text-3xl font-bold text-[#FF2E2E]">{config.num}</span>
              <span className="h-px w-10 bg-[#FF2E2E]/40" />
              <span className="font-mono text-sm font-bold tracking-[0.25em] text-[#EDE8E4]">{config.label}</span>
            </div>
            <p className="mt-2 font-mono text-[10px] text-[#9E9490] uppercase tracking-[0.2em]">{`// ${desc}`}</p>
            <div className="mt-6 flex flex-wrap items-end justify-center gap-6">
              {roots.map(r => <StaticRoot key={r.name} item={r} />)}
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
              {kids.map(kid => <StaticChip key={kid.name} item={kid} />)}
            </div>
          </div>
        )
      })}

      <div className="flex flex-col items-center gap-6">
        <p className="font-mono text-xs text-[#9E9490]">$ 36 tools — one stack. Your turn.</p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FF2E2E] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all hover:bg-[#D91F1F]"
        >
          Start a project
        </a>
      </div>
    </div>
  )
}

function StaticRoot({ item }: { item: StackItem }) {
  const src = techLogos[item.name]
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative h-16 w-16 rounded-2xl border-2 border-[#FF2E2E]/60 bg-[#FF2E2E]/[0.06] shadow-[0_0_24px_rgba(255,46,46,0.22)]">
        {src && (
          <Image src={src} alt="" fill className="object-contain p-2.5" sizes="64px" />
        )}
      </div>
      <p className="font-mono text-sm font-bold text-[#EDE8E4]">{item.name}</p>
      <p className="-mt-1 font-mono text-[10px] text-[#FF2E2E]">{item.role}</p>
    </div>
  )
}

function StaticChip({ item }: { item: StackItem }) {
  const src = techLogos[item.name]
  return (
    <div className="flex shrink-0 items-center gap-2 rounded-lg border border-[rgba(255,255,255,0.08)] bg-white/[0.02] px-3 py-1.5">
      {src && (
        <span className="relative h-5 w-5">
          <Image src={src} alt="" fill className="object-contain" sizes="20px" />
        </span>
      )}
      <span className="font-mono text-[11px] text-[#9E9490]">{item.name}</span>
    </div>
  )
}

export default function Stack() {
  return (
    <section id="tech-stack" className="relative bg-[#0D0D0D] border-t border-[rgba(255,255,255,0.07)]">
      <div className="absolute inset-0 warm-glow pointer-events-none" />

      <div className="relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-6 md:px-12 lg:px-16 xl:px-24 max-w-6xl mx-auto pt-20 md:pt-24"
        >
          <span className="mb-4 block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF2E2E]">
            {'// TOOLS OF THE TRADE'}
          </span>
          <h2 className="mb-4 text-3xl font-bold text-[#EDE8E4] md:text-5xl lg:text-6xl">
            My Tech Stack
          </h2>
          <p className="max-w-2xl text-[#9E9490] text-base md:text-lg">
            React, Next.js, Node.js, PostgreSQL and everything I ship with.
          </p>
        </motion.div>

        <Story />
      </div>
    </section>
  )
}