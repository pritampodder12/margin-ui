import { nanoid } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import type { Experience, Education, SkillItem } from '@/store/resumeTypes';
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

export function useResumeActions() {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.resume);

  const addExperience = () => dispatch(addExperienceAction());
  const addEducation = () => dispatch(addEducationAction());

  const addSkill = (category: string, name = '') => {
  const existing = data.skills[category] ?? [];
  const newSkill: SkillItem = {
    name,
    proficiencyLevel: 0,
    yearsOfExperience: 0,
    description: [],
    sortOrder: existing.length + 1,
  };
  dispatch(
    updateSkills({
      ...data.skills,
      [category]: [...existing, newSkill],
    })
  );
};

const updateSkillName = (category: string, index: number, value: string) => {
  const items = data.skills[category] ?? [];
  dispatch(
    updateSkills({
      ...data.skills,
      [category]: items.map((skill, i) => (i === index ? { ...skill, name: value } : skill)),
    })
  );
};

const deleteSkill = (category: string, index: number) => {
  const items = data.skills[category] ?? [];
  dispatch(
    updateSkills({
      ...data.skills,
      [category]: items.filter((_, i) => i !== index),
    })
  );
};

  const addCategory = (category: string) => {
    const trimmed = category.trim();
    if (!trimmed || data.skills[trimmed]) return;
    dispatch(updateSkills({ ...data.skills, [trimmed]: [] }));
  };

  const renameCategory = (oldName: string, newName: string) => {
    const trimmed = newName.trim();
    if (!trimmed || trimmed === oldName || data.skills[trimmed]) return;
    const { [oldName]: items, ...rest } = data.skills;
    dispatch(updateSkills({ ...rest, [trimmed]: items ?? [] }));
  };

  const deleteCategory = (category: string) => {
    const { [category]: _removed, ...rest } = data.skills;
    dispatch(updateSkills(rest));
  };

  const updateExperience = (id: string, updates: Partial<Experience>) =>
    dispatch(updateExperienceAction({ id, updates }));

  const updateEducation = (id: string, updates: Partial<Education>) =>
    dispatch(updateEducationAction({ id, updates }));

  const deleteExperience = (id: string) => dispatch(removeExperience(id));
  const deleteEducation = (id: string) => dispatch(removeEducation(id));

  const updateCandidateName = (candidateName: string) => dispatch(updateCandidateInfo({ candidateName }));
  const updateObjective = (objective: string) => dispatch(updateCandidateInfo({ objective }));
  const updateEmail = (email: string) => dispatch(updateContact({ email }));

  return {
    addExperience,
    addEducation,
    addSkill,
    addCategory,
    renameCategory,
    deleteCategory,
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