'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
}

export default function TextReveal({ text, className = "", delay = 0 }: TextRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const words = text.split(" ");

    return (
        <span ref={ref} className={`inline-block ${className}`}>
            {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.2em] last:mr-0 align-top">
                    <motion.span
                        initial={{ y: "100%" }}
                        animate={isInView ? { y: 0 } : {}}
                        transition={{
                            duration: 0.5,
                            ease: [0.33, 1, 0.68, 1],
                            delay: delay + i * 0.02
                        }}
                        className="inline-block"
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}
