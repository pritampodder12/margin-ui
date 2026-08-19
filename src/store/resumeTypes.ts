// src/store/resumeTypes.ts

export interface Skill {
  id: string; // client-only, for list keys — not from backend
  name: string;
  category: string;
  proficiencyLevel: number;
  yearsOfExperience: number;
  description: string[];
  sortOrder: number;
}

export interface Education {
  id: string; // client-only
  institutionName: string;
  degree: string;
  fieldOfStudy: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string[];
}

export interface Experience {
  id: string; // client-only
  companyName: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string[];
  sortOrder: number;
}

export interface Certification {
  id: string; // client-only
  name: string;
  issuingOrganization: string;
  doesNotExpire: boolean;
  description: string[];
  sortOrder: number;
}

export interface Project {
  id: string; // client-only
  name: string;
  description: string[];
  technologies: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  sortOrder: number;
}

// Backend has no contact-info concept — this stays frontend-only,
// separate from the backend-mirrored fields below
export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  website?: string;
}

export interface ResumeData {
  id?: string;
  candidateName: string;
  title: string;
  objective: string;
  templateName: string;       // parser's detected template — not the builder's own layout choice
  contact: ContactInfo;       // frontend-only, user fills in
  education: Education[];
  experience: Experience[];
  certifications: Certification[];
  projects: Project[];
  skills: Skill[];
}

// resumeTypes.ts — add alongside ResumeData
export type ParsedResumeData = Omit<ResumeData, 'education' | 'experience' | 'skills' | 'certifications' | 'projects'> & {
  education: Omit<Education, 'id'>[];
  experience: Omit<Experience, 'id'>[];
  skills: Omit<Skill, 'id'>[];
  certifications: Omit<Certification, 'id'>[];
  projects: Omit<Project, 'id'>[];
};