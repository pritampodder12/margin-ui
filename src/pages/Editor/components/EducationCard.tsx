import * as React from 'react';
import { ChevronDown, ChevronRight, Trash2 } from 'lucide-react';
import type { Education } from '@/store/resumeTypes';
import { cn } from '@/lib/cn';
import { EditableField } from './EditableField';

export const EducationCard = ({
  education,
  expanded,
  onToggle,
  onUpdate,
  onDelete,
}: {
  education: Education;
  expanded: boolean;
  onToggle: () => void;
  onUpdate: (updates: Partial<Education>) => void;
  onDelete: () => void;
}) => {
  const dateRange = education.startDate ? `${education.startDate} – ${education.endDate || ''}` : '';

  return (
    <div
      className={cn(
        'bg-[var(--card)] border rounded-[var(--radius-md)] mb-3 relative group transition-colors',
        expanded ? 'border-[var(--rule-strong)]' : 'border-[var(--rule)] hover:border-[var(--rule-strong)]'
      )}
    >
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
            {education.degree || 'Degree'}
          </div>
          <div className="text-[0.78rem] text-[var(--ink-faint)] mt-0.5 truncate">
            {[education.institutionName, dateRange].filter(Boolean).join(' · ') || 'School'}
          </div>
        </div>
        {expanded ? (
          <ChevronDown className="w-4 h-4 text-[var(--ink-faint)] shrink-0 mt-1" />
        ) : (
          <ChevronRight className="w-4 h-4 text-[var(--ink-faint)] shrink-0 mt-1" />
        )}
      </button>

      {expanded && (
        <div className="px-4 pb-4">
          <div className="flex gap-2 mb-2">
            <EditableField
              value={education.degree}
              onChange={(v) => onUpdate({ degree: v })}
              placeholder="Degree"
              className="font-semibold text-[0.92rem] flex-1"
            />
            <EditableField
              value={education.institutionName}
              onChange={(v) => onUpdate({ institutionName: v })}
              placeholder="School"
              className="font-semibold text-[0.92rem] flex-1"
            />
          </div>

          <div className="flex items-center gap-2 mb-2">
            <input
              type="text"
              value={education.startDate}
              onChange={(e) => onUpdate({ startDate: e.target.value })}
              placeholder="Start"
              className="w-20 bg-[var(--paper-alt)] border border-[var(--rule)] rounded-[4px] px-2 py-1 outline-none font-['JetBrains_Mono'] text-[0.72rem] text-[var(--ink-soft)] focus:border-[var(--ink-faint)]"
            />
            <span className="text-[var(--ink-faint)]">—</span>
            <input
              type="text"
              value={education.endDate ?? ''}
              onChange={(e) => onUpdate({ endDate: e.target.value })}
              placeholder="End"
              className="w-20 bg-[var(--paper-alt)] border border-[var(--rule)] rounded-[4px] px-2 py-1 outline-none font-['JetBrains_Mono'] text-[0.72rem] text-[var(--ink-soft)] focus:border-[var(--ink-faint)]"
            />
          </div>

          <EditableField
            value={education.location}
            onChange={(v) => onUpdate({ location: v })}
            placeholder="Location"
            className="text-[0.82rem] text-[var(--ink-soft)]"
          />
        </div>
      )}

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
