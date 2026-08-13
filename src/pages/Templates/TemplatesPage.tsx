/**
 * Templates Page
 * Functional template selection with navigation to editor
 */

import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardNavbar, SimpleFooter } from '@/layouts/RootLayout/components';
import { Container } from '@/components/ui/container';
import { Heading, Eyebrow } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/cn';
import { resumeStore } from '@/stores';
import type { TemplateId } from '@/stores';

// Template thumbnail variants
const ThumbnailVariant = ({
  variant,
}: {
  variant: 'single' | 'sidebar' | 'timeline' | 'compact' | 'right-rail' | 'header' | 'dense';
}) => {
  if (variant === 'sidebar') {
    return (
      <div className="grid grid-cols-[28%_1fr] gap-2 h-full">
        <div className="bg-[var(--ink)] opacity-[0.12] rounded-[2px]" />
        <div>
          <div className="h-[5px] w-[90%] bg-[var(--rule-strong)] rounded-[2px]" />
          <div className="h-[5px] w-[75%] bg-[var(--rule-strong)] rounded-[2px] mt-1.5" />
          <div className="h-[5px] w-[60%] bg-[var(--rule-strong)] rounded-[2px] mt-1.5" />
          <div className="h-[5px] w-[90%] bg-[var(--rule-strong)] rounded-[2px] mt-2.5" />
        </div>
      </div>
    );
  }

  if (variant === 'timeline') {
    return (
      <div className="border-l-2 border-[var(--rule-strong)] pl-2.5 h-full flex flex-col justify-center gap-2">
        <div className="h-[5px] w-[90%] bg-[var(--rule-strong)] rounded-[2px]" />
        <div className="h-[5px] w-[60%] bg-[var(--rule-strong)] rounded-[2px]" />
        <div className="h-[5px] w-[75%] bg-[var(--rule-strong)] rounded-[2px]" />
        <div className="h-[5px] w-[40%] bg-[var(--rule-strong)] rounded-[2px]" />
      </div>
    );
  }

  if (variant === 'right-rail') {
    return (
      <div className="grid grid-cols-[1fr_32%] gap-2 h-full">
        <div>
          <div className="h-[5px] w-[90%] bg-[var(--rule-strong)] rounded-[2px]" />
          <div className="h-[5px] w-[75%] bg-[var(--rule-strong)] rounded-[2px] mt-1.5" />
          <div className="h-[5px] w-[60%] bg-[var(--rule-strong)] rounded-[2px] mt-1.5" />
        </div>
        <div className="bg-[var(--ink)] opacity-[0.12] rounded-[2px]" />
      </div>
    );
  }

  if (variant === 'header') {
    return (
      <>
        <div className="h-[16px] w-[70%] bg-[var(--ink)] opacity-75 rounded-[2px]" />
        <div className="h-[5px] w-[90%] bg-[var(--rule-strong)] rounded-[2px] mt-3.5" />
        <div className="h-[5px] w-[75%] bg-[var(--rule-strong)] rounded-[2px] mt-1.5" />
        <div className="h-[5px] w-[90%] bg-[var(--rule-strong)] rounded-[2px] mt-1.5" />
        <div className="h-[5px] w-[40%] bg-[var(--rule-strong)] rounded-[2px] mt-1.5" />
      </>
    );
  }

  if (variant === 'dense') {
    return (
      <>
        <div className="h-[12px] w-[55%] bg-[var(--ink)] opacity-75 rounded-[2px]" />
        <div className="h-[5px] w-[75%] bg-[var(--rule-strong)] rounded-[2px] mt-4" />
        <div className="h-[5px] w-[60%] bg-[var(--rule-strong)] rounded-[2px] mt-1.5" />
        <div className="h-[5px] w-[40%] bg-[var(--rule-strong)] rounded-[2px] mt-1.5" />
        <div className="h-[5px] w-[75%] bg-[var(--rule-strong)] rounded-[2px] mt-2.5" />
        <div className="h-[5px] w-[90%] bg-[var(--rule-strong)] rounded-[2px] mt-1.5" />
      </>
    );
  }

  if (variant === 'compact') {
    return (
      <>
        <div className="h-[12px] w-[40%] bg-[var(--ink)] opacity-75 rounded-[2px]" />
        <div className="h-[5px] w-[90%] bg-[var(--rule-strong)] rounded-[2px] mt-3" />
        <div className="h-[5px] w-[75%] bg-[var(--rule-strong)] rounded-[2px] mt-1.5" />
        <div className="h-[5px] w-[60%] bg-[var(--rule-strong)] rounded-[2px] mt-1.5" />
        <div className="h-[5px] w-[90%] bg-[var(--rule-strong)] rounded-[2px] mt-2.5" />
      </>
    );
  }

  // Single column (default)
  return (
    <>
      <div className="h-[12px] w-[55%] bg-[var(--ink)] opacity-75 rounded-[2px]" />
      <div className="h-[5px] w-[75%] bg-[var(--rule-strong)] rounded-[2px] mt-3" />
      <div className="h-[5px] w-[90%] bg-[var(--rule-strong)] rounded-[2px] mt-1.5" />
      <div className="h-[5px] w-[60%] bg-[var(--rule-strong)] rounded-[2px] mt-1.5" />
      <div className="h-[5px] w-[75%] bg-[var(--rule-strong)] rounded-[2px] mt-2.5" />
      <div className="h-[5px] w-[90%] bg-[var(--rule-strong)] rounded-[2px] mt-1.5" />
    </>
  );
};

// Filter chip component
const FilterChip = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className={cn(
      "font-['JetBrains_Mono'] text-[0.76rem] tracking-[0.02em]",
      'py-2 px-4 rounded-[20px] border',
      'cursor-pointer transition-all duration-200',
      active
        ? 'bg-[var(--ink)] text-[var(--paper)] border-[var(--ink)]'
        : 'bg-[var(--card)] text-[var(--ink-soft)] border-[var(--rule-strong)] hover:border-[var(--ink)]'
    )}
  >
    {label}
  </button>
);

// Template card component
const TemplateCard = ({
  name,
  description,
  variant,
  onSelect,
  isSelected,
}: {
  name: string;
  description: string;
  variant: 'single' | 'sidebar' | 'timeline' | 'compact' | 'right-rail' | 'header' | 'dense';
  onSelect: () => void;
  isSelected?: boolean;
}) => (
  <div
    onClick={onSelect}
    className={cn(
      'bg-[var(--card)] border rounded-[var(--radius-md)] p-[18px]',
      'transition-all duration-200',
      'hover:translate-y-[-4px]',
      'hover:shadow-[0_18px_30px_-20px_rgba(23,24,28,0.35)]',
      'cursor-pointer',
      isSelected
        ? 'border-[var(--red)] shadow-[0_0_0_2px_rgba(185,62,40,0.15)]'
        : 'border-[var(--rule)] hover:border-[var(--rule-strong)]'
    )}
  >
    <div className="bg-[var(--paper-alt)] border border-[var(--rule)] rounded-[3px] h-[170px] p-3.5 mb-4 overflow-hidden">
      <ThumbnailVariant variant={variant} />
    </div>
    <div className="font-['Fraunces'] font-semibold text-[1.05rem] mb-1">
      {name}
      {isSelected && (
        <span className="ml-2 font-['JetBrains_Mono'] text-[0.6rem] bg-[var(--red-soft)] text-[var(--red)] px-2 py-0.5 rounded-[20px]">
          SELECTED
        </span>
      )}
    </div>
    <div className="text-[0.82rem] text-[var(--ink-soft)] mb-3.5">
      {description}
    </div>
    <div className="flex items-center justify-between">
      <Badge variant="green" size="default">
        ATS-safe
      </Badge>
      <Button
        variant={isSelected ? 'primary' : 'outline'}
        size="xs"
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
        }}
      >
        {isSelected ? 'Selected' : 'Use template'}
      </Button>
    </div>
  </div>
);

const TemplatesPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = React.useState('All');
  const [selectedTemplate, setSelectedTemplate] = React.useState<TemplateId>('ledger');

  const filters = ['All', 'Minimal', 'Executive', 'Creative', 'Technical', 'ATS-safe'];

  // Map template IDs to display variants
  const templates = [
    { id: 'ledger' as const, name: 'Ledger', description: 'Clean single-column layout with generous spacing. Perfect for any industry.', variant: 'single' as const },
    { id: 'northline' as const, name: 'Northline', description: 'Left sidebar for contact and skills, main column for experience.', variant: 'sidebar' as const },
    { id: 'compass' as const, name: 'Compass', description: 'Skills and education sit in a right rail, out of the reading path.', variant: 'right-rail' as const },
  ];

  const handleSelectTemplate = (templateId: TemplateId) => {
    setSelectedTemplate(templateId);
    resumeStore.setTemplate(templateId);
  };

  const handleUseTemplate = () => {
    resumeStore.setTemplate(selectedTemplate);
    navigate('/editor');
  };

  return (
    <div className="min-h-screen bg-[var(--paper)] flex flex-col">
      <DashboardNavbar />

      <main className="flex-1">
        <Container>
          {/* Page Header */}
          <div className="pt-13 pb-2">
            <Eyebrow className="!text-[0.72rem] !tracking-[0.1em]">Templates</Eyebrow>
            <Heading level="h1" className="text-[clamp(1.9rem,3vw,2.5rem)] mt-2">
              Choose a template.
            </Heading>
            <p className="text-[var(--ink-soft)] mt-3 max-w-[34rem] text-[1rem]">
              Every layout here is tested against common parsers before it ships.
              Switch anytime without losing your content or your score.
            </p>
          </div>

          {/* Filters */}
          <div className="flex gap-2.5 flex-wrap py-7 border-b border-[var(--rule)] mb-10">
            {filters.map((filter) => (
              <FilterChip
                key={filter}
                label={filter}
                active={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              />
            ))}
          </div>

          {/* Spotlight Card - Featured Template */}
          <div className="grid grid-cols-[1fr_1.3fr] gap-10 items-center bg-[var(--card)] border border-[var(--rule-strong)] rounded-[var(--radius-md)] p-8.5 mb-13 max-lg:grid-cols-1">
            <div className={cn(
              "bg-[var(--paper-alt)] border rounded-[4px] h-[220px] p-5",
              selectedTemplate === 'ledger' && "border-[var(--red)]"
            )}>
              <div className="h-[14px] w-[45%] bg-[var(--ink)] opacity-75 rounded-[2px] mb-4" />
              <div className="h-[6px] w-[90%] bg-[var(--rule-strong)] rounded-[2px]" />
              <div className="h-[6px] w-[70%] bg-[var(--rule-strong)] rounded-[2px] mt-2" />
              <div className="h-[6px] w-[50%] bg-[var(--rule-strong)] rounded-[2px] mt-2" />
              <div className="h-[6px] w-[90%] bg-[var(--rule-strong)] rounded-[2px] mt-3.5" />
              <div className="h-[6px] w-[70%] bg-[var(--rule-strong)] rounded-[2px] mt-2" />
            </div>
            <div>
              <span className="inline-block font-['JetBrains_Mono'] text-[0.66rem] bg-[var(--red-soft)] text-[var(--red)] px-2.5 py-[3px] rounded-[20px] mb-3.5">
                MOST USED
              </span>
              <h2 className="font-['Fraunces'] font-semibold text-[1.7rem] mb-2.5">
                Ledger
              </h2>
              <p className="text-[var(--ink-soft)] text-[0.95rem] mb-5 max-w-[28rem]">
                A single-column layout with generous line height and clear section
                breaks. Built for parsers that read top to bottom — nothing to trip
                over.
              </p>
              <div className="flex gap-3">
                <Button
                  variant="primary"
                  onClick={() => {
                    handleSelectTemplate('ledger');
                    navigate('/editor');
                  }}
                >
                  Use this template
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleSelectTemplate('ledger')}
                >
                  Preview
                </Button>
              </div>
            </div>
          </div>

          {/* Template Grid */}
          <div className="pb-20">
            <h2 className="font-['Fraunces'] font-semibold text-[1.4rem] mb-6">
              All templates
            </h2>
            <div className="grid grid-cols-3 gap-5.5 max-lg:grid-cols-2 max-xs:grid-cols-1">
              {templates.map((template) => (
                <TemplateCard
                  key={template.id}
                  name={template.name}
                  description={template.description}
                  variant={template.variant}
                  isSelected={selectedTemplate === template.id}
                  onSelect={() => handleSelectTemplate(template.id)}
                />
              ))}
            </div>
          </div>

          {/* Fixed bottom bar when template selected */}
          {selectedTemplate && (
            <div className="fixed bottom-0 left-0 right-0 bg-[var(--card)] border-t border-[var(--rule)] py-4 px-6 shadow-lg z-10">
              <Container>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[var(--ink-soft)] text-[0.85rem]">Selected template:</span>
                    <span className="font-['Fraunces'] font-semibold text-[1.1rem] ml-2 capitalize">
                      {selectedTemplate}
                    </span>
                  </div>
                  <Button variant="primary" onClick={handleUseTemplate}>
                    Continue with this template
                  </Button>
                </div>
              </Container>
            </div>
          )}
        </Container>
      </main>

      <SimpleFooter />
    </div>
  );
};

export default TemplatesPage;
