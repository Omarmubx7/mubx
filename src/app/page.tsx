import Hero from '@/components/Hero'
import About from '@/components/About'
import dynamic from 'next/dynamic'
import Stack from '@/components/Stack'
import Now from '@/components/Now'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

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
      <Now />
      <Contact />
      <Footer />
    </>
  )
}
