import * as React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';
import { SuggestionType } from '@/store/resumeTypes';

export const AISuggestion = ({
  type,
  suggestedText,
  applied,
  onApply,
}: {
  type?: SuggestionType;
  suggestedText: string;
  applied?: boolean;
  onApply?: () => void;
}) => (
  <div
    className={cn(
      'bg-[var(--card)] border border-[var(--rule)] border-l-2 rounded-[2px] py-3 px-3.5 mb-3 last:mb-0 transition-colors',
      applied ? 'border-l-[var(--green)]' : 'border-l-[var(--red)]'
    )}
  >
    <div
      className={cn(
        "font-['JetBrains_Mono'] text-[0.62rem] tracking-[0.06em]",
        applied ? 'text-[var(--green)]' : 'text-[var(--red)]'
      )}
    >
      {type}
    </div>
    <p className={cn('text-[0.82rem] my-1.5 mb-2.5', applied ? 'text-[var(--ink-faint)]' : 'text-[var(--ink)]')}>
      {suggestedText}
    </p>
    {applied ? (
      <div className="flex items-center gap-1.5 text-[0.78rem] text-[var(--green)] font-medium">
        <Check className="w-3.5 h-3.5" />
        Applied
      </div>
    ) : (
      <Button
        size="xs"
        className="!border-[var(--red)] !text-[var(--red)] hover:!bg-[var(--red)] hover:!text-[var(--paper)]"
        onClick={onApply}
      >
        Apply
      </Button>
    )}
  </div>
);
