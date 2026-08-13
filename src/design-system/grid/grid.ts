/**
 * Margin Resume Builder - Grid System
 * Responsive grid and container rules
 *
 * Design Philosophy:
 * - Mobile-first approach
 * - Consistent breakpoints aligned with device sizes
 * - Fluid containers with max-width boundaries
 * - 12-column grid for layout flexibility
 */

// ═════════════════════════════════════════════════════════════════
// BREAKPOINTS
// ═════════════════════════════════════════════════════════════════

export const breakpoints = {
  xs: '375px',    // Small mobile devices
  sm: '640px',    // Large mobile devices
  md: '768px',    // Tablets
  lg: '1024px',   // Laptops
  xl: '1280px',   // Desktops
  '2xl': '1536px', // Large desktops
} as const;

// Breakpoint values for JavaScript
export const breakpointValues = {
  xs: 375,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// ═════════════════════════════════════════════════════════════════
// CONTAINER WIDTHS
// ═════════════════════════════════════════════════════════════════

export const container = {
  // Prose content (readable width)
  prose: '656px',      // ~82 characters at 16px

  // Content containers
  xs: '480px',        // Narrow content
  sm: '640px',        // Small containers
  md: '768px',        // Medium containers
  lg: '1024px',       // Large containers
  xl: '1280px',       // Extra large containers
  '2xl': '1440px',    // Full-width layouts
  full: '100%',       // Full width

  // App shell
  app: '1440px',      // Maximum app width
  dashboard: '1280px', // Dashboard max width
} as const;

// ═════════════════════════════════════════════════════════════════
// CONTAINER PADDING
// ═════════════════════════════════════════════════════════════════

export const containerPadding = {
  // Responsive padding
  default: {
    base: '16px',     // Mobile
    sm: '24px',       // Tablet
    md: '32px',       // Laptop
    lg: '48px',       // Desktop
    xl: '64px',       // Large desktop
  },

  // Section padding
  section: {
    base: { y: '24px', x: '16px' },
    sm: { y: '32px', x: '24px' },
    md: { y: '48px', x: '32px' },
    lg: { y: '64px', x: '48px' },
    xl: { y: '96px', x: '64px' },
    '2xl': { y: '128px', x: '80px' },
  },

  // Narrow padding (for sidebars)
  narrow: {
    base: '12px',
    sm: '16px',
    md: '20px',
    lg: '24px',
  },
} as const;

// ═════════════════════════════════════════════════════════════════
// GRID COLUMNS
// ═════════════════════════════════════════════════════════════════

export const columns = {
  // Standard grid
  default: 12,

  // Card grids
  cards: {
    base: 1,      // Mobile: 1 column
    sm: 2,        // Tablet: 2 columns
    md: 2,        // Laptop: 2 columns
    lg: 3,        // Desktop: 3 columns
    xl: 4,        // Large desktop: 4 columns
  },

  // Modal grids
  modal: {
    base: 1,      // Mobile: 1 column
    md: 2,        // Desktop: 2 columns
  },

  // Form grids
  form: {
    base: 1,      // Mobile: 1 column
    md: 2,        // Desktop: 2 columns
    lg: 3,        // Large desktop: 3 columns
  },

  // Dashboard stats
  stats: {
    base: 1,      // Mobile: 1 column
    sm: 2,        // Tablet: 2 columns
    md: 4,        // Desktop: 4 columns
  },
} as const;

// ═════════════════════════════════════════════════════════════════
// COLUMN SPANS
// ═════════════════════════════════════════════════════════════════

export const colSpan = {
  full: 'span 12',
  half: 'span 6',
  third: 'span 4',
  quarter: 'span 3',
  twoThirds: 'span 8',
  threeQuarters: 'span 9',
  auto: 'span auto',
} as const;

// ═════════════════════════════════════════════════════════════════
// GRID GAP VARIANTS
// ═════════════════════════════════════════════════════════════════

export const gridGap = {
  xs: '0.5rem',    // 8px
  sm: '0.75rem',   // 12px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '3rem',   // 48px
} as const;

// ═════════════════════════════════════════════════════════════════
// GRID TEMPLATES
// ═════════════════════════════════════════════════════════════════

export const gridTemplates = {
  // App layout
  app: {
    base: '1fr',
    lg: '260px 1fr',
  },

  // Editor layout
  editor: {
    base: '1fr',
    lg: '320px 1fr',
  },

  // Dashboard layout
  dashboard: {
    base: '1fr',
    lg: '260px 1fr',
  },

  // Card grid
  cards: {
    base: 'repeat(1, 1fr)',
    sm: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
    xl: 'repeat(4, 1fr)',
  },

  // Feature grid
  features: {
    base: 'repeat(1, 1fr)',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
  },
} as const;

export type Breakpoints = typeof breakpoints;
export type Container = typeof container;
export type Columns = typeof columns;
