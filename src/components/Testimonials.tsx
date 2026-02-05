'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { Quote } from 'lucide-react';

export default function Testimonials() {
    const testimonials = [
        {
            client: 'Mahmoud Hussam',
            role: 'Agency Lead @ Vynex Media',
            text: "Omar helped us launch faster and look more professional by building a high-performance landing page. He was reliable, proactive, and delivered on time.",
            bg: 'from-orange-500/10 to-orange-500/0'
        },
        {
            client: 'Big Rami',
            role: 'Club Manager @ HTU Martial Arts',
            text: "Our old process for members was messy; after Omar’s system, managing bookings and payments became seamless. I’d recommend him to any club that needs solid web systems.",
            bg: 'from-red-600/10 to-red-600/0'
        },
        {
            client: 'Hassan Emad',
            role: 'Founder @ BloB.JO',
            text: "Customers can now explore designs and track orders online, turning what used to be manual communication into a smoother digital flow. The print-on-demand store he built is a game changer.",
            bg: 'from-blue-500/10 to-blue-500/0'
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
                            className={`relative p-8 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm overflow-hidden group hover:scale-[1.02] hover:border-neon/30 hover:shadow-[0_0_20px_rgba(255,30,30,0.1)] transition-all duration-300`}
                        >
                            {/* Subtle dynamic background tint */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${t.bg} opacity-20 group-hover:opacity-40 transition-opacity`} />

                            <Quote className="w-8 h-8 text-white/20 mb-6" />

                            <p className="text-muted text-lg leading-relaxed mb-6 font-medium">
                                &quot;{t.text}&quot;
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-neon border border-white/10">
                                    {t.client[0]}
                                </div>
                                <div>
                                    <h3 className="text-white font-bold">{t.client}</h3>
                                    <p className="text-sm text-white/50">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
