/**
 * Margin Resume Builder - Spacing System
 * Linear-inspired 8px base scale
 *
 * Design Philosophy:
 * - 8px base unit for consistent rhythm
 * - Predictable multipliers (0.5, 1, 1.5, 2, 3, 4, 5, 6, 8, 10, 12, 16)
 * - Semantic naming for common use cases
 */

// ═════════════════════════════════════════════════════════════════
// BASE SPACING SCALE (in pixels)
// ═════════════════════════════════════════════════════════════════

export const spacing = {
  px: '1px',
  0: '0',
  0.5: '0.125rem',   // 2px
  1: '0.25rem',       // 4px
  1.5: '0.375rem',    // 6px
  2: '0.5rem',        // 8px  <- Base unit
  2.5: '0.625rem',    // 10px
  3: '0.75rem',       // 12px
  3.5: '0.875rem',    // 14px
  4: '1rem',          // 16px
  5: '1.25rem',       // 20px
  6: '1.5rem',        // 24px
  7: '1.75rem',       // 28px
  8: '2rem',          // 32px
  9: '2.25rem',       // 36px
  10: '2.5rem',       // 40px
  11: '2.75rem',      // 44px
  12: '3rem',         // 48px
  14: '3.5rem',       // 56px
  16: '4rem',         // 64px
  20: '5rem',         // 80px
  24: '6rem',         // 96px
  28: '7rem',         // 112px
  32: '8rem',         // 128px
  36: '9rem',         // 144px
  40: '10rem',        // 160px
  44: '11rem',        // 176px
  48: '12rem',        // 192px
  52: '13rem',        // 208px
  56: '14rem',        // 224px
  60: '15rem',        // 240px
  64: '16rem',        // 256px
  72: '18rem',        // 288px
  80: '20rem',        // 320px
  96: '24rem',        // 384px
} as const;

// ═════════════════════════════════════════════════════════════════
// SEMANTIC SPACING (Component-specific)
// ═════════════════════════════════════════════════════════════════

export const componentSpacing = {
  // Button padding
  button: {
    xs: { y: spacing[1], x: spacing[2] },       // 4px 8px
    sm: { y: spacing[1.5], x: spacing[3] },    // 6px 12px
    md: { y: spacing[2], x: spacing[4] },       // 8px 16px
    lg: { y: spacing[2.5], x: spacing[5] },      // 10px 20px
    xl: { y: spacing[3], x: spacing[6] },        // 12px 24px
  },

  // Input padding
  input: {
    xs: { y: spacing[1], x: spacing[2] },       // 4px 8px
    sm: { y: spacing[1.5], x: spacing[3] },    // 6px 12px
    md: { y: spacing[2], x: spacing[3] },       // 8px 12px
    lg: { y: spacing[2.5], x: spacing[4] },     // 10px 16px
    xl: { y: spacing[3], x: spacing[4] },        // 12px 16px
  },

  // Card padding
  card: {
    xs: spacing[2],     // 8px
    sm: spacing[3],      // 12px
    md: spacing[4],      // 16px
    lg: spacing[6],      // 24px
    xl: spacing[8],      // 32px
  },

  // Modal padding
  modal: {
    header: spacing[4],   // 16px
    body: spacing[6],     // 24px
    footer: spacing[4],  // 16px
  },

  // Section padding
  section: {
    xs: { y: spacing[8], x: spacing[4] },      // 32px 16px
    sm: { y: spacing[12], x: spacing[6] },     // 48px 24px
    md: { y: spacing[16], x: spacing[8] },     // 64px 32px
    lg: { y: spacing[24], x: spacing[12] },    // 96px 48px
    xl: { y: spacing[32], x: spacing[16] },    // 128px 64px
  },

  // List item padding
  listItem: {
    xs: { y: spacing[1], x: spacing[2] },      // 4px 8px
    sm: { y: spacing[1.5], x: spacing[3] },   // 6px 12px
    md: { y: spacing[2], x: spacing[4] },       // 8px 16px
    lg: { y: spacing[3], x: spacing[4] },        // 12px 16px
  },

  // Tag/Badge padding
  badge: {
    xs: { y: spacing[0.5], x: spacing[1.5] }, // 2px 6px
    sm: { y: spacing[1], x: spacing[2] },      // 4px 8px
    md: { y: spacing[1.5], x: spacing[2.5] }, // 6px 10px
    lg: { y: spacing[2], x: spacing[3] },       // 8px 12px
  },

  // Table cell padding
  tableCell: {
    xs: { y: spacing[1], x: spacing[2] },      // 4px 8px
    sm: { y: spacing[2], x: spacing[3] },       // 8px 12px
    md: { y: spacing[3], x: spacing[4] },        // 12px 16px
    lg: { y: spacing[4], x: spacing[6] },        // 16px 24px
  },

  // Dropdown menu padding
  dropdown: {
    item: { y: spacing[2], x: spacing[3] },    // 8px 12px
    header: { y: spacing[1.5], x: spacing[3] }, // 6px 12px
  },

  // Toast padding
  toast: {
    padding: { y: spacing[3], x: spacing[4] }, // 12px 16px
    gap: spacing[3],                           // 12px
  },
} as const;

// ═════════════════════════════════════════════════════════════════
// GAP SCALE (For Flex/Grid gaps)
// ═════════════════════════════════════════════════════════════════

export const gap = {
  px: '1px',
  0: '0',
  0.5: '0.125rem',   // 2px
  1: '0.25rem',       // 4px
  1.5: '0.375rem',    // 6px
  2: '0.5rem',        // 8px  <- Default for most cases
  2.5: '0.625rem',    // 10px
  3: '0.75rem',       // 12px
  3.5: '0.875rem',    // 14px
  4: '1rem',          // 16px
  5: '1.25rem',       // 20px
  6: '1.5rem',        // 24px
  8: '2rem',          // 32px
  10: '2.5rem',       // 40px
  12: '3rem',         // 48px
  16: '4rem',         // 64px
} as const;

// ═════════════════════════════════════════════════════════════════
// INSET SPACING (Absolute positioning)
// ═════════════════════════════════════════════════════════════════

export const inset = {
  px: '1px',
  0: '0',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  4: '1rem',
  full: '100%',
  auto: 'auto',
} as const;

export type Spacing = typeof spacing;
export type ComponentSpacing = typeof componentSpacing;
export type Gap = typeof gap;
