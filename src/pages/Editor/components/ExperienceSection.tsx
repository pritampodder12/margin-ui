import * as React from 'react';
import { Plus } from 'lucide-react';
import type { ResumeData } from '@/store/resumeTypes';
import { useResumeActions } from '@/hooks/useResumeActions';
import { ExperienceCard } from './ExperienceCard';

export const ExperienceSection = ({ data }: { data: ResumeData }) => {
  const { addExperience, updateExperience, deleteExperience } = useResumeActions();
  const [expandedId, setExpandedId] = React.useState<string | undefined>(data.experience[0]?.id);
  const prevLength = React.useRef(data.experience.length);

  // Auto-expand a newly added entry; auto-select first entry if nothing is expanded.
  React.useEffect(() => {
    if (data.experience.length > prevLength.current) {
      setExpandedId(data.experience[data.experience.length - 1]?.id);
    } else if (!expandedId && data.experience.length > 0) {
      setExpandedId(data.experience[0].id);
    }
    prevLength.current = data.experience.length;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.experience]);

  if (data.experience.length === 0) {
    return (
      <button
        onClick={addExperience}
        className="w-full py-4 border border-dashed border-[var(--rule-strong)] rounded-[4px] text-[0.85rem] text-[var(--ink-faint)] hover:border-[var(--red)] hover:text-[var(--red)] transition-colors"
      >
        + Add experience
      </button>
    );
  }

  return (
    <div>
      {data.experience.map((exp) => (
        <ExperienceCard
          key={exp.id}
          experience={exp}
          expanded={true}
          onToggle={() => setExpandedId(expandedId === exp.id ? undefined : exp.id)}
          onUpdate={(updates) => updateExperience(exp.id, updates)}
          onDelete={() => {
            deleteExperience(exp.id);
            if (expandedId === exp.id) setExpandedId(undefined);
          }}
        />
      ))}

      <button
        onClick={addExperience}
        className="mt-1 text-[0.75rem] text-[var(--ink-faint)] hover:text-[var(--red)] flex items-center gap-1"
      >
        <Plus className="w-3 h-3" />
        Add another experience
      </button>
    </div>
  );
};
