import { useState, useEffect, useCallback } from 'react';

interface UseTypingEffectProps {
    lines: string[];
    speed?: number; // ms per char
    mode: string;   // Unique key to reset typing on change
}

export function useTypingEffect({ lines, speed = 30, mode }: UseTypingEffectProps) {
    const [displayedLines, setDisplayedLines] = useState<string[]>([]);
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        // Reset state when mode changes
        setDisplayedLines([]);
        setIsCompleted(false);

        let currentLineIndex = 0;
        let currentCharIndex = 0;
        let iscancelled = false;
        let timeoutId: NodeJS.Timeout;

        const typeNextChar = () => {
            if (iscancelled) return;

            if (currentLineIndex >= lines.length) {
                setIsCompleted(true);
                return;
            }

            const currentLine = lines[currentLineIndex];

            if (currentCharIndex < currentLine.length) {
                // Add next character
                setDisplayedLines((prev) => {
                    const newLines = [...prev];
                    if (newLines[currentLineIndex] === undefined) {
                        newLines[currentLineIndex] = '';
                    }
                    newLines[currentLineIndex] = currentLine.slice(0, currentCharIndex + 1);
                    return newLines;
                });
                currentCharIndex++;
                timeoutId = setTimeout(typeNextChar, speed);
            } else {
                // Line finished, move to next line
                currentLineIndex++;
                currentCharIndex = 0;
                // Add a small pause between lines
                timeoutId = setTimeout(typeNextChar, speed * 5);
            }
        };

        // Start typing
        timeoutId = setTimeout(typeNextChar, 100);

        return () => {
            iscancelled = true;
            clearTimeout(timeoutId);
        };
    }, [lines, speed, mode]);

    return { displayedLines, isCompleted };
}
