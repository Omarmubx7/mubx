'use client';

interface LoadingSkeletonProps {
    className?: string;
    variant?: 'text' | 'circular' | 'rectangular' | 'card';
    width?: string;
    height?: string;
    count?: number;
}

export default function LoadingSkeleton({
    className = '',
    variant = 'rectangular',
    width = '100%',
    height = '20px',
    count = 1
}: LoadingSkeletonProps) {
    const baseClasses = 'animate-pulse bg-muted/20 rounded';

    const variantClasses = {
        text: 'h-4 rounded',
        circular: 'rounded-full',
        rectangular: 'rounded-lg',
        card: 'rounded-xl'
    };

    const skeletonClass = `${baseClasses} ${variantClasses[variant]} ${className}`;

    if (count > 1) {
        return (
            <div className="space-y-3">
                {Array.from({ length: count }).map((_, index) => (
                    <div
                        key={index}
                        className={skeletonClass}
                        style={{ width, height }}
                    />
                ))}
            </div>
        );
    }

    return (
        <div
            className={skeletonClass}
            style={{ width, height }}
        />
    );
}

// Specialized skeleton components for common use cases
export function HeroSkeleton() {
    return (
        <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                {/* Left Column */}
                <div className="flex-1 space-y-6">
                    <LoadingSkeleton variant="rectangular" width="150px" height="32px" />
                    <LoadingSkeleton variant="text" width="100%" height="60px" count={3} />
                    <LoadingSkeleton variant="text" width="80%" height="24px" count={2} />
                    <div className="flex gap-4">
                        <LoadingSkeleton variant="rectangular" width="180px" height="56px" />
                        <LoadingSkeleton variant="rectangular" width="180px" height="56px" />
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex-1">
                    <LoadingSkeleton variant="circular" width="400px" height="400px" />
                </div>
            </div>
        </div>
    );
}

export function ProjectCardSkeleton() {
    return (
        <div className="bg-card border border-border rounded-xl p-6 space-y-4">
            <LoadingSkeleton variant="rectangular" width="100%" height="200px" />
            <LoadingSkeleton variant="text" width="60%" height="24px" />
            <LoadingSkeleton variant="text" width="100%" height="16px" count={3} />
            <div className="flex gap-2">
                <LoadingSkeleton variant="rectangular" width="80px" height="24px" />
                <LoadingSkeleton variant="rectangular" width="80px" height="24px" />
                <LoadingSkeleton variant="rectangular" width="80px" height="24px" />
            </div>
        </div>
    );
}

export function BlogPostSkeleton() {
    return (
        <div className="space-y-4">
            <LoadingSkeleton variant="rectangular" width="100%" height="240px" />
            <LoadingSkeleton variant="text" width="40%" height="20px" />
            <LoadingSkeleton variant="text" width="90%" height="28px" />
            <LoadingSkeleton variant="text" width="100%" height="16px" count={3} />
        </div>
    );
}
