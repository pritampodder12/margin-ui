/**
 * CTA Banner Component
 * Matches original design exactly
 */

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/typography';
import { RevealOnScroll } from '@/components/common/RevealOnScroll';
import { cn } from '@/lib/cn';

const CTABanner = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => {
  return (
    <section ref={ref} className={cn('py-[88px]', className)} {...props}>
      <div className="max-w-[1180px] mx-auto px-8 max-xs:px-5">
        <RevealOnScroll>
          <div className="bg-[var(--ink)] text-[var(--paper)] rounded-[var(--radius-md)] py-16 px-14 flex items-center justify-between gap-10 flex-wrap max-xs:py-11 max-xs:px-7 max-xs:flex-col max-xs:items-start">
            <div>
              <Heading
                level="h2"
                className="text-[clamp(1.7rem,3vw,2.3rem)] max-w-[26rem]"
              >
                Stop guessing why you're not hearing back.
              </Heading>
              <p className="text-[#B9BAC0] mt-3 max-w-[24rem]">
                Find out what the applicant tracking system sees — then fix it
                before you hit send.
              </p>
            </div>
            <Button
              variant="primary"
              className="!bg-[var(--paper)] !text-[var(--ink)] hover:!bg-white"
            >
              Start building free
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
});
CTABanner.displayName = 'CTABanner';

export { CTABanner };
