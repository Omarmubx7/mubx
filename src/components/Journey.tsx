'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { timeline } from '@/data/timeline'

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative py-14 md:py-20 px-6 md:px-12"
      style={{
        backgroundColor: '#0D0D0D',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 30% at 50% 100%, rgba(230,57,70,0.03) 0%, transparent 60%)',
        }}
      />
      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        <SectionWrapper>
          <div className="text-lg font-mono font-bold uppercase tracking-[0.15em] text-red mb-12">
            MY PATH TO FULL-STACK DEVELOPMENT
          </div>
        </SectionWrapper>

        <div className="relative">
          <motion.div
            className="absolute left-[7px] top-2 bottom-2 w-[1px]"
            style={{ background: 'linear-gradient(180deg, #E63946, rgba(230,57,70,0.2))' }}
          />

          <div className="space-y-8">
            {timeline.map((entry, i) => (
              <SectionWrapper key={entry.title} delay={i * 0.1}>
                <motion.div
                  className="flex gap-6 group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex flex-col items-center shrink-0">
                    <motion.div
                      className="w-[15px] h-[15px] rounded-full relative z-10"
                      style={{
                        background: '#E63946',
                        border: '2px solid #E63946',
                      }}
                      whileHover={{ scale: 1.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                  <div className="pb-2 flex-1">
                    <div className="text-sm font-mono uppercase tracking-wider text-red mb-1">
                      {entry.year}
                    </div>
                    <h3 className="text-lg md:text-xl font-mono font-medium text-text-primary-dark mb-1 group-hover:text-red transition-colors duration-200">
                      {entry.title}
                    </h3>
                    <motion.p
                      className="text-lg text-text-secondary-dark leading-relaxed max-w-xl"
                    >
                      {entry.description}
                    </motion.p>
                  </div>
                </motion.div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
