'use client';

import { Suspense, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MetricsStrip from '@/components/MetricsStrip';
import SkillTicker from '@/components/SkillTicker';
import { LanguageProvider } from '@/context/LanguageContext';
import { Locale } from '@/lib/dictionaries';

// Performance optimized dynamic imports for below-the-fold content
const Services = dynamic(() => import('@/components/Services'), {
    loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />,
});
const Projects = dynamic(() => import('@/components/Projects'), {
    loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />,
});
const Testimonials = dynamic(() => import('@/components/Testimonials'), {
    loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />,
});
const About = dynamic(() => import('@/components/About'), {
    loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />,
});
const TechStack = dynamic(() => import('@/components/TechStack'), {
    loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />,
});
const Timeline = dynamic(() => import('@/components/Timeline'), {
    loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />,
});
const BlogPreview = dynamic(() => import('@/components/BlogPreview'), {
    loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />,
});
const Contact = dynamic(() => import('@/components/Contact'), {
    loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />,
});
const Footer = dynamic(() => import('@/components/Footer'), {
    loading: () => <div className="h-80 w-full animate-pulse bg-muted/20" />,
});

const StarsCanvas = dynamic(() => import('@/components/canvas/Stars'));
const CanvasCursor = dynamic(() => import('@/components/canvas/CanvasCursor'));

export default function HomeClient({ lang }: { lang: Locale }) {
    const [showCanvas, setShowCanvas] = useState(false);

    useEffect(() => {
        // Load heavy canvases quickly after initial paint to avoid blocking First Contentful Paint
        // but not so late that it spikes TBT during PageSpeed measurement.
        const timer = setTimeout(() => setShowCanvas(true), 100);
        return () => clearTimeout(timer);
    }, []);


    return (
        <LanguageProvider initialLocale={lang}>
            <main className="relative flex flex-col min-h-screen">
                {showCanvas && <CanvasCursor />}
                {showCanvas && <StarsCanvas />}
                <Navbar />
                <Hero />
                <MetricsStrip />
                <SkillTicker />
                <Suspense fallback={null}>
                    <Services />
                    <Projects />
                    <Testimonials />
                    <About />
                    <TechStack />
                    <Timeline />
                    <BlogPreview />
                    <Contact />
                    <Footer />
                </Suspense>
            </main>
        </LanguageProvider>
    );
}
