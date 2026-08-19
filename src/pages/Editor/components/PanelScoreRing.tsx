import * as React from 'react';

export const PanelScoreRing = ({ score }: { score: number }) => (
  <div className="w-[64px] h-[64px] relative flex-none">
    <svg width="64" height="64" viewBox="0 0 64 64" className="absolute top-0 left-0">
      <circle cx="32" cy="32" r="27" fill="none" stroke="#EDEAE0" strokeWidth="5" />
      <circle
        cx="32"
        cy="32"
        r="27"
        fill="none"
        stroke={score >= 85 ? '#1F6E4A' : score >= 70 ? '#9C6B14' : '#B93E28'}
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={170}
        strokeDashoffset={170 - (score / 100) * 170}
        transform="rotate(-90 32 32)"
      />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center font-['JetBrains_Mono'] font-semibold text-[1.05rem]">
      {score}
    </div>
  </div>
);
