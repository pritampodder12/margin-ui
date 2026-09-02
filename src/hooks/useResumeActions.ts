import { nanoid } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import type { Experience, Education, Skill, Project, Certification } from '@/store/resumeTypes';
import {
  addExperience as addExperienceAction,
  updateExperience as updateExperienceAction,
  removeExperience,
  addEducation as addEducationAction,
  updateEducation as updateEducationAction,
  removeEducation,
  addProject as addProjectAction,
  updateProject as updateProjectAction,
  removeProject,
  addCertification as addCertificationAction,
  updateCertification as updateCertificationAction,
  removeCertification,
  updateSkills,
  updateContact,
  updateCandidateInfo,
} from '@/store/resumeSlice';

export function useResumeActions() {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.resume);

  const addExperience = () => dispatch(addExperienceAction());
  const addEducation = () => dispatch(addEducationAction());
  const addProject = () => dispatch(addProjectAction());
  const addCertification = () => dispatch(addCertificationAction());

  const addSkill = (category: string, name = '') => {
    const sameCategory = data.skills.filter((s) => (s.category || 'Uncategorized') === category);
    const newSkill: Skill = {
      id: nanoid(),
      name,
      category,
      proficiencyLevel: 0,
      yearsOfExperience: 0,
      description: [],
      sortOrder: sameCategory.length + 1,
    };
    dispatch(updateSkills([...data.skills, newSkill]));
  };

  const updateSkillName = (id: string, value: string) => {
    dispatch(
      updateSkills(data.skills.map((skill) => (skill.id === id ? { ...skill, name: value } : skill)))
    );
  };

  const deleteSkill = (id: string) => {
    dispatch(updateSkills(data.skills.filter((skill) => skill.id !== id)));
  };

  const addCategory = (category: string) => {
    const trimmed = category.trim();
    if (!trimmed) return;
    const exists = data.skills.some((s) => (s.category || 'Uncategorized') === trimmed);
    if (exists) return;
    // Empty categories with no skills yet don't exist in a flat array,
    // so we create a placeholder skill to represent the new category.
    const placeholder: Skill = {
      id: nanoid(),
      name: '',
      category: trimmed,
      proficiencyLevel: 0,
      yearsOfExperience: 0,
      description: [],
      sortOrder: 1,
    };
    dispatch(updateSkills([...data.skills, placeholder]));
  };

  const renameCategory = (oldName: string, newName: string) => {
    const trimmed = newName.trim();
    if (!trimmed || trimmed === oldName) return;
    const clash = data.skills.some((s) => (s.category || 'Uncategorized') === trimmed);
    if (clash) return;
    dispatch(
      updateSkills(
        data.skills.map((skill) =>
          (skill.category || 'Uncategorized') === oldName ? { ...skill, category: trimmed } : skill
        )
      )
    );
  };

  const deleteCategory = (category: string) => {
    dispatch(
      updateSkills(data.skills.filter((skill) => (skill.category || 'Uncategorized') !== category))
    );
  };

  const updateExperience = (id: string, updates: Partial<Experience>) =>
    dispatch(updateExperienceAction({ id, updates }));

  const updateEducation = (id: string, updates: Partial<Education>) =>
    dispatch(updateEducationAction({ id, updates }));

  const updateProject = (id: string, updates: Partial<Project>) =>
    dispatch(updateProjectAction({ id, updates }));

  const updateCertification = (id: string, updates: Partial<Certification>) =>
    dispatch(updateCertificationAction({ id, updates }));

  const deleteExperience = (id: string) => dispatch(removeExperience(id));
  const deleteEducation = (id: string) => dispatch(removeEducation(id));
  const deleteProject = (id: string) => dispatch(removeProject(id));
  const deleteCertification = (id: string) => dispatch(removeCertification(id));

  const updateCandidateName = (candidateName: string) => dispatch(updateCandidateInfo({ candidateName }));
  const updateObjective = (objective: string) => dispatch(updateCandidateInfo({ objective }));
  const updateEmail = (email: string) => dispatch(updateContact({ email }));

  return {
    addExperience,
    addEducation,
    addProject,
    addCertification,
    addSkill,
    addCategory,
    renameCategory,
    deleteCategory,
    updateExperience,
    updateEducation,
    updateProject,
    updateCertification,
    deleteExperience,
    deleteEducation,
    deleteProject,
    deleteCertification,
    updateSkillName,
    deleteSkill,
    updateCandidateName,
    updateObjective,
    updateEmail,
  };
}
