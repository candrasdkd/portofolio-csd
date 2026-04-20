// infrastructure/i18n.ts
// Framework config untuk internationalization.
// Dipindah dari src/i18n.ts — konten tidak berubah.

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            nav: { about: "About", skills: "Skills", experience: "Experience", projects: "Projects", contact: "Contact", hireMe: "Hire Me" },
            hero: { 
                greeting: "Hello, I'm", 
                role: "Frontend & Mobile Developer",
                tagline: "Building digital experiences that matter.",
                viewWork: "View My Work", 
                downloadCV: "Download CV", 
                generating: "Generating...", 
                contactMe: "Contact Me" 
            },
            about: { 
                title: "About Me", 
                heading: "Passion for Clean Code & Design", 
                description: "I craft responsive websites and high-performance mobile applications with a focus on user experience and clean code.",
                p1: "I specialize in the React ecosystem for web and React Native/Flutter for mobile. My philosophy is simple: build things that work beautifully and look stunning. When I'm not coding, I'm exploring new UI trends or contributing to open source.", 
                yearsExp: "Years Experience", 
                projectsCompleted: "Projects Completed" 
            },
            skills: { 
                title: "Technical Skills", 
                subtitle: "My preferred tools and technologies" 
            },
            experience: { 
                title: "Work Experience", 
                all: "All", 
                contract: "Contract", 
                freelance: "Freelance", 
                "full-time": "Full-time", 
                client: "at client:",
                roles: {
                    frontend: "Frontend Developer",
                    reactNative: "React Native Developer",
                    freelanceReactNative: "Freelance React Native Developer",
                    freelanceWeb: "Freelance Website Developer"
                },
                items: {
                    prudential: [
                        "Identify, analyze, and fix bugs on the PruHub web admin platform (Angular).",
                        "Develop and add new features to the resign agent module.",
                        "Fix bugs and add features on PruForce mobile app (React Native) for Android & iOS.",
                        "Add features to improve user experience in real-time data synchronization.",
                        "Collaborate with QA team to ensure features and bug fixes run optimally before release.",
                        "Perform code maintenance and light optimization on existing modules."
                    ],
                    kejarcita: [
                        "Develop and maintain features for Kejarcita's educational mobile app using React Native.",
                        "Built interactive practice modules for elementary to high school subject content.",
                        "Implemented synchronous learning features and an announcement notification system.",
                        "Managed app state with Redux and collaborated with the Ruby on Rails backend team.",
                        "Integrated API with Ruby on Rails backend and managed question data.",
                        "Performed testing, debugging, and optimization for Android and iOS.",
                        "Coordinated with the design team using Figma for UI/UX implementation."
                    ],
                    jastip_web: [
                        "Designed a modern, fully responsive company profile website using React.",
                        "Implemented WhatsApp-integrated call-to-action for a seamless ordering flow.",
                        "Built Nihong Team's internal admin dashboard as a PWA using TypeScript.",
                        "Developed order, product, and admin modules with role-based access control.",
                        "Integrated Firebase as backend for authentication and real-time data sync.",
                        "Built financial analytics with Recharts and PDF report export using jsPDF.",
                        "Implemented UI animations with Framer Motion and deployed on Vercel."
                    ],
                    kpp: [
                        "Developed and maintained M-OK's internal mobile office app using React Native.",
                        "Built and optimized employee self-service features for daily operational needs.",
                        "Integrated GraphQL backend and managed application state management with Redux.",
                        "Handled native module integration using Kotlin/Java (Android) and Swift (iOS).",
                        "Coordinated with backend team in managing SQL Server and MongoDB databases.",
                        "Conducted code reviews, debugging, and performance optimization.",
                        "Published and managed app releases on Google Play Store and App Store."
                    ],
                    maps: [
                        "Developed new features for the Deplaza mobile marketplace app using React Native.",
                        "Built product listing, search, cart management, and checkout with COD/bank transfer.",
                        "Implemented role-based UI for reseller and store modes with sorting features.",
                        "Integrated push notifications (OneSignal) and error monitoring (Sentry).",
                        "Managed state with Redux Thunk and REST API communication with Axios.",
                        "Built order tracking, proof of transfer upload, and fund withdrawal features.",
                        "Implemented social sharing, wishlist management, and real-time CS chat."
                    ]
                }
            },
            education: { 
                title: "Education", 
                gpa: "GPA",
                items: {
                    ug: {
                        major: "Industrial Engineering",
                        desc: "Focused on industrial systems optimization and production management, applying engineering principles to improve efficiency and productivity."
                    },
                    fazztrack: {
                        major: "Full Stack Mobile Developer",
                        desc: "Intensive bootcamp focused on full-stack mobile development."
                    }
                }
            },
            projects: { 
                title: "Featured Projects", 
                subtitle: "A selection of my recent work across mobile and web development.",
                downloadBtn: "Download Portfolio (PDF)",
                personal: "Personal",
                client: "Client",
                web: "Web",
                mobile: "Mobile",
                technologies: "Technologies",
                availableOn: "Available On",
                viewSource: "View Source Code",
                liveDemo: "Live Website",
                items: {
                    pruhub: {
                        desc: "A comprehensive web admin dashboard for Prudential Indonesia, enabling supervisors and managers to oversee agent activities, manage hierarchical roles, and streamline insurance policy approval workflows.",
                        full: "PruHub is an internal web admin platform developed for Prudential Indonesia using Angular. It is designed for supervisors and managers to monitor and manage insurance agents under their hierarchy. Key features include a role-based management system with hierarchical access control, real-time visibility into agent performance and policy submissions, approval workflow management, and reporting dashboards. The platform ensures secure and structured oversight across multiple levels of the organization."
                    },
                    pruforce: {
                        desc: "A cross-platform mobile application for Prudential Indonesia insurance agents to manage policies, submit requests, and track performance — all from their smartphone.",
                        full: "PruForce is a React Native cross-platform mobile application built for Prudential Indonesia's insurance agents. It provides agents with a comprehensive suite of tools to manage their client portfolios, submit policy applications, track approval statuses, and monitor personal performance metrics. The app features a responsive and intuitive UI optimized for both Android and iOS, integrating with Prudential's enterprise backend systems for real-time data synchronization and secure transactions."
                    },
                    mok: {
                        desc: "An internal mobile office application for PT Kalimantan Prima Persada (KPP) designed to provide facilities that support employee operations and streamline personal needs.",
                        full: "M-OK serves as the mobile office for KPP, acting as an internal application dedicated to PT Kalimantan Prima Persada. It provides comprehensive facilities and tools necessary for supporting the day-to-day operations and fulfilling the personal needs of employees seamlessly."
                    },
                    kejarcita: {
                        desc: "A premier online education platform for students, teachers, and schools that facilitates independent practice and supports highly accessible, high-quality online learning activities.",
                        full: "Reputed as a premier online education platform for students, teachers, and schools, Kejarcita serves dual purposes: promoting independent practice and assisting synchronous online learning. Key highlights include an expansive, repeatedly updated question bank accommodating elementary to high school criteria. The platform provides free access to thousands of educational exercises in Mathematics, Sciences, Social Studies, Indonesian, and English. Additionally, complex High-Order Thinking Skills (HOTS) questions are fully accommodated in premium subscriptions."
                    },
                    jastip: {
                        desc: "A premium, SEO-optimized company profile website for a Japan-Indonesia personal shopping service, featuring an intelligent AI chatbot and advanced i18n support.",
                        full: "The Nihong Jastip website is a high-performance, Next.js 15+ web application that serves as the digital storefront for a Japan-Indonesia personal shopping and expedition enterprise. It features an intelligent AI chatbot powered by Groq to provide 24/7 customer support, advanced URL-based internationalization (ID, EN, JA), and robust SEO optimizations with JSON-LD structured data. The platform boasts a premium, fully responsive design with smooth Framer Motion animations to ensure a seamless and engaging user experience."
                    },
                    jastip_admin: {
                        desc: "A feature-rich admin dashboard for NihongTeam's Jastip service, enabling admins to manage products, orders, and users through an intuitive and responsive interface.",
                        full: "Jastip Admin is a comprehensive internal dashboard developed for NihongTeam's Japan-Indonesia personal shopping (jastip) business. Admins can monitor order statistics and performance metrics via an analytics dashboard, manage product listings with image uploads and categorization, handle admin accounts with role-based access control, update order statuses, and configure system-wide settings. Built with React, TypeScript, and Vite for a fast development experience, the UI is styled with TailwindCSS and animated with Framer Motion. Firebase powers the backend for real-time data and authentication, Recharts drives the analytics visualizations, and jsPDF with html2canvas enables PDF export. The app is deployed as a Progressive Web App (PWA) on Vercel."
                    },
                    easysabil: {
                        desc: "A comprehensive web app for managing community data, sensus records, orders, and attendance — with role-based access control and real-time analytics powered by Firebase.",
                        full: "EasySabil is a full-featured community management platform built for organizations handling census data, financial orders, and daily attendance. Admins and coordinators can manage family units and individual members with bulk Excel import and rollback support, while role-based access control (Admin, Coordinator, Member) filters data visibility per user. The orders module supports full CRUD on purchase categories and transactions with payment tracking, and the attendance module logs daily or monthly records interactively. A real-time analytics dashboard aggregates census metrics directly from Firebase Firestore, replacing external sheet dependencies. The UI features a clean blue-themed design with a modern split-layout for authentication."
                    }
                }
            },
            contact: { title: "Contact", heading1: "Let's discuss your", heading2: "next big project.", subtitle: "Interested in working together? Fill out the form or reach out via email. I'm always open to discussing new projects, creative ideas, or opportunities.", email: "Email Me", location: "Location", socials: "Connect on Socials", formName: "Name", formEmail: "Email", formMessage: "Message", sendMsg: "Send Message", sending: "Sending...", success: "Message sent successfully!", error: "Failed to send. Please try again." },
            footer: { rights: "All rights reserved.", builtWith: "Built with React & Vanilla CSS." }
        }
    },
    id: {
        translation: {
            nav: { about: "Tentang", skills: "Keahlian", experience: "Pengalaman", projects: "Proyek", contact: "Kontak", hireMe: "Rekrut Saya" },
            hero: { 
                greeting: "Halo, Saya", 
                role: "Pengembang Frontend & Mobile",
                tagline: "Membangun pengalaman digital yang bermakna.",
                viewWork: "Lihat Karya Saya", 
                downloadCV: "Unduh CV", 
                generating: "Memproses...", 
                contactMe: "Hubungi Saya" 
            },
            about: { 
                title: "Tentang Saya", 
                heading: "Kecintaan pada Kode Bersih & Desain", 
                description: "Saya membuat situs web responsif dan aplikasi seluler berperforma tinggi dengan fokus pada pengalaman pengguna dan kode yang bersih.",
                p1: "Saya berspesialisasi dalam ekosistem React untuk web dan React Native/Flutter untuk seluler. Filosofi saya sederhana: membangun hal-hal yang berfungsi dengan baik dan terlihat memukau. Saat saya tidak sedang membuat kode, saya menjelajahi tren UI baru atau berkontribusi pada sumber terbuka.", 
                yearsExp: "Tahun Pengalaman", 
                projectsCompleted: "Proyek Selesai" 
            },
            skills: { 
                title: "Keahlian Teknis", 
                subtitle: "Alat dan teknologi pilihan saya" 
            },
            experience: { 
                title: "Pengalaman Kerja", 
                all: "Semua", 
                contract: "Kontrak", 
                freelance: "Pekerja Bebas", 
                "full-time": "Penuh Waktu", 
                client: "di klien:",
                roles: {
                    frontend: "Pengembang Frontend",
                    reactNative: "Pengembang React Native",
                    freelanceReactNative: "Pengembang React Native Lepas",
                    freelanceWeb: "Pengembang Website Lepas"
                },
                items: {
                    prudential: [
                        "Identifikasi, analisis, dan perbaikan bug pada platform PruHub web admin (Angular).",
                        "Mengembangkan dan menambah fitur baru pada modul resign agent.",
                        "Memperbaiki bug dan menambah fitur pada aplikasi mobile PruForce (React Native) untuk Android & iOS.",
                        "Menambahkan fitur untuk meningkatkan pengalaman pengguna dalam sinkronisasi data real-time.",
                        "Berkolaborasi dengan tim QA untuk memastikan fitur dan perbaikan bug berjalan optimal sebelum rilis.",
                        "Melakukan pemeliharaan kode dan optimasi ringan pada modul yang ada."
                    ],
                    kejarcita: [
                        "Mengembangkan dan memelihara fitur untuk aplikasi mobile pendidikan Kejarcita menggunakan React Native.",
                        "Membangun modul latihan interaktif untuk konten mata pelajaran SD hingga SMA.",
                        "Mengimplementasikan fitur pembelajaran sinkron dan sistem notifikasi pengumuman.",
                        "Mengelola state aplikasi dengan Redux dan berkolaborasi dengan tim backend Ruby on Rails.",
                        "Integrasi API dengan backend Ruby on Rails dan manajemen data pertanyaan.",
                        "Melakukan pengujian, debugging, dan optimasi untuk Android dan iOS.",
                        "Berkoordinasi dengan tim desain menggunakan Figma untuk implementasi UI/UX."
                    ],
                    jastip_web: [
                        "Mendesain website profil perusahaan yang modern dan responsif menggunakan React.",
                        "Mengimplementasikan call-to-action terintegrasi WhatsApp untuk alur pemesanan yang mulus.",
                        "Membangun dashboard admin internal Nihong Team sebagai PWA menggunakan TypeScript.",
                        "Mengembangkan modul pesanan, produk, dan admin dengan kontrol akses berbasis peran.",
                        "Integrasi Firebase sebagai backend untuk autentikasi dan sinkronisasi data real-time.",
                        "Membangun analitik keuangan dengan Recharts dan ekspor laporan PDF menggunakan jsPDF.",
                        "Mengimplementasikan animasi UI dengan Framer Motion dan deploy di Vercel."
                    ],
                    kpp: [
                        "Mengembangkan dan memelihara aplikasi kantor seluler internal M-OK menggunakan React Native.",
                        "Membangun dan mengoptimalkan fitur employee self-service untuk kebutuhan operasional harian.",
                        "Integrasi backend GraphQL dan manajemen state aplikasi dengan Redux.",
                        "Menangani integrasi modul native menggunakan Kotlin/Java (Android) dan Swift (iOS).",
                        "Berkoordinasi dengan tim backend dalam mengelola database SQL Server dan MongoDB.",
                        "Melakukan tinjauan kode, debugging, dan optimasi performa.",
                        "Menerbitkan dan mengelola rilis aplikasi di Google Play Store dan App Store."
                    ],
                    maps: [
                        "Mengembangkan fitur baru untuk aplikasi marketplace seluler Deplaza menggunakan React Native.",
                        "Membangun listing produk, pencarian, manajemen keranjang, dan checkout dengan COD/transfer bank.",
                        "Mengimplementasikan UI berbasis peran untuk mode reseller dan toko dengan fitur penyortiran.",
                        "Integrasi notifikasi push (OneSignal) dan pemantauan error (Sentry).",
                        "Mengelola state dengan Redux Thunk dan komunikasi REST API dengan Axios.",
                        "Membangun fitur pelacakan pesanan, unggah bukti transfer, dan penarikan dana.",
                        "Mengimplementasikan berbagi sosial, manajemen wishlist, dan chat CS real-time."
                    ]
                }
            },
            education: { 
                title: "Pendidikan", 
                gpa: "IPK",
                items: {
                    ug: {
                        major: "Teknik Industri",
                        desc: "Berfokus pada optimasi sistem industri dan manajemen produksi, menerapkan prinsip teknik untuk meningkatkan efisiensi dan produktivitas."
                    },
                    fazztrack: {
                        major: "Full Stack Mobile Developer",
                        desc: "Bootcamp intensif yang berfokus pada pengembangan aplikasi mobile full-stack."
                    }
                }
            },
            projects: { 
                title: "Proyek Pilihan", 
                subtitle: "Pilihan karya terbaru saya dalam pengembangan seluler dan web.",
                downloadBtn: "Unduh Portofolio (PDF)",
                personal: "Pribadi",
                client: "Klien",
                web: "Web",
                mobile: "Mobile",
                technologies: "Teknologi",
                availableOn: "Tersedia Di",
                viewSource: "Lihat Kode Sumber",
                liveDemo: "Website Langsung",
                items: {
                    pruhub: {
                        desc: "Dashboard admin web komprehensif untuk Prudential Indonesia, memungkinkan supervisor dan manajer untuk memantau aktivitas agen dan alur kerja persetujuan polis.",
                        full: "PruHub adalah platform admin web internal yang dikembangkan untuk Prudential Indonesia menggunakan Angular. Dirancang untuk supervisor dan manajer untuk memantau agen asuransi di bawah hierarki mereka. Fitur utama mencakup sistem manajemen berbasis peran, visibilitas real-time performa agen, manajemen alur kerja persetujuan, dan dashboard pelaporan."
                    },
                    pruforce: {
                        desc: "Aplikasi mobile lintas platform untuk agen asuransi Prudential Indonesia untuk mengelola polis dan melacak performa.",
                        full: "PruForce adalah aplikasi mobile lintas platform React Native yang dibangun untuk agen asuransi Prudential Indonesia. Menyediakan alat lengkap untuk mengelola portofolio klien, kirim aplikasi polis, dan pantau status persetujuan. Aplikasi ini memiliki UI responsif yang dioptimalkan untuk Android dan iOS."
                    },
                    mok: {
                        desc: "Aplikasi kantor seluler internal untuk PT Kalimantan Prima Persada (KPP) untuk mendukung operasional karyawan.",
                        full: "M-OK berfungsi sebagai kantor seluler untuk KPP, bertindak sebagai aplikasi internal yang didedikasikan untuk PT Kalimantan Prima Persada. Menyediakan fasilitas dan alat lengkap untuk mendukung operasional sehari-hari karyawan."
                    },
                    kejarcita: {
                        desc: "Platform pendidikan online terkemuka untuk siswa dan guru yang memfasilitasi latihan mandiri dan pembelajaran online.",
                        full: "Reputasi sebagai platform pendidikan online utama untuk siswa dan guru, Kejarcita membantu latihan mandiri dan pembelajaran sinkron. Memiliki bank soal luas dari SD hingga SMA, termasuk soal HOTS untuk pelanggan premium."
                    },
                    jastip: {
                        desc: "Website profil perusahaan premium yang dioptimalkan untuk SEO untuk layanan jastip Jepang-Indonesia, dilengkapi dengan chatbot AI cerdas dan dukungan i18n lanjutan.",
                        full: "Website Nihong Jastip adalah aplikasi web Next.js 15+ berkinerja tinggi yang berfungsi sebagai etalase digital untuk perusahaan jasa titip dan ekspedisi Jepang-Indonesia. Platform ini dilengkapi dengan chatbot AI cerdas yang didukung oleh Groq untuk menyediakan dukungan pelanggan 24/7, internasionalisasi berbasis URL tingkat lanjut (ID, EN, JA), dan optimisasi SEO yang kuat dengan structured data JSON-LD. Website ini menawarkan desain premium yang sepenuhnya responsif dengan animasi Framer Motion yang halus untuk memastikan pengalaman pengguna yang mulus dan menarik."
                    },
                    jastip_admin: {
                        desc: "Dashboard admin kaya fitur untuk layanan Jastip NihongTeam, mengelola produk, pesanan, dan pengguna.",
                        full: "Jastip Admin adalah dashboard internal komprehensif untuk bisnis jastip Jepang-Indonesia NihongTeam. Admin dapat memantau statistik pesanan, kelola listing produk, dan konfigurasi sistem. Dibangun dengan React, TypeScript, dan Firebase."
                    },
                    easysabil: {
                        desc: "Aplikasi web untuk manajemen data komunitas, catatan sensus, pesanan, dan kehadiran.",
                        full: "EasySabil adalah platform manajemen komunitas lengkap yang menangani data sensus, pesanan keuangan, dan kehadiran harian. Dilengkapi dengan kontrol akses berbasis peran dan analitik real-time menggunakan Firebase."
                    }
                }
            },
            contact: { title: "Kontak", heading1: "Mari diskusikan", heading2: "proyek besar Anda selanjutnya.", subtitle: "Tertarik untuk bekerja sama? Isi formulir atau hubungi via email. Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau peluang lainnya.", email: "Email Saya", location: "Lokasi", socials: "Terhubung di Sosial", formName: "Nama", formEmail: "Email", formMessage: "Pesan", sendMsg: "Kirim Pesan", sending: "Mengirim...", success: "Pesan berhasil dikirim!", error: "Gagal mengirim. Silakan coba lagi." },
            footer: { rights: "Hak cipta dilindungi.", builtWith: "Dibuat dengan React & Vanilla CSS." }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: { escapeValue: false }
    });

export default i18n;
