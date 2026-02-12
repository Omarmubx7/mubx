
import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'neon' | 'outline' | 'ghost';
    className?: string;
}

export default function Badge({ children, variant = 'outline', className = '' }: BadgeProps) {
    const baseStyles = "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300";

    const variants = {
        neon: "bg-neon/10 text-neon border border-neon/30 shadow-[0_0_10px_rgba(255,30,30,0.2)]",
        outline: "bg-foreground/5 text-foreground/80 border border-foreground/10 hover:border-neon hover:text-neon",
        ghost: "bg-transparent text-muted hover:text-foreground"
    };



    return (
        <span className={`${baseStyles} ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
}
