/**
 * Margin Resume Builder - Shadow System
 * Sophisticated shadows inspired by Linear, Vercel, Notion
 *
 * Design Philosophy:
 * - Minimal, subtle shadows when possible
 * - Layered shadows for depth
 * - Glow shadows for interactive states
 * - Dark mode optimized
 */

// ═════════════════════════════════════════════════════════════════
// ELEVATION SHADOWS
// ═════════════════════════════════════════════════════════════════

export const shadow = {
  // No shadow
  none: 'none',

  // Extra subtle - for subtle separation
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.03)',

  // Small - For small cards, dropdowns
  sm: [
    '0 1px 2px rgba(0, 0, 0, 0.04)',
    '0 1px 3px rgba(0, 0, 0, 0.06)',
  ].join(', '),

  // Medium - For cards, popovers
  md: [
    '0 2px 4px rgba(0, 0, 0, 0.04)',
    '0 4px 6px rgba(0, 0, 0, 0.06)',
    '0 1px 1px rgba(0, 0, 0, 0.04)',
  ].join(', '),

  // Large - For modals, floating elements
  lg: [
    '0 4px 6px rgba(0, 0, 0, 0.04)',
    '0 10px 15px rgba(0, 0, 0, 0.08)',
    '0 1px 3px rgba(0, 0, 0, 0.04)',
  ].join(', '),

  // Extra large - For prominent modals
  xl: [
    '0 8px 10px rgba(0, 0, 0, 0.04)',
    '0 20px 25px rgba(0, 0, 0, 0.1)',
    '0 2px 6px rgba(0, 0, 0, 0.04)',
  ].join(', '),

  // 2XL - For hero elements, major modals
  '2xl': [
    '0 12px 20px rgba(0, 0, 0, 0.08)',
    '0 25px 50px rgba(0, 0, 0, 0.12)',
    '0 4px 8px rgba(0, 0, 0, 0.04)',
  ].join(', '),

  // Inner shadow for inset effects
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)',
} as const;

// ═════════════════════════════════════════════════════════════════
// GLOW SHADOWS (Interactive states)
// ═════════════════════════════════════════════════════════════════

export const glowShadow = {
  // Primary brand glow
  primary: {
    sm: '0 0 0 1px rgba(139, 92, 246, 0.1), 0 2px 8px rgba(139, 92, 246, 0.15)',
    md: '0 0 0 1px rgba(139, 92, 246, 0.15), 0 4px 12px rgba(139, 92, 246, 0.2)',
    lg: '0 0 0 1px rgba(139, 92, 246, 0.2), 0 8px 24px rgba(139, 92, 246, 0.25)',
  },

  // Accent glow
  accent: {
    sm: '0 0 0 1px rgba(6, 182, 212, 0.1), 0 2px 8px rgba(6, 182, 212, 0.15)',
    md: '0 0 0 1px rgba(6, 182, 212, 0.15), 0 4px 12px rgba(6, 182, 212, 0.2)',
    lg: '0 0 0 1px rgba(6, 182, 212, 0.2), 0 8px 24px rgba(6, 182, 212, 0.25)',
  },

  // Success glow
  success: {
    sm: '0 0 0 1px rgba(16, 185, 129, 0.1), 0 2px 8px rgba(16, 185, 129, 0.15)',
    md: '0 0 0 1px rgba(16, 185, 129, 0.15), 0 4px 12px rgba(16, 185, 129, 0.2)',
    lg: '0 0 0 1px rgba(16, 185, 129, 0.2), 0 8px 24px rgba(16, 185, 129, 0.25)',
  },

  // Error glow
  error: {
    sm: '0 0 0 1px rgba(244, 63, 94, 0.1), 0 2px 8px rgba(244, 63, 94, 0.15)',
    md: '0 0 0 1px rgba(244, 63, 94, 0.15), 0 4px 12px rgba(244, 63, 94, 0.2)',
    lg: '0 0 0 1px rgba(244, 63, 94, 0.2), 0 8px 24px rgba(244, 63, 94, 0.25)',
  },

  // Warning glow
  warning: {
    sm: '0 0 0 1px rgba(245, 158, 11, 0.1), 0 2px 8px rgba(245, 158, 11, 0.15)',
    md: '0 0 0 1px rgba(245, 158, 11, 0.15), 0 4px 12px rgba(245, 158, 11, 0.2)',
    lg: '0 0 0 1px rgba(245, 158, 11, 0.2), 0 8px 24px rgba(245, 158, 11, 0.25)',
  },
} as const;

// ═════════════════════════════════════════════════════════════════
// FOCUS RING SHADOWS
// ═════════════════════════════════════════════════════════════════

export const focusRing = {
  // Primary focus ring
  primary: '0 0 0 2px rgba(139, 92, 246, 0.4), 0 0 0 4px rgba(139, 92, 246, 0.1)',

  // Accent focus ring
  accent: '0 0 0 2px rgba(6, 182, 212, 0.4), 0 0 0 4px rgba(6, 182, 212, 0.1)',

  // Error focus ring
  error: '0 0 0 2px rgba(244, 63, 94, 0.4), 0 0 0 4px rgba(244, 63, 94, 0.1)',

  // Subtle focus ring (for non-primary interactive elements)
  subtle: '0 0 0 2px rgba(0, 0, 0, 0.1)',

  // Dark mode focus ring
  dark: '0 0 0 2px rgba(139, 92, 246, 0.5), 0 0 0 4px rgba(139, 92, 246, 0.15)',
} as const;

// ═════════════════════════════════════════════════════════════════
// COMPONENT-SPECIFIC SHADOWS
// ═════════════════════════════════════════════════════════════════

export const componentShadow = {
  // Card shadows
  card: {
    default: shadow.sm,
    hover: shadow.md,
    active: shadow.lg,
    elevated: shadow.lg,
  },

  // Dropdown shadows
  dropdown: {
    default: shadow.md,
    hover: shadow.lg,
  },

  // Modal shadows
  modal: shadow['2xl'],

  // Button shadows
  button: {
    default: shadow.none,
    hover: shadow.sm,
    active: shadow.xs,
    elevated: shadow.sm,
  },

  // Input shadows
  input: {
    default: shadow.none,
    focus: focusRing.primary,
    error: focusRing.error,
  },

  // Tooltip shadows
  tooltip: shadow.md,

  // Toast shadows
  toast: shadow.lg,
} as const;

export type Shadow = typeof shadow;
export type GlowShadow = typeof glowShadow;
export type FocusRing = typeof focusRing;
