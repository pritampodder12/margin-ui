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
import { SectionType, Skill, SuggestionElement } from '@/store/resumeTypes';
import { updateCandidateInfo, updateExperienceDescription, updateSkills } from '@/store/resumeSlice';
import { nanoid } from '@reduxjs/toolkit';

export const InsightsPanel = ({ activeSection, resumeId }: { activeSection: SectionType, resumeId: string | null }) => {
  const dispatch = useAppDispatch();
  const { jobDescription, atsAnalysisData, suggestionsData } = useAppSelector(state => state.atsAnalysis);
  const { data } = useAppSelector(state => state.resume);
  const { experience } = data;
  const { atsScore, extractedKeywords } = atsAnalysisData;
  const { formatting, impact, keywords, overall } = atsScore;
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
    updateResumeSections(suggestion, suggestionIndex);
  };

  const updateResumeSections = (suggestion: SuggestionElement, suggestionIndex: number) => {
    switch (activeSection) {
      case 'experience': {
        const { entryIndex, bulletIndex } = suggestion.targetRef;
        const entry = experience[entryIndex];
        if (isNaN(entryIndex) || !entry) return;

        let newDescription: string[];

        switch (suggestion.type) {
          case 'KEYWORD':
            // Append — bulletIndex is null, nothing to index into
            newDescription = entry.description.concat(suggestion.suggestedText!);
            break;

          case 'REWRITE':
          case 'METRIC':
            // Replace — bulletIndex must be a real number
            if (bulletIndex == null || !entry.description[bulletIndex]) return;
            newDescription = entry.description.map((bullet, i) =>
              i === bulletIndex ? suggestion.suggestedText! : bullet
            );
            break;

          case 'REMOVE':
            // Delete — suggestedText is null here, don't use it
            if (bulletIndex == null || !entry.description[bulletIndex]) return;
            newDescription = entry.description.filter((_, i) => i !== bulletIndex);
            break;

          default:
            return;
        }

        dispatch(updateExperienceDescription({ index: entryIndex, newValue: newDescription }));
        dispatch(setSuggestionApplied({ section: activeSection, suggestionIndex }));
        break;
      }

      case 'skills': {
        const { category, bulletIndex } = suggestion.targetRef;
        if (!category) return;

        switch (suggestion.type) {
          case 'KEYWORD': {
            // Append — new skill under the given category
            const newSkill: Skill = {
              id: nanoid(),
              name: suggestion.suggestedText!,
              category,
              proficiencyLevel: 0,
              yearsOfExperience: 0,
              description: [],
              sortOrder: data.skills.length,
            };
            dispatch(updateSkills([...data.skills, newSkill]));
            break;
          }

          case 'REMOVE': {
            if (!suggestion.currentText) return;
            const target = data.skills.find(
              s => s.category === category && s.name === suggestion.currentText
            );
            if (!target) return;

            dispatch(updateSkills(data.skills.filter(s => s.id !== target.id)));
            break;
          }
          // REWRITE / METRIC are not valid for skills per the prompt — no-op if they slip through
          default:
            return;
        }

        dispatch(setSuggestionApplied({ section: activeSection, suggestionIndex }));
        break;
      }

      case 'summary': {
        // Single free-text field — targetRef is always null, no indexing
        if (suggestion.type !== 'REWRITE' || !suggestion.suggestedText) return;

        dispatch(updateCandidateInfo({ objective: suggestion.suggestedText }));
        dispatch(setSuggestionApplied({ section: activeSection, suggestionIndex }));
        break;
      }

      case 'education':
        // TODO: same entryIndex/bulletIndex pattern as experience once you add
        // updateEducationDescription to resumeSlice (education has no such reducer yet)
        break;

      default:
        break;
    }
  };

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
        <ProgressBar label="Keywords" percent={keywords} good={keywords >= 80} />
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