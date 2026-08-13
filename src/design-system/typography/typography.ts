/**
 * Margin Resume Builder - Typography System
 * Inspired by Linear, Vercel, Notion, Framer, Raycast
 *
 * Design Philosophy:
 * - Inter for UI (clean, modern, excellent readability)
 * - System font fallbacks for performance
 * - Precise line-heights for vertical rhythm
 * - Optical size optimization
 */

// ═════════════════════════════════════════════════════════════════
// FONT FAMILIES
// ═════════════════════════════════════════════════════════════════

export const fontFamily = {
  // Primary UI font - Inter
  sans: [
    'Inter',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ].join(','),

  // Monospace for code
  mono: [
    'JetBrains Mono',
    'SF Mono',
    'Monaco',
    'Inconsolata',
    'Fira Code',
    'Droid Sans Mono',
    'Source Code Pro',
    'monospace',
  ].join(','),

  // Display font for hero headings
  display: [
    'Inter',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'sans-serif',
  ].join(','),

  // System emoji
  emoji: [
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji',
  ].join(','),
} as const;

// ═════════════════════════════════════════════════════════════════
// FONT SIZES
// ═════════════════════════════════════════════════════════════════

export const fontSize = {
  // Display sizes (hero text)
  'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],     // 72px
  'display-xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],    // 60px
  'display-lg': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],       // 48px

  // Heading sizes
  'heading-xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],     // 36px
  'heading-lg': ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],   // 30px
  'heading-md': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],      // 24px
  'heading-sm': ['1.25rem', { lineHeight: '1.4' }],                               // 20px
  'heading-xs': ['1.125rem', { lineHeight: '1.4' }],                              // 18px

  // Body sizes
  'body-xl': ['1.125rem', { lineHeight: '1.6' }],                                 // 18px
  'body-lg': ['1rem', { lineHeight: '1.6' }],                                      // 16px
  'body-md': ['0.9375rem', { lineHeight: '1.5' }],                                 // 15px
  'body-sm': ['0.875rem', { lineHeight: '1.5' }],                                  // 14px
  'body-xs': ['0.8125rem', { lineHeight: '1.4' }],                                 // 13px

  // Label & caption sizes
  label: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.01em' }],            // 12px
  caption: ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.02em' }],          // 11px
  overline: ['0.625rem', { lineHeight: '1.4', letterSpacing: '0.08em' }],          // 10px

  // Code sizes
  'code-lg': ['0.9375rem', { lineHeight: '1.6' }],                                // 15px
  'code-md': ['0.875rem', { lineHeight: '1.5' }],                                 // 14px
  'code-sm': ['0.8125rem', { lineHeight: '1.5' }],                                // 13px
} as const;

// ═════════════════════════════════════════════════════════════════
// FONT WEIGHTS
// ═════════════════════════════════════════════════════════════════

export const fontWeight = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,         // Default body weight
  medium: 500,         // Emphasis, labels
  semibold: 600,       // Headings, buttons
  bold: 700,           // Strong emphasis
  extrabold: 800,
  black: 900,
} as const;

// ═════════════════════════════════════════════════════════════════
// LINE HEIGHTS
// ═════════════════════════════════════════════════════════════════

export const lineHeight = {
  none: '1',
  tight: '1.15',
  snug: '1.25',
  normal: '1.4',
  relaxed: '1.5',
  loose: '1.6',
  extraLoose: '1.75',
} as const;

// ═════════════════════════════════════════════════════════════════
// LETTER SPACING
// ═════════════════════════════════════════════════════════════════

export const letterSpacing = {
  tighter: '-0.02em',
  tight: '-0.01em',
  normal: '0',
  wide: '0.01em',
  wider: '0.02em',
  widest: '0.08em',
} as const;

// ═════════════════════════════════════════════════════════════════
// TYPOGRAPHY SCALE COMPOSITIONS
// ═════════════════════════════════════════════════════════════════

export const textStyle = {
  // Display styles (hero sections)
  'display-2xl': {
    fontFamily: fontFamily.display,
    fontSize: fontSize['display-2xl'][0],
    fontWeight: fontWeight.bold,
    lineHeight: fontSize['display-2xl'][1].lineHeight,
    letterSpacing: fontSize['display-2xl'][1].letterSpacing,
  },
  'display-xl': {
    fontFamily: fontFamily.display,
    fontSize: fontSize['display-xl'][0],
    fontWeight: fontWeight.bold,
    lineHeight: fontSize['display-xl'][1].lineHeight,
    letterSpacing: fontSize['display-xl'][1].letterSpacing,
  },
  'display-lg': {
    fontFamily: fontFamily.display,
    fontSize: fontSize['display-lg'][0],
    fontWeight: fontWeight.semibold,
    lineHeight: fontSize['display-lg'][1].lineHeight,
    letterSpacing: fontSize['display-lg'][1].letterSpacing,
  },

  // Heading styles
  'heading-xl': {
    fontFamily: fontFamily.sans,
    fontSize: fontSize['heading-xl'][0],
    fontWeight: fontWeight.semibold,
    lineHeight: fontSize['heading-xl'][1].lineHeight,
    letterSpacing: fontSize['heading-xl'][1].letterSpacing,
  },
  'heading-lg': {
    fontFamily: fontFamily.sans,
    fontSize: fontSize['heading-lg'][0],
    fontWeight: fontWeight.semibold,
    lineHeight: fontSize['heading-lg'][1].lineHeight,
    letterSpacing: fontSize['heading-lg'][1].letterSpacing,
  },
  'heading-md': {
    fontFamily: fontFamily.sans,
    fontSize: fontSize['heading-md'][0],
    fontWeight: fontWeight.semibold,
    lineHeight: fontSize['heading-md'][1].lineHeight,
    letterSpacing: fontSize['heading-md'][1].letterSpacing,
  },
  'heading-sm': {
    fontFamily: fontFamily.sans,
    fontSize: fontSize['heading-sm'][0],
    fontWeight: fontWeight.semibold,
    lineHeight: fontSize['heading-sm'][1].lineHeight,
  },
  'heading-xs': {
    fontFamily: fontFamily.sans,
    fontSize: fontSize['heading-xs'][0],
    fontWeight: fontWeight.medium,
    lineHeight: fontSize['heading-xs'][1].lineHeight,
  },

  // Body styles
  'body-xl': {
    fontFamily: fontFamily.sans,
    fontSize: fontSize['body-xl'][0],
    fontWeight: fontWeight.normal,
    lineHeight: fontSize['body-xl'][1].lineHeight,
  },
  'body-lg': {
    fontFamily: fontFamily.sans,
    fontSize: fontSize['body-lg'][0],
    fontWeight: fontWeight.normal,
    lineHeight: fontSize['body-lg'][1].lineHeight,
  },
  'body-md': {
    fontFamily: fontFamily.sans,
    fontSize: fontSize['body-md'][0],
    fontWeight: fontWeight.normal,
    lineHeight: fontSize['body-md'][1].lineHeight,
  },
  'body-sm': {
    fontFamily: fontFamily.sans,
    fontSize: fontSize['body-sm'][0],
    fontWeight: fontWeight.normal,
    lineHeight: fontSize['body-sm'][1].lineHeight,
  },
  'body-xs': {
    fontFamily: fontFamily.sans,
    fontSize: fontSize['body-xs'][0],
    fontWeight: fontWeight.normal,
    lineHeight: fontSize['body-xs'][1].lineHeight,
  },

  // Label styles
  label: {
    fontFamily: fontFamily.sans,
    fontSize: fontSize.label[0],
    fontWeight: fontWeight.medium,
    lineHeight: fontSize.label[1].lineHeight,
    letterSpacing: fontSize.label[1].letterSpacing,
  },
  'label-uppercase': {
    fontFamily: fontFamily.sans,
    fontSize: fontSize.label[0],
    fontWeight: fontWeight.semibold,
    lineHeight: fontSize.label[1].lineHeight,
    letterSpacing: letterSpacing.widest,
    textTransform: 'uppercase',
  },

  // Caption styles
  caption: {
    fontFamily: fontFamily.sans,
    fontSize: fontSize.caption[0],
    fontWeight: fontWeight.normal,
    lineHeight: fontSize.caption[1].lineHeight,
  },

  // Overline styles
  overline: {
    fontFamily: fontFamily.sans,
    fontSize: fontSize.overline[0],
    fontWeight: fontWeight.semibold,
    lineHeight: fontSize.overline[1].lineHeight,
    letterSpacing: fontSize.overline[1].letterSpacing,
    textTransform: 'uppercase',
  },

  // Code styles
  'code-lg': {
    fontFamily: fontFamily.mono,
    fontSize: fontSize['code-lg'][0],
    fontWeight: fontWeight.normal,
    lineHeight: fontSize['code-lg'][1].lineHeight,
  },
  'code-md': {
    fontFamily: fontFamily.mono,
    fontSize: fontSize['code-md'][0],
    fontWeight: fontWeight.normal,
    lineHeight: fontSize['code-md'][1].lineHeight,
  },
  'code-sm': {
    fontFamily: fontFamily.mono,
    fontSize: fontSize['code-sm'][0],
    fontWeight: fontWeight.normal,
    lineHeight: fontSize['code-sm'][1].lineHeight,
  },
} as const;

export type FontFamily = typeof fontFamily;
export type FontSize = typeof fontSize;
export type FontWeight = typeof fontWeight;
export type TextStyle = typeof textStyle;
