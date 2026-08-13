/**
 * Dashboard Page
 * Matches original design with functional buttons
 */

import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardNavbar, SimpleFooter } from '@/layouts/RootLayout/components';
import { Container } from '@/components/ui/container';
import { Eyebrow, Heading } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { ResumeCard, NewResumeCard } from '@/components/cards';
import { ImportDialog } from '@/components/dialogs';
import { resumeStore } from '@/stores';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [isImportOpen, setIsImportOpen] = React.useState(false);

  // Dummy resume data for display
  const resumes = [
    {
      title: 'Product Design — Northwind',
      template: 'Northline',
      editedAgo: '2 days ago',
      score: 94,
      variant: 'single' as const,
    },
    {
      title: 'Marketing Lead — General',
      template: 'Compass',
      editedAgo: '5 days ago',
      score: 76,
      variant: 'sidebar' as const,
    },
    {
      title: 'UX Researcher — Contract',
      template: 'Fieldnote',
      editedAgo: '1 week ago',
      score: 91,
      variant: 'timeline' as const,
    },
  ];

  const stats = [
    { num: '3', label: 'Total resumes' },
    { num: '87', label: 'Average ATS score' },
    { num: '94', label: 'Best score — Product Design' },
  ];

  // Handle file import
  const handleImport = async (file: File) => {
    const data = await resumeStore.parseFromFile(file);
    resumeStore.setData(data);
    navigate('/editor');
  };

  // Handle start blank
  const handleStartBlank = () => {
    resumeStore.reset();
    navigate('/editor');
  };

  // Handle edit existing resume
  const handleEdit = (_title: string) => {
    // In real app, would load specific resume data
    navigate('/editor');
  };

  return (
    <div className="min-h-screen bg-[var(--paper)] flex flex-col">
      <DashboardNavbar />

      <main className="flex-1">
        <Container>
          {/* Page Header */}
          <div className="py-13 pb-9 flex items-end justify-between gap-6 flex-wrap max-xs:flex-col max-xs:items-start">
            <div>
              <Eyebrow className="!text-[0.72rem] !tracking-[0.1em]">
                My resumes
              </Eyebrow>
              <Heading level="h1" className="!text-[clamp(1.9rem,3vw,2.5rem)] mt-2">
                Your resumes
              </Heading>
              <div className="font-['JetBrains_Mono'] text-[0.78rem] text-[var(--ink-faint)] mt-2">
                3 RESUMES · LAST EDITED 2 DAYS AGO
              </div>
            </div>
            <div className="flex gap-3 max-xs:w-full max-xs:flex-col">
              <Button variant="outline" onClick={() => setIsImportOpen(true)}>
                Upload resume
              </Button>
              <Button variant="primary" onClick={handleStartBlank}>
                Create new resume
              </Button>
            </div>
          </div>

          {/* Stats Strip */}
          <div className="grid grid-cols-3 gap-px bg-[var(--rule)] border border-[var(--rule)] rounded-[var(--radius-md)] overflow-hidden mb-11 max-lg:grid-cols-1">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-[var(--card)] py-[22px] px-[26px]">
                <div className="font-['JetBrains_Mono'] font-semibold text-[1.8rem]">
                  {stat.num}
                </div>
                <div className="text-[0.8rem] text-[var(--ink-soft)] mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Resume Grid */}
          <div className="grid grid-cols-3 gap-5.5 pb-20 max-lg:grid-cols-2 max-xs:grid-cols-1">
            {resumes.map((resume) => (
              <ResumeCard
                key={resume.title}
                title={resume.title}
                template={resume.template}
                editedAgo={resume.editedAgo}
                score={resume.score}
                templateVariant={resume.variant}
                onEdit={() => handleEdit(resume.title)}
                onExport={() => {}}
                onDuplicate={() => {}}
                onDelete={() => {}}
              />
            ))}

            {/* New Resume Card */}
            <NewResumeCard
              onUpload={() => setIsImportOpen(true)}
              onStartBlank={handleStartBlank}
            />
          </div>
        </Container>
      </main>

      <SimpleFooter />

      {/* Import Dialog */}
      <ImportDialog
        isOpen={isImportOpen}
        onClose={() => setIsImportOpen(false)}
        onImport={handleImport}
      />
    </div>
  );
};

export default DashboardPage;
