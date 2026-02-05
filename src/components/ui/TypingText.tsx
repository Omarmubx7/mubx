
'use client';

import Typewriter from 'typewriter-effect';

interface TypingTextProps {
    strings: string[];
    className?: string;
}

export default function TypingText({ strings, className = "" }: TypingTextProps) {
    return (
        <div className={`inline-block font-sans ${className}`}>
            <Typewriter
                options={{
                    strings: strings,
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    deleteSpeed: 40,
                    cursor: '|',
                }}
            />
        </div>
    );
}
