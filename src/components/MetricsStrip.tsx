'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const MetricItem = ({ value, label, prefix = "", suffix = "" }: { value: string, label: string, prefix?: string, suffix?: string }) => {
    return (
        <div className="flex flex-col items-center justify-center p-6 text-center group">
            <span className="text-3xl md:text-4xl font-black text-white mb-1 group-hover:text-neon transition-colors duration-300">
                {prefix}{value}{suffix}
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
                <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5 bg-white/[0.02]">
                    <MetricItem value="100" suffix="+" label="Members Managed" />
                    <MetricItem value="200" suffix="%" label="Avg. Sales Boost" />
                    <MetricItem value="98" suffix="/100" label="Performance Score" />
                    <MetricItem value="Zain" suffix=" & CliQ" label="Local Payments" />
                </div>
            </div>
        </section>
    );
}
