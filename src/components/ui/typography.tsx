/**
 * Typography Components
 * Preserves original design's typography system
 */

import * as React from 'react';
import { cn } from '@/lib/cn';

// Fraunces headings (serif)
const Heading = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & {
    level?: 'h1' | 'h2' | 'h3';
  }
>(({ className, level = 'h2', ...props }, ref) => {
  const Component = level;
  return (
    <Component
      ref={ref}
      className={cn(
        "font-['Fraunces'] font-semibold",
        'leading-[1.08] tracking-[-0.01em] m-0',
        className
      )}
      {...props}
    />
  );
});
Heading.displayName = 'Heading';

// Eyebrow (mono case heading)
const Eyebrow = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & {
    variant?: 'default' | 'alt';
  }
>(({ className, variant = 'default', ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "font-['JetBrains_Mono']",
      'text-[0.72rem] tracking-[0.12em] uppercase font-medium',
      variant === 'default' && 'text-[var(--red)]',
      variant === 'alt' && 'text-[var(--ink-faint)]',
      className
    )}
    {...props}
  />
));
Eyebrow.displayName = 'Eyebrow';

// Mono text
const Mono = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("font-['JetBrains_Mono']", className)}
    {...props}
  />
));
Mono.displayName = 'Mono';

export { Heading, Eyebrow, Mono };
