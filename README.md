# 👨‍💻 Personal Portfolio Website

![Project Banner](public/banner-placeholder.png)
A modern, responsive, and interactive portfolio website designed to showcase my work in **Mobile (React Native)** and **Web Development**. Built with a focus on smooth animations, clean UI, and specialized displays for mobile vs. web projects.

## 🚀 Tech Stack

This project is built using the following technologies:

* **Framework:** [React](https://reactjs.org/) (Vite)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Deployment:** Vercel / Netlify (Recommended)

## ✨ Key Features

* **Dynamic Project Filtering:** Filter projects by categories (All, Personal, Client) with smooth layout transitions.
* **Smart Layouts:**
    * **Web Projects:** Displayed with `object-cover` and scrolling hover effects (optional).
    * **Mobile Projects:** Displayed inside a container (`object-contain`) to preserve app aspect ratios.
* **Interactive Modal:**
    * Detailed view for each project without leaving the page.
    * Image slider/carousel navigation.
    * Direct links to Live Demo, Play Store, App Store, and GitHub Repo.
* **Responsive Design:** Fully optimized for Desktop, Tablet, and Mobile screens.
* **Dark Mode UI:** A sleek, developer-focused dark theme.

## 📂 Project Structure

```bash
src/
├── assets/          # Static assets (images, icons)
├── components/      # Reusable components
│   ├── ProjectModal.tsx  # Detailed view modal with slider
│   ├── Projects.tsx      # Main grid with filtering logic
│   └── ...
├── constants/       # Static data (Project lists, details)
├── types/           # TypeScript interfaces (Project, Category, etc.)
└── App.tsx          # Main application entry