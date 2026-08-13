/**
 * Margin Resume Builder - Radius System
 * Linear-style rounded corners with smooth transitions
 */

export const radius = {
  none: '0',
  xs: '0.1875rem',     // 3px - Subtle rounding
  sm: '0.25rem',        // 4px - Small elements (badges, tags)
  md: '0.375rem',       // 6px - Medium elements (buttons, inputs)
  lg: '0.5rem',         // 8px - Large elements (cards)
  xl: '0.75rem',        // 12px - Extra large (dropdowns)
  '2xl': '1rem',        // 16px - Modals, large cards
  '3xl': '1.5rem',      // 24px - Hero sections
  full: '9999px',       // Circular (avatars, pills)
} as const;

// ═════════════════════════════════════════════════════════════════
// SEMANTIC RADIUS (Component-specific)
// ═════════════════════════════════════════════════════════════════

export const componentRadius = {
  // Button radius
  button: {
    xs: radius.sm,      // 4px
    sm: radius.sm,      // 4px
    md: radius.md,      // 6px
    lg: radius.md,      // 6px
    xl: radius.lg,      // 8px
    pill: radius.full,  // pill shape
  },

  // Input radius
  input: {
    xs: radius.sm,      // 4px
    sm: radius.sm,      // 4px
    md: radius.md,      // 6px
    lg: radius.md,      // 6px
    xl: radius.lg,      // 8px
  },

  // Card radius
  card: {
    sm: radius.lg,      // 8px
    md: radius.xl,      // 12px
    lg: radius['2xl'],  // 16px
  },

  // Modal radius
  modal: radius['2xl'], // 16px

  // Dropdown radius
  dropdown: radius.xl,  // 12px

  // Badge radius
  badge: {
    xs: radius.sm,      // 4px
    sm: radius.sm,      // 4px
    md: radius.md,      // 6px
    lg: radius.md,      // 6px
    pill: radius.full,  // pill shape
  },

  // Avatar radius
  avatar: {
    sm: radius.full,    // Circular
    md: radius.full,    // Circular
    lg: radius.full,    // Circular
    square: radius.lg, // 8px - for square avatars
  },

  // Toast radius
  toast: radius.lg,    // 8px

  // Tooltip radius
  tooltip: radius.md,  // 6px
} as const;

export type Radius = typeof radius;
export type ComponentRadius = typeof componentRadius;
