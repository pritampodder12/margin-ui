import * as React from 'react';
import { Eyebrow } from '@/components/ui/typography';
import type { ResumeData } from '@/store/resumeTypes';
import { useATSScore } from '@/hooks/useATSScore';
import { PanelScoreRing } from './PanelScoreRing';
import { ProgressBar } from './ProgressBar';
import { KeywordChip } from './KeywordChip';
import { AISuggestion } from './AISuggestion';
import { getSectionSuggestions } from './aiSuggestions';
import apiService from '@/lib/http/ApiService';
import { Button } from '@/components/ui';
import { RefreshCcw } from 'lucide-react';

const RESUME_ID = "f21ec153-2ce3-4369-81bd-0d678d8f8d55";

const TEMP_JD = "You will join our high performance Data & AI team and play a key role in designing, developing, deploying, and maintaining enterprise-grade Artificial Intelligence solutions that drive business innovation, intelligent automation, and digital transformation.\n\nDesign, develop, train, and deploy AI and Machine Learning models to solve real-world business problems.\nBuild intelligent AI solutions including:\nPredictive Analytics\nClassification Models\nRecommendation Systems\nIntelligent Automation\nDecision Support Systems\nApply supervised and unsupervised machine learning techniques based on business requirements.\nEvaluate, validate, and optimize AI models to improve accuracy, robustness, scalability, and business value.\nWork with structured and unstructured datasets to prepare data for AI model training, validation, and inference.\nDesign and optimize data pipelines supporting AI and machine learning workflows.\nPerform feature engineering, data transformation, cleansing, and validation activities.\nUtilize Python, SQL, NumPy, Pandas, and related libraries to process and analyze large-scale datasets.\nDeploy AI models using REST APIs, microservices, and cloud-native deployment architectures.\nDevelop scalable model-serving APIs using Flask, FastAPI, or similar frameworks.\nUtilize Docker and CI/CD pipelines to enable automated, secure, and repeatable AI deployments.\nEnsure deployed AI solutions meet enterprise standards for scalability, reliability, performance, security, and maintainability.\nMonitor model performance, prediction quality, model drift, data quality, and retraining requirements.\nTroubleshoot production issues related to AI models, inference services, APIs, and data pipelines.\nDocument AI models, technical designs, assumptions, experiments, and deployment procedures.\nApply Responsible AI principles including fairness, explainability, bias mitigation, governance, and ethical AI practices.\nCollaborate with Product Managers, Data Engineers, Software Engineers, Data Scientists, and Business Stakeholders to deliver enterprise AI solutions.\nTranslate complex business requirements into scalable AI-driven applications and intelligent automation solutions.\nParticipate in Agile ceremonies, architecture discussions, code reviews, and continuous improvement initiatives.\nStay updated with emerging technologies in Artificial Intelligence, Machine Learning, Generative AI, and Cloud Computing.\nWhat We Seek In You\n\n3+ years of experience in Artificial Intelligence, Machine Learning, Applied AI, or AI Engineering.\nBachelor's or Master's degree in Computer Science, Artificial Intelligence, Data Science, Engineering, or a related discipline.\nStrong programming expertise in:\nPython (Mandatory)\nSQL\nExposure to Java, C++, or Scala is an added advantage.\nStrong understanding of:\nSupervised Learning\nUnsupervised Learning\nFeature Engineering\nModel Evaluation\nModel Validation\nPredictive Analytics\nHands-on experience with Deep Learning frameworks including:\nTensorFlow\nPyTorch\nKeras\nStrong expertise working with:\nNumPy\nPandas\nSQL\nStructured and Unstructured Data\nExperience building and deploying production-grade AI and Machine Learning solutions.\nExperience developing REST APIs and model-serving applications using:\nFlask\nFastAPI\nHands-on experience with:\nDocker\nMicroservices Architecture\nCI/CD Pipelines\nGit Version Control\nExperience working with cloud platforms including:\nMicrosoft Azure\nAmazon Web Services (AWS)\nGoogle Cloud Platform (GCP)\nAzure Machine Learning\nAWS SageMaker\nStrong analytical thinking, debugging, and problem-solving capabilities.\nExcellent communication, stakeholder management, and collaboration skills.\nAbility to convert business challenges into scalable AI-powered solutions.\nStrong ownership mindset with focus on quality, security, scalability, and continuous improvement.\nPreferred Qualifications\n\nExperience with:\nLarge Language Models (LLMs)\nGenerative AI\nNatural Language Processing (NLP)\nComputer Vision\nHands-on experience with MLOps platforms including:\nMLflow\nKubeflow\nApache Airflow\nAzure Machine Learning\nAWS SageMaker\nFamiliarity with Big Data technologies including:\nApache Spark\nHadoop\nUnderstanding of:\nResponsible AI\nAI Ethics\nBias Detection\nExplainable AI (XAI)\nAI Governance\nExperience deploying scalable cloud-native AI services using containerized and microservices architectures.\nExperience working in Agile and Scrum delivery environments.\nDomain experience within Manufacturing, Automotive, Supply Chain, Quality Engineering, Financial Services, Healthcare, or Enterprise Analytics is highly preferred."

export const InsightsPanel = ({ data, activeSection }: { data: ResumeData; activeSection: string }) => {
  const { atsScore, keywordScore, formattingScore, impactScore, keywords } = useATSScore(data);

  const [appliedIds, setAppliedIds] = React.useState<Set<string>>(new Set());

  const [jobDescription, setJobDescription] = React.useState(TEMP_JD);

  const handleJdSubmit = async () => {
    if (jobDescription) {
      try {
          const [response, error] = await apiService.getAtsScore(RESUME_ID, jobDescription);
          console.log("analysis result", response);
          console.log("analysis error", error);
          if(response?.data?.analysisId) {
            const [suggRes, suggError] = await apiService.getSuggestions(RESUME_ID, response?.data?.analysisId, "experience");
            console.log("suggestion response", suggRes);
            console.log("suggestion error", suggError);
          }
      } catch (err) {
        console.error('Failed to score job description', err);
      }
    }
  }

  const suggestions = React.useMemo(() => getSectionSuggestions(activeSection, data), [activeSection, data]);

  const handleApply = (suggestion: ReturnType<typeof getSectionSuggestions>[number]) => {
    
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
          value={jobDescription}
          onChange={event => setJobDescription(event.target.value)}
        />
        <div className=''>
          <Button variant="block" size="xs" onClick={handleJdSubmit}>
            <RefreshCcw size={15} /> Analyse against Job Description
          </Button>
        </div>
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