/**
 * Footer Component
 * Matches original design exactly
 */

import * as React from 'react';
import { Logo } from '@/components/common/Logo';
import { Eyebrow } from '@/components/ui/typography';
import { cn } from '@/lib/cn';

const Footer = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    const productLinks = [
      { label: 'Templates', href: '#templates' },
      { label: 'ATS score', href: '#ats' },
      { label: 'AI editor', href: '#product' },
      { label: 'Upload a resume', href: '#product' },
    ];

    const companyLinks = [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contact', href: '#' },
    ];

    const legalLinks = [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
    ];

    return (
      <footer
        ref={ref}
        className={cn('border-t border-[var(--rule)] py-14 pb-9', className)}
        {...props}
      >
        <div className="max-w-[1180px] mx-auto px-8 max-md:px-5">
          {/* Grid */}
          <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 max-md:grid-cols-1 max-lg:grid-cols-2 max-lg:gap-y-8">
            {/* Logo & Tagline */}
            <div>
              <Logo href="#" />
              <p className="text-[0.9rem] text-[var(--ink-soft)] mt-3.5 max-w-[20rem]">
                Read the way a machine reads, written the way you'd say it.
              </p>
            </div>

            {/* Product */}
            <div>
              <Eyebrow variant="alt" className="mb-3.5">
                Product
              </Eyebrow>
              <div className="flex flex-col gap-2.5">
                {productLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-[0.88rem] text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <Eyebrow variant="alt" className="mb-3.5">
                Company
              </Eyebrow>
              <div className="flex flex-col gap-2.5">
                {companyLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-[0.88rem] text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div>
              <Eyebrow variant="alt" className="mb-3.5">
                Legal
              </Eyebrow>
              <div className="flex flex-col gap-2.5">
                {legalLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-[0.88rem] text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-6 border-t border-[var(--rule)] flex justify-between flex-wrap gap-2.5 text-[0.78rem] text-[var(--ink-faint)]">
            <span>© 2026 Margin. All rights reserved.</span>
            <span>Made for people who are tired of guessing.</span>
          </div>
        </div>
      </footer>
    );
  }
);
Footer.displayName = 'Footer';

// Simple footer for dashboard
const SimpleFooter = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <footer
    ref={ref}
    className={cn('border-t border-[var(--rule)] py-7', className)}
    {...props}
  >
    <div className="max-w-[1180px] mx-auto px-8 flex justify-between flex-wrap gap-2.5 text-[0.78rem] text-[var(--ink-faint)]">
      <span>© 2026 Margin.</span>
      <span>Read the way a machine reads, written the way you'd say it.</span>
    </div>
  </footer>
));
SimpleFooter.displayName = 'SimpleFooter';

export { Footer, SimpleFooter };
