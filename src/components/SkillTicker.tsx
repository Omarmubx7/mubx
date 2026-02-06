'use client';

import InfiniteMarquee from './ui/InfiniteMarquee';
import {
    Code, Layout, Workflow, MessageCircle, ShoppingCart,
    Smartphone, Database, Search, Zap, Globe,
    PenTool, Layers, Box, Terminal
} from 'lucide-react';

const skillsRow1 = [
    { name: "Full Stack Architecture", icon: Layers },
    { name: "Next.js & React Expertise", icon: Code },
    { name: "Database Design", icon: Database },
    { name: "Secure Auth Systems", icon: Lock },
    { name: "High-Performance SEO", icon: Search },
    { name: "Amman Based", icon: MapPin },
    { name: "UI/UX Engineering", icon: PenTool },
];

const skillsRow2 = [
    { name: "E-commerce Solutions", icon: ShoppingCart },
    { name: "System Scalability", icon: Zap },
    { name: "Custom Web Apps", icon: Globe },
    { name: "Technical Consulting", icon: MessageCircle },
    { name: "Mobile-First Design", icon: Smartphone },
    { name: "API Development", icon: Terminal },
];

const SkillPill = ({ name, Icon }: { name: string, Icon: any }) => (
    <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-black/40 border border-white/10 backdrop-blur-md text-white/90 hover:text-neon hover:border-neon/50 hover:bg-white/5 transition-all duration-300 cursor-default group shadow-lg shadow-black/20">
        <Icon className="w-4 h-4 text-white/50 group-hover:text-neon transition-colors" />
        <span className="text-sm font-bold tracking-wide whitespace-nowrap">{name}</span>
    </div>
);

export default function SkillTicker() {
    return (
        <section className="py-20 bg-black overflow-hidden relative border-b border-white/5">
            {/* Gradient Masks for Fade Efeect */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            <div className="flex flex-col gap-6 transform -rotate-2 scale-105 origin-center opacity-80 hover:opacity-100 transition-opacity">
                <InfiniteMarquee direction="left" speed={40}>
                    {skillsRow1.map((skill) => (
                        <SkillPill key={skill.name} name={skill.name} Icon={skill.icon} />
                    ))}
                </InfiniteMarquee>

                <InfiniteMarquee direction="right" speed={45}>
                    {skillsRow2.map((skill) => (
                        <SkillPill key={skill.name} name={skill.name} Icon={skill.icon} />
                    ))}
                </InfiniteMarquee>
            </div>
        </section>
    );
}
