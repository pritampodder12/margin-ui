/**
 * Templates Page
 * Matches original design exactly
 */

import * as React from 'react';
import { Link } from 'react-router-dom';
import { DashboardNavbar, SimpleFooter } from '@/layouts/RootLayout/components';
import { Container } from '@/components/ui/container';
import { Heading, Eyebrow } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/cn';

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
}: {
  name: string;
  description: string;
  variant: 'single' | 'sidebar' | 'timeline' | 'compact' | 'right-rail' | 'header' | 'dense';
}) => (
  <div
    className={cn(
      'bg-[var(--card)] border border-[var(--rule)] rounded-[var(--radius-md)] p-[18px]',
      'transition-all duration-200',
      'hover:translate-y-[-4px]',
      'hover:shadow-[0_18px_30px_-20px_rgba(23,24,28,0.35)]',
      'hover:border-[var(--rule-strong)]',
      'cursor-pointer'
    )}
  >
    <div className="bg-[var(--paper-alt)] border border-[var(--rule)] rounded-[3px] h-[170px] p-3.5 mb-4 overflow-hidden">
      <ThumbnailVariant variant={variant} />
    </div>
    <div className="font-['Fraunces'] font-semibold text-[1.05rem] mb-1">
      {name}
    </div>
    <div className="text-[0.82rem] text-[var(--ink-soft)] mb-3.5">
      {description}
    </div>
    <div className="flex items-center justify-between">
      <Badge variant="green" size="default">
        ATS-safe
      </Badge>
      <Link to="/editor">
        <Button variant="outline" size="xs">
          Use template
        </Button>
      </Link>
    </div>
  </div>
);

const TemplatesPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState('All');

  const filters = ['All', 'Minimal', 'Executive', 'Creative', 'Technical', 'ATS-safe'];

  const templates = [
    { name: 'Northline', description: 'Left sidebar for contact and skills, main column for experience.', variant: 'sidebar' as const },
    { name: 'Fieldnote', description: "A left rule marks the timeline — good for long, varied career histories.", variant: 'timeline' as const },
    { name: 'Bracket', description: 'Compact spacing fits more on one page without feeling crowded.', variant: 'compact' as const },
    { name: 'Compass', description: 'Skills and education sit in a right rail, out of the reading path.', variant: 'right-rail' as const },
    { name: 'Studio', description: 'A bolder header for portfolio-driven roles — design, writing, media.', variant: 'header' as const },
    { name: 'Fieldbook', description: 'Dense and text-forward, built for technical and research roles.', variant: 'dense' as const },
    { name: 'Almanac', description: 'Sidebar photo block and a traditional layout for executive roles.', variant: 'sidebar' as const },
    { name: 'Foreword', description: 'Wide margins and a serif header for a quieter, editorial feel.', variant: 'header' as const },
    { name: 'Roster', description: 'Built for career changers — leads with skills before the timeline.', variant: 'timeline' as const },
  ];

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

          {/* Spotlight Card */}
          <div className="grid grid-cols-[1fr_1.3fr] gap-10 items-center bg-[var(--card)] border border-[var(--rule-strong)] rounded-[var(--radius-md)] p-8.5 mb-13 max-lg:grid-cols-1">
            <div className="bg-[var(--paper-alt)] border border-[var(--rule)] rounded-[4px] h-[220px] p-5">
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
              <Link to="/editor">
                <Button variant="primary">Use this template</Button>
              </Link>
            </div>
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-3 gap-6 pb-[90px] max-lg:grid-cols-2 max-xs:grid-cols-1">
            {templates.map((template) => (
              <TemplateCard
                key={template.name}
                name={template.name}
                description={template.description}
                variant={template.variant}
              />
            ))}
          </div>
        </Container>
      </main>

      <SimpleFooter />
    </div>
  );
};

export default TemplatesPage;
