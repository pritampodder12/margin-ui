/**
 * Resume Data Store
 * Simple state management without Context/Redux
 * Using custom hooks with a singleton store
 */

import apiService from '@/lib/http/ApiService';
import * as React from 'react';
import type { ParsedResumeData } from '@/types/resume';

export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  website?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  bullets: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
}

export type TemplateId = 'ledger' | 'northline' | 'compass';

export interface ResumeData {
  personalInfo: PersonalInfo;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
  templateId: TemplateId;
}

// Generate unique ID
const generateId = () => Math.random().toString(36).substring(2, 9);

// Default/empty resume
const defaultResume: ResumeData = {
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
  },
  summary: '',
  experience: [],
  education: [],
  skills: [],
  templateId: 'ledger',
};

// The API sends this literal placeholder instead of omitting empty fields
const NA = 'N/A';
const cleanField = (value: string): string => (value === NA ? '' : value);

/**
 * Maps the backend's ParsedResumeData (see @/types/resume.ts) onto the
 * frontend's ResumeData shape. Pure function — no store/React deps —
 * so it's easy to unit test in isolation.
 */
export function mapParsedResumeToResumeData(parsed: ParsedResumeData): ResumeData {
  return {
    personalInfo: {
      fullName: parsed.candidateName,
      email: '',   // not present in the parse response — user fills in
      phone: '',   // not present in the parse response — user fills in
      location: cleanField(parsed.experience[0]?.location ?? ''),
      linkedin: '',
    },
    summary: parsed.objective,
    experience: parsed.experience.map(exp => ({
      id: generateId(),
      title: exp.position,
      company: exp.companyName,
      location: cleanField(exp.location),
      startDate: exp.startDate,
      endDate: exp.endDate,
      current: exp.current,
      bullets: exp.description.filter(line => line !== NA),
    })),
    education: parsed.education.map(edu => ({
      id: generateId(),
      degree: edu.fieldOfStudy ? `${edu.degree}, ${edu.fieldOfStudy}` : edu.degree,
      school: edu.institutionName,
      location: cleanField(edu.location),
      startDate: edu.startDate,
      endDate: edu.endDate,
    })),
    skills: parsed.skills.map(skill => skill.name),
    templateId: 'ledger', // API's templateName ("modern") doesn't map to a TemplateId — default until templates are aligned
  };
}

// Singleton store
class ResumeStore {
  private data: ResumeData = { ...defaultResume };
  private listeners: Set<() => void> = new Set();
  private parseError: string | null = null;

  getSnapshot = (): ResumeData => this.data;

  getParseError = (): string | null => this.parseError;

  subscribe = (listener: () => void): (() => void) => {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  };

  private notify = () => {
    this.listeners.forEach(listener => listener());
  };

  setData = (data: ResumeData) => {
    this.data = { ...data };
    this.notify();
  };

  updatePersonalInfo = (info: Partial<PersonalInfo>) => {
    this.data = {
      ...this.data,
      personalInfo: { ...this.data.personalInfo, ...info },
    };
    this.notify();
  };

  updateSummary = (summary: string) => {
    this.data = { ...this.data, summary };
    this.notify();
  };

  addExperience = (exp?: Partial<Experience>) => {
    const newExp: Experience = {
      id: generateId(),
      title: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      bullets: [''],
      ...exp,
    };
    this.data = {
      ...this.data,
      experience: [...this.data.experience, newExp],
    };
    this.notify();
  };

  updateExperience = (id: string, updates: Partial<Experience>) => {
    this.data = {
      ...this.data,
      experience: this.data.experience.map(exp =>
        exp.id === id ? { ...exp, ...updates } : exp
      ),
    };
    this.notify();
  };

  removeExperience = (id: string) => {
    this.data = {
      ...this.data,
      experience: this.data.experience.filter(exp => exp.id !== id),
    };
    this.notify();
  };

  addEducation = (edu?: Partial<Education>) => {
    const newEdu: Education = {
      id: generateId(),
      degree: '',
      school: '',
      location: '',
      startDate: '',
      endDate: '',
      ...edu,
    };
    this.data = {
      ...this.data,
      education: [...this.data.education, newEdu],
    };
    this.notify();
  };

  updateEducation = (id: string, updates: Partial<Education>) => {
    this.data = {
      ...this.data,
      education: this.data.education.map(edu =>
        edu.id === id ? { ...edu, ...updates } : edu
      ),
    };
    this.notify();
  };

  removeEducation = (id: string) => {
    this.data = {
      ...this.data,
      education: this.data.education.filter(edu => edu.id !== id),
    };
    this.notify();
  };

  updateSkills = (skills: string[]) => {
    this.data = { ...this.data, skills };
    this.notify();
  };

  setTemplate = (templateId: TemplateId) => {
    this.data = { ...this.data, templateId };
    this.notify();
  };

  reset = () => {
    this.data = { ...defaultResume };
    this.parseError = null;
    this.notify();
  };

  parseFromFile = async (file: File): Promise<ResumeData> => {
    this.parseError = null;

    const [response, error] = await apiService.parsePdf(file);

    if (error || !response?.data) {
      this.parseError = 'Could not parse this resume. Please try a different file.';
      this.notify();
      throw error ?? new Error('parse-pdf returned no data');
    }

    const mapped = mapParsedResumeToResumeData(response.data);
    this.setData(mapped);
    return mapped;
  };
}

// Export singleton instance
export const resumeStore = new ResumeStore();

// React hook to use the store
export function useResumeStore(): ResumeData {
  const [data, setData] = React.useState<ResumeData>(resumeStore.getSnapshot());

  React.useEffect(() => {
    return resumeStore.subscribe(() => {
      setData(resumeStore.getSnapshot());
    });
  }, []);

  return data;
}