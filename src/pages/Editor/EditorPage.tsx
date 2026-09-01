/**
 * Editor Page - orchestration shell
 * Wires the top bar, three-panel layout, and save/export flow together.
 * The middle panel is section-scoped: SectionEditor renders only the
 * fields for whichever section is active in SectionNav. Insights stay
 * in InsightsPanel.
 */

import * as React from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Logo } from '@/components/common/Logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { SaveSuccessDialog } from '@/components/dialogs';
import { usePDFExport } from '@/hooks';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { SectionNav, type SectionInfo } from './components/SectionNav';
import { SectionEditor } from './components/SectionEditor';
import { InsightsPanel } from './components/InsightsPanel';
import { fetchResumeById, saveNewResume, updateResume } from '@/store/resumeSlice';

const EditorPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();


  const { data } = useAppSelector((state) => state.resume);
  const [activeSection, setActiveSection] = React.useState('Experience');
  const [saveStatus, setSaveStatus] = React.useState<'saved' | 'saving'>('saved');
  const resumeId = searchParams.get('resumeId')
  const { isGenerating, downloadPDF } = usePDFExport();

  const sections: SectionInfo[] = [
    // { label: 'Contact', count: Object.values(data?.contact).filter(Boolean).length },
    { label: 'Summary', count: data.objective ? 1 : 0 },
    { label: 'Experience', count: data.experience.length },
    { label: 'Education', count: data.education.length },
    { label: 'Skills', count: Object.keys(data.skills).length },
  ];

  React.useEffect(() => {
    if (resumeId) {
      dispatch(fetchResumeById(resumeId));
    }
  }, []);

  // Auto-save simulation
  React.useEffect(() => {
    setSaveStatus('saving');
    const timer = setTimeout(() => setSaveStatus('saved'), 800);
    return () => clearTimeout(timer);
  }, [data]);

  const [isSaving, setIsSaving] = React.useState(false);
  const [showSaveSuccess, setShowSaveSuccess] = React.useState(false);

  const handleSave = async () => {
    const resumeId = searchParams.get('resumeId');
    setIsSaving(true);
    setSaveStatus('saving');

    // Simulate API call
    // await new Promise((resolve) => setTimeout(resolve, 1200));
    if (resumeId) {
      await dispatch(updateResume(resumeId));
    } else {
      await dispatch(saveNewResume());
    }

    setIsSaving(false);
    setSaveStatus('saved');
    setShowSaveSuccess(true);

    // In real app, would call:
    // const response = await fetch('/api/resumes/save', {
    //   method: 'POST',
    //   body: JSON.stringify(data)
    // });
  };

  const handleExport = async () => {
    setShowSaveSuccess(false);
    await downloadPDF(data);
  };

  const handleContinueEditing = () => {
    const resumeId = data.id;
    navigate(`/editor?resumeId=${resumeId}`, { replace: true });
    setShowSaveSuccess(false);
  }

  return (
    <div className="h-screen bg-[var(--paper)] flex flex-col">
      {/* Top Bar */}
      <header className="h-[60px] flex-none border-b border-[var(--rule)] flex items-center justify-between px-[22px] bg-[rgba(246,244,238,0.94)] backdrop-blur-sm relative z-20">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="text-[var(--ink-faint)] text-[1.1rem] hover:text-[var(--ink)]">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <Logo href="/" className="!text-[1.25rem]" />
          <div className="w-px h-[22px] bg-[var(--rule)]" />
          <div className="font-semibold text-[0.95rem]">
            {data.candidateName || 'Untitled Resume'}{' '}
            <span className="font-['JetBrains_Mono'] text-[0.62rem] bg-[var(--paper-alt)] border border-[var(--rule)] px-2 py-[2px] rounded-[20px] text-[var(--ink-soft)] ml-2.5 capitalize">
              {data.templateName}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3.5">
          <span className="font-['JetBrains_Mono'] text-[0.72rem] text-[var(--ink-faint)] flex items-center gap-1.5">
            <span
              className={cn(
                'w-[6px] h-[6px] rounded-full',
                saveStatus === 'saved' ? 'bg-[var(--green)]' : 'bg-[var(--amber)]'
              )}
            />
            {saveStatus === 'saved' ? 'Saved just now' : 'Saving...'}
          </span>
          <Link to="/templates">
            <Button variant="outline" size="xs">
              Switch template
            </Button>
          </Link>
          <Button variant="outline" size="xs" disabled={isGenerating} onClick={handleExport}>
            {isGenerating ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin mr-1.5" />
                Exporting...
              </>
            ) : (
              'Export'
            )}
          </Button>
          <Button variant="primary" size="xs" disabled={isSaving} onClick={handleSave}>
            {isSaving ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin mr-1.5" />
                Saving...
              </>
            ) : (
              'Save'
            )}
          </Button>
        </div>
      </header>

      {/* Body Grid */}
      <div className="flex-1 grid grid-cols-[220px_1fr_340px] min-h-0 max-[1100px]:grid-cols-[190px_1fr_300px] max-[880px]:grid-cols-1 max-[880px]:grid-auto-rows-min">
        <SectionNav sections={sections} activeSection={activeSection} onSelect={setActiveSection} />
        <SectionEditor data={data} activeSection={activeSection} />
        <InsightsPanel activeSection={activeSection} resumeId={resumeId} />
      </div>

      {/* Save Success Dialog */}
      <SaveSuccessDialog
        isOpen={showSaveSuccess}
        onClose={() => setShowSaveSuccess(false)}
        onContinueEdit={handleContinueEditing}
        resumeName={data.candidateName || 'Untitled Resume'}
        onExport={handleExport}
      />
    </div>
  );
};

export default EditorPage;
