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
  { name: "Angular", icon: "angular", level: 70 },
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
    company: "Prudential Indonesia",
    // clients: ["Prudential"],
    period: "Jan 2026 - Present",
    type: "Contract",
    techStack: ["Angular", "React Native", "TypeScript", "Android Native (Java)", "IOS Native (Swift/Objective-C)", "Redux", "Firebase"],
    description: "Spearheaded the development of a cross-platform mobile application for insurance agents to manage policies utilizing React Native, alongside a web admin dashboard using Angular for supervisors and managers overseeing agent activities. Key responsibilities involved engineering complex insurance policy features, building a hierarchical role management system, and streamlining approval workflows.",
  },
  {
    id: 2,
    role: "Freelance React Native Developer",
    company: "kejarcita.id",
    period: "Oct 2024 - Present",
    type: "Freelance",
    techStack: ["React Native", "Android Native (Java)", "IOS Native (Swift/Objective-C)", "Redux", "Firebase"],
    description: "Developed and integrated advanced capabilities for a major educational application, including secure examination environments, screen pinning capabilities, and comprehensive attendance modules.",
  },
  {
    id: 3,
    role: "React Native Developer",
    company: "PT Kalimantan Prima Persada",
    // clients: ["PT Kalimantan Prima Persada"],
    period: "Apr 2022 - Dec 2025",
    type: "Contract",
    techStack: ["React Native", "TypeScript", "Android Native (Java)", "IOS Native (Swift/Objective-C)", "Redux Toolkit"],
    description: "Engineered scalable mobile applications specifically dedicated to streamlining mining operations. Led initiatives in performance optimization and seamlessly integrated native Android widgets for enhanced operability.",
    certificate: "/pdfs/paklaring_sigmatech.pdf"
  },
  {
    id: 4,
    role: "React Native Developer",
    company: "SekolahPintar.com",
    // clients: ["SekolahPintar.com"],
    period: "Dec 2021 - Feb 2022",
    type: "Contract",
    techStack: ["React Native", "Redux Thunk"],
    description: "Deplaza is a mobile application that provides product buying and selling services, which by using this application will make it easier for users to carry out buying and selling transactions, users can sell products with the facilities provided by Deplaza, or sell their own products.",
    certificate: ""
  },
];

export const PROJECTS: Project[] = [
  {
    id: 6,
    title: "PruHub",
    category: ProjectCategory.CLIENT,
    type: ProjectType.WEB,
    description: "A comprehensive web admin dashboard for Prudential Indonesia, enabling supervisors and managers to oversee agent activities, manage hierarchical roles, and streamline insurance policy approval workflows.",
    fullDescription: "PruHub is an internal web admin platform developed for Prudential Indonesia using Angular. It is designed for supervisors and managers to monitor and manage insurance agents under their hierarchy. Key features include a role-based management system with hierarchical access control, real-time visibility into agent performance and policy submissions, approval workflow management, and reporting dashboards. The platform ensures secure and structured oversight across multiple levels of the organization.",
    technologies: ["Angular", "TypeScript", "Redux", "Firebase", "Figma"],
    images: ["assets/pruhab1.jpg", "assets/pruhab2.jpg"],
  },
  {
    id: 7,
    title: "PruForce",
    category: ProjectCategory.CLIENT,
    type: ProjectType.MOBILE,
    description: "A cross-platform mobile application for Prudential Indonesia insurance agents to manage policies, submit requests, and track performance — all from their smartphone.",
    fullDescription: "PruForce is a React Native cross-platform mobile application built for Prudential Indonesia's insurance agents. It provides agents with a comprehensive suite of tools to manage their client portfolios, submit policy applications, track approval statuses, and monitor personal performance metrics. The app features a responsive and intuitive UI optimized for both Android and iOS, integrating with Prudential's enterprise backend systems for real-time data synchronization and secure transactions.",
    technologies: ["React Native", "TypeScript", "Redux", "Android Native (Java)", "IOS Native (Swift/Objective-C)", "Firebase", "Figma"],
    images: ["assets/pruforce1.jpeg", "assets/pruforce2.jpeg"],
  },
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
    repoUrl: ""
  },
  {
    id: 4,
    title: "Nihong Team",
    category: ProjectCategory.CLIENT,
    type: ProjectType.WEB,
    description: "A feature-rich admin dashboard for NihongTeam's Jastip service, enabling admins to manage products, orders, and users through an intuitive and responsive interface.",
    fullDescription: "Jastip Admin is a comprehensive internal dashboard developed for NihongTeam's Japan-Indonesia personal shopping (jastip) business. Admins can monitor order statistics and performance metrics via an analytics dashboard, manage product listings with image uploads and categorization, handle admin accounts with role-based access control, update order statuses, and configure system-wide settings. Built with React, TypeScript, and Vite for a fast development experience, the UI is styled with TailwindCSS and animated with Framer Motion. Firebase powers the backend for real-time data and authentication, Recharts drives the analytics visualizations, and jsPDF with html2canvas enables PDF export. The app is deployed as a Progressive Web App (PWA) on Vercel.",
    technologies: ["React", "TypeScript", "Vite", "TailwindCSS", "Firebase", "Framer Motion", "Recharts", "jsPDF", "PWA"],
    images: ["assets/nihongteam1.png", "assets/nihongteam2.png", "assets/nihongteam3.png", "assets/nihongteam4.png"],
    demoUrl: "https://nihongteam.vercel.app",
    repoUrl: ""
  },
  {
    id: 5,
    title: "Easy Sabil",
    category: ProjectCategory.PERSONAL,
    type: ProjectType.WEB,
    description: "A comprehensive web app for managing community data, sensus records, orders, and attendance — with role-based access control and real-time analytics powered by Firebase.",
    fullDescription: "EasySabil is a full-featured community management platform built for organizations handling census data, financial orders, and daily attendance. Admins and coordinators can manage family units and individual members with bulk Excel import and rollback support, while role-based access control (Admin, Coordinator, Member) filters data visibility per user. The orders module supports full CRUD on purchase categories and transactions with payment tracking, and the attendance module logs daily or monthly records interactively. A real-time analytics dashboard aggregates census metrics directly from Firebase Firestore, replacing external sheet dependencies. The UI features a clean blue-themed design with a modern split-layout for authentication.",
    technologies: ["React", "TypeScript", "Vite", "TailwindCSS", "Firebase", "Recharts", "Lucide React", "xlsx", "PWA"],
    images: ["assets/es1.jpg", "assets/es2.png", "assets/es3.png", "assets/es4.png", "assets/es5.png"],
    demoUrl: "https://easysabil.vercel.app",
    repoUrl: "https://github.com/candrasdkd/easysabil-web"
  },
];