'use client';

import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const AnimatedValue = ({ value }: { value: string }) => {
    // Check if value is numeric or mixed (e.g. "100" vs "Zain")
    const isNumeric = /^\d+$/.test(value);

    if (!isNumeric) return <span>{value}</span>;

    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-20px" });
    const springValue = useSpring(0, { stiffness: 50, damping: 15 });
    const displayValue = useTransform(springValue, (current) => Math.round(current));

    useEffect(() => {
        if (inView) {
            springValue.set(parseInt(value));
        }
    }, [inView, value, springValue]);

    return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const MetricItem = ({ value, label, prefix = "", suffix = "" }: { value: string, label: string, prefix?: string, suffix?: string }) => {
    return (
        <div className="flex flex-col items-center justify-center p-6 text-center group">
            <span className="text-3xl md:text-4xl font-black text-white mb-1 group-hover:text-neon transition-colors duration-300 flex items-center justify-center gap-1">
                {prefix}
                <AnimatedValue value={value} />
                {suffix}
            </span>
            <span className="text-xs md:text-sm text-white/50 font-medium uppercase tracking-widest group-hover:text-white/80 transition-colors">
                {label}
            </span>
        </div>
    );
};

export default function MetricsStrip() {
    return (
        <section className="border-y border-white/5 bg-black z-20 relative">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5 bg-white/[0.02]">
                    <MetricItem value="100" suffix="+" label="Members Managed – HTU Club Portal" />
                    <MetricItem value="20" prefix="+" suffix="%" label="Leads – Vynex Media Landing Page" />
                    <MetricItem value="200" suffix="%" label="Sales Boost – BloB POD Store" />
                </div>
            </div>
        </section>
    );
}
