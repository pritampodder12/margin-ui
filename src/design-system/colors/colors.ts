/**
 * Margin Resume Builder - Color System
 * Inspired by Linear, Vercel, Notion, Framer, Raycast
 *
 * Design Philosophy:
 * - Sophisticated neutral palette with precise lightness values
 * - Accent colors that feel premium and focused
 * - Semantic colors with clear intent
 * - Dark-first approach with light mode as variant
 */

export const colors = {
  // ═══════════════════════════════════════════════════════════════
  // BRAND COLORS
  // ═══════════════════════════════════════════════════════════════

  brand: {
    // Primary - Electric indigo (Linear-inspired)
    primary: {
      50: '#f5f3ff',
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#8b5cf6', // Primary brand
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95',
      950: '#2e1065',
    },

    // Secondary - Warm neutral with purple undertone
    secondary: {
      50: '#fafaf9',
      100: '#f5f5f4',
      200: '#e7e5e4',
      300: '#d6d3d1',
      400: '#a8a29e',
      500: '#78716c',
      600: '#57534e',
      700: '#44403c',
      800: '#292524',
      900: '#1c1917',
      950: '#0c0a09',
    },

    // Accent - Vibrant cyan (Vercel-inspired)
    accent: {
      50: '#ecfeff',
      100: '#cffafe',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#06b6d4', // Primary accent
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
      950: '#083344',
    },

    // Success - Vibrant emerald
    success: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#10b981',
      600: '#059669',
      700: '#047857',
      800: '#065f46',
      900: '#064e3b',
      950: '#022c22',
    },

    // Warning - Warm amber
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
      950: '#451a03',
    },

    // Error - Soft rose
    error: {
      50: '#fff1f2',
      100: '#ffe4e6',
      200: '#fecdd3',
      300: '#fda4af',
      400: '#fb7185',
      500: '#f43f5e',
      600: '#e11d48',
      700: '#be123c',
      800: '#9f1239',
      900: '#881337',
      950: '#4c0519',
    },

    // Info - Cool blue
    info: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554',
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // NEUTRAL PALETTE (Notion-inspired precision)
  // ═══════════════════════════════════════════════════════════════

  neutral: {
    0: '#ffffff',
    50: '#fafafa',
    100: '#f5f5f5',
    150: '#ededed',
    200: '#e5e5e5',
    250: '#dedede',
    300: '#d4d4d4',
    350: '#c4c4c4',
    400: '#a3a3a3',
    450: '#8c8c8c',
    500: '#737373',
    550: '#646464',
    600: '#525252',
    650: '#464646',
    700: '#3f3f3f',
    750: '#353535',
    800: '#2a2a2a',
    850: '#1f1f1f',
    900: '#171717',
    950: '#0a0a0a',
    1000: '#000000',
  },

  // ═══════════════════════════════════════════════════════════════
  // SPECIAL COLORS
  // ═══════════════════════════════════════════════════════════════

  special: {
    // Gradient colors
    gradientStart: '#8b5cf6',
    gradientEnd: '#06b6d4',

    // Glass effect colors
    glassWhite: 'rgba(255, 255, 255, 0.08)',
    glassBlack: 'rgba(0, 0, 0, 0.16)',

    // Overlay colors
    overlayLight: 'rgba(255, 255, 255, 0.6)',
    overlayDark: 'rgba(0, 0, 0, 0.6)',

    // Border colors
    borderLight: 'rgba(0, 0, 0, 0.06)',
    borderDark: 'rgba(255, 255, 255, 0.08)',

    // Focus ring
    focusRing: 'rgba(139, 92, 246, 0.5)',
    focusRingDark: 'rgba(139, 92, 246, 0.4)',
  },
} as const;

// ═════════════════════════════════════════════════════════════════
// SEMANTIC COLORS
// ═════════════════════════════════════════════════════════════════

export const semanticColors = {
  // Light Mode Semantic Colors
  light: {
    // Backgrounds
    bg: {
      primary: colors.neutral[0],       // Main background
      secondary: colors.neutral[50],    // Secondary surfaces
      tertiary: colors.neutral[100],    // Tertiary surfaces
      elevated: colors.neutral[0],      // Elevated surfaces (cards, modals)
      overlay: 'rgba(0, 0, 0, 0.5)',    // Modal overlay
      subtle: colors.neutral[50],       // Subtle backgrounds
      hover: colors.neutral[100],       // Hover state
      active: colors.neutral[150],       // Active state
      disabled: colors.neutral[100],     // Disabled state
    },

    // Foregrounds (Text)
    fg: {
      primary: colors.neutral[900],      // Primary text
      secondary: colors.neutral[600],    // Secondary text
      tertiary: colors.neutral[500],     // Tertiary text
      disabled: colors.neutral[400],     // Disabled text
      inverse: colors.neutral[0],        // Inverse text (on dark)
      subtle: colors.neutral[550],       // Subtle text
      muted: colors.neutral[500],        // Muted text
    },

    // Borders
    border: {
      primary: colors.neutral[200],     // Primary border
      secondary: colors.neutral[150],    // Secondary border
      subtle: colors.neutral[100],       // Subtle border
      focus: colors.brand.primary[500],  // Focus border
      error: colors.brand.error[500],    // Error border
      success: colors.brand.success[500], // Success border
    },

    // Interactive elements
    interactive: {
      bg: colors.brand.primary[500],
      bgHover: colors.brand.primary[600],
      bgActive: colors.brand.primary[700],
      bgDisabled: colors.neutral[100],

      fg: colors.neutral[0],
      fgHover: colors.neutral[0],
      fgActive: colors.neutral[0],
      fgDisabled: colors.neutral[400],

      outline: colors.brand.primary[500],
      outlineHover: colors.brand.primary[600],
    },

    // Status colors
    status: {
      success: {
        bg: colors.brand.success[50],
        bgSolid: colors.brand.success[500],
        fg: colors.brand.success[700],
        fgSolid: colors.neutral[0],
        border: colors.brand.success[200],
      },
      warning: {
        bg: colors.brand.warning[50],
        bgSolid: colors.brand.warning[500],
        fg: colors.brand.warning[700],
        fgSolid: colors.neutral[900],
        border: colors.brand.warning[200],
      },
      error: {
        bg: colors.brand.error[50],
        bgSolid: colors.brand.error[500],
        fg: colors.brand.error[700],
        fgSolid: colors.neutral[0],
        border: colors.brand.error[200],
      },
      info: {
        bg: colors.brand.info[50],
        bgSolid: colors.brand.info[500],
        fg: colors.brand.info[700],
        fgSolid: colors.neutral[0],
        border: colors.brand.info[200],
      },
    },
  },

  // Dark Mode Semantic Colors
  dark: {
    // Backgrounds
    bg: {
      primary: colors.neutral[900],      // Main background
      secondary: colors.neutral[850],    // Secondary surfaces
      tertiary: colors.neutral[800],     // Tertiary surfaces
      elevated: colors.neutral[800],     // Elevated surfaces
      overlay: 'rgba(0, 0, 0, 0.75)',    // Modal overlay
      subtle: colors.neutral[850],        // Subtle backgrounds
      hover: colors.neutral[750],        // Hover state
      active: colors.neutral[700],        // Active state
      disabled: colors.neutral[800],      // Disabled state
    },

    // Foregrounds (Text)
    fg: {
      primary: colors.neutral[50],        // Primary text
      secondary: colors.neutral[300],     // Secondary text
      tertiary: colors.neutral[400],      // Tertiary text
      disabled: colors.neutral[600],      // Disabled text
      inverse: colors.neutral[900],       // Inverse text (on light)
      subtle: colors.neutral[450],        // Subtle text
      muted: colors.neutral[500],         // Muted text
    },

    // Borders
    border: {
      primary: colors.neutral[700],       // Primary border
      secondary: colors.neutral[750],      // Secondary border
      subtle: colors.neutral[800],        // Subtle border
      focus: colors.brand.primary[400],   // Focus border
      error: colors.brand.error[400],     // Error border
      success: colors.brand.success[400], // Success border
    },

    // Interactive elements
    interactive: {
      bg: colors.brand.primary[500],
      bgHover: colors.brand.primary[400],
      bgActive: colors.brand.primary[300],
      bgDisabled: colors.neutral[800],

      fg: colors.neutral[0],
      fgHover: colors.neutral[0],
      fgActive: colors.neutral[0],
      fgDisabled: colors.neutral[600],

      outline: colors.brand.primary[400],
      outlineHover: colors.brand.primary[300],
    },

    // Status colors
    status: {
      success: {
        bg: 'rgba(16, 185, 129, 0.1)',
        bgSolid: colors.brand.success[500],
        fg: colors.brand.success[300],
        fgSolid: colors.neutral[0],
        border: 'rgba(16, 185, 129, 0.2)',
      },
      warning: {
        bg: 'rgba(245, 158, 11, 0.1)',
        bgSolid: colors.brand.warning[500],
        fg: colors.brand.warning[300],
        fgSolid: colors.neutral[900],
        border: 'rgba(245, 158, 11, 0.2)',
      },
      error: {
        bg: 'rgba(244, 63, 94, 0.1)',
        bgSolid: colors.brand.error[500],
        fg: colors.brand.error[300],
        fgSolid: colors.neutral[0],
        border: 'rgba(244, 63, 94, 0.2)',
      },
      info: {
        bg: 'rgba(59, 130, 246, 0.1)',
        bgSolid: colors.brand.info[500],
        fg: colors.brand.info[300],
        fgSolid: colors.neutral[0],
        border: 'rgba(59, 130, 246, 0.2)',
      },
    },
  },
} as const;

// ═════════════════════════════════════════════════════════════════
// GRADIENT DEFINITIONS
// ═════════════════════════════════════════════════════════════════

export const gradients = {
  // Primary brand gradient
  primary: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',

  // Subtle glow gradient
  glow: 'linear-gradient(180deg, rgba(139, 92, 246, 0.1) 0%, transparent 100%)',

  // Card shimmer gradient
  shimmer: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)',

  // Glass gradient
  glass: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',

  // Dark glass gradient
  glassDark: 'linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 100%)',

  // Hero background gradient
  hero: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139, 92, 246, 0.15), transparent)',

  // Mesh gradient
  mesh: `
    radial-gradient(at 40% 20%, rgba(139, 92, 246, 0.15) 0px, transparent 50%),
    radial-gradient(at 80% 0%, rgba(6, 182, 212, 0.1) 0px, transparent 50%),
    radial-gradient(at 0% 50%, rgba(139, 92, 246, 0.1) 0px, transparent 50%)
  `,

  // Text gradient
  text: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
} as const;

export type ColorToken = typeof colors;
export type SemanticColorToken = typeof semanticColors;
