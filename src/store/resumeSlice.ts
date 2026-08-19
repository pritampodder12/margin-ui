// src/store/resumeSlice.ts
import { createSlice, createAsyncThunk, type PayloadAction, nanoid } from '@reduxjs/toolkit';
import apiService from '@/lib/http/ApiService';
import type {
  ResumeData, Experience, Education, Certification, Project, Skill, ContactInfo
} from '@/store/resumeTypes';

export type BuilderTemplateId = 'ledger' | 'northline' | 'compass';

export interface ResumeState {
  data: ResumeData;
  builderTemplateId: BuilderTemplateId; // the app's own layout picker, kept separate
  parseError: string | null;
  parseStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const emptyResume: ResumeData = {
  candidateName: '',
  title: '',
  objective: '',
  templateName: '',
  contact: { email: '', phone: '', linkedin: '' },
  education: [],
  experience: [],
  certifications: [],
  projects: [],
  skills: [],
};

const initialState: ResumeState = {
  data: emptyResume,
  builderTemplateId: 'ledger',
  parseError: null,
  parseStatus: 'idle',
};

// Only transformation left: tag each list item with a client-side id.
// Everything else is a straight passthrough of response.data.
// function withIds(raw: ResumeData): ResumeData {
//   return {
//     ...raw,
//     education: raw.education.map((e) => ({
//       ...e,
//       id: nanoid(),
//       location: e.location ?? '',
//       fieldOfStudy: e.fieldOfStudy ?? '',
//     })),
//     experience: raw.experience.map((e) => ({ ...e, id: nanoid() })),
//     certifications: raw.certifications?.map((c) => ({
//       ...c,
//       id: nanoid(),
//       issuingOrganization: c.issuingOrganization ?? '',
//     })) ?? [],
//     projects: raw.projects?.map((p) => ({ ...p, id: nanoid() })) ?? [],
//     skills: raw.skills.map((s) => ({ ...s, id: nanoid() })),
//   };
// }

export const parseResumeFromFile = createAsyncThunk(
  'resume/parseFromFile',
  async (file: File, { rejectWithValue }) => {
    const [response, error] = await apiService.parsePdf(file);
    if (error || !response.data) {
      return rejectWithValue('Could not parse this resume. Please try a different file.');
    }
    // console.log("data", withIds(response.data));
    return response.data; // response.data now matches ResumeData 1:1 (+ ids)
  }
);

export const saveNewResume = createAsyncThunk(
  'resume/saveNewResume',
  async (_, { getState, rejectWithValue }) => {
    let { resume } = getState() as { resume: ResumeState };
    const [response, error] = await apiService.createNewResume(resume.data);
    if (error || !response.data) {
      return rejectWithValue('Unable to create resume');
    }
    return response.data;
  }
)

export const fetchResumeById = createAsyncThunk(
  'resume/{:id}',
  async (id: string, { rejectWithValue }) => {
    const [response, error] = await apiService.getResumeById(id);
    if (error || !response.data) {
      return rejectWithValue('Unable to create resume');
    }
    return response.data;
  }
)

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<ResumeData>) {
      state.data = action.payload;
    },
    updateCandidateInfo(state, action: PayloadAction<{ candidateName?: string; title?: string; objective?: string }>) {
      Object.assign(state.data, action.payload);
    },
    updateContact(state, action: PayloadAction<Partial<ContactInfo>>) {
      Object.assign(state.data.contact, action.payload);
    },

    addExperience: {
      reducer(state, action: PayloadAction<Experience>) {
        state.data.experience.push(action.payload);
      },
      prepare(exp?: Partial<Experience>) {
        return {
          payload: {
            id: nanoid(),
            companyName: '', position: '', location: '',
            startDate: '', current: false, description: [], sortOrder: 0,
            ...exp,
          } as Experience,
        };
      },
    },
    updateExperience(state, action: PayloadAction<{ id: string; updates: Partial<Experience> }>) {
      const exp = state.data.experience.find(e => e.id === action.payload.id);
      if (exp) Object.assign(exp, action.payload.updates);
    },
    removeExperience(state, action: PayloadAction<string>) {
      state.data.experience = state.data.experience.filter(e => e.id !== action.payload);
    },

    addEducation: {
      reducer(state, action: PayloadAction<Education>) {
        state.data.education.push(action.payload);
      },
      prepare(edu?: Partial<Education>) {
        return {
          payload: {
            id: nanoid(),
            institutionName: '', degree: '', fieldOfStudy: '', location: '',
            startDate: '', current: false, description: [],
            ...edu,
          } as Education,
        };
      },
    },
    updateEducation(state, action: PayloadAction<{ id: string; updates: Partial<Education> }>) {
      const edu = state.data.education.find(e => e.id === action.payload.id);
      if (edu) Object.assign(edu, action.payload.updates);
    },
    removeEducation(state, action: PayloadAction<string>) {
      state.data.education = state.data.education.filter(e => e.id !== action.payload);
    },

    updateSkills(state, action: PayloadAction<Skill[]>) {
      state.data.skills = action.payload;
    },
    setBuilderTemplate(state, action: PayloadAction<BuilderTemplateId>) {
      state.builderTemplateId = action.payload;
    },
    resetResume(state) {
      state.data = emptyResume;
      state.parseError = null;
      state.parseStatus = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(parseResumeFromFile.pending, (state) => {
        state.parseStatus = 'loading';
        state.parseError = null;
      })
      .addCase(parseResumeFromFile.fulfilled, (state, action) => {
        state.parseStatus = 'succeeded';
        state.data = action.payload;
      })
      .addCase(parseResumeFromFile.rejected, (state, action) => {
        state.parseStatus = 'failed';
        state.parseError = (action.payload as string) ?? 'Parse failed';
      })
      .addCase(saveNewResume.fulfilled, (state, action) => {
        state.data.id = action.payload.id;
      })
      .addCase(fetchResumeById.fulfilled, (state, action) => {
        state.data = action.payload;
      });
  },
});

export const {
  setData, updateCandidateInfo, updateContact,
  addExperience, updateExperience, removeExperience,
  addEducation, updateEducation, removeEducation,
  updateSkills, setBuilderTemplate, resetResume,
} = resumeSlice.actions;

export default resumeSlice.reducer;