import type { Education, Experience, ResumeData } from '@/store/resumeTypes';

// Shape of the pieces of useResumeActions() that suggestions are allowed to call.
// Keeping this narrow (rather than importing the whole hook's return type) makes
// it obvious exactly what an "apply" is permitted to mutate.
export type SuggestionActions = {
  updateExperience: (id: string, updates: Partial<Experience>) => void;
  updateEducation: (id: string, updates: Partial<Education>) => void;
  updateObjective: (value: string) => void;
  addNamedSkill: (name: string) => void;
};

export type Suggestion = {
  id: string;
  section: 'Summary' | 'Experience' | 'Education' | 'Skills';
  tag: string;
  text: string;
  apply: (data: ResumeData, actions: SuggestionActions) => void;
};

// NOTE: these are placeholder/dummy suggestions — same shape a real AI-scoring
// pass would return, but the trigger conditions and copy are hardcoded for now.
// Swap the `section` lists below for a live call once the scoring API exists.

const summarySuggestions: Suggestion[] = [
  {
    id: 'summary-tighten',
    section: 'Summary',
    tag: 'TIGHTEN',
    text: "Your summary runs long for a parser's first pass. Trim to under two sentences.",
    apply: (data, actions) => {
      const sentences = data.objective.split(/(?<=[.!?])\s+/).filter(Boolean);
      actions.updateObjective(sentences.slice(0, 2).join(' '));
    },
  },
  {
    id: 'summary-years',
    section: 'Summary',
    tag: 'KEYWORD',
    text: 'Lead with your years of experience — recruiters scan for it first.',
    apply: (data, actions) => {
      if (/years? of experience/i.test(data.objective)) return;
      actions.updateObjective(`6 years of experience. ${data.objective}`.trim());
    },
  },
];

const experienceSuggestions: Suggestion[] = [
  {
    id: 'exp-stakeholder-bullet',
    section: 'Experience',
    tag: 'KEYWORD',
    text: 'Add a bullet on stakeholder management — it\u2019s in the job description but missing from your experience.',
    apply: (data, actions) => {
      const exp = data.experience[0];
      if (!exp) return;
      actions.updateExperience(exp.id, {
        description: [
          ...exp.description,
          'Partnered with cross-functional stakeholders to align on requirements and timelines',
        ],
      });
    },
  },
  {
    id: 'exp-rewrite-weak',
    section: 'Experience',
    tag: 'REWRITE',
    text: 'Swap "responsible for" for a specific outcome — what changed because of you?',
    apply: (data, actions) => {
      const exp =
        data.experience.find((e) => e.description.some((b) => b.toLowerCase().includes('responsible'))) ||
        data.experience[0];
      if (!exp) return;
      const idx = exp.description.findIndex((b) => b.toLowerCase().includes('responsible'));
      const nextDescription = [...exp.description];
      const rewritten = 'Owned end-to-end delivery of core features, cutting release time by 30%';
      if (idx >= 0) {
        nextDescription[idx] = rewritten;
      } else if (nextDescription.length > 0) {
        nextDescription[0] = rewritten;
      } else {
        nextDescription.push(rewritten);
      }
      actions.updateExperience(exp.id, { description: nextDescription });
    },
  },
  {
    id: 'exp-quantify',
    section: 'Experience',
    tag: 'METRIC',
    text: 'Quantify your impact — add a number to your most recent bullet.',
    apply: (data, actions) => {
      const exp = data.experience[0];
      if (!exp || exp.description.length === 0) return;
      const nextDescription = [...exp.description];
      const lastIdx = nextDescription.length - 1;
      nextDescription[lastIdx] = `${nextDescription[lastIdx]} — improved performance by 20%`;
      actions.updateExperience(exp.id, { description: nextDescription });
    },
  },
];

const educationSuggestions: Suggestion[] = [
  {
    id: 'edu-standardize-location',
    section: 'Education',
    tag: 'FORMAT',
    text: 'Standardize your location as "City, Country" so it parses cleanly.',
    apply: (data, actions) => {
      const edu = data.education[0];
      if (!edu) return;
      const parts = edu.location.split(',').map((p) => p.trim()).filter(Boolean);
      actions.updateEducation(edu.id, { location: parts.join(', ') });
    },
  },
  {
    id: 'edu-add-honors',
    section: 'Education',
    tag: 'ADD',
    text: 'Note academic honors on your degree line — e.g. "with distinction".',
    apply: (data, actions) => {
      const edu = data.education[0];
      if (!edu || edu.degree.includes('with distinction')) return;
      actions.updateEducation(edu.id, { degree: `${edu.degree} (with distinction)` });
    },
  },
];

const skillsSuggestions: Suggestion[] = [
  {
    id: 'skill-stakeholder',
    section: 'Skills',
    tag: 'KEYWORD',
    text: 'Add "Stakeholder management" — it appears in the job description but not in your skills.',
    apply: (_data, actions) => actions.addNamedSkill('Stakeholder management'),
  },
  {
    id: 'skill-figma',
    section: 'Skills',
    tag: 'KEYWORD',
    text: 'Add "Figma" — commonly requested for this role.',
    apply: (_data, actions) => actions.addNamedSkill('Figma'),
  },
];

const SUGGESTIONS_BY_SECTION: Record<Suggestion['section'], Suggestion[]> = {
  Summary: summarySuggestions,
  Experience: experienceSuggestions,
  Education: educationSuggestions,
  Skills: skillsSuggestions,
};

/** Returns the dummy suggestion set for a section, hiding ones that need an entry that doesn't exist yet. */
export const getSectionSuggestions = (section: string, data: ResumeData): Suggestion[] => {
  const list = SUGGESTIONS_BY_SECTION[section as Suggestion['section']] ?? [];
  if (section === 'Experience' && data.experience.length === 0) return [];
  if (section === 'Education' && data.education.length === 0) return [];
  return list;
};
