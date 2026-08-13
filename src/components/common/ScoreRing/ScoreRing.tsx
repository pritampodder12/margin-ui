/**
 * Score Ring Component
 * Circular progress indicator - matches original design
 */

import * as React from 'react';
import { cn } from '@/lib/cn';

interface ScoreRingProps {
  score: number;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showLabel?: boolean;
  className?: string;
}

const sizeConfig = {
  sm: {
    container: 'w-[44px] h-[44px]',
    radius: 19,
    strokeWidth: 4,
    fontSize: 'text-[0.68rem]',
    circumference: 119,
  },
  md: {
    container: 'w-[96px] h-[96px]',
    radius: 42,
    strokeWidth: 6,
    fontSize: 'text-[1.5rem]',
    circumference: 264,
  },
  lg: {
    container: 'w-[104px] h-[104px]',
    radius: 46,
    strokeWidth: 6,
    fontSize: 'text-[1.5rem]',
    circumference: 289,
  },
  xl: {
    container: 'w-[120px] h-[120px]',
    radius: 54,
    strokeWidth: 6,
    fontSize: 'text-[1.8rem]',
    circumference: 339,
  },
};

const getStrokeColor = (score: number) => {
  if (score >= 85) return 'var(--green)';
  if (score >= 70) return 'var(--amber)';
  return 'var(--red)';
};

const ScoreRing = React.forwardRef<HTMLDivElement, ScoreRingProps>(
  ({ score, size = 'sm', showLabel = false, className }, ref) => {
    const config = sizeConfig[size];
    const offset = config.circumference - (score / 100) * config.circumference;
    const strokeColor = getStrokeColor(score);

    return (
      <div
        ref={ref}
        className={cn(
          'relative flex flex-col items-center justify-center',
          'bg-[var(--card)] border border-[var(--rule-strong)] rounded-full',
          size === 'sm' && 'shadow-[0_8px_16px_-10px_rgba(23,24,28,0.3)]',
          size !== 'sm' && 'shadow-[0_16px_30px_-14px_rgba(23,24,28,0.3)]',
          config.container,
          className
        )}
      >
        <svg
          width={size === 'sm' ? 44 : size === 'md' ? 96 : 104}
          height={size === 'sm' ? 44 : size === 'md' ? 96 : 104}
          viewBox={`0 0 ${size === 'sm' ? 44 : size === 'md' ? 96 : 104} ${size === 'sm' ? 44 : size === 'md' ? 96 : 104}`}
          className="absolute top-0 left-0"
        >
          {/* Background circle */}
          <circle
            cx={size === 'sm' ? 22 : size === 'md' ? 48 : 52}
            cy={size === 'sm' ? 22 : size === 'md' ? 48 : 52}
            r={config.radius}
            fill="none"
            stroke="#EDEAE0"
            strokeWidth={config.strokeWidth}
          />
          {/* Progress circle */}
          <circle
            cx={size === 'sm' ? 22 : size === 'md' ? 48 : 52}
            cy={size === 'sm' ? 22 : size === 'md' ? 48 : 52}
            r={config.radius}
            fill="none"
            stroke={strokeColor}
            strokeWidth={config.strokeWidth}
            strokeLinecap="round"
            strokeDasharray={config.circumference}
            strokeDashoffset={offset}
            transform={`rotate(-90 ${size === 'sm' ? 22 : size === 'md' ? 48 : 52} ${size === 'sm' ? 22 : size === 'md' ? 48 : 52})`}
            className="transition-[stroke-dashoffset] duration-1000 ease-out"
          />
        </svg>
        <span
          className={cn(
            "font-['JetBrains_Mono'] font-semibold z-10",
            config.fontSize
          )}
        >
          {score}
        </span>
        {showLabel && (
          <span className="font-['JetBrains_Mono'] text-[0.55rem] tracking-[0.06em] text-[var(--ink-faint)] uppercase mt-0.5 z-10">
            ATS score
          </span>
        )}
      </div>
    );
  }
);
ScoreRing.displayName = 'ScoreRing';

export { ScoreRing };
