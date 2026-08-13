/**
 * How It Works Section Component
 * Matches original design exactly
 */

import * as React from 'react';
import { Heading, Eyebrow } from '@/components/ui/typography';
import { RevealOnScroll } from '@/components/common/RevealOnScroll';
import { cn } from '@/lib/cn';

const steps = [
  {
    num: '01',
    title: 'Upload or start blank',
    description:
      'Bring a resume you already have, or answer a handful of prompts about your experience.',
  },
  {
    num: '02',
    title: 'Get your score',
    description:
      "See your ATS score and a line-by-line breakdown of what's helping and what's holding you back.",
  },
  {
    num: '03',
    title: 'Edit & export',
    description:
      'Apply AI suggestions, pick a template that fits, and export a polished, parser-ready file.',
  },
];

const HowItWorksSection = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => {
  return (
    <section
      ref={ref}
      id="how"
      className={cn('py-[88px]', className)}
      {...props}
    >
      <div className="max-w-[1180px] mx-auto px-8 max-xs:px-5">
        <RevealOnScroll className="max-w-[38rem] mb-13">
          <Eyebrow variant="alt">Process</Eyebrow>
          <Heading level="h2" className="text-[clamp(1.9rem,3vw,2.6rem)] mt-2.5">
            From draft to done in three passes.
          </Heading>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="grid grid-cols-3 gap-0 relative max-lg:grid-cols-1 max-lg:gap-9">
            {/* Connecting line */}
            <div className="absolute top-3.5 left-0 right-0 h-px bg-[var(--rule)] max-lg:hidden" />

            {steps.map((step) => (
              <div
                key={step.num}
                className="pr-9 relative max-lg:pr-0"
              >
                <span className="font-['JetBrains_Mono'] text-[0.85rem] text-[var(--red)] bg-[var(--paper)] inline-block pr-2.5 relative z-10">
                  {step.num}
                </span>
                <h3 className="font-['Fraunces'] font-semibold text-[1.15rem] mt-4 mb-2">
                  {step.title}
                </h3>
                <p className="text-[0.9rem] text-[var(--ink-soft)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
});
HowItWorksSection.displayName = 'HowItWorksSection';

export { HowItWorksSection };
