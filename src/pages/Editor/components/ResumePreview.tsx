import * as React from 'react';
import { Plus } from 'lucide-react';
import type { ResumeData } from '@/store/resumeTypes';
import { useResumeActions } from '../../../hooks/useResumeActions';
import { EditableField } from './EditableField';
import { EditableTextarea } from './EditableTextarea';
import { ExperienceEntry } from './ExperienceEntry';
import { EducationEntry } from './EducationEntry';
import { SkillPill } from './SkillPill';

export const ResumePreview = ({ data }: { data: ResumeData }) => {
  const {
    addExperience,
    addEducation,
    addSkill,
    updateExperience,
    updateEducation,
    deleteExperience,
    deleteEducation,
    updateSkillName,
    deleteSkill,
    updateCandidateName,
    updateObjective,
    updateEmail,
  } = useResumeActions();

  return (
    <div className="bg-[var(--paper-alt)] overflow-y-auto flex justify-center py-10 px-6 pb-[60px] max-[880px]:py-7 max-[880px]:px-4">
      <div className="w-full max-w-[560px] bg-[var(--card)] border border-[var(--rule-strong)] rounded-[var(--radius-md)] shadow-[0_26px_50px_-26px_rgba(23,24,28,0.35)] py-11 px-[46px] h-fit relative">
        {/* Name */}
        <div className="font-['Fraunces'] font-semibold text-[1.9rem]">
          <EditableField value={data.candidateName} onChange={updateCandidateName} placeholder="Your Name" />
        </div>

        {/* Email */}
        <div className="font-['JetBrains_Mono'] text-[0.78rem] tracking-[0.05em] uppercase text-[var(--ink-soft)] mt-1.5">
          <EditableField value={data?.contact?.email} onChange={updateEmail} placeholder="email@example.com" />
        </div>

        {/* Contact */}
        <div className="text-[0.8rem] text-[var(--ink-faint)] mt-2">
          {/* {[data?.contact.phone, data?.contact.linkedin].filter(Boolean).join(' · ') || ( */}
            <span className="text-[var(--ink-faint)] opacity-50">Add contact info...</span>
          {/* )} */}
        </div>

        {/* Divider */}
        <div className="h-px bg-[var(--rule)] my-[22px] mb-[18px]" />

        {/* Summary */}
        <div className="font-['JetBrains_Mono'] text-[0.68rem] tracking-[0.1em] uppercase text-[var(--ink-faint)] mb-3">
          Summary
        </div>
        <EditableTextarea
          value={data.objective}
          onChange={updateObjective}
          placeholder="Write a brief professional summary..."
        />

        {/* Divider */}
        <div className="h-px bg-[var(--rule)] my-[22px] mb-[18px]" />

        {/* Experience */}
        <div className="font-['JetBrains_Mono'] text-[0.68rem] tracking-[0.1em] uppercase text-[var(--ink-faint)] mb-3">
          Experience
        </div>

        {data.experience.length === 0 && (
          <button
            onClick={addExperience}
            className="w-full py-4 border border-dashed border-[var(--rule-strong)] rounded-[4px] text-[0.85rem] text-[var(--ink-faint)] hover:border-[var(--red)] hover:text-[var(--red)] transition-colors"
          >
            + Add experience
          </button>
        )}

        {data.experience.map((exp) => (
          <ExperienceEntry
            key={exp.id}
            experience={exp}
            onUpdate={(updates) => updateExperience(exp.id, updates)}
            onDelete={() => deleteExperience(exp.id)}
          />
        ))}

        {data.experience.length > 0 && (
          <button
            onClick={addExperience}
            className="ml-[18px] mt-2 text-[0.75rem] text-[var(--ink-faint)] hover:text-[var(--red)] flex items-center gap-1"
          >
            <Plus className="w-3 h-3" />
            Add another experience
          </button>
        )}

        {/* Divider */}
        <div className="h-px bg-[var(--rule)] my-[22px] mb-[18px]" />

        {/* Education */}
        <div className="font-['JetBrains_Mono'] text-[0.68rem] tracking-[0.1em] uppercase text-[var(--ink-faint)] mb-3">
          Education
        </div>

        {data.education.length === 0 && (
          <button
            onClick={addEducation}
            className="w-full py-4 border border-dashed border-[var(--rule-strong)] rounded-[4px] text-[0.85rem] text-[var(--ink-faint)] hover:border-[var(--red)] hover:text-[var(--red)] transition-colors"
          >
            + Add education
          </button>
        )}

        {data.education.map((edu) => (
          <EducationEntry
            key={edu.id}
            education={edu}
            onUpdate={(updates) => updateEducation(edu.id, updates)}
            onDelete={() => deleteEducation(edu.id)}
          />
        ))}

        {data.education.length > 0 && (
          <button
            onClick={addEducation}
            className="ml-[18px] mt-2 text-[0.75rem] text-[var(--ink-faint)] hover:text-[var(--red)] flex items-center gap-1"
          >
            <Plus className="w-3 h-3" />
            Add another education
          </button>
        )}

        {/* Divider */}
        <div className="h-px bg-[var(--rule)] my-[22px] mb-[18px]" />

        {/* Skills */}
        <div className="font-['JetBrains_Mono'] text-[0.68rem] tracking-[0.1em] uppercase text-[var(--ink-faint)] mb-3">
          Skills
        </div>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill) => (
            <SkillPill
              key={skill.id}
              skill={skill.name}
              onUpdate={(v) => updateSkillName(skill.id, v)}
              onDelete={() => deleteSkill(skill.id)}
            />
          ))}
          <button
            onClick={addSkill}
            className="text-[0.74rem] font-['JetBrains_Mono'] border border-dashed border-[var(--rule-strong)] py-1 px-2.5 rounded-[20px] text-[var(--ink-faint)] hover:border-[var(--red)] hover:text-[var(--red)] transition-colors"
          >
            + Add skill
          </button>
        </div>
      </div>
    </div>
  );
};
