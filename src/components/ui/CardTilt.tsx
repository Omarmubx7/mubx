'use client';

import React, { useState, useRef, ReactNode } from 'react';

interface CardTiltProps {
    children: ReactNode;
    className?: string;
    maxTilt?: number;
    perspective?: number;
    scale?: number;
}

export default function CardTilt({
    children,
    className = '',
    maxTilt = 8,
    perspective = 1000,
    scale = 1.02,
}: Readonly<CardTiltProps>) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [tiltStyles, setTiltStyles] = useState<React.CSSProperties>({
        transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Set CSS variables for globals.css card-glow-effect
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);

        // Mouse coordinates relative to card center
        const mouseX = x - width / 2;
        const mouseY = y - height / 2;

        // Calculate rotation angles (X is tilt around horizontal axis, Y is tilt around vertical axis)
        const rotateX = -(mouseY / (height / 2)) * maxTilt;
        const rotateY = (mouseX / (width / 2)) * maxTilt;

        setTiltStyles({
            transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
            transition: 'transform 0.1s ease-out',
        });
    };

    const handleMouseLeave = () => {
        setTiltStyles({
            transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`card-glow-effect cursor-default ${className}`}
            style={{
                ...tiltStyles,
                transformStyle: 'preserve-3d',
            }}
        >
            {/* transformStyle preserve-3d enables child 3D layers if any */}
            <div style={{ transform: 'translateZ(10px)', transformStyle: 'preserve-3d' }} className="h-full w-full">
                {children}
            </div>
        </div>
    );
}
