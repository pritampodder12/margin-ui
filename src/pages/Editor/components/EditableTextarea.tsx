import * as React from 'react';
import { cn } from '@/lib/cn';

export const EditableTextarea = ({
  value,
  onChange,
  placeholder,
  className,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}) => (
  <textarea
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    className={cn(
      'bg-transparent border-none outline-none w-full resize-none',
      'text-[var(--ink-soft)] placeholder:text-[var(--ink-faint)]',
      'focus:ring-0 leading-[1.6]',
      className
    )}
    rows={3}
  />
);
