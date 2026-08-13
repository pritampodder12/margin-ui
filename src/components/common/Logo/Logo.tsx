/**
 * Logo Component
 * Matches original design
 */

import * as React from 'react';
import { cn } from '@/lib/cn';

const Logo = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "font-['Fraunces'] italic font-semibold text-[1.4rem]",
      'flex items-center gap-[2px]',
      className
    )}
    {...props}
  >
    Margin<span className="text-[var(--red)] not-italic">.</span>
  </a>
));
Logo.displayName = 'Logo';

export { Logo };
