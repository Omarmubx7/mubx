
import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Badge from '@/components/ui/Badge';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// SSG: Generate params for all projects
export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export const dynamicParams = false;

import { Metadata } from 'next';

// SEO Metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: 'Project Not Found | MUBX',
        };
    }

    return {
        title: `${project.title} | MUBX Projects`,
        description: project.description,
        alternates: {
            canonical: `https://mubx.dev/projects/${slug}`,
        },
        openGraph: {
            title: `${project.title} | MUBX Portfolio`,
            description: project.description,
            url: `https://mubx.dev/projects/${slug}`,
            type: 'article',
            images: [
                {
                    url: project.logo,
                    width: 1200,
                    height: 630,
                    alt: `${project.title} Project Preview`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${project.title} | MUBX Projects`,
            description: project.description,
            images: [project.logo],
        },
    };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) return notFound();

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareSourceCode',
        'name': project.title,
        'description': project.description,
        'author': {
            '@type': 'Person',
            'name': 'Omar Mubaidin'
        },
        'programmingLanguage': project.tech,
        'datePublished': project.timeframe, // Assuming timeframe might contain year, simplified for now
        'license': 'https://opensource.org/licenses/MIT', // Placeholder if open source, or remove
        'image': project.logo
    };

    return (
        <main className="bg-black min-h-screen selection:bg-neon selection:text-black">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
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
                                {project.links.code && null}
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
                                    <div>
                                        <span className="text-xs font-bold text-white/50 uppercase tracking-wider block mb-1">Timeline</span>
                                        <span className="text-white">{project.timeframe}</span>
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
                                    alt={`${project.title} - ${project.tech.join(', ')} project by Omar Mubaidin / MUBX`}
                                    width={200}
                                    height={200}
                                    className="object-contain opacity-80 group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="prose prose-invert max-w-none">
                                <h3 className="text-2xl font-bold text-white mb-4">The Challenge</h3>
                                <p className="text-muted mb-8">{project.caseStudy.problem}</p>

                                <h3 className="text-2xl font-bold text-white mb-4">The Solution</h3>
                                <p className="text-muted mb-8">{project.caseStudy.solution}</p>

                                <h3 className="text-2xl font-bold text-white mb-4">The Outcome</h3>
                                <p className="text-muted mb-8">{project.caseStudy.outcome}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
