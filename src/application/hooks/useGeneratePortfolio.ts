// application/hooks/useGeneratePortfolio.ts
// Custom hook: encapsulate loading state untuk generate Portfolio PDF.

import { useState } from 'react';
import { portfolioRepository } from '@/data/portfolio.repository';
import { generatePortfolioUseCase } from '@/application/usecases/generatePortfolio.usecase';

export const useGeneratePortfolio = () => {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const handleDownloadPortfolioPDF = async () => {
    setIsGeneratingPDF(true);
    try {
      const projects = portfolioRepository.getProjects();
      await generatePortfolioUseCase(projects);
    } catch (error) {
      console.error('Failed to generate project PDF', error);
      alert('Terdapat kesalahan saat membuat PDF.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return { isGeneratingPDF, handleDownloadPortfolioPDF };
};
