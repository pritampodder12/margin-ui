# Margin Design System - Complete Reference

## Overview

This design system is built for **Margin**, an AI-powered Resume Builder. It follows a token-based approach inspired by Linear, Vercel, Notion, Framer, and Raycast.

---

## 🎨 Color System

### Brand Palette

| Name | Light 500 | Usage |
|------|-----------|-------|
| **Primary** | `#8b5cf6` (Purple) | Main interactive elements, focus states |
| **Accent** | `#06b6d4` (Cyan) | Secondary highlights, gradient endpoints |
| **Success** | `#10b981` (Emerald) | Positive states, confirmations |
| **Warning** | `#f59e0b` (Amber) | Caution states |
| **Error** | `#f43f5e` (Rose) | Destructive actions, errors |
| **Info** | `#3b82f6` (Blue) | Informational states |

### Neutral Scale

21-step neutral palette with precise lightness increments:

| Token | Hex | Usage |
|-------|-----|-------|
| `0` | `#ffffff` | Light bg primary |
| `50` | `#fafafa` | Light bg secondary |
| `100` | `#f5f5f5` | Light bg tertiary |
| `200` | `#e5e5e5` | Borders (light) |
| `400` | `#a3a3a3` | Disabled text |
| `500` | `#737373` | Muted text |
| `600` | `#525252` | Secondary text |
| `700` | `#3f3f3f` | Borders (dark) |
| `800` | `#2a2a2a` | Dark bg tertiary |
| `850` | `#1f1f1f` | Dark bg secondary |
| `900` | `#171717` | Dark bg primary |
| `950` | `#0a0a0a` | Dark bg (black) |

### Semantic Colors

```css
/* Light Mode */
--bg-primary: #ffffff;
--fg-primary: #171717;
--border-primary: #e5e5e5;

/* Dark Mode */
--bg-primary: #171717;
--fg-primary: #fafafa;
--border-primary: #3f3f3f;
```

---

## 📝 Typography

### Font Families

```ts
fontSans: 'Inter', system-ui, sans-serif
fontMono: 'JetBrains Mono', monospace
fontDisplay: 'Inter', system-ui, sans-serif
```

### Size Scale

| Token | Size | Line Height | Letter Spacing |
|-------|------|-------------|----------------|
| `display-2xl` | 72px | 1.1 | -0.02em |
| `display-xl` | 60px | 1.1 | -0.02em |
| `display-lg` | 48px | 1.15 | -0.02em |
| `heading-xl` | 36px | 1.2 | -0.02em |
| `heading-lg` | 30px | 1.25 | -0.01em |
| `heading-md` | 24px | 1.3 | -0.01em |
| `heading-sm` | 20px | 1.4 | 0 |
| `heading-xs` | 18px | 1.4 | 0 |
| `body-xl` | 18px | 1.6 | 0 |
| `body-lg` | 16px | 1.6 | 0 |
| `body-md` | 15px | 1.5 | 0 |
| `body-sm` | 14px | 1.5 | 0 |
| `body-xs` | 13px | 1.4 | 0 |
| `label` | 12px | 1.4 | 0.01em |
| `caption` | 11px | 1.4 | 0.02em |
| `overline` | 10px | 1.4 | 0.08em |

### Font Weights

```ts
fontWeight: {
  normal: 400,    // Body text
  medium: 500,    // Emphasis, labels
  semibold: 600,  // Headings, buttons
  bold: 700,      // Strong emphasis
}
```

---

## 📏 Spacing

### Base Scale (8px rhythm)

| Token | Value | Pixels |
|-------|-------|--------|
| `0.5` | 0.125rem | 2px |
| `1` | 0.25rem | 4px |
| `1.5` | 0.375rem | 6px |
| `2` | 0.5rem | 8px ← Base |
| `3` | 0.75rem | 12px |
| `4` | 1rem | 16px |
| `5` | 1.25rem | 20px |
| `6` | 1.5rem | 24px |
| `8` | 2rem | 32px |
| `10` | 2.5rem | 40px |
| `12` | 3rem | 48px |
| `16` | 4rem | 64px |
| `20` | 5rem | 80px |
| `24` | 6rem | 96px |

### Component Spacing

```ts
// Button padding
button: { xs: '4px 8px', sm: '6px 12px', md: '8px 16px', lg: '10px 20px' }

// Card padding
card: { xs: '8px', sm: '12px', md: '16px', lg: '24px' }

// Modal padding
modal: { header: '16px', body: '24px', footer: '16px' }
```

---

## 🔲 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 3px | Subtle rounding |
| `sm` | 4px | Badges, tags |
| `md` | 6px | Buttons, inputs |
| `lg` | 8px | Cards |
| `xl` | 12px | Dropdowns |
| `2xl` | 16px | Modals |
| `3xl` | 24px | Hero sections |
| `full` | 9999px | Pills, avatars |

---

## 🎭 Shadows

### Elevation Shadows

```css
--shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.03);
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.06);
--shadow-md: 0 2px 4px rgba(0, 0, 0, 0.04), 0 4px 6px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 4px 6px rgba(0, 0, 0, 0.04), 0 10px 15px rgba(0, 0, 0, 0.08);
--shadow-xl: 0 8px 10px rgba(0, 0, 0, 0.04), 0 20px 25px rgba(0, 0, 0, 0.1);
--shadow-2xl: 0 12px 20px rgba(0, 0, 0, 0.08), 0 25px 50px rgba(0, 0, 0, 0.12);
```

### Glow Shadows

```css
--glow-primary: 0 0 0 1px rgba(139, 92, 246, 0.1), 0 4px 12px rgba(139, 92, 246, 0.2);
--glow-accent: 0 0 0 1px rgba(6, 182, 212, 0.1), 0 4px 12px rgba(6, 182, 212, 0.2);
--glow-success: 0 0 0 1px rgba(16, 185, 129, 0.1), 0 4px 12px rgba(16, 185, 129, 0.2);
--glow-error: 0 0 0 1px rgba(244, 63, 94, 0.1), 0 4px 12px rgba(244, 63, 94, 0.2);
```

### Focus Rings

```css
--focus-ring: 0 0 0 2px rgba(139, 92, 246, 0.4), 0 0 0 4px rgba(139, 92, 246, 0.1);
```

---

## ⚡ Animations

### Durations

| Token | Value | Usage |
|-------|-------|-------|
| `instant` | 0ms | Immediate feedback |
| `fast` | 100ms | Micro-interactions |
| `normal` | 150ms | Standard transitions |
| `slow` | 200ms | Deliberate animations |
| `slower` | 300ms | Complex animations |
| `slowest` | 500ms | Page transitions |

### Easing Curves

```ts
easeOutExpo: 'cubic-bezier(0.16, 1, 0.3, 1)'  // Linear-style
easeOutQuart: 'cubic-bezier(0.25, 1, 0.5, 1)' // Smooth exit
easeOutCubic: 'cubic-bezier(0.33, 1, 0.68, 1)' // Soft easing
spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' // Spring physics
bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' // Bounce effect
```

### Spring Physics (Framer Motion)

```ts
snappy: { stiffness: 800, damping: 35 }  // Linear-style
gentle: { stiffness: 400, damping: 30 }  // Soft
bouncy: { stiffness: 600, damping: 20 }  // Notion-style
stiff: { stiffness: 1000, damping: 60 }  // Modals
```

### Animation Variants

```tsx
// Fade animations
fadeVariants.fadeUp
fadeVariants.fadeDown
fadeVariants.fadeLeft
fadeVariants.fadeRight
fadeVariants.scaleFade

// Slide animations
slideVariants.slideUp
slideVariants.slideDown
slideVariants.slideLeft
slideVariants.slideRight

// Scale animations
scaleVariants.scaleIn
scaleVariants.scaleUp
scaleVariants.pop
```

---

## 📐 Grid & Layout

### Breakpoints

| Name | Pixel | Device |
|------|-------|--------|
| `xs` | 375px | Small mobile |
| `sm` | 640px | Large mobile |
| `md` | 768px | Tablet |
| `lg` | 1024px | Laptop |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Large desktop |

### Container Widths

| Name | Width | Usage |
|------|-------|-------|
| `prose` | 656px | Readable content (~82 chars) |
| `xs` | 480px | Narrow content |
| `sm` | 640px | Small containers |
| `md` | 768px | Medium containers |
| `lg` | 1024px | Large containers |
| `xl` | 1280px | Extra large |
| `2xl` | 1440px | Full-width layouts |

### Container Padding

```ts
containerPadding: {
  base: '16px',  // Mobile
  sm: '24px',    // Tablet
  md: '32px',    // Laptop
  lg: '48px',    // Desktop
  xl: '64px',    // Large desktop
}
```

---

## 🎯 Icon System

### Size Scale

| Token | Size | Usage |
|-------|------|-------|
| `xs` | 12px | Inline with captions |
| `sm` | 14px | Badges, inline text |
| `md` | 16px | Default (body text) |
| `lg` | 18px | Emphasis, buttons |
| `xl` | 20px | Feature icons |
| `2xl` | 24px | Section icons |
| `3xl` | 32px | Hero icons |
| `4xl` | 48px | Large features |
| `5xl` | 64px | Extra large |

### Context-Based Sizing

```ts
button: { xs: 14px, sm: 14px, md: 16px, lg: 18px, xl: 20px }
input: { sm: 14px, md: 16px, lg: 18px }
badge: { sm: 12px, md: 14px, lg: 16px }
menuItem: { sm: 14px, md: 16px, lg: 18px }
card: { sm: 18px, md: 20px, lg: 24px }
section: { sm: 24px, md: 32px, lg: 48px }
emptyState: 48px
```

### Stroke Width Rules

| Icon Size | Stroke Width |
|-----------|--------------|
| 12-16px | 1.5 (default) |
| 18-24px | 1.25 |
| 32px+ | 1.0 |

---

## 🧩 Component Variants

### Button

```tsx
buttonVariants({
  variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'success' | 'link' | 'gradient',
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'icon' | 'icon-sm' | 'icon-lg',
  fullWidth: boolean,
  loading: boolean,
})
```

### Input

```tsx
inputVariants({
  variant: 'default' | 'filled' | 'ghost' | 'underline' | 'unstyled',
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  state: 'default' | 'error' | 'success' | 'warning',
  leftIcon: boolean,
  rightIcon: boolean,
})
```

### Card

```tsx
cardVariants({
  variant: 'default' | 'elevated' | 'outline' | 'ghost' | 'interactive' | 'gradient',
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  radius: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full',
  hoverable: boolean,
  selected: boolean,
})
```

### Badge

```tsx
badgeVariants({
  variant: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'outline' | 'gradient',
  size: 'xs' | 'sm' | 'md' | 'lg',
  rounded: 'default' | 'pill',
})
```

### Alert

```tsx
alertVariants({
  variant: 'default' | 'info' | 'success' | 'warning' | 'error',
  withIcon: boolean,
  dismissible: boolean,
})
```

### Modal

```tsx
modalVariants({
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full',
  radius: 'default' | 'none' | 'sm' | 'lg',
  fullscreen: boolean,
})
```

### Avatar

```tsx
avatarVariants({
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl',
  shape: 'circle' | 'square',
  bordered: boolean,
})
```

### Skeleton (Loading)

```tsx
skeletonVariants({
  variant: 'text' | 'title' | 'avatar' | 'button' | 'card' | 'image' | 'input',
  width: 'full' | '3/4' | '1/2' | '1/3' | '1/4',
  rounded: 'none' | 'sm' | 'md' | 'lg' | 'full',
})
```

---

## 🛠 Utility Classes

### Container Classes

```css
.container-prose  /* 656px centered */
.container-xs     /* 480px centered */
.container-md     /* 768px centered */
.container-lg     /* 1024px centered */
.container-xl     /* 1280px centered */
.container-2xl    /* 1440px centered */
```

### Section Classes

```css
.section-xs  /* padding-y: 2rem */
.section-sm  /* padding-y: 3rem */
.section-md  /* padding-y: 4rem */
.section-lg  /* padding-y: 6rem */
.section-xl  /* padding-y: 8rem */
```

### Typography Classes

```css
.heading-display-2xl
.heading-display-xl
.heading-display-lg
.heading-xl
.heading-lg
.heading-md
.heading-sm
.heading-xs
.body-xl
.body-lg
.body-md
.body-sm
.body-xs
.label
.label-uppercase
.caption
.overline
```

### Effect Classes

```css
.glass           /* Glass morphism effect */
.gradient-text   /* Text gradient */
.gradient-bg     /* Background gradient */
.gradient-border /* Gradient border */
.shimmer         /* Loading shimmer */
.focus-ring      /* Focus ring style */
.card-hover      /* Hover lift effect */
.interactive-scale /* Press scale effect */
```

---

## 🌗 Dark Mode

### Implementation

1. Add `class="dark"` to `<html>` element
2. All CSS custom properties automatically adapt
3. Tailwind classes use `dark:` prefix

### Usage

```tsx
<div className="bg-neutral-50 dark:bg-neutral-900">
  <p className="text-neutral-900 dark:text-neutral-50">
    Content
  </p>
</div>
```

---

## 📁 File Structure

```
src/design-system/
├── colors/
│   └── colors.ts          # Color tokens
├── typography/
│   └── typography.ts      # Font scales
├── spacing/
│   └── spacing.ts         # Spacing scales
├── radius/
│   └── radius.ts          # Border radius
├── shadows/
│   └── shadows.ts         # Box shadows
├── animations/
│   └── animations.ts      # Animation presets
├── grid/
│   └── grid.ts            # Grid & containers
├── icons/
│   └── icons.ts           # Icon sizing rules
├── components/
│   └── variants.ts        # CVA variants
└── index.ts               # Main exports
```

---

## 🎯 Quick Reference

### Importing

```tsx
import { colors, typography, spacing, buttonVariants } from '@/design-system';
import { cn } from '@/lib/cn';
```

### Using Variants

```tsx
<Button className={cn(
  buttonVariants({ variant: 'primary', size: 'md' })
)}>
  Click me
</Button>
```

### Using Typography

```tsx
<h1 className="heading-display-lg">Hero Title</h1>
<p className="body-lg text-fg-secondary">Description</p>
```

### Using Colors

```tsx
// In CSS
background: var(--bg-primary);
color: var(--fg-primary);

// In Tailwind
<div className="bg-purple-500 text-white">
```

---

This design system provides everything needed to build a consistent, beautiful Resume Builder application.
