'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Marquee from '@/components/ui/Marquee'

const marqueeItems = [
  'WEB DEVELOPER',
  'AI ENGINEER',
  'SOLO DEV',
  'FULL-STACK',
  'HTU CS STUDENT',
  'EXPERIMENTAL BUILDER',
  'MUBXAI',
  'MEN ONLY',
]

const roles = [
  'I build AI-powered products and clean web experiences.',
  'From chatbots to full-stack apps — I ship things that work.',
  'Full-stack developer, AI engineer, and experimental builder.',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => { setDisplayText(currentRole.slice(0, charIndex + 1)); setCharIndex((p) => p + 1) }, 30)
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => { setDisplayText(currentRole.slice(0, charIndex - 1)); setCharIndex((p) => p - 1) }, 15)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setRoleIndex((p) => (p + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" style={{ background: '#0D0D0D', position: 'relative', minHeight: '100vh' }}>
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 40%, rgba(230,57,70,0.07) 0%, transparent 70%)' }}
      />

      {/* Hero content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100vh', position: 'relative', zIndex: 10 }}
      >
        <div className="max-w-[1200px] mx-auto w-full px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

            {/* Text */}
            <div className="flex-1 min-w-0 w-full">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontFamily: 'var(--font-mono)', color: '#9E9490', marginBottom: 24 }}
              >
                <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block', boxShadow: '0 0 8px rgba(34,197,94,0.5)' }} />
                Available for work &middot; Amman, Jordan
              </motion.div>

              <div style={{ marginBottom: 16 }}>
                {[
                  { text: 'Omar Mubaidin.', color: '#EDE8E4', delay: 0.35 },
                  { text: 'Web Dev &', color: '#EDE8E4', delay: 0.5 },
                  { text: 'AI Engineer.', color: '#E11D1D', delay: 0.65 },
                ].map(({ text, color, delay }) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
                    style={{ fontSize: 'clamp(2.2rem, 5vw, 5rem)', fontFamily: 'var(--font-mono)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.05, color }}
                  >
                    {text}
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.85 }}
                style={{ fontSize: 16, color: '#9E9490', maxWidth: 560, lineHeight: 1.6, fontFamily: 'var(--font-mono)', marginBottom: 24, minHeight: '1.5em' }}
              >
                {displayText}
                <span style={{ display: 'inline-block', width: '0.6em', height: '1.1em', backgroundColor: '#E11D1D', marginLeft: 4, verticalAlign: 'middle', animation: 'blink 1s step-end infinite' }} />
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.05 }}
                style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
              >
                <button
                  onClick={() => scrollTo('projects')}
                  style={{ padding: '16px 32px', fontSize: 16, fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#fff', backgroundColor: '#E11D1D', border: 'none', cursor: 'pointer', letterSpacing: '0.05em', textTransform: 'uppercase' }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 30px rgba(225,29,29,0.45)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none' }}
                >
                  Explore Projects
                </button>
                <a
                  href="https://calendly.com/omarmubaidincs/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: '16px 32px', fontSize: 16, fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#EDE8E4', border: '1px solid rgba(255,255,255,0.15)', cursor: 'pointer', letterSpacing: '0.05em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(225,29,29,0.6)'; e.currentTarget.style.color = '#E11D1D' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = '#EDE8E4' }}
                >
                  Book a Call
                </a>
              </motion.div>
            </div>

            {/* Profile image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="flex-shrink-0 relative w-[120px] sm:w-[160px] md:w-[200px] lg:w-[300px] xl:w-[380px] aspect-[3/4]"
            >
              <Image
                src="/omarmub.webp"
                alt="Omar Mubaidin"
                fill
                priority
                sizes="(max-width: 640px) 120px, (max-width: 768px) 160px, (max-width: 1024px) 200px, 380px"
                className="object-cover"
                style={{ borderRadius: 24, border: '1px solid rgba(225,29,29,0.3)', boxShadow: '0 0 40px rgba(225,29,29,0.15)' }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom marquee */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <Marquee items={marqueeItems} />
      </div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
    </section>
  )
}
