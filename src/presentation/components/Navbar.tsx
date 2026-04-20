"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import InstallPWA from '@/presentation/components/InstallPWA';
import LanguageSelector from '@/presentation/components/LanguageSelector';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
    const observerOptions = { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: t('nav.about'), id: 'about', href: '#about' },
    { name: t('nav.skills'), id: 'skills', href: '#skills' },
    { name: t('nav.experience'), id: 'experience', href: '#experience' },
    { name: t('nav.projects'), id: 'projects', href: '#projects' },
    { name: t('nav.contact'), id: 'contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'glass-strong py-3 shadow-[0_1px_0_rgba(255,255,255,0.05),0_20px_40px_rgba(0,0,0,0.4)]'
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group select-none">
          <div className="relative w-9 h-9">
            <div className="absolute inset-0 bg-primary rounded-xl rotate-6 opacity-40 group-hover:rotate-12 transition-transform duration-300" />
            <div className="relative w-9 h-9 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-[0_4px_12px_rgba(139,92,246,0.4)]">
              <Code2 size={18} className="text-white" />
            </div>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-white font-black text-lg group-hover:text-primary-light transition-colors duration-300">CsDev</span>
            <span className="text-slate-500 text-[9px] font-bold uppercase tracking-[0.15em]">Portfolio</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 select-none ${
                activeSection === link.id
                  ? 'text-primary-light bg-primary/10'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                />
              )}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 border-r border-white/10 pr-4">
            <LanguageSelector />
          </div>
          <a
            href="#contact"
            className="btn-primary flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold select-none"
          >
            <Zap size={14} />
            {t('nav.hireMe')}
          </a>
          <InstallPWA />
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl glass-effect border border-white/10 text-white transition-all"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X size={20} />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-white/5 glass-strong"
          >
            <div className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className={`mobile-nav-item ${activeSection === link.id ? 'active' : ''}`}
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="flex items-center gap-4 pt-4 mt-2 border-t border-white/5">
                <LanguageSelector />
                <InstallPWA />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
