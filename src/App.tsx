import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from '@/presentation/components/Navbar';
import Hero from '@/presentation/sections/Hero';
import About from '@/presentation/sections/About';
import Skills from '@/presentation/sections/Skills';
import Experience from '@/presentation/sections/Experience';
import Projects from '@/presentation/sections/Projects';
import Contact from '@/presentation/sections/Contact';
import Loader from '@/presentation/components/Loader';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate asset loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <div className="bg-dark min-h-screen text-slate-200 selection:bg-primary/30">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </main>
        </div>
      )}
    </>
  );
};

export default App;