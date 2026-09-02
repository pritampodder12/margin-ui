import * as React from 'react';
import { ChevronDown, ChevronRight, Plus, Trash2 } from 'lucide-react';
import type { Certification } from '@/store/resumeTypes';
import { cn } from '@/lib/cn';
import { EditableField } from './EditableField';
import { EditableBullet } from './EditableBullet';

export const CertificationCard = ({
  certification,
  expanded,
  onToggle,
  onUpdate,
  onDelete,
}: {
  certification: Certification;
  expanded: boolean;
  onToggle: () => void;
  onUpdate: (updates: Partial<Certification>) => void;
  onDelete: () => void;
}) => {
  const addBullet = () => {
    onUpdate({ description: [...certification.description, ''] });
  };

  const updateBullet = (i: number, value: string) => {
    const newBullets = [...certification.description];
    newBullets[i] = value;
    onUpdate({ description: newBullets });
  };

  const deleteBullet = (i: number) => {
    onUpdate({ description: certification.description.filter((_, idx) => idx !== i) });
  };

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
            {certification.name || 'Certification name'}
          </div>
          <div className="text-[0.78rem] text-[var(--ink-faint)] mt-0.5 truncate">
            {[certification.issuingOrganization, certification.doesNotExpire ? 'Does not expire' : '']
              .filter(Boolean)
              .join(' · ') || 'Issuing organization'}
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
            value={certification.name}
            onChange={(v) => onUpdate({ name: v })}
            placeholder="Certification name"
            className="font-semibold text-[0.92rem]"
          />

          <div className="mt-1 mb-3 text-[0.82rem] text-[var(--ink-soft)]">
            <EditableField
              value={certification.issuingOrganization}
              onChange={(v) => onUpdate({ issuingOrganization: v })}
              placeholder="Issuing organization"
            />
          </div>

          <label className="flex items-center gap-2 mb-3 text-[0.78rem] text-[var(--ink-soft)] cursor-pointer select-none w-fit">
            <input
              type="checkbox"
              checked={certification.doesNotExpire}
              onChange={(e) => onUpdate({ doesNotExpire: e.target.checked })}
              className="accent-[var(--red)]"
            />
            Does not expire
          </label>

          <div className="h-px bg-[var(--rule)] mb-3" />

          <ul className="m-0 pl-[18px]">
            {certification.description.map((bullet, i) => (
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
