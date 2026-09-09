'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, GithubIcon, InstagramIcon, LinkedinIcon } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import IconRail from '@/components/ui/IconRail'

const CALENDLY = 'https://calendly.com/omarmubaidincs/30min'
const EMAIL = 'mailto:omarmubaidincs@gmail.com'

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/Omarmubx7',
    Icon: GithubIcon,
    hover: 'hover:text-[#EDE8E4]',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/omarmubaidin',
    Icon: LinkedinIcon,
    hover: 'hover:text-[#0A66C2]',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/mubx.dev',
    Icon: InstagramIcon,
    hover: 'hover:text-[#E1306C]',
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 py-16 md:px-12 md:py-24 overflow-hidden"
      style={{
        backgroundColor: '#0D0D0D',
      }}
    >
      <div className="mx-auto w-full max-w-[1200px] relative z-10">
        {/* Sliding icon rail — the finale bar */}
        <SectionWrapper>
          <IconRail />
        </SectionWrapper>

        {/* Headline + primary CTA */}
        <SectionWrapper delay={0.05}>
          <div className="mt-14 text-center md:mt-20">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF2E2E] md:text-xs">
              {'// LET\u2019S BUILD'}
            </span>
            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-[#EDE8E4] md:text-6xl">
              Let&rsquo;s build something{' '}
              <motion.span
                className="inline-block text-[#FF2E2E] [text-shadow:0_0_30px_rgba(255,46,46,0.35)]"
                animate={{ opacity: [1, 0.75, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                together.
              </motion.span>
            </h2>

            <motion.a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center justify-center gap-3 rounded-md bg-[#FF2E2E] px-10 py-5 font-mono text-sm font-black uppercase tracking-wider text-white shadow-[0_0_20px_rgba(255,46,46,0.3)] transition-colors hover:bg-[#D91F1F] hover:shadow-[0_0_35px_rgba(255,46,46,0.5)] md:px-14 md:py-6 md:text-base"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Start a project
              <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6" />
            </motion.a>
          </div>
        </SectionWrapper>

        {/* Quick actions */}
        <SectionWrapper delay={0.1}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FF2E2E] px-8 py-4 font-mono text-base font-bold uppercase tracking-wider text-white"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 40px rgba(255,46,46,0.4)',
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              Book a Call
            </motion.a>
            <motion.a
              href={EMAIL}
              className="inline-block font-mono text-base font-bold uppercase tracking-wider"
              style={{
                color: '#EDE8E4',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
              whileHover={{
                scale: 1.05,
                borderColor: 'rgba(255,46,46,0.5)',
                color: '#FF2E2E',
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              Send an Email
            </motion.a>
          </div>
        </SectionWrapper>

        {/* Socials */}
        <SectionWrapper delay={0.15}>
          <motion.div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-9">
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-[#9E9490] transition-colors duration-300 hover:-translate-y-0.5 ${social.hover}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <social.Icon className="h-4 w-4" />
                {social.label}
              </motion.a>
            ))}
          </motion.div>
        </SectionWrapper>

        {/* Footer line */}
        <SectionWrapper delay={0.1}>
          <div
            className="mt-16 flex flex-col items-center justify-between gap-2 border-t py-6 md:flex-row"
            style={{ borderColor: 'rgba(255,255,255,0.04)' }}
          >
            <span className="font-mono text-[11px]" style={{ color: '#6B625E' }}>
              © 2026 Omar Mubaidin
            </span>
            <span className="font-mono text-[11px] text-center" style={{ color: '#6B625E' }}>
              Designed &amp; built by Omar · mubx.dev
            </span>
            <span className="font-mono text-[11px]" style={{ color: '#FF2E2E' }}>
              <motion.span
                className="inline-block"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                $
              </motion.span>
              {' '}omar --version 2026
            </span>
          </div>
        </SectionWrapper>
      </div>
    </section>
  )
}