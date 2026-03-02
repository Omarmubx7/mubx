import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Badge from '@/components/ui/Badge';
import { siteConfig } from '@/config/seo';
import { Download, Calendar, CheckCircle2 } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
    title: 'About Omar Mubaidin | MUBX — Full Stack Developer & Tech Consultant in Amman',
    description: 'Meet Omar Mubaidin (عمر مبيضين): Computer Science student at PSUT, full-stack developer, and founder of MUBX. Building revenue-focused web systems for startups in Amman, Jordan.',
    keywords: [
        'Omar Mubaidin', 'عمر مبيضين', 'Omar Mubaidin bio',
        'MUBX founder', 'web developer Amman', 'CS student PSUT',
        'full stack developer Jordan', 'Omar Mubaidin about'
    ],
    authors: [{ name: 'Omar Mubaidin', url: siteConfig.url }],
    openGraph: {
        type: 'profile',
        username: 'omarmubaidin',
        firstName: 'Omar',
        lastName: 'Mubaidin',
        url: `${siteConfig.url}/about`,
        title: 'About Omar Mubaidin | MUBX',
        description: 'Full Stack Developer & Technical Consultant in Amman, Jordan. Founder of MUBX.',
        images: [siteConfig.ogImage],
        siteName: 'MUBX',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Omar Mubaidin | MUBX',
        description: 'Full Stack Developer & Technical Consultant in Amman, Jordan.',
        creator: '@omarmubx',
        images: [siteConfig.ogImage],
    },
    alternates: {
        canonical: `${siteConfig.url}/about`
    }
};

import { Suspense } from 'react';

export default function AboutPage() {
    return (
        <Suspense>
            <LanguageProvider initialLocale="en">
                <main className="min-h-screen bg-black text-white selection:bg-neon selection:text-black">
                    <Navbar />

                    {/* Enhanced Person Schema for Knowledge Panel + AEO */}
                    <JsonLd data={{
                        "@context": "https://schema.org",
                        "@type": "ProfilePage",
                        "mainEntity": {
                            "@type": "Person",
                            "@id": "https://mubx.dev/#person",
                            "name": "Omar Mubaidin",
                            "alternateName": ["عمر مبيضين", "MUBX", "Omar Mubx"],
                            "givenName": "Omar",
                            "familyName": "Mubaidin",
                            "jobTitle": "Full Stack Developer & Technical Consultant",
                            "description": "Omar Mubaidin is a Computer Science student at Princess Sumaya University for Technology (PSUT) and the founder of MUBX — a revenue-focused web consultancy in Amman, Jordan. He specializes in Next.js, e-commerce with Zain Cash & CliQ, and performance-optimized web systems for startups.",
                            "image": "https://mubx.dev/omarmubpic.webp",
                            "url": "https://mubx.dev",
                            "nationality": {
                                "@type": "Country",
                                "name": "Jordan"
                            },
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Amman",
                                "addressCountry": "Jordan"
                            },
                            "worksFor": {
                                "@type": "Organization",
                                "@id": "https://mubx.dev/#organization",
                                "name": "MUBX"
                            },
                            "alumniOf": {
                                "@type": "CollegeOrUniversity",
                                "name": "Princess Sumaya University for Technology",
                                "url": "https://www.psut.edu.jo"
                            },
                            "hasOccupation": {
                                "@type": "Occupation",
                                "name": "Full Stack Web Developer",
                                "skills": "Next.js, React, TypeScript, Node.js, PostgreSQL, Tailwind CSS, Docker, E-commerce, Zain Cash, CliQ, SEO"
                            },
                            "knowsAbout": [
                                "Next.js 15", "React", "TypeScript", "Node.js",
                                "PostgreSQL", "Tailwind CSS", "Framer Motion",
                                "Docker", "Git", "Web Performance",
                                "Core Web Vitals", "SEO", "E-commerce",
                                "Zain Cash Integration", "CliQ Payment Integration",
                                "Technical Consulting", "Startup Advisory"
                            ],
                            "knowsLanguage": ["English", "Arabic"],
                            "sameAs": [
                                "https://github.com/Omarmubx7",
                                "https://www.linkedin.com/in/omarmubaidin",
                                "https://www.instagram.com/mubx.dev",
                                "https://wa.me/962780090453",
                                "https://mubx.dev",
                                "https://mubx.dev/links"
                            ]
                        },
                        "speakable": {
                            "@type": "SpeakableSpecification",
                            "cssSelector": [".prose"]
                        }
                    }} />

                    <div className="container mx-auto px-6 md:px-12 pt-32 pb-20">
                        <div className="max-w-4xl mx-auto">
                            {/* Hero Header */}
                            <div className="mb-16">
                                <Badge variant="neon" className="mb-6">The Developer Behind MUBX</Badge>
                                <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                                    More Than Just <br />
                                    <span className="text-neon">Code.</span>
                                </h1>
                                <p className="text-xl text-muted leading-relaxed">
                                    I don&apos;t just write functions; I engineer digital assets.
                                    As a Computer Science student in Amman, I noticed a gap:
                                    Businesses need <strong className="text-white">speed</strong> and <strong className="text-white">local payment integration</strong>, not just pretty templates.
                                </p>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                    <div className="text-3xl font-black text-neon mb-1">3+</div>
                                    <div className="text-xs text-muted uppercase tracking-wider">Years Coding</div>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                    <div className="text-3xl font-black text-neon mb-1">100%</div>
                                    <div className="text-xs text-muted uppercase tracking-wider">Job Success</div>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                    <div className="text-3xl font-black text-neon mb-1">JO</div>
                                    <div className="text-xs text-muted uppercase tracking-wider">Based in Amman</div>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                    <div className="text-3xl font-black text-neon mb-1">CS</div>
                                    <div className="text-xs text-muted uppercase tracking-wider">Student</div>
                                </div>
                            </div>

                            {/* The Story / Content */}
                            <div className="prose prose-invert prose-lg max-w-none mb-20">
                                <h2 className="text-3xl font-bold text-white mb-6">Why I Started MUBX</h2>
                                <p className="text-muted mb-8">
                                    Freelancing in Jordan is often chaotic. Clients get ghosted, projects get delayed, and code quality is often an afterthought.
                                    I founded <strong>MUBX</strong> to bring an engineering mindset to freelance web development.
                                </p>

                                <h3 className="text-2xl font-bold text-white mb-4">My Philosophy</h3>
                                <ul className="space-y-4 mb-8 list-none pl-0">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-neon flex-shrink-0 mt-1" />
                                        <span><strong>Performance First:</strong> If a site takes 3 seconds to load, you&apos;ve lost the customer. I aim for sub-second loads.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-neon flex-shrink-0 mt-1" />
                                        <span><strong>Local Context:</strong> A store in Amman needs Zain Cash, not just PayPal. I build for the local reality.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-neon flex-shrink-0 mt-1" />
                                        <span><strong>Ownership:</strong> You should own your code and your data. No platform lock-in.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Tech Stack Horizontal Scroll/Grid */}
                            <div className="mb-20">
                                <h2 className="text-2xl font-bold text-white mb-8">Technical Arsenal</h2>
                                <div className="flex flex-wrap gap-3">
                                    {['Next.js 15', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Framer Motion', 'Docker', 'Git'].map(tech => (
                                        <span key={tech} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-bold text-muted hover:border-neon/50 hover:text-white transition-colors cursor-default">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Section */}
                            <div className="p-10 rounded-3xl bg-neon/10 border border-neon/20 text-center">
                                <h2 className="text-3xl font-bold text-white mb-4">Let&apos;s Work Together</h2>
                                <p className="text-muted mb-8 max-w-lg mx-auto">
                                    I am currently accepting new projects. Whether it&apos;s a simple landing page or a complex SaaS,
                                    I&apos;m ready to engineer it.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href="https://calendly.com/omarmubaidincs/30min"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-8 py-4 bg-neon text-black font-bold text-lg rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,30,30,0.3)] flex items-center justify-center gap-2"
                                    >
                                        <Calendar className="w-5 h-5" />
                                        Book a Call
                                    </a>
                                    <a
                                        href="/cv.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                                    >
                                        <Download className="w-5 h-5" />
                                        Download Resume
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer />
                </main>
            </LanguageProvider>
        </Suspense>
    );
}
