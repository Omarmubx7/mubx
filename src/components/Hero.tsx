'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
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
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex + 1))
        setCharIndex((prev) => prev + 1)
      }, 30)
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex - 1))
        setCharIndex((prev) => prev - 1)
      }, 15)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex])

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById('hero')
      if (!el) return
      const rect = el.getBoundingClientRect()
      const total = el.offsetHeight - window.innerHeight
      const scrolled = -rect.top
      setProgress(Math.max(0, Math.min(1, scrolled / total)))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const gO = Math.max(0, 1 - progress * 2.5)
  const gY = progress * 80
  const hO = Math.max(0, Math.min(1, (progress - 0.4) * 3))
  const hY = (1 - hO) * 60

  return (
    <section
      id="hero"
      style={{
        height: '200vh',
        background: '#0D0D0D',
        position: 'relative',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 40%, rgba(230,57,70,0.08) 0%, transparent 70%)',
        }}
      />

      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        {/* Greeting layer */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: gO,
            transform: `translateY(-${gY}px)`,
            zIndex: 20,
            pointerEvents: gO < 0.1 ? 'none' : 'auto',
          }}
        >
          <div
            style={{
              fontSize: 'clamp(1.5rem, 5vw, 3rem)',
              fontFamily: 'var(--font-jetbrains), monospace',
              fontWeight: 300,
              color: '#EDE8E4',
              marginBottom: 12,
              textAlign: 'center',
            }}
          >
            Hi, my name is
          </div>
          <div
            style={{
              fontSize: 'clamp(2rem, 7vw, 4.5rem)',
              fontFamily: 'var(--font-jetbrains), monospace',
              fontWeight: 700,
              color: '#E63946',
              textAlign: 'center',
            }}
          >
            Omar Mubaidin
          </div>

          <div
            style={{
              position: 'fixed',
              bottom: 32,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
              color: '#9E9490',
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: 12,
              letterSpacing: '0.1em',
              opacity: Math.max(0, 1 - progress * 3),
            }}
          >
            <span
              style={{
                fontSize: 20,
                lineHeight: 1,
                color: '#E63946',
                animation: 'loaderBounce 1.5s ease-in-out infinite',
              }}
            >
              ↓
            </span>
            scroll to enter
          </div>
        </div>

        {/* Hero content layer */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            opacity: hO,
            transform: `translateY(${hY}px)`,
            zIndex: 10,
            pointerEvents: hO < 0.5 ? 'none' : 'auto',
          }}
        >
          <div className="max-w-[1200px] mx-auto w-full px-6 md:px-12">
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 'clamp(2rem, 6vw, 4rem)',
              }}
              className="flex-col lg:flex-row"
            >
              {/* Left: text */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    fontSize: 14,
                    fontFamily: 'var(--font-jetbrains), monospace',
                    color: '#9E9490',
                    marginBottom: 24,
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: '#22c55e',
                      display: 'inline-block',
                    }}
                  />
                  Available for work &middot; Amman, Jordan
                </div>

                <div style={{ marginBottom: 16 }}>
                  <h1
                    style={{
                      fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                      fontFamily: 'var(--font-jetbrains), monospace',
                      fontWeight: 300,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.05,
                      color: '#EDE8E4',
                    }}
                  >
                    Omar Mubaidin.
                  </h1>
                  <p
                    style={{
                      fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                      fontFamily: 'var(--font-jetbrains), monospace',
                      fontWeight: 300,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.05,
                      color: '#EDE8E4',
                    }}
                  >
                    Web Dev &amp;
                  </p>
                  <p
                    style={{
                      fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                      fontFamily: 'var(--font-jetbrains), monospace',
                      fontWeight: 300,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.05,
                      color: '#E63946',
                    }}
                  >
                    AI Engineer.
                  </p>
                </div>

                <p
                  style={{
                    fontSize: 16,
                    color: '#9E9490',
                    maxWidth: 560,
                    lineHeight: 1.6,
                    fontFamily: 'var(--font-jetbrains), monospace',
                    marginBottom: 24,
                    minHeight: '1.5em',
                  }}
                >
                  {displayText}
                  <span
                    style={{
                      display: 'inline-block',
                      width: '0.6em',
                      height: '1.1em',
                      backgroundColor: '#E63946',
                      marginLeft: 4,
                      verticalAlign: 'middle',
                      animation: 'blink 1s step-end infinite',
                    }}
                  />
                </p>

                <div style={{ display: 'flex', gap: 16 }}>
                  <button
                    onClick={() => scrollTo('projects')}
                    style={{
                      padding: '16px 32px',
                      fontSize: 16,
                      fontFamily: 'var(--font-jetbrains), monospace',
                      fontWeight: 700,
                      color: '#fff',
                      backgroundColor: '#E63946',
                      border: 'none',
                      cursor: 'pointer',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 30px rgba(230,57,70,0.4)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    Explore Projects
                  </button>
                  <a
                    href="https://calendly.com/omarmubaidincs/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '16px 32px',
                      fontSize: 16,
                      fontFamily: 'var(--font-jetbrains), monospace',
                      fontWeight: 700,
                      color: '#EDE8E4',
                      border: '1px solid rgba(255,255,255,0.15)',
                      cursor: 'pointer',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      display: 'inline-block',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(230,57,70,0.6)'
                      e.currentTarget.style.color = '#E63946'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                      e.currentTarget.style.color = '#EDE8E4'
                    }}
                  >
                    Book a Call
                  </a>
                </div>
              </div>

              {/* Right: image */}
              <div style={{ flexShrink: 0 }}>
                <Image
                  src="/omarmub.webp"
                  alt="Omar Mubaidin"
                  width={432}
                  height={576}
                  priority
                  style={{
                    borderRadius: 24,
                    border: '1px solid rgba(230,57,70,0.3)',
                    boxShadow: '0 0 40px rgba(230,57,70,0.15)',
                    maxWidth: 'clamp(200px, 30vw, 432px)',
                    height: 'auto',
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Marquee at bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            borderTop: '1px solid rgba(255,255,255,0.04)',
            opacity: Math.max(0, Math.min(1, (progress - 0.6) * 4)),
          }}
        >
          <Marquee items={marqueeItems} />
        </div>
      </div>

      <style>{`
        @keyframes loaderBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}
