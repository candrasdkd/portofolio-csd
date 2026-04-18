// application/hooks/useProjects.ts
// Custom hook: encapsulate state filter + pagination + use-case call.

import { useState, useMemo } from 'react';
import { ProjectCategory } from '@/domain/entities';
import { portfolioRepository } from '@/data/portfolio.repository';
import { getProjectsUseCase } from '@/application/usecases/getProjects.usecase';

const ITEMS_PER_PAGE = 4;

export const useProjects = () => {
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All');
  const [currentPage, setCurrentPage] = useState(1);

  const { projects, totalPages } = useMemo(
    () =>
      getProjectsUseCase(portfolioRepository, {
        filter,
        page: currentPage,
        itemsPerPage: ITEMS_PER_PAGE,
      }),
    [filter, currentPage],
  );

  const allProjects = useMemo(() => portfolioRepository.getProjects(), []);

  const handleFilterChange = (newFilter: ProjectCategory | 'All') => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return {
    projects,
    allProjects,
    filter,
    currentPage,
    totalPages,
    handleFilterChange,
    handlePageChange,
  };
};
