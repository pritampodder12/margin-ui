import * as React from 'react';
import { Eyebrow } from '@/components/ui/typography';
import { PanelScoreRing } from './PanelScoreRing';
import { ProgressBar } from './ProgressBar';
import { KeywordChip } from './KeywordChip';
import { AISuggestion } from './AISuggestion';
import apiService from '@/lib/http/ApiService';
import { Button } from '@/components/ui';
import { RefreshCcw } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setAtsAnalysisData, setJobDescription, setSuggestionApplied } from '@/store/atsAnalysisSlice';
import { SectionType, SuggestionElement } from '@/store/resumeTypes';
import { updateExperienceDescription } from '@/store/resumeSlice';

export const InsightsPanel = ({ activeSection, resumeId }: { activeSection: SectionType, resumeId: string | null }) => {
  const dispatch = useAppDispatch();
  const { jobDescription, atsAnalysisData, suggestionsData } = useAppSelector(state => state.atsAnalysis);
  const { data } = useAppSelector(state => state.resume);
  const { experience } = data;
  const { atsScore, extractedKeywords } = atsAnalysisData;
  const { formatting, impact, keyword, overall } = atsScore;
  const { suggestions } = suggestionsData[activeSection] ?? { suggestions: [] };

  const handleJdSubmit = async () => {
    if (jobDescription && resumeId) {
      try {
        const [response, error] = await apiService.getAtsScore(resumeId, jobDescription);
        if (response && response?.data?.analysisId) {
          dispatch(setAtsAnalysisData(response.data));
        }
      } catch (err) {
        console.error('Failed to score job description', err);
      }
    }
  }

  const handleChangeJD = (event: React.ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>) => {
    dispatch(setJobDescription(event.target.value));
  }

  // const suggestions = React.useMemo(() => getSectionSuggestions(activeSection, data), [activeSection, data]);

  const handleApply = (suggestion: SuggestionElement, suggestionIndex: number) => {
    switch (suggestion.type) {
      case 'KEYWORD':
        updateResumeSections(suggestion, suggestionIndex);
        break;
      case 'REWRITE':
        updateResumeSections(suggestion, suggestionIndex);
        break;
      default:
        break;

    }
  };

  const updateResumeSections = (suggestion: SuggestionElement, suggestionIndex: number) => {
    switch (activeSection) {
      case 'experience':
        const entry = experience[suggestion.targetRef.entryIndex];
        if (!isNaN(suggestion.targetRef.entryIndex) && entry) {
          dispatch(updateExperienceDescription({
            index: suggestion.targetRef.entryIndex,
            newValue: entry.description.concat(suggestion.suggestedText)
          }));
          dispatch(setSuggestionApplied({ section: activeSection, suggestionIndex }))
        }
        break;
      case 'education':
        break;
      case 'skills':
        break;
      default:
        break;
    }
  }

  return (
    <div className="border-l border-[var(--rule)] py-[22px] px-[22px] bg-[var(--paper)] overflow-y-auto max-[880px]:border-none max-[880px]:border-t">
      {/* ATS Score */}
      <div className="mb-[30px] last:mb-0">
        <Eyebrow>ATS score</Eyebrow>
        <div className="flex items-center gap-4 mt-3">
          <PanelScoreRing score={overall} />
          <div>
            <div className="font-semibold text-[0.92rem]">
              {overall >= 85 ? 'Strong match' : overall >= 70 ? 'Good match' : 'Needs work'}
            </div>
            <div className="text-[0.76rem] text-[var(--ink-faint)] mt-0.5">
              Scored against the job description below
            </div>
          </div>
        </div>
        <ProgressBar label="Keywords" percent={keyword} good={keyword >= 80} />
        <ProgressBar label="Formatting" percent={formatting} good />
        <ProgressBar label="Impact" percent={impact} good={impact >= 80} />
      </div>

      {/* Job Description */}
      <div className="mb-[30px] last:mb-0">
        <Eyebrow>Job description</Eyebrow>
        <textarea
          className="w-full bg-[var(--card)] border border-[var(--rule)] rounded-[4px] py-3 px-3 font-['Inter'] text-[0.82rem] text-[var(--ink-faint)] resize-none h-[74px] mt-3 focus:outline-none focus:border-[var(--ink-faint)]"
          placeholder="Paste a job description to match keywords against..."
          value={jobDescription}
          onChange={handleChangeJD}
        />
        <div className=''>
          <Button variant="block" size="xs" onClick={handleJdSubmit}>
            <RefreshCcw size={15} /> Analyse against Job Description
          </Button>
        </div>
        <div className="flex flex-wrap gap-[7px] mt-3">
          {extractedKeywords.map((kw) => (
            <KeywordChip key={kw.keyword} keyword={kw.keyword} matched={kw.matched} />
          ))}
        </div>
      </div>

      {/* AI Suggestions — scoped to whichever section is active on the left */}
      <div className="mb-[30px] last:mb-0">
        <div className="flex items-baseline justify-between">
          <Eyebrow>AI suggestions</Eyebrow>
          <span className="font-['JetBrains_Mono'] text-[0.66rem] text-[var(--ink-faint)] capitalize">{activeSection}</span>
        </div>
        <div className="mt-3">
          {suggestions.length === 0 && (
            <p className="text-[0.8rem] text-[var(--ink-faint)]">
              No suggestions for {activeSection.toLowerCase()} right now.
            </p>
          )}
          {suggestions.map((suggestion, idx) => (
            <AISuggestion
              key={suggestion.suggestedText}
              type={suggestion.type}
              description={suggestion.description}
              applied={suggestion.applied}
              onApply={() => handleApply(suggestion, idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};