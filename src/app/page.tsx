import Navbar from '@/components/Navbar';
import Hero3DLaptop from '@/components/hero/Hero3DLaptop';
import MetricsStrip from '@/components/MetricsStrip';
import SkillTicker from '@/components/SkillTicker';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import BlogPreview from '@/components/BlogPreview';
import TechStack from '@/components/TechStack';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';
import { Metadata } from 'next';
import { siteConfig } from '@/config/seo';
import { Locale } from '@/lib/dictionaries';

type Props = {
  searchParams: { lang?: string }
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const lang = (searchParams.lang === 'ar' ? 'ar' : 'en') as Locale;
  const meta = siteConfig.metadata[lang];

  return {
    title: {
      absolute: meta.title,
    },
    description: meta.description,
    openGraph: {
      ...siteConfig.openGraph,
      title: meta.title,
      description: meta.description,
      locale: lang === 'ar' ? 'ar_QA' : 'en_US',
    },
    twitter: {
      ...siteConfig.twitter,
      title: meta.title,
      description: meta.description,
    }
  }
}

import { Suspense } from 'react';

export default function Home({ searchParams }: Props) {
  const lang = (searchParams.lang === 'ar' ? 'ar' : 'en') as Locale;

  return (
    <Suspense>
      <LanguageProvider initialLocale={lang}>
        <main className="relative flex flex-col min-h-screen">
          <Navbar />
          <Hero3DLaptop />
          <MetricsStrip />
          <SkillTicker />
          <Services />
          <Projects />
          <Testimonials />
          <About />
          <TechStack />
          <BlogPreview />
          <Contact />
          <Footer />
        </main>
      </LanguageProvider>
    </Suspense>
  );
}
