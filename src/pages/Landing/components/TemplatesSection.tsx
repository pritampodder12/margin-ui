/**
 * Templates Section Component
 * Matches original design exactly
 */

import * as React from 'react';
import { Heading, Eyebrow } from '@/components/ui/typography';
import { Badge } from '@/components/ui/badge';
import { RevealOnScroll } from '@/components/common/RevealOnScroll';
import { cn } from '@/lib/cn';

interface Template {
  name: string;
  variant: 'single' | 'sidebar' | 'timeline' | 'compact' | 'right-rail' | 'header';
  layout: string;
}

const templates: Template[] = [
  { name: 'Ledger', variant: 'single', layout: 'Single column' },
  { name: 'Northline', variant: 'sidebar', layout: 'Sidebar' },
  { name: 'Fieldnote', variant: 'timeline', layout: 'Timeline' },
  { name: 'Bracket', variant: 'compact', layout: 'Compact' },
  { name: 'Compass', variant: 'right-rail', layout: 'Right rail' },
  { name: 'Studio', variant: 'header', layout: 'Header-led' },
];

const TemplateThumbnail = ({ variant }: { variant: Template['variant'] }) => {
  // Single column
  if (variant === 'single') {
    return (
      <>
        <div className="h-[12px] w-[60%] bg-[var(--ink)] opacity-75 rounded-[2px] mb-3" />
        <div className="h-[5px] w-[75%] bg-[var(--rule-strong)] rounded-[2px]" />
        <div className="h-[5px] w-[90%] bg-[var(--rule-strong)] rounded-[2px]" />
        <div className="h-[5px] w-[60%] bg-[var(--rule-strong)] rounded-[2px]" />
        <div className="h-[5px] w-[75%] bg-[var(--rule-strong)] rounded-[2px] mt-2.5" />
        <div className="h-[5px] w-[90%] bg-[var(--rule-strong)] rounded-[2px]" />
      </>
    );
  }

  // Sidebar
  if (variant === 'sidebar') {
    return (
      <div className="grid grid-cols-[28%_1fr] gap-2 h-full">
        <div className="bg-[var(--ink)] opacity-[0.12] rounded-[2px]" />
        <div className="flex flex-col gap-1.5">
          <div className="h-[5px] w-[75%] bg-[var(--rule-strong)] rounded-[2px]" />
          <div className="h-[5px] w-[90%] bg-[var(--rule-strong)] rounded-[2px]" />
          <div className="h-[5px] w-[60%] bg-[var(--rule-strong)] rounded-[2px]" />
          <div className="h-[5px] w-[75%] bg-[var(--rule-strong)] rounded-[2px] mt-2.5" />
        </div>
      </div>
    );
  }

  // Timeline
  if (variant === 'timeline') {
    return (
      <div className="border-l-2 border-[var(--rule-strong)] pl-2.5 h-full flex flex-col justify-center gap-2">
        <div className="h-[5px] w-[75%] bg-[var(--rule-strong)] rounded-[2px]" />
        <div className="h-[5px] w-[60%] bg-[var(--rule-strong)] rounded-[2px]" />
        <div className="h-[5px] w-[75%] bg-[var(--rule-strong)] rounded-[2px]" />
        <div className="h-[5px] w-[40%] bg-[var(--rule-strong)] rounded-[2px]" />
      </div>
    );
  }

  // Compact
  if (variant === 'compact') {
    return (
      <>
        <div className="h-[12px] w-[40%] bg-[var(--ink)] opacity-75 rounded-[2px] mb-3" />
        <div className="h-[5px] w-[90%] bg-[var(--rule-strong)] rounded-[2px]" />
        <div className="h-[5px] w-[75%] bg-[var(--rule-strong)] rounded-[2px]" />
        <div className="h-[5px] w-[60%] bg-[var(--rule-strong)] rounded-[2px]" />
        <div className="h-[5px] w-[90%] bg-[var(--rule-strong)] rounded-[2px] mt-2.5" />
      </>
    );
  }

  // Right rail
  if (variant === 'right-rail') {
    return (
      <div className="grid grid-cols-[1fr_32%] gap-2 h-full">
        <div className="flex flex-col gap-1.5">
          <div className="h-[5px] w-[75%] bg-[var(--rule-strong)] rounded-[2px]" />
          <div className="h-[5px] w-[90%] bg-[var(--rule-strong)] rounded-[2px]" />
          <div className="h-[5px] w-[60%] bg-[var(--rule-strong)] rounded-[2px]" />
        </div>
        <div className="bg-[var(--ink)] opacity-[0.12] rounded-[2px]" />
      </div>
    );
  }

  // Header-led
  return (
    <>
      <div className="h-[16px] w-[70%] bg-[var(--ink)] opacity-75 rounded-[2px] mb-3.5" />
      <div className="h-[5px] w-[90%] bg-[var(--rule-strong)] rounded-[2px] mt-3.5" />
      <div className="h-[5px] w-[75%] bg-[var(--rule-strong)] rounded-[2px]" />
      <div className="h-[5px] w-[90%] bg-[var(--rule-strong)] rounded-[2px]" />
      <div className="h-[5px] w-[60%] bg-[var(--rule-strong)] rounded-[2px]" />
    </>
  );
};

const TemplatesSection = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => {
  return (
    <section
      ref={ref}
      id="templates"
      className={cn('py-[88px]', className)}
      {...props}
    >
      <div className="max-w-[1180px] mx-auto px-8 max-xs:px-5">
        <RevealOnScroll className="max-w-[38rem] mb-13">
          <Eyebrow variant="alt">Templates</Eyebrow>
          <Heading level="h2" className="text-[clamp(1.9rem,3vw,2.6rem)] mt-2.5">
            Built to pass, not just look good.
          </Heading>
          <p className="text-[var(--ink-soft)] text-[1.02rem] mt-3.5">
            Every layout is tested against common parsers before it ships. Pick a
            look, keep your score.
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="grid grid-cols-3 gap-5.5 max-lg:grid-cols-2 max-xs:grid-cols-1">
            {templates.map((template) => (
              <div
                key={template.name}
                className={cn(
                  'bg-[var(--card)] border border-[var(--rule)]',
                  'rounded-[var(--radius-md)] p-[18px]',
                  'transition-all duration-250',
                  'hover:translate-y-[-4px]',
                  'hover:shadow-[0_18px_30px_-20px_rgba(23,24,28,0.35)]',
                  'hover:border-[var(--rule-strong)]',
                  'cursor-pointer'
                )}
              >
                {/* Thumbnail */}
                <div className="bg-[var(--paper-alt)] border border-[var(--rule)] rounded-[3px] h-[150px] p-3 mb-3.5 overflow-hidden">
                  <TemplateThumbnail variant={template.variant} />
                </div>

                {/* Name */}
                <div className="font-['Fraunces'] font-semibold text-[1.02rem]">
                  {template.name}
                </div>

                {/* Meta */}
                <div className="flex justify-between items-center mt-1">
                  <span className="text-[0.8rem] text-[var(--ink-faint)]">
                    {template.layout}
                  </span>
                  <Badge variant="green" size="default">
                    ATS-safe
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
});
TemplatesSection.displayName = 'TemplatesSection';

export { TemplatesSection };
