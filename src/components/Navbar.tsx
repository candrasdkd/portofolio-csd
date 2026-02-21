import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import InstallPWA from './InstallPWA';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Active Section Detection
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
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
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/80 backdrop-blur-lg border-b border-gray-800 py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-white font-bold text-xl">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <Code2 size={20} />
          </div>
          CsDev
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors relative group ${activeSection === link.id ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-full border border-white/10 transition-colors"
          >
            {t('nav.hireMe')}
          </a>
          <div className="flex items-center gap-3 border-l border-white/10 pl-5">
            <ThemeToggle />
            <LanguageSelector />
          </div>
          <InstallPWA />
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-darker border-b border-gray-800 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-2 text-lg font-medium transition-colors ${activeSection === link.id ? 'text-primary' : 'text-gray-300 hover:text-primary'
                    }`}
                >
                  {link.name}
                </a>
              ))}

              <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                <ThemeToggle />
                <LanguageSelector />
              </div>

              <div className="pt-4">
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