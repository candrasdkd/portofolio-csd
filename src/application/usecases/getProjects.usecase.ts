// application/usecases/getProjects.usecase.ts
// Use-case: ambil dan filter projects berdasarkan kategori, dengan pagination.

import { IPortfolioRepository } from '@/domain/repositories';
import { Project, ProjectCategory } from '@/domain/entities';

export interface GetProjectsParams {
  filter: ProjectCategory | 'All';
  page: number;
  itemsPerPage: number;
}

export interface GetProjectsResult {
  projects: Project[];
  totalPages: number;
  totalItems: number;
}

export const getProjectsUseCase = (
  repository: IPortfolioRepository,
  params: GetProjectsParams,
): GetProjectsResult => {
  const { filter, page, itemsPerPage } = params;

  const allProjects = repository.getProjects();

  const filtered =
    filter === 'All'
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const projects = filtered.slice(start, start + itemsPerPage);

  return { projects, totalPages, totalItems: filtered.length };
};
