/**
 * Import Resume Dialog
 * File upload with parsing simulation
 */

import * as React from 'react';
import { cn } from '@/lib/cn';
import { Heading } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';

interface ImportDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onImport: (file: File) => Promise<void>;
}

const ImportDialog: React.FC<ImportDialogProps> = ({
  isOpen,
  onClose,
  onImport,
}) => {
  const [isDragging, setIsDragging] = React.useState(false);
  const [file, setFile] = React.useState<File | null>(null);
  const [isParsing, setIsParsing] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && isValidFile(droppedFile)) {
      setFile(droppedFile);
      setError(null);
    } else {
      setError('Please upload a PDF or DOCX file');
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && isValidFile(selectedFile)) {
      setFile(selectedFile);
      setError(null);
    } else {
      setError('Please upload a PDF or DOCX file');
    }
  };

  const isValidFile = (file: File): boolean => {
    const validTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    return validTypes.includes(file.type) || file.name.endsWith('.pdf') || file.name.endsWith('.docx');
  };

  const handleImport = async () => {
    if (!file) return;

    setIsParsing(true);
    setError(null);

    try {
      await onImport(file);
      handleClose();
    } catch (err) {
      setError('Failed to parse resume. Please try again.');
      setIsParsing(false);
    }
  };

  const handleClose = () => {
    setFile(null);
    setError(null);
    setIsParsing(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Dialog */}
      <div className="relative bg-[var(--card)] border border-[var(--rule)] rounded-[var(--radius-md)] w-full max-w-md mx-4 shadow-2xl">
        {/* Header */}
        <div className="px-6 py-5 border-b border-[var(--rule)]">
          <Heading level="h2" className="text-[1.25rem]">
            Import your resume
          </Heading>
          <p className="text-[var(--ink-soft)] text-[0.9rem] mt-1">
            Upload an existing PDF or DOCX to get started
          </p>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          {/* Drop zone */}
          <div
            className={cn(
              'border-2 border-dashed rounded-[var(--radius-md)] p-8 text-center cursor-pointer',
              'transition-all duration-200',
              isDragging
                ? 'border-[var(--red)] bg-[var(--red-soft)]'
                : 'border-[var(--rule-strong)] hover:border-[var(--ink-faint)] bg-[var(--paper-alt)]',
              file && 'border-[var(--green)] bg-[var(--green-soft)]'
            )}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.docx"
              onChange={handleFileSelect}
              className="hidden"
            />

            {file ? (
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5 text-[var(--green)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-[var(--ink)] font-medium">
                  {file.name}
                </span>
              </div>
            ) : (
              <>
                <svg
                  className={cn(
                    'w-10 h-10 mx-auto mb-3',
                    isDragging ? 'text-[var(--red)]' : 'text-[var(--ink-faint)]'
                  )}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <p className="text-[0.9rem] text-[var(--ink-soft)]">
                  <span className="font-semibold text-[var(--red)]">
                    Click to upload
                  </span>{' '}
                  or drag and drop
                </p>
                <p className="text-[0.78rem] text-[var(--ink-faint)] mt-1">
                  PDF or DOCX (max 5MB)
                </p>
              </>
            )}
          </div>

          {/* Error */}
          {error && (
            <p className="text-[var(--red)] text-[0.85rem] mt-3 text-center">
              {error}
            </p>
          )}

          {/* Parsing indicator */}
          {isParsing && (
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="w-4 h-4 border-2 border-[var(--red)] border-t-transparent rounded-full animate-spin" />
              <span className="text-[var(--ink-soft)] text-[0.85rem]">
                Parsing resume...
              </span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[var(--rule)] flex justify-end gap-3">
          <Button variant="ghost" onClick={handleClose} disabled={isParsing}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={handleImport}
            disabled={!file || isParsing}
          >
            {isParsing ? 'Importing...' : 'Import'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImportDialog;
