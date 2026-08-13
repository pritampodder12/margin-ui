/**
 * Margin Resume Builder - Animation System
 * Framer Motion powered animations with Linear/Vercel-inspired feel
 *
 * Design Philosophy:
 * - Fast, responsive transitions (100-300ms)
 * - Smooth easing curves
 * - Subtle spring physics for natural feel
 * - Reduced motion support
 */

// ═════════════════════════════════════════════════════════════════
// DURATION TOKENS
// ═════════════════════════════════════════════════════════════════

export const duration = {
  instant: 0,
  fast: 100,      // Micro-interactions
  normal: 150,    // Standard transitions
  slow: 200,      // Deliberate transitions
  slower: 300,    // Complex animations
  slowest: 500,   // Page transitions
  enter: 200,     // Enter animations
  exit: 150,      // Exit animations
} as const;

// ═════════════════════════════════════════════════════════════════
// EASING CURVES
// ═════════════════════════════════════════════════════════════════

export const easing = {
  // Linear
  linear: 'linear',

  // Ease (CSS default)
  ease: 'ease',
  easeIn: 'ease-in',
  easeOut: 'ease-out',
  easeInOut: 'ease-in-out',

  // Custom easing (Linear-inspired)
  easeOutExpo: 'cubic-bezier(0.16, 1, 0.3, 1)',
  easeOutQuart: 'cubic-bezier(0.25, 1, 0.5, 1)',
  easeOutCubic: 'cubic-bezier(0.33, 1, 0.68, 1)',
  easeInOutQuart: 'cubic-bezier(0.76, 0, 0.24, 1)',
  easeInOutCubic: 'cubic-bezier(0.65, 0, 0.35, 1)',

  // Spring-like easing
  spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',

  // Snap easing
  snap: 'cubic-bezier(0.22, 1, 0.36, 1)',
} as const;

// ═════════════════════════════════════════════════════════════════
// SPRING PHYSICS (for Framer Motion)
// ═════════════════════════════════════════════════════════════════

export const spring = {
  // Snappy spring (Linear-style)
  snappy: {
    type: 'spring',
    stiffness: 800,
    damping: 35,
  },

  // Gentle spring
  gentle: {
    type: 'spring',
    stiffness: 400,
    damping: 30,
  },

  // Bouncy spring (Notion-style)
  bouncy: {
    type: 'spring',
    stiffness: 600,
    damping: 20,
  },

  // Stiff spring (for modals)
  stiff: {
    type: 'spring',
    stiffness: 1000,
    damping: 60,
  },

  // Soft spring (for subtle animations)
  soft: {
    type: 'spring',
    stiffness: 200,
    damping: 25,
  },
} as const;

// ═════════════════════════════════════════════════════════════════
// FADE ANIMATIONS
// ═════════════════════════════════════════════════════════════════

export const fadeVariants = {
  // Simple fade
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },

  // Fade up
  fadeUp: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  },

  // Fade down
  fadeDown: {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  },

  // Fade left
  fadeLeft: {
    initial: { opacity: 0, x: 10 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 10 },
  },

  // Fade right
  fadeRight: {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -10 },
  },

  // Scale fade
  scaleFade: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
} as const;

// ═════════════════════════════════════════════════════════════════
// SLIDE ANIMATIONS
// ═════════════════════════════════════════════════════════════════

export const slideVariants = {
  // Slide up
  slideUp: {
    initial: { y: '100%' },
    animate: { y: 0 },
    exit: { y: '100%' },
  },

  // Slide down
  slideDown: {
    initial: { y: '-100%' },
    animate: { y: 0 },
    exit: { y: '-100%' },
  },

  // Slide left
  slideLeft: {
    initial: { x: '100%' },
    animate: { x: 0 },
    exit: { x: '100%' },
  },

  // Slide right
  slideRight: {
    initial: { x: '-100%' },
    animate: { x: 0 },
    exit: { x: '-100%' },
  },
} as const;

// ═════════════════════════════════════════════════════════════════
// SCALE ANIMATIONS
// ═════════════════════════════════════════════════════════════════

export const scaleVariants = {
  // Scale in
  scaleIn: {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 },
  },

  // Scale up (from 95% to 100%)
  scaleUp: {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.95, opacity: 0 },
  },

  // Scale down
  scaleDown: {
    initial: { scale: 1.05, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 1.05, opacity: 0 },
  },

  // Pop effect
  pop: {
    initial: { scale: 0.9, opacity: 0 },
    animate: {
      scale: [0.9, 1.02, 1],
      opacity: 1,
    },
    exit: { scale: 0.9, opacity: 0 },
  },
} as const;

// ═════════════════════════════════════════════════════════════════
// TRANSITION PRESETS
// ═════════════════════════════════════════════════════════════════

export const transition = {
  // Default transition
  default: {
    duration: duration.normal,
    ease: easing.easeOutQuart,
  },

  // Fast transition
  fast: {
    duration: duration.fast,
    ease: easing.easeOutQuart,
  },

  // Slow transition
  slow: {
    duration: duration.slow,
    ease: easing.easeOutQuart,
  },

  // Spring transitions
  spring: spring.snappy,
  springGentle: spring.gentle,
  springBouncy: spring.bouncy,

  // Stagger children
  stagger: {
    staggerChildren: 0.05,
  },

  // Stagger slower
  staggerSlow: {
    staggerChildren: 0.1,
  },
} as const;

// ═════════════════════════════════════════════════════════════════
// COMPONENT ANIMATIONS
// ═════════════════════════════════════════════════════════════════

export const componentAnimations = {
  // Modal animation
  modal: {
    initial: { opacity: 0, scale: 0.95, y: 10 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: 10 },
    transition: {
      duration: duration.slow,
      ease: easing.easeOutQuart,
    },
  },

  // Dropdown animation
  dropdown: {
    initial: { opacity: 0, scale: 0.95, y: -5 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: -5 },
    transition: {
      duration: duration.fast,
      ease: easing.easeOutQuart,
    },
  },

  // Tooltip animation
  tooltip: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
    transition: {
      duration: duration.fast,
      ease: easing.easeOutQuart,
    },
  },

  // Card hover animation
  cardHover: {
    y: -2,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    transition: {
      duration: duration.fast,
      ease: easing.easeOutQuart,
    },
  },

  // Button press animation
  buttonPress: {
    scale: 0.98,
    transition: {
      duration: 50,
      ease: easing.easeOutCubic,
    },
  },

  // Toast animation
  toast: {
    initial: { opacity: 0, x: 20, scale: 0.95 },
    animate: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: 20, scale: 0.95 },
    transition: spring.snappy,
  },

  // Alert animation
  alert: {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: 'auto' },
    exit: { opacity: 0, height: 0 },
    transition: {
      duration: duration.normal,
      ease: easing.easeOutQuart,
    },
  },

  // Sidebar animation
  sidebar: {
    initial: { x: '-100%' },
    animate: { x: 0 },
    exit: { x: '-100%' },
    transition: {
      duration: duration.slow,
      ease: easing.easeOutQuart,
    },
  },

  // Page transition
  page: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: {
      duration: duration.slow,
      ease: easing.easeOutQuart,
    },
  },
} as const;

export type Duration = typeof duration;
export type Easing = typeof easing;
export type Spring = typeof spring;
