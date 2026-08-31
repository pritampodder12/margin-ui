/**
 * Button Component
 * Preserves original visual design exactly
 */

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cn';

const buttonVariants = cva(
  // Base styles from original
  `
    inline-flex items-center gap-2
    font-['Inter'] font-semibold
    rounded-[3px]
    cursor-pointer
    border border-transparent
    transition-all duration-150
    active:translate-y-[1px]
    disabled:pointer-events-none disabled:opacity-50
    justify-center text-center
  `,
  {
    variants: {
      variant: {
        primary: `
          bg-[var(--ink)] text-[var(--paper)]
          hover:bg-black
        `,
        outline: `
          bg-transparent text-[var(--ink)]
          border-color-[var(--ink)]
          hover:bg-[var(--ink)] hover:text-[var(--paper)]
        `,
        ghost: `
          bg-transparent text-[var(--ink-soft)]
          border-color-[var(--rule)]
          hover:text-[var(--ink)] hover:border-color-[var(--rule-strong)]
        `,
        block: `
          bg-[var(--ink)] text-[var(--paper)]
          w-full
          hover:bg-black
        `,
      },
      size: {
        default: 'px-5 py-[11px] text-[0.92rem]',
        sm: 'px-4 py-2 text-[0.85rem]',
        xs: 'px-3 py-[5px] text-[0.72rem]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
