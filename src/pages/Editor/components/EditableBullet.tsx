import * as React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/cn';

export const EditableBullet = ({
  value,
  onChange,
  onDelete,
  hasIssue,
}: {
  value: string;
  onChange: (value: string) => void;
  onDelete: () => void;
  hasIssue?: boolean;
}) => (
  <li
    className={cn(
      'text-[0.86rem] text-[var(--ink-soft)] mb-1.5 leading-[1.55] flex items-start gap-2 group',
      hasIssue && 'outline outline-1.5 outline-dashed outline-[var(--red)] outline-offset-[3px] rounded-[2px]'
    )}
  >
    <span className="text-[var(--ink-faint)] flex-none">–</span>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="flex-1 bg-transparent border-none outline-none focus:ring-0"
      placeholder="Add bullet point..."
    />
    <button
      onClick={onDelete}
      className="opacity-0 group-hover:opacity-100 text-[var(--ink-faint)] hover:text-[var(--red)] transition-opacity"
    >
      <X className="w-3 h-3" />
    </button>
  </li>
);
