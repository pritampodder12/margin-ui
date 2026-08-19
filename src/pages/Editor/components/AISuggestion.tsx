import * as React from 'react';
import { Button } from '@/components/ui/button';

export const AISuggestion = ({
  tag,
  text,
  onApply,
}: {
  tag: string;
  text: string;
  onApply?: () => void;
}) => (
  <div className="bg-[var(--card)] border border-[var(--rule)] border-l-2 border-l-[var(--red)] rounded-[2px] py-3 px-3.5 mb-3 last:mb-0">
    <div className="font-['JetBrains_Mono'] text-[0.62rem] text-[var(--red)] tracking-[0.06em]">
      {tag}
    </div>
    <p className="text-[0.82rem] text-[var(--ink)] my-1.5 mb-2.5">{text}</p>
    <Button
      size="xs"
      className="!border-[var(--red)] !text-[var(--red)] hover:!bg-[var(--red)] hover:!text-[var(--paper)]"
      onClick={onApply}
    >
      Apply
    </Button>
  </div>
);
