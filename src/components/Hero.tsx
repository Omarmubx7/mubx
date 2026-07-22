'use client'

import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Marquee from '@/components/ui/Marquee'

gsap.registerPlugin(ScrollTrigger)

const marqueeItems = [
  'WEB DEVELOPER',
  'AI ENGINEER',
  'SOLO DEV',
  'FULL-STACK',
  'HTU CS STUDENT',
  'EXPERIMENTER BUILDER',
  'MUBXAI',
]

/* ─── Reveal wrapper: overflow-hidden + translateY animation ─── */
function Reveal({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden ${className ?? ''}`}>
      <div className="reveal-inner">{children}</div>
    </div>
  )
}

/* ─── Fallback while JS hydrates ─── */
function HeroFallback() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-bg-dark"
    >
      <div className="text-center px-6">
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 'clamp(10px, 1vw, 12px)',
            fontWeight: 500,
            color: '#E11D1D',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          Where Things Get Built
        </p>
        <h1
          className="uppercase mt-3"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(72px, 18vw, 200px)',
            fontWeight: 400,
            color: '#EDE8E4',
            letterSpacing: '-0.04em',
            lineHeight: 0.85,
          }}
        >
          MUBX
        </h1>
      </div>
    </section>
  )
}

/* ─── Main Hero ─── */
export default function Hero() {
  const [hydrated, setHydrated] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated || !sectionRef.current || !pinRef.current) return

    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const reveals = gsap.utils.toArray<HTMLElement>('.reveal-inner', pinRef.current)

        gsap.set(reveals, { opacity: 0, yPercent: 100 })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.5,
          },
        })

        /* Phase 1: Name (0–30%) */
        tl.to(reveals[0], { opacity: 1, yPercent: 0, duration: 0.3, ease: 'power3.out' }, 0)

        /* Phase 2: Role (20–45%) */
        if (reveals[1]) {
          tl.to(reveals[1], { opacity: 1, yPercent: 0, duration: 0.25, ease: 'power3.out' }, 0.2)
        }

        /* Phase 3: Definition (35–55%) */
        if (reveals[2]) {
          tl.to(reveals[2], { opacity: 1, yPercent: 0, duration: 0.2, ease: 'power2.out' }, 0.35)
        }

        /* Phase 4: Body (50–70%) */
        if (reveals[3]) {
          tl.to(reveals[3], { opacity: 1, yPercent: 0, duration: 0.2, ease: 'power2.out' }, 0.5)
        }

        /* Phase 5: CTA (65–80%) */
        if (reveals[4]) {
          tl.to(reveals[4], { opacity: 1, yPercent: 0, duration: 0.15, ease: 'power2.out' }, 0.65)
        }
      }, sectionRef)

      return () => ctx.revert()
    }, 100)

    return () => clearTimeout(timer)
  }, [hydrated])

  if (!hydrated) return <HeroFallback />

  return (
    <>
      <section ref={sectionRef} className="relative h-[250vh] bg-bg-dark">
        <div
          ref={pinRef}
          className="sticky top-0 h-dvh w-full flex items-center justify-center"
        >
          <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 text-center max-w-2xl mx-auto">
            {/* Tagline */}
            <Reveal>
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 'clamp(10px, 1vw, 12px)',
                  fontWeight: 500,
                  color: '#E11D1D',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                Where Things Get Built
              </p>
            </Reveal>

            {/* Name */}
            <Reveal className="mt-3">
              <h1
                className="uppercase"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(64px, 14vw, 180px)',
                  fontWeight: 400,
                  color: '#EDE8E4',
                  letterSpacing: '-0.04em',
                  lineHeight: 0.85,
                }}
              >
                MUBX
              </h1>
            </Reveal>

            {/* Definition */}
            <Reveal className="mt-10">
              <div className="space-y-2">
                <p
                  className="uppercase text-text-secondary-dark"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 'clamp(10px, 1vw, 12px)',
                    letterSpacing: '0.1em',
                  }}
                >
                  [ MUBX ], noun
                </p>
                <ol
                  className="list-decimal pl-4 space-y-1 text-left inline-block"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 'clamp(10px, 1vw, 12px)',
                    color: '#9E9490',
                    letterSpacing: '0.02em',
                  }}
                >
                  <li>The Perfection Behind Every Build.</li>
                  <li>A Studio Engineering Ideas into Reality.</li>
                </ol>
              </div>
            </Reveal>

            {/* Body */}
            <Reveal className="mt-8">
              <p
                className="text-text-secondary-dark leading-relaxed mx-auto max-w-md"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(13px, 1.2vw, 15px)',
                }}
              >
                you&apos;ve got a product that needs to be fast, polished, and
                built to last. we get it there — design, engineering, and system
                thinking working together so you ship with confidence, not
                compromise.
              </p>
            </Reveal>

            {/* CTA */}
            <Reveal className="mt-8">
              <a
                href="https://calendly.com/omarmubaidincs/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-neon text-white transition-all hover:bg-[#B91616] hover:shadow-[0_0_25px_rgba(255,30,30,0.4)]"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 'clamp(10px, 1vw, 12px)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                Let&apos;s Talk
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Marquee — outside pinned area, scrolls in naturally */}
      <div
        className="relative z-30 bg-bg-dark"
        style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
      >
        <Marquee items={marqueeItems} />
      </div>
    </>
  )
}
