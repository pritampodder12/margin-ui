/**
 * Margin Resume Builder - Common Types
 * Shared type definitions used throughout the application
 */

// ═══════════════════════════════════════════════════════════════
// ID TYPES
// ═══════════════════════════════════════════════════════════════

export type ID = string;

// ═══════════════════════════════════════════════════════════════
// TIMESTAMP
// ═══════════════════════════════════════════════════════════════

export type Timestamp = string; // ISO 8601 date string

// ═══════════════════════════════════════════════════════════════
// PAGINATION
// ═══════════════════════════════════════════════════════════════

export interface PaginationParams {
  page: number;
  pageSize: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
    hasMore: boolean;
  };
}

// ═══════════════════════════════════════════════════════════════
// API RESPONSE
// ═══════════════════════════════════════════════════════════════

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: ApiError;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

// ═══════════════════════════════════════════════════════════════
// STATUS TYPES
// ═══════════════════════════════════════════════════════════════

export type Status = 'idle' | 'loading' | 'success' | 'error';

// ═══════════════════════════════════════════════════════════════
// SIZE TYPES
// ═══════════════════════════════════════════════════════════════

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// ═══════════════════════════════════════════════════════════════
// THEME TYPES
// ═══════════════════════════════════════════════════════════════

export type Theme = 'light' | 'dark' | 'system';

// ═══════════════════════════════════════════════════════════════
// ORIENTATION TYPES
// ═══════════════════════════════════════════════════════════════

export type Orientation = 'horizontal' | 'vertical';

// ═══════════════════════════════════════════════════════════════
// KEYBOARD EVENT
// ═══════════════════════════════════════════════════════════════

export interface KeyboardShortcut {
  key: string;
  ctrl?: boolean;
  shift?: boolean;
  alt?: boolean;
  meta?: boolean;
}

// ═══════════════════════════════════════════════════════════════
// SELECT OPTION
// ═══════════════════════════════════════════════════════════════

export interface SelectOption<T = string> {
  value: T;
  label: string;
  description?: string;
  disabled?: boolean;
}

// ═══════════════════════════════════════════════════════════════
// BREADCRUMB
// ═══════════════════════════════════════════════════════════════

export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

// ═══════════════════════════════════════════════════════════════
// DROPDOWN ITEM
// ═══════════════════════════════════════════════════════════════

export interface DropdownItem {
  id: string;
  label: string;
  icon?: string;
  disabled?: boolean;
  divider?: boolean;
}

// ═══════════════════════════════════════════════════════════════
// NOTIFICATION
// ═══════════════════════════════════════════════════════════════

export type NotificationType = 'info' | 'success' | 'warning' | 'error';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message?: string;
  duration?: number;
  dismissible?: boolean;
}

// ═══════════════════════════════════════════════════════════════
// TOOLTIP
// ═══════════════════════════════════════════════════════════════

export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';

// ═══════════════════════════════════════════════════════════════
// EXPORT OPTIONS
// ═══════════════════════════════════════════════════════════════

export interface ExportOptions {
  format: 'pdf' | 'png' | 'docx';
  quality: 'draft' | 'standard' | 'high';
  includeMetadata?: boolean;
}

// ═══════════════════════════════════════════════════════════════
// FORM FIELD
// ═══════════════════════════════════════════════════════════════

export interface FormField<T = string> {
  value: T;
  error?: string;
  touched?: boolean;
  dirty?: boolean;
}

// ═══════════════════════════════════════════════════════════════
// QUOTE TYPE
// ═══════════════════════════════════════════════════════════════

export interface Quote {
  text: string;
  author?: string;
  source?: string;
}

// ═══════════════════════════════════════════════════════════════
// FILE TYPE
// ═══════════════════════════════════════════════════════════════

export interface FileData {
  name: string;
  size: number;
  type: string;
  lastModified: Timestamp;
}
