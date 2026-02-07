'use client';

import { useEffect } from 'react';
import { RefreshCcw } from 'lucide-react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6 text-center">
            <h1 className="text-neon text-6xl font-black mb-4">500</h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Something went wrong!</h2>
            <p className="text-muted text-lg max-w-md mb-8">
                An unexpected error has occurred. We've been notified and are looking into it.
            </p>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
                className="flex items-center gap-2 px-8 py-3 bg-neon text-black font-bold rounded-full hover:bg-white transition-all transform hover:scale-105"
            >
                <RefreshCcw className="w-5 h-5" />
                Try Again
            </button>
        </div>
    );
}
