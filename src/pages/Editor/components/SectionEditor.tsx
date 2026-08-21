import * as React from 'react';
import { Eyebrow } from '@/components/ui/typography';
import type { ResumeData } from '@/store/resumeTypes';
import { SummarySection } from './SummarySection';
import { ExperienceSection } from './ExperienceSection';
import { EducationSection } from './EducationSection';
import { SkillsSection } from './SkillsSection';

type SectionMeta = {
  heading: string;
  count: (data: ResumeData) => number;
  noun: (n: number) => string;
};

const SECTION_META: Record<string, SectionMeta> = {
  Summary: {
    heading: 'Summary',
    count: (data) => (data.objective ? 1 : 0),
    noun: () => 'professional summary',
  },
  Experience: {
    heading: 'Experience',
    count: (data) => data.experience.length,
    noun: (n) => `${n} ${n === 1 ? 'entry' : 'entries'}`,
  },
  Education: {
    heading: 'Education',
    count: (data) => data.education.length,
    noun: (n) => `${n} ${n === 1 ? 'entry' : 'entries'}`,
  },
  Skills: {
    heading: 'Skills',
    count: (data) => Object.keys(data.skills).length,
    noun: (n) => `${n} ${n === 1 ? 'skill' : 'skills'}`,
  },
};

export const SectionEditor = ({ data, activeSection }: { data: ResumeData; activeSection: string }) => {
  const meta = SECTION_META[activeSection] ?? SECTION_META.Experience;
  const count = meta.count(data);

  return (
    <div className="bg-[var(--paper-alt)] overflow-y-auto py-10 px-6 pb-[60px] max-[880px]:py-7 max-[880px]:px-4">
      <div className="w-full max-w-[560px] mx-auto h-fit">
        <Eyebrow className="mb-1 block">Editing</Eyebrow>
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="font-['Fraunces'] font-semibold text-[1.6rem]">{meta.heading}</h2>
          <span className="font-['JetBrains_Mono'] text-[0.72rem] text-[var(--ink-faint)]">
            {meta.noun(count)}
          </span>
        </div>

        {activeSection === 'Summary' && <SummarySection data={data} />}
        {activeSection === 'Experience' && <ExperienceSection data={data} />}
        {activeSection === 'Education' && <EducationSection data={data} />}
        {activeSection === 'Skills' && <SkillsSection data={data} />}
      </div>
    </div>
  );
};
