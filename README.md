# Margin - Design System Documentation

A production-grade, AI-powered Resume Builder design system inspired by **Linear**, **Vercel**, **Notion**, **Framer**, and **Raycast**.

---

## 🎨 Design Philosophy

- **Minimal & Sophisticated**: Clean interfaces with subtle depth
- **Dark-First**: Designed for dark mode with light mode as variant
- **Consistent Rhythm**: 8px base spacing scale
- **Premium Feel**: Subtle shadows, smooth animations, refined typography
- **Accessibility**: WCAG compliant with proper focus states

---

## 📦 Folder Structure

```
src/
├── design-system/
│   ├── colors/           # Color tokens & semantic colors
│   ├── typography/       # Font scales & text styles
│   ├── spacing/          # Spacing & gap scales
│   ├── radius/           # Border radius scales
│   ├── shadows/          # Box shadows & glow effects
│   ├── animations/       # Framer Motion presets
│   ├── grid/             # Breakpoints & container rules
│   ├── icons/            # Icon sizing & contexts
│   └── components/       # CVA variants
│
├── styles/
│   └── globals.css       # CSS custom properties & utilities
│
├── lib/
│   ├── cn.ts             # Class name utility (clsx + tailwind-merge)
│   ├── utils.ts          # Helper functions
│   └── constants.ts      # App constants
│
└── types/                # TypeScript type definitions
```

---

## 🎯 Design Tokens

### Typography Scale

| Token | Size | Line Height | Use Case |
|-------|------|-------------|----------|
| `display-2xl` | 72px | 1.1 | Hero headlines |
| `display-xl` | 60px | 1.1 | Large headings |
| `display-lg` | 48px | 1.15 | Section headlines |
| `heading-xl` | 36px | 1.2 | Page titles |
| `heading-lg` | 30px | 1.25 | Section headings |
| `heading-md` | 24px | 1.3 | Card headings |
| `heading-sm` | 20px | 1.4 | Subheadings |
| `body-xl` | 18px | 1.6 | Lead paragraphs |
| `body-lg` | 16px | 1.6 | Default body |
| `body-sm` | 14px | 1.5 | Secondary text |
| `label` | 12px | 1.4 | Labels, tags |
| `caption` | 11px | 1.4 | Captions |
| `overline` | 10px | 1.4 | Overlines |

### Spacing Scale

Based on **8px** rhythm:

| Token | Size | Use Case |
|-------|------|----------|
| `1` | 4px | Tight spacing |
| `2` | 8px | Default gap |
| `3` | 12px | Moderate spacing |
| `4` | 16px | Standard padding |
| `5` | 20px | Comfortable spacing |
| `6` | 24px | Section padding |
| `8` | 32px | Large padding |
| `10` | 40px | Generous spacing |
| `12` | 48px | Section margins |
| `16` | 64px | Large sections |

### Border Radius Scale

| Token | Size | Use Case |
|-------|------|----------|
| `xs` | 3px | Subtle rounding |
| `sm` | 4px | Badges, tags |
| `md` | 6px | Buttons, inputs |
| `lg` | 8px | Cards |
| `xl` | 12px | Dropdowns |
| `2xl` | 16px | Modals |
| `3xl` | 24px | Hero sections |
| `full` | 9999px | Pills, avatars |

### Shadow Scale

| Token | Use Case |
|-------|----------|
| `xs` | Subtle separation |
| `sm` | Cards |
| `md` | Elevated cards |
| `lg` | Dropdowns, popovers |
| `xl` | Modals |
| `2xl` | Major modals |

### Animation Scale

| Token | Duration | Use Case |
|-------|----------|----------|
| `instant` | 0ms | Immediate feedback |
| `fast` | 100ms | Micro-interactions |
| `normal` | 150ms | Standard transitions |
| `slow` | 200ms | Deliberate animations |
| `slower` | 300ms | Complex animations |
| `slowest` | 500ms | Page transitions |

---

## 🧩 Component Variants

### Button Variants

```tsx
import { buttonVariants } from '@/design-system';

// Variants: primary, secondary, outline, ghost, destructive, success, link, gradient
// Sizes: xs, sm, md, lg, xl, icon, icon-sm, icon-lg
```

| Variant | Use Case |
|---------|----------|
| `primary` | Main actions, CTAs |
| `secondary` | Secondary actions |
| `outline` | Tertiary actions |
| `ghost` | Subtle actions |
| `destructive` | Dangerous actions |
| `gradient` | Premium CTAs |

### Input Variants

```tsx
import { inputVariants } from '@/design-system';

// Variants: default, filled, ghost, underline, unstyled
// Sizes: xs, sm, md, lg, xl
// States: default, error, success, warning
```

### Card Variants

```tsx
import { cardVariants } from '@/design-system';

// Variants: default, elevated, outline, ghost, interactive, gradient
// Sizes: xs, sm, md, lg, xl
```

### Badge Variants

```tsx
import { badgeVariants } from '@/design-system';

// Variants: default, primary, secondary, success, warning, error, info, outline, gradient
// Sizes: xs, sm, md, lg
```

---

## 🎨 Color System

### Brand Colors

- **Primary**: Electric Indigo (`#8b5cf6`) - Main brand color
- **Accent**: Vibrant Cyan (`#06b6d4`) - Secondary accent

### Semantic Colors

| Intent | Light Mode | Dark Mode |
|--------|------------|-----------|
| Success | Emerald backgrounds | Emerald with transparency |
| Warning | Amber backgrounds | Amber with transparency |
| Error | Rose backgrounds | Rose with transparency |
| Info | Blue backgrounds | Blue with transparency |

### Neutral Palette

21-step neutral scale from `#ffffff` to `#000000` with precise lightness values.

---

## 📐 Grid System

### Breakpoints

| Name | Width | Device |
|------|-------|--------|
| `xs` | 375px | Small mobile |
| `sm` | 640px | Large mobile |
| `md` | 768px | Tablet |
| `lg` | 1024px | Laptop |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Large desktop |

### Containers

| Name | Max Width | Use Case |
|------|-----------|----------|
| `prose` | 656px | Readable content |
| `xs` | 480px | Narrow content |
| `md` | 768px | Standard content |
| `lg` | 1024px | Wide layouts |
| `2xl` | 1440px | Full-width |

---

## 🎬 Animations

### Preset Animations

```tsx
import { fadeVariants, slideVariants, scaleVariants } from '@/design-system';

// Fade animations
// fadeUp, fadeDown, fadeLeft, fadeRight, scaleFade

// Slide animations
// slideUp, slideDown, slideLeft, slideRight

// Scale animations
// scaleIn, scaleUp, pop
```

### Spring Physics

```tsx
import { spring } from '@/design-system';

// spring.snappy - Linear-style (default)
// spring.gentle - Smooth animations
// spring.bouncy - Notion-style
// spring.stiff - Modals
```

---

## 🔧 Utility Classes

### Typography

```css
.heading-display-2xl  /* 72px hero */
.heading-xl          /* 36px title */
.body-lg             /* 16px body */
.label-uppercase     /* 12px uppercase label */
```

### Layout

```css
.container-prose     /* 656px centered */
.container-lg        /* 1024px centered */
.section-lg          /* 6rem vertical padding */
```

### Effects

```css
.glass              /* Glass morphism */
.gradient-text      /* Text gradient */
.gradient-bg        /* Background gradient */
.gradient-border    /* Gradient border */
.shimmer            /* Loading shimmer */
.focus-ring         /* Focus ring style */
.card-hover         /* Hover lift effect */
```

---

## 📱 Icon Rules

### Context-Based Sizing

| Context | Size |
|---------|------|
| Button `md` | 16px |
| Input | 16px |
| Badge | 14px |
| Menu Item | 16px |
| Card | 20px |
| Section | 32px |
| Empty State | 48px |

### Stroke Width

| Icon Size | Stroke Width |
|-----------|--------------|
| 12-16px | 1.5 (default) |
| 18-24px | 1.25 |
| 32px+ | 1 |

---

## 🌗 Dark Mode

### CSS Custom Properties

All semantic colors automatically adapt:

```css
:root {
  --bg-primary: #ffffff;
  --fg-primary: #171717;
}

.dark {
  --bg-primary: #171717;
  --fg-primary: #fafafa;
}
```

### Usage

Add `class="dark"` to `<html>` element for dark mode.

---

## 📝 Usage Examples

### Button

```tsx
import { buttonVariants } from '@/design-system';
import { cn } from '@/lib/cn';

<button className={cn(
  buttonVariants({ variant: 'primary', size: 'md' })
)}>
  Create Resume
</button>
```

### Card

```tsx
import { cardVariants } from '@/design-system';

<div className={cardVariants({
  variant: 'interactive',
  size: 'md',
  radius: 'lg'
})}>
  {/* Card content */}
</div>
```

### Typography

```tsx
<h1 className="heading-display-lg">
  Build Your Resume
</h1>

<p className="body-lg text-fg-secondary">
  Create professional resumes in minutes
</p>
```

---

## 🛠 Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Type check
npm run type-check
```

---

## 📋 Checklist

- ✅ Typography Scale
- ✅ Spacing Scale
- ✅ Radius Scale
- ✅ Shadow Scale
- ✅ Animation Scale
- ✅ Icon Rules
- ✅ Grid Rules
- ✅ Container Rules
- ✅ Button Variants
- ✅ Input Variants
- ✅ Card Variants
- ✅ Modal Variants
- ✅ Badge Variants
- ✅ Alert Variants
- ✅ Empty States
- ✅ Loading Skeleton
- ✅ Color Tokens
- ✅ Dark Theme Ready
- ✅ Reusable Tailwind Utilities

---

## 🎯 Next Steps

1. **Build UI components** using this design system
2. **Create layouts**: RootLayout, DashboardLayout, EditorLayout
3. **Convert HTML pages** to React components
4. **Implement React Router** for navigation
5. **Add shadcn/ui** component library

---

Built with ❤️ for modern web applications.
