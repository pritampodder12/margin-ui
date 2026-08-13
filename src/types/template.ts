/**
 * Margin Resume Builder - Template Types
 * Type definitions for resume templates
 */

// ═══════════════════════════════════════════════════════════════
// TEMPLATE CATEGORY
// ═══════════════════════════════════════════════════════════════

export type TemplateCategory =
  | 'modern'
  | 'classic'
  | 'creative'
  | 'minimal'
  | 'professional';

// ═══════════════════════════════════════════════════════════════
// TEMPLATE COLOR SCHEME
// ═══════════════════════════════════════════════════════════════

export interface TemplateColorScheme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  muted: string;
}

// ═══════════════════════════════════════════════════════════════
// TEMPLATE FONT CONFIGURATION
// ═══════════════════════════════════════════════════════════════

export interface TemplateFontConfig {
  heading: string;
  body: string;
  sizes: {
    heading1: string;
    heading2: string;
    heading3: string;
    body: string;
    small: string;
  };
}

// ═══════════════════════════════════════════════════════════════
// TEMPLATE LAYOUT
// ═══════════════════════════════════════════════════════════════

export type TemplateLayout = 'single-column' | 'two-column' | 'sidebar';

// ═══════════════════════════════════════════════════════════════
// TEMPLATE
// ═══════════════════════════════════════════════════════════════

export interface Template {
  id: string;
  name: string;
  description: string;
  category: TemplateCategory;
  layout: TemplateLayout;
  preview: string;
  colors: TemplateColorScheme;
  fonts: TemplateFontConfig;
  isPremium: boolean;
  isPopular: boolean;
  tags: string[];
  metadata: TemplateMetadata;
}

export interface TemplateMetadata {
  createdAt: string;
  updatedAt: string;
  usesCount: number;
  rating?: number;
}

// ═══════════════════════════════════════════════════════════════
// TEMPLATE FILTER
// ═══════════════════════════════════════════════════════════════

export interface TemplateFilter {
  category?: TemplateCategory;
  layout?: TemplateLayout;
  isPremium?: boolean;
  search?: string;
}
