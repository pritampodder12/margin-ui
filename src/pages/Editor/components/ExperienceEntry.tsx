import * as React from 'react';
import { Plus, X } from 'lucide-react';
import type { Experience } from '@/store/resumeTypes';
import { EditableField } from './EditableField';
import { EditableBullet } from './EditableBullet';

export const ExperienceEntry = ({
  experience,
  onUpdate,
  onDelete,
}: {
  experience: Experience;
  onUpdate: (updates: Partial<Experience>) => void;
  onDelete: () => void;
}) => {
  const addBullet = () => {
    onUpdate({ description: [...experience.description, ''] });
  };

  const updateBullet = (i: number, value: string) => {
    const newBullets = [...experience.description];
    newBullets[i] = value;
    onUpdate({ description: newBullets });
  };

  const deleteBullet = (i: number) => {
    onUpdate({ description: experience.description.filter((_, idx) => idx !== i) });
  };

  return (
    <div className="mb-[18px] relative group">
      {/* Header row */}
      <div className="flex justify-between items-baseline gap-4">
        <EditableField
          value={experience.position}
          onChange={(v) => onUpdate({ position: v })}
          placeholder="Job title"
          className="font-semibold text-[0.92rem] flex-1"
        />
        <div className="flex items-center gap-2 shrink-0">
          <input
            type="text"
            value={experience.startDate}
            onChange={(e) => onUpdate({ startDate: e.target.value })}
            placeholder="Start"
            className="w-16 bg-transparent border-none outline-none font-['JetBrains_Mono'] text-[0.72rem] text-[var(--ink-faint)]"
          />
          <span className="text-[var(--ink-faint)]">—</span>
          <input
            type="text"
            value={experience.current ? 'Present' : experience.endDate ?? ''}
            onChange={(e) => onUpdate({ endDate: e.target.value, current: false })}
            placeholder="End"
            className="w-16 bg-transparent border-none outline-none font-['JetBrains_Mono'] text-[0.72rem] text-[var(--ink-faint)]"
          />
        </div>
      </div>

      {/* Company & location */}
      <div className="flex gap-2 mt-0.5 mb-2 text-[0.82rem] text-[var(--ink-soft)]">
        <EditableField
          value={experience.companyName}
          onChange={(v) => onUpdate({ companyName: v })}
          placeholder="Company name"
          className="flex-1"
        />
        <span>—</span>
        <EditableField
          value={experience.location}
          onChange={(v) => onUpdate({ location: v })}
          placeholder="Location"
          className="w-24"
        />
      </div>

      {/* Bullets */}
      <ul className="m-0 pl-[18px]">
        {experience.description.map((bullet, i) => (
          <EditableBullet
            key={i}
            value={bullet}
            onChange={(v) => updateBullet(i, v)}
            onDelete={() => deleteBullet(i)}
            hasIssue={bullet.includes('responsible') && bullet.length < 80}
          />
        ))}
      </ul>

      {/* Add bullet button */}
      <button
        onClick={addBullet}
        className="ml-[18px] mt-1 text-[0.75rem] text-[var(--ink-faint)] hover:text-[var(--red)] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Plus className="w-3 h-3" />
        Add bullet
      </button>

      {/* Delete button */}
      <button
        onClick={onDelete}
        className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[var(--paper)] border border-[var(--rule)] text-[var(--ink-faint)] hover:text-[var(--red)] hover:border-[var(--red)] opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center"
      >
        <X className="w-3 h-3" />
      </button>
    </div>
  );
};
