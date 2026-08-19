import { nanoid } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import type { Experience, Education } from '@/store/resumeTypes';
import {
  addExperience as addExperienceAction,
  updateExperience as updateExperienceAction,
  removeExperience,
  addEducation as addEducationAction,
  updateEducation as updateEducationAction,
  removeEducation,
  updateSkills,
  updateContact,
  updateCandidateInfo,
} from '@/store/resumeSlice';

/**
 * Wraps every resume-editing dispatch in a plain function so components
 * don't need to know about action creators or payload shapes.
 */
export function useResumeActions() {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.resume);

  const addExperience = () => dispatch(addExperienceAction());
  const addEducation = () => dispatch(addEducationAction());

  const addSkill = () =>
    dispatch(
      updateSkills([
        ...data.skills,
        {
          id: nanoid(),
          name: '',
          category: '',
          proficiencyLevel: 0,
          yearsOfExperience: 0,
          description: [],
          sortOrder: data.skills.length + 1,
        },
      ])
    );

  const addNamedSkill = (name: string) =>
    dispatch(
      updateSkills([
        ...data.skills,
        {
          id: nanoid(),
          name,
          category: '',
          proficiencyLevel: 0,
          yearsOfExperience: 0,
          description: [],
          sortOrder: data.skills.length + 1,
        },
      ])
    );

  const updateExperience = (id: string, updates: Partial<Experience>) =>
    dispatch(updateExperienceAction({ id, updates }));

  const updateEducation = (id: string, updates: Partial<Education>) =>
    dispatch(updateEducationAction({ id, updates }));

  const deleteExperience = (id: string) => dispatch(removeExperience(id));
  const deleteEducation = (id: string) => dispatch(removeEducation(id));

  // Keyed by id, not index — indices drift when skills are added/removed
  const updateSkillName = (id: string, value: string) => {
    dispatch(
      updateSkills(data.skills.map((skill) => (skill.id === id ? { ...skill, name: value } : skill)))
    );
  };

  const deleteSkill = (id: string) => {
    dispatch(updateSkills(data.skills.filter((skill) => skill.id !== id)));
  };

  const updateCandidateName = (candidateName: string) => dispatch(updateCandidateInfo({ candidateName }));
  const updateObjective = (objective: string) => dispatch(updateCandidateInfo({ objective }));
  const updateEmail = (email: string) => dispatch(updateContact({ email }));

  return {
    addExperience,
    addEducation,
    addSkill,
    addNamedSkill,
    updateExperience,
    updateEducation,
    deleteExperience,
    deleteEducation,
    updateSkillName,
    deleteSkill,
    updateCandidateName,
    updateObjective,
    updateEmail,
  };
}
