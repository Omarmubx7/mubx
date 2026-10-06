import React from 'react';

type GradientTextProps = {
    children: React.ReactNode;
    className?: string;
    from?: string;
};

export default function GradientText({
    children,
    className = "",
    from = "var(--neon)",
}: GradientTextProps) {
    return (
        <span
            className={className}
            style={{ color: from }}
        >
            {children}
        </span>
    );
}
