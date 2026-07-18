'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface BootLine {
  prompt?: boolean
  text: string
  color: string
  delay: number
  typeSpeed?: number
}

const BOOT_LINES: BootLine[] = [
  { prompt: true, text: 'boot --profile omar-mubaidin', color: '#EDE8E4', delay: 400, typeSpeed: 35 },
  { text: '[OK] Kernel loaded', color: '#22c55e', delay: 180 },
  { text: '[OK] Neural network initialized', color: '#22c55e', delay: 140 },
  { text: '[OK] 47 skills compiled', color: '#22c55e', delay: 140 },
  { text: '[OK] Full-stack modules ready', color: '#22c55e', delay: 140 },
  { text: '', color: '#EDE8E4', delay: 200 },
  { prompt: true, text: 'whoami', color: '#EDE8E4', delay: 300, typeSpeed: 40 },
  { text: 'Omar Mubaidin.', color: '#EDE8E4', delay: 80, typeSpeed: 45 },
  { text: 'Web Dev & AI Engineer.', color: '#E11D1D', delay: 60, typeSpeed: 45 },
  { text: '', color: '#EDE8E4', delay: 100 },
  { prompt: true, text: 'cat bio.txt', color: '#EDE8E4', delay: 250, typeSpeed: 35 },
  { text: 'I build AI-powered products and clean web experiences.', color: '#9E9490', delay: 80, typeSpeed: 20 },
  { text: '', color: '#EDE8E4', delay: 80 },
  { prompt: true, text: 'cat status.txt', color: '#EDE8E4', delay: 200, typeSpeed: 35 },
  { text: '> Available for hire', color: '#22c55e', delay: 100 },
  { text: '', color: '#EDE8E4', delay: 150 },
  { prompt: true, text: 'echo $ACTIONS', color: '#EDE8E4', delay: 200, typeSpeed: 30 },
]

export default function TerminalBoot() {
  const [visibleLines, setVisibleLines] = useState<number>(0)
  const [done, setDone] = useState(false)
  const [currentText, setCurrentText] = useState('')

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    let charTimeout: ReturnType<typeof setTimeout>
    let lineIndex = 0
    let cumulativeDelay = 0

    const scheduleLine = () => {
      if (lineIndex >= BOOT_LINES.length) {
        timeout = setTimeout(() => setDone(true), 600)
        return
      }

      const line = BOOT_LINES[lineIndex]
      cumulativeDelay += line.delay

      timeout = setTimeout(() => {
        if (line.prompt) {
          setCurrentText('')
          let charIdx = 0
          const typeChar = () => {
            if (charIdx <= line.text.length) {
              setCurrentText(line.text.slice(0, charIdx))
              charIdx++
              charTimeout = setTimeout(typeChar, line.typeSpeed ?? 30 + Math.random() * 25)
            } else {
              setVisibleLines((p) => p + 1)
              lineIndex++
              scheduleLine()
            }
          }
          typeChar()
        } else if (line.typeSpeed) {
          setCurrentText('')
          let charIdx = 0
          const typeChar = () => {
            if (charIdx <= line.text.length) {
              setCurrentText(line.text.slice(0, charIdx))
              charIdx++
              charTimeout = setTimeout(typeChar, line.typeSpeed)
            } else {
              setVisibleLines((p) => p + 1)
              lineIndex++
              scheduleLine()
            }
          }
          typeChar()
        } else {
          setCurrentText('')
          setVisibleLines((p) => p + 1)
          lineIndex++
          scheduleLine()
        }
      }, cumulativeDelay)
    }

    scheduleLine()

    return () => {
      clearTimeout(timeout)
      clearTimeout(charTimeout)
    }
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const displayedLines = BOOT_LINES.slice(0, visibleLines)
  const activeLine = visibleLines < BOOT_LINES.length ? BOOT_LINES[visibleLines] : null

  return (
    <div
      style={{
        fontFamily: 'var(--font-mono)',
        lineHeight: 1.6,
        width: '100%',
        fontSize: 'clamp(14px, 1.8vw, 22px)',
      }}
    >
      {/* Already typed lines */}
      <div>
        {displayedLines.map((line, i) => {
          if (!line.text && !line.prompt) return <div key={i} style={{ height: '0.5em' }} />
          return (
            <div
              key={i}
              style={{
                color: line.color,
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
              }}
            >
              {line.prompt && <span style={{ color: '#E11D1D' }}>$ </span>}
              {line.text}
            </div>
          )
        })}
      </div>

      {/* Active typing line */}
      {activeLine && (
        <div style={{ color: activeLine.color, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
          {activeLine.prompt && <span style={{ color: '#E11D1D' }}>$ </span>}
          {currentText}
          <span className="terminal-cursor" />
        </div>
      )}

      {/* Terminal actions — appear after boot completes */}
      {done && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 6 }}
        >
          <button
            onClick={() => scrollTo('projects')}
            style={{
              padding: 0,
              fontSize: 'inherit',
              fontFamily: 'var(--font-mono)',
              fontWeight: 400,
              color: '#9E9490',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              lineHeight: 1.6,
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#E11D1D'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#9E9490'
            }}
          >
            <span style={{ color: '#E11D1D' }}>$ </span>cd projects <span style={{ color: '#5A504C', fontSize: '0.85em' }}># explore my work</span>
          </button>
          <a
            href="https://calendly.com/omarmubaidincs/30min"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: 0,
              fontSize: 'inherit',
              fontFamily: 'var(--font-mono)',
              fontWeight: 400,
              color: '#9E9490',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              lineHeight: 1.6,
              textDecoration: 'none',
              display: 'block',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#E11D1D'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#9E9490'
            }}
          >
            <span style={{ color: '#E11D1D' }}>$ </span>book --call <span style={{ color: '#5A504C', fontSize: '0.85em' }}># let&apos;s talk</span>
          </a>
        </motion.div>
      )}
    </div>
  )
}
