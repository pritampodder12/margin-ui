import * as React from 'react';
import { X } from 'lucide-react';

export const SkillPill = ({
  skill,
  onUpdate,
  onDelete,
}: {
  skill: string;
  onUpdate: (value: string) => void;
  onDelete: () => void;
}) => (
  <div className="group relative">
    <input
      type="text"
      value={skill}
      onChange={(e) => onUpdate(e.target.value)}
      className="text-[0.74rem] font-['JetBrains_Mono'] bg-[var(--paper-alt)] border border-[var(--rule)] py-1 px-2.5 rounded-[20px] text-[var(--ink-soft)] outline-none focus:border-[var(--red)] min-w-[80px]"
    />
    <button
      onClick={onDelete}
      className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[var(--red)] text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
    >
      <X className="w-2 h-2" />
    </button>
  </div>
);
