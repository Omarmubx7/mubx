'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { timeline } from '@/data/timeline'
import { useDecodeText } from '@/lib/decode'
import { slideFromLeft, sceneStagger } from '@/lib/motion'

/* ─── Data ─── */
const yearGroups = [
  { year: '2023', entries: [timeline[0]] },
  { year: '2024', entries: [timeline[1], timeline[2]] },
  { year: '2025', entries: [timeline[3], timeline[4]] },
  { year: '2026', entries: [timeline[5]] },
]

/* ─── Decode heading that triggers on scroll ─── */
function DecodeHeading({ text, delay = 0 }: { text: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const decode = useDecodeText(isInView ? text : '', {
    delay,
    speed: 40,
    direction: 'center',
  })

  return (
    <span ref={ref} style={{ minHeight: '1.2em', display: 'inline-block' }}>
      {decode.display}
    </span>
  )
}

/* ─── Desktop: Scroll-driven scenes ─── */
function DesktopView() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <div
      ref={containerRef}
      id="journey"
      style={{ height: '250vh' }}
      className="relative bg-[#0D0D0D]"
    >
      {/* Sticky viewport */}
      <div
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{ willChange: 'transform', contain: 'layout style' }}
      >
        {/* Progress line — scoped to sticky viewport */}
        <div className="progress-track hidden md:block">
          <motion.div
            className="progress-fill"
            style={{ scaleY: scrollYProgress }}
          />
        </div>

        {/* MY PATH — horizontal strip */}
        <MyPathPhase scrollYProgress={scrollYProgress} />
      </div>
    </div>
  )
}

/* ─── Desktop: Year card for horizontal strip ─── */
function DesktopYearCard({
  group,
}: {
  group: (typeof yearGroups)[0]
}) {
  return (
    <div
      className="w-[340px] shrink-0 p-6 md:p-8 space-y-5"
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Year */}
      <div className="text-5xl font-black text-[#E11D1D] font-mono leading-none">
        {group.year}
      </div>

      <div className="w-full h-[1px] bg-[#E11D1D]/15" />

      {/* Entries */}
      <div className="space-y-4">
        {group.entries.map((entry) => (
          <div key={entry.title}>
            <h3 className="text-sm md:text-base font-mono font-medium text-[#EDE8E4] mb-1">
              {entry.title}
            </h3>
            <p className="text-[#9E9490] leading-relaxed text-xs md:text-sm">
              {entry.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Desktop: MY PATH — horizontal strip ─── */
function MyPathPhase({ scrollYProgress }: { scrollYProgress: any }) {
  const opacity = useTransform(scrollYProgress, [0, 0.06], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.06], [40, 0])

  /* 4 cards × 340px + 3 gaps × 20px = 1420px. Viewport ~1200px → offset ~220px */
  const stripX = useTransform(scrollYProgress, [0.06, 0.95], [0, -220])

  /* Horizontal progress line */
  const progressScaleX = useTransform(scrollYProgress, [0.06, 0.95], [0, 1])

  return (
    <div className="absolute inset-0 flex flex-col px-6 md:px-12 lg:px-16 xl:px-24 pt-20 md:pt-28">
      {/* Heading */}
      <motion.div style={{ opacity, y }} className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-[#EDE8E4]">
          <DecodeHeading text="My Path" />
        </h2>
      </motion.div>

      {/* Horizontal strip */}
      <div className="flex-1 flex flex-col justify-center overflow-hidden">
        <motion.div style={{ x: stripX }} className="flex gap-5">
          {yearGroups.map((group) => (
            <DesktopYearCard key={group.year} group={group} />
          ))}
        </motion.div>

        {/* Horizontal progress line */}
        <div className="mt-6 md:mt-8 h-[1px] w-full bg-[#E11D1D]/10 relative">
          <motion.div
            style={{ scaleX: progressScaleX }}
            className="absolute inset-y-0 left-0 w-full origin-left"
          >
            <div
              className="h-full w-full"
              style={{ background: 'linear-gradient(90deg, #E11D1D, rgba(225,29,29,0.15))' }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

/* ─── Mobile: MY PATH — horizontal scroll-snap strip ─── */
function MobileMyPath() {
  return (
    <section
      id="journey"
      className="relative py-14 md:py-20 px-6 md:px-12"
      style={{ backgroundColor: '#0D0D0D' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 30% 50%, rgba(230,57,70,0.04) 0%, transparent 60%)',
        }}
      />
      <div className="relative z-10">
        <motion.div
          variants={sceneStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.div variants={slideFromLeft} className="mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-[#EDE8E4]">
              <DecodeHeading text="My Path" delay={200} />
            </h2>
          </motion.div>
        </motion.div>

        {/* Horizontal scroll-snap strip */}
        <div className="overflow-x-auto flex gap-4 snap-x snap-mandatory pb-4 -mx-6 px-6 scrollbar-hide">
          {yearGroups.map((group) => (
            <div
              key={group.year}
              className="min-w-[80vw] snap-center p-5 space-y-4 shrink-0"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div className="text-4xl font-black text-[#E11D1D] font-mono leading-none">
                {group.year}
              </div>
              <div className="w-full h-[1px] bg-[#E11D1D]/15" />
              <div className="space-y-3">
                {group.entries.map((entry) => (
                  <div key={entry.title}>
                    <h3 className="text-sm font-mono font-medium text-[#EDE8E4] mb-1">
                      {entry.title}
                    </h3>
                    <p className="text-[#9E9490] leading-relaxed text-xs">
                      {entry.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Horizontal progress line */}
        <div className="mt-4 h-[1px] w-full bg-[#E11D1D]/10" />
      </div>
    </section>
  )
}

/* ─── Main ─── */
export default function Journey() {
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  if (isMobile) return <MobileMyPath />
  return <DesktopView />
}
