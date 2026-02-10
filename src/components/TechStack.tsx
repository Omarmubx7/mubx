'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { useLanguage } from '@/context/LanguageContext';
import {
    Code2, Database, Globe, Layers,
    Cpu, Zap, Smartphone, Server,
    Code, ShieldCheck, Search, Zap as FastZap
} from 'lucide-react';

const techGroups = [
    {
        id: 'frontend',
        icon: Globe,
        color: 'text-neon',
        techs: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    },
    {
        id: 'backend',
        icon: Server,
        color: 'text-cyan',
        techs: ['Node.js', 'PostgreSQL', 'Prisma', 'Supabase', 'REST / GraphQL']
    },
    {
        id: 'tools',
        icon: Cpu,
        color: 'text-foreground',
        techs: ['Vercel', 'Git / GitHub', 'Docker', 'PNPM', 'Postman']
    }
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
                        <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-foreground">
                            {t.tech.title} <span className="text-neon">{t.tech.titleHighlight}</span>
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-muted text-lg">
                            {t.tech.subtitle}
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {techGroups.map((group, idx) => (
                            <motion.div
                                key={group.id}
                                variants={fadeUp}
                                className="group p-8 rounded-3xl bg-card/40 border border-border/50 backdrop-blur-sm hover:border-neon/30 transition-all duration-500 hover:shadow-2xl hover:shadow-neon/5"
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent transition-all duration-500`}>
                                    <group.icon className={`w-7 h-7 ${group.color}`} />
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-4">
                                    {t.tech.categories[group.id as keyof typeof t.tech.categories]}
                                </h3>

                                <ul className="space-y-3">
                                    {group.techs.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-muted group-hover:text-foreground transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-neon/40" />
                                            <span className="text-sm font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-neon/5 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan/5 blur-[100px] rounded-full -z-10" />
        </section>
    );
}
