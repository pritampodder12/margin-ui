import * as React from 'react';
import { Plus } from 'lucide-react';
import type { ResumeData } from '@/store/resumeTypes';
import { useResumeActions } from '@/hooks/useResumeActions';
import { ProjectCard } from './ProjectCard';

export const ProjectsSection = ({ data }: { data: ResumeData }) => {
  const { addProject, updateProject, deleteProject } = useResumeActions();
  const [expandedId, setExpandedId] = React.useState<string | undefined>(data.projects[0]?.id);
  const prevLength = React.useRef(data.projects.length);

  // Auto-expand a newly added entry; auto-select first entry if nothing is expanded.
  React.useEffect(() => {
    if (data.projects.length > prevLength.current) {
      setExpandedId(data.projects[data.projects.length - 1]?.id);
    } else if (!expandedId && data.projects.length > 0) {
      setExpandedId(data.projects[0].id);
    }
    prevLength.current = data.projects.length;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.projects]);

  if (data.projects.length === 0) {
    return (
      <button
        onClick={addProject}
        className="w-full py-4 border border-dashed border-[var(--rule-strong)] rounded-[4px] text-[0.85rem] text-[var(--ink-faint)] hover:border-[var(--red)] hover:text-[var(--red)] transition-colors"
      >
        + Add project
      </button>
    );
  }

  return (
    <div>
      {data.projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          expanded={true}
          onToggle={() => setExpandedId(expandedId === project.id ? undefined : project.id)}
          onUpdate={(updates) => updateProject(project.id, updates)}
          onDelete={() => {
            deleteProject(project.id);
            if (expandedId === project.id) setExpandedId(undefined);
          }}
        />
      ))}

      <button
        onClick={addProject}
        className="mt-1 text-[0.75rem] text-[var(--ink-faint)] hover:text-[var(--red)] flex items-center gap-1"
      >
        <Plus className="w-3 h-3" />
        Add another project
      </button>
    </div>
  );
};
