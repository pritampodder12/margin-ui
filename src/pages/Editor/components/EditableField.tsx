import * as React from 'react';
import { cn } from '@/lib/cn';

export const EditableField = ({
  value,
  onChange,
  placeholder,
  className,
  mono,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  mono?: boolean;
}) => (
  <input
    type="text"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    className={cn(
      'bg-transparent border-none outline-none w-full',
      'text-[var(--ink)] placeholder:text-[var(--ink-faint)]',
      'focus:ring-0',
      mono && "font-['JetBrains_Mono']",
      className
    )}
  />
);
