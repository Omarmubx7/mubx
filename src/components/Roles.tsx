'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'

const roles = [
  {
    title: 'AI & Automation',
    description:
      'Building chatbots, AI agents, LLM integrations, and AI-powered products like MUBXAI and MUBXbot. I turn AI capabilities into real, useful tools.',
    tags: ['Python', 'LLM APIs', 'AI Agents', 'OpenAI', 'Chatbots'],
    icon: 'AI',
  },
  {
    title: 'Web & Product',
    description:
      'Full-stack web and mobile products from concept to deployment. UI/UX design, backend architecture, databases, and everything in between.',
    tags: ['React', 'Next.js', 'TypeScript', 'Supabase', 'Android', 'REST APIs'],
    icon: 'Web',
  },
]

const iconMap: Record<string, string> = {
  AI: '>_',
  Web: '{/}',
}

export default function Roles() {
  return (
    <section
      id="about"
      className="relative py-14 md:py-20 px-6 md:px-12"
      style={{
        backgroundColor: '#0D0D0D',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 40% at 50% 60%, rgba(230,57,70,0.05) 0%, transparent 60%)',
        }}
      />
      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        <SectionWrapper>
          <div className="text-lg font-mono font-bold uppercase tracking-[0.15em] text-red mb-8">
            WHAT I DO
          </div>
        </SectionWrapper>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {roles.map((role, i) => (
            <SectionWrapper key={role.title} delay={0.1 + i * 0.15}>
              <motion.div
                className="p-6 md:p-8 space-y-4 h-full"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
                whileHover={{
                  background: 'rgba(255,255,255,0.04)',
                  borderColor: 'rgba(230,57,70,0.2)',
                  y: -4,
                }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-12 h-12 flex items-center justify-center text-base font-mono font-bold"
                    style={{
                      background: 'rgba(230,57,70,0.1)',
                      border: '1px solid rgba(230,57,70,0.2)',
                      color: '#E63946',
                    }}
                    whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.4 } }}
                  >
                    {iconMap[role.icon]}
                  </motion.div>
                  <div className="w-[2px] h-5 bg-red/60" />
                  <h3 className="text-xl md:text-2xl font-mono font-light text-text-primary-dark">
                    {role.title}
                  </h3>
                </div>
                <p className="text-lg text-text-secondary-dark leading-relaxed">
                  {role.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {role.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className="text-xs font-mono uppercase tracking-wider px-3 py-1.5 text-red cursor-default"
                      style={{ border: '1px solid rgba(230,57,70,0.15)' }}
                      whileHover={{ scale: 1.05, background: 'rgba(230,57,70,0.08)' }}
                      transition={{ duration: 0.2 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
