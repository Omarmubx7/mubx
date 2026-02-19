'use client';

import { Suspense, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { LanguageProvider } from '@/context/LanguageContext';
import { Locale } from '@/lib/dictionaries';

const MetricsStrip = dynamic(() => import('@/components/MetricsStrip'), {
    loading: () => <div className="h-32 w-full animate-pulse bg-muted/20" />,
});
const SkillTicker = dynamic(() => import('@/components/SkillTicker'), {
    loading: () => <div className="h-40 w-full animate-pulse bg-muted/20" />,
});
const TrustedBy = dynamic(() => import('@/components/TrustedBy'), {
    loading: () => <div className="h-24 w-full animate-pulse bg-muted/20" />,
});

const Projects = dynamic(() => import('@/components/Projects'), {
    loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />,
});
const Process = dynamic(() => import('@/components/Process'));
// Output: "const Pricing = dynamic(() => import('@/components/Pricing'));"
// Commented out per user request to remove pricing section
// const Pricing = dynamic(() => import('@/components/Pricing'));
const FAQ = dynamic(() => import('@/components/FAQ'));
// FloatingCTA merged into ChatWidget
// const FloatingCTA = dynamic(() => import('@/components/FloatingCTA'), { ssr: false });
const StickyCTA = dynamic(() => import('@/components/StickyCTA'), { ssr: false });
const About = dynamic(() => import('@/components/About'));
const TechStack = dynamic(() => import('@/components/TechStack'), {
    loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />,
});
const Timeline = dynamic(() => import('@/components/Timeline'), {
    loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />,
});

const Contact = dynamic(() => import('@/components/Contact'), {
    loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />,
});
const Services = dynamic(() => import('@/components/Services'), {
    loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />,
});
const Footer = dynamic(() => import('@/components/Footer'), {
    loading: () => <div className="h-80 w-full animate-pulse bg-muted/20" />,
});

const StarsCanvas = dynamic(() => import('@/components/canvas/Stars'), { ssr: false });
const CanvasCursor = dynamic(() => import('@/components/canvas/CanvasCursor'), { ssr: false });

export default function HomeClient({ lang }: { lang: Locale }) {
    const [showCanvas, setShowCanvas] = useState(false);

    useEffect(() => {
        // Deep Defer heavy canvases far beyond the TTI window (Time to Interactive)
        // This ensures the main thread is completely free during the critical loading window.
        const timer = setTimeout(() => setShowCanvas(true), 3500);
        return () => clearTimeout(timer);
    }, []);



    return (
        <LanguageProvider initialLocale={lang}>
            <Navbar />
            {/* Removed duplicate <main> to avoid nested main elements */}
            {showCanvas && <CanvasCursor />}
            {showCanvas && <StarsCanvas />}
            <Hero />
            <MetricsStrip />
            <TrustedBy />
            <SkillTicker />
            <Suspense fallback={null}>
                <Projects />
                <Process />
                <Services />
                {/* <Pricing /> Removed per user request */}
                <About />
                <TechStack />
                <Timeline />
                <FAQ />
                <Contact />
                <div>
                    {/* <FloatingCTA /> Merged into ChatWidget */}
                    <StickyCTA />
                </div>
                <Footer />
            </Suspense>
        </LanguageProvider>
    );

}
