import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addPropertyControls, ControlType } from "@/lib/framer-mock";
import * as React from "react";
import { motion } from "framer-motion";

export default function ProTextTypeEffect(props) {
    const { text, as: asTag, typingSpeed, initialDelay, pauseDuration, deletingSpeed, loop, className, showCursor, hideCursorWhileTyping, cursorMode, cursorCharacterPreset, customCursorCharacter, cursorClassName, cursorBlinkDuration, textColors, cursorColorMode, cursorCustomColor, variableSpeed, startOnVisible, reverseMode, sizingMode, minFont, maxFont, fluidVw, style, ...rest } = props;

    const textArray = React.useMemo(() => Array.isArray(text) ? text : [text ?? ""], [text]);
    const cursorChar = cursorMode === "custom" ? customCursorCharacter?.length ? customCursorCharacter : "|" : cursorCharacterPreset;
    const [displayedText, setDisplayedText] = React.useState("");
    const [currentCharIndex, setCurrentCharIndex] = React.useState(0);
    const [isDeleting, setIsDeleting] = React.useState(false);
    const [currentTextIndex, setCurrentTextIndex] = React.useState(0);
    const [isVisible, setIsVisible] = React.useState(!startOnVisible);

    const firstColor = textColors && textColors[0] || "currentColor";
    const resolvedCursorColor = cursorColorMode === "custom" && cursorCustomColor ? cursorCustomColor : firstColor;
    const containerRef = React.useRef(null);
    const As = asTag || "div";

    const getRandomSpeed = React.useCallback(() => {
        if (!variableSpeed) return typingSpeed;
        const { min, max } = variableSpeed;
        const lo = Math.max(0, Number(min) || 0);
        const hi = Math.max(lo, Number(max) || lo);
        return Math.random() * (hi - lo) + lo;
    }, [variableSpeed, typingSpeed]);

    const getCurrentTextColor = React.useCallback(() => {
        if (!textColors || textColors.length === 0) return "currentColor";
        return textColors[currentTextIndex % textColors.length];
    }, [textColors, currentTextIndex]);

    React.useEffect(() => {
        if (!startOnVisible || !containerRef.current) return;
        const obs = new IntersectionObserver(entries => {
            entries.forEach(entry => { if (entry.isIntersecting) setIsVisible(true); });
        }, { threshold: .1 });
        obs.observe(containerRef.current);
        return () => obs.disconnect();
    }, [startOnVisible]);

    React.useEffect(() => {
        if (!isVisible) return;
        let timeout;
        const currentText = textArray[currentTextIndex] ?? "";
        const processed = reverseMode ? currentText.split("").reverse().join("") : currentText;

        const run = () => {
            if (isDeleting) {
                if (displayedText.length === 0) {
                    setIsDeleting(false);
                    if (currentTextIndex === textArray.length - 1 && !loop) return;
                    setCurrentTextIndex(i => (i + 1) % textArray.length);
                    setCurrentCharIndex(0);
                } else {
                    timeout = setTimeout(() => {
                        setDisplayedText(prev => prev.slice(0, -1));
                    }, deletingSpeed);
                }
            } else {
                if (currentCharIndex < processed.length) {
                    timeout = setTimeout(() => {
                        setDisplayedText(prev => prev + processed[currentCharIndex]);
                        setCurrentCharIndex(i => i + 1);
                    }, variableSpeed ? getRandomSpeed() : typingSpeed);
                } else {
                    if (textArray.length > 1 && (loop || currentTextIndex < textArray.length - 1)) {
                        timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
                    }
                }
            }
        };

        if (currentCharIndex === 0 && !isDeleting && displayedText === "") {
            timeout = setTimeout(run, initialDelay);
        } else {
            run();
        }
        return () => timeout && clearTimeout(timeout);
    }, [isVisible, textArray, currentTextIndex, loop, currentCharIndex, displayedText, isDeleting, typingSpeed, deletingSpeed, pauseDuration, initialDelay, reverseMode, variableSpeed, getRandomSpeed]);

    const fluidStyle = sizingMode === "fluid" ? { fontSize: `clamp(${minFont}px, ${fluidVw}vw, ${maxFont}px)` } : {};
    const baseStyle = { display: "block", width: "100%", height: "100%", whiteSpace: "pre-wrap", overflow: "visible", textAlign: props.textAlign, ...style };
    const shouldHideCursor = hideCursorWhileTyping && (currentCharIndex < (textArray[currentTextIndex] ?? "").length || isDeleting);

    return _jsxs(As, {
        ref: containerRef, className: `text-type ${className || ""}`, style: baseStyle, ...rest,
        children: [
            _jsx("span", { style: { all: "unset", display: "inline", color: getCurrentTextColor(), ...props.font, ...fluidStyle }, children: displayedText }),
            showCursor && !shouldHideCursor && _jsx(motion.span, {
                style: { marginLeft: "0.25rem", display: "inline-block", color: resolvedCursorColor, ...props.font, ...fluidStyle },
                animate: { opacity: [1, 0] }, transition: { duration: cursorBlinkDuration, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                children: cursorChar
            })
        ]
    });
}
ProTextTypeEffect.displayName = "ProTextTypeEffect";

addPropertyControls(ProTextTypeEffect, {
    text: { type: ControlType.Array, control: { type: ControlType.String } },
    typingSpeed: { type: ControlType.Number, defaultValue: 50 },
    deletingSpeed: { type: ControlType.Number, defaultValue: 30 },
    pauseDuration: { type: ControlType.Number, defaultValue: 2000 },
    loop: { type: ControlType.Boolean, defaultValue: true }
});
