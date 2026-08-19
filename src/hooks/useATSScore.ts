import * as React from 'react';
import type { ResumeData } from '@/store/resumeTypes';

const TRACKED_KEYWORDS = [
  'Figma',
  'Design systems',
  'User research',
  'A/B testing',
  'Stakeholder management',
];

function calculateATSScore(data: ResumeData): number {
  let score = 50;

  // Candidate/contact completeness
  if (data.candidateName) score += 5;
  if (data?.contact?.email) score += 5;
  if (data?.contact?.phone) score += 3;
  if (data?.contact?.linkedin) score += 5;

  // Summary
  if (data.objective && data.objective.length > 20) score += 10;

  // Experience
  if (data.experience.length > 0) score += 5;
  data.experience.forEach((exp) => {
    if (exp.description.length > 0) score += 2;
    exp.description.forEach((b) => {
      if (b.length > 30 && b.includes('%')) score += 1;
      if (!b.toLowerCase().includes('responsible for')) score += 0.5;
    });
  });

  // Skills
  if (data.skills.length >= 4) score += 5;

  return Math.min(100, Math.round(score));
}

/**
 * Recomputes ATS score + keyword matches only when resume data changes.
 * keywordScore/formattingScore/impactScore stay randomized on every call
 * that isn't memoized against `data`, matching the original mock behavior.
 */
export function useATSScore(data: ResumeData) {
  return React.useMemo(() => {
    const atsScore = calculateATSScore(data);
    const keywordScore = Math.min(100, atsScore + Math.floor(Math.random() * 10));
    const formattingScore = Math.min(100, 90 + Math.floor(Math.random() * 10));
    const impactScore = Math.min(100, atsScore - 5 + Math.floor(Math.random() * 20));

    const keywords = TRACKED_KEYWORDS.map((word) => ({
      word,
      matched:
        word === 'Stakeholder management'
          ? false
          : data.skills.some((s) => s.name.toLowerCase().includes(word.toLowerCase())),
    }));

    return { atsScore, keywordScore, formattingScore, impactScore, keywords };
  }, [data]);
}
