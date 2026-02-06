import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Omar Mubaidin | MUBX - Web Developer in Amman',
  description: 'Looking for a Web Developer in Amman? MUBX delivers high-performance websites and custom software. Expert in Next.js, React, and modern web design.',
  alternates: {
    canonical: 'https://mubx.dev',
  },
};

import Hero from '@/components/Hero';
import MetricsStrip from '@/components/MetricsStrip';
import SkillTicker from '@/components/SkillTicker';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import BlogPreview from '@/components/BlogPreview';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <MetricsStrip />
      <SkillTicker />
      <Services />
      <Projects />
      <Testimonials />
      <About />
      <BlogPreview />
      <Contact />
      <Footer />
    </main>
  );
}
