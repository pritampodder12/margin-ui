import * as React from 'react';
import { Eyebrow } from '@/components/ui/typography';
import type { ResumeData } from '@/store/resumeTypes';
import { useResumeActions } from '@/hooks/useResumeActions';
import { useATSScore } from '@/hooks/useATSScore';
import { PanelScoreRing } from './PanelScoreRing';
import { ProgressBar } from './ProgressBar';
import { KeywordChip } from './KeywordChip';
import { AISuggestion } from './AISuggestion';

export const InsightsPanel = ({ data }: { data: ResumeData }) => {
  const { addNamedSkill } = useResumeActions();
  const { atsScore, keywordScore, formattingScore, impactScore, keywords } = useATSScore(data);

  const hasWeakBullet = data.experience.some((exp) =>
    exp.description.some((b) => b.toLowerCase().includes('responsible') && b.length < 80)
  );
  const missingStakeholderKeyword = !keywords.find((k) => k.word === 'Stakeholder management')?.matched;
  const summaryTooLong = data.objective.length > 150;

  return (
    <div className="border-l border-[var(--rule)] py-[22px] px-[22px] bg-[var(--paper)] overflow-y-auto max-[880px]:border-none max-[880px]:border-t">
      {/* ATS Score */}
      <div className="mb-[30px] last:mb-0">
        <Eyebrow>ATS score</Eyebrow>
        <div className="flex items-center gap-4 mt-3">
          <PanelScoreRing score={atsScore} />
          <div>
            <div className="font-semibold text-[0.92rem]">
              {atsScore >= 85 ? 'Strong match' : atsScore >= 70 ? 'Good match' : 'Needs work'}
            </div>
            <div className="text-[0.76rem] text-[var(--ink-faint)] mt-0.5">
              Scored against the job description below
            </div>
          </div>
        </div>
        <ProgressBar label="Keywords" percent={keywordScore} good={keywordScore >= 80} />
        <ProgressBar label="Formatting" percent={formattingScore} good />
        <ProgressBar label="Impact" percent={impactScore} good={impactScore >= 80} />
      </div>

      {/* Job Description */}
      <div className="mb-[30px] last:mb-0">
        <Eyebrow>Job description</Eyebrow>
        <textarea
          className="w-full bg-[var(--card)] border border-[var(--rule)] rounded-[4px] py-3 px-3 font-['Inter'] text-[0.82rem] text-[var(--ink-faint)] resize-none h-[74px] mt-3 focus:outline-none focus:border-[var(--ink-faint)]"
          placeholder="Paste a job description to match keywords against..."
          defaultValue="Looking for a Senior Product Designer with experience in design systems, user research, A/B testing, and stakeholder management..."
        />
        <div className="flex flex-wrap gap-[7px] mt-3">
          {keywords.map((kw) => (
            <KeywordChip key={kw.word} keyword={kw.word} matched={kw.matched} />
          ))}
        </div>
      </div>

      {/* AI Suggestions */}
      <div className="mb-[30px] last:mb-0">
        <Eyebrow>AI suggestions</Eyebrow>
        <div className="mt-3">
          {hasWeakBullet && (
            <AISuggestion
              tag="REWRITE"
              text='Swap "responsible for" for a specific outcome — what changed because of you?'
              onApply={() => {
                // In real app, would trigger AI rewrite
              }}
            />
          )}
          {missingStakeholderKeyword && (
            <AISuggestion
              tag="KEYWORD"
              text='Add "stakeholder management" — it appears in the job description but not in your resume.'
              onApply={() => addNamedSkill('Stakeholder management')}
            />
          )}
          {summaryTooLong && (
            <AISuggestion
              tag="TIGHTEN"
              text="Your summary runs long for a parser's first pass. Trim to under two sentences."
              onApply={() => {}}
            />
          )}
        </div>
      </div>
    </div>
  );
};
