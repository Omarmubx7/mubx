'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { Quote, Link as LinkIcon } from 'lucide-react';

export default function Testimonials() {
    const testimonials = [
        {
            client: 'Mahmoud Hussam',
            role: 'Agency Lead @ Vynex Media',
            project: 'Agency Landing Page',
            year: '2024',
            outcome: 'Vynex Media — +20% leads in first month',
            text: "Omar helped us launch faster and look more professional by building a high-performance landing page. He was reliable, proactive, and delivered on time.",
            bg: 'from-orange-500/10 to-orange-500/0',
            socialLink: 'https://linkedin.com/in/mahmoud-hussam' // Placeholder or real if known
        },
        {
            client: 'Big Rami',
            role: 'Club Manager @ HTU Martial Arts',
            project: 'Club Management System',
            year: '2025',
            outcome: 'Club Portal — Managed 100+ students',
            text: "Our old process for members was messy; after Omar’s system, managing bookings and payments became seamless. I’d recommend him to any club that needs solid web systems.",
            bg: 'from-red-600/10 to-red-600/0',
            socialLink: 'https://htu.edu.jo'
        },
        {
            client: 'Hassan Emad',
            role: 'Founder @ BloB.JO',
            project: 'E-commerce Store',
            year: '2025',
            outcome: 'BloB Store — 200% online sales boost',
            text: "Customers can now explore designs and track orders online, turning what used to be manual communication into a smoother digital flow. The print-on-demand store he built is a game changer.",
            bg: 'from-blue-500/10 to-blue-500/0',
            socialLink: 'https://blob.jo'
        }
    ];

    return (
        <section id="testimonials" className="py-24 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-black to-black -z-20" />

            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold mb-6">
                        WHAT CLIENTS <span className="text-neon">SAY</span>
                    </motion.h2>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            className={`relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden group hover:scale-[1.02] hover:border-neon/30 hover:shadow-[0_0_30px_rgba(255,30,30,0.1)] transition-all duration-300 flex flex-col h-full`}
                        >
                            {/* Subtle dynamic background tint */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${t.bg} opacity-10 group-hover:opacity-25 transition-opacity`} />

                            <Quote className="w-10 h-10 text-neon/20 mb-6" />

                            <p className="text-white/90 text-lg leading-loose mb-8 font-medium italic relative z-10 flex-grow">
                                &quot;{t.text}&quot;
                            </p>

                            <div className="flex items-center gap-4 mt-auto relative z-10 pt-6 border-t border-white/5">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-neon border border-white/10 text-lg shrink-0">
                                    {t.client[0]}
                                </div>
                                <div className="leading-tight">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="text-white font-bold text-base">{t.client}</h3>
                                        {t.socialLink && (
                                            <a href={t.socialLink} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors" title={`Visit ${t.client}'s site`}>
                                                <LinkIcon className="w-3.5 h-3.5" />
                                            </a>
                                        )}
                                    </div>
                                    <p className="text-neon text-xs font-bold uppercase tracking-wide mb-0.5">{t.outcome}</p>
                                    <p className="text-white/40 text-xs">{t.role}, {t.year}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
