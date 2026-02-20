import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Quick inline translations for the core portfolio parts
const resources = {
    en: {
        translation: {
            nav: {
                about: "About",
                skills: "Skills",
                experience: "Experience",
                projects: "Projects",
                contact: "Contact",
                hireMe: "Hire Me"
            },
            hero: {
                greeting: "Hello, I'm",
                viewWork: "View My Work",
                downloadCV: "Download CV",
                generating: "Generating...",
                contactMe: "Contact Me"
            },
            about: {
                title: "About Me",
                heading: "Passion for Clean Code & Design",
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
                client: "at client:"
            },
            projects: {
                title: "Featured Projects",
                subtitle: "A selection of my recent work across mobile and web development."
            },
            contact: {
                title: "Contact",
                heading1: "Let's discuss your",
                heading2: "next big project.",
                subtitle: "Interested in working together? Fill out the form or reach out via email. I'm always open to discussing new projects, creative ideas, or opportunities.",
                email: "Email Me",
                location: "Location",
                socials: "Connect on Socials",
                formName: "Name",
                formEmail: "Email",
                formMessage: "Message",
                sendMsg: "Send Message",
                sending: "Sending...",
                success: "Message sent successfully!",
                error: "Failed to send. Please try again."
            }
        }
    },
    id: {
        translation: {
            nav: {
                about: "Tentang",
                skills: "Keahlian",
                experience: "Pengalaman",
                projects: "Proyek",
                contact: "Kontak",
                hireMe: "Rekrut Saya"
            },
            hero: {
                greeting: "Halo, Saya",
                viewWork: "Lihat Bukti Kerja",
                downloadCV: "Unduh CV",
                generating: "Memproses...",
                contactMe: "Hubungi Saya"
            },
            about: {
                title: "Tentang Saya",
                heading: "Kecintaan pada Kode Bersih & Desain",
                p1: "Saya berspesialisasi dalam ekosistem React untuk web dan React Native/Flutter untuk seluler. Filosofi saya sederhana: membangun hal-hal yang berfungsi dengan baik dan terlihat memukau. Saat saya tidak sedang membuat kode, saya menjelajahi tren UI baru.",
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
                client: "klien:"
            },
            projects: {
                title: "Proyek Pilihan",
                subtitle: "Pilihan karya terbaru saya dalam pengembangan seluler dan web."
            },
            contact: {
                title: "Kontak",
                heading1: "Mari diskusikan",
                heading2: "proyek besar Anda selanjutnya.",
                subtitle: "Tertarik untuk bekerja sama? Isi formulir atau hubungi via email. Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau peluang lainnya.",
                email: "Email Saya",
                location: "Lokasi",
                socials: "Terhubung di Sosial",
                formName: "Nama",
                formEmail: "Email",
                formMessage: "Pesan",
                sendMsg: "Kirim Pesan",
                sending: "Mengirim...",
                success: "Pesan berhasil dikirim!",
                error: "Gagal mengirim. Silakan coba lagi."
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
