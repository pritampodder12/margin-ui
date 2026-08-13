/**
 * Margin Resume Builder - Icon System
 * Lucide Icons with consistent sizing rules
 *
 * Design Philosophy:
 * - Lucide Icons as the icon library
 * - Consistent sizing scale
 * - Semantic naming for sizes
 * - Context-based icon sizing
 */

import type { LucideProps } from 'lucide-react';

// ═════════════════════════════════════════════════════════════════
// ICON SIZES
// ═════════════════════════════════════════════════════════════════

export const iconSize = {
  xs: 12,      // Inline with captions, labels
  sm: 14,      // Inline with small text, badges
  md: 16,      // Default, inline with body text
  lg: 18,      // Emphasis, subheadings
  xl: 20,      // Feature icons, buttons
  '2xl': 24,   // Section icons, large buttons
  '3xl': 32,   // Hero icons, empty states
  '4xl': 48,   // Large feature icons
  '5xl': 64,   // Extra large hero icons
} as const;

// ═════════════════════════════════════════════════════════════════
// ICON STROKE WIDTH
// ═════════════════════════════════════════════════════════════════

export const iconStrokeWidth = {
  thin: 1,
  light: 1.25,
  regular: 1.5,     // Default (Lucide default)
  medium: 1.75,
  semibold: 2,
  bold: 2.25,
  heavy: 2.5,
} as const;

// ═════════════════════════════════════════════════════════════════
// ICON CONTEXT SIZING (Auto-size based on context)
// ═════════════════════════════════════════════════════════════════

export const iconContext = {
  // Button icons
  button: {
    xs: iconSize.sm,    // 14px
    sm: iconSize.sm,   // 14px
    md: iconSize.md,   // 16px
    lg: iconSize.lg,   // 18px
    xl: iconSize.xl,   // 20px
  },

  // Input icons (prefix/suffix)
  input: {
    sm: iconSize.sm,   // 14px
    md: iconSize.md,   // 16px
    lg: iconSize.lg,   // 18px
  },

  // Badge/Tag icons
  badge: {
    sm: iconSize.xs,   // 12px
    md: iconSize.sm,   // 14px
    lg: iconSize.md,   // 16px
  },

  // Menu item icons
  menuItem: {
    sm: iconSize.sm,   // 14px
    md: iconSize.md,   // 16px
    lg: iconSize.lg,   // 18px
  },

  // Nav item icons
  navItem: {
    sm: iconSize.md,   // 16px
    md: iconSize.lg,   // 18px
    lg: iconSize.xl,   // 20px
  },

  // Card icons
  card: {
    sm: iconSize.lg,   // 18px
    md: iconSize.xl,   // 20px
    lg: iconSize['2xl'], // 24px
  },

  // Section icons
  section: {
    sm: iconSize['2xl'], // 24px
    md: iconSize['3xl'], // 32px
    lg: iconSize['4xl'], // 48px
  },

  // Empty state icons
  emptyState: iconSize['4xl'], // 48px

  // Feature icons
  feature: iconSize['3xl'],    // 32px

  // Avatar indicator icons
  avatarIndicator: iconSize.xs, // 12px

  // Toast icons
  toast: iconSize.lg,          // 18px

  // Alert icons
  alert: iconSize.xl,          // 20px
} as const;

// ═════════════════════════════════════════════════════════════════
// ICON COLOR RULES
// ═════════════════════════════════════════════════════════════════

export const iconColor = {
  // Default colors
  default: 'currentColor',

  // Muted icons
  muted: 'text-neutral-500 dark:text-neutral-400',

  // Primary icons
  primary: 'text-purple-500 dark:text-purple-400',

  // Accent icons
  accent: 'text-cyan-500 dark:text-cyan-400',

  // Success icons
  success: 'text-emerald-500 dark:text-emerald-400',

  // Warning icons
  warning: 'text-amber-500 dark:text-amber-400',

  // Error icons
  error: 'text-rose-500 dark:text-rose-400',

  // Info icons
  info: 'text-blue-500 dark:text-blue-400',
} as const;

// ═════════════════════════════════════════════════════════════════
// ICON PROPS PRESETS
// ═════════════════════════════════════════════════════════════════

export const iconProps = {
  xs: {
    size: iconSize.xs,
    strokeWidth: iconStrokeWidth.regular,
  } satisfies Partial<LucideProps>,

  sm: {
    size: iconSize.sm,
    strokeWidth: iconStrokeWidth.regular,
  } satisfies Partial<LucideProps>,

  md: {
    size: iconSize.md,
    strokeWidth: iconStrokeWidth.regular,
  } satisfies Partial<LucideProps>,

  lg: {
    size: iconSize.lg,
    strokeWidth: iconStrokeWidth.regular,
  } satisfies Partial<LucideProps>,

  xl: {
    size: iconSize.xl,
    strokeWidth: iconStrokeWidth.light,
  } satisfies Partial<LucideProps>,

  '2xl': {
    size: iconSize['2xl'],
    strokeWidth: iconStrokeWidth.light,
  } satisfies Partial<LucideProps>,

  '3xl': {
    size: iconSize['3xl'],
    strokeWidth: iconStrokeWidth.thin,
  } satisfies Partial<LucideProps>,

  '4xl': {
    size: iconSize['4xl'],
    strokeWidth: iconStrokeWidth.thin,
  } satisfies Partial<LucideProps>,
} as const;

// ═════════════════════════════════════════════════════════════════
// COMMONLY USED ICONS (Reference list)
// ═════════════════════════════════════════════════════════════════

/**
 * Common icons to use throughout the app.
 * Import from lucide-react:
 *
 * import {
 *   Plus,
 *   Trash2,
 *   Edit,
 *   ...
 * } from 'lucide-react';
 */

export const commonIcons = {
  // Actions
  add: 'Plus',
  edit: 'Pencil',
  delete: 'Trash2',
  save: 'Save',
  cancel: 'X',
  close: 'X',
  check: 'Check',
  refresh: 'RefreshCw',
  download: 'Download',
  upload: 'Upload',
  copy: 'Copy',
  paste: 'Clipboard',
  share: 'Share2',
  print: 'Printer',
  search: 'Search',
  filter: 'Filter',
  sort: 'ArrowUpDown',

  // Navigation
  menu: 'Menu',
  back: 'ArrowLeft',
  forward: 'ArrowRight',
  up: 'ArrowUp',
  down: 'ArrowDown',
  home: 'Home',
  dashboard: 'LayoutDashboard',
  settings: 'Settings',
  user: 'User',
  logout: 'LogOut',
  external: 'ExternalLink',

  // Files & Documents
  file: 'File',
  filePlus: 'FilePlus',
  folder: 'Folder',
  resume: 'FileText',
  template: 'LayoutTemplate',

  // Status
  success: 'CircleCheck',
  warning: 'AlertTriangle',
  error: 'CircleX',
  info: 'Info',
  loading: 'Loader2',

  // UI Elements
  chevronRight: 'ChevronRight',
  chevronLeft: 'ChevronLeft',
  chevronDown: 'ChevronDown',
  chevronUp: 'ChevronUp',
  caretDown: 'ChevronDown',
  more: 'MoreHorizontal',
  moreVertical: 'MoreVertical',
  drag: 'GripVertical',
  expand: 'Maximize2',
  collapse: 'Minimize2',
  fullscreen: 'Maximize2',
  minimize: 'Minimize',

  // Media
  image: 'Image',
  camera: 'Camera',
  play: 'Play',
  pause: 'Pause',

  // Communication
  mail: 'Mail',
  phone: 'Phone',
  message: 'MessageSquare',
  link: 'Link',

  // Social
  github: 'Github',
  linkedin: 'Linkedin',
  twitter: 'Twitter',

  // Time
  calendar: 'Calendar',
  clock: 'Clock',
  history: 'History',

  // Misc
  star: 'Star',
  heart: 'Heart',
  bookmark: 'Bookmark',
  lock: 'Lock',
  unlock: 'Unlock',
  eye: 'Eye',
  eyeOff: 'EyeOff',
  help: 'HelpCircle',
  question: 'CircleHelp',
  tooltip: 'Info',
  bell: 'Bell',
  notification: 'Bell',
  moon: 'Moon',
  sun: 'Sun',

  // Editor specific
  bold: 'Bold',
  italic: 'Italic',
  underline: 'Underline',
  strikethrough: 'Strikethrough',
  code: 'Code',
  listBullet: 'List',
  listNumbered: 'ListOrdered',
  quote: 'Quote',
  alignLeft: 'AlignLeft',
  alignCenter: 'AlignCenter',
  alignRight: 'AlignRight',
  indent: 'Indent',
  outdent: 'Outdent',
  undo: 'Undo',
  redo: 'Redo',
} as const;

export type IconSize = typeof iconSize;
export type IconContext = typeof iconContext;
