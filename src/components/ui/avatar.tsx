/**
 * Avatar Component
 * Preserves original visual design
 */

import * as React from 'react';
import { cn } from '@/lib/cn';

const Avatar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'w-[34px] h-[34px] rounded-full',
      'bg-[var(--ink)] text-[var(--paper)]',
      'flex items-center justify-center',
      'font-["JetBrains_Mono"] text-[0.72rem] font-semibold',
      className
    )}
    {...props}
  />
));
Avatar.displayName = 'Avatar';

export { Avatar };
