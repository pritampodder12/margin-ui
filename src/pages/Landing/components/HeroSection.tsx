/**
 * Hero Section Component
 * Matches original design exactly
 */

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Eyebrow } from '@/components/ui/typography';
import { HeroResumeMockup } from './HeroResumeMockup';
import { cn } from '@/lib/cn';

const HeroSection = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => {
  return (
    <section
      ref={ref}
      className={cn(
        'py-[88px] pb-24',
        'grid grid-cols-[1.05fr_1fr] gap-14 items-center',
        'max-lg:grid-cols-1 max-lg:pt-14',
        className
      )}
      {...props}
    >
      {/* Left: Content */}
      <div>
        <Eyebrow>AI resume editor</Eyebrow>
        <h1
          className={cn(
            "font-['Fraunces'] font-semibold",
            'text-[clamp(2.4rem,4.6vw,3.9rem)]',
            'leading-[1.08] tracking-[-0.01em]',
            'mt-3.5'
          )}
        >
          Write a resume that survives the robot{' '}
          <em>before</em> it reaches the human.
        </h1>
        <p className="text-[var(--ink-soft)] text-[1.08rem] max-w-[34rem] mt-5.5 mb-7.5">
          Upload the resume you already have, or start blank. Margin scores it
          the way applicant tracking software does, and marks up exactly what to
          fix — line by line.
        </p>

        {/* CTAs */}
        <div className="flex gap-3.5 flex-wrap max-xs:flex-col max-xs:items-stretch">
          <Button variant="primary">Upload your resume</Button>
          <Button variant="outline">Start from scratch</Button>
        </div>

        {/* Trust line */}
        <div className="mt-4 text-[0.82rem] text-[var(--ink-faint)] font-['JetBrains_Mono']">
          FREE ATS SCAN — NO ACCOUNT REQUIRED TO SEE YOUR SCORE
        </div>
      </div>

      {/* Right: Visual */}
      <div className="max-lg:order-first max-lg:mb-2 max-lg:h-[460px] max-xs:h-[420px]">
        <HeroResumeMockup className="max-lg:scale-90 max-lg:origin-top" />
      </div>
    </section>
  );
});
HeroSection.displayName = 'HeroSection';

export { HeroSection };
