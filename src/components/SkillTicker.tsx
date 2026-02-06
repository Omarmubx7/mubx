'use client';

import InfiniteMarquee from './ui/InfiniteMarquee';
import {
    Code, Layout, Workflow, MessageCircle, ShoppingCart,
    Smartphone, Database, Search, Zap, Globe,
    PenTool, Layers, Box, Terminal
} from 'lucide-react';

const skillsRow1 = [
    { name: "CMS Setup", icon: Layout },
    { name: "n8n Workflows", icon: Workflow },
    { name: "Wireframing", icon: Layers },
    { name: "Copywriting", icon: PenTool },
    { name: "Framer Expert", icon: Box },
    { name: "WhatsApp Bots", icon: MessageCircle },
];

const skillsRow2 = [
    { name: "SEO Optimization", icon: Search },
    { name: "Landing Pages", icon: Globe },
    { name: "Custom Code", icon: Code },
    { name: "E-commerce", icon: ShoppingCart },
    { name: "Mobile Responsive", icon: Smartphone },
    { name: "Performance", icon: Zap },
    { name: "API Integration", icon: Terminal },
];

const SkillPill = ({ name, Icon }: { name: string, Icon: any }) => (
    <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white hover:border-neon/50 hover:bg-white/10 transition-all cursor-default">
        <Icon className="w-4 h-4 text-neon" />
        <span className="text-sm font-medium whitespace-nowrap">{name}</span>
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
