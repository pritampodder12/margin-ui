import * as React from 'react';
import { Plus } from 'lucide-react';
import type { ResumeData } from '@/store/resumeTypes';
import { useResumeActions } from '@/hooks/useResumeActions';
import { EducationCard } from './EducationCard';

export const EducationSection = ({ data }: { data: ResumeData }) => {
  const { addEducation, updateEducation, deleteEducation } = useResumeActions();
  const [expandedId, setExpandedId] = React.useState<string | undefined>(data.education[0]?.id);
  const prevLength = React.useRef(data.education.length);

  React.useEffect(() => {
    if (data.education.length > prevLength.current) {
      setExpandedId(data.education[data.education.length - 1]?.id);
    } else if (!expandedId && data.education.length > 0) {
      setExpandedId(data.education[0].id);
    }
    prevLength.current = data.education.length;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.education]);

  if (data.education.length === 0) {
    return (
      <button
        onClick={addEducation}
        className="w-full py-4 border border-dashed border-[var(--rule-strong)] rounded-[4px] text-[0.85rem] text-[var(--ink-faint)] hover:border-[var(--red)] hover:text-[var(--red)] transition-colors"
      >
        + Add education
      </button>
    );
  }

  return (
    <div>
      {data.education.map((edu) => (
        <EducationCard
          key={edu.id}
          education={edu}
          expanded={true}
          onToggle={() => setExpandedId(expandedId === edu.id ? undefined : edu.id)}
          onUpdate={(updates) => updateEducation(edu.id, updates)}
          onDelete={() => {
            deleteEducation(edu.id);
            if (expandedId === edu.id) setExpandedId(undefined);
          }}
        />
      ))}

      <button
        onClick={addEducation}
        className="mt-1 text-[0.75rem] text-[var(--ink-faint)] hover:text-[var(--red)] flex items-center gap-1"
      >
        <Plus className="w-3 h-3" />
        Add another education
      </button>
    </div>
  );
};
