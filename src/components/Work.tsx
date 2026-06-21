'use client'

import { useRef, useState, useCallback } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Tag from '@/components/ui/Tag'
import { projects } from '@/data/projects'

const techIcons: Record<string, string> = {
  'Next.js': '/techstackicons/next-dot-js-svgrepo-com.svg',
  'React': '/techstackicons/react-svgrepo-com.svg',
  'Tailwind': '/techstackicons/tailwindcss-icon-svgrepo-com.svg',
  'Framer Motion': '',
  'TypeScript': '/techstackicons/typescript-icon-svgrepo-com.svg',
  'OpenAI': '',
  'Node.js': '/techstackicons/nodejs-icon-svgrepo-com.svg',
  'E-commerce': '',
  'UX': '',
  'PHP': '',
  'MySQL': '',
  'Bootstrap': '/techstackicons/Bootstrap.svg',
}

function TechIcon({ name }: { name: string }) {
  const iconPath = techIcons[name]
  if (!iconPath) return null

  return (
    <motion.img
      src={iconPath}
      alt={name}
      className="inline-block w-5 h-5 object-contain"
      style={{ filter: 'grayscale(0.2) brightness(0.7)' }}
      whileHover={{ scale: 1.4, rotate: [0, -10, 10, 0] }}
      transition={{ duration: 0.3 }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.filter = 'grayscale(0) brightness(1)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.filter = 'grayscale(0.2) brightness(0.7)'
      }}
    />
  )
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [showScreenshot, setShowScreenshot] = useState(false)
  const isHoveredRef = useRef(false)
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)

  const rotateX = useSpring(y, { stiffness: 300, damping: 30 })
  const rotateY = useSpring(x, { stiffness: 300, damping: 30 })

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    x.set(px)
    y.set(py)
    setMousePos({ x: e.clientX, y: e.clientY })
  }, [x, y])

  const handleMouseEnter = useCallback(() => {
    isHoveredRef.current = true
    hoverTimeout.current = setTimeout(() => setShowScreenshot(true), 200)
  }, [])

  const handleMouseLeave = useCallback(() => {
    x.set(0.5)
    y.set(0.5)
    isHoveredRef.current = false
    setShowScreenshot(false)
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
  }, [x, y])

  return (
    <SectionWrapper delay={index * 0.08}>
      <motion.a
        ref={ref}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block relative"
        style={{
          perspective: 1000,
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
              className="relative p-8 md:p-10 flex flex-col md:flex-row md:items-start md:justify-between gap-6"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderBottom: index < projects.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-soft to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          <div className="flex items-start gap-6 relative z-10 flex-1">
            <motion.span
              className="text-3xl md:text-4xl font-mono font-light leading-none shrink-0"
              style={{ color: '#E63946' }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
            >
              {String(project.index).padStart(2, '0')}
            </motion.span>
            <div className="space-y-3 flex-1 min-w-0">
              <div className="flex items-start gap-4">
                <div className="min-w-0">
                  <h3 className="text-xl md:text-2xl font-mono font-medium text-text-primary-dark group-hover:text-red transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-base text-text-secondary-dark leading-relaxed max-w-xl mt-1">
                    {project.longDescription}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <div className="flex flex-wrap gap-1.5">
                  {project.category.map((cat) => (
                    <Tag key={cat}>{cat}</Tag>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-mono text-text-secondary-dark">
                  {project.stack.map((tech) => (
                    <span key={tech} className="inline-flex items-center gap-1">
                      <TechIcon name={tech} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2 shrink-0 relative z-10">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-text-secondary-dark">
              <span>{project.metrics}</span>
              <span className="w-[1px] h-3 bg-border-dark" />
              <span>{project.timeframe}</span>
            </div>
            <motion.span
              className="text-sm font-mono text-red flex items-center gap-1"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              View project
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                &rarr;
              </motion.span>
            </motion.span>
          </div>
        </div>
      </motion.a>

      <AnimatePresence>
        {showScreenshot && project.screenshot && (
          <motion.div
            className="fixed z-50 pointer-events-none hidden md:block"
            style={{
              left: mousePos.x + 20,
              top: mousePos.y - 90,
            }}
            initial={{ opacity: 0, scale: 0.92, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 5 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="relative overflow-hidden"
              style={{
                width: 480,
                height: 300,
                borderRadius: 6,
                boxShadow: '0 16px 56px rgba(0,0,0,0.18), 0 4px 20px rgba(0,0,0,0.1)',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              <Image
                src={project.screenshot}
                alt={`${project.name} screenshot`}
                fill
                className="object-cover"
                sizes="480px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-2.5 bg-gradient-to-t from-black/40 to-transparent">
                  <span className="text-xs font-mono text-white/80">
                  {project.name}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  )
}

export default function Work() {
  return (
    <section
      id="projects"
      className="relative py-14 md:py-20 px-6 md:px-12"
      style={{
        backgroundColor: '#0D0D0D',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 35% at 50% 0%, rgba(230,57,70,0.03) 0%, transparent 60%)',
        }}
      />
      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        <SectionWrapper>
          <div className="text-lg font-mono font-bold uppercase tracking-[0.15em] text-red mb-12">
            WORK
          </div>
        </SectionWrapper>

        <div className="relative">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
