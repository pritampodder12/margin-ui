/**
 * Save Success Dialog
 * Shown after successful save with export option
 */

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Download, FileText } from 'lucide-react';
import { cn } from '@/lib/cn';

interface SaveSuccessDialogProps {
  isOpen: boolean;
  onClose: () => void;
  resumeName: string;
  onExport: () => void;
  onContinueEdit: () => void;
}

const SaveSuccessDialog: React.FC<SaveSuccessDialogProps> = ({
  isOpen,
  onClose,
  resumeName,
  onExport,
  onContinueEdit
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="relative bg-[var(--card)] border border-[var(--rule)] rounded-[var(--radius-md)] w-full max-w-sm mx-4 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Success Icon */}
        <div className="flex justify-center pt-8 pb-4">
          <div className={cn(
            "w-16 h-16 rounded-full flex items-center justify-center",
            "bg-[var(--green-soft)]"
          )}>
            <CheckCircle className="w-8 h-8 text-[var(--green)]" />
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pb-6 text-center">
          <h2 className="font-['Fraunces'] font-semibold text-[1.35rem] text-[var(--ink)]">
            Saved successfully!
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2 text-[var(--ink-soft)] text-[0.9rem]">
            <FileText className="w-4 h-4" />
            <span className="font-medium">{resumeName || 'Untitled Resume'}</span>
          </div>
          <p className="text-[var(--ink-faint)] text-[0.85rem] mt-4">
            Your resume has been saved. You can export it as a PDF or continue editing.
          </p>
        </div>

        {/* Actions */}
        <div className="px-6 pb-6 flex flex-col gap-2.5">
          <Button
            variant="primary"
            size="default"
            className="w-full flex items-center justify-center gap-2 !py-2.5"
            onClick={onExport}
          >
            <Download className="w-4 h-4" />
            Export as PDF
          </Button>
          <Button
            variant="ghost"
            size="default"
            className="w-full !py-2.5"
            onClick={onContinueEdit}
          >
            Continue editing
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SaveSuccessDialog;
