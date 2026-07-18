'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import Marquee from '@/components/ui/Marquee'
import { useMouseTilt } from '@/lib/mouse-tilt'
import MatrixRain from '@/components/hero/MatrixRain'
import NeuralNetwork from '@/components/hero/NeuralNetwork'
import CrtBootOverlay from '@/components/hero/CrtBootOverlay'
import TerminalBoot from '@/components/hero/TerminalBoot'

const marqueeItems = [
  'WEB DEVELOPER',
  'AI ENGINEER',
  'SOLO DEV',
  'FULL-STACK',
  'HTU CS STUDENT',
  'EXPERIMENTER BUILDER',
  'MUBXAI',
  'MEN ONLY',
]

/* ─── ASCII Art from image via canvas ─── */
function useAsciiImage(src: string, columns: number = 80) {
  const [lines, setLines] = useState<{ text: string; colors: string[] }[]>([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const img = new window.Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')!
      const aspectRatio = img.height / img.width
      const charAspect = 0.55
      const rows = Math.floor(columns * aspectRatio * charAspect)
      canvas.width = columns
      canvas.height = rows
      ctx.drawImage(img, 0, 0, columns, rows)
      const imageData = ctx.getImageData(0, 0, columns, rows)
      const pixels = imageData.data
      const charSet = ' .,:;i1tfLCG08@'
      const result: { text: string; colors: string[] }[] = []
      for (let y = 0; y < rows; y++) {
        let text = ''
        const colors: string[] = []
        for (let x = 0; x < columns; x++) {
          const idx = (y * columns + x) * 4
          const r = pixels[idx]
          const g = pixels[idx + 1]
          const b = pixels[idx + 2]
          const brightness = (r + g + b) / 3
          const charIdx = Math.min(
            Math.floor((brightness / 255) * (charSet.length - 1)),
            charSet.length - 1
          )
          text += charSet[charIdx]
          colors.push(`rgb(${r},${g},${b})`)
        }
        result.push({ text, colors })
      }
      setLines(result)
      setLoaded(true)
    }
    img.src = src
  }, [src, columns])

  return { lines, loaded }
}

/* ─── ASCII Art Image ─── */
function AsciiPortrait({ src, opacity }: { src: string; opacity: any }) {
  const { lines, loaded } = useAsciiImage(src, 90)

  if (!loaded) return null

  return (
    <motion.div style={{ opacity }} className="ascii-container">
      {lines.map((line, i) => (
        <div key={i}>
          {line.text.split('').map((char, j) => (
            <span key={j} style={{ color: line.colors[j] }}>
              {char}
            </span>
          ))}
        </div>
      ))}
    </motion.div>
  )
}

/* ─── Scroll-driven hero content (only mounts after hydration) ─── */
function HeroScrollContent() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const tiltRef = useMouseTilt(3)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const gridY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3])
  const imageRealOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, 0, 1])
  const asciiOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.4], ['0%', '-8%'])

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{
        background: '#0D0D0D',
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* z-0: Matrix rain canvas */}
      <MatrixRain density={28} />

      {/* z-1: Neural network canvas */}
      <NeuralNetwork nodeCount={50} />

      {/* z-2: Animated grid */}
      <motion.div className="hero-grid" style={{ y: gridY }} />

      {/* z-3: Glow */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 80% 50% at 50% 40%, rgba(230,57,70,0.08) 0%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* z-10: Content with 3D tilt */}
      <motion.div
        style={{ y: contentY }}
        className="absolute inset-0 flex flex-col justify-center z-10"
      >
        <div className="max-w-[1200px] mx-auto w-full px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

            {/* Text side — tilt layer */}
            <div ref={tiltRef} className="hero-tilt-layer flex-1 min-w-0 w-full">
              <TerminalBoot />
            </div>

            {/* Image / ASCII side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
              className="flex-shrink-0 relative"
              style={{ width: 'clamp(200px, 25vw, 380px)', aspectRatio: '3/4' }}
            >
              {/* Real image — fades out on scroll, with VHS glitch */}
              <motion.div style={{ opacity: imageRealOpacity }} className="absolute inset-0">
                <div className="vhs-glitch" style={{ width: '100%', height: '100%' }}>
                  <Image
                    src="/omarmub.webp"
                    alt="Omar Mubaidin"
                    fill
                    priority
                    sizes="(max-width: 640px) 200px, (max-width: 1024px) 250px, 380px"
                    className="object-cover"
                    style={{
                      borderRadius: 24,
                      border: '1px solid rgba(225,29,29,0.3)',
                      boxShadow: '0 0 40px rgba(225,29,29,0.15)',
                    }}
                  />
                  {/* Chromatic aberration layers */}
                  <div
                    className="chromatic"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: 24,
                      border: '1px solid rgba(225,29,29,0.15)',
                      pointerEvents: 'none',
                    }}
                  />
                </div>
              </motion.div>

              {/* ASCII art — fades in on scroll */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <AsciiPortrait src="/omarmub.webp" opacity={asciiOpacity} />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* z-15/16: CRT effects (scan lines, vignette, VHS noise) */}
      <div className="scan-lines" />
      <CrtBootOverlay />

      {/* z-30: Bottom marquee */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          borderTop: '1px solid rgba(255,255,255,0.04)',
          zIndex: 30,
        }}
      >
        <Marquee items={marqueeItems} />
      </div>
    </section>
  )
}

/* ─── Fallback while JS hydrates (pure static HTML — no client components) ─── */
function HeroFallback() {
  return (
    <section
      id="hero"
      style={{
        background: '#0D0D0D',
        position: 'relative',
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: '100vh',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <div className="max-w-[1200px] mx-auto w-full px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="flex-1 min-w-0 w-full">
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(14px, 1.8vw, 22px)',
                  lineHeight: 1.6,
                  color: '#9E9490',
                }}
              >
                <div><span style={{ color: '#E11D1D' }}>$ </span>boot --profile omar-mubaidin</div>
                <div style={{ color: '#22c55e' }}>[OK] Kernel loaded</div>
                <div style={{ color: '#22c55e' }}>[OK] Neural network initialized</div>
                <div style={{ color: '#22c55e' }}>[OK] 47 skills compiled</div>
                <div style={{ color: '#22c55e' }}>[OK] Full-stack modules ready</div>
                <div style={{ height: '0.5em' }} />
                <div><span style={{ color: '#E11D1D' }}>$ </span>whoami</div>
                <div style={{ color: '#EDE8E4' }}>Omar Mubaidin.</div>
                <div style={{ color: '#E11D1D' }}>Web Dev &amp; AI Engineer.</div>
                <div style={{ height: '0.5em' }} />
                <div><span style={{ color: '#E11D1D' }}>$ </span>cat bio.txt</div>
                <div>I build AI-powered products and clean web experiences.</div>
                <div style={{ height: '0.5em' }} />
                <div><span style={{ color: '#E11D1D' }}>$ </span>cat status.txt</div>
                <div style={{ color: '#22c55e' }}>&gt; Available for hire</div>
                <div style={{ height: '0.5em' }} />
                <div><span style={{ color: '#E11D1D' }}>$ </span>cd projects <span style={{ color: '#5A504C', fontSize: '0.85em' }}># explore my work</span></div>
                <div><span style={{ color: '#E11D1D' }}>$ </span>book --call <span style={{ color: '#5A504C', fontSize: '0.85em' }}># let&apos;s talk</span></div>
              </div>
            </div>

            <div
              className="flex-shrink-0 relative"
              style={{
                width: 'clamp(200px, 25vw, 380px)',
                aspectRatio: '3/4',
                borderRadius: 24,
                border: '1px solid rgba(225,29,29,0.2)',
                background: 'rgba(225,29,29,0.03)',
              }}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          borderTop: '1px solid rgba(255,255,255,0.04)',
          zIndex: 30,
        }}
      >
        <Marquee items={marqueeItems} />
      </div>
    </section>
  )
}

/* ─── Main Hero ─── */
export default function Hero() {
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated) return <HeroFallback />
  return <HeroScrollContent />
}
