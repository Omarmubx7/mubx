'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function MobileGate() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  const isLinksPage = pathname?.includes('/links')

  useEffect(() => {
    setMounted(true)
    if (typeof window !== 'undefined') {
      const override = sessionStorage.getItem('mubx-mobile-override') === 'true'
      if (override) {
        setDismissed(true)
      }
    }
  }, [])

  const handleDismiss = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('mubx-mobile-override', 'true')
    }
    setDismissed(true)
  }

  if (isLinksPage || !mounted || dismissed) return null

  return (
    <div className="lg:hidden fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0D0D0D] px-8 text-center">
      {/* Animated border */}
      <div className="absolute inset-4 rounded-2xl border border-[#FF2E2E]/20 pointer-events-none" />

      {/* Logo */}
      <div className="relative w-20 h-20 mb-8">
        <Image
          src="/mubxnewlogo.png"
          alt="MUBX"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Desktop icon */}
      <div className="mb-6 text-[#FF2E2E]">
        <svg
          width="56"
          height="56"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      </div>

      <h1
        className="text-2xl font-bold mb-3 tracking-tight"
        style={{ fontFamily: 'var(--font-mono)', color: '#EDE8E4' }}
      >
        Desktop Experience
      </h1>
      <p
        className="text-sm leading-relaxed max-w-xs mb-8"
        style={{ fontFamily: 'var(--font-mono)', color: '#9E9490' }}
      >
        This portfolio is crafted for desktop screens.
        <br />
        For the best experience, please visit on a laptop or desktop.
      </p>

      {/* Continue button */}
      <button
        onClick={handleDismiss}
        className="px-6 py-3 bg-[#FF2E2E] hover:bg-[#D91F1F] text-white text-xs font-mono font-bold tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(255,46,46,0.2)] active:scale-95 cursor-pointer z-50"
      >
        Enter Light Version
      </button>

      <div className="mt-12 flex items-center gap-3">
        <span
          className="w-2 h-2 rounded-full bg-[#FF2E2E] animate-pulse"
          style={{ animationDuration: '2s' }}
        />
        <span
          className="text-xs tracking-widest uppercase"
          style={{ fontFamily: 'var(--font-mono)', color: '#6B625E' }}
        >
          mubx.dev
        </span>
      </div>
    </div>
  )
}
