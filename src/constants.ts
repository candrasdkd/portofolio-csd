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
  { name: "Tailwind CSS", icon: "tailwind", level: 60 },
  { name: "Figma", icon: "figma", level: 80 },
  { name: "Firebase", icon: "firebase", level: 70 },
  { name: "SQL Server", icon: "sql", level: 50 },
  { name: "Mongo DB", icon: "mongo", level: 50 },
  { name: "GraphQL", icon: "graphql", level: 70 },
  { name: "Postman", icon: "postman", level: 70 },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "CODE.ID",
    period: "Jan 2025 - Present",
    description: "Responsible for developing and maintaining cross-platform mobile applications (Android & iOS) using React Native. The tasks include implementing UI/UX designs, integrating with RESTful APIs, fixing bugs, deploying applications to the App Store and Google Play Store, and ensuring smooth application performance across multiple devices."
  },
  {
    id: 2,
    role: "React Native Developer",
    company: "PT Kalimantan Prima Persada",
    period: "Apr 2022 - Dec 2025",
    description: "Responsible for developing and maintaining cross-platform mobile applications (Android & iOS) using React Native. The tasks include implementing UI/UX designs, integrating with RESTful APIs, fixing bugs, deploying applications to the App Store and Google Play Store, and ensuring smooth application performance across multiple devices."
  },
  {
    id: 3,
    role: "Freelance React Native Developer",
    company: "kejarcita.id",
    period: "Oct 2024 - Present",
    description: "Responsible for developing and maintaining cross-platform mobile applications (Android & iOS) using React Native. The tasks include implementing UI/UX designs, integrating with RESTful APIs, fixing bugs, deploying applications to the App Store and Google Play Store, and ensuring smooth application performance across multiple devices."
  },
  {
    id: 4,
    role: "React Native Developer",
    company: "PT Multiartha Prima Sejahtera",
    period: "Dec 2021 - Feb 2022",
    description: "Responsibilities include implementing intuitive UX designs via clean code and collaborating with backend developers to integrate services. The role requires diagnosing and resolving application errors, maintaining code integrity through systematic reviews and version control management, and executing the end-to-end deployment process to the Google Play Store."
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Nihong Jastip",
    category: ProjectCategory.PERSONAL,
    type: ProjectType.WEB,
    description: "Nihong Jastip adalah website landing page untuk layanan jasa titip dan ekspedisi internasional Jepang–Indonesia. Website ini dirancang untuk membantu calon pelanggan memahami layanan, alur pemesanan, serta mempermudah komunikasi secara langsung melalui platform digital.",
    fullDescription: `Website Nihong Jastip berfungsi sebagai media informasi dan branding untuk bisnis jasa titip (jastip). Fokus utama pengembangan website ini adalah menghadirkan tampilan modern, responsif, dan mudah digunakan, sehingga pengguna dapat dengan cepat menemukan informasi layanan serta melakukan pemesanan. \n Website ini menampilkan penjelasan layanan, keunggulan bisnis, serta call-to-action yang terintegrasi langsung ke WhatsApp. Dengan desain yang ringan dan performa yang optimal, website ini cocok digunakan sebagai landing page bisnis jasa berbasis layanan.`,
    technologies: ["React", "Javascript"],
    images: ["assets/jastip1.png", "assets/jastip2.png", "assets/jastip3.png"],
    demoUrl: "https://nihongjastip.vercel.app",
    repoUrl: "https://github.com/candrasdkd/nihong-jastip-company-profile"
  },
  {
    id: 2,
    title: "M-OK",
    category: ProjectCategory.CLIENT,
    type: ProjectType.MOBILE,
    description: "M-OK, the official mobile application of KPP Mining",
    fullDescription: "M-OK is an abbreviation of KPP mobile office, which is an internal application of PT Kalimanan Prima Persada that functions to provide facilities that support the work and personal needs of employees.",
    technologies: ["React Native", "Redux", "Kotlin", "Java", "Swift", "GraphQL", "Postman", "SQL Server", "MonngoDB"],
    // Gunakan gambar rasio Portrait (misal 400x800) untuk simulasi mobile
    images: ["assets/mok1.png", "assets/mok2.png", "assets/mok3.png", "assets/mok4.png", "assets/mok5.png", "assets/mok6.png", "assets/mok7.png"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.kppmining.mok&pli=1",
    appStoreUrl: "https://apps.apple.com/id/app/m-ok/id6456406607"
  },
];