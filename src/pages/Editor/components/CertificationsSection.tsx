import * as React from 'react';
import { Plus } from 'lucide-react';
import type { ResumeData } from '@/store/resumeTypes';
import { useResumeActions } from '@/hooks/useResumeActions';
import { CertificationCard } from './CertificationCard';

export const CertificationsSection = ({ data }: { data: ResumeData }) => {
  const { addCertification, updateCertification, deleteCertification } = useResumeActions();
  const [expandedId, setExpandedId] = React.useState<string | undefined>(data.certifications[0]?.id);
  const prevLength = React.useRef(data.certifications.length);

  // Auto-expand a newly added entry; auto-select first entry if nothing is expanded.
  React.useEffect(() => {
    if (data.certifications.length > prevLength.current) {
      setExpandedId(data.certifications[data.certifications.length - 1]?.id);
    } else if (!expandedId && data.certifications.length > 0) {
      setExpandedId(data.certifications[0].id);
    }
    prevLength.current = data.certifications.length;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.certifications]);

  if (data.certifications.length === 0) {
    return (
      <button
        onClick={addCertification}
        className="w-full py-4 border border-dashed border-[var(--rule-strong)] rounded-[4px] text-[0.85rem] text-[var(--ink-faint)] hover:border-[var(--red)] hover:text-[var(--red)] transition-colors"
      >
        + Add certification
      </button>
    );
  }

  return (
    <div>
      {data.certifications.map((cert) => (
        <CertificationCard
          key={cert.id}
          certification={cert}
          expanded={true}
          onToggle={() => setExpandedId(expandedId === cert.id ? undefined : cert.id)}
          onUpdate={(updates) => updateCertification(cert.id, updates)}
          onDelete={() => {
            deleteCertification(cert.id);
            if (expandedId === cert.id) setExpandedId(undefined);
          }}
        />
      ))}

      <button
        onClick={addCertification}
        className="mt-1 text-[0.75rem] text-[var(--ink-faint)] hover:text-[var(--red)] flex items-center gap-1"
      >
        <Plus className="w-3 h-3" />
        Add another certification
      </button>
    </div>
  );
};
