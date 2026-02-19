/* eslint-disable */
import * as React from "react";
import { addPropertyControls, ControlType } from "@/lib/framer-mock";

const { useRef, useEffect, useCallback } = React;

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
        }
        : { r: 0, g: 0, b: 0 };
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*!?<>{}[]";
const FONT_SIZE = 16;
const CHAR_WIDTH = 10;
const CHAR_HEIGHT = 20;

function LetterGlitch({
    glitchColors = ["#4a0d0d", "#E11D1D", "#dc6161"],
    glitchSpeed = 50,
    smooth = true,
    centerVignette = true,
    outerVignette = true,
    backgroundColor = "#000000",
    style = {},
    ...rest
}) {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const gridRef = useRef([]);
    const targetColorsRef = useRef([]);
    const currentColorsRef = useRef([]);
    const lastUpdateRef = useRef(0);
    const sizeRef = useRef({ width: 0, height: 0, cols: 0, rows: 0 });

    const getRandomChar = useCallback(() => {
        return CHARS[Math.floor(Math.random() * CHARS.length)];
    }, []);

    const getRandomColor = useCallback(() => {
        return glitchColors[Math.floor(Math.random() * glitchColors.length)];
    }, [glitchColors]);

    const initGrid = useCallback(
        (cols, rows) => {
            const grid = [];
            const targets = [];
            const currents = [];
            for (let i = 0; i < rows; i++) {
                const row = [];
                const targetRow = [];
                const currentRow = [];
                for (let j = 0; j < cols; j++) {
                    row.push(getRandomChar());
                    const color = hexToRgb(getRandomColor());
                    targetRow.push(color);
                    currentRow.push({ ...color });
                }
                grid.push(row);
                targets.push(targetRow);
                currents.push(currentRow);
            }
            gridRef.current = grid;
            targetColorsRef.current = targets;
            currentColorsRef.current = currents;
        },
        [getRandomChar, getRandomColor]
    );

    const draw = useCallback(
        (ctx, timestamp) => {
            const { width, height, cols, rows } = sizeRef.current;
            if (!cols || !rows) return;

            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, width, height);

            ctx.font = `${FONT_SIZE}px monospace`;
            ctx.textBaseline = "top";

            const elapsed = timestamp - lastUpdateRef.current;
            const shouldUpdate = elapsed > glitchSpeed;

            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    if (smooth) {
                        const current = currentColorsRef.current[i]?.[j];
                        const target = targetColorsRef.current[i]?.[j];
                        if (current && target) {
                            current.r += (target.r - current.r) * 0.1;
                            current.g += (target.g - current.g) * 0.1;
                            current.b += (target.b - current.b) * 0.1;
                        }
                    }

                    const color = smooth
                        ? currentColorsRef.current[i]?.[j]
                        : targetColorsRef.current[i]?.[j];

                    if (color) {
                        ctx.fillStyle = `rgb(${Math.round(color.r)},${Math.round(color.g)},${Math.round(color.b)})`;
                    }

                    const char = gridRef.current[i]?.[j] || "";
                    ctx.fillText(char, j * CHAR_WIDTH, i * CHAR_HEIGHT);
                }
            }

            // Randomly update some cells
            if (shouldUpdate) {
                lastUpdateRef.current = timestamp;
                const numUpdates = Math.floor(cols * rows * 0.05);
                for (let k = 0; k < numUpdates; k++) {
                    const ri = Math.floor(Math.random() * rows);
                    const ci = Math.floor(Math.random() * cols);
                    if (gridRef.current[ri]) {
                        gridRef.current[ri][ci] = getRandomChar();
                        if (targetColorsRef.current[ri]) {
                            targetColorsRef.current[ri][ci] = hexToRgb(
                                getRandomColor()
                            );
                            if (!smooth && currentColorsRef.current[ri]) {
                                currentColorsRef.current[ri][ci] = {
                                    ...targetColorsRef.current[ri][ci],
                                };
                            }
                        }
                    }
                }
            }

            // Outer vignette
            if (outerVignette) {
                const gradient = ctx.createRadialGradient(
                    width / 2,
                    height / 2,
                    Math.min(width, height) * 0.2,
                    width / 2,
                    height / 2,
                    Math.max(width, height) * 0.7
                );
                gradient.addColorStop(0, "transparent");
                gradient.addColorStop(1, backgroundColor);
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, width, height);
            }

            // Center vignette
            if (centerVignette) {
                const gradient = ctx.createRadialGradient(
                    width / 2,
                    height / 2,
                    0,
                    width / 2,
                    height / 2,
                    Math.min(width, height) * 0.4
                );
                gradient.addColorStop(0, `${backgroundColor}88`);
                gradient.addColorStop(1, "transparent");
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, width, height);
            }
        },
        [
            backgroundColor,
            glitchSpeed,
            smooth,
            outerVignette,
            centerVignette,
            getRandomChar,
            getRandomColor,
        ]
    );

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const handleResize = () => {
            const parent = canvas.parentElement;
            if (!parent) return;
            const { width, height } = parent.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.scale(dpr, dpr);
            const cols = Math.ceil(width / CHAR_WIDTH);
            const rows = Math.ceil(height / CHAR_HEIGHT);
            sizeRef.current = { width, height, cols, rows };
            initGrid(cols, rows);
        };

        handleResize();
        const resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(canvas.parentElement || canvas);

        const animate = (timestamp) => {
            draw(ctx, timestamp);
            animationRef.current = requestAnimationFrame(animate);
        };
        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
            resizeObserver.disconnect();
        };
    }, [draw, initGrid]);

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                position: "relative",
                overflow: "hidden",
                ...style,
            }}
            {...rest}
        >
            <canvas
                ref={canvasRef}
                style={{
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }}
            />
        </div>
    );
}

addPropertyControls(LetterGlitch, {
    glitchColors: {
        type: ControlType.Array,
        title: "Colors",
        control: { type: ControlType.Color },
        defaultValue: ["#4a0d0d", "#E11D1D", "#dc6161"],
    },
    glitchSpeed: {
        type: ControlType.Number,
        title: "Speed (ms)",
        defaultValue: 50,
        min: 10,
        max: 500,
        step: 10,
    },
    smooth: {
        type: ControlType.Boolean,
        title: "Smooth",
        defaultValue: true,
    },
    centerVignette: {
        type: ControlType.Boolean,
        title: "Center Vignette",
        defaultValue: true,
    },
    outerVignette: {
        type: ControlType.Boolean,
        title: "Outer Vignette",
        defaultValue: true,
    },
    backgroundColor: {
        type: ControlType.Color,
        title: "Background",
        defaultValue: "#000000",
    },
});

export default LetterGlitch;
