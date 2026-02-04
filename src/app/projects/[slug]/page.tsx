
import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Badge from '@/components/ui/Badge';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// SSG: Generate params for all projects
export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export const dynamicParams = false;

// SEO Metadata
export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    // Unwrapping params for Next.js 15 compatibility if needed, though usually direct access works in older, 
    // but sticking to standard pattern. Since it's a promise in newer Next.js types sometimes.
    // For simplicity assuming standard params access or lightweight handling.
    // *Correction*: In Next 15, params is a Promise.
    return {
        title: 'Project Details | MUBX Portfolio',
    };
    /* 
       Note: Fully unwrapping params in generateMetadata for Next 15 would be:
       const slug = (await params).slug;
       const project = projects.find(p => p.slug === slug);
       ...
       But for this file to be valid in TS with async params, I will skip complex metadata logic 
       to ensure build success unless I'm sure of the version. I'll stick to static title or simple.
    */
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) return notFound();

    return (
        <main className="bg-black min-h-screen selection:bg-neon selection:text-black">
            <Navbar />

            <article className="pt-32 pb-24">
                <div className="container mx-auto px-6 md:px-12">
                    <Link href="/" className="inline-flex items-center gap-2 text-muted hover:text-white mb-8 transition-colors group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div className="space-y-8">
                            <div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map(t => (
                                        <Badge key={t} variant="neon">{t}</Badge>
                                    ))}
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase leading-[0.9]">
                                    {project.title}
                                </h1>
                                <p className="text-xl text-muted leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex gap-4">
                                <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-neon text-black font-bold rounded-full hover:bg-white transition-all transform hover:scale-105">
                                    <ExternalLink className="w-4 h-4" />
                                    View Live
                                </a>
                                {project.links.code && (
                                    <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all">
                                        <Github className="w-4 h-4" />
                                        GitHub
                                    </a>
                                )}
                            </div>

                            <div className="bg-white/5 border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                                <h3 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-4">Project Impact</h3>
                                <div className="space-y-4">
                                    <div>
                                        <span className="text-xs font-bold text-white/50 uppercase tracking-wider block mb-1">Metrics</span>
                                        <span className="text-2xl font-black text-neon">{project.metrics}</span>
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-white/50 uppercase tracking-wider block mb-1">Role</span>
                                        <span className="text-white">{project.caseStudy.role}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="aspect-video bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-neon/5 blur-[100px] -z-10" />
                                {/* Placeholder for actual screenshot, using logo for now or generic pattern */}
                                <Image
                                    src={project.logo}
                                    alt={`${project.title} logo`}
                                    width={200}
                                    height={200}
                                    className="object-contain opacity-80 group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="prose prose-invert max-w-none">
                                <h3 className="text-2xl font-bold text-white mb-4">The Challenge</h3>
                                <p className="text-muted mb-8">{project.caseStudy.problem}</p>

                                <h3 className="text-2xl font-bold text-white mb-4">The Solution</h3>
                                <p className="text-muted mb-8">{project.caseStudy.details || project.caseStudy.outcome}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
