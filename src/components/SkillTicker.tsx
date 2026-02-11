'use client';

import InfiniteMarquee from './ui/InfiniteMarquee';
import {
    Code, Layout, Workflow, MessageCircle, ShoppingCart,
    Smartphone, Database, Search, Zap, Globe,
    PenTool, Layers, Box, Terminal, MapPin, Lock
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const skillsRow1 = [
    { key: "fullStack", icon: Layers },
    { key: "nextReact", icon: Code },
    { key: "dbDesign", icon: Database },
    { key: "auth", icon: Lock },
    { key: "seo", icon: Search },
    { key: "amman", icon: MapPin },
    { key: "uiux", icon: PenTool },
];

const skillsRow2 = [
    { key: "ecommerce", icon: ShoppingCart },
    { key: "scalability", icon: Zap },
    { key: "webApps", icon: Globe },
    { key: "consulting", icon: MessageCircle },
    { key: "mobile", icon: Smartphone },
    { key: "api", icon: Terminal },
];

const SkillPill = ({ name, Icon }: { name: string, Icon: any }) => (
    <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-card/60 border border-border/50 backdrop-blur-md text-foreground hover:text-neon hover:border-neon/50 hover:bg-accent transition-all duration-300 cursor-default group shadow-lg shadow-black/5">
        <Icon className="w-4 h-4 text-muted group-hover:text-neon transition-colors" />
        <span className="text-sm font-bold font-mono tracking-wide whitespace-nowrap">{name}</span>
    </div>
);

export default function SkillTicker() {
    const { t } = useLanguage();

    return (
        <section className="py-20 bg-background overflow-hidden relative border-b border-border">
            {/* Gradient Masks for Fade Efeect */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="flex flex-col gap-6 opacity-80 hover:opacity-100 transition-opacity">
                <InfiniteMarquee direction="left" speed={40}>
                    {skillsRow1.map((skill) => (
                        <SkillPill key={skill.key} name={t.skills[skill.key as keyof typeof t.skills]} Icon={skill.icon} />
                    ))}
                </InfiniteMarquee>

                <InfiniteMarquee direction="right" speed={45}>
                    {skillsRow2.map((skill) => (
                        <SkillPill key={skill.key} name={t.skills[skill.key as keyof typeof t.skills]} Icon={skill.icon} />
                    ))}
                </InfiniteMarquee>
            </div>
        </section>
    );
}
