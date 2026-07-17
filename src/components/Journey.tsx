'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { timeline } from '@/data/timeline'

const roles = [
  {
    title: 'AI & Automation',
    description:
      'Building chatbots, AI agents, LLM integrations, and AI-powered products like MUBXAI and MUBXbot. I turn AI capabilities into real, useful tools.',
    tags: ['Python', 'LLM APIs', 'AI Agents', 'OpenAI', 'Chatbots'],
    icon: '>_',
  },
  {
    title: 'Web & Product',
    description:
      'Full-stack web and mobile products from concept to deployment. UI/UX design, backend architecture, databases, and everything in between.',
    tags: ['React', 'Next.js', 'TypeScript', 'Supabase', 'Android', 'REST APIs'],
    icon: '{/}',
  },
]

/* ─── Desktop: Phase 1 — "WHAT I BUILD" ─── */
function Phase1({ scrollYProgress }: { scrollYProgress: any }) {
  const headingOpacity = useTransform(scrollYProgress, [0, 0.04, 0.22, 0.28], [0, 1, 1, 0])
  const headingY = useTransform(scrollYProgress, [0, 0.04, 0.22, 0.28], [30, 0, 0, -30])

  const card1Opacity = useTransform(scrollYProgress, [0.04, 0.1, 0.22, 0.28], [0, 1, 1, 0])
  const card1Y = useTransform(scrollYProgress, [0.04, 0.1, 0.22, 0.28], [50, 0, 0, -30])

  const card2Opacity = useTransform(scrollYProgress, [0.08, 0.14, 0.22, 0.28], [0, 1, 1, 0])
  const card2Y = useTransform(scrollYProgress, [0.08, 0.14, 0.22, 0.28], [50, 0, 0, -30])

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-12">
      <motion.div style={{ opacity: headingOpacity, y: headingY }} className="text-center mb-10 md:mb-14">
        <span className="text-[10px] font-bold text-[#E63946] uppercase tracking-[0.2em] font-mono mb-4 block">
          // WHAT I BUILD
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-[#EDE8E4]">What I Build</h2>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8 max-w-4xl w-full">
        {roles.map((role, i) => (
          <motion.div
            key={role.title}
            style={{
              opacity: i === 0 ? card1Opacity : card2Opacity,
              y: i === 0 ? card1Y : card2Y,
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
            className="flex-1 p-6 md:p-8 space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center text-base font-mono font-bold bg-[#E63946]/10 border border-[#E63946]/20 text-[#E63946]">
                {role.icon}
              </div>
              <div className="w-[2px] h-5 bg-[#E63946]/60" />
              <h3 className="text-xl md:text-2xl font-mono font-light text-[#EDE8E4]">{role.title}</h3>
            </div>
            <p className="text-[#9E9490] leading-relaxed">{role.description}</p>
            <div className="flex flex-wrap gap-2 pt-1">
              {role.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono uppercase tracking-wider px-3 py-1.5 text-[#E63946]"
                  style={{ border: '1px solid rgba(230,57,70,0.15)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

/* ─── Desktop: Phase 2 — "MY PATH" timeline ─── */
function Phase2({ scrollYProgress }: { scrollYProgress: any }) {
  const headingOpacity = useTransform(scrollYProgress, [0.26, 0.32], [0, 1])
  const headingY = useTransform(scrollYProgress, [0.26, 0.32], [30, 0])

  const lineProgress = useTransform(scrollYProgress, [0.32, 0.82], ['0%', '100%'])

  return (
    <div className="absolute inset-0 flex flex-col px-6 md:px-12 lg:px-16 xl:px-24 pt-20 md:pt-28">
      <motion.div style={{ opacity: headingOpacity, y: headingY }} className="mb-8 md:mb-12">
        <span className="text-[10px] font-bold text-[#E63946] uppercase tracking-[0.2em] font-mono mb-4 block">
          // MY PATH TO FULL-STACK DEVELOPMENT
        </span>
      </motion.div>

      <div className="relative flex-1 overflow-hidden">
        <motion.div
          className="absolute left-[7px] top-0 w-[1px] origin-top"
          style={{
            height: lineProgress,
            background: 'linear-gradient(180deg, #E63946, rgba(230,57,70,0.15))',
          }}
        />

        <div className="space-y-5 md:space-y-6 pl-8">
          {timeline.map((entry, i) => {
            const start = 0.32 + i * 0.083
            const end = start + 0.05
            const entryOpacity = useTransform(scrollYProgress, [start, end], [0, 1])
            const entryX = useTransform(scrollYProgress, [start, end], [-25, 0])
            const entryScale = useTransform(scrollYProgress, [start, end], [0.95, 1])

            return (
              <motion.div
                key={entry.title}
                style={{ opacity: entryOpacity, x: entryX, scale: entryScale }}
                className="flex gap-5 group"
              >
                <div className="flex flex-col items-center shrink-0 -ml-8">
                  <motion.div
                    className="w-[15px] h-[15px] rounded-full relative z-10"
                    style={{
                      background: '#E63946',
                      border: '2px solid #E63946',
                      boxShadow: '0 0 12px rgba(230,57,70,0.3)',
                    }}
                  />
                </div>
                <div className="pb-1 flex-1">
                  <div className="text-sm font-mono uppercase tracking-wider text-[#E63946] mb-1">
                    {entry.year}
                  </div>
                  <h3 className="text-lg md:text-xl font-mono font-medium text-[#EDE8E4] mb-1 group-hover:text-[#E63946] transition-colors duration-200">
                    {entry.title}
                  </h3>
                  <p className="text-[#9E9490] leading-relaxed max-w-xl text-sm md:text-base">
                    {entry.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

/* ─── Mobile: static Roles + Journey ─── */
function MobileView() {
  return (
    <section
      id="journey"
      className="relative py-14 md:py-20 px-6 md:px-12"
      style={{ backgroundColor: '#0D0D0D' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 30% at 50% 100%, rgba(230,57,70,0.03) 0%, transparent 60%)',
        }}
      />
      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        {/* Roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="text-lg font-mono font-bold uppercase tracking-[0.15em] text-[#E63946] mb-8">
            WHAT I BUILD
          </div>
          <div className="grid gap-6">
            {roles.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 space-y-4"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center text-base font-mono font-bold bg-[#E63946]/10 border border-[#E63946]/20 text-[#E63946]">
                    {role.icon}
                  </div>
                  <div className="w-[2px] h-5 bg-[#E63946]/60" />
                  <h3 className="text-xl font-mono font-light text-[#EDE8E4]">{role.title}</h3>
                </div>
                <p className="text-[#9E9490] leading-relaxed">{role.description}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {role.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono uppercase tracking-wider px-3 py-1.5 text-[#E63946]"
                      style={{ border: '1px solid rgba(230,57,70,0.15)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Journey timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-lg font-mono font-bold uppercase tracking-[0.15em] text-[#E63946] mb-8">
            MY PATH TO FULL-STACK DEVELOPMENT
          </div>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute left-[7px] top-2 bottom-2 w-[1px]"
            style={{
              background: 'linear-gradient(180deg, #E63946, rgba(230,57,70,0.2))',
            }}
          />
          <div className="space-y-8">
            {timeline.map((entry, i) => (
              <motion.div
                key={entry.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-6 group"
              >
                <div className="flex flex-col items-center shrink-0">
                  <motion.div
                    className="w-[15px] h-[15px] rounded-full relative z-10"
                    style={{
                      background: '#E63946',
                      border: '2px solid #E63946',
                    }}
                    whileHover={{ scale: 1.3 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
                <div className="pb-2 flex-1">
                  <div className="text-sm font-mono uppercase tracking-wider text-[#E63946] mb-1">
                    {entry.year}
                  </div>
                  <h3 className="text-lg md:text-xl font-mono font-medium text-[#EDE8E4] mb-1 group-hover:text-[#E63946] transition-colors duration-200">
                    {entry.title}
                  </h3>
                  <p className="text-[#9E9490] leading-relaxed max-w-xl">
                    {entry.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Main ─── */
export default function Journey() {
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

  if (isMobile) {
    return <MobileView />
  }

  return (
    <>
      <div
        ref={containerRef}
        style={{ height: '500vh' }}
        className="relative bg-[#0D0D0D]"
      >
        <div
          className="sticky top-0 h-screen w-full overflow-hidden"
          style={{ willChange: 'transform', contain: 'layout style' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 80% 50% at 50% 40%, rgba(230,57,70,0.06) 0%, transparent 70%)',
            }}
          />
          <Phase1 scrollYProgress={scrollYProgress} />
          <Phase2 scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </>
  )
}
