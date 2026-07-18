'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'

const stats = [
  { value: '11+', label: 'Projects Shipped' },
  { value: '3+', label: 'Years Coding' },
  { value: '0.8s', label: 'Avg Load Time' },
  { value: '100%', label: 'Client Satisfaction' },
]

const columns = [
  {
    label: '// THE WHY',
    title: 'Why I Code',
    text: "I don't write code for the sake of code. I write it because it's the fastest way to turn an idea into something real. One person, one laptop, one weekend — and you can ship something that reaches thousands.",
  },
  {
    label: '// HOW I THINK',
    title: 'How I Think',
    text: "I obsess over the 3-second rule. If your page takes longer than that to load, you've already lost the customer. Every project I build starts with performance, not features.",
  },
  {
    label: '// BEYOND CODE',
    title: 'Beyond Code',
    text: "When I'm not coding, I'm exploring AI agent patterns, contributing to open source, or just walking through Amman thinking about the next build.",
  },
]

const milestones = [
  { year: '2023', text: 'First Code' },
  { year: '2024', text: 'MUBX Founded' },
  { year: '2025', text: '30+ Projects' },
  { year: '2026', text: 'Building MUBXAI' },
]

export default function About() {
  return (
    <section
      id="about"
      className="relative py-14 md:py-20 px-6 md:px-12"
      style={{ backgroundColor: '#0D0D0D' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 40% at 50% 0%, rgba(225,29,29,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        {/* Stats Bar */}
        <SectionWrapper>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/[0.06] mb-16 md:mb-24">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center px-4">
                <div className="text-4xl md:text-5xl font-black text-[#E11D1D] font-mono tracking-tight mb-2">
                  {stat.value}
                </div>
                <div className="text-[11px] font-mono text-[#9E9490] uppercase tracking-[0.15em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Section Header */}
        <SectionWrapper delay={0.1}>
          <div className="mb-12 md:mb-16">
            <div className="text-[10px] font-mono text-[#E11D1D] uppercase tracking-[0.2em] mb-4">
              // ABOUT ME
            </div>
            <h2 className="text-3xl md:text-5xl font-mono font-light tracking-tight text-[#EDE8E4] mb-4">
              The person behind
              <br />
              <span className="text-[#E11D1D]">the terminal.</span>
            </h2>
          </div>
        </SectionWrapper>

        {/* Three-Column Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-16 md:mb-24">
          {columns.map((col, i) => (
            <SectionWrapper key={col.title} delay={0.15 + i * 0.1}>
              <div>
                <div className="text-[10px] font-mono text-[#E11D1D] uppercase tracking-[0.2em] mb-4">
                  {col.label}
                </div>
                <h3 className="text-lg font-mono font-bold text-[#EDE8E4] mb-3">
                  {col.title}
                </h3>
                <p className="text-[#9E9490] text-sm leading-relaxed">
                  {col.text}
                </p>
              </div>
            </SectionWrapper>
          ))}
        </div>

        {/* Journey Timeline */}
        <SectionWrapper delay={0.4}>
          <div>
            <div className="text-[10px] font-mono text-[#E11D1D] uppercase tracking-[0.2em] mb-8">
              // JOURNEY
            </div>

            {/* Timeline line */}
            <div className="relative">
              {/* Horizontal line */}
              <div className="absolute top-[7px] left-0 right-0 h-px bg-white/[0.06]" />

              {/* Milestones */}
              <div className="grid grid-cols-4 gap-4">
                {milestones.map((m, i) => (
                  <div key={m.year} className="relative flex flex-col items-center text-center">
                    {/* Dot */}
                    <div className="w-[15px] h-[15px] rounded-full bg-[#E11D1D] border-2 border-[#0D0D0D] relative z-10 mb-4" />

                    {/* Year */}
                    <div className="text-sm font-mono font-bold text-[#E11D1D] mb-1">
                      {m.year}
                    </div>

                    {/* Label */}
                    <div className="text-[11px] font-mono text-[#9E9490] uppercase tracking-wider">
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  )
}
