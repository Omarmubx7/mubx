'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
    splitType?: 'word' | 'letter';
}

export default function TextReveal({ text, className = "", delay = 0, splitType = 'letter' }: TextRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const words = text.split(" ");

    return (
        <span ref={ref} className={`inline-block ${className}`}>
            {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block whitespace-nowrap overflow-hidden mr-[0.25em] last:mr-0 align-top">
                    {splitType === 'word' ? (
                        <motion.span
                            initial={{ y: "100%", opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : {}}
                            transition={{
                                duration: 0.6,
                                ease: [0.33, 1, 0.68, 1], // Custom cubic-bezier for snappy feel
                                delay: delay + wordIndex * 0.05
                            }}
                            className="inline-block"
                        >
                            {word}
                        </motion.span>
                    ) : (
                        word.split("").map((letter, letterIndex) => (
                            <motion.span
                                key={letterIndex}
                                initial={{ y: "100%", opacity: 0, rotateX: -90 }}
                                animate={isInView ? { y: 0, opacity: 1, rotateX: 0 } : {}}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.16, 1, 0.3, 1], // Dramatic military-precision ease
                                    delay: delay + (wordIndex * 0.1) + (letterIndex * 0.02)
                                }}
                                className="inline-block origin-bottom"
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                {letter}
                            </motion.span>
                        ))
                    )}
                </span>
            ))}
        </span>
    );
}
