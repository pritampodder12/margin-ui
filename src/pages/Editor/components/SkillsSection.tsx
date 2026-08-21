import * as React from 'react';
import type { ResumeData } from '@/store/resumeTypes';
import { useResumeActions } from '@/hooks/useResumeActions';
import { SkillPill } from './SkillPill';
import { cn } from '@/lib/cn';

export const SkillsSection = ({ data }: { data: ResumeData }) => {
  const { addSkill, addCategory, renameCategory, deleteCategory, updateSkillName, deleteSkill } =
    useResumeActions();
  const [newCategory, setNewCategory] = React.useState('');
  const [collapsed, setCollapsed] = React.useState<Set<string>>(new Set());

  const toggleCategory = (category: string) => {
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  const handleAddCategory = () => {
    if (!newCategory.trim()) return;
    addCategory(newCategory);
    setNewCategory('');
  };

  return (
    <div className="bg-[var(--card)] border border-[var(--rule)] rounded-[var(--radius-md)] p-4">
      {Object.entries(data.skills).map(([category, items]) => {
        const isOpen = !collapsed.has(category);

        return (
          <div
            key={category}
            className="bg-[var(--card)] border border-[var(--rule)] rounded-[var(--radius-md)] mb-3"
          >
            <button
              type="button"
              onClick={() => toggleCategory(category)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-3 py-3 px-4 text-left"
            >
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <i
                  className={cn(
                    'ti ti-chevron-right text-[var(--ink-faint)] transition-transform shrink-0',
                    isOpen && 'rotate-90'
                  )}
                  aria-hidden="true"
                />
                <input
                  value={category}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => renameCategory(category, e.target.value)}
                  className="text-[0.92rem] font-semibold text-[var(--ink)] bg-transparent border-none outline-none min-w-0 flex-1"
                />
                <span className="font-['JetBrains_Mono'] text-[0.7rem] text-[var(--ink-faint)] shrink-0">
                  {items.length}
                </span>
              </div>
              <span
                role="button"
                tabIndex={0}
                onClick={(e) => {
                  e.stopPropagation();
                  deleteCategory(category);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.stopPropagation();
                    deleteCategory(category);
                  }
                }}
                aria-label={`Delete ${category} category`}
                className="text-[var(--ink-faint)] hover:text-[var(--red)] transition-colors shrink-0"
              >
                <i className="ti ti-trash" aria-hidden="true" />
              </span>
            </button>

            {isOpen && (
              <div className="flex flex-wrap gap-2 items-center px-4 pb-4">
                {items.map((item, index) => (
                  <SkillPill
                    key={`${category}-${index}`}
                    skill={item.name}
                    onUpdate={(v) => updateSkillName(category, index, v)}
                    onDelete={() => deleteSkill(category, index)}
                  />
                ))}
                <button
                  type="button"
                  onClick={() => addSkill(category)}
                  className="text-[0.74rem] font-['JetBrains_Mono'] border border-dashed border-[var(--rule-strong)] py-1 px-2.5 rounded-[20px] text-[var(--ink-faint)] hover:border-[var(--red)] hover:text-[var(--red)] transition-colors"
                >
                  + Add skill
                </button>
              </div>
            )}
          </div>
        );
      })}

      <div className="flex items-center gap-2">
        <input
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAddCategory()}
          placeholder="New category name"
          className="text-[0.85rem] bg-transparent border border-dashed border-[var(--rule-strong)] rounded-[var(--radius-md)] py-1.5 px-3 outline-none min-w-0 flex-1"
        />
        <button
          type="button"
          onClick={handleAddCategory}
          className="text-[0.74rem] font-['JetBrains_Mono'] border border-dashed border-[var(--rule-strong)] py-1 px-2.5 rounded-[20px] text-[var(--ink-faint)] hover:border-[var(--red)] hover:text-[var(--red)] transition-colors"
        >
          + Add category
        </button>
      </div>
    </div>
  );
};