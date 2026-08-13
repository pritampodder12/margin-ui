import type { Config } from 'tailwindcss';

/**
 * Margin Resume Builder - Tailwind Configuration
 * Complete design system configuration
 */

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  darkMode: 'class',

  theme: {
    // ═══════════════════════════════════════════════════════════════
    // SCREENS (Breakpoints)
    // ═══════════════════════════════════════════════════════════════
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    // ═══════════════════════════════════════════════════════════════
    // COLORS
    // ═══════════════════════════════════════════════════════════════
    colors: {
      // Brand colors
      brand: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        accent: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          950: '#083344',
        },
      },

      // Neutral palette (Notion-inspired)
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

      // Status colors
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
    // SPACING (8px base scale)
    // ═══════════════════════════════════════════════════════════════
    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',    // 2px
      1: '0.25rem',        // 4px
      1.5: '0.375rem',    // 6px
      2: '0.5rem',        // 8px
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
    },

    // ═══════════════════════════════════════════════════════════════
    // TYPOGRAPHY
    // ═══════════════════════════════════════════════════════════════
    fontFamily: {
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
      ],
      mono: [
        'JetBrains Mono',
        'SF Mono',
        'Monaco',
        'Inconsolata',
        'Fira Code',
        'monospace',
      ],
      display: [
        'Inter',
        '-apple-system',
        'BlinkMacSystemFont',
        'system-ui',
        'sans-serif',
      ],
    },

    fontSize: {
      // Display
      'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      'display-xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      'display-lg': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],

      // Headings
      'heading-xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      'heading-lg': ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
      'heading-md': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      'heading-sm': ['1.25rem', { lineHeight: '1.4' }],
      'heading-xs': ['1.125rem', { lineHeight: '1.4' }],

      // Body
      'body-xl': ['1.125rem', { lineHeight: '1.6' }],
      'body-lg': ['1rem', { lineHeight: '1.6' }],
      'body-md': ['0.9375rem', { lineHeight: '1.5' }],
      'body-sm': ['0.875rem', { lineHeight: '1.5' }],
      'body-xs': ['0.8125rem', { lineHeight: '1.4' }],

      // Labels & Captions
      'label': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.01em' }],
      'caption': ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      'overline': ['0.625rem', { lineHeight: '1.4', letterSpacing: '0.08em' }],

      // Legacy support
      'xs': ['0.75rem', { lineHeight: '1rem' }],
      'sm': ['0.875rem', { lineHeight: '1.25rem' }],
      'base': ['1rem', { lineHeight: '1.5rem' }],
      'lg': ['1.125rem', { lineHeight: '1.75rem' }],
      'xl': ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },

    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },

    lineHeight: {
      none: '1',
      tight: '1.15',
      snug: '1.25',
      normal: '1.4',
      relaxed: '1.5',
      loose: '1.6',
      'extra-loose': '1.75',
    },

    letterSpacing: {
      tighter: '-0.02em',
      tight: '-0.01em',
      normal: '0',
      wide: '0.01em',
      wider: '0.02em',
      widest: '0.08em',
    },

    // ═══════════════════════════════════════════════════════════════
    // BORDER RADIUS
    // ═══════════════════════════════════════════════════════════════
    borderRadius: {
      none: '0',
      xs: '0.1875rem',    // 3px
      sm: '0.25rem',      // 4px
      md: '0.375rem',     // 6px
      DEFAULT: '0.5rem',  // 8px
      lg: '0.75rem',      // 12px
      xl: '1rem',         // 16px
      '2xl': '1.5rem',    // 24px
      '3xl': '2rem',      // 32px
      full: '9999px',
    },

    // ═══════════════════════════════════════════════════════════════
    // BOX SHADOW
    // ═══════════════════════════════════════════════════════════════
    boxShadow: {
      xs: '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
      sm: '0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.06)',
      DEFAULT: '0 2px 4px rgba(0, 0, 0, 0.04), 0 4px 6px rgba(0, 0, 0, 0.06), 0 1px 1px rgba(0, 0, 0, 0.04)',
      md: '0 2px 4px rgba(0, 0, 0, 0.04), 0 4px 6px rgba(0, 0, 0, 0.06), 0 1px 1px rgba(0, 0, 0, 0.04)',
      lg: '0 4px 6px rgba(0, 0, 0, 0.04), 0 10px 15px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)',
      xl: '0 8px 10px rgba(0, 0, 0, 0.04), 0 20px 25px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.04)',
      '2xl': '0 12px 20px rgba(0, 0, 0, 0.08), 0 25px 50px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.04)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)',
      none: 'none',

      // Glow shadows
      'glow-primary': '0 0 0 1px rgba(139, 92, 246, 0.1), 0 4px 12px rgba(139, 92, 246, 0.2)',
      'glow-accent': '0 0 0 1px rgba(6, 182, 212, 0.1), 0 4px 12px rgba(6, 182, 212, 0.2)',
      'glow-success': '0 0 0 1px rgba(16, 185, 129, 0.1), 0 4px 12px rgba(16, 185, 129, 0.2)',
      'glow-error': '0 0 0 1px rgba(244, 63, 94, 0.1), 0 4px 12px rgba(244, 63, 94, 0.2)',
      'glow-warning': '0 0 0 1px rgba(245, 158, 11, 0.1), 0 4px 12px rgba(245, 158, 11, 0.2)',
    },

    // ═══════════════════════════════════════════════════════════════
    // ANIMATIONS
    // ═══════════════════════════════════════════════════════════════
    animation: {
      none: 'none',
      spin: 'spin 1s linear infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce: 'bounce 1s infinite',
      wiggle: 'wiggle 1s ease-in-out infinite',

      // Fade animations
      'fade-in': 'fadeIn 150ms ease-out',
      'fade-out': 'fadeOut 150ms ease-in',
      'fade-in-up': 'fadeInUp 200ms ease-out',
      'fade-in-down': 'fadeInDown 200ms ease-out',
      'fade-in-left': 'fadeInLeft 200ms ease-out',
      'fade-in-right': 'fadeInRight 200ms ease-out',

      // Scale animations
      'scale-in': 'scaleIn 150ms ease-out',
      'scale-out': 'scaleOut 150ms ease-in',
      'zoom-in': 'zoomIn 200ms ease-out',
      'zoom-out': 'zoomOut 200ms ease-in',

      // Slide animations
      'slide-in-right': 'slideInRight 200ms ease-out',
      'slide-in-left': 'slideInLeft 200ms ease-out',
      'slide-in-up': 'slideInUp 200ms ease-out',
      'slide-in-down': 'slideInDown 200ms ease-out',

      // Shimmer (loading)
      shimmer: 'shimmer 2s linear infinite',
    },

    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      fadeOut: {
        '0%': { opacity: '1' },
        '100%': { opacity: '0' },
      },
      fadeInUp: {
        '0%': { opacity: '0', transform: 'translateY(10px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      fadeInDown: {
        '0%': { opacity: '0', transform: 'translateY(-10px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      fadeInLeft: {
        '0%': { opacity: '0', transform: 'translateX(10px)' },
        '100%': { opacity: '1', transform: 'translateX(0)' },
      },
      fadeInRight: {
        '0%': { opacity: '0', transform: 'translateX(-10px)' },
        '100%': { opacity: '1', transform: 'translateX(0)' },
      },
      scaleIn: {
        '0%': { opacity: '0', transform: 'scale(0.95)' },
        '100%': { opacity: '1', transform: 'scale(1)' },
      },
      scaleOut: {
        '0%': { opacity: '1', transform: 'scale(1)' },
        '100%': { opacity: '0', transform: 'scale(0.95)' },
      },
      zoomIn: {
        '0%': { opacity: '0', transform: 'scale(0.9)' },
        '100%': { opacity: '1', transform: 'scale(1)' },
      },
      zoomOut: {
        '0%': { opacity: '1', transform: 'scale(1)' },
        '100%': { opacity: '0', transform: 'scale(0.9)' },
      },
      slideInRight: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0)' },
      },
      slideInLeft: {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(0)' },
      },
      slideInUp: {
        '0%': { transform: 'translateY(100%)' },
        '100%': { transform: 'translateY(0)' },
      },
      slideInDown: {
        '0%': { transform: 'translateY(-100%)' },
        '100%': { transform: 'translateY(0)' },
      },
      shimmer: {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(100%)' },
      },
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      },
    },

    // ═══════════════════════════════════════════════════════════════
    // TRANSITIONS
    // ═══════════════════════════════════════════════════════════════
    transitionDuration: {
      instant: '0ms',
      fast: '100ms',
      normal: '150ms',
      slow: '200ms',
      slower: '300ms',
      slowest: '500ms',
    },

    transitionTimingFunction: {
      'ease-out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      'ease-out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
      'ease-out-cubic': 'cubic-bezier(0.33, 1, 0.68, 1)',
      'ease-in-out-quart': 'cubic-bezier(0.76, 0, 0.24, 1)',
      'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },

    // ═══════════════════════════════════════════════════════════════
    // Z-INDEX
    // ═══════════════════════════════════════════════════════════════
    zIndex: {
      'behind': '-1',
      'base': '0',
      'dropdown': '10',
      'sticky': '20',
      'fixed': '30',
      'modal-backdrop': '40',
      'modal': '50',
      'popover': '60',
      'tooltip': '70',
      'toast': '80',
      'max': '999',
    },

    // ═══════════════════════════════════════════════════════════════
    // CONTAINER
    // ═══════════════════════════════════════════════════════════════
    containers: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      prose: '656px',
    },

    // ═══════════════════════════════════════════════════════════════
    // MAX WIDTH
    // ═══════════════════════════════════════════════════════════════
    maxWidth: {
      ...{
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
        '3xl': '1600px',
        prose: '656px',
      },
      'container-xs': '480px',
      'container-sm': '640px',
      'container-md': '768px',
      'container-lg': '1024px',
      'container-xl': '1280px',
      'container-2xl': '1440px',
    },
  },

  plugins: [],
} satisfies Config;
