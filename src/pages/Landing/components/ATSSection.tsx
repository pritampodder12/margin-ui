/**
 * ATS Score Section Component
 * Matches original design exactly
 */

import * as React from 'react';
import { Heading, Eyebrow } from '@/components/ui/typography';
import { RevealOnScroll } from '@/components/common/RevealOnScroll';
import { ScoreRing } from '@/components/common/ScoreRing';
import { cn } from '@/lib/cn';
import { Check } from 'lucide-react';

const ATSSection = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => {
  const checks = [
    'Keyword match against the job description',
    'Section headers a parser can actually read',
    'Formatting that survives PDF-to-text conversion',
    'Action verbs and measurable outcomes',
  ];

  const bars = [
    { label: 'Keywords', percent: 88, good: true },
    { label: 'Formatting', percent: 96, good: true },
    { label: 'Impact', percent: 79, good: false },
  ];

  return (
    <section
      ref={ref}
      id="ats"
      className={cn(
        'bg-[var(--paper-alt)] border-t border-b border-[var(--rule)]',
        className
      )}
      {...props}
    >
      <div className="max-w-[1180px] mx-auto px-8 max-xs:px-5 py-[88px]">
        <div className="grid grid-cols-2 gap-16 items-start max-lg:grid-cols-1 max-lg:gap-11">
          {/* Left: Content */}
          <RevealOnScroll>
            <Eyebrow>ATS score & AI improvement</Eyebrow>
            <Heading
              level="h2"
              className="text-[clamp(1.9rem,3vw,2.5rem)] mt-2.5"
            >
              See your resume the way a bot does.
            </Heading>
            <p className="text-[var(--ink-soft)] text-[1rem] mt-3.5">
              Most applicant tracking systems never render your formatting —
              they extract raw text and score whatever they find. Margin shows
              you that score before a recruiter ever sees the page.
            </p>

            {/* Check list */}
            <ul className="mt-6.5 flex flex-col gap-4.5">
              {checks.map((check) => (
                <li
                  key={check}
                  className="flex gap-3 items-start text-[0.95rem] text-[var(--ink-soft)]"
                >
                  <span className="flex-none w-5 h-5 rounded-full bg-[var(--green-soft)] text-[var(--green)] flex items-center justify-center text-[0.7rem] mt-[2px]">
                    <Check className="w-3 h-3" />
                  </span>
                  {check}
                </li>
              ))}
            </ul>
          </RevealOnScroll>

          {/* Right: Score Panel */}
          <RevealOnScroll>
            <div className="bg-[var(--card)] border border-[var(--rule-strong)] rounded-[var(--radius-md)] p-8 shadow-[0_20px_40px_-24px_rgba(23,24,28,0.25)]">
              {/* Top: Score ring */}
              <div className="flex items-center gap-5.5 mb-6.5">
                <div className="w-[96px] h-[96px] relative flex-none">
                  <ScoreRing score={94} size="md" />
                </div>
                <div>
                  <div className="font-semibold text-[1rem]">Overall score</div>
                  <div className="text-[0.8rem] text-[var(--ink-faint)] mt-[3px]">
                    Based on the job description you paste in
                  </div>
                </div>
              </div>

              {/* Bars */}
              {bars.map((bar) => (
                <div key={bar.label} className="mb-4 last:mb-0">
                  <div className="flex justify-between text-[0.82rem] mb-1.5">
                    <span>{bar.label}</span>
                    <span className="font-['JetBrains_Mono'] font-semibold">
                      {bar.percent}%
                    </span>
                  </div>
                  <div className="h-[6px] bg-[var(--paper-alt)] rounded overflow-hidden">
                    <div
                      className={cn(
                        'h-full rounded transition-[width] duration-1000 ease-out',
                        bar.good ? 'bg-[var(--green)]' : 'bg-[var(--amber)]'
                      )}
                      style={{ width: `${bar.percent}%` }}
                    />
                  </div>
                </div>
              ))}

              {/* AI Callout */}
              <div className="mt-6 bg-[var(--red-soft)] border-l-2 border-[var(--red)] py-3.5 px-4 rounded-[2px]">
                <div className="font-['JetBrains_Mono'] text-[0.65rem] text-[var(--red)] tracking-[0.08em]">
                  AI SUGGESTION
                </div>
                <p className="text-[0.86rem] text-[var(--ink)] mt-1.5">
                  Swap "responsible for team communications" for a specific
                  outcome — what changed because of you?
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
});
ATSSection.displayName = 'ATSSection';

export { ATSSection };
