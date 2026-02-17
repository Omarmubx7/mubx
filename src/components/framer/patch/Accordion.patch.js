import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import {
    addFonts,
    addPropertyControls,
    ControlType,
    cx,
    RichText,
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
import * as sharedStyle from "./sharedStyle_Accordion_Question.patch.js";
import * as sharedStyle1 from "./sharedStyle_Accordion_Answer.patch.js";

const cycleOrder = ["BnW8WAh4l", "dWV_xs5Hs"];
const serializationHash = "framer-UszEz";
const variantClassNames = { BnW8WAh4l: "framer-v-1qvjp1q", dWV_xs5Hs: "framer-v-qpne5e" };

function addPropertyOverrides(overrides, ...variants) {
    const nextOverrides = {};
    variants?.forEach(variant => variant && Object.assign(nextOverrides, overrides[variant]));
    return nextOverrides;
}

const transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" };
const transformTemplate1 = (_, t) => `translateX(-50%) ${t}`;

const Variants = motion.create(React.Fragment);
const humanReadableVariantMap = { Closed: "BnW8WAh4l", Opened: "dWV_xs5Hs" };

const getProps = ({ answer, click, height, id, question, width, ...props }) => {
    return {
        ...props,
        DR_6QqGeh: answer ?? props.DR_6QqGeh ?? "Framer is a design tool that allows you to design websites on a freeform canvas, and then publish them as websites with a single click.",
        qQefXa5XK: question ?? props.qQefXa5XK ?? "What is Framer?",
        variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "BnW8WAh4l",
        Z3jnJDFUJ: click ?? props.Z3jnJDFUJ
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
    const { style, className, layoutId, variant, qQefXa5XK, DR_6QqGeh, Z3jnJDFUJ, ...restProps } = getProps(props);
    const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "BnW8WAh4l", ref: refBinding, variant, variantClassNames });
    const layoutDependency = createLayoutDependency(props, variants);
    const { activeVariantCallback, delay } = useActiveVariantCallback(baseVariant);

    const onTap8b07l6 = activeVariantCallback(async (...args) => {
        setGestureState({ isPressed: false });
        if (Z3jnJDFUJ) {
            const res = await Z3jnJDFUJ(...args);
            if (res === false) return false;
        }
        setVariant("dWV_xs5Hs");
    });

    const onTap1nx7lth = activeVariantCallback(async (...args) => {
        setGestureState({ isPressed: false });
        if (Z3jnJDFUJ) {
            const res = await Z3jnJDFUJ(...args);
            if (res === false) return false;
        }
        setVariant("BnW8WAh4l");
    });

    const sharedStyleClassNames = [sharedStyle.className, sharedStyle1.className];
    const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);

    return _jsx(LayoutGroup, {
        id: layoutId ?? defaultLayoutId,
        children: _jsx(Variants, {
            animate: variants,
            initial: false,
            children: _jsx(motion.div, {
                ...restProps,
                ...gestureHandlers,
                className: cx(scopingClassNames, "framer-1qvjp1q", className, classNames),
                "data-border": true,
                "data-framer-name": "Closed",
                "data-highlight": true,
                layoutDependency: layoutDependency,
                layoutId: "BnW8WAh4l",
                onTap: onTap8b07l6,
                ref: refBinding,
                style: {
                    "--border-bottom-width": "1px",
                    "--border-color": "var(--token-66cf77ff-0f3f-4e1d-acc4-caa0067c546a, rgba(255, 255, 255, 0.08))",
                    "--border-left-width": "1px",
                    "--border-right-width": "1px",
                    "--border-style": "solid",
                    "--border-top-width": "1px",
                    backgroundColor: "var(--token-b2d0d162-7efa-45ce-82e3-b6730dc1b1fc, rgb(18, 18, 18))",
                    borderBottomLeftRadius: 24,
                    borderBottomRightRadius: 24,
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                    ...style
                },
                ...addPropertyOverrides({ dWV_xs5Hs: { "data-framer-name": "Opened", onTap: onTap1nx7lth } }, baseVariant, gestureVariant),
                children: _jsxs(motion.div, {
                    className: "framer-eb2ovu",
                    "data-framer-name": "Content",
                    layoutDependency: layoutDependency,
                    layoutId: "d59QrQLmV",
                    children: [
                        _jsxs(motion.div, {
                            className: "framer-wzpyf0",
                            "data-framer-name": "Question",
                            layoutDependency: layoutDependency,
                            layoutId: "fAzZpONzN",
                            children: [
                                _jsx(motion.div, {
                                    className: "framer-iy4gt7",
                                    "data-framer-name": "Text",
                                    layoutDependency: layoutDependency,
                                    layoutId: "ULoaM1Ibr",
                                    children: _jsx(RichText, {
                                        __fromCanvasComponent: true,
                                        children: _jsx(React.Fragment, {
                                            children: _jsx(motion.p, {
                                                className: "framer-styles-preset-74ec35",
                                                "data-styles-preset": "Bo5Cnpg0R",
                                                style: { "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-262ecc22-57b7-472d-83d9-e78a1e1f93a7, rgb(255, 255, 255)))" },
                                                children: "What is Framer?"
                                            })
                                        }),
                                        className: "framer-s4jt8o",
                                        "data-framer-name": "Question",
                                        fonts: ["Inter"],
                                        layoutDependency: layoutDependency,
                                        layoutId: "oN9r9okRD",
                                        style: { "--extracted-r6o4lv": "var(--token-262ecc22-57b7-472d-83d9-e78a1e1f93a7, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" },
                                        text: qQefXa5XK,
                                        verticalAlignment: "top",
                                        withExternalLayout: true
                                    })
                                }),
                                _jsxs(motion.button, {
                                    className: "framer-1pcdvls",
                                    "data-framer-name": "Icon",
                                    "data-reset": "button",
                                    layoutDependency: layoutDependency,
                                    layoutId: "VOq7sRkSv",
                                    style: { backgroundColor: "var(--token-66cf77ff-0f3f-4e1d-acc4-caa0067c546a, rgba(255, 255, 255, 0.08))", borderBottomLeftRadius: 100, borderBottomRightRadius: 100, borderTopLeftRadius: 100, borderTopRightRadius: 100 },
                                    children: [
                                        _jsx(motion.div, {
                                            className: "framer-p8jnc9",
                                            "data-framer-name": "Horizontal",
                                            layoutDependency: layoutDependency,
                                            layoutId: "aBQBMcCyS",
                                            style: { backgroundColor: "var(--token-262ecc22-57b7-472d-83d9-e78a1e1f93a7, rgb(255, 255, 255))", rotate: -90 },
                                            variants: { dWV_xs5Hs: { rotate: 90 } }
                                        }),
                                        _jsx(motion.div, {
                                            className: "framer-k02044",
                                            "data-framer-name": "Vertical",
                                            layoutDependency: layoutDependency,
                                            layoutId: "tpfnPd8aC",
                                            style: { backgroundColor: "var(--token-262ecc22-57b7-472d-83d9-e78a1e1f93a7, rgb(255, 255, 255))", rotate: -180 },
                                            variants: { dWV_xs5Hs: { rotate: 90 } }
                                        })
                                    ]
                                })
                            ]
                        }),
                        _jsx(motion.div, {
                            className: "framer-1hs10qo",
                            "data-framer-name": "Answer",
                            layoutDependency: layoutDependency,
                            layoutId: "uw7ZUhFJA",
                            style: { opacity: 0 },
                            transformTemplate: transformTemplate1,
                            variants: { dWV_xs5Hs: { opacity: 1 } },
                            ...addPropertyOverrides({ dWV_xs5Hs: { transformTemplate: undefined } }, baseVariant, gestureVariant),
                            children: _jsx(RichText, {
                                __fromCanvasComponent: true,
                                children: _jsx(React.Fragment, {
                                    children: _jsx(motion.p, {
                                        className: "framer-styles-preset-d5fxxr",
                                        "data-styles-preset": "RpCbfYVHG",
                                        style: { "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-cc359361-be1d-443c-b3d4-114af3dda3d6, rgba(255, 255, 255, 0.8)))" },
                                        children: "Framer is a design tool that allows you to design websites on a freeform canvas, and then publish them as websites with a single click."
                                    })
                                }),
                                className: "framer-10cwhaj",
                                "data-framer-name": "Answer",
                                fonts: ["Inter"],
                                layoutDependency: layoutDependency,
                                layoutId: "GlnCvTtT6",
                                style: { "--extracted-r6o4lv": "var(--token-cc359361-be1d-443c-b3d4-114af3dda3d6, rgba(255, 255, 255, 0.8))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" },
                                text: DR_6QqGeh,
                                verticalAlignment: "top",
                                withExternalLayout: true
                            })
                        })
                    ]
                })
            })
        })
    });
});

const css = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-UszEz.framer-1asakqn, .framer-UszEz .framer-1asakqn { display: block; }",
    ".framer-UszEz.framer-1qvjp1q { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 24px; position: relative; width: 391px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-UszEz .framer-eb2ovu { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }",
    ".framer-UszEz .framer-wzpyf0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-UszEz .framer-iy4gt7 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }",
    ".framer-UszEz .framer-s4jt8o, .framer-UszEz .framer-10cwhaj { -webkit-user-select: none; flex: 1 0 0px; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-UszEz .framer-1pcdvls { aspect-ratio: 1 / 1; cursor: pointer; flex: none; height: var(--framer-aspect-ratio-supported, 28px); overflow: hidden; position: relative; width: 28px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-UszEz .framer-p8jnc9, .framer-UszEz .framer-k02044 { flex: none; height: 12px; left: calc(50.00000000000002% - 1px / 2); overflow: hidden; position: absolute; top: calc(50.00000000000002% - 12px / 2); width: 1px; }",
    ".framer-UszEz .framer-1hs10qo { align-content: center; align-items: center; bottom: -120px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 0px; pointer-events: none; position: absolute; width: 100%; z-index: 1; }",
    ".framer-UszEz.framer-v-qpne5e .framer-1hs10qo { bottom: unset; left: unset; position: relative; }",
    ...sharedStyle.css,
    ...sharedStyle1.css,
    '.framer-UszEz[data-border="true"]::after, .framer-UszEz [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'
];

const FramerhsoeBY5dN = withCSS(Component, css, "framer-UszEz");
export default FramerhsoeBY5dN;
FramerhsoeBY5dN.displayName = "Accordion";

addPropertyControls(FramerhsoeBY5dN, {
    variant: { options: ["BnW8WAh4l", "dWV_xs5Hs"], optionTitles: ["Closed", "Opened"], title: "Variant", type: ControlType.Enum },
    qQefXa5XK: { defaultValue: "What is Framer?", displayTextArea: false, title: "Question", type: ControlType.String },
    DR_6QqGeh: { defaultValue: "Framer is a design tool that allows you to design websites on a freeform canvas, and then publish them as websites with a single click.", displayTextArea: false, title: "Answer", type: ControlType.String },
    Z3jnJDFUJ: { title: "Click", type: ControlType.EventHandler }
});

addFonts(FramerhsoeBY5dN, [{ explicitInter: true, fonts: [] }]);
