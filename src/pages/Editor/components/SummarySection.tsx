import * as React from 'react';
import type { ResumeData } from '@/store/resumeTypes';
import { useResumeActions } from '@/hooks/useResumeActions';
import { EditableTextarea } from './EditableTextarea';

export const SummarySection = ({ data }: { data: ResumeData }) => {
  const { updateObjective } = useResumeActions();

  return (
    <div className="bg-[var(--card)] border border-[var(--rule)] rounded-[var(--radius-md)] p-4">
      <EditableTextarea
        value={data.objective}
        onChange={updateObjective}
        placeholder="Write a brief professional summary..."
        className="text-[0.9rem] leading-[1.65] min-h-[140px]"
      />
    </div>
  );
};
