# ScrollReveal Component Usage Guide

The `ScrollReveal` component provides scroll-triggered fade-in animations using the IntersectionObserver API.

## Basic Usage

```tsx
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function MyComponent() {
  return (
    <ScrollReveal>
      <div>This content will fade in when scrolled into view</div>
    </ScrollReveal>
  );
}
```

## Props

- `direction`: Animation direction - `'up'` | `'down'` | `'left'` | `'right'` (default: `'up'`)
- `delay`: Animation delay in milliseconds (default: `0`)
- `className`: Additional CSS classes

## Examples

### Fade from bottom
```tsx
<ScrollReveal direction="up">
  <h2>Fade from bottom</h2>
</ScrollReveal>
```

### Fade from left with delay
```tsx
<ScrollReveal direction="left" delay={200}>
  <p>This appears 200ms after entering viewport</p>
</ScrollReveal>
```

### Multiple elements with staggered delays
```tsx
<ScrollReveal delay={0}>
  <div>First</div>
</ScrollReveal>
<ScrollReveal delay={100}>
  <div>Second</div>
</ScrollReveal>
<ScrollReveal delay={200}>
  <div>Third</div>
</ScrollReveal>
```

## Performance

- Uses IntersectionObserver for optimal performance
- Automatically unobserves after revealing (one-time animation)
- No scroll event listeners
- Battery-friendly

## Note

Most sections in this portfolio already use framer-motion's `whileInView` for animations, which provides similar functionality with more advanced features. Use `ScrollReveal` for simpler use cases or when you want a lightweight alternative.
