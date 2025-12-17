// types.ts
export enum ProjectCategory {
  PERSONAL = 'Personal',
  CLIENT = 'Client'
}

// [NEW] Enum untuk tipe tampilan
export enum ProjectType {
  WEB = 'Web',
  MOBILE = 'Mobile'
}

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  type: ProjectType; // [NEW]
  description: string;
  fullDescription: string;
  technologies: string[];
  images: string[];
  demoUrl?: string; // Untuk Web Live
  repoUrl?: string;
  // [NEW] Mobile specific links
  playStoreUrl?: string;
  appStoreUrl?: string;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: string; // URL or Lucide component name logic
  level: number; // 0-100
}