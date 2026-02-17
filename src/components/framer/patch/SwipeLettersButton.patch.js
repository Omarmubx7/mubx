import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { addPropertyControls, ControlType } from "@/lib/framer-mock";

export default function SwipeLettersButton(props) {
    const {
        label = "GET IN TOUCH",
        defaultState = { bgColor: "#1D1D1D", borderColor: "#414141", textColor: "#FFFFFF" },
        hoverState = { bgColor: "#2D2D2D", borderColor: "#515151", textColor: "#FFFFFF" },
        radius = 9999,
        paddingX = 24,
        paddingY = 16,
        font = { fontSize: "18px", variant: "Semibold", letterSpacing: "0.4px", textAlign: "center" },
        align = "center",
        showBorder = true,
        direction = "alternate",
        duration = 380,
        easing = "cubic-bezier(.25,.75,.25,1)",
        stagger = 18,
        link = ""
    } = props;

    const [hovered, setHovered] = React.useState(false);
    const chars = React.useMemo(() => Array.from(label || "").map(c => c === " " ? "\xa0" : c), [label]);

    const handleClick = () => {
        if (link && typeof window !== "undefined") {
            if (link.startsWith("http") || link.startsWith("//")) {
                window.open(link, "_blank", "noopener,noreferrer");
            } else {
                window.location.href = link;
            }
        }
    };

    const currentBgColor = hovered ? hoverState.bgColor : defaultState.bgColor;
    const currentBorderColor = hovered ? hoverState.borderColor : defaultState.borderColor;
    const currentTextColor = hovered ? hoverState.textColor : defaultState.textColor;

    return _jsx("div", {
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false),
        onClick: handleClick,
        "aria-label": label,
        role: "button",
        tabIndex: 0,
        style: {
            width: "100%", height: "100%", display: "flex", alignItems: "center",
            justifyContent: align === "center" ? "center" : align === "start" ? "flex-start" : "flex-end",
            backgroundColor: currentBgColor, borderRadius: radius, border: showBorder ? `1px solid ${currentBorderColor}` : "none",
            overflow: "hidden", position: "relative", userSelect: "none", cursor: "pointer",
            transition: "background-color 0.2s ease, border-color 0.2s ease"
        },
        children: _jsx("div", {
            style: { padding: `${paddingY}px ${paddingX}px`, width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: align === "center" ? "center" : align === "start" ? "flex-start" : "flex-end", gap: `${parseFloat(font.letterSpacing) || .4}px` },
            children: chars.map((ch, i) => {
                const dir = direction === "alternate" ? i % 2 === 0 ? "top" : "bottom" : direction;
                const initY = dir === "top" ? "-50%" : "0%";
                const hoverY = dir === "top" ? "0%" : "-50%";
                const delay = `${i * stagger}ms`;
                return _jsx("span", {
                    style: { position: "relative", display: "inline-block", height: "1em", overflow: "hidden", fontFamily: font.fontFamily || "inherit", fontSize: font.fontSize, fontWeight: font.fontWeight, fontStyle: font.fontStyle, lineHeight: 1 },
                    children: _jsxs("span", {
                        style: { display: "grid", gridAutoRows: "1em", transform: `translateY(${hovered ? hoverY : initY})`, transitionProperty: "transform", transitionDuration: `${duration}ms`, transitionTimingFunction: easing, transitionDelay: delay, willChange: "transform" },
                        "aria-hidden": "true",
                        children: [
                            _jsx("span", { style: { color: currentTextColor, transition: "color 0.2s ease" }, children: ch }),
                            _jsx("span", { style: { color: currentTextColor, transition: "color 0.2s ease" }, children: ch })
                        ]
                    })
                }, `${ch}-${i}`);
            })
        })
    });
}

SwipeLettersButton.displayName = "SwipeLettersButton";

addPropertyControls(SwipeLettersButton, {
    label: { type: ControlType.String, title: "Label", defaultValue: "GET IN TOUCH" },
    link: { type: ControlType.Link, title: "Link", defaultValue: "" },
    defaultState: { type: ControlType.Object, title: "Default", controls: { bgColor: { type: ControlType.Color }, borderColor: { type: ControlType.Color }, textColor: { type: ControlType.Color } } },
    hoverState: { type: ControlType.Object, title: "Hover", controls: { bgColor: { type: ControlType.Color }, borderColor: { type: ControlType.Color }, textColor: { type: ControlType.Color } } },
    showBorder: { type: ControlType.Boolean, defaultValue: true },
    radius: { type: ControlType.Number, defaultValue: 9999 }
});
