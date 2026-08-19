import * as React from 'react';
import { X } from 'lucide-react';
import type { Education } from '@/store/resumeTypes';
import { EditableField } from './EditableField';

export const EducationEntry = ({
  education,
  onUpdate,
  onDelete,
}: {
  education: Education;
  onUpdate: (updates: Partial<Education>) => void;
  onDelete: () => void;
}) => (
  <div className="mb-[18px] relative group">
    <div className="flex justify-between items-baseline gap-4">
      <div className="flex-1 flex gap-2">
        <EditableField
          value={education.degree}
          onChange={(v) => onUpdate({ degree: v })}
          placeholder="Degree"
          className="font-semibold text-[0.92rem]"
        />
        <span className="text-[var(--ink-soft)]">—</span>
        <EditableField
          value={education.institutionName}
          onChange={(v) => onUpdate({ institutionName: v })}
          placeholder="School"
          className="font-semibold text-[0.92rem]"
        />
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <input
          type="text"
          value={education.startDate}
          onChange={(e) => onUpdate({ startDate: e.target.value })}
          placeholder="Start"
          className="w-12 bg-transparent border-none outline-none font-['JetBrains_Mono'] text-[0.72rem] text-[var(--ink-faint)]"
        />
        <span className="text-[var(--ink-faint)]">—</span>
        <input
          type="text"
          value={education.endDate ?? ''}
          onChange={(e) => onUpdate({ endDate: e.target.value })}
          placeholder="End"
          className="w-12 bg-transparent border-none outline-none font-['JetBrains_Mono'] text-[0.72rem] text-[var(--ink-faint)]"
        />
      </div>
    </div>
    <div className="text-[0.82rem] text-[var(--ink-soft)] mt-0.5">
      <EditableField
        value={education.location}
        onChange={(v) => onUpdate({ location: v })}
        placeholder="Location"
      />
    </div>

    {/* Delete button */}
    <button
      onClick={onDelete}
      className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[var(--paper)] border border-[var(--rule)] text-[var(--ink-faint)] hover:text-[var(--red)] hover:border-[var(--red)] opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center"
    >
      <X className="w-3 h-3" />
    </button>
  </div>
);
