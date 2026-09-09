'use client'

import Image from 'next/image'
import { stack } from '@/data/stack'
import { techLogos } from '@/data/techLogos'

export default function IconRail() {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-[#0D0D0D] to-transparent pointer-events-none md:w-32" />
      <div className="absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-[#0D0D0D] to-transparent pointer-events-none md:w-32" />
      <div className="flex w-full select-none overflow-hidden">
        <div
          className="flex shrink-0 animate-marquee items-center gap-2.5 will-change-transform md:gap-3"
          style={{ '--marquee-duration': '48s' } as React.CSSProperties}
        >
          {[...stack, ...stack].map((item, i) => (
            <RailIcon key={`${item.name}-${i}`} name={item.name} />
          ))}
        </div>
      </div>
    </div>
  )
}

function RailIcon({ name }: { name: string }) {
  const src = techLogos[name]
  return (
    <div className="group flex shrink-0 cursor-default flex-col items-center gap-1.5 rounded-lg border border-[rgba(255,255,255,0.07)] bg-white/[0.02] px-3 py-2.5 transition-colors duration-300 hover:border-[#FF2E2E]/40">
      <span className="relative h-7 w-7 md:h-8 md:w-8">
        {src && (
          <Image
            src={src}
            alt={name}
            fill
            className="object-contain grayscale-[0.4] transition-all duration-300 group-hover:grayscale-0"
            sizes="32px"
          />
        )}
      </span>
      <span className="whitespace-nowrap font-mono text-[9px] text-[#9E9490] transition-colors duration-300 group-hover:text-[#EDE8E4] md:text-[10px]">
        {name}
      </span>
    </div>
  )
}