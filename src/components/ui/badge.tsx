/**
 * Badge Component
 * Preserves original visual design
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cn';

const badgeVariants = cva(
  `
    inline-flex items-center font-['JetBrains_Mono']
    rounded-[20px]
  `,
  {
    variants: {
      variant: {
        default: 'bg-[var(--red-soft)] text-[var(--red)] border border-[var(--red-soft)]',
        green: 'bg-[var(--green-soft)] text-[var(--green)] border border-[var(--green-soft)]',
        neutral: 'bg-[var(--paper-alt)] text-[var(--ink-soft)] border border-[var(--rule)]',
      },
      size: {
        default: 'text-[0.64rem] px-2 py-[2px]',
        tag: 'text-[0.7rem] px-[9px] py-[3px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Badge.displayName = 'Badge';

export { Badge, badgeVariants };
