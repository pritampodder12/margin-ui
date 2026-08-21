import * as React from 'react';
import { Eyebrow } from '@/components/ui/typography';
import type { ResumeData } from '@/store/resumeTypes';
import { useResumeActions } from '@/hooks/useResumeActions';
import { useATSScore } from '@/hooks/useATSScore';
import { PanelScoreRing } from './PanelScoreRing';
import { ProgressBar } from './ProgressBar';
import { KeywordChip } from './KeywordChip';
import { AISuggestion } from './AISuggestion';
import { getSectionSuggestions } from './aiSuggestions';

export const InsightsPanel = ({ data, activeSection }: { data: ResumeData; activeSection: string }) => {
  const { updateExperience, updateEducation, updateObjective, addNamedSkill } = useResumeActions();
  const { atsScore, keywordScore, formattingScore, impactScore, keywords } = useATSScore(data);

  // Suggestion ids the user has already applied — these stay visible but flip to an "Applied" state.
  const [appliedIds, setAppliedIds] = React.useState<Set<string>>(new Set());

  const suggestions = React.useMemo(() => getSectionSuggestions(activeSection, data), [activeSection, data]);

  const handleApply = (suggestion: ReturnType<typeof getSectionSuggestions>[number]) => {
    suggestion.apply(data, { updateExperience, updateEducation, updateObjective, addNamedSkill });
    setAppliedIds((prev) => new Set(prev).add(suggestion.id));
  };

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

      {/* AI Suggestions — scoped to whichever section is active on the left */}
      <div className="mb-[30px] last:mb-0">
        <div className="flex items-baseline justify-between">
          <Eyebrow>AI suggestions</Eyebrow>
          <span className="font-['JetBrains_Mono'] text-[0.66rem] text-[var(--ink-faint)]">{activeSection}</span>
        </div>
        <div className="mt-3">
          {suggestions.length === 0 && (
            <p className="text-[0.8rem] text-[var(--ink-faint)]">
              No suggestions for {activeSection.toLowerCase()} right now.
            </p>
          )}
          {suggestions.map((suggestion) => (
            <AISuggestion
              key={suggestion.id}
              tag={suggestion.tag}
              text={suggestion.text}
              applied={appliedIds.has(suggestion.id)}
              onApply={() => handleApply(suggestion)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
