/**
 * Resume Card Component
 * Used in Dashboard grid - matches original design exactly
 */

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { ScoreRing } from '@/components/common/ScoreRing';
import { cn } from '@/lib/cn';

interface ResumeCardProps {
  title: string;
  template: string;
  editedAgo: string;
  score: number;
  templateVariant: 'single' | 'sidebar' | 'timeline';
  onEdit?: () => void;
  onExport?: () => void;
  onDuplicate?: () => void;
  onDelete?: () => void;
  className?: string;
}

const TemplateThumb = ({
  variant,
}: {
  variant: 'single' | 'sidebar' | 'timeline';
}) => {
  if (variant === 'sidebar') {
    return (
      <div className="grid grid-cols-[26%_1fr] gap-2 h-full">
        <div className="bg-[var(--ink)] opacity-[0.12] rounded-[2px]" />
        <div className="flex flex-col gap-1.5">
          <div className="h-[5px] w-[90%] bg-[var(--rule-strong)] rounded-[2px]" />
          <div className="h-[5px] w-[75%] bg-[var(--rule-strong)] rounded-[2px]" />
          <div className="h-[5px] w-[60%] bg-[var(--rule-strong)] rounded-[2px]" />
          <div className="h-[5px] w-[90%] bg-[var(--rule-strong)] rounded-[2px] mt-2.5" />
        </div>
      </div>
    );
  }

  if (variant === 'timeline') {
    return (
      <div className="border-l-2 border-[var(--rule-strong)] pl-2.5 h-full flex flex-col justify-center gap-2">
        <div className="h-[5px] w-[90%] bg-[var(--rule-strong)] rounded-[2px]" />
        <div className="h-[5px] w-[60%] bg-[var(--rule-strong)] rounded-[2px]" />
        <div className="h-[5px] w-[75%] bg-[var(--rule-strong)] rounded-[2px]" />
        <div className="h-[5px] w-[40%] bg-[var(--rule-strong)] rounded-[2px]" />
      </div>
    );
  }

  // Single column (default)
  return (
    <>
      <div className="h-[11px] w-[55%] bg-[var(--ink)] opacity-75 rounded-[2px]" />
      <div className="h-[5px] w-[90%] bg-[var(--rule-strong)] rounded-[2px]" />
      <div className="h-[5px] w-[75%] bg-[var(--rule-strong)] rounded-[2px]" />
      <div className="h-[5px] w-[60%] bg-[var(--rule-strong)] rounded-[2px]" />
      <div className="h-[5px] w-[90%] bg-[var(--rule-strong)] rounded-[2px] mt-2.5" />
    </>
  );
};

const ResumeCard = React.forwardRef<HTMLDivElement, ResumeCardProps>(
  (
    {
      title,
      template,
      editedAgo,
      score,
      templateVariant,
      onEdit,
      onExport,
      onDuplicate,
      onDelete,
      className,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-[var(--card)] border border-[var(--rule)] rounded-[var(--radius-md)] p-[18px]',
          'transition-all duration-200',
          'hover:translate-y-[-4px]',
          'hover:shadow-[0_18px_30px_-20px_rgba(23,24,28,0.35)]',
          'hover:border-[var(--rule-strong)]',
          className
        )}
      >
        {/* Thumbnail */}
        <div className="bg-[var(--paper-alt)] border border-[var(--rule)] rounded-[3px] h-[168px] p-3.5 mb-3.5 relative overflow-hidden">
          <TemplateThumb variant={templateVariant} />
          <ScoreRing score={score} size="sm" className="absolute top-2.5 right-2.5" />
        </div>

        {/* Title */}
        <h3 className="font-['Fraunces'] font-semibold text-[1.02rem] mb-1">
          {title}
        </h3>

        {/* Meta */}
        <div className="flex justify-between items-center text-[0.76rem] text-[var(--ink-faint)] mb-3.5">
          <span>Edited {editedAgo}</span>
          <span className="font-['JetBrains_Mono'] text-[0.64rem] bg-[var(--paper-alt)] border border-[var(--rule)] px-2 py-[2px] rounded-[20px] text-[var(--ink-soft)]">
            {template}
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-2 flex-wrap">
          <Button variant="primary" size="xs" onClick={onEdit}>
            Edit
          </Button>
          <Button variant="ghost" size="xs" onClick={onExport}>
            Export
          </Button>
          <Button variant="ghost" size="xs" onClick={onDuplicate}>
            Duplicate
          </Button>
          <Button variant="ghost" size="xs" onClick={onDelete}>
            Delete
          </Button>
        </div>
      </div>
    );
  }
);
ResumeCard.displayName = 'ResumeCard';

export { ResumeCard };
