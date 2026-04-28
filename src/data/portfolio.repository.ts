// data/portfolio.repository.ts
// Implementasi konkret dari IPortfolioRepository.
// Satu-satunya tempat yang tahu bahwa data berasal dari konstanta lokal.
// Jika suatu saat data berpindah ke API, hanya file ini yang perlu diubah.

import { IPortfolioRepository } from '@/domain/repositories';
import {
  HeroData,
  Project,
  ProjectCategory,
  ProjectType,
  ExperienceItem,
  Skill,
  EducationItem,
} from '@/domain/entities';

// ─── Raw Data ────────────────────────────────────────────────────────────────

const HERO_DATA: HeroData = {
  name: "Candra Sidik Dermawan",
  role: "hero.role",
  tagline: "hero.tagline",
  description: "about.description",
  birthDate: "1997-11-07",
  location: "Depok, Indonesia",
  email: "candrasdk@gmail.com",
  phone: "085156775933",
  socials: {
    github: 'https://github.com/candrasdkd',
    linkedin: 'https://www.linkedin.com/in/candrasdk/',
  },
};

const SKILLS: Skill[] = [
  { name: "React / React Native", icon: "react", level: 90 },
  { name: "Next.js", icon: "next", level: 80 },
  { name: "Angular", icon: "angular", level: 70 },
  { name: "Swift", icon: "swift", level: 60 },
  { name: "Kotlin/Java", icon: "kt/java", level: 60 },
  { name: "TypeScript", icon: "ts", level: 80 },
  { name: "Javascript", icon: "js", level: 90 },
  { name: "GraphQL", icon: "graphql", level: 65 },
  { name: "Firebase", icon: "firebase", level: 70 },
  { name: "SQL Server", icon: "sql", level: 60 },
  { name: "Mongo DB", icon: "mongo", level: 60 },
  { name: "Tailwind CSS", icon: "tailwind", level: 60 },
  { name: "Figma", icon: "figma", level: 60 },
  { name: "Git / GitHub", icon: "git", level: 85 },
];

const EXPERIENCE: ExperienceItem[] = [
  {
    id: 1,
    role: "experience.roles.frontend",
    company: "Prudential Indonesia",
    period: "Jan 2026 - Present",
    type: "Contract",
    techStack: ["Angular", "React Native", "TypeScript", "Redux", "Android Native (Java)", "iOS Native (Swift/Objective-C)", "Firebase", "Figma"],
    description: "experience.items.prudential",
  },
  {
    id: 2,
    role: "experience.roles.freelanceReactNative",
    company: "Kejarcita",
    period: "Oct 2024 - Present",
    type: "Freelance",
    techStack: ["React Native", "Redux", "Kotlin", "Java", "Swift", "Ruby on Rails", "Figma"],
    description: "experience.items.kejarcita",
  },
  {
    id: 5,
    role: "experience.roles.freelanceWeb",
    company: "Nihong Jastip",
    period: "Feb 2024 - Present",
    type: "Freelance",
    techStack: ["React.js", "Next.js", "TypeScript", "Groq AI", "TailwindCSS", "Firebase", "Framer Motion", "Recharts", "jsPDF", "PWA", "Vercel"],
    description: "experience.items.jastip_web",
  },
  {
    id: 3,
    role: "experience.roles.reactNative",
    company: "PT Kalimantan Prima Persada",
    period: "Apr 2022 - Dec 2025",
    type: "Contract",
    techStack: ["React Native", "Redux", "Kotlin", "Java", "Swift", "GraphQL", "SQL Server", "MongoDB", "Figma"],
    description: "experience.items.kpp",
    certificate: "/pdfs/paklaring_sigmatech.pdf",
  },
  {
    id: 4,
    role: "experience.roles.reactNative",
    company: "PT Multi Artha Prima Sejahtera",
    period: "Dec 2021 - Feb 2022",
    type: "Contract",
    techStack: ["React Native", "Redux Thunk", "Axios", "React Navigation", "OneSignal", "Sentry"],
    description: "experience.items.maps",
    certificate: "",
  },
];

const LANGUAGES = [
  { name: 'Indonesian', level: 'Native' },
  { name: 'English', level: 'Professional Working Proficiency' },
];

const EDUCATION: EducationItem[] = [
  {
    id: 1,
    school: "Universitas Gunadarma",
    major: "education.items.ug.major",
    period: "May 2016 - Nov 2020",
    gpa: "3.36",
    description: "education.items.ug.desc",
  },
  {
    id: 2,
    school: "Fazztrack",
    major: "education.items.fazztrack.major",
    period: "Jul 2021 - Oct 2021",
    gpa: "",
    description: "education.items.fazztrack.desc",
  },
];

const PROJECTS: Project[] = [
  {
    id: 6,
    title: "PruHub",
    category: ProjectCategory.CLIENT,
    type: ProjectType.WEB,
    description: "projects.items.pruhub.desc",
    fullDescription: "projects.items.pruhub.full",
    technologies: ["Angular", "TypeScript", "Redux", "Firebase", "Figma"],
    images: ["assets/pruhab1.jpg", "assets/pruhab2.jpg"],
  },
  {
    id: 7,
    title: "PruForce",
    category: ProjectCategory.CLIENT,
    type: ProjectType.MOBILE,
    description: "projects.items.pruforce.desc",
    fullDescription: "projects.items.pruforce.full",
    technologies: ["React Native", "TypeScript", "Redux", "Android Native (Java)", "IOS Native (Swift/Objective-C)", "Firebase", "Figma"],
    images: ["assets/pruforce1.jpeg", "assets/pruforce2.jpeg"],
  },
  {
    id: 1,
    title: "M-OK",
    category: ProjectCategory.CLIENT,
    type: ProjectType.MOBILE,
    description: "projects.items.mok.desc",
    fullDescription: "projects.items.mok.full",
    technologies: ["React Native", "Redux", "Kotlin", "Java", "Swift", "GraphQL", "Postman", "SQL Server", "MongoDB", "Google Play Store", "App Store", "Figma"],
    images: ["assets/mok1.png", "assets/mok2.png", "assets/mok3.png", "assets/mok4.png", "assets/mok5.png", "assets/mok6.png", "assets/mok7.png"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.kppmining.mok",
    appStoreUrl: "https://apps.apple.com/id/app/m-ok/id6456406607",
  },
  {
    id: 2,
    title: "Kejarcita",
    category: ProjectCategory.CLIENT,
    type: ProjectType.MOBILE,
    description: "projects.items.kejarcita.desc",
    fullDescription: "projects.items.kejarcita.full",
    technologies: ["React Native", "Redux", "Kotlin", "Java", "Swift", "Ruby on Rails", "Google Play Store", "App Store", "Postman", "Figma"],
    images: ["assets/kc1.jpg", "assets/kc2.jpg", "assets/kc3.jpg", "assets/kc4.jpg", "assets/kc5.jpg", "assets/kc6.jpg"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.kejarcita",
    appStoreUrl: "https://apps.apple.com/id/app/kejarcita/id1532648767",
  },
  {
    id: 3,
    title: "Nihong Jastip",
    category: ProjectCategory.CLIENT,
    type: ProjectType.WEB,
    description: "projects.items.jastip.desc",
    fullDescription: "projects.items.jastip.full",
    technologies: ["Next.js", "TypeScript", "Groq AI", "Framer Motion"],
    images: ["assets/jastip1.png", "assets/jastip2.png", "assets/jastip3.png", "assets/jastip4.png"],
    demoUrl: "https://nihongjastip.com",
    repoUrl: "",
  },
  {
    id: 4,
    title: "Nihong Team",
    category: ProjectCategory.CLIENT,
    type: ProjectType.WEB,
    description: "projects.items.jastip_admin.desc",
    fullDescription: "projects.items.jastip_admin.full",
    technologies: ["React", "TypeScript", "Vite", "TailwindCSS", "Firebase", "Framer Motion", "Recharts", "jsPDF", "PWA"],
    images: ["assets/nihongteam1.png", "assets/nihongteam2.png", "assets/nihongteam3.png", "assets/nihongteam4.png"],
    demoUrl: "https://nihongteam.vercel.app",
    repoUrl: "",
  },
  {
    id: 5,
    title: "Easy Sabil",
    category: ProjectCategory.PERSONAL,
    type: ProjectType.WEB,
    description: "projects.items.easysabil.desc",
    fullDescription: "projects.items.easysabil.full",
    technologies: ["React", "TypeScript", "Vite", "TailwindCSS", "Firebase", "Recharts", "Lucide React", "xlsx", "PWA"],
    images: ["assets/es1.jpg", "assets/es2.png", "assets/es3.png", "assets/es4.png", "assets/es5.png"],
    demoUrl: "https://easysabil.vercel.app",
    repoUrl: "https://github.com/candrasdkd/easysabil-web",
  },
];

// ─── Repository Implementation ────────────────────────────────────────────────

class PortfolioRepository implements IPortfolioRepository {
  getHeroData(): HeroData {
    return HERO_DATA;
  }

  getProjects(): Project[] {
    return PROJECTS;
  }

  getExperience(): ExperienceItem[] {
    return EXPERIENCE;
  }

  getEducation(): EducationItem[] {
    return EDUCATION;
  }

  getSkills(): Skill[] {
    return SKILLS;
  }

  getLanguages() {
    return LANGUAGES;
  }
}

// Singleton instance — seluruh aplikasi menggunakan satu instance yang sama.
export const portfolioRepository = new PortfolioRepository();
