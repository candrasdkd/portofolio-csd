"use client";

import React, { useRef } from 'react';
import { portfolioRepository } from '@/data/portfolio.repository';
import { User, Star, Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const heroData = portfolioRepository.getHeroData();

const stats = [
  { icon: Star, value: '4+', labelKey: 'about.yearsExp', color: 'text-primary-light', bg: 'bg-primary/10', border: 'border-primary/20' },
  { icon: Briefcase, value: '4+', labelKey: 'about.projectsCompleted', color: 'text-secondary', bg: 'bg-secondary/10', border: 'border-secondary/20' },
];

const About: React.FC = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to('.about-decor-1', {
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    gsap.to('.about-decor-2', {
      y: 100,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    gsap.fromTo('.about-image',
      { x: -100, opacity: 0, rotation: -5 },
      { x: 0, opacity: 1, rotation: 0, duration: 1, ease: "power3.out", scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }}
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    });

    tl.fromTo('.about-badge', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.5)" }
    )
    .fromTo('.about-heading',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo('.about-desc-item',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo('.about-stat',
      { opacity: 0, scale: 0.8, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "back.out(1.5)" },
      "-=0.2"
    )
    .fromTo('.about-btn',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.5)" },
      "-=0.2"
    );

  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef} className="py-32 px-4 md:px-8 bg-darker relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-secondary w-[400px] h-[400px] bottom-0 right-0 opacity-50 about-decor-1" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

          <div className="relative about-image">
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center about-decor-2 magnetic">
              <span className="text-3xl">⚡</span>
            </div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center about-decor-1 magnetic">
              <span className="text-2xl">🚀</span>
            </div>

            <div className="absolute inset-4 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-[2.5rem] blur-3xl" />

            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.5)] neon-border magnetic">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-10 pointer-events-none" />
              <img
                src="/assets/me.jpg"
                alt="Profile"
                className="w-full aspect-[4/5] object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute top-5 right-5 z-20 px-3 py-1.5 glass-strong rounded-xl text-[10px] font-black text-primary-light uppercase tracking-widest border border-primary/20">
                Available ✓
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="about-badge opacity-0">
              <span className="section-badge magnetic">
                <User size={13} />
                {t('about.title')}
              </span>
            </div>

            <div className="about-heading opacity-0">
              <h2 className="section-heading text-white mb-4 magnetic">
                {t('about.heading')}
              </h2>
              <div className="gradient-divider w-24" />
            </div>

            <div className="space-y-4">
              <p className="about-desc-item opacity-0 text-slate-300 text-lg leading-relaxed magnetic">
                {t('about.description')}
              </p>
              <p className="about-desc-item opacity-0 text-slate-400 text-base leading-relaxed magnetic">
                {t('about.p1')}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`about-stat opacity-0 card-premium p-6 rounded-2xl border ${stat.border} group magnetic`}
                >
                  <div className={`w-10 h-10 ${stat.bg} ${stat.border} border rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <stat.icon size={18} className={stat.color} />
                  </div>
                  <h4 className={`text-4xl font-black mb-1 ${stat.color}`}>{stat.value}</h4>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{t(stat.labelKey)}</p>
                </div>
              ))}
            </div>

            <div className="about-btn opacity-0">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm magnetic"
              >
                {t('hero.contactMe')} →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
