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

export const cx = (...args: any[]) => args.filter(Boolean).join(' '); // eslint-disable-line @typescript-eslint/no-explicit-any

export const getFonts = () => [];

// Mock containers
export const SmartComponentScopedContainer = ({ children }: { children: React.ReactNode }) => children;
export const RichText = ({ children }: { children: React.ReactNode }) => children;

// Hooks
export const useActiveVariantCallback = (variant: string) => {
    return {
        activeVariantCallback: (callback: any) => callback, // eslint-disable-line @typescript-eslint/no-explicit-any
        delay: 0
    };
};

export const useComponentViewport = () => ({ x: 0, y: 0, width: 1200, height: 800 });
export const useLocaleInfo = () => ({ activeLocale: 'en', setLocale: noop });
export const useVariantState = ({ defaultVariant }: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
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

export const withCSS = (component: any, ..._args: any[]) => { // eslint-disable-line @typescript-eslint/no-explicit-any
    const Enhanced = (props: any) => React.createElement(component, props); // eslint-disable-line @typescript-eslint/no-explicit-any
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
