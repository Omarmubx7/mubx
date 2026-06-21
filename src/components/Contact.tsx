'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'

const socials = [
  { label: 'GitHub', href: 'https://github.com/Omarmubx7' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/omarmubaidin' },
  { label: 'Instagram', href: 'https://www.instagram.com/mubx.dev' },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-14 md:py-20 px-6 md:px-12 overflow-hidden"
      style={{
        backgroundColor: '#0D0D0D',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 60%, rgba(230,57,70,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        <SectionWrapper>
          <div className="text-lg font-mono font-bold uppercase tracking-[0.15em] text-red mb-6">
            LET&rsquo;S WORK
          </div>
        </SectionWrapper>

        <SectionWrapper delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-mono font-light tracking-tight text-text-primary-dark mb-4">
            Have a project?
            <br />
            <motion.span
              className="text-red inline-block"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              Let&rsquo;s talk.
            </motion.span>
          </h2>
        </SectionWrapper>

        <SectionWrapper delay={0.2}>
          <p className="text-lg text-text-secondary-dark max-w-lg mb-8 leading-relaxed">
            I&rsquo;m open to internships, freelance work, and startup
            collaborations. Based in Amman, Jordan &mdash; open to remote work
            globally.
          </p>
        </SectionWrapper>

        <SectionWrapper delay={0.3}>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="https://calendly.com/omarmubaidincs/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-base font-mono font-bold text-white bg-red tracking-wider uppercase inline-block"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 40px rgba(230,57,70,0.4)',
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              Book a Call
            </motion.a>
            <motion.a
              href="mailto:omarmubaidincs@gmail.com"
              className="px-8 py-4 text-base font-mono font-bold tracking-wider uppercase inline-block"
              style={{
                color: '#EDE8E4',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
              whileHover={{
                scale: 1.05,
                borderColor: 'rgba(230,57,70,0.5)',
                color: '#E63946',
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              Send an Email
            </motion.a>
          </div>
        </SectionWrapper>

        <SectionWrapper delay={0.4}>
          <motion.div
            className="flex gap-8 mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono uppercase tracking-wider"
                style={{ color: '#9E9490' }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                whileHover={{ color: '#E63946', y: -2 }}
              >
                {social.label}
              </motion.a>
            ))}
          </motion.div>
        </SectionWrapper>
      </div>
    </section>
  )
}
