'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const logos = [
    { name: 'HTU', src: '/images/htu-logo.webp' },
    { name: 'Vynex Media', src: '/images/vynex-logo.webp' },
    { name: 'BloB.JO', src: '/images/blobjor-logo.webp' },
    { name: 'The Glorious', src: '/images/thegloriousicon.webp' },
    { name: 'Men Only Show', src: '/images/menonlyshow.webp' },
    { name: 'Aqabwi', src: '/images/aqabwi-logo.webp' },
];

export default function TrustedBy() {
    const { t } = useLanguage();

    // Duplicate logos for seamless loop
    const doubledLogos = [...logos, ...logos, ...logos];

    return (
        <section className="py-12 bg-background border-b border-border/50 overflow-hidden relative">
            <div className="container mx-auto px-6 relative z-10">
                <p className="text-center text-[10px] font-bold text-muted uppercase tracking-[0.3em] mb-12 opacity-80">
                    {t.trustedBy.line}
                </p>
            </div>

            <div className="relative flex overflow-hidden group">
                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

                <motion.div
                    className="flex gap-8 md:gap-12 items-center whitespace-nowrap px-12"
                    animate={{
                        x: [0, -100 * logos.length - (logos.length * 32)], // Adjust for gaps
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 35,
                            ease: "linear",
                        },
                    }}
                >
                    {doubledLogos.map((logo, idx) => (
                        <div
                            key={`${logo.name}-${idx}`}
                            className="relative h-20 md:h-28 w-40 md:w-56 flex items-center justify-center bg-card/30 backdrop-blur-md rounded-2xl border border-border/50 hover:border-neon/50 hover:bg-neon/5 transition-all duration-500 shadow-xl group/logo shrink-0"
                        >
                            {/* Inner Glow */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/logo:opacity-100 transition-opacity" />

                            <div className="relative h-10 md:h-14 w-28 md:w-40 grayscale opacity-50 group-hover/logo:opacity-100 group-hover/logo:grayscale-0 transition-all duration-500">
                                <Image
                                    src={logo.src}
                                    alt={`${logo.name} Logo`}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 120px, 160px"
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
