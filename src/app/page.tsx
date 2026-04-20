"use client";

import React, { useState, useEffect } from 'react';
import "@/infrastructure/i18n";
import { AnimatePresence } from 'framer-motion';
import Navbar from '@/presentation/components/Navbar';
import Hero from '@/presentation/sections/Hero';
import About from '@/presentation/sections/About';
import Skills from '@/presentation/sections/Skills';
import Experience from '@/presentation/sections/Experience';
import Projects from '@/presentation/sections/Projects';
import Contact from '@/presentation/sections/Contact';
import Loader from '@/presentation/components/Loader';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <div className="bg-darker min-h-screen text-slate-200 selection:bg-primary/30 selection:text-white">
          <Navbar />
          <main>
            <Hero />
            <div className="gradient-divider opacity-40" />
            <About />
            <div className="gradient-divider opacity-40" />
            <Skills />
            <div className="gradient-divider opacity-40" />
            <Experience />
            <div className="gradient-divider opacity-40" />
            <Projects />
            <div className="gradient-divider opacity-40" />
            <Contact />
          </main>
        </div>
      )}
    </>
  );
}
