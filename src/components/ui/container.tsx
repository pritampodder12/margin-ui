/**
 * Container Component
 * Matches original .wrap class
 */

import * as React from 'react';
import { cn } from '@/lib/cn';

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'max-w-[1180px] mx-auto px-8',
      'max-md:px-5',
      className
    )}
    {...props}
  />
));
Container.displayName = 'Container';

export { Container };
