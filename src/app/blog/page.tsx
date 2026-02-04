import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts } from '@/lib/blog-data';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BlogIndex() {
    return (
        <main className="relative flex flex-col min-h-screen">
            <Navbar />

            <section className="pt-32 pb-24 relative overflow-hidden flex-grow">
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-neon/5 blur-[100px] rounded-full -z-10" />

                <div className="container mx-auto px-6 md:px-12">

                    <div className="mb-12">
                        <Link href="/" className="inline-flex items-center gap-2 text-muted hover:text-white transition-colors mb-8">
                            <ArrowLeft className="w-4 h-4" /> Back to Home
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            ENGINEERING <span className="text-neon">NOTES</span>
                        </h1>
                        <p className="text-xl text-muted">We&apos;re currently writing content. Check back soon.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {blogPosts.map((post) => (
                            <Link
                                href={`/blog/${post.slug}`}
                                key={post.slug}
                                className="group block p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-neon/50 transition-all duration-300 hover:bg-white/10"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-xs font-bold text-neon border border-neon/20 px-3 py-1 rounded-full bg-neon/5">
                                        {post.tag}
                                    </span>
                                    <span className="text-sm text-muted">{post.date}</span>
                                </div>

                                <h2 className="text-2xl font-bold text-white group-hover:text-neon transition-colors leading-tight mb-4">
                                    {post.title}
                                </h2>

                                <p className="text-muted leading-relaxed">
                                    {post.excerpt}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
