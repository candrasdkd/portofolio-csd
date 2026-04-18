// application/usecases/getExperience.usecase.ts
// Use-case: ambil dan filter experience berdasarkan tipe pekerjaan.

import { IPortfolioRepository } from '@/domain/repositories';
import { ExperienceItem } from '@/domain/entities';

export type ExperienceFilter = 'All' | 'Full-time' | 'Contract' | 'Freelance';

export const getExperienceUseCase = (
  repository: IPortfolioRepository,
  filter: ExperienceFilter,
): ExperienceItem[] => {
  const all = repository.getExperience();
  return filter === 'All' ? all : all.filter((item) => item.type === filter);
};
