/**
 * Separator Component
 */

import * as React from 'react';
import { cn } from '@/lib/cn';

const Separator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('h-px bg-[var(--rule)]', className)}
    {...props}
  />
));
Separator.displayName = 'Separator';

export { Separator };
