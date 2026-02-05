
'use client';

import Typewriter from 'typewriter-effect';

interface TypingTextProps {
    strings: string[];
    className?: string;
    loop?: boolean;
    delay?: number;
}

export default function TypingText({ strings, className = "", loop = true, delay = 50 }: TypingTextProps) {
    return (
        <div className={`inline-block font-sans ${className}`}>
            <Typewriter
                options={{
                    strings: strings,
                    autoStart: true,
                    loop: loop,
                    delay: delay,
                    deleteSpeed: 40,
                    cursor: '|',
                }}
            />
        </div>
    );
}
