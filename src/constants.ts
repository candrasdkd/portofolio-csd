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
    description: "Bertanggung jawab dalam pengembangan aplikasi mobile lintas platform menggunakan React Native, fokus pada fitur polis asuransi dan alur persetujuan.",
  },
  {
    id: 2,
    role: "Freelance React Native Developer",
    company: "kejarcita.id",
    period: "Oct 2024 - Present",
    type: "Freelance",
    techStack: ["React Native",  "Android Native (Java)", "IOS Native (Swift/Objective-C)", "Redux Toolkit", "Firebase"],
    description: "Mengembangkan fitur ujian aman, screen pinning, dan modul absensi pada aplikasi edukasi.",
  },
  {
    id: 3,
    role: "React Native Developer",
    company: "Sigmatech",
    clients: ["PT Kalimantan Prima Persada"],
    period: "Apr 2022 - Dec 2025",
    type: "Contract",
    techStack: ["React Native", "TypeScript", "Android Native (Java)", "IOS Native (Swift/Objective-C)", "Redux Toolkit"],
    description: "Mengembangkan aplikasi mobile untuk operasional pertambangan, termasuk optimasi performa dan integrasi widget Android native.",
    certificate: "/pdfs/paklaring_sigmatech.pdf"
  },

];
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "M-OK",
    category: ProjectCategory.CLIENT,
    type: ProjectType.MOBILE,
    description: "M-OK adalah singkatan dari mobile office KPP, yang merupakan aplikasi internal PT Kalimanan Prima Persada yang berfungsi untuk menyediakan fasilitas yang menunjang pekerjaan dan kebutuhan personal dari karyawan.",
    fullDescription: "M-OK adalah singkatan dari mobile office KPP, yang merupakan aplikasi internal PT Kalimanan Prima Persada yang berfungsi untuk menyediakan fasilitas yang menunjang pekerjaan dan kebutuhan personal dari karyawan.",
    technologies: ["React Native", "Redux", "Kotlin", "Java", "Swift", "GraphQL", "Postman", "SQL Server", "MongoDB", "Google Play Store", "App Store", "Figma"],
    // Gunakan gambar rasio Portrait (misal 400x800) untuk simulasi mobile
    images: ["assets/mok1.png", "assets/mok2.png", "assets/mok3.png", "assets/mok4.png", "assets/mok5.png", "assets/mok6.png", "assets/mok7.png"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.kppmining.mok",
    appStoreUrl: "https://apps.apple.com/id/app/m-ok/id6456406607"
  },
  {
    id: 2,
    title: "Kejarcita",
    category: ProjectCategory.CLIENT,
    type: ProjectType.MOBILE,
    description: "Kejarcita adalah platform pendidikan daring terbaik untuk siswa, guru, dan sekolah. Dapat digunakan untuk latihan mandiri maupun untuk mendukung KBM online.",
    fullDescription: "Platform pendidikan daring terbaik untuk siswa, guru, dan sekolah. Dapat digunakan untuk latihan mandiri maupun untuk mendukung KBM online. Fitur unggulan bank soal sekolah jenjang SD-SMA yang berkualitas, lengkap, dan update. Akses gratis puluhan ribu soal latihan matematika, IPA, IPS, bahasa Indonesia, bahasa Inggris, dan lainnya. Akses belajar soal-soal HOTS tersedia dalam layanan premium. Layanan kami juga tersedia lengkap di situs kejarcita.id.",
    technologies: ["React Native", "Redux", "Kotlin", "Java", "Swift", "Ruby on Rails", "Google Play Store", "App Store", "Postman", "Figma"],
    // Gunakan gambar rasio Portrait (misal 400x800) untuk simulasi mobile
    images: ["assets/kc1.jpg", "assets/kc2.jpg", "assets/kc3.jpg", "assets/kc4.jpg", "assets/kc5.jpg", "assets/kc6.jpg"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.kejarcita",
    appStoreUrl: "https://apps.apple.com/id/app/kejarcita/id1532648767"
  },
  {
    id: 3,
    title: "Nihong Jastip",
    category: ProjectCategory.CLIENT,
    type: ProjectType.WEB,
    description: "Nihong Jastip adalah website landing page untuk layanan jasa titip dan ekspedisi internasional Jepang–Indonesia. Website ini dirancang untuk membantu calon pelanggan memahami layanan, alur pemesanan, serta mempermudah komunikasi secara langsung melalui platform digital.",
    fullDescription: `Website Nihong Jastip berfungsi sebagai media informasi dan branding untuk bisnis jasa titip (jastip). Fokus utama pengembangan website ini adalah menghadirkan tampilan modern, responsif, dan mudah digunakan, sehingga pengguna dapat dengan cepat menemukan informasi layanan serta melakukan pemesanan. \n Website ini menampilkan penjelasan layanan, keunggulan bisnis, serta call-to-action yang terintegrasi langsung ke WhatsApp. Dengan desain yang ringan dan performa yang optimal, website ini cocok digunakan sebagai landing page bisnis jasa berbasis layanan.`,
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
    description: "EasySabil adalah platform digital yang dirancang untuk mempermudah organisasi dalam melakukan pendataan, pengelolaan, dan pemantauan data anggotanya secara efisien dan terstruktur.",
    fullDescription: "EasySabil adalah platform digital yang dirancang untuk mempermudah organisasi dalam melakukan pendataan, pengelolaan, dan pemantauan data anggotanya secara efisien dan terstruktur.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    images: ["assets/es1.png", "assets/es2.png", "assets/es3.png"],
    demoUrl: "https://easysabil.vercel.app",
    repoUrl: "https://github.com/candrasdkd/easysabil-web"
  },
];