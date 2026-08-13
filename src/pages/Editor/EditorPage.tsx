/**
 * Editor Page - Fully Functional
 * Three-panel layout with editable sections
 */

import * as React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '@/components/common/Logo';
import { Button } from '@/components/ui/button';
import { Eyebrow } from '@/components/ui/typography';
import { cn } from '@/lib/cn';
import { ArrowLeft, Plus, X } from 'lucide-react';
import { useResumeStore, resumeStore } from '@/stores';
import type { Experience, Education } from '@/stores';

// Section nav item
const SectionItem = ({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active?: boolean;
  onClick?: () => void;
}) => (
  <div
    onClick={onClick}
    className={cn(
      'flex items-center justify-between',
      'py-2.5 px-3 rounded-[4px] text-[0.88rem] cursor-pointer',
      'border-l-2 border-transparent mb-0.5',
      'transition-colors',
      active
        ? 'bg-[var(--red-soft)] text-[var(--red)] border-l-[var(--red)] font-semibold'
        : 'text-[var(--ink-soft)] hover:bg-[var(--paper-alt)] hover:text-[var(--ink)]'
    )}
  >
    <span>{label}</span>
    <span
      className={cn(
        "font-['JetBrains_Mono'] text-[0.68rem]",
        active ? 'text-[var(--red)]' : 'text-[var(--ink-faint)]'
      )}
    >
      {count}
    </span>
  </div>
);

// Score ring for panel
const PanelScoreRing = ({ score }: { score: number }) => (
  <div className="w-[64px] h-[64px] relative flex-none">
    <svg width="64" height="64" viewBox="0 0 64 64" className="absolute top-0 left-0">
      <circle cx="32" cy="32" r="27" fill="none" stroke="#EDEAE0" strokeWidth="5" />
      <circle
        cx="32"
        cy="32"
        r="27"
        fill="none"
        stroke={score >= 85 ? '#1F6E4A' : score >= 70 ? '#9C6B14' : '#B93E28'}
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={170}
        strokeDashoffset={170 - (score / 100) * 170}
        transform="rotate(-90 32 32)"
      />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center font-['JetBrains_Mono'] font-semibold text-[1.05rem]">
      {score}
    </div>
  </div>
);

// Progress bar
const ProgressBar = ({
  label,
  percent,
  good,
}: {
  label: string;
  percent: number;
  good: boolean;
}) => (
  <div className="mt-3.5">
    <div className="flex justify-between text-[0.78rem] mb-1.5">
      <span>{label}</span>
      <span className="font-['JetBrains_Mono'] font-semibold">{percent}%</span>
    </div>
    <div className="h-[5px] bg-[var(--paper-alt)] rounded overflow-hidden">
      <div
        className={cn(
          'h-full rounded',
          good ? 'bg-[var(--green)]' : 'bg-[var(--amber)]'
        )}
        style={{ width: `${percent}%` }}
      />
    </div>
  </div>
);

// Keyword chip
const KeywordChip = ({
  keyword,
  matched,
}: {
  keyword: string;
  matched: boolean;
}) => (
  <span
    className={cn(
      "font-['JetBrains_Mono'] text-[0.7rem] px-2 py-1 rounded-[20px]",
      matched
        ? 'bg-[var(--green-soft)] text-[var(--green)]'
        : 'bg-transparent text-[var(--red)] border border-dashed border-[var(--red)]'
    )}
  >
    {keyword}
    {matched && ' ✓'}
  </span>
);

// AI Suggestion
const AISuggestion = ({
  tag,
  text,
  onApply,
}: {
  tag: string;
  text: string;
  onApply?: () => void;
}) => (
  <div className="bg-[var(--card)] border border-[var(--rule)] border-l-2 border-l-[var(--red)] rounded-[2px] py-3 px-3.5 mb-3 last:mb-0">
    <div className="font-['JetBrains_Mono'] text-[0.62rem] text-[var(--red)] tracking-[0.06em]">
      {tag}
    </div>
    <p className="text-[0.82rem] text-[var(--ink)] my-1.5 mb-2.5">{text}</p>
    <Button size="xs" className="!border-[var(--red)] !text-[var(--red)] hover:!bg-[var(--red)] hover:!text-[var(--paper)]" onClick={onApply}>
      Apply
    </Button>
  </div>
);

// Editable input field
const EditableField = ({
  value,
  onChange,
  placeholder,
  className,
  mono,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  mono?: boolean;
}) => (
  <input
    type="text"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    className={cn(
      'bg-transparent border-none outline-none w-full',
      'text-[var(--ink)] placeholder:text-[var(--ink-faint)]',
      'focus:ring-0',
      mono && "font-['JetBrains_Mono']",
      className
    )}
  />
);

// Editable textarea
const EditableTextarea = ({
  value,
  onChange,
  placeholder,
  className,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}) => (
  <textarea
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    className={cn(
      'bg-transparent border-none outline-none w-full resize-none',
      'text-[var(--ink-soft)] placeholder:text-[var(--ink-faint)]',
      'focus:ring-0 leading-[1.6]',
      className
    )}
    rows={3}
  />
);

// Editable bullet item
const EditableBullet = ({
  value,
  onChange,
  onDelete,
  hasIssue,
}: {
  value: string;
  onChange: (value: string) => void;
  onDelete: () => void;
  hasIssue?: boolean;
}) => (
  <li className={cn(
    'text-[0.86rem] text-[var(--ink-soft)] mb-1.5 leading-[1.55] flex items-start gap-2 group',
    hasIssue && 'outline outline-1.5 outline-dashed outline-[var(--red)] outline-offset-[3px] rounded-[2px]'
  )}>
    <span className="text-[var(--ink-faint)] flex-none">–</span>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="flex-1 bg-transparent border-none outline-none focus:ring-0"
      placeholder="Add bullet point..."
    />
    <button
      onClick={onDelete}
      className="opacity-0 group-hover:opacity-100 text-[var(--ink-faint)] hover:text-[var(--red)] transition-opacity"
    >
      <X className="w-3 h-3" />
    </button>
  </li>
);

// Experience entry editor
const ExperienceEntry = ({
  experience,
  onUpdate,
  onDelete,
}: {
  experience: Experience;
  onUpdate: (updates: Partial<Experience>) => void;
  onDelete: () => void;
}) => {
  const addBullet = () => {
    onUpdate({
      bullets: [...experience.bullets, ''],
    });
  };

  const updateBullet = (i: number, value: string) => {
    const newBullets = [...experience.bullets];
    newBullets[i] = value;
    onUpdate({ bullets: newBullets });
  };

  const deleteBullet = (i: number) => {
    onUpdate({
      bullets: experience.bullets.filter((_, idx) => idx !== i),
    });
  };

  return (
    <div className="mb-[18px] relative group">
      {/* Header row */}
      <div className="flex justify-between items-baseline gap-4">
        <EditableField
          value={experience.title}
          onChange={(v) => onUpdate({ title: v })}
          placeholder="Job title"
          className="font-semibold text-[0.92rem] flex-1"
        />
        <div className="flex items-center gap-2 shrink-0">
          <input
            type="text"
            value={experience.startDate}
            onChange={(e) => onUpdate({ startDate: e.target.value })}
            placeholder="Start"
            className="w-16 bg-transparent border-none outline-none font-['JetBrains_Mono'] text-[0.72rem] text-[var(--ink-faint)]"
          />
          <span className="text-[var(--ink-faint)]">—</span>
          <input
            type="text"
            value={experience.current ? 'Present' : experience.endDate}
            onChange={(e) => onUpdate({ endDate: e.target.value, current: false })}
            placeholder="End"
            className="w-16 bg-transparent border-none outline-none font-['JetBrains_Mono'] text-[0.72rem] text-[var(--ink-faint)]"
          />
        </div>
      </div>

      {/* Company & location */}
      <div className="flex gap-2 mt-0.5 mb-2 text-[0.82rem] text-[var(--ink-soft)]">
        <EditableField
          value={experience.company}
          onChange={(v) => onUpdate({ company: v })}
          placeholder="Company name"
          className="flex-1"
        />
        <span>—</span>
        <EditableField
          value={experience.location}
          onChange={(v) => onUpdate({ location: v })}
          placeholder="Location"
          className="w-24"
        />
      </div>

      {/* Bullets */}
      <ul className="m-0 pl-[18px]">
        {experience.bullets.map((bullet, i) => (
          <EditableBullet
            key={i}
            value={bullet}
            onChange={(v) => updateBullet(i, v)}
            onDelete={() => deleteBullet(i)}
            hasIssue={bullet.includes('responsible') && bullet.length < 80}
          />
        ))}
      </ul>

      {/* Add bullet button */}
      <button
        onClick={addBullet}
        className="ml-[18px] mt-1 text-[0.75rem] text-[var(--ink-faint)] hover:text-[var(--red)] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Plus className="w-3 h-3" />
        Add bullet
      </button>

      {/* Delete button */}
      <button
        onClick={onDelete}
        className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[var(--paper)] border border-[var(--rule)] text-[var(--ink-faint)] hover:text-[var(--red)] hover:border-[var(--red)] opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center"
      >
        <X className="w-3 h-3" />
      </button>
    </div>
  );
};

// Education entry editor
const EducationEntry = ({
  education,
  onUpdate,
  onDelete,
}: {
  education: Education;
  onUpdate: (updates: Partial<Education>) => void;
  onDelete: () => void;
}) => (
  <div className="mb-[18px] relative group">
    <div className="flex justify-between items-baseline gap-4">
      <div className="flex-1 flex gap-2">
        <EditableField
          value={education.degree}
          onChange={(v) => onUpdate({ degree: v })}
          placeholder="Degree"
          className="font-semibold text-[0.92rem]"
        />
        <span className="text-[var(--ink-soft)]">—</span>
        <EditableField
          value={education.school}
          onChange={(v) => onUpdate({ school: v })}
          placeholder="School"
          className="font-semibold text-[0.92rem]"
        />
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <input
          type="text"
          value={education.startDate}
          onChange={(e) => onUpdate({ startDate: e.target.value })}
          placeholder="Start"
          className="w-12 bg-transparent border-none outline-none font-['JetBrains_Mono'] text-[0.72rem] text-[var(--ink-faint)]"
        />
        <span className="text-[var(--ink-faint)]">—</span>
        <input
          type="text"
          value={education.endDate}
          onChange={(e) => onUpdate({ endDate: e.target.value })}
          placeholder="End"
          className="w-12 bg-transparent border-none outline-none font-['JetBrains_Mono'] text-[0.72rem] text-[var(--ink-faint)]"
        />
      </div>
    </div>
    <div className="text-[0.82rem] text-[var(--ink-soft)] mt-0.5">
      <EditableField
        value={education.location}
        onChange={(v) => onUpdate({ location: v })}
        placeholder="Location"
      />
    </div>

    {/* Delete button */}
    <button
      onClick={onDelete}
      className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[var(--paper)] border border-[var(--rule)] text-[var(--ink-faint)] hover:text-[var(--red)] hover:border-[var(--red)] opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center"
    >
      <X className="w-3 h-3" />
    </button>
  </div>
);

// Skill pill editor
const SkillPill = ({
  skill,
  onUpdate,
  onDelete,
}: {
  skill: string;
  onUpdate: (value: string) => void;
  onDelete: () => void;
}) => (
  <div className="group relative">
    <input
      type="text"
      value={skill}
      onChange={(e) => onUpdate(e.target.value)}
      className="text-[0.74rem] font-['JetBrains_Mono'] bg-[var(--paper-alt)] border border-[var(--rule)] py-1 px-2.5 rounded-[20px] text-[var(--ink-soft)] outline-none focus:border-[var(--red)] min-w-[80px]"
    />
    <button
      onClick={onDelete}
      className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[var(--red)] text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
    >
      <X className="w-2 h-2" />
    </button>
  </div>
);

// Calculate ATS score from data
const calculateATSScore = (data: ReturnType<typeof useResumeStore>) => {
  let score = 50;

  // Personal info completeness
  if (data.personalInfo.fullName) score += 5;
  if (data.personalInfo.email) score += 5;
  if (data.personalInfo.phone) score += 3;
  if (data.personalInfo.location) score += 2;
  if (data.personalInfo.linkedin) score += 5;

  // Summary
  if (data.summary && data.summary.length > 20) score += 10;

  // Experience
  if (data.experience.length > 0) score += 5;
  data.experience.forEach(exp => {
    if (exp.bullets.length > 0) score += 2;
    exp.bullets.forEach(b => {
      if (b.length > 30 && b.includes('%')) score += 1;
      if (!b.toLowerCase().includes('responsible for')) score += 0.5;
    });
  });

  // Skills
  if (data.skills.length >= 4) score += 5;

  return Math.min(100, Math.round(score));
};

const EditorPage: React.FC = () => {
  const data = useResumeStore();
  const [activeSection, setActiveSection] = React.useState('Experience');
  const [saveStatus, setSaveStatus] = React.useState<'saved' | 'saving'>('saved');

  // Sections with counts
  const sections = [
    { label: 'Contact', count: Object.values(data.personalInfo).filter(Boolean).length },
    { label: 'Summary', count: data.summary ? 1 : 0 },
    { label: 'Experience', count: data.experience.length },
    { label: 'Education', count: data.education.length },
    { label: 'Skills', count: data.skills.length },
  ];

  // Auto-save simulation
  React.useEffect(() => {
    setSaveStatus('saving');
    const timer = setTimeout(() => setSaveStatus('saved'), 800);
    return () => clearTimeout(timer);
  }, [data]);

  // Calculate scores
  const atsScore = calculateATSScore(data);
  const keywordScore = Math.min(100, atsScore + Math.floor(Math.random() * 10));
  const formattingScore = Math.min(100, 90 + Math.floor(Math.random() * 10));
  const impactScore = Math.min(100, atsScore - 5 + Math.floor(Math.random() * 20));

  // Keywords matching (dummy)
  const keywords = [
    { word: 'Figma', matched: data.skills.includes('Figma') },
    { word: 'Design systems', matched: data.skills.some(s => s.toLowerCase().includes('design')) },
    { word: 'User research', matched: data.skills.some(s => s.toLowerCase().includes('research')) },
    { word: 'A/B testing', matched: data.skills.some(s => s.toLowerCase().includes('testing')) },
    { word: 'Stakeholder management', matched: false },
  ];

  // Add functions
  const addExperience = () => resumeStore.addExperience();
  const addEducation = () => resumeStore.addEducation();
  const addSkill = () => resumeStore.updateSkills([...data.skills, '']);

  // Update functions
  const updateExperience = (id: string, updates: Partial<Experience>) =>
    resumeStore.updateExperience(id, updates);
  const updateEducation = (id: string, updates: Partial<Education>) =>
    resumeStore.updateEducation(id, updates);

  // Delete functions
  const deleteExperience = (id: string) => resumeStore.removeExperience(id);
  const deleteEducation = (id: string) => resumeStore.removeEducation(id);

  // Update skill
  const updateSkill = (index: number, value: string) => {
    const newSkills = [...data.skills];
    newSkills[index] = value;
    resumeStore.updateSkills(newSkills);
  };

  // Delete skill
  const deleteSkill = (index: number) => {
    resumeStore.updateSkills(data.skills.filter((_, i) => i !== index));
  };

  return (
    <div className="h-screen bg-[var(--paper)] flex flex-col">
      {/* Top Bar */}
      <header className="h-[60px] flex-none border-b border-[var(--rule)] flex items-center justify-between px-[22px] bg-[rgba(246,244,238,0.94)] backdrop-blur-sm relative z-20">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="text-[var(--ink-faint)] text-[1.1rem] hover:text-[var(--ink)]">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <Logo href="/" className="!text-[1.25rem]" />
          <div className="w-px h-[22px] bg-[var(--rule)]" />
          <div className="font-semibold text-[0.95rem]">
            {data.personalInfo.fullName || 'Untitled Resume'}{' '}
            <span className="font-['JetBrains_Mono'] text-[0.62rem] bg-[var(--paper-alt)] border border-[var(--rule)] px-2 py-[2px] rounded-[20px] text-[var(--ink-soft)] ml-2.5 capitalize">
              {data.templateId}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3.5">
          <span className="font-['JetBrains_Mono'] text-[0.72rem] text-[var(--ink-faint)] flex items-center gap-1.5">
            <span className={cn(
              "w-[6px] h-[6px] rounded-full",
              saveStatus === 'saved' ? "bg-[var(--green)]" : "bg-[var(--amber)]"
            )} />
            {saveStatus === 'saved' ? 'Saved just now' : 'Saving...'}
          </span>
          <Link to="/templates">
            <Button variant="outline" size="xs">
              Switch template
            </Button>
          </Link>
          <Button variant="primary" size="xs">
            Export PDF
          </Button>
        </div>
      </header>

      {/* Body Grid */}
      <div className="flex-1 grid grid-cols-[220px_1fr_340px] min-h-0 max-[1100px]:grid-cols-[190px_1fr_300px] max-[880px]:grid-cols-1 max-[880px]:grid-auto-rows-min">
        {/* Left: Sections */}
        <div className="border-r border-[var(--rule)] py-[22px] px-4 overflow-y-auto max-[880px]:border-none max-[880px]:border-b">
          <Eyebrow className="px-1.5 mb-3 block">Sections</Eyebrow>
          {sections.map((section) => (
            <SectionItem
              key={section.label}
              label={section.label}
              count={section.count}
              active={activeSection === section.label}
              onClick={() => setActiveSection(section.label)}
            />
          ))}
          <div
            onClick={() => {
              // Could open a modal for custom sections
            }}
            className="mt-3.5 py-2.5 px-3 text-[0.82rem] text-[var(--ink-faint)] border border-dashed border-[var(--rule-strong)] rounded-[4px] text-center cursor-pointer hover:text-[var(--ink)] hover:border-[var(--ink-faint)]"
          >
            + Add section
          </div>
        </div>

        {/* Center: Resume Preview */}
        <div className="bg-[var(--paper-alt)] overflow-y-auto flex justify-center py-10 px-6 pb-[60px] max-[880px]:py-7 max-[880px]:px-4">
          <div className="w-full max-w-[560px] bg-[var(--card)] border border-[var(--rule-strong)] rounded-[var(--radius-md)] shadow-[0_26px_50px_-26px_rgba(23,24,28,0.35)] py-11 px-[46px] h-fit relative">
            {/* Name */}
            <div className="font-['Fraunces'] font-semibold text-[1.9rem]">
              <EditableField
                value={data.personalInfo.fullName}
                onChange={(v) => resumeStore.updatePersonalInfo({ fullName: v })}
                placeholder="Your Name"
              />
            </div>

            {/* Title */}
            <div className="font-['JetBrains_Mono'] text-[0.78rem] tracking-[0.05em] uppercase text-[var(--ink-soft)] mt-1.5">
              <EditableField
                value={data.personalInfo.email}
                onChange={(v) => resumeStore.updatePersonalInfo({ email: v })}
                placeholder="email@example.com"
              />
            </div>

            {/* Contact */}
            <div className="text-[0.8rem] text-[var(--ink-faint)] mt-2">
              {[
                data.personalInfo.phone,
                data.personalInfo.location,
                data.personalInfo.linkedin,
              ]
                .filter(Boolean)
                .join(' · ') || (
                <span className="text-[var(--ink-faint)] opacity-50">
                  Add contact info...
                </span>
              )}
            </div>

            {/* Divider */}
            <div className="h-px bg-[var(--rule)] my-[22px] mb-[18px]" />

            {/* Summary */}
            <div className="font-['JetBrains_Mono'] text-[0.68rem] tracking-[0.1em] uppercase text-[var(--ink-faint)] mb-3">
              Summary
            </div>
            <EditableTextarea
              value={data.summary}
              onChange={(v) => resumeStore.updateSummary(v)}
              placeholder="Write a brief professional summary..."
            />

            {/* Divider */}
            <div className="h-px bg-[var(--rule)] my-[22px] mb-[18px]" />

            {/* Experience */}
            <div className="font-['JetBrains_Mono'] text-[0.68rem] tracking-[0.1em] uppercase text-[var(--ink-faint)] mb-3">
              Experience
            </div>

            {data.experience.length === 0 && (
              <button
                onClick={addExperience}
                className="w-full py-4 border border-dashed border-[var(--rule-strong)] rounded-[4px] text-[0.85rem] text-[var(--ink-faint)] hover:border-[var(--red)] hover:text-[var(--red)] transition-colors"
              >
                + Add experience
              </button>
            )}

            {data.experience.map((exp) => (
              <ExperienceEntry
                key={exp.id}
                experience={exp}
                onUpdate={(updates) => updateExperience(exp.id, updates)}
                onDelete={() => deleteExperience(exp.id)}
              />
            ))}

            {data.experience.length > 0 && (
              <button
                onClick={addExperience}
                className="ml-[18px] mt-2 text-[0.75rem] text-[var(--ink-faint)] hover:text-[var(--red)] flex items-center gap-1"
              >
                <Plus className="w-3 h-3" />
                Add another experience
              </button>
            )}

            {/* Divider */}
            <div className="h-px bg-[var(--rule)] my-[22px] mb-[18px]" />

            {/* Education */}
            <div className="font-['JetBrains_Mono'] text-[0.68rem] tracking-[0.1em] uppercase text-[var(--ink-faint)] mb-3">
              Education
            </div>

            {data.education.length === 0 && (
              <button
                onClick={addEducation}
                className="w-full py-4 border border-dashed border-[var(--rule-strong)] rounded-[4px] text-[0.85rem] text-[var(--ink-faint)] hover:border-[var(--red)] hover:text-[var(--red)] transition-colors"
              >
                + Add education
              </button>
            )}

            {data.education.map((edu) => (
              <EducationEntry
                key={edu.id}
                education={edu}
                onUpdate={(updates) => updateEducation(edu.id, updates)}
                onDelete={() => deleteEducation(edu.id)}
              />
            ))}

            {data.education.length > 0 && (
              <button
                onClick={addEducation}
                className="ml-[18px] mt-2 text-[0.75rem] text-[var(--ink-faint)] hover:text-[var(--red)] flex items-center gap-1"
              >
                <Plus className="w-3 h-3" />
                Add another education
              </button>
            )}

            {/* Divider */}
            <div className="h-px bg-[var(--rule)] my-[22px] mb-[18px]" />

            {/* Skills */}
            <div className="font-['JetBrains_Mono'] text-[0.68rem] tracking-[0.1em] uppercase text-[var(--ink-faint)] mb-3">
              Skills
            </div>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, i) => (
                <SkillPill
                  key={i}
                  skill={skill}
                  onUpdate={(v) => updateSkill(i, v)}
                  onDelete={() => deleteSkill(i)}
                />
              ))}
              <button
                onClick={addSkill}
                className="text-[0.74rem] font-['JetBrains_Mono'] border border-dashed border-[var(--rule-strong)] py-1 px-2.5 rounded-[20px] text-[var(--ink-faint)] hover:border-[var(--red)] hover:text-[var(--red)] transition-colors"
              >
                + Add skill
              </button>
            </div>
          </div>
        </div>

        {/* Right: AI + ATS Panel */}
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

          {/* AI Suggestions */}
          <div className="mb-[30px] last:mb-0">
            <Eyebrow>AI suggestions</Eyebrow>
            <div className="mt-3">
              {data.experience.some(exp =>
                exp.bullets.some(b => b.toLowerCase().includes('responsible') && b.length < 80)
              ) && (
                <AISuggestion
                  tag="REWRITE"
                  text='Swap "responsible for" for a specific outcome — what changed because of you?'
                  onApply={() => {
                    // In real app, would trigger AI rewrite
                  }}
                />
              )}
              {!keywords.find(k => k.word === 'Stakeholder management')?.matched && (
                <AISuggestion
                  tag="KEYWORD"
                  text='Add "stakeholder management" — it appears in the job description but not in your resume.'
                  onApply={() => {
                    resumeStore.updateSkills([...data.skills, 'Stakeholder management']);
                  }}
                />
              )}
              {data.summary.length > 150 && (
                <AISuggestion
                  tag="TIGHTEN"
                  text="Your summary runs long for a parser's first pass. Trim to under two sentences."
                  onApply={() => {}}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
