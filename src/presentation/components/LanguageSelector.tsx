"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'id', label: 'Bahasa Indonesia', flag: '🇮🇩' },
];

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find(l => l.code === i18n.language) ?? LANGUAGES[0];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 glass-effect rounded-xl border border-white/8 text-slate-300 hover:text-white hover:border-primary/30 transition-all text-sm font-semibold select-none"
        aria-label="Select Language"
      >
        <Globe size={15} className="text-primary-light" />
        <span className="hidden sm:inline text-xs font-black tracking-wider">
          {current.code.toUpperCase()}
        </span>
        <ChevronDown
          size={13}
          className={`text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute right-0 mt-2 w-52 glass-strong border border-white/10 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden z-[100] py-1.5"
          >
            {LANGUAGES.map((lng) => {
              const isActive = i18n.language === lng.code;
              return (
                <button
                  key={lng.code}
                  onClick={() => changeLanguage(lng.code)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-all ${
                    isActive
                      ? 'text-primary-light bg-primary/10 font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-base">{lng.flag}</span>
                  <span className="flex-1 text-left">{lng.label}</span>
                  {isActive && <Check size={14} className="text-primary-light flex-shrink-0" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
