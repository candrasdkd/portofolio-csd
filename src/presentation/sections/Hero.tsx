"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Download, Loader2, Sparkles } from 'lucide-react';
import { portfolioRepository } from '@/data/portfolio.repository';
import { useGenerateCV } from '@/application/hooks/useGenerateCV';
import { useTranslation } from 'react-i18next';

const heroData = portfolioRepository.getHeroData();

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { isDownloading, handleDownloadCV } = useGenerateCV();

  const role = t(heroData.role); // e.g. "Frontend & Mobile Developer"
  const [displayed, setDisplayed] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex <= role.length) {
      timeout = setTimeout(() => {
        setDisplayed(role.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 70);
    } else if (!isDeleting && charIndex > role.length) {
      setIsPaused(true);
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 3000);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(role.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 35);
    } else {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, isPaused, role]);

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-darker bg-grid">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb orb-primary w-[600px] h-[600px] -top-32 -left-32" />
        <div className="orb orb-secondary w-[500px] h-[500px] -bottom-20 -right-20" />
        <div className="orb orb-accent w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        {/* Rotating rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-primary/5 animate-spin-slow" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-secondary/5 animate-spin-slow"
          style={{ animationDirection: 'reverse', animationDuration: '30s' }}
        />
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <span className="section-badge">
              <Sparkles size={13} className="text-primary-light animate-pulse" />
              {t('hero.greeting')} {heroData.name.split(' ')[0]}
            </span>
          </motion.div>

          {/* Main heading — name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight leading-none"
          >
            {heroData.name}
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="h-12 md:h-14 flex items-center justify-center mb-6"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gradient inline-block">
              {displayed}
              <span className="animate-blink text-primary font-thin ml-0.5">|</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-base md:text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            {t(heroData.tagline)}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            <a
              href="#projects"
              className="btn-primary px-7 py-3.5 rounded-2xl text-white font-bold text-sm flex items-center gap-2 select-none"
            >
              {t('hero.viewWork')}
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">→</span>
            </a>

            <button
              onClick={handleDownloadCV}
              disabled={isDownloading}
              className="btn-ghost px-7 py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 select-none disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDownloading
                ? <><Loader2 size={16} className="animate-spin" />{t('hero.generating')}</>
                : <><Download size={16} />{t('hero.downloadCV')}</>
              }
            </button>

            <a
              href="#contact"
              className="px-7 py-3.5 rounded-2xl font-bold text-sm text-slate-300 border border-white/10 hover:border-primary/40 hover:text-white hover:bg-primary/5 transition-all select-none"
            >
              {t('hero.contactMe')}
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex justify-center gap-3"
          >
            <a
              href={heroData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 glass-effect rounded-xl text-slate-400 hover:text-white border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github size={18} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href={heroData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 glass-effect rounded-xl text-slate-400 hover:text-white border border-white/5 hover:border-secondary/30 transition-all hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-600 text-[10px] font-bold tracking-[0.25em] uppercase">scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-1 h-1.5 bg-primary rounded-full"
          />
        </div>
        <ArrowDown size={14} className="text-slate-600 animate-bounce-soft" />
      </motion.div>
    </section>
  );
};

export default Hero;
