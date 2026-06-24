'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function ScrollProgress() {
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [progress, setProgress] = useState(0)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    setMounted(true)
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setProgress(Math.round(latest * 100))
      setIsVisible(latest > 0.05)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!mounted) return null

  const radius = 24
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-red origin-left z-[300] pointer-events-none"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />

      <div
        className={`fixed bottom-8 right-8 z-50 flex items-center justify-center transition-all duration-500 ${
          isVisible
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-10 scale-75 pointer-events-none'
        }`}
      >
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-black/80 backdrop-blur-md border border-white/10 hover:border-red/40 transition-colors duration-300 group"
        >
          <svg className="absolute w-full h-full -rotate-90 p-[2px]" viewBox="0 0 60 60">
            <circle
              cx="30"
              cy="30"
              r={radius}
              className="stroke-white/10 fill-none"
              strokeWidth="3"
            />
            <motion.circle
              cx="30"
              cy="30"
              r={radius}
              className="stroke-red fill-none"
              strokeWidth="3"
              strokeDasharray={circumference}
              style={{ strokeDashoffset }}
              strokeLinecap="round"
            />
          </svg>

          <div className="relative w-5 h-5 overflow-hidden flex items-center justify-center">
            <ArrowUp className="w-5 h-5 text-white/70 group-hover:text-red group-hover:-translate-y-6 transition-all duration-300 absolute" />
            <ArrowUp className="w-5 h-5 text-red translate-y-6 group-hover:translate-y-0 transition-all duration-300 absolute" />
          </div>

          <div
            aria-hidden="true"
            className="absolute right-16 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 origin-right bg-black/90 border border-white/10 text-xs font-mono text-white px-2 py-1 rounded pointer-events-none"
          >
            {progress}%
          </div>
        </button>
      </div>
    </>
  )
}
