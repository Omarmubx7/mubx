'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const AnimatedValue = ({ value }: { value: string }) => {
    // Check if value is numeric
    const isNumeric = /^\d+$/.test(value);

    if (!isNumeric) return <span>{value}</span>;

    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-20px" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        if (inView) {
            const controls = animate(count, parseInt(value), { duration: 0.8, ease: "easeOut" });
            return controls.stop;
        }
    }, [inView, value, count]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
};

const MetricItem = ({ value, label, prefix = "", suffix = "" }: { value: string, label: string, prefix?: string, suffix?: string }) => {
    return (
        <div className="flex flex-col items-center justify-center p-6 text-center group">
            <span className="text-3xl md:text-4xl font-black text-foreground mb-1 group-hover:text-neon transition-colors duration-300 flex items-center justify-center gap-1">
                {prefix}
                <AnimatedValue value={value} />
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
                    <MetricItem value="20" prefix="+" suffix="%" label={t.statsStrip.leads} />
                    <MetricItem value="200" suffix="%" label={t.statsStrip.sales} />
                </div>
            </div>
        </section>
    );
}
