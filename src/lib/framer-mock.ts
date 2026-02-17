import * as React from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

const noop = () => { };

// Mock FontStore
export const fontStore = {
    loadWebFontsFromProps: noop,
    loadFonts: noop,
    getFonts: () => [],
};

export const addFonts = noop;
export const addPropertyControls = noop;
export const ControlType = {
    Boolean: 'boolean',
    Number: 'number',
    String: 'string',
    Color: 'color',
    Enum: 'enum',
    Image: 'image',
    ComponentInstance: 'componentinstance',
    Array: 'array',
    Object: 'object',
    File: 'file',
};

// Mock Component Viewport Provider
export const ComponentViewportProvider = ({ children }: { children: React.ReactNode }) => children;

export const cx = (...args: any[]) => args.filter(Boolean).join(' ');

export const getFonts = () => [];

// Mock containers
export const SmartComponentScopedContainer = ({ children }: { children: React.ReactNode }) => children;
export const RichText = ({ children }: { children: React.ReactNode }) => children;

// Hooks
export const useActiveVariantCallback = (variant: string) => {
    console.log("[framer-mock] useActiveVariantCallback called with:", variant);
    return {
        activeVariantCallback: (callback: any) => {
            console.log("[framer-mock] activeVariantCallback executed");
            return callback;
        },
        delay: 0
    };
};

export const useComponentViewport = () => ({ x: 0, y: 0, width: 1200, height: 800 });
export const useLocaleInfo = () => ({ activeLocale: 'en', setLocale: noop });
export const useVariantState = ({ defaultVariant }: any) => {
    const [variant, setVariant] = React.useState(defaultVariant);
    return {
        baseVariant: variant,
        gestureVariant: null,
        setVariant,
        variants: [variant],
        classNames: '',
        isLoading: false,
        setGestureState: noop,
        clearLoadingGesture: noop,
        gestureHandlers: {},
    };
};

export const withCSS = (component: any) => {
    console.log("[framer-mock] withCSS wrapping:", component.displayName || component.name);
    const Enhanced = (props: any) => React.createElement(component, props);
    Enhanced.displayName = `withCSS(${component.displayName || component.name})`;
    return Enhanced;
};

// Re-export motion
export { motion, AnimatePresence, LayoutGroup };

// Default export covers many Framer imports
const FramerMock = {
    fontStore,
    addFonts,
    addPropertyControls,
    ControlType,
    ComponentViewportProvider,
    cx,
    getFonts,
    SmartComponentScopedContainer,
    RichText,
    useActiveVariantCallback,
    useComponentViewport,
    useLocaleInfo,
    useVariantState,
    withCSS,
    motion,
    AnimatePresence,
    LayoutGroup
};

export default FramerMock;
