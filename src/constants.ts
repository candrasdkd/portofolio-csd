import { Project, ProjectCategory, ExperienceItem, Skill, ProjectType } from '@/types';

export const HERO_DATA = {
  name: "Candra Sidik Dermawan",
  role: "Frontend & Mobile Developer",
  tagline: "Building digital experiences that matter.",
  description: "I craft responsive websites and high-performance mobile applications with a focus on user experience and clean code.",
  socials: {
    github: 'https://github.com/candrasdkd',
    linkedin: 'https://www.linkedin.com/in/candrasdk/',
  },
};

export const SKILLS: Skill[] = [
  { name: "React / React Native", icon: "react", level: 90 },
  { name: "Swift", icon: "swift", level: 60 },
  { name: "Kotlin/Java", icon: "kt/java", level: 60 },
  { name: "TypeScript", icon: "ts", level: 80 },
  { name: "Javascript", icon: "js", level: 90 },
  { name: "GraphQL", icon: "graphql", level: 65 },
  { name: "Firebase", icon: "firebase", level: 70 },
  { name: "SQL Server", icon: "sql", level: 50 },
  { name: "Mongo DB", icon: "mongo", level: 50 },
  { name: "Tailwind CSS", icon: "tailwind", level: 60 },
  { name: "Figma", icon: "figma", level: 60 },
  { name: "Git / GitHub", icon: "git", level: 85 },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "CODE.ID",
    clients: ["Prudential"],
    period: "Jan 2025 - Present",
    type: "Contract",
    techStack: ["React Native", "TypeScript", "Redux Toolkit", "Firebase"],
    description: "Spearheaded the development of a cross-platform mobile application utilizing React Native. Key responsibilities involved engineering complex insurance policy features and streamlining approval workflows.",
  },
  {
    id: 2,
    role: "Freelance React Native Developer",
    company: "kejarcita.id",
    period: "Oct 2024 - Present",
    type: "Freelance",
    techStack: ["React Native", "Android Native (Java)", "IOS Native (Swift/Objective-C)", "Redux Toolkit", "Firebase"],
    description: "Developed and integrated advanced capabilities for a major educational application, including secure examination environments, screen pinning capabilities, and comprehensive attendance modules.",
  },
  {
    id: 3,
    role: "React Native Developer",
    company: "Sigmatech",
    clients: ["PT Kalimantan Prima Persada"],
    period: "Apr 2022 - Dec 2025",
    type: "Contract",
    techStack: ["React Native", "TypeScript", "Android Native (Java)", "IOS Native (Swift/Objective-C)", "Redux Toolkit"],
    description: "Engineered scalable mobile applications specifically dedicated to streamlining mining operations. Led initiatives in performance optimization and seamlessly integrated native Android widgets for enhanced operability.",
    certificate: "/pdfs/paklaring_sigmatech.pdf"
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "M-OK",
    category: ProjectCategory.CLIENT,
    type: ProjectType.MOBILE,
    description: "An internal mobile office application for PT Kalimantan Prima Persada (KPP) designed to provide facilities that support employee operations and streamline personal needs.",
    fullDescription: "M-OK serves as the mobile office for KPP, acting as an internal application dedicated to PT Kalimantan Prima Persada. It provides comprehensive facilities and tools necessary for supporting the day-to-day operations and fulfilling the personal needs of employees seamlessly.",
    technologies: ["React Native", "Redux", "Kotlin", "Java", "Swift", "GraphQL", "Postman", "SQL Server", "MongoDB", "Google Play Store", "App Store", "Figma"],
    images: ["assets/mok1.png", "assets/mok2.png", "assets/mok3.png", "assets/mok4.png", "assets/mok5.png", "assets/mok6.png", "assets/mok7.png"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.kppmining.mok",
    appStoreUrl: "https://apps.apple.com/id/app/m-ok/id6456406607"
  },
  {
    id: 2,
    title: "Kejarcita",
    category: ProjectCategory.CLIENT,
    type: ProjectType.MOBILE,
    description: "A premier online education platform for students, teachers, and schools that facilitates independent practice and supports highly accessible, high-quality online learning activities.",
    fullDescription: "Reputed as a premier online education platform for students, teachers, and schools, Kejarcita serves dual purposes: promoting independent practice and assisting synchronous online learning. Key highlights include an expansive, repeatedly updated question bank accommodating elementary to high school criteria. The platform provides free access to thousands of educational exercises in Mathematics, Sciences, Social Studies, Indonesian, and English. Additionally, complex High-Order Thinking Skills (HOTS) questions are fully accommodated in premium subscriptions.",
    technologies: ["React Native", "Redux", "Kotlin", "Java", "Swift", "Ruby on Rails", "Google Play Store", "App Store", "Postman", "Figma"],
    images: ["assets/kc1.jpg", "assets/kc2.jpg", "assets/kc3.jpg", "assets/kc4.jpg", "assets/kc5.jpg", "assets/kc6.jpg"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.kejarcita",
    appStoreUrl: "https://apps.apple.com/id/app/kejarcita/id1532648767"
  },
  {
    id: 3,
    title: "Nihong Jastip",
    category: ProjectCategory.CLIENT,
    type: ProjectType.WEB,
    description: "A responsive landing page designed for a Japan-Indonesia international personal shopping and shipping service, assisting users in understanding operations and effortlessly initiating orders.",
    fullDescription: "The Nihong Jastip website acts primarily as an informational hub and a strong branding medium for the personal shopping (jastip) enterprise. Key development focused on crafting a modern, fully responsive, and straightforward interface so prospective users quickly understand service particulars and seamlessly submit orders. The website encompasses detailed service explanations, core business advantages, and strategically positioned call-to-actions directly connected to WhatsApp for rapid inquiries.",
    technologies: ["React", "Javascript"],
    images: ["assets/jastip1.png", "assets/jastip2.png", "assets/jastip3.png"],
    demoUrl: "https://nihongjastip.vercel.app",
    repoUrl: "https://github.com/candrasdkd/nihong-jastip-company-profile"
  },
  {
    id: 4,
    title: "Easy Sabil",
    category: ProjectCategory.PERSONAL,
    type: ProjectType.WEB,
    description: "A specialized digital platform architected to facilitate organizations in efficiently registering, managing, and continually assessing their member base comprehensively.",
    fullDescription: "EasySabil shines as a digital organizational platform inherently designed to streamline various organizational tasks. These entail conducting highly efficient data collection, seamlessly administrating member information, and meticulously monitoring the member base through an efficient, centralized, and structured infrastructure.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    images: ["assets/es1.png", "assets/es2.png", "assets/es3.png"],
    demoUrl: "https://easysabil.vercel.app",
    repoUrl: "https://github.com/candrasdkd/easysabil-web"
  },
];