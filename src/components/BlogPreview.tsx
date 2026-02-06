'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { fadeUp, staggerContainer } from '@/lib/motion';

export default function BlogPreview() {
    const posts = [
        {
            title: "The State of E-commerce in Jordan (2026)",
            excerpt: "How to skip monthly fees by integrating Zain Cash & CliQ directly into your custom Next.js store.",
            value: "Stop renting your store. Own it.",
            slug: "ecommerce-in-jordan-guide",
            date: "Feb 5, 2026"
        },
        {
            title: "Next.js vs WordPress: The 2026 Comparison",
            excerpt: "Why modern businesses in Amman are migrating to Headless architectures for 100/100 performance.",
            value: "Performance wins customers.",
            slug: "nextjs-vs-wordpress",
            date: "Feb 4, 2026"
        },
        {
            title: "How I built BloB.JO's print-on-demand system",
            excerpt: "A technical deep dive into building a complex custom e-commerce flow with React and Node.js.",
            value: "Case Study: Local Success.",
            slug: "building-blob-jo",
            date: "Jan 28, 2026"
        }
    ];

    return (
        <section className="py-24 relative border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
                >
                    <div>
                        <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold mb-4">
                            ARTICLES & <span className="text-neon">INSIGHTS</span>
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-muted text-lg max-w-xl">
                            Technical deep dives and thoughts on performance, security, and the future of web development.
                        </motion.p>
                    </div>
                    <motion.div variants={fadeUp}>
                        <Link href="/blog" className="flex items-center gap-2 text-white hover:text-neon transition-colors font-bold group">
                            Read all articles
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, i) => (
                        <motion.div
                            key={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="group relative p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-neon/30 hover:bg-white/10 transition-all duration-300 flex flex-col items-start h-full"
                        >
                            <div className="text-xs font-mono text-neon mb-4 uppercase tracking-widest">{post.date}</div>
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-neon transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-muted text-sm leading-relaxed mb-4 flex-grow">
                                {post.excerpt}
                            </p>
                            <p className="text-xs text-neon font-bold mb-6 flex items-center gap-2">
                                <span className="w-1 h-1 bg-neon rounded-full" />
                                {post.value}
                            </p>
                            <Link href={`/blog/${post.slug}`} className="text-white text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                Read Article <ArrowRight className="w-4 h-4 text-neon" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
