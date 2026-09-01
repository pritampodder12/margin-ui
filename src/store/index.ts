// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import resumeReducer from './resumeSlice';
import atsAnalysisReduces from './atsAnalysisSlice';

export const store = configureStore({
  reducer: { resume: resumeReducer, atsAnalysis: atsAnalysisReduces },
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;