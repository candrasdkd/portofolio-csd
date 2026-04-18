// application/hooks/useGenerateCV.ts
// Custom hook: encapsulate loading state untuk generate CV PDF.

import { useState } from 'react';
import { portfolioRepository } from '@/data/portfolio.repository';
import { generateCVUseCase } from '@/application/usecases/generateCV.usecase';

export const useGenerateCV = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCV = async () => {
    setIsDownloading(true);
    try {
      const heroData = portfolioRepository.getHeroData();
      await generateCVUseCase(heroData);
    } catch (error) {
      console.error('Failed to generate CV', error);
      alert('Terdapat kesalahan saat mengunduh CV. Silakan coba lagi.');
    } finally {
      setIsDownloading(false);
    }
  };

  return { isDownloading, handleDownloadCV };
};
