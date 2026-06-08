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
    const { t, isRTL } = useLanguage();

    return (
        <section className="w-full bg-background border-b border-border/30 overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 w-full border-collapse">
                {/* Info Column (Left in LTR, Right in RTL) */}
                <div className="lg:col-span-3 p-6 md:p-8 flex flex-col justify-center border-b lg:border-b-0 lg:border-r rtl:lg:border-r-0 rtl:lg:border-l border-border/30 bg-card/5 select-none">
                    <span className="text-[10px] font-bold text-neon uppercase tracking-[0.2em] font-mono mb-2">
                        // TRUSTED BY
                    </span>
                    <p className="text-xs text-muted leading-relaxed font-mono">
                        {t.trustedBy.line}
                    </p>
                </div>

                {/* Slider Column */}
                <div className="lg:col-span-9 py-8 overflow-hidden relative flex items-center min-h-[110px] bg-background">
                    {/* Fade Gradient Masks */}
                    <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                    <div className="flex w-max select-none" dir="ltr">
                        {/* First sliding track */}
                        <motion.div
                            className="flex gap-6 md:gap-8 items-center shrink-0 pr-6 md:pr-8"
                            animate={{
                                x: [0, "-100%"],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 25,
                                    ease: "linear",
                                },
                            }}
                        >
                            {logos.map((logo, idx) => (
                                <div
                                    key={`${logo.name}-track1-${idx}`}
                                    className="relative h-16 md:h-20 w-36 md:w-44 flex items-center justify-center bg-card/10 border border-border/30 hover:border-neon/40 hover:bg-white/[0.015] transition-all duration-300 rounded-none group/logo shrink-0"
                                >
                                    <div className="absolute inset-0 rounded-none bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/logo:opacity-100 transition-opacity" />

                                    <div className="relative h-8 md:h-10 w-24 md:w-32 grayscale opacity-50 group-hover/logo:opacity-100 group-hover/logo:grayscale-0 transition-all duration-500">
                                        <Image
                                            src={logo.src}
                                            alt={`${logo.name} Logo`}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 768px) 100px, 140px"
                                        />
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Second sliding track (identical copy for seamless looping) */}
                        <motion.div
                            className="flex gap-6 md:gap-8 items-center shrink-0 pr-6 md:pr-8"
                            animate={{
                                x: [0, "-100%"],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 25,
                                    ease: "linear",
                                },
                            }}
                        >
                            {logos.map((logo, idx) => (
                                <div
                                    key={`${logo.name}-track2-${idx}`}
                                    className="relative h-16 md:h-20 w-36 md:w-44 flex items-center justify-center bg-card/10 border border-border/30 hover:border-neon/40 hover:bg-white/[0.015] transition-all duration-300 rounded-none group/logo shrink-0"
                                >
                                    <div className="absolute inset-0 rounded-none bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/logo:opacity-100 transition-opacity" />

                                    <div className="relative h-8 md:h-10 w-24 md:w-32 grayscale opacity-50 group-hover/logo:opacity-100 group-hover/logo:grayscale-0 transition-all duration-500">
                                        <Image
                                            src={logo.src}
                                            alt={`${logo.name} Logo`}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 768px) 100px, 140px"
                                        />
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
