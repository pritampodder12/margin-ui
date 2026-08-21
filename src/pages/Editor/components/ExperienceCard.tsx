import * as React from 'react';
import { ChevronDown, ChevronRight, Plus, Trash2 } from 'lucide-react';
import type { Experience } from '@/store/resumeTypes';
import { cn } from '@/lib/cn';
import { EditableField } from './EditableField';
import { EditableBullet } from './EditableBullet';

export const ExperienceCard = ({
  experience,
  expanded,
  onToggle,
  onUpdate,
  onDelete,
}: {
  experience: Experience;
  expanded: boolean;
  onToggle: () => void;
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

  const dateRange = experience.startDate
    ? `${experience.startDate} – ${experience.current ? 'Present' : experience.endDate || ''}`
    : '';

  return (
    <div
      className={cn(
        'bg-[var(--card)] border rounded-[var(--radius-md)] mb-3 relative group transition-colors',
        expanded ? 'border-[var(--rule-strong)]' : 'border-[var(--rule)] hover:border-[var(--rule-strong)]'
      )}
    >
      {/* Collapsed header — click to expand/collapse */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-3 text-left py-3.5 px-4"
      >
        <div className="min-w-0 flex-1">
          <div
            className={cn(
              'text-[0.92rem] truncate',
              expanded ? 'font-semibold text-[var(--ink)]' : 'text-[var(--ink-soft)]'
            )}
          >
            {experience.position || 'Job title'}
          </div>
          <div className="text-[0.78rem] text-[var(--ink-faint)] mt-0.5 truncate">
            {[experience.companyName, dateRange].filter(Boolean).join(' · ') || 'Company name'}
          </div>
        </div>
        {expanded ? (
          <ChevronDown className="w-4 h-4 text-[var(--ink-faint)] shrink-0 mt-1" />
        ) : (
          <ChevronRight className="w-4 h-4 text-[var(--ink-faint)] shrink-0 mt-1" />
        )}
      </button>

      {/* Expanded form */}
      {expanded && (
        <div className="px-4 pb-4">
          <EditableField
            value={experience.position}
            onChange={(v) => onUpdate({ position: v })}
            placeholder="Job title"
            className="font-semibold text-[0.92rem]"
          />

          <div className="flex gap-2 mt-1 mb-3 text-[0.82rem] text-[var(--ink-soft)]">
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

          <div className="flex items-center gap-2 mb-3">
            <input
              type="text"
              value={experience.startDate}
              onChange={(e) => onUpdate({ startDate: e.target.value })}
              placeholder="Start"
              className="w-20 bg-[var(--paper-alt)] border border-[var(--rule)] rounded-[4px] px-2 py-1 outline-none font-['JetBrains_Mono'] text-[0.72rem] text-[var(--ink-soft)] focus:border-[var(--ink-faint)]"
            />
            <span className="text-[var(--ink-faint)]">—</span>
            <input
              type="text"
              value={experience.current ? 'Present' : experience.endDate ?? ''}
              onChange={(e) => onUpdate({ endDate: e.target.value, current: false })}
              placeholder="End"
              className="w-20 bg-[var(--paper-alt)] border border-[var(--rule)] rounded-[4px] px-2 py-1 outline-none font-['JetBrains_Mono'] text-[0.72rem] text-[var(--ink-soft)] focus:border-[var(--ink-faint)]"
            />
          </div>

          <div className="h-px bg-[var(--rule)] mb-3" />

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

          <button
            onClick={addBullet}
            className="ml-[18px] mt-1 text-[0.75rem] text-[var(--ink-faint)] hover:text-[var(--red)] flex items-center gap-1"
          >
            <Plus className="w-3 h-3" />
            Add bullet
          </button>
        </div>
      )}

      {/* Delete entry */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
        className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[var(--paper)] border border-[var(--rule)] text-[var(--ink-faint)] hover:text-[var(--red)] hover:border-[var(--red)] opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center"
      >
        <Trash2 className="w-3 h-3" />
      </button>
    </div>
  );
};
