import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AtsAnalysisData, SectionType, SuggestionsData, SuggestionSectionData } from "./resumeTypes";

export interface AtsAnalysisState {
    atsAnalysisData: AtsAnalysisData,
    suggestionsData: SuggestionsData,
    jobDescription: string
}

const initialState: AtsAnalysisState = {
    atsAnalysisData: {
        analysisId: '',
        atsScore: {
            formatting: 0, impact: 0, keyword: 0, overall: 0
        },
        extractedKeywords: []
    },
    suggestionsData: {},
    jobDescription: "You will join our high performance Data & AI team and play a key role in designing, developing, deploying, and maintaining enterprise-grade Artificial Intelligence solutions that drive business innovation, intelligent automation, and digital transformation.\n\nDesign, develop, train, and deploy AI and Machine Learning models to solve real-world business problems.\nBuild intelligent AI solutions including:\nPredictive Analytics\nClassification Models\nRecommendation Systems\nIntelligent Automation\nDecision Support Systems\nApply supervised and unsupervised machine learning techniques based on business requirements.\nEvaluate, validate, and optimize AI models to improve accuracy, robustness, scalability, and business value.\nWork with structured and unstructured datasets to prepare data for AI model training, validation, and inference.\nDesign and optimize data pipelines supporting AI and machine learning workflows.\nPerform feature engineering, data transformation, cleansing, and validation activities.\nUtilize Python, SQL, NumPy, Pandas, and related libraries to process and analyze large-scale datasets.\nDeploy AI models using REST APIs, microservices, and cloud-native deployment architectures.\nDevelop scalable model-serving APIs using Flask, FastAPI, or similar frameworks.\nUtilize Docker and CI/CD pipelines to enable automated, secure, and repeatable AI deployments.\nEnsure deployed AI solutions meet enterprise standards for scalability, reliability, performance, security, and maintainability.\nMonitor model performance, prediction quality, model drift, data quality, and retraining requirements.\nTroubleshoot production issues related to AI models, inference services, APIs, and data pipelines.\nDocument AI models, technical designs, assumptions, experiments, and deployment procedures.\nApply Responsible AI principles including fairness, explainability, bias mitigation, governance, and ethical AI practices.\nCollaborate with Product Managers, Data Engineers, Software Engineers, Data Scientists, and Business Stakeholders to deliver enterprise AI solutions.\nTranslate complex business requirements into scalable AI-driven applications and intelligent automation solutions.\nParticipate in Agile ceremonies, architecture discussions, code reviews, and continuous improvement initiatives.\nStay updated with emerging technologies in Artificial Intelligence, Machine Learning, Generative AI, and Cloud Computing.\nWhat We Seek In You\n\n3+ years of experience in Artificial Intelligence, Machine Learning, Applied AI, or AI Engineering.\nBachelor's or Master's degree in Computer Science, Artificial Intelligence, Data Science, Engineering, or a related discipline.\nStrong programming expertise in:\nPython (Mandatory)\nSQL\nExposure to Java, C++, or Scala is an added advantage.\nStrong understanding of:\nSupervised Learning\nUnsupervised Learning\nFeature Engineering\nModel Evaluation\nModel Validation\nPredictive Analytics\nHands-on experience with Deep Learning frameworks including:\nTensorFlow\nPyTorch\nKeras\nStrong expertise working with:\nNumPy\nPandas\nSQL\nStructured and Unstructured Data\nExperience building and deploying production-grade AI and Machine Learning solutions.\nExperience developing REST APIs and model-serving applications using:\nFlask\nFastAPI\nHands-on experience with:\nDocker\nMicroservices Architecture\nCI/CD Pipelines\nGit Version Control\nExperience working with cloud platforms including:\nMicrosoft Azure\nAmazon Web Services (AWS)\nGoogle Cloud Platform (GCP)\nAzure Machine Learning\nAWS SageMaker\nStrong analytical thinking, debugging, and problem-solving capabilities.\nExcellent communication, stakeholder management, and collaboration skills.\nAbility to convert business challenges into scalable AI-powered solutions.\nStrong ownership mindset with focus on quality, security, scalability, and continuous improvement.\nPreferred Qualifications\n\nExperience with:\nLarge Language Models (LLMs)\nGenerative AI\nNatural Language Processing (NLP)\nComputer Vision\nHands-on experience with MLOps platforms including:\nMLflow\nKubeflow\nApache Airflow\nAzure Machine Learning\nAWS SageMaker\nFamiliarity with Big Data technologies including:\nApache Spark\nHadoop\nUnderstanding of:\nResponsible AI\nAI Ethics\nBias Detection\nExplainable AI (XAI)\nAI Governance\nExperience deploying scalable cloud-native AI services using containerized and microservices architectures.\nExperience working in Agile and Scrum delivery environments.\nDomain experience within Manufacturing, Automotive, Supply Chain, Quality Engineering, Financial Services, Healthcare, or Enterprise Analytics is highly preferred."
}

const atsAnalysisSlice = createSlice({
    name: 'atsAnalysis',
    initialState,
    reducers: {
        setJobDescription(state, action: PayloadAction<string>) {
            state.jobDescription = action.payload;
        },
        setAtsAnalysisData(state, action: PayloadAction<AtsAnalysisData>) {
            state.atsAnalysisData = action.payload;
        },
        setSuggestionsData(state, action: PayloadAction<{ section: SectionType, suggestionData: SuggestionSectionData }>) {
            state.suggestionsData[action.payload.section] = action.payload.suggestionData;
        }
    }
})

export const {
    setJobDescription,
    setAtsAnalysisData,
    setSuggestionsData
} = atsAnalysisSlice.actions;

export default atsAnalysisSlice.reducer;