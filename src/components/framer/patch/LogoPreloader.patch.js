import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState, startTransition } from "react";
import { addPropertyControls, ControlType } from "@/lib/framer-mock";

export default function LogoPreloader(props) {
    const {
        logo = { src: "", alt: "Logo" },
        backgroundColor = "#FFFFFF",
        duration = 2,
        logoSize = 80,
        videoFile = "",
        backgroundImage = { src: "", alt: "" },
        style
    } = props;

    const [phase, setPhase] = useState("init");

    useEffect(() => {
        const t0 = setTimeout(() => { startTransition(() => setPhase("loading")); }, 50);
        const t1 = setTimeout(() => { startTransition(() => setPhase("logoOut")); }, duration * 1000 + 50);
        const t2 = setTimeout(() => { startTransition(() => setPhase("done")); }, duration * 1000 + 750);
        return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); };
    }, [duration]);

    if (phase === "done") return null;

    let logoTranslateY = 0;
    let logoOpacity = 1;

    if (phase === "init") {
        logoTranslateY = 80;
        logoOpacity = 0;
    } else if (phase === "loading") {
        logoTranslateY = 0;
        logoOpacity = 1;
    } else if (phase === "logoOut") {
        logoTranslateY = -80;
        logoOpacity = 0;
    }

    const bgOpacity = phase === "logoOut" ? 0 : 1;
    const transition = "all 0.7s cubic-bezier(.7,.2,.2,1)";

    return _jsxs("div", {
        style: {
            ...style,
            position: "fixed",
            inset: 0,
            width: "100%",
            height: "100%",
            background: videoFile || backgroundImage.src ? undefined : backgroundColor,
            backgroundImage: !videoFile && backgroundImage.src ? `url(${backgroundImage.src})` : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: `opacity 0.7s cubic-bezier(.7,.2,.2,1)`,
            opacity: bgOpacity,
            pointerEvents: phase === "done" ? "none" : "all",
            zIndex: 9999,
            overflow: "hidden"
        },
        "aria-label": "Loading",
        role: "status",
        children: [
            videoFile && _jsx("video", {
                src: videoFile, autoPlay: true, muted: true, loop: true, playsInline: true,
                style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }
            }),
            _jsx("img", {
                src: logo.src, alt: logo.alt || "Logo",
                style: { width: logoSize, height: logoSize, objectFit: "contain", transition, transform: `translateY(${logoTranslateY}px)`, opacity: logoOpacity, willChange: "transform, opacity", userSelect: "none", zIndex: 1 },
                draggable: false
            })
        ]
    });
}
LogoPreloader.displayName = "LogoPreloader";

addPropertyControls(LogoPreloader, {
    logo: { type: ControlType.Image, title: "Logo" },
    videoFile: { type: ControlType.File, title: "Video Background" },
    backgroundImage: { type: ControlType.Image, title: "Background Image" },
    backgroundColor: { type: ControlType.Color, title: "Background", defaultValue: "#FFFFFF" },
    duration: { type: ControlType.Number, title: "Duration (s)", defaultValue: 2 },
    logoSize: { type: ControlType.Number, title: "Logo Size", defaultValue: 80 }
});
