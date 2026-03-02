'use client';

import { useLanguage } from '@/context/LanguageContext';

const MetricItem = ({ value, label, prefix = "", suffix = "" }: { value: string, label: string, prefix?: string, suffix?: string }) => {
    return (
        <div className="flex flex-col items-center justify-center p-6 text-center group">
            <span className="text-3xl md:text-4xl font-black text-foreground mb-1 group-hover:text-neon transition-colors duration-300 flex items-center justify-center gap-1">
                {prefix}
                {value}
                {suffix}
            </span>
            <span className="text-xs md:text-sm text-muted font-medium uppercase tracking-widest group-hover:text-foreground transition-colors">
                {label}
            </span>
        </div>
    );
};

export default function MetricsStrip() {
    const { t } = useLanguage();

    return (
        <section className="border-y border-border bg-background z-20 relative">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border bg-card/30">
                    <MetricItem value="100" suffix="+" label={t.statsStrip.members} />
                    <MetricItem value="25" suffix="%" label={t.statsStrip.leads} />
                    <MetricItem value="1.2" suffix="s" label={t.statsStrip.speed} />
                </div>
            </div>
        </section>
    );
}
