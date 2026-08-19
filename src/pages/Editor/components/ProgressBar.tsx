import * as React from 'react';
import { cn } from '@/lib/cn';

export const ProgressBar = ({
  label,
  percent,
  good,
}: {
  label: string;
  percent: number;
  good: boolean;
}) => (
  <div className="mt-3.5">
    <div className="flex justify-between text-[0.78rem] mb-1.5">
      <span>{label}</span>
      <span className="font-['JetBrains_Mono'] font-semibold">{percent}%</span>
    </div>
    <div className="h-[5px] bg-[var(--paper-alt)] rounded overflow-hidden">
      <div
        className={cn('h-full rounded', good ? 'bg-[var(--green)]' : 'bg-[var(--amber)]')}
        style={{ width: `${percent}%` }}
      />
    </div>
  </div>
);
