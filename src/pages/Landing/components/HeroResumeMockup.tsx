/**
 * Hero Resume Mockup Component
 * The animated resume preview in the hero section
 */

import * as React from 'react';
import { ScoreRing } from '@/components/common/ScoreRing';
import { cn } from '@/lib/cn';

interface HeroResumeMockupProps {
  className?: string;
}

const HeroResumeMockup = React.forwardRef<HTMLDivElement, HeroResumeMockupProps>(
  ({ className }, ref) => {
    return (
      <div ref={ref} className={cn('relative h-[520px]', className)}>
        {/* Stacked cards behind */}
        <div
          className={cn(
            'absolute w-[340px] h-[430px]',
            'bg-[var(--paper-alt)] border border-[var(--rule-strong)]',
            'rounded-[var(--radius-md)]',
            'top-[56px] left-1/2 -translate-x-1/2',
            '-rotate-[6deg]'
          )}
        />
        <div
          className={cn(
            'absolute w-[340px] h-[430px]',
            'bg-[var(--paper-alt)] border border-[var(--rule-strong)]',
            'rounded-[var(--radius-md)]',
            'top-[48px] left-1/2 -translate-x-1/2',
            'rotate-[4deg]'
          )}
        />

        {/* Main resume card */}
        <div
          className={cn(
            'relative w-[352px] mx-auto',
            'bg-[var(--card)] border border-[var(--rule-strong)]',
            'rounded-[var(--radius-md)]',
            'shadow-[0_22px_40px_-18px_rgba(23,24,28,0.28)]',
            'py-7 px-6 pb-6',
            'top-1.5'
          )}
        >
          {/* Score badge */}
          <div className="absolute -top-6 -right-7">
            <ScoreRing score={94} size="lg" showLabel />
          </div>

          {/* Name */}
          <div className="font-['Fraunces'] font-semibold text-[1.32rem]">
            Jordan Avery
          </div>

          {/* Title */}
          <div className="font-['JetBrains_Mono'] text-[0.68rem] tracking-[0.06em] uppercase text-[var(--ink-soft)] mt-1">
            Senior Product Designer
          </div>

          {/* Contact */}
          <div className="text-[0.72rem] text-[var(--ink-faint)] mt-1.5">
            jordan@email.com · Chicago, IL · linkedin.com/in/jordanavery
          </div>

          {/* Divider */}
          <div className="h-px bg-[var(--rule)] my-4 mt-4 mb-3" />

          {/* Experience section */}
          <div className="font-['JetBrains_Mono'] text-[0.65rem] tracking-[0.1em] uppercase text-[var(--ink-faint)] mb-2">
            Experience
          </div>

          <div className="font-semibold text-[0.82rem] mb-0.5">
            Lead Product Designer — Northwind Co.
          </div>
          <div className="text-[0.7rem] text-[var(--ink-faint)] mb-2">
            2022 — Present
          </div>

          {/* Bullets */}
          <div className="text-[0.76rem] text-[var(--ink-soft)] mb-1.5 pl-3 relative">
            <span className="absolute left-0 text-[var(--ink-faint)]">–</span>
            Redesigned checkout flow, lifting conversion 18% in six weeks.
          </div>
          <div className="text-[0.76rem] text-[var(--ink-soft)] pl-3 relative">
            <span className="absolute left-0 text-[var(--ink-faint)]">–</span>
            <span className="bg-[var(--red-soft)] text-[var(--red)] rounded px-[3px] py-0">
              Responsible for team communications and reporting.
            </span>
          </div>

          {/* Divider */}
          <div className="h-px bg-[var(--rule)] my-4 mt-4 mb-3" />

          {/* Skills */}
          <div className="font-['JetBrains_Mono'] text-[0.65rem] tracking-[0.1em] uppercase text-[var(--ink-faint)] mb-2">
            Skills
          </div>

          {/* Pills */}
          <div className="flex flex-wrap gap-1.5">
            {['Figma', 'Design Systems', 'User Research', 'SQL'].map((skill) => (
              <span
                key={skill}
                className="text-[0.66rem] font-['JetBrains_Mono'] bg-[var(--paper-alt)] border border-[var(--rule)] px-2 py-[3px] rounded-[20px] text-[var(--ink-soft)]"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Annotations */}
          <div className="absolute top-[255px] -right-[58px] font-['JetBrains_Mono'] text-[0.68rem] text-[var(--red)] bg-[var(--card)] border-l-2 border-[var(--red)] py-[5px] px-2.5 max-w-[170px] leading-[1.35] shadow-[0_8px_18px_-10px_rgba(23,24,28,0.25)] opacity-0 translate-x-2 animate-[annotIn_0.6s_ease_forwards_0.9s]">
            Vague — add a measurable outcome
          </div>
          <div className="absolute top-[352px] -right-[72px] font-['JetBrains_Mono'] text-[0.68rem] text-[var(--red)] bg-[var(--card)] border-l-2 border-[var(--red)] py-[5px] px-2.5 max-w-[170px] leading-[1.35] shadow-[0_8px_18px_-10px_rgba(23,24,28,0.25)] opacity-0 translate-x-2 animate-[annotIn_0.6s_ease_forwards_1.25s]">
            Strong. Parsers can read this line cleanly ✓
          </div>
        </div>
      </div>
    );
  }
);
HeroResumeMockup.displayName = 'HeroResumeMockup';

export { HeroResumeMockup };
