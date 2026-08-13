/**
 * Margin Resume Builder - Component Variants
 * Complete variant definitions for all UI components
 *
 * Design Philosophy:
 * - Consistent variant naming across components
 * - Semantic variant names (intent-based)
 * - Size variants for hierarchy
 * - Type-safe with TypeScript
 */

import { cva, type VariantProps } from 'class-variance-authority';


// ═══════════════════════════════════════════════════════════════════════════════
// BUTTON VARIANTS
// ═══════════════════════════════════════════════════════════════════════════════

export const buttonVariants = cva(
  // Base styles
  `
    inline-flex items-center justify-center gap-2
    font-medium transition-all duration-150
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2
    disabled:pointer-events-none disabled:opacity-50
    select-none
  `,
  {
    variants: {
      // Visual variants
      variant: {
        primary: `
          bg-neutral-900 text-neutral-50
          hover:bg-neutral-800
          active:bg-neutral-700
          dark:bg-neutral-50 dark:text-neutral-900
          dark:hover:bg-neutral-100
          dark:active:bg-neutral-200
        `,
        secondary: `
          bg-neutral-100 text-neutral-900
          hover:bg-neutral-200
          active:bg-neutral-300
          dark:bg-neutral-800 dark:text-neutral-50
          dark:hover:bg-neutral-700
          dark:active:bg-neutral-600
        `,
        outline: `
          bg-transparent text-neutral-900
          border border-neutral-200
          hover:bg-neutral-50 hover:border-neutral-300
          active:bg-neutral-100
          dark:text-neutral-50 dark:border-neutral-700
          dark:hover:bg-neutral-800 dark:hover:border-neutral-600
          dark:active:bg-neutral-700
        `,
        ghost: `
          bg-transparent text-neutral-700
          hover:bg-neutral-100
          active:bg-neutral-200
          dark:text-neutral-300
          dark:hover:bg-neutral-800
          dark:active:bg-neutral-700
        `,
        destructive: `
          bg-rose-500 text-white
          hover:bg-rose-600
          active:bg-rose-700
          dark:bg-rose-600
          dark:hover:bg-rose-500
          dark:active:bg-rose-700
        `,
        success: `
          bg-emerald-500 text-white
          hover:bg-emerald-600
          active:bg-emerald-700
          dark:bg-emerald-600
          dark:hover:bg-emerald-500
          dark:active:bg-emerald-700
        `,
        link: `
          bg-transparent text-purple-600 underline-offset-4
          hover:underline
          dark:text-purple-400
        `,
        gradient: `
          bg-gradient-to-r from-purple-500 to-cyan-500 text-white
          hover:from-purple-600 hover:to-cyan-600
          active:from-purple-700 active:to-cyan-700
          shadow-md shadow-purple-500/25
        `,
      },

      // Size variants
      size: {
        xs: 'h-7 px-2 text-xs rounded',
        sm: 'h-8 px-3 text-sm rounded-md',
        md: 'h-10 px-4 text-sm rounded-md',
        lg: 'h-11 px-5 text-base rounded-lg',
        xl: 'h-12 px-6 text-base rounded-lg',
        icon: 'h-10 w-10 rounded-md',
        'icon-sm': 'h-8 w-8 rounded',
        'icon-lg': 'h-11 w-11 rounded-lg',
      },

      // Width variants
      fullWidth: {
        true: 'w-full',
        false: '',
      },

      // Loading state
      loading: {
        true: 'pointer-events-none opacity-70',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
      loading: false,
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;


// ═══════════════════════════════════════════════════════════════════════════════
// INPUT VARIANTS
// ═══════════════════════════════════════════════════════════════════════════════

export const inputVariants = cva(
  // Base styles
  `
    w-full bg-transparent text-neutral-900 dark:text-neutral-50
    placeholder:text-neutral-400 dark:placeholder:text-neutral-500
    transition-all duration-150
    disabled:cursor-not-allowed disabled:opacity-50
    focus-visible:outline-none
  `,
  {
    variants: {
      variant: {
        default: `
          border border-neutral-200 dark:border-neutral-700
          hover:border-neutral-300 dark:hover:border-neutral-600
          focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20
          dark:focus:border-purple-400 dark:focus:ring-purple-400/20
        `,
        filled: `
          bg-neutral-100 dark:bg-neutral-800
          border border-transparent
          hover:bg-neutral-200 dark:hover:bg-neutral-700
          focus:bg-white dark:focus:bg-neutral-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20
        `,
        ghost: `
          border border-transparent
          hover:bg-neutral-50 dark:hover:bg-neutral-800
          focus:bg-neutral-50 dark:focus:bg-neutral-800 focus:border-purple-500
        `,
        underline: `
          border-0 border-b border-neutral-200 rounded-none
          hover:border-neutral-300
          focus:border-purple-500 focus:ring-0
          dark:border-neutral-700 dark:focus:border-purple-400
          bg-transparent px-0
        `,
        unstyled: `
          border-0 bg-transparent
          focus:ring-0
        `,
      },

      size: {
        xs: 'h-7 px-2 text-xs rounded',
        sm: 'h-8 px-3 text-sm rounded-md',
        md: 'h-10 px-3 text-sm rounded-md',
        lg: 'h-11 px-4 text-base rounded-lg',
        xl: 'h-12 px-4 text-base rounded-lg',
      },

      state: {
        default: '',
        error: `
          border-rose-500 dark:border-rose-400
          hover:border-rose-600 dark:hover:border-rose-500
          focus:border-rose-500 focus:ring-rose-500/20
          dark:focus:ring-rose-400/20
        `,
        success: `
          border-emerald-500 dark:border-emerald-400
          hover:border-emerald-600 dark:hover:border-emerald-500
          focus:border-emerald-500 focus:ring-emerald-500/20
          dark:focus:ring-emerald-400/20
        `,
        warning: `
          border-amber-500 dark:border-amber-400
          hover:border-amber-600 dark:hover:border-amber-500
          focus:border-amber-500 focus:ring-amber-500/20
          dark:focus:ring-amber-400/20
        `,
      },

      // Left/Right icon padding
      leftIcon: {
        true: 'pl-10',
        false: '',
      },

      rightIcon: {
        true: 'pr-10',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      state: 'default',
      leftIcon: false,
      rightIcon: false,
    },
  }
);

export type InputVariants = VariantProps<typeof inputVariants>;


// ═══════════════════════════════════════════════════════════════════════════════
// TEXTAREA VARIANTS
// ═══════════════════════════════════════════════════════════════════════════════

export const textareaVariants = cva(
  // Base styles
  `
    w-full min-h-[80px] bg-transparent text-neutral-900 dark:text-neutral-50
    placeholder:text-neutral-400 dark:placeholder:text-neutral-500
    transition-all duration-150 resize-none
    disabled:cursor-not-allowed disabled:opacity-50
    focus-visible:outline-none
  `,
  {
    variants: {
      variant: {
        default: `
          border border-neutral-200 dark:border-neutral-700
          hover:border-neutral-300 dark:hover:border-neutral-600
          focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20
          dark:focus:border-purple-400 dark:focus:ring-purple-400/20
          rounded-md px-3 py-2
        `,
        filled: `
          bg-neutral-100 dark:bg-neutral-800
          border border-transparent rounded-md px-3 py-2
          hover:bg-neutral-200 dark:hover:bg-neutral-700
          focus:bg-white dark:focus:bg-neutral-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20
        `,
        underline: `
          border-0 border-b border-neutral-200 rounded-none
          hover:border-neutral-300
          focus:border-purple-500 focus:ring-0
          dark:border-neutral-700 dark:focus:border-purple-400
          bg-transparent px-0 py-2
        `,
      },

      size: {
        sm: 'text-sm',
        md: 'text-sm',
        lg: 'text-base',
      },

      state: {
        default: '',
        error: `
          border-rose-500 dark:border-rose-400
          hover:border-rose-600 dark:hover:border-rose-500
          focus:border-rose-500 focus:ring-rose-500/20
          dark:focus:ring-rose-400/20
        `,
        success: `
          border-emerald-500 dark:border-emerald-400
          hover:border-emerald-600 dark:hover:border-emerald-500
          focus:border-emerald-500 focus:ring-emerald-500/20
          dark:focus:ring-emerald-400/20
        `,
      },

      // Enable resize
      resize: {
        none: 'resize-none',
        vertical: 'resize-y',
        horizontal: 'resize-x',
        both: 'resize',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      state: 'default',
      resize: 'vertical',
    },
  }
);

export type TextareaVariants = VariantProps<typeof textareaVariants>;


// ═══════════════════════════════════════════════════════════════════════════════
// CARD VARIANTS
// ═══════════════════════════════════════════════════════════════════════════════

export const cardVariants = cva(
  // Base styles
  `
    bg-white dark:bg-neutral-900
    transition-all duration-200
  `,
  {
    variants: {
      variant: {
        default: `
          border border-neutral-200 dark:border-neutral-700
          shadow-sm
          hover:shadow-md
        `,
        elevated: `
          border border-transparent
          shadow-md
          hover:shadow-lg hover:-translate-y-0.5
        `,
        outline: `
          border border-neutral-200 dark:border-neutral-700
          bg-transparent
        `,
        ghost: `
          border border-transparent
          bg-transparent
          hover:bg-neutral-50 dark:hover:bg-neutral-800
        `,
        interactive: `
          border border-neutral-200 dark:border-neutral-700
          shadow-sm cursor-pointer
          hover:border-purple-300 dark:hover:border-purple-600
          hover:shadow-md hover:shadow-purple-500/5
          active:scale-[0.99]
        `,
        gradient: `
          border border-transparent
          bg-gradient-to-br from-purple-50 to-cyan-50
          dark:from-purple-950/30 dark:to-cyan-950/30
          shadow-sm
        `,
      },

      size: {
        xs: 'p-3',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
        xl: 'p-10',
      },

      radius: {
        none: 'rounded-none',
        sm: 'rounded-lg',
        md: 'rounded-xl',
        lg: 'rounded-2xl',
        xl: 'rounded-3xl',
        full: 'rounded-3xl',
      },

      // Hover state
      hoverable: {
        true: 'cursor-pointer',
        false: '',
      },

      // Selected state
      selected: {
        true: 'ring-2 ring-purple-500 dark:ring-purple-400 border-purple-500 dark:border-purple-400',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      radius: 'md',
      hoverable: false,
      selected: false,
    },
  }
);

export type CardVariants = VariantProps<typeof cardVariants>;


// ═══════════════════════════════════════════════════════════════════════════════
// BADGE VARIANTS
// ═══════════════════════════════════════════════════════════════════════════════

export const badgeVariants = cva(
  // Base styles
  `
    inline-flex items-center gap-1.5 font-medium
    transition-colors duration-150
  `,
  {
    variants: {
      variant: {
        default: `
          bg-neutral-100 text-neutral-900
          dark:bg-neutral-800 dark:text-neutral-100
        `,
        primary: `
          bg-purple-100 text-purple-700
          dark:bg-purple-900/30 dark:text-purple-300
        `,
        secondary: `
          bg-neutral-50 text-neutral-600
          dark:bg-neutral-800 dark:text-neutral-400
        `,
        success: `
          bg-emerald-100 text-emerald-700
          dark:bg-emerald-900/30 dark:text-emerald-300
        `,
        warning: `
          bg-amber-100 text-amber-700
          dark:bg-amber-900/30 dark:text-amber-300
        `,
        error: `
          bg-rose-100 text-rose-700
          dark:bg-rose-900/30 dark:text-rose-300
        `,
        info: `
          bg-blue-100 text-blue-700
          dark:bg-blue-900/30 dark:text-blue-300
        `,
        outline: `
          bg-transparent border border-neutral-200 text-neutral-700
          dark:border-neutral-700 dark:text-neutral-300
        `,
        gradient: `
          bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-700
          dark:from-purple-900/30 dark:to-cyan-900/30 dark:text-purple-300
        `,
      },

      size: {
        xs: 'px-1.5 py-0.5 text-[10px] rounded',
        sm: 'px-2 py-0.5 text-xs rounded',
        md: 'px-2.5 py-1 text-xs rounded-md',
        lg: 'px-3 py-1 text-sm rounded-md',
      },

      // Shape variants
      rounded: {
        default: '',
        pill: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      rounded: 'default',
    },
  }
);

export type BadgeVariants = VariantProps<typeof badgeVariants>;


// ═══════════════════════════════════════════════════════════════════════════════
// ALERT VARIANTS
// ═══════════════════════════════════════════════════════════════════════════════

export const alertVariants = cva(
  // Base styles
  `
    flex gap-3 p-4 rounded-lg
    text-sm
  `,
  {
    variants: {
      variant: {
        default: `
          bg-neutral-50 text-neutral-900
          border border-neutral-200
          dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-700
        `,
        info: `
          bg-blue-50 text-blue-900
          border border-blue-200
          dark:bg-blue-900/20 dark:text-blue-100 dark:border-blue-800
        `,
        success: `
          bg-emerald-50 text-emerald-900
          border border-emerald-200
          dark:bg-emerald-900/20 dark:text-emerald-100 dark:border-emerald-800
        `,
        warning: `
          bg-amber-50 text-amber-900
          border border-amber-200
          dark:bg-amber-900/20 dark:text-amber-100 dark:border-amber-800
        `,
        error: `
          bg-rose-50 text-rose-900
          border border-rose-200
          dark:bg-rose-900/20 dark:text-rose-100 dark:border-rose-800
        `,
      },

      // With icon
      withIcon: {
        true: '',
        false: '',
      },

      // Dismissible
      dismissible: {
        true: 'pr-10 relative',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      withIcon: false,
      dismissible: false,
    },
  }
);

export type AlertVariants = VariantProps<typeof alertVariants>;


// ═══════════════════════════════════════════════════════════════════════════════
// MODAL/DIALOG VARIANTS
// ═══════════════════════════════════════════════════════════════════════════════

export const modalVariants = cva(
  // Base modal content styles
  `
    bg-white dark:bg-neutral-900
    shadow-2xl
    relative
  `,
  {
    variants: {
      size: {
        xs: 'max-w-sm',
        sm: 'max-w-md',
        md: 'max-w-lg',
        lg: 'max-w-2xl',
        xl: 'max-w-4xl',
        '2xl': 'max-w-6xl',
        full: 'max-w-[95vw] max-h-[95vh]',
      },

      radius: {
        default: 'rounded-2xl',
        none: 'rounded-none',
        sm: 'rounded-lg',
        lg: 'rounded-3xl',
      },

      // Fullscreen mode
      fullscreen: {
        true: 'w-[95vw] h-[95vh]',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      radius: 'default',
      fullscreen: false,
    },
  }
);

// Modal overlay styles
export const modalOverlayVariants = cva(
  `
    fixed inset-0 z-50
    bg-neutral-900/50 dark:bg-neutral-950/70
    backdrop-blur-sm
  `,
  {
    variants: {
      // Centered modal
      centered: {
        true: 'flex items-center justify-center p-4',
        false: '',
      },
    },
    defaultVariants: {
      centered: true,
    },
  }
);

export type ModalVariants = VariantProps<typeof modalVariants>;
export type ModalOverlayVariants = VariantProps<typeof modalOverlayVariants>;


// ═══════════════════════════════════════════════════════════════════════════════
// AVATAR VARIANTS
// ═══════════════════════════════════════════════════════════════════════════════

export const avatarVariants = cva(
  `
    relative inline-flex shrink-0 items-center justify-center
    overflow-hidden
    bg-neutral-100 dark:bg-neutral-800
    text-neutral-600 dark:text-neutral-400
  `,
  {
    variants: {
      size: {
        xs: 'h-6 w-6 text-xs',
        sm: 'h-8 w-8 text-sm',
        md: 'h-10 w-10 text-base',
        lg: 'h-12 w-12 text-lg',
        xl: 'h-14 w-14 text-xl',
        '2xl': 'h-16 w-16 text-2xl',
      },

      shape: {
        circle: 'rounded-full',
        square: 'rounded-lg',
      },

      // With border
      bordered: {
        true: 'ring-2 ring-white dark:ring-neutral-900',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      shape: 'circle',
      bordered: false,
    },
  }
);

export type AvatarVariants = VariantProps<typeof avatarVariants>;


// ═══════════════════════════════════════════════════════════════════════════════
// SKELETON VARIANTS (Loading state)
// ═══════════════════════════════════════════════════════════════════════════════

export const skeletonVariants = cva(
  `
    animate-pulse
    bg-neutral-200 dark:bg-neutral-800
  `,
  {
    variants: {
      variant: {
        text: 'h-4 rounded',
        title: 'h-6 rounded',
        avatar: 'rounded-full',
        button: 'h-10 rounded-md',
        card: 'rounded-xl',
        image: 'rounded-lg',
        input: 'h-10 rounded-md',
      },

      width: {
        full: 'w-full',
        '3/4': 'w-3/4',
        '1/2': 'w-1/2',
        '1/3': 'w-1/3',
        '1/4': 'w-1/4',
      },

      rounded: {
        none: 'rounded-none',
        sm: 'rounded',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'text',
      width: 'full',
      rounded: 'md',
    },
  }
);

export type SkeletonVariants = VariantProps<typeof skeletonVariants>;


// ═══════════════════════════════════════════════════════════════════════════════
// EMPTY STATE VARIANTS
// ═══════════════════════════════════════════════════════════════════════════════

export const emptyStateVariants = cva(
  `
    flex flex-col items-center justify-center
    text-center
    p-8
  `,
  {
    variants: {
      size: {
        sm: 'py-8 px-6',
        md: 'py-12 px-8',
        lg: 'py-16 px-10',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export type EmptyStateVariants = VariantProps<typeof emptyStateVariants>;


// ═══════════════════════════════════════════════════════════════════════════════
// DIVIDER VARIANTS
// ═══════════════════════════════════════════════════════════════════════════════

export const dividerVariants = cva(
  `
    bg-neutral-200 dark:bg-neutral-700
  `,
  {
    variants: {
      orientation: {
        horizontal: 'h-px w-full',
        vertical: 'w-px h-full',
      },

      spacing: {
        sm: '',
        md: '',
        lg: '',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
    },
  }
);

export type DividerVariants = VariantProps<typeof dividerVariants>;


// ═══════════════════════════════════════════════════════════════════════════════
// TOOLTIP VARIANTS
// ═══════════════════════════════════════════════════════════════════════════════

export const tooltipVariants = cva(
  `
    z-50 overflow-hidden
    bg-neutral-900 dark:bg-neutral-50
    text-neutral-50 dark:text-neutral-900
    px-3 py-1.5
    text-xs font-medium
    shadow-lg
    animate-in fade-in-0 zoom-in-95
  `,
  {
    variants: {
      rounded: {
        default: 'rounded-md',
        sm: 'rounded',
        lg: 'rounded-lg',
      },
    },
    defaultVariants: {
      rounded: 'default',
    },
  }
);

export type TooltipVariants = VariantProps<typeof tooltipVariants>;
