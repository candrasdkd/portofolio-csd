// domain/entities/index.ts
// Single source of truth untuk semua domain types / entities.
// Layer lain harus import dari sini, bukan langsung dari types.ts.

export enum ProjectCategory {
  PERSONAL = 'Personal',
  CLIENT = 'Client',
}

export enum ProjectType {
  WEB = 'Web',
  MOBILE = 'Mobile',
}

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  type: ProjectType;
  description: string;
  fullDescription: string;
  technologies: string[];
  images: string[];
  demoUrl?: string;
  repoUrl?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  clients?: string[];
  period: string;
  description: string | string[];
  certificate?: string;
  type: 'Full-time' | 'Freelance' | 'Contract';
  techStack: string[];
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 0-100
}

export interface EducationItem {
  id: number;
  school: string;
  major: string;
  period: string;
  gpa: string;
  description?: string;
}

export interface HeroData {
  name: string;
  role: string;
  tagline: string;
  description: string;
  birthDate: string;
  location: string;
  socials: {
    github: string;
    linkedin: string;
  };
}
