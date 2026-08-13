/**
 * Resume Data Store
 * Simple state management without Context/Redux
 * Using custom hooks with a singleton store
 */

import * as React from 'react';

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

// Dummy parsed resume data (simulating PDF parse result)
const dummyParsedResume: ResumeData = {
  personalInfo: {
    fullName: 'Jordan Avery',
    email: 'jordan@email.com',
    phone: '(312) 555-0147',
    location: 'Chicago, IL',
    linkedin: 'linkedin.com/in/jordanavery',
  },
  summary: 'Product designer with 8 years building consumer software, focused on checkout and onboarding flows. Led design for three products from zero to launch. Passionate about creating intuitive user experiences that drive business results.',
  experience: [
    {
      id: generateId(),
      title: 'Lead Product Designer',
      company: 'Northwind Co.',
      location: 'Chicago, IL',
      startDate: '2022',
      endDate: 'Present',
      current: true,
      bullets: [
        'Redesigned checkout flow, lifting conversion 18% in six weeks.',
        'Led cross-functional team of 4 designers and 6 engineers to deliver new onboarding experience.',
        'Ran weekly research sessions that shaped the 2023 onboarding rebuild.',
        'Established design system components that reduced development time by 40%.',
      ],
    },
    {
      id: generateId(),
      title: 'Product Designer',
      company: 'Fielding Labs',
      location: 'Remote',
      startDate: '2019',
      endDate: '2022',
      current: false,
      bullets: [
        'Shipped the design system now used across 4 product teams.',
        'Partnered with engineering to cut design-to-ship time by 30%.',
        'Conducted user interviews with 50+ customers to inform product roadmap.',
        'Designed and prototyped mobile-first experiences for 2M+ active users.',
      ],
    },
    {
      id: generateId(),
      title: 'Junior Designer',
      company: 'Creative Studio Inc.',
      location: 'Columbus, OH',
      startDate: '2017',
      endDate: '2019',
      current: false,
      bullets: [
        'Created visual designs for web and mobile applications.',
        'Collaborated with senior designers on brand identity projects.',
        'Produced marketing materials that increased client engagement by 25%.',
      ],
    },
  ],
  education: [
    {
      id: generateId(),
      degree: 'B.A. Graphic Design',
      school: 'Ohio State University',
      location: 'Columbus, OH',
      startDate: '2013',
      endDate: '2017',
    },
  ],
  skills: ['Figma', 'Design Systems', 'User Research', 'Prototyping', 'SQL', 'A/B Testing', 'React', 'TypeScript', 'Accessibility'],
  templateId: 'ledger',
};

// Singleton store
class ResumeStore {
  private data: ResumeData = { ...defaultResume };
  private listeners: Set<() => void> = new Set();

  getSnapshot = (): ResumeData => this.data;

  subscribe = (listener: () => void): (() => void) => {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  };

  setData = (data: ResumeData) => {
    this.data = { ...data };
    this.listeners.forEach(listener => listener());
  };

  updatePersonalInfo = (info: Partial<PersonalInfo>) => {
    this.data = {
      ...this.data,
      personalInfo: { ...this.data.personalInfo, ...info },
    };
    this.listeners.forEach(listener => listener());
  };

  updateSummary = (summary: string) => {
    this.data = { ...this.data, summary };
    this.listeners.forEach(listener => listener());
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
    this.listeners.forEach(listener => listener());
  };

  updateExperience = (id: string, updates: Partial<Experience>) => {
    this.data = {
      ...this.data,
      experience: this.data.experience.map(exp =>
        exp.id === id ? { ...exp, ...updates } : exp
      ),
    };
    this.listeners.forEach(listener => listener());
  };

  removeExperience = (id: string) => {
    this.data = {
      ...this.data,
      experience: this.data.experience.filter(exp => exp.id !== id),
    };
    this.listeners.forEach(listener => listener());
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
    this.listeners.forEach(listener => listener());
  };

  updateEducation = (id: string, updates: Partial<Education>) => {
    this.data = {
      ...this.data,
      education: this.data.education.map(edu =>
        edu.id === id ? { ...edu, ...updates } : edu
      ),
    };
    this.listeners.forEach(listener => listener());
  };

  removeEducation = (id: string) => {
    this.data = {
      ...this.data,
      education: this.data.education.filter(edu => edu.id !== id),
    };
    this.listeners.forEach(listener => listener());
  };

  updateSkills = (skills: string[]) => {
    this.data = { ...this.data, skills };
    this.listeners.forEach(listener => listener());
  };

  setTemplate = (templateId: TemplateId) => {
    this.data = { ...this.data, templateId };
    this.listeners.forEach(listener => listener());
  };

  reset = () => {
    this.data = { ...defaultResume };
    this.listeners.forEach(listener => listener());
  };

  // Simulate PDF parsing
  parseFromFile = async (file: File): Promise<ResumeData> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Parsed file:', file.name);
    return { ...dummyParsedResume };
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
