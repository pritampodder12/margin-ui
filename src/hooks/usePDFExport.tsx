/**
 * usePDFExport Hook
 * Handles PDF download functionality with template support
 */

import * as React from 'react';
import { pdf } from '@react-pdf/renderer';
import { LedgerPDF, NorthlinePDF, CompassPDF } from '@/pdf/templates';
import type { ResumeData, TemplateId } from '@/store';

interface UsePDFExportReturn {
  isGenerating: boolean;
  generatePDF: (data: ResumeData) => Promise<Blob | null>;
  downloadPDF: (data: ResumeData, filename?: string) => Promise<void>;
}

// Template mapping
const templateComponents = {
  ledger: LedgerPDF,
  northline: NorthlinePDF,
  compass: CompassPDF,
} as const;

export function usePDFExport(): UsePDFExportReturn {
  const [isGenerating, setIsGenerating] = React.useState(false);

  const generatePDF = React.useCallback(async (data: ResumeData): Promise<Blob | null> => {
    setIsGenerating(true);
    try {
      // Select template based on data
      const templateId: TemplateId = data.templateId || 'ledger';
      const TemplateComponent = templateComponents[templateId] || LedgerPDF;

      const doc = <TemplateComponent data={data} />;
      const blob = await pdf(doc).toBlob();
      return blob;
    } catch (error) {
      console.error('Error generating PDF:', error);
      return null;
    } finally {
      setIsGenerating(false);
    }
  }, []);

  const downloadPDF = React.useCallback(async (
    data: ResumeData,
    filename?: string
  ): Promise<void> => {
    const blob = await generatePDF(data);
    if (!blob) return;

    // Create download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename || `${data.personalInfo.fullName || 'resume'}.pdf`;

    // Trigger download
    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, [generatePDF]);

  return {
    isGenerating,
    generatePDF,
    downloadPDF,
  };
}

export default usePDFExport;
