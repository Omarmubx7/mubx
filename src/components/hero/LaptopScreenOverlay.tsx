import { useMemo, useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, MotionValue } from 'framer-motion';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { cn } from '@/lib/utils'; // Assuming cn utility exists, otherwise I'll use template literals

interface LaptopScreenOverlayProps {
    scrollProgress: MotionValue<number>;
}

export default function LaptopScreenOverlay({ scrollProgress }: LaptopScreenOverlayProps) {
    const [progress, setProgress] = useState(0);

    // Sync motion value to state for logic
    useEffect(() => {
        const unsubscribe = scrollProgress.on("change", (latest) => {
            setProgress(latest);
        });
        return () => unsubscribe();
    }, [scrollProgress]);

    const mode = useMemo(() => {
        if (progress < 0.33) return 'powershell';
        if (progress < 0.66) return 'build';
        return 'gemini';
    }, [progress]);

    const content = useMemo(() => {
        switch (mode) {
            case 'powershell':
                return {
                    lines: [
                        "PS C:\\Users\\Omar\\Projects\\mubx> npm run build",
                        "> Building mubx.dev for production...",
                        "> Optimizing images and scripts...",
                        "> Bundling Next.js + Tailwind...",
                    ],
                    style: "text-[#7fffd4]",
                    header: "Administrator: Windows PowerShell"
                };
            case 'build':
                return {
                    lines: [
                        "[info] Compiling server and client bundles...",
                        "[info] Analyzing routes for static optimization...",
                        "[success] Generated static pages in 3.4s",
                        "[success] Deployed preview build to Vercel"
                    ],
                    style: "text-[#a0f0ff]",
                    header: "Build Output"
                };
            case 'gemini':
                return {
                    lines: [
                        "mubx@gemini:~$ gemini3 generate-landing --brand \"MUBX\" --stack \"Next.js\"",
                        "→ Headline: \"Building fast, secure web systems for ambitious teams\"",
                        "→ Subheading: \"Full Stack Developer in Amman, Jordan.\"",
                        "→ Primary CTA: \"Book a free call\"",
                        "✔ Landing page spec generated. Ready to build with MUBX."
                    ],
                    style: "text-slate-100",
                    header: "Gemini CLI"
                };
            default:
                return { lines: [], style: "", header: "" };
        }
    }, [mode]);

    const { displayedLines } = useTypingEffect({
        lines: content.lines,
        speed: mode === 'build' ? 10 : 30, // Faster for build logs
        mode: mode
    });

    const opacity = useTransform(scrollProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

    return (
        <motion.div
            style={{ opacity }}
            className="absolute top-[15%] left-[10%] w-[80%] aspect-video rounded-xl overflow-hidden backdrop-blur-sm border border-white/10 bg-black/90 shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col pointer-events-none z-20"
        >
            {/* Terminal Header */}
            <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-4 justify-between">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs text-white/40 font-mono">{content.header}</div>
                <div className="w-12" /> {/* Spacer for centering */}
            </div>

            {/* Terminal Body */}
            <div className={cn("flex-1 p-6 font-mono text-sm sm:text-base overflow-hidden leading-relaxed", content.style)}>
                {displayedLines.map((line, index) => (
                    <div key={index} className="mb-1 break-words">
                        {line}
                    </div>
                ))}
                <span className="animate-pulse inline-block w-2.5 h-4 bg-current align-bottom ml-1"></span>
            </div>

            {/* Gemini Gradient Glow for mode 3 */}
            {mode === 'gemini' && (
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-transparent pointer-events-none mix-blend-screen" />
            )}
        </motion.div>
    );
}
