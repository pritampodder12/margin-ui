/**
 * Margin Resume Builder - App Constants
 * Application-wide constants
 */

// ═══════════════════════════════════════════════════════════════
// APP INFORMATION
// ═══════════════════════════════════════════════════════════════

export const APP_NAME = 'Margin';
export const APP_TAGLINE = 'AI-Powered Resume Builder';
export const APP_DESCRIPTION = 'Create professional resumes in minutes with AI assistance. Modern templates, real-time preview, and seamless export.';
export const APP_URL = 'https://margin.app';

// ═══════════════════════════════════════════════════════════════
// ROUTES
// ═══════════════════════════════════════════════════════════════

export const ROUTES = {
  HOME: '/',
  LANDING: '/',
  DASHBOARD: '/dashboard',
  TEMPLATES: '/templates',
  EDITOR: '/editor',
  EDITOR_WITH_ID: '/editor/:id',
} as const;

// ═══════════════════════════════════════════════════════════════
// LOCAL STORAGE KEYS
// ═══════════════════════════════════════════════════════════════

export const STORAGE_KEYS = {
  THEME: 'margin-theme',
  SIDEBAR_COLLAPSED: 'margin-sidebar-collapsed',
  RECENT_TEMPLATES: 'margin-recent-templates',
  DRAFT_RESUME: 'margin-draft-resume',
} as const;

// ═══════════════════════════════════════════════════════════════
// BREAKPOINT VALUES (JS)
// ═══════════════════════════════════════════════════════════════

export const BREAKPOINTS = {
  xs: 375,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// ═══════════════════════════════════════════════════════════════
// Z-INDEX SCALE
// ═══════════════════════════════════════════════════════════════

export const Z_INDEX = {
  BEHIND: -1,
  BASE: 0,
  DROPDOWN: 10,
  STICKY: 20,
  FIXED: 30,
  MODAL_BACKDROP: 40,
  MODAL: 50,
  POPOVER: 60,
  TOOLTIP: 70,
  TOAST: 80,
  MAX: 999,
} as const;

// ═══════════════════════════════════════════════════════════════
// ANIMATION DURATIONS
// ═══════════════════════════════════════════════════════════════

export const DURATION = {
  INSTANT: 0,
  FAST: 100,
  NORMAL: 150,
  SLOW: 200,
  SLOWER: 300,
  SLOWEST: 500,
} as const;

// ═══════════════════════════════════════════════════════════════
// QUERY SELECTORS
// ═══════════════════════════════════════════════════════════════

export const ARIA_ATTRIBUTES = {
  EXPANDED: 'aria-expanded',
  HIDDEN: 'aria-hidden',
  DISABLED: 'aria-disabled',
  LABEL: 'aria-label',
  LABELLEDBY: 'aria-labelledby',
  DESCRIBEDBY: 'aria-describedby',
  CURRENT: 'aria-current',
  SELECTED: 'aria-selected',
  CHECKED: 'aria-checked',
} as const;

// ═══════════════════════════════════════════════════════════════
// KEYBOARD SHORTCUTS
// ═══════════════════════════════════════════════════════════════

export const KEYBOARD_SHORTCUTS = {
  SAVE: 'ctrl+s',
  UNDO: 'ctrl+z',
  REDO: 'ctrl+shift+z',
  NEW_RESUME: 'ctrl+n',
  EXPORT: 'ctrl+e',
  FULLSCREEN: 'f11',
  ESCAPE: 'escape',
} as const;

// ═══════════════════════════════════════════════════════════════
// LIMITS
// ═══════════════════════════════════════════════════════════════

export const LIMITS = {
  RESUME_TITLE_MAX_LENGTH: 100,
  SECTION_TITLE_MAX_LENGTH: 50,
  TEXT_AREA_MAX_LENGTH: 2000,
  MAX_FILE_SIZE_MB: 5,
  MAX_TEMPLATES_PER_PAGE: 20,
  MAX_RECENT_RESUMES: 10,
} as const;

// ═══════════════════════════════════════════════════════════════
// DEFAULT VALUES
// ═══════════════════════════════════════════════════════════════

export const DEFAULTS = {
  PAGE: 1,
  PAGE_SIZE: 10,
  ZOOM_LEVEL: 100,
  SIDEBAR_WIDTH: 260,
  SIDEBAR_COLLAPSED_WIDTH: 64,
} as const;
