'use client'

import Image from 'next/image'
import { Calendar, Download } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="hero"
      className="relative min-h-dvh flex items-center overflow-hidden bg-bg-dark"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 15% 30%, rgba(225,29,29,0.05) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 90% 70%, rgba(225,29,29,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 py-24 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
        {/* Text Column */}
        <div className="order-2 lg:order-1">
          {/* Name */}
          <p className="font-mono text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-muted mb-4">
            Omar Mubaidin
          </p>

          {/* Three headlines */}
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-black leading-[1.1] tracking-tight text-foreground">
            <span className="block">I build high-performance web systems &amp; AI-powered products.</span>
            <span className="block text-neon mt-2">Full-Stack Developer &amp; AI Engineer.</span>
            <span className="block text-2xl md:text-3xl xl:text-4xl font-bold text-muted mt-4">
              Custom e-commerce, landing pages &amp; web systems that grow your business.
            </span>
          </h1>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="https://calendly.com/omarmubaidincs/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-neon text-white text-xs font-bold uppercase tracking-wider font-mono transition-all hover:bg-[#B91616] hover:shadow-[0_0_25px_rgba(255,30,30,0.4)] shadow-[0_0_15px_rgba(255,30,30,0.25)]"
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

          <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(225,29,29,0.15)]">
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
