"use client";

import React, { useRef } from 'react';
import { portfolioRepository } from '@/data/portfolio.repository';
import { Cpu, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const skills = portfolioRepository.getSkills();

const SKILL_ICONS: Record<string, string> = {
  'React / React Native': '⚛️',
  'Next.js': '▲',
  'Angular': '🅰️',
  'Swift': '🦅',
  'Kotlin/Java': '☕',
  'TypeScript': '𝙏𝙎',
  'Javascript': '𝙅𝙎',
  'Flutter': '🐦',
  'Dart': '🎯',
  'Node.js': '🟢',
  'Express': '⚡',
  'Tailwind CSS': '🌊',
  'CSS': '🎨',
  'HTML': '🌐',
  'Git / GitHub': '🔀',
  'Firebase': '🔥',
  'SQL Server': '🗄️',
  'Mongo DB': '🍃',
  'Redux': '🔄',
  'GraphQL': '◉',
  'Figma': '🎨',
};

const CARD_VARIANTS = [
  { glow: 'bg-purple-500', gradient: 'from-purple-500 to-indigo-500' },
  { glow: 'bg-cyan-500', gradient: 'from-cyan-500 to-blue-500' },
  { glow: 'bg-rose-500', gradient: 'from-rose-500 to-pink-500' },
  { glow: 'bg-amber-500', gradient: 'from-amber-500 to-orange-500' },
  { glow: 'bg-emerald-500', gradient: 'from-emerald-500 to-teal-500' },
];

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax orb
    gsap.to('.skills-orb-1', {
      y: 150,
      x: 50,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    gsap.to('.skills-orb-2', {
      y: -100,
      x: -50,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      }
    });

    tl.fromTo('.skills-badge',
      { opacity: 0, y: 30, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.5)" }
    ).fromTo('.skills-heading',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    ).fromTo('.skills-subtitle',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    );

    gsap.fromTo('.skill-glass-card',
      { opacity: 0, y: 40, rotationY: 15, scale: 0.95 },
      { 
        opacity: 1, y: 0, rotationY: 0, scale: 1, duration: 0.6, stagger: 0.05, ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        }
      }
    );

    gsap.fromTo('.progress-fill-gsap',
      { width: 0 },
      { 
        width: (i, target) => target.dataset.width,
        duration: 1.5, 
        stagger: 0.03, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
        }
      }
    );

  }, { scope: containerRef });

  return (
    <section id="skills" ref={containerRef} className="py-32 px-4 md:px-8 relative overflow-hidden" style={{ background: '#020813' }}>
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/assets/grid.svg')] bg-center opacity-[0.03]" />
        <div className="orb orb-primary w-[600px] h-[600px] top-0 left-0 -translate-x-1/2 -translate-y-1/4 opacity-20 skills-orb-1" />
        <div className="orb orb-secondary w-[500px] h-[500px] bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-20 skills-orb-2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <span className="skills-badge opacity-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary-light text-xs font-bold uppercase tracking-widest magnetic shadow-lg shadow-primary/10">
            <Sparkles size={14} className="animate-pulse" />
            {t('skills.title')}
          </span>
          <h2 className="skills-heading opacity-0 text-4xl md:text-5xl lg:text-6xl font-black text-white mt-6 mb-6 tracking-tight magnetic">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6 opacity-80" />
          <p className="skills-subtitle opacity-0 text-slate-400 text-lg max-w-2xl mx-auto magnetic leading-relaxed">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Bento/Glass Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const variant = CARD_VARIANTS[index % CARD_VARIANTS.length];
            const icon = SKILL_ICONS[skill.name] ?? skill.name.charAt(0);
            const levelText = skill.level >= 85 ? 'Expert' : skill.level >= 65 ? 'Advanced' : 'Proficient';

            return (
              <div
                key={skill.name}
                className={`skill-glass-card opacity-0 relative p-6 rounded-[2rem] bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] overflow-hidden group hover:border-white/[0.15] transition-all duration-500 magnetic`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Glowing Aura on Hover */}
                <div className={`absolute -inset-20 opacity-0 group-hover:opacity-20 blur-[50px] transition-opacity duration-700 pointer-events-none rounded-full ${variant.glow}`} />
                
                {/* Card Top Border Highlight */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    {/* Icon Box */}
                    <div className="w-16 h-16 rounded-[1.25rem] flex items-center justify-center text-3xl bg-white/[0.03] border border-white/10 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 shadow-xl overflow-hidden">
                      {skill.logoUrl ? (
                        <img src={skill.logoUrl} alt={skill.name} className="w-10 h-10 object-contain filter drop-shadow-md" />
                      ) : (
                        <span className="select-none filter drop-shadow-md">{icon}</span>
                      )}
                    </div>
                    {/* Level Badge */}
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-black/40 text-slate-400 border border-white/5 group-hover:border-white/20 group-hover:text-white transition-all duration-300">
                      {levelText}
                    </span>
                  </div>

                  <div className="mt-auto">
                    <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                      {skill.name}
                    </h3>
                    
                    {/* Minimalist Progress Bar */}
                    <div className="relative h-1.5 w-full bg-slate-800/50 rounded-full overflow-hidden">
                      <div 
                        data-width={`${skill.level}%`}
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${variant.gradient} rounded-full progress-fill-gsap shadow-[0_0_10px_rgba(255,255,255,0.3)]`} 
                        style={{ width: '0%' }} 
                      />
                    </div>
                    <div className="flex justify-end mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-1 group-hover:translate-y-0">
                      <span className="text-[10px] font-black text-white/50">{skill.level}%</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
