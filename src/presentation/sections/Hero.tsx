"use client";

import React, { useEffect, useState, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Download, Loader2, Sparkles } from 'lucide-react';
import { portfolioRepository } from '@/data/portfolio.repository';
import { useGenerateCV } from '@/application/hooks/useGenerateCV';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const heroData = portfolioRepository.getHeroData();

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { isDownloading, handleDownloadCV } = useGenerateCV();

  const role = t(heroData.role);
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

  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo('.hero-badge', 
      { opacity: 0, scale: 0.8, y: 20 }, 
      { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" }
    )
    .fromTo('.hero-title',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    )
    .fromTo('.hero-subtitle',
      { opacity: 0 },
      { opacity: 1, duration: 0.8 },
      "-=0.4"
    )
    .fromTo('.hero-desc',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    )
    .fromTo('.hero-btn',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "back.out(1.5)" },
      "-=0.4"
    )
    .fromTo('.hero-social',
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out(2)" },
      "-=0.4"
    )
    .fromTo('.hero-scroll',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "-=0.2"
    );

    gsap.to('.orb-primary', {
      y: 150,
      x: 50,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    gsap.to('.orb-secondary', {
      y: -100,
      x: -50,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });
    
    gsap.to('.orb-accent', {
      y: 80,
      scale: 1.2,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    gsap.to('.hero-content', {
      y: 100,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    gsap.to('.orb', {
      y: "+=30",
      x: "+=20",
      duration: 4,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      stagger: {
        each: 1,
        from: "random"
      }
    });

  }, { scope: containerRef });

  return (
    <section id="home" ref={containerRef} className="min-h-screen relative flex items-center justify-center overflow-hidden bg-darker bg-grid">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb orb-primary w-[600px] h-[600px] -top-32 -left-32" />
        <div className="orb orb-secondary w-[500px] h-[500px] -bottom-20 -right-20" />
        <div className="orb orb-accent w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-primary/5 animate-spin-slow" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-secondary/5 animate-spin-slow"
          style={{ animationDirection: 'reverse', animationDuration: '30s' }}
        />
      </div>

      <div className="container mx-auto px-6 z-10 text-center hero-content">
        <div className="flex justify-center mb-6 hero-badge opacity-0">
          <span className="section-badge magnetic">
            <Sparkles size={13} className="text-primary-light animate-pulse" />
            {t('hero.greeting')} {heroData.name.split(' ')[0]}
          </span>
        </div>

        <h1 className="hero-title opacity-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight leading-none magnetic">
          {heroData.name}
        </h1>

        <div className="hero-subtitle opacity-0 h-12 md:h-14 flex items-center justify-center mb-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gradient inline-block">
            {displayed}
            <span className="animate-blink text-primary font-thin ml-0.5">|</span>
          </h2>
        </div>

        <p className="hero-desc opacity-0 text-base md:text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
          {t(heroData.tagline)}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <a
            href="#projects"
            className="hero-btn opacity-0 btn-primary px-7 py-3.5 rounded-2xl text-white font-bold text-sm flex items-center gap-2 select-none magnetic"
          >
            {t('hero.viewWork')}
            <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">→</span>
          </a>

          <button
            onClick={handleDownloadCV}
            disabled={isDownloading}
            className="hero-btn opacity-0 btn-ghost px-7 py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 select-none disabled:opacity-50 disabled:cursor-not-allowed magnetic"
          >
            {isDownloading
              ? <><Loader2 size={16} className="animate-spin" />{t('hero.generating')}</>
              : <><Download size={16} />{t('hero.downloadCV')}</>
            }
          </button>

          <a
            href="#contact"
            className="hero-btn opacity-0 px-7 py-3.5 rounded-2xl font-bold text-sm text-slate-300 border border-white/10 hover:border-primary/40 hover:text-white hover:bg-primary/5 transition-all select-none magnetic"
          >
            {t('hero.contactMe')}
          </a>
        </div>

        <div className="flex justify-center gap-3">
          <a
            href={heroData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social opacity-0 group p-3 glass-effect rounded-xl text-slate-400 hover:text-white border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1 magnetic"
            aria-label="GitHub"
          >
            <Github size={18} className="group-hover:scale-110 transition-transform" />
          </a>
          <a
            href={heroData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social opacity-0 group p-3 glass-effect rounded-xl text-slate-400 hover:text-white border border-white/5 hover:border-secondary/30 transition-all hover:-translate-y-1 magnetic"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>

      <div className="hero-scroll opacity-0 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-slate-600 text-[10px] font-bold tracking-[0.25em] uppercase magnetic">scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center p-1.5">
          <div className="w-1 h-1.5 bg-primary rounded-full animate-bounce" />
        </div>
        <ArrowDown size={14} className="text-slate-600 animate-bounce-soft" />
      </div>
    </section>
  );
};

export default Hero;
