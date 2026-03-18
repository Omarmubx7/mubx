
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Badge from '@/components/ui/Badge';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { LanguageProvider } from '@/context/LanguageContext';
import JsonLd from '@/components/JsonLd';
import { getProjects, projects } from '@/lib/projects';
import { Locale } from '@/lib/dictionaries';
import { siteConfig } from '@/config/seo';
import { Metadata } from 'next';
import { Suspense } from 'react';

// SSG: Generate params for all projects
export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export const dynamicParams = false;

type Props = {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ lang?: string }>;
};

// SEO Metadata
export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
    const { slug } = await params;
    const resolvedSearchParams = await searchParams;
    const lang = (resolvedSearchParams.lang === 'ar' ? 'ar' : 'en') as Locale;
    
    const projectList = getProjects(lang);
    const project = projectList.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: lang === 'ar' ? 'المشروع غير موجود | MUBX' : 'Project Not Found | MUBX',
        };
    }

    const baseTitle = `${project.title} | ${lang === 'ar' ? 'مشاريع MUBX' : 'MUBX Projects'}`;

    return {
        title: baseTitle,
        description: project.description,
        alternates: {
            canonical: `${siteConfig.url}/projects/${slug}`,
        },
        openGraph: {
            title: baseTitle,
            description: project.description,
            url: `${siteConfig.url}/projects/${slug}`,
            type: 'article',
            siteName: 'MUBX',
            locale: lang === 'ar' ? 'ar_QA' : 'en_US',
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
            title: baseTitle,
            description: project.description,
            images: [project.logo],
        },
    };
}

export default async function ProjectPage(props: Readonly<Props>) {
    const { slug } = await props.params;
    const searchParams = await props.searchParams;
    const lang = (searchParams.lang === 'ar' ? 'ar' : 'en') as Locale;

    const projectList = getProjects(lang);
    const project = projectList.find((p) => p.slug === slug);

    if (!project) return notFound();

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareSourceCode',
        'name': project.title,
        'description': project.description,
        'author': {
            '@type': 'Person',
            'name': lang === 'ar' ? 'عمر مبيضين' : 'Omar Mubaidin',
            'url': siteConfig.url
        },
        'programmingLanguage': project.tech,
        'datePublished': project.timeframe, // Assuming timeframe might contain year, simplified for now
        'image': project.logo,
        'url': `${siteConfig.url}/projects/${slug}`
    };

    return (
        <Suspense>
            <LanguageProvider initialLocale={lang}>
                <main className="bg-black min-h-screen selection:bg-neon selection:text-black">
                    <JsonLd data={jsonLd} />
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
            </LanguageProvider>
        </Suspense>
    );
}
