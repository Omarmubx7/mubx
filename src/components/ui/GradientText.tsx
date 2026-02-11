import React from 'react';

type GradientTextProps = {
    children: React.ReactNode;
    className?: string;
    from?: string;
    to?: string;
};

export default function GradientText({
    children,
    className = "",
    from = "var(--neon)",
    to = "var(--foreground)"
}: GradientTextProps) {
    return (
        <span
            className={`bg-gradient-to-r from-[${from}] to-[${to}] bg-clip-text text-transparent ${className}`}
            style={{ backgroundImage: `linear-gradient(to right, ${from}, ${to})` }} // Fallback/Force for potential tailwind arbitary value issues
        >
            {children}
        </span>
    );
}
