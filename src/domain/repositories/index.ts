// domain/repositories/index.ts
// Kontrak / interface yang harus diimplementasi oleh data layer.
// Domain layer tidak tahu dari mana data berasal (constants, API, localStorage, dll).

import { HeroData, Project, ExperienceItem, Skill, EducationItem } from '@/domain/entities';

export interface IPortfolioRepository {
  getHeroData(): HeroData;
  getProjects(): Project[];
  getExperience(): ExperienceItem[];
  getEducation(): EducationItem[];
  getSkills(): Skill[];
}
