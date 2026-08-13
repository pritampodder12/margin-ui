/**
 * Margin Resume Builder - Type Exports
 * Central export point for all TypeScript types
 */

// Resume types
export type {
  PersonalInfo,
  Experience,
  Education,
  Skill,
  Project,
  Certification,
  Language,
  SectionType,
  ResumeSection,
  Resume,
  ResumeMetadata,
  CreateResumeInput,
  UpdateResumeInput,
} from './resume';

// Template types
export type {
  TemplateCategory,
  TemplateColorScheme,
  TemplateFontConfig,
  TemplateLayout,
  Template,
  TemplateMetadata,
  TemplateFilter,
} from './template';

// Common types
export type {
  ID,
  Timestamp,
  PaginationParams,
  PaginatedResponse,
  ApiResponse,
  ApiError,
  Status,
  Size,
  Theme,
  Orientation,
  KeyboardShortcut,
  SelectOption,
  BreadcrumbItem,
  DropdownItem,
  NotificationType,
  Notification,
  TooltipPlacement,
  ExportOptions,
  FormField,
  Quote,
  FileData,
} from './common';
