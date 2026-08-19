import * as React from 'react';
import { cn } from '@/lib/cn';

export const KeywordChip = ({
  keyword,
  matched,
}: {
  keyword: string;
  matched: boolean;
}) => (
  <span
    className={cn(
      "font-['JetBrains_Mono'] text-[0.7rem] px-2 py-1 rounded-[20px]",
      matched
        ? 'bg-[var(--green-soft)] text-[var(--green)]'
        : 'bg-transparent text-[var(--red)] border border-dashed border-[var(--red)]'
    )}
  >
    {keyword}
    {matched && ' ✓'}
  </span>
);
