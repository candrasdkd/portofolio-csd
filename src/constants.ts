import { Project, ProjectCategory, ExperienceItem, Skill, ProjectType, EducationItem } from '@/types';

export const HERO_DATA = {
  name: "Candra Sidik Dermawan",
  role: "Frontend & Mobile Developer",
  tagline: "Building digital experiences that matter.",
  description: "I craft responsive websites and high-performance mobile applications with a focus on user experience and clean code.",
  birthDate: "1997-11-07",
  location: "Depok, Indonesia",
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
    period: "Jan 2026 - Present",
    type: "Contract",
    techStack: ["Angular", "React Native", "TypeScript", "Redux", "Android Native (Java)", "iOS Native (Swift/Objective-C)", "Firebase", "Figma"],
    description: [
      "Identify, analyze, and fix bugs on the PruHub web admin platform (Angular).",
      "Develop and add new features to the resign agent module.",
      "Fix bugs and add features on PruForce mobile app (React Native) for Android & iOS.",
      "Add features to improve user experience in real-time data synchronization.",
      "Collaborate with QA team to ensure features and bug fixes run optimally before release.",
      "Perform code maintenance and light optimization on existing modules.",
    ],
  },
  {
    id: 2,
    role: "Freelance React Native Developer",
    company: "Kejarcita",
    period: "Oct 2024 - Present",
    type: "Freelance",
    techStack: ["React Native", "Redux", "Kotlin", "Java", "Swift", "Ruby on Rails", "Figma"],
    description: [
      "Develop and maintain features for Kejarcita's educational mobile app using React Native.",
      "Built interactive practice modules for elementary to high school subject content.",
      "Implemented synchronous learning features and an announcement notification system.",
      "Managed app state with Redux and collaborated with the Ruby on Rails backend team.",
      "Integrated API with Ruby on Rails backend and managed question data.",
      "Performed testing, debugging, and optimization for Android and iOS.",
      "Coordinated with the design team using Figma for UI/UX implementation.",
    ],
  },
  {
    id: 5,
    role: "Freelance Website Developer",
    company: "Nihong Jastip",
    period: "Feb 2024 - Present",
    type: "Freelance",
    techStack: ["React", "JavaScript", "TypeScript", "Vite", "TailwindCSS", "Firebase", "Framer Motion", "Recharts", "jsPDF", "PWA", "Vercel"],
    description: [
      "Designed a modern, fully responsive company profile website using React.",
      "Implemented WhatsApp-integrated call-to-action for a seamless ordering flow.",
      "Built Nihong Team's internal admin dashboard as a PWA using TypeScript.",
      "Developed order, product, and admin modules with role-based access control.",
      "Integrated Firebase as backend for authentication and real-time data sync.",
      "Built financial analytics with Recharts and PDF report export using jsPDF.",
      "Implemented UI animations with Framer Motion and deployed on Vercel.",
    ],
  },
  {
    id: 3,
    role: "React Native Developer",
    company: "PT Kalimantan Prima Persada",
    period: "Apr 2022 - Dec 2025",
    type: "Contract",
    techStack: ["React Native", "Redux", "Kotlin", "Java", "Swift", "GraphQL", "SQL Server", "MongoDB", "Figma"],
    description: [
      "Developed and maintained M-OK's internal mobile office app using React Native.",
      "Built and optimized employee self-service features for daily operational needs.",
      "Integrated GraphQL backend and managed application state management with Redux.",
      "Handled native module integration using Kotlin/Java (Android) and Swift (iOS).",
      "Coordinated with backend team in managing SQL Server and MongoDB databases.",
      "Conducted code reviews, debugging, and performance optimization.",
      "Published and managed app releases on Google Play Store and App Store.",
    ],
    certificate: "/pdfs/paklaring_sigmatech.pdf"
  },
  {
    id: 4,
    role: "React Native Developer",
    company: "PT Multi Artha Prima Sejahtera",
    period: "Dec 2021 - Feb 2022",
    type: "Contract",
    techStack: ["React Native", "Redux Thunk", "Axios", "React Navigation", "OneSignal", "Sentry"],
    description: [
      "Developed new features for the Deplaza mobile marketplace app using React Native.",
      "Built product listing, search, cart management, and checkout with COD/bank transfer.",
      "Implemented role-based UI for reseller and store modes with sorting features.",
      "Integrated push notifications (OneSignal) and error monitoring (Sentry).",
      "Managed state with Redux Thunk and REST API communication with Axios.",
      "Built order tracking, proof of transfer upload, and fund withdrawal features.",
      "Implemented social sharing, wishlist management, and real-time CS chat.",
    ],
    certificate: ""
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 1,
    school: "Universitas Gunadarma",
    major: "Teknik Industri",
    period: "May 2016 - Nov 2020",
    gpa: "3.36",
    description: "Focused on industrial systems optimization and production management, applying engineering principles to improve efficiency and productivity."
  },
  {
    id: 2,
    school: "Fazztrack",
    major: "Full Stack Mobile Developer",
    period: "Jul 2021 - Oct 2021",
    gpa: "",
    description: "Intensive bootcamp focused on full-stack mobile development."
  }
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
    demoUrl: "https://nihongjastip.com",
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