'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { useLanguage } from '@/context/LanguageContext';
import GradientText from './ui/GradientText';
import Image from 'next/image';

const techList = [
    { name: 'React', icon: '/techstackicons/react-svgrepo-com.svg' },
    { name: 'Next.js', icon: '/techstackicons/next-dot-js-svgrepo-com.svg' },
    { name: 'TypeScript', icon: '/techstackicons/typescript-icon-svgrepo-com.svg' },
    { name: 'Node.js', icon: '/techstackicons/nodejs-icon-svgrepo-com.svg' },
    { name: 'PostgreSQL', icon: '/techstackicons/postgresql-svgrepo-com.svg' },
    { name: 'Prisma', icon: '/techstackicons/prisma-svgrepo-com.svg' },
    { name: 'Tailwind', icon: '/techstackicons/tailwindcss-icon-svgrepo-com.svg' },
    { name: 'Vercel', icon: '/techstackicons/vercel-logo-svgrepo-com.svg' },
    { name: 'Docker', icon: '/techstackicons/docker-svgrepo-com.svg' },
    { name: 'Git', icon: '/techstackicons/git-svgrepo-com.svg' },
    { name: 'Postman', icon: '/techstackicons/postman-icon-svgrepo-com.svg' },
    { name: 'Supabase', icon: '/techstackicons/supabase-logo-icon.svg' },
    { name: 'Figma', icon: '/techstackicons/figma-icon.svg' },
];

export default function TechStack() {
    const { t } = useLanguage();

    return (
        <section id="tech-stack" className="py-24 bg-background relative overflow-hidden border-t border-border/50">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="space-y-16"
                >
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <motion.div variants={fadeUp}>
                            <p className="text-neon font-mono text-sm mb-4 tracking-widest">04</p>
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground uppercase">
                                {t.tech.title} <GradientText>{t.tech.titleHighlight}</GradientText>
                            </h2>
                        </motion.div>
                        <motion.p variants={fadeUp} className="text-muted text-lg">
                            {t.tech.subtitle}
                        </motion.p>
                    </div>

                    {/* Pyramid Layout */}
                    <div className="flex flex-col items-center gap-6">
                        {/* Row 1: 1 item */}
                        <div className="flex gap-6 justify-center">
                            {techList.slice(0, 1).map((item) => (
                                <motion.div
                                    key={item.name}
                                    variants={fadeUp}
                                    className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-neon/40 hover:bg-neon/5 transition-all duration-300 flex flex-col items-center justify-center gap-4 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,30,30,0.1)] relative overflow-hidden w-32"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-tr from-neon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="w-12 h-12 flex items-center justify-center relative z-10">
                                        <Image
                                            src={item.icon}
                                            alt={item.name}
                                            width={40}
                                            height={40}
                                            className="w-8 h-8 md:w-10 md:h-10 object-contain transition-all duration-300 grayscale group-hover:grayscale-0"
                                        />
                                    </div>
                                    <span className="text-xs md:text-sm font-medium font-mono text-muted group-hover:text-foreground transition-colors relative z-10">
                                        {item.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Row 2: 2 items */}
                        <div className="flex gap-6 justify-center">
                            {techList.slice(1, 3).map((item) => (
                                <motion.div
                                    key={item.name}
                                    variants={fadeUp}
                                    className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-neon/40 hover:bg-neon/5 transition-all duration-300 flex flex-col items-center justify-center gap-4 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,30,30,0.1)] relative overflow-hidden w-32"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-tr from-neon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="w-12 h-12 flex items-center justify-center relative z-10">
                                        <Image
                                            src={item.icon}
                                            alt={item.name}
                                            width={40}
                                            height={40}
                                            className="w-8 h-8 md:w-10 md:h-10 object-contain transition-all duration-300 grayscale group-hover:grayscale-0"
                                        />
                                    </div>
                                    <span className="text-xs md:text-sm font-medium font-mono text-muted group-hover:text-foreground transition-colors relative z-10">
                                        {item.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Row 3: 3 items */}
                        <div className="flex gap-6 justify-center">
                            {techList.slice(3, 6).map((item) => (
                                <motion.div
                                    key={item.name}
                                    variants={fadeUp}
                                    className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-neon/40 hover:bg-neon/5 transition-all duration-300 flex flex-col items-center justify-center gap-4 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,30,30,0.1)] relative overflow-hidden w-32"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-tr from-neon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="w-12 h-12 flex items-center justify-center relative z-10">
                                        <Image
                                            src={item.icon}
                                            alt={item.name}
                                            width={40}
                                            height={40}
                                            className="w-8 h-8 md:w-10 md:h-10 object-contain transition-all duration-300 grayscale group-hover:grayscale-0"
                                        />
                                    </div>
                                    <span className="text-xs md:text-sm font-medium font-mono text-muted group-hover:text-foreground transition-colors relative z-10">
                                        {item.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Row 4: 4 items */}
                        <div className="flex gap-6 justify-center">
                            {techList.slice(6, 10).map((item) => (
                                <motion.div
                                    key={item.name}
                                    variants={fadeUp}
                                    className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-neon/40 hover:bg-neon/5 transition-all duration-300 flex flex-col items-center justify-center gap-4 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,30,30,0.1)] relative overflow-hidden w-32"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-tr from-neon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="w-12 h-12 flex items-center justify-center relative z-10">
                                        <Image
                                            src={item.icon}
                                            alt={item.name}
                                            width={40}
                                            height={40}
                                            className="w-8 h-8 md:w-10 md:h-10 object-contain transition-all duration-300 grayscale group-hover:grayscale-0"
                                        />
                                    </div>
                                    <span className="text-xs md:text-sm font-medium font-mono text-muted group-hover:text-foreground transition-colors relative z-10">
                                        {item.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Row 5: Remaining items */}
                        <div className="flex gap-6 justify-center">
                            {techList.slice(10).map((item) => (
                                <motion.div
                                    key={item.name}
                                    variants={fadeUp}
                                    className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-neon/40 hover:bg-neon/5 transition-all duration-300 flex flex-col items-center justify-center gap-4 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,30,30,0.1)] relative overflow-hidden w-32"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-tr from-neon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="w-12 h-12 flex items-center justify-center relative z-10">
                                        <Image
                                            src={item.icon}
                                            alt={item.name}
                                            width={40}
                                            height={40}
                                            className="w-8 h-8 md:w-10 md:h-10 object-contain transition-all duration-300 grayscale group-hover:grayscale-0"
                                        />
                                    </div>
                                    <span className="text-xs md:text-sm font-medium font-mono text-muted group-hover:text-foreground transition-colors relative z-10">
                                        {item.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
