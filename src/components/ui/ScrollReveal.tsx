'use client';

import { useEffect, useState, useRef } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right';
    delay?: number;
    className?: string;
}

/**
 * ScrollReveal component for fade-in animations on scroll
 * Uses IntersectionObserver for performance-optimized scroll detection
 * 
 * @param children - Content to reveal
 * @param direction - Animation direction (default: 'up')
 * @param delay - Animation delay in ms (default: 0)
 * @param className - Additional CSS classes
 */
export default function ScrollReveal({
    children,
    direction = 'up',
    delay = 0,
    className = '',
}: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Optionally unobserve after revealing
                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                }
            },
            {
                threshold: 0.1, // Trigger when 10% visible
                rootMargin: '0px 0px -50px 0px', // Trigger slightly before entering viewport
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const getTransform = () => {
        if (isVisible) return 'translate(0, 0)';

        switch (direction) {
            case 'up':
                return 'translate(0, 40px)';
            case 'down':
                return 'translate(0, -40px)';
            case 'left':
                return 'translate(40px, 0)';
            case 'right':
                return 'translate(-40px, 0)';
            default:
                return 'translate(0, 40px)';
        }
    };

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: getTransform(),
                transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}
