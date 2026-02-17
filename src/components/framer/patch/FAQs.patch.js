import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import {
    addFonts,
    addPropertyControls,
    ComponentViewportProvider,
    ControlType,
    cx,
    SmartComponentScopedContainer,
    useActiveVariantCallback,
    useComponentViewport,
    useLocaleInfo,
    useVariantState,
    withCSS,
    motion,
    LayoutGroup,
    AnimatePresence
} from "@/lib/framer-mock";
import * as React from "react";
import { useRef } from "react";
import LayoutJumpPreventer from "./LayoutJumpPreventer.patch.js";
import Accordion from "./Accordion.patch.js";

const cycleOrder = ["OtH3ntvnF", "XUqRqoQed", "A8XnEVnmU", "QCOL8Hqnm", "A4kLJrvxU", "H5fkQY29A", "FuMEtoQ5b"];
const serializationHash = "framer-6oNqe";
const variantClassNames = { A4kLJrvxU: "framer-v-1q8uw64", A8XnEVnmU: "framer-v-4ni21p", FuMEtoQ5b: "framer-v-19z9qbi", H5fkQY29A: "framer-v-eti8al", OtH3ntvnF: "framer-v-1vps5ya", QCOL8Hqnm: "framer-v-56pntx", XUqRqoQed: "framer-v-1lo4uhc" };

function addPropertyOverrides(overrides, ...variants) {
    const nextOverrides = {};
    variants?.forEach(variant => variant && Object.assign(nextOverrides, overrides[variant]));
    return nextOverrides;
}

const transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" };
const isSet = value => {
    if (Array.isArray(value)) return value.length > 0;
    return value !== undefined && value !== null && value !== "";
};
const transformTemplate1 = (_, t) => `translateX(-50%) ${t}`;

const Variants = motion.create(React.Fragment);
const humanReadableVariantMap = { "All closed": "OtH3ntvnF", "Question 1 / Opened": "XUqRqoQed", "Question 2 / Opened": "A8XnEVnmU", "Question 3 / Opened": "QCOL8Hqnm", "Question 4 / Opened": "A4kLJrvxU", "Question 5 / Opened": "H5fkQY29A", "Question 6 / Opened": "FuMEtoQ5b" };

const getProps = ({ answer1, answer2, answer3, answer4, answer5, answer6, height, id, question1, question2, question3, question4, question5, question6, width, ...props }) => {
    return {
        ...props,
        ApkKi7SYs: question4 ?? props.ApkKi7SYs ?? "How do I add this FAQ component to my project?",
        IdiX4w72s: question3 ?? props.IdiX4w72s ?? "What is this FAQ component?",
        j_EfdrGoD: answer2 ?? props.j_EfdrGoD ?? "Framer is fully visual with no code needed, but you can still add custom code and components for more control if you're a designer or developer.",
        rV343XnZp: answer4 ?? props.rV343XnZp ?? "After duplicating, copy and paste the component into your Framer project. Then edit the questions, answers, styles, and animations as needed.",
        svZsCKZ7a: question1 ?? props.svZsCKZ7a ?? "What is Framer?",
        SZGafHI2T: answer5 ?? props.SZGafHI2T ?? "Yes, absolutely. The component is built using native Framer tools, so you can tweak fonts, colors, spacing, animations, and layout however you like.",
        UV7N3G2yB: question2 ?? props.UV7N3G2yB ?? "Do I need to know how to code to use Framer?",
        variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "OtH3ntvnF",
        Wb41KwT0B: answer6 ?? props.Wb41KwT0B ?? "Yes, the FAQ component is fully responsive and adapts seamlessly to desktop, tablet, and mobile screen sizes.",
        xHGoJVa3_: answer1 ?? props.xHGoJVa3_ ?? "Framer is a no-code tool for building and publishing responsive websites—perfect for anyone creating modern, high-performance pages without coding.",
        yIgVEHYaT: answer3 ?? props.yIgVEHYaT ?? "This is a free, responsive FAQ section for Framer. Drop it into any project, customize styles and text, and use it to save time on support or info pages.",
        yKqHH3CY6: question6 ?? props.yKqHH3CY6 ?? "Is this component responsive?",
        Yp26WXhzg: question5 ?? props.Yp26WXhzg ?? "Can I customize the design of this component?"
    };
};

const createLayoutDependency = (props, variants) => {
    if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
    return variants.join("-");
};

const Component = React.forwardRef(function (props, ref) {
    const fallbackRef = useRef(null);
    const refBinding = ref ?? fallbackRef;
    const defaultLayoutId = React.useId();
    const { activeLocale, setLocale } = useLocaleInfo();
    const componentViewport = useComponentViewport();
    const { style, className, layoutId, variant, svZsCKZ7a, xHGoJVa3_, UV7N3G2yB, j_EfdrGoD, IdiX4w72s, yIgVEHYaT, ApkKi7SYs, rV343XnZp, Yp26WXhzg, SZGafHI2T, yKqHH3CY6, Wb41KwT0B, ...restProps } = getProps(props);
    const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "OtH3ntvnF", ref: refBinding, variant, variantClassNames });
    const layoutDependency = createLayoutDependency(props, variants);
    const { activeVariantCallback, delay } = useActiveVariantCallback(baseVariant);

    const Z3jnJDFUJ1nrdh4k = activeVariantCallback(async (...args) => { setVariant("XUqRqoQed"); });
    const Z3jnJDFUJccl284 = activeVariantCallback(async (...args) => { setVariant("A8XnEVnmU"); });
    const Z3jnJDFUJ1bpwyas = activeVariantCallback(async (...args) => { setVariant("QCOL8Hqnm"); });
    const Z3jnJDFUJ1maj9eu = activeVariantCallback(async (...args) => { setVariant("A4kLJrvxU"); });
    const Z3jnJDFUJ1gkqj2l = activeVariantCallback(async (...args) => { setVariant("H5fkQY29A"); });
    const Z3jnJDFUJ1rdds25 = activeVariantCallback(async (...args) => { setVariant("FuMEtoQ5b"); });

    const sharedStyleClassNames = [];
    const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
    const visible = isSet(svZsCKZ7a);
    const visible1 = isSet(UV7N3G2yB);
    const visible2 = isSet(IdiX4w72s);
    const visible3 = isSet(ApkKi7SYs);
    const visible4 = isSet(Yp26WXhzg);
    const visible5 = isSet(yKqHH3CY6);

    return _jsx(LayoutGroup, {
        id: layoutId ?? defaultLayoutId,
        children: _jsx(Variants, {
            animate: variants,
            initial: false,
            children: _jsxs(motion.div, {
                ...restProps,
                ...gestureHandlers,
                className: cx(scopingClassNames, "framer-1vps5ya", className, classNames),
                "data-framer-name": "All closed",
                layoutDependency: layoutDependency,
                layoutId: "OtH3ntvnF",
                ref: refBinding,
                style: { backgroundColor: "var(--token-66cf77ff-0f3f-4e1d-acc4-caa0067c546a, rgba(255, 255, 255, 0.08))", borderBottomLeftRadius: 26, borderBottomRightRadius: 26, borderTopLeftRadius: 26, borderTopRightRadius: 26, ...style },
                ...addPropertyOverrides({ A4kLJrvxU: { "data-framer-name": "Question 4 / Opened" }, A8XnEVnmU: { "data-framer-name": "Question 2 / Opened" }, FuMEtoQ5b: { "data-framer-name": "Question 6 / Opened" }, H5fkQY29A: { "data-framer-name": "Question 5 / Opened" }, QCOL8Hqnm: { "data-framer-name": "Question 3 / Opened" }, XUqRqoQed: { "data-framer-name": "Question 1 / Opened" } }, baseVariant, gestureVariant),
                children: [
                    visible && _jsx(ComponentViewportProvider, {
                        height: 76, width: `calc(${componentViewport?.width || "100vw"} - 8px)`,
                        y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 474) - 8 - -2) / 2 + 0 + 0),
                        ...addPropertyOverrides({ A4kLJrvxU: { y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 200) - 8 - -2) / 2 + 0 + 0) }, A8XnEVnmU: { y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 535) - 8 - -2) / 2 + 0 + 0) }, FuMEtoQ5b: { y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 200) - 8 - -2) / 2 + 0 + 0) }, H5fkQY29A: { y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 200) - 8 - -2) / 2 + 0 + 0) }, QCOL8Hqnm: { y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 200) - 8 - -2) / 2 + 0 + 0) }, XUqRqoQed: { y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 535) - 8 - -2) / 2 + 0 + 0) } }, baseVariant, gestureVariant),
                        children: _jsx(SmartComponentScopedContainer, {
                            className: "framer-tlr5cn-container", "data-framer-name": "Question 1", layoutDependency: layoutDependency, layoutId: "FZ1h0voiS-container", name: "Question 1", nodeId: "FZ1h0voiS", rendersWithMotion: true, scopeId: "XypzAWksI",
                            children: _jsx(Accordion, { DR_6QqGeh: xHGoJVa3_, height: "100%", id: "FZ1h0voiS", layoutId: "FZ1h0voiS", name: "Question 1", qQefXa5XK: svZsCKZ7a, style: { width: "100%" }, variant: "BnW8WAh4l", width: "100%", Z3jnJDFUJ: Z3jnJDFUJ1nrdh4k, ...addPropertyOverrides({ XUqRqoQed: { variant: "dWV_xs5Hs" } }, baseVariant, gestureVariant) })
                        })
                    }),
                    visible1 && _jsx(ComponentViewportProvider, {
                        height: 76, width: `calc(${componentViewport?.width || "100vw"} - 8px)`,
                        y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 474) - 8 - -2) / 2 + 0 + 0),
                        ...addPropertyOverrides({ A4kLJrvxU: { y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 200) - 8 - -2) / 2 + 0 + 0) }, A8XnEVnmU: { y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 535) - 8 - -2) / 2 + 0 + 0) }, FuMEtoQ5b: { y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 200) - 8 - -2) / 2 + 0 + 0) }, H5fkQY29A: { y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 200) - 8 - -2) / 2 + 0 + 0) }, QCOL8Hqnm: { y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 200) - 8 - -2) / 2 + 0 + 0) }, XUqRqoQed: { y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 535) - 8 - -2) / 2 + 0 + 0) } }, baseVariant, gestureVariant),
                        children: _jsx(SmartComponentScopedContainer, {
                            className: "framer-aosbsg-container", "data-framer-name": "Question 2", layoutDependency: layoutDependency, layoutId: "cT0eabrks-container", name: "Question 2", nodeId: "cT0eabrks", rendersWithMotion: true, scopeId: "XypzAWksI",
                            children: _jsx(Accordion, { DR_6QqGeh: j_EfdrGoD, height: "100%", id: "cT0eabrks", layoutId: "cT0eabrks", name: "Question 2", qQefXa5XK: UV7N3G2yB, style: { width: "100%" }, variant: "BnW8WAh4l", width: "100%", Z3jnJDFUJ: Z3jnJDFUJccl284, ...addPropertyOverrides({ A8XnEVnmU: { variant: "dWV_xs5Hs" } }, baseVariant, gestureVariant) })
                        })
                    }),
                    visible2 && _jsx(ComponentViewportProvider, {
                        height: 76, width: `calc(${componentViewport?.width || "100vw"} - 8px)`,
                        y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 474) - 8 - -2) / 2 + 0 + 0),
                        ...addPropertyOverrides({ A4kLJrvxU: { y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 200) - 8 - -2) / 2 + 0 + 0) }, A8XnEVnmU: { y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 535) - 8 - -2) / 2 + 0 + 0) }, FuMEtoQ5b: { y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 200) - 8 - -2) / 2 + 0 + 0) }, H5fkQY29A: { y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 200) - 8 - -2) / 2 + 0 + 0) }, QCOL8Hqnm: { y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 200) - 8 - -2) / 2 + 0 + 0) }, XUqRqoQed: { y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 535) - 8 - -2) / 2 + 0 + 0) } }, baseVariant, gestureVariant),
                        children: _jsx(SmartComponentScopedContainer, {
                            className: "framer-fg3b5b-container", "data-framer-name": "Question 3", layoutDependency: layoutDependency, layoutId: "YVmbnHADS-container", name: "Question 3", nodeId: "YVmbnHADS", rendersWithMotion: true, scopeId: "XypzAWksI",
                            children: _jsx(Accordion, { DR_6QqGeh: yIgVEHYaT, height: "100%", id: "YVmbnHADS", layoutId: "YVmbnHADS", name: "Question 3", qQefXa5XK: IdiX4w72s, style: { width: "100%" }, variant: "BnW8WAh4l", width: "100%", Z3jnJDFUJ: Z3jnJDFUJ1bpwyas, ...addPropertyOverrides({ QCOL8Hqnm: { variant: "dWV_xs5Hs" } }, baseVariant, gestureVariant) })
                        })
                    }),
                    visible3 && _jsx(ComponentViewportProvider, {
                        height: 76, width: `calc(${componentViewport?.width || "100vw"} - 8px)`,
                        y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 474) - 8 - -2) / 2 + 0 + 0),
                        ...addPropertyOverrides({ A4kLJrvxU: { y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 200) - 8 - -2) / 2 + 0 + 0) }, A8XnEVnmU: { y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 535) - 8 - -2) / 2 + 0 + 0) }, FuMEtoQ5b: { y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 200) - 8 - -2) / 2 + 0 + 0) }, H5fkQY29A: { y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 200) - 8 - -2) / 2 + 0 + 0) }, QCOL8Hqnm: { y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 200) - 8 - -2) / 2 + 0 + 0) }, XUqRqoQed: { y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 535) - 8 - -2) / 2 + 0 + 0) } }, baseVariant, gestureVariant),
                        children: _jsx(SmartComponentScopedContainer, {
                            className: "framer-fi65wa-container", "data-framer-name": "Question 4", layoutDependency: layoutDependency, layoutId: "or1B2YZwq-container", name: "Question 4", nodeId: "or1B2YZwq", rendersWithMotion: true, scopeId: "XypzAWksI",
                            children: _jsx(Accordion, { DR_6QqGeh: rV343XnZp, height: "100%", id: "or1B2YZwq", layoutId: "or1B2YZwq", name: "Question 4", qQefXa5XK: ApkKi7SYs, style: { width: "100%" }, variant: "BnW8WAh4l", width: "100%", Z3jnJDFUJ: Z3jnJDFUJ1maj9eu, ...addPropertyOverrides({ A4kLJrvxU: { variant: "dWV_xs5Hs" } }, baseVariant, gestureVariant) })
                        })
                    }),
                    visible4 && _jsx(ComponentViewportProvider, {
                        height: 76, width: `calc(${componentViewport?.width || "100vw"} - 8px)`,
                        y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 474) - 8 - -2) / 2 + 0 + 0),
                        ...addPropertyOverrides({ A4kLJrvxU: { y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 200) - 8 - -2) / 2 + 0 + 0) }, A8XnEVnmU: { y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 535) - 8 - -2) / 2 + 0 + 0) }, FuMEtoQ5b: { y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 200) - 8 - -2) / 2 + 0 + 0) }, H5fkQY29A: { y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 200) - 8 - -2) / 2 + 0 + 0) }, QCOL8Hqnm: { y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 200) - 8 - -2) / 2 + 0 + 0) }, XUqRqoQed: { y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 535) - 8 - -2) / 2 + 0 + 0) } }, baseVariant, gestureVariant),
                        children: _jsx(SmartComponentScopedContainer, {
                            className: "framer-19uhfs6-container", "data-framer-name": "Question 5", layoutDependency: layoutDependency, layoutId: "DO6blIlYc-container", name: "Question 5", nodeId: "DO6blIlYc", rendersWithMotion: true, scopeId: "XypzAWksI",
                            children: _jsx(Accordion, { DR_6QqGeh: SZGafHI2T, height: "100%", id: "DO6blIlYc", layoutId: "DO6blIlYc", name: "Question 5", qQefXa5XK: Yp26WXhzg, style: { width: "100%" }, variant: "BnW8WAh4l", width: "100%", Z3jnJDFUJ: Z3jnJDFUJ1gkqj2l, ...addPropertyOverrides({ H5fkQY29A: { variant: "dWV_xs5Hs" } }, baseVariant, gestureVariant) })
                        })
                    }),
                    visible5 && _jsx(ComponentViewportProvider, {
                        height: 76, width: `calc(${componentViewport?.width || "100vw"} - 8px)`,
                        y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 474) - 8 - -2) / 2 + 0 + 0),
                        ...addPropertyOverrides({ A4kLJrvxU: { y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 200) - 8 - -2) / 2 + 0 + 0) }, A8XnEVnmU: { y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 535) - 8 - -2) / 2 + 0 + 0) }, FuMEtoQ5b: { y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 200) - 8 - -2) / 2 + 0 + 0) }, H5fkQY29A: { y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 200) - 8 - -2) / 2 + 0 + 0) }, QCOL8Hqnm: { y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 200) - 8 - -2) / 2 + 0 + 0) }, XUqRqoQed: { y: (componentViewport?.y || 0) + 4 + (((componentViewport?.height || 535) - 8 - -2) / 2 + 0 + 0) } }, baseVariant, gestureVariant),
                        children: _jsx(SmartComponentScopedContainer, {
                            className: "framer-6q52zr-container", "data-framer-name": "Question 6", layoutDependency: layoutDependency, layoutId: "W29rEt4fy-container", name: "Question 6", nodeId: "W29rEt4fy", rendersWithMotion: true, scopeId: "XypzAWksI",
                            children: _jsx(Accordion, { DR_6QqGeh: Wb41KwT0B, height: "100%", id: "W29rEt4fy", layoutId: "W29rEt4fy", name: "Question 6", qQefXa5XK: yKqHH3CY6, style: { width: "100%" }, variant: "BnW8WAh4l", width: "100%", Z3jnJDFUJ: Z3jnJDFUJ1rdds25, ...addPropertyOverrides({ FuMEtoQ5b: { variant: "dWV_xs5Hs" } }, baseVariant, gestureVariant) })
                        })
                    }),
                    _jsx(ComponentViewportProvider, {
                        children: _jsx(SmartComponentScopedContainer, {
                            className: "framer-17779aa-container", isAuthoredByUser: true, isModuleExternal: true, layoutDependency: layoutDependency, layoutId: "nXh19Vzx8-container", nodeId: "nXh19Vzx8", rendersWithMotion: true, scopeId: "XypzAWksI", transformTemplate: transformTemplate1,
                            children: _jsx(LayoutJumpPreventer, { direction: "vertical", height: "100%", id: "nXh19Vzx8", layoutId: "nXh19Vzx8", width: "100%" })
                        })
                    })
                ]
            })
        })
    });
});

const css = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-6oNqe.framer-1y4v7wn, .framer-6oNqe .framer-1y4v7wn { display: block; }",
    ".framer-6oNqe.framer-1vps5ya { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: hidden; padding: 4px; position: relative; width: 800px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-6oNqe .framer-tlr5cn-container, .framer-6oNqe .framer-aosbsg-container, .framer-6oNqe .framer-fg3b5b-container, .framer-6oNqe .framer-fi65wa-container, .framer-6oNqe .framer-19uhfs6-container, .framer-6oNqe .framer-6q52zr-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-6oNqe .framer-17779aa-container { flex: none; height: auto; left: 50%; position: absolute; top: 0px; width: auto; z-index: 1; }"
];

const FramerXypzAWksI = withCSS(Component, css, "framer-6oNqe");
export default FramerXypzAWksI;
FramerXypzAWksI.displayName = "FAQs";
FramerXypzAWksI.defaultProps = { height: 474, width: 800 };

addPropertyControls(FramerXypzAWksI, {
    variant: {
        options: ["OtH3ntvnF", "XUqRqoQed", "A8XnEVnmU", "QCOL8Hqnm", "A4kLJrvxU", "H5fkQY29A", "FuMEtoQ5b"],
        optionTitles: ["All closed", "Question 1 / Opened", "Question 2 / Opened", "Question 3 / Opened", "Question 4 / Opened", "Question 5 / Opened", "Question 6 / Opened"],
        title: "Variant",
        type: ControlType.Enum
    },
    svZsCKZ7a: { defaultValue: "What is Framer?", displayTextArea: false, title: "Question 1", type: ControlType.String },
    xHGoJVa3_: { defaultValue: "Framer is a no-code tool for building and publishing responsive websites—perfect for anyone creating modern, high-performance pages without coding.", displayTextArea: true, title: "Answer 1", type: ControlType.String },
    UV7N3G2yB: { defaultValue: "Do I need to know how to code to use Framer?", displayTextArea: false, title: "Question 2", type: ControlType.String },
    j_EfdrGoD: { defaultValue: "Framer is fully visual with no code needed, but you can still add custom code and components for more control if you're a designer or developer.", displayTextArea: true, title: "Answer 2", type: ControlType.String },
    IdiX4w72s: { defaultValue: "What is this FAQ component?", displayTextArea: false, title: "Question 3", type: ControlType.String },
    yIgVEHYaT: { defaultValue: "This is a free, responsive FAQ section for Framer. Drop it into any project, customize styles and text, and use it to save time on support or info pages.", displayTextArea: true, title: "Answer 3", type: ControlType.String },
    ApkKi7SYs: { defaultValue: "How do I add this FAQ component to my project?", displayTextArea: false, title: "Question 4", type: ControlType.String },
    rV343XnZp: { defaultValue: "After duplicating, copy and paste the component into your Framer project. Then edit the questions, answers, styles, and animations as needed.", displayTextArea: true, title: "Answer 4", type: ControlType.String },
    Yp26WXhzg: { defaultValue: "Can I customize the design of this component?", displayTextArea: false, title: "Question 5", type: ControlType.String },
    SZGafHI2T: { defaultValue: "Yes, absolutely. The component is built using native Framer tools, so you can tweak fonts, colors, spacing, animations, and layout however you like.", displayTextArea: true, title: "Answer 5", type: ControlType.String },
    yKqHH3CY6: { defaultValue: "Is this component responsive?", displayTextArea: false, title: "Question 6", type: ControlType.String },
    Wb41KwT0B: { defaultValue: "Yes, the FAQ component is fully responsive and adapts seamlessly to desktop, tablet, and mobile screen sizes.", displayTextArea: true, title: "Answer 6", type: ControlType.String }
});

addFonts(FramerXypzAWksI, [{ explicitInter: true, fonts: [] }]);
