'use client';

import { motion } from 'framer-motion';

interface AnimatedTextProps {
    text: string;
    className?: string;
    delay?: number;
    by?: "word" | "character";
    immediate?: boolean;
}

export default function AnimatedText({ text, className = "", delay = 0, by = "word", immediate = false }: AnimatedTextProps) {

    const words = text.split(" ");

    const container = {
        hidden: { opacity: immediate ? 1 : 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: by === "character" ? 0.05 : 0.1,
                delayChildren: delay * i
            },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            } as any,
        },
        hidden: {
            opacity: immediate ? 1 : 0,
            y: immediate ? 0 : 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            } as any,
        },
    };


    return (
        <motion.span
            className={`inline-block ${className}`}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
        >
            {by === "character" ? (
                words.map((word, index) => (
                    <span key={index} className="inline-block">
                        {word.split("").map((character, index) => (
                            <motion.span
                                key={index}
                                variants={child}
                                className="inline-block will-change-[transform,opacity]"
                            >
                                {character}
                            </motion.span>
                        ))}
                        {index < words.length - 1 && <span className="inline-block">&nbsp;</span>}
                    </span>
                ))
            ) : (
                words.map((word, index) => (
                    <motion.span
                        key={index}
                        variants={child}
                        className="inline-block mr-[0.25em] will-change-[transform,opacity]"
                    >
                        {word}
                    </motion.span>
                ))
            )}

        </motion.span>
    );
}
