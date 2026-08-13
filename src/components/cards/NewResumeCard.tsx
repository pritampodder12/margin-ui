/**
 * New Resume Card Component
 * Ghost card for creating new resumes - matches original design
 */

import * as React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';

interface NewResumeCardProps {
  onUpload?: () => void;
  onStartBlank?: () => void;
  className?: string;
}

const NewResumeCard = React.forwardRef<HTMLDivElement, NewResumeCardProps>(
  ({ onUpload, onStartBlank, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-transparent',
          'border-[1.5px] border-dashed border-[var(--rule-strong)]',
          'rounded-[var(--radius-md)]',
          'flex flex-col items-center justify-center text-center',
          'py-10 px-5 min-h-[314px]',
          'transition-all duration-200 cursor-pointer',
          'hover:border-[var(--red)] hover:bg-[var(--red-soft)]',
          className
        )}
      >
        <Plus
          className="text-[var(--red)] w-8 h-8"
          strokeWidth={2.5}
        />
        <h3 className="font-['Fraunces'] font-semibold text-[1.02rem] mt-3">
          Start a new resume
        </h3>
        <p className="text-[0.82rem] text-[var(--ink-soft)] mt-1.5 max-w-[16rem]">
          Upload something you already have, or build one from a blank page.
        </p>
        <div className="flex gap-2.5 mt-4">
          <Button variant="outline" size="xs" onClick={onUpload}>
            Upload
          </Button>
          <Button variant="primary" size="xs" onClick={onStartBlank}>
            Start blank
          </Button>
        </div>
      </div>
    );
  }
);
NewResumeCard.displayName = 'NewResumeCard';

export { NewResumeCard };
