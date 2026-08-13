/**
 * Margin Resume Builder - Resume Types
 * Type definitions for resume data structures
 */

// ═══════════════════════════════════════════════════════════════
// PERSONAL INFORMATION
// ═══════════════════════════════════════════════════════════════

export interface PersonalInfo {
  fullName: string;
  email: string;
  phone?: string;
  location?: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  summary?: string;
}

// ═══════════════════════════════════════════════════════════════
// EXPERIENCE
// ═══════════════════════════════════════════════════════════════

export interface Experience {
  id: string;
  company: string;
  position: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description?: string;
  achievements: string[];
}

// ═══════════════════════════════════════════════════════════════
// EDUCATION
// ═══════════════════════════════════════════════════════════════

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  gpa?: string;
  achievements?: string[];
}

// ═══════════════════════════════════════════════════════════════
// SKILL
// ═══════════════════════════════════════════════════════════════

export interface Skill {
  id: string;
  name: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category?: string;
}

// ═══════════════════════════════════════════════════════════════
// PROJECT
// ═══════════════════════════════════════════════════════════════

export interface Project {
  id: string;
  name: string;
  description?: string;
  technologies: string[];
  link?: string;
  startDate?: string;
  endDate?: string;
  current?: boolean;
}

// ═══════════════════════════════════════════════════════════════
// CERTIFICATION
// ═══════════════════════════════════════════════════════════════

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

// ═══════════════════════════════════════════════════════════════
// LANGUAGE
// ═══════════════════════════════════════════════════════════════

export interface Language {
  id: string;
  name: string;
  level: 'basic' | 'conversational' | 'professional' | 'native';
}

// ═══════════════════════════════════════════════════════════════
// SECTION TYPES
// ═══════════════════════════════════════════════════════════════

export type SectionType =
  | 'personal'
  | 'experience'
  | 'education'
  | 'skills'
  | 'projects'
  | 'certifications'
  | 'languages'
  | 'custom';

export interface ResumeSection {
  id: string;
  type: SectionType;
  title: string;
  visible: boolean;
  order: number;
}

// ═══════════════════════════════════════════════════════════════
// RESUME
// ═══════════════════════════════════════════════════════════════

export interface Resume {
  id: string;
  title: string;
  templateId: string;
  personalInfo: PersonalInfo;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  projects?: Project[];
  certifications?: Certification[];
  languages?: Language[];
  sections: ResumeSection[];
  metadata: ResumeMetadata;
}

export interface ResumeMetadata {
  createdAt: string;
  updatedAt: string;
  lastExportedAt?: string;
  exportCount: number;
}

// ═══════════════════════════════════════════════════════════════
// RESUME INPUT TYPES (for forms)
// ═══════════════════════════════════════════════════════════════

export type CreateResumeInput = Pick<Resume, 'title' | 'templateId'>;

export type UpdateResumeInput = Partial<
  Omit<Resume, 'id' | 'metadata'>
>;
