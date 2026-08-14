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

// src/types/resume.ts

export interface ParsedEducation {
  institutionName: string;
  degree: string;
  fieldOfStudy: string;
  location: string;
  startDate: string;      // ISO date string, e.g. "2017-01-01"
  endDate: string;        // ISO date string, or "N/A"
  current: boolean;
  gpa: string;             // "N/A" when not present
  description: string[];
}

export interface ParsedExperience {
  companyName: string;
  position: string;
  location: string;
  employmentType: string;  // "N/A" when not present
  startDate: string;
  endDate: string;         // ISO date string, or "Present"
  current: boolean;
  description: string[];
  highlights: string;      // "N/A" when not present
  sortOrder: number;
}

export interface ParsedCertification {
  name: string;
  issuingOrganization: string;
  credentialId: string;
  credentialUrl: string;
  issueDate: string;
  expirationDate: string;  // "N/A" when not present
  doesNotExpire: boolean;
  description: string[];
  sortOrder: number;
}

export interface ParsedProject {
  name: string;
  description: string[];
  technologies: string;    // comma-separated in the raw response
  projectUrl: string;
  githubUrl: string;
  startDate: string;
  endDate: string;
  current: boolean;
  sortOrder: number;
}

export interface ParsedSkill {
  name: string;
  category: string;
  proficiencyLevel: number;  // 0–100
  yearsOfExperience: number;
  description: string[];
  sortOrder: number;
}

export interface ParsedResumeData {
  candidateName: string;
  title: string;
  objective: string;
  templateName: string;
  education: ParsedEducation[];
  experience: ParsedExperience[];
  certifications: ParsedCertification[];
  projects: ParsedProject[];
  skills: ParsedSkill[];
}

// The full API envelope returned by POST /resumes/parse-pdf
export interface ParsePdfResponse {
  success: boolean;
  message: string;
  data: ParsedResumeData;
  timestamp: string; // ISO datetime
}

// ═══════════════════════════════════════════════════════════════
// RESUME INPUT TYPES (for forms)
// ═══════════════════════════════════════════════════════════════

export type CreateResumeInput = Pick<Resume, 'title' | 'templateId'>;

export type UpdateResumeInput = Partial<
  Omit<Resume, 'id' | 'metadata'>
>;
