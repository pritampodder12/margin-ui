import * as React from 'react';
import { Eyebrow } from '@/components/ui/typography';
import { cn } from '@/lib/cn';

export interface SectionInfo {
  label: string;
  count: number;
}

const SectionItem = ({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active?: boolean;
  onClick?: () => void;
}) => (
  <div
    onClick={onClick}
    className={cn(
      'flex items-center justify-between',
      'py-2.5 px-3 rounded-[4px] text-[0.88rem] cursor-pointer',
      'border-l-2 border-transparent mb-0.5',
      'transition-colors',
      active
        ? 'bg-[var(--red-soft)] text-[var(--red)] border-l-[var(--red)] font-semibold'
        : 'text-[var(--ink-soft)] hover:bg-[var(--paper-alt)] hover:text-[var(--ink)]'
    )}
  >
    <span>{label}</span>
    <span
      className={cn(
        "font-['JetBrains_Mono'] text-[0.68rem]",
        active ? 'text-[var(--red)]' : 'text-[var(--ink-faint)]'
      )}
    >
      {count}
    </span>
  </div>
);

export const SectionNav = ({
  sections,
  activeSection,
  onSelect,
}: {
  sections: SectionInfo[];
  activeSection: string;
  onSelect: (label: string) => void;
}) => (
  <div className="border-r border-[var(--rule)] py-[22px] px-4 overflow-y-auto max-[880px]:border-none max-[880px]:border-b">
    <Eyebrow className="px-1.5 mb-3 block">Sections</Eyebrow>
    {sections.map((section) => (
      <SectionItem
        key={section.label}
        label={section.label}
        count={section.count}
        active={activeSection === section.label}
        onClick={() => onSelect(section.label)}
      />
    ))}
    <div
      onClick={() => {
        // Could open a modal for custom sections
      }}
      className="mt-3.5 py-2.5 px-3 text-[0.82rem] text-[var(--ink-faint)] border border-dashed border-[var(--rule-strong)] rounded-[4px] text-center cursor-pointer hover:text-[var(--ink)] hover:border-[var(--ink-faint)]"
    >
      + Add section
    </div>
  </div>
);
