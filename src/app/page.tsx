import Hero from '@/components/Hero'
import About from '@/components/About'
import dynamic from 'next/dynamic'
import Stack from '@/components/Stack'
import Contact from '@/components/Contact'

const ProjectShowcase = dynamic(() => import('@/components/ProjectShowcase'), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />,
})

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProjectShowcase />
      <Stack />
      <Contact />
    </>
  )
}
