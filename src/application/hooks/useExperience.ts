// application/hooks/useExperience.ts
// Custom hook: encapsulate state filter experience + use-case call.

import { useState, useMemo } from 'react';
import { portfolioRepository } from '@/data/portfolio.repository';
import { getExperienceUseCase, ExperienceFilter } from '@/application/usecases/getExperience.usecase';

export const useExperience = () => {
  const [filter, setFilter] = useState<ExperienceFilter>('All');

  const experience = useMemo(
    () => getExperienceUseCase(portfolioRepository, filter),
    [filter],
  );

  const education = useMemo(() => portfolioRepository.getEducation(), []);

  return {
    experience,
    education,
    filter,
    setFilter,
  };
};
