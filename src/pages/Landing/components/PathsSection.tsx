/**
 * Paths Section Component (Three ways to start)
 * Matches original design exactly
 */

import * as React from 'react';
import { Heading, Eyebrow } from '@/components/ui/typography';
import { RevealOnScroll } from '@/components/common/RevealOnScroll';
import { cn } from '@/lib/cn';

const paths = [
  {
    tag: '[ upload ]',
    title: 'Upload & rewrite',
    description:
      'Drop in the resume you already have. Margin reads it, scores it, and rewrites weak lines while keeping your voice.',
  },
  {
    tag: '[ blank ]',
    title: 'Start from scratch',
    description:
      'Answer a handful of prompts about your experience, and Margin drafts a first version you can shape from there.',
  },
  {
    tag: '[ swap ]',
    title: 'Switch templates anytime',
    description:
      'Move your content into any template without retyping a word. Formatting never breaks the parse.',
  },
];

const PathsSection = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => {
  return (
    <section
      ref={ref}
      id="product"
      className={cn('py-[88px]', className)}
      {...props}
    >
      <div className="max-w-[1180px] mx-auto px-8 max-xs:px-5">
        <RevealOnScroll className="max-w-[38rem] mb-13">
          <Eyebrow variant="alt">Getting started</Eyebrow>
          <Heading level="h2" className="text-[clamp(1.9rem,3vw,2.6rem)] mt-2.5">
            Three ways to start.
          </Heading>
          <p className="text-[var(--ink-soft)] text-[1.02rem] mt-3.5">
            However your search begins, Margin meets you there — nothing to
            retype twice.
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="grid grid-cols-3 gap-px bg-[var(--rule)] border border-[var(--rule)] rounded-[var(--radius-md)] overflow-hidden max-lg:grid-cols-1">
            {paths.map((path) => (
              <div
                key={path.tag}
                className="bg-[var(--card)] py-[34px] px-7"
              >
                <span className="inline-block font-['JetBrains_Mono'] text-[0.7rem] text-[var(--red)] border border-[var(--red-soft)] bg-[var(--red-soft)] px-[9px] py-[3px] rounded-[20px] mb-[18px]">
                  {path.tag}
                </span>
                <h3 className="font-['Fraunces'] font-semibold text-[1.22rem] mb-2.5">
                  {path.title}
                </h3>
                <p className="text-[var(--ink-soft)] text-[0.92rem]">
                  {path.description}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
});
PathsSection.displayName = 'PathsSection';

export { PathsSection };
