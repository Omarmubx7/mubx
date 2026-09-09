'use client'

import Image from 'next/image'
import { Calendar, Download } from 'lucide-react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

const EASE = [0.16, 1, 0.3, 1] as const

const BRANCHES = [
  { word: 'build', side: 'left' },
  { word: 'automate', side: 'right' },
  { word: 'improve', side: 'left' },
] as const

const BASE_DELAY = 0.48
const STEP = 0.18

const FLASH_OFF = '0 0 0px rgba(255,46,46,0)'

const rootGlyph: Variants = {
  hidden: { opacity: 0, scale: 0.75 },
  show: {
    opacity: [0, 1, 1],
    scale: [0.75, 1.06, 1],
    textShadow: [FLASH_OFF, '0 0 30px rgba(255,46,46,0.55)', '0 0 18px rgba(255,46,46,0.25)'],
    transition: { duration: 0.6, times: [0, 0.55, 1], ease: EASE },
  },
}

const vLine = (delay: number): Variants => ({
  hidden: { scaleY: 0 },
  show: {
    scaleY: 1,
    transition: { duration: 0.45, delay, ease: EASE },
  },
})

const dot: Variants = {
  hidden: { scale: 0 },
  show: (i: number) => ({
    scale: [0, 1.35, 1],
    transition: { duration: 0.45, delay: BASE_DELAY + STEP * i, ease: EASE },
  }),
}

const elbow = (i: number): Variants => ({
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.38, delay: BASE_DELAY + STEP * i + 0.07, ease: EASE },
  },
})

const word: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  show: (i: number) => ({
    opacity: [0, 1, 1],
    scale: [0.6, 1.1, 1],
    textShadow: [FLASH_OFF, '0 0 22px rgba(255,46,46,0.4)', FLASH_OFF],
    transition: { duration: 0.55, delay: BASE_DELAY + STEP * i + 0.13, times: [0, 0.55, 1], ease: EASE },
  }),
}

const endDot: Variants = {
  hidden: { scale: 0 },
  show: {
    scale: [0, 1.4, 1],
    transition: { duration: 0.45, delay: 1.23, ease: EASE },
  },
}

const endText: Variants = {
  hidden: { opacity: 0, scale: 0.7 },
  show: {
    opacity: [0, 1, 1],
    scale: [0.7, 1.08, 1],
    textShadow: [FLASH_OFF, '0 0 45px rgba(255,46,46,0.75)', '0 0 35px rgba(255,46,46,0.35)'],
    transition: { duration: 0.6, delay: 1.3, times: [0, 0.55, 1], ease: EASE },
  },
}

export default function Hero() {
  const { t } = useLanguage()
  const rm = useReducedMotion()

  return (
    <section
      id="hero"
      className="relative min-h-dvh flex items-center overflow-hidden bg-bg-dark"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 py-24 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
        {/* Text Column */}
        <div className="order-2 lg:order-1">
          {/* Name */}
          <p className="font-mono text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-muted mb-6 md:mb-8">
            Omar Mubaidin
          </p>

          {/* Vertical git-graph tree: I -> build / automate / improve -> your systems */}
          <h1
            aria-label="I build, automate and improve your systems."
            className="font-mono"
          >
            <motion.span
              className="block"
              initial={rm ? false : 'hidden'}
              animate="show"
            >
              {/* Root */}
              <span className="flex flex-col items-center">
                <motion.span
                  variants={rootGlyph}
                  className={`block text-4xl md:text-5xl xl:text-6xl font-black leading-none text-neon ${
                    rm ? '[text-shadow:0_0_18px_rgba(255,46,46,0.25)]' : ''
                  }`}
                >
                  I
                </motion.span>
                <motion.span
                  aria-hidden="true"
                  variants={vLine(0.3)}
                  style={{ transformOrigin: 'top' }}
                  className="mt-1 h-5 w-px bg-foreground/25 md:h-6"
                />
              </span>

              {/* Branches */}
              {BRANCHES.map((branch, i) => (
                <div
                  key={branch.word}
                  className="relative grid h-11 grid-cols-[1fr_auto_1fr] items-center md:h-14"
                >
                  {/* Spine segment (chains every row through the center axis) */}
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-foreground/25"
                  />

                  {branch.side === 'left' ? (
                    <>
                      <div className="flex items-center justify-end">
                        <motion.span
                          variants={word}
                          custom={i}
                          className="text-2xl font-bold tracking-tight text-foreground md:text-3xl xl:text-4xl"
                        >
                          {branch.word}
                        </motion.span>
                        <motion.span
                          aria-hidden="true"
                          variants={elbow(i)}
                          style={{ transformOrigin: 'right' }}
                          className="ml-3 h-px w-8 bg-foreground/25 md:w-12"
                        />
                      </div>
                      <div className="relative z-10 flex w-2.5 items-center justify-center md:w-3">
                        <motion.span
                          aria-hidden="true"
                          variants={dot}
                          custom={i}
                          className="h-2 w-2 rounded-full bg-neon ring-2 ring-bg-dark md:h-2.5 md:w-2.5"
                        />
                      </div>
                      <div aria-hidden="true" />
                    </>
                  ) : (
                    <>
                      <div aria-hidden="true" />
                      <div className="relative z-10 flex w-2.5 items-center justify-center md:w-3">
                        <motion.span
                          aria-hidden="true"
                          variants={dot}
                          custom={i}
                          className="h-2 w-2 rounded-full bg-neon ring-2 ring-bg-dark md:h-2.5 md:w-2.5"
                        />
                      </div>
                      <div className="flex items-center justify-start">
                        <motion.span
                          aria-hidden="true"
                          variants={elbow(i)}
                          style={{ transformOrigin: 'left' }}
                          className="mr-3 h-px w-8 bg-foreground/25 md:w-12"
                        />
                        <motion.span
                          variants={word}
                          custom={i}
                          className="text-2xl font-bold tracking-tight text-foreground md:text-3xl xl:text-4xl"
                        >
                          {branch.word}
                        </motion.span>
                      </div>
                    </>
                  )}
                </div>
              ))}

              {/* End of the tree */}
              <span className="flex flex-col items-center">
                <motion.span
                  aria-hidden="true"
                  variants={vLine(1.15)}
                  style={{ transformOrigin: 'top' }}
                  className="h-5 w-px bg-foreground/25 md:h-6"
                />
                <motion.span
                  aria-hidden="true"
                  variants={endDot}
                  className={`mt-1.5 h-2.5 w-2.5 rounded-full bg-neon ring-2 ring-bg-dark md:h-3 md:w-3 ${
                    rm ? '' : 'animate-glow-pulse'
                  }`}
                  style={rm ? undefined : { animationDelay: '1.8s' }}
                />
                <motion.span
                  variants={endText}
                  className="mt-2 block text-3xl font-black tracking-tight md:text-4xl xl:text-5xl"
                >
                  <span className="text-foreground">your&nbsp;</span>
                  {rm ? (
                    <span className="text-neon [text-shadow:0_0_35px_rgba(255,46,46,0.35)]">
                      systems
                    </span>
                  ) : (
                    <motion.span
                      className="text-neon"
                      animate={{
                        textShadow: [
                          '0 0 30px rgba(255,46,46,0.30)',
                          '0 0 45px rgba(255,46,46,0.50)',
                          '0 0 30px rgba(255,46,46,0.30)',
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 2,
                      }}
                    >
                      systems
                    </motion.span>
                  )}
                </motion.span>
              </span>
            </motion.span>
          </h1>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="https://calendly.com/omarmubaidincs/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-neon text-white text-xs font-bold uppercase tracking-wider font-mono transition-all hover:bg-[#D91F1F] hover:shadow-[0_0_25px_rgba(255,46,46,0.4)] shadow-[0_0_15px_rgba(255,46,46,0.25)]"
            >
              <Calendar className="w-4 h-4" />
              {t.nav.bookCall}
            </a>
            <a
              href="/cv.pdf"
              download="Omar-Mubaidin-Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider font-mono border border-neon/40 bg-neon/5 text-neon hover:bg-neon hover:text-white transition-all"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Photo Column */}
        <div className="order-1 lg:order-2 relative w-full max-w-md mx-auto aspect-[4/5]">
          {/* Glow behind photo */}
          <div className="absolute -inset-4 bg-neon/10 blur-3xl" aria-hidden="true" />

          <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(255,46,46,0.15)]">
            <Image
              src="/omarmub.webp"
              alt={t.hero.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            {/* Name plate */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 pt-16">
              <p className="font-mono text-sm font-bold text-white uppercase tracking-wider">
                Omar Mubaidin
              </p>
              <p className="font-mono text-[10px] text-neon uppercase tracking-[0.15em] mt-0.5">
                Full-Stack Developer &amp; AI Engineer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
