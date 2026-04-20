"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioRepository } from '@/data/portfolio.repository';
import { Cpu } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const skills = portfolioRepository.getSkills();

// Map skill names to emoji icons for visual variety
const SKILL_ICONS: Record<string, string> = {
  'React': '⚛️',
  'React Native': '📱',
  'Next.js': '▲',
  'TypeScript': '𝙏𝙎',
  'JavaScript': '𝙅𝙎',
  'Flutter': '🐦',
  'Dart': '🎯',
  'Node.js': '🟢',
  'Express': '⚡',
  'Tailwind': '🌊',
  'CSS': '🎨',
  'HTML': '🌐',
  'Git': '🔀',
  'Firebase': '🔥',
  'MySQL': '🗄️',
  'MongoDB': '🍃',
  'Redux': '🔄',
  'GraphQL': '◉',
};

// Color themes for skill categories
const CARD_VARIANTS = [
  { border: 'hover:border-primary/40', glow: 'rgba(139,92,246,0.15)', accent: 'bg-primary/20 text-primary-light' },
  { border: 'hover:border-secondary/40', glow: 'rgba(6,182,212,0.15)', accent: 'bg-secondary/20 text-secondary' },
  { border: 'hover:border-accent/40', glow: 'rgba(244,63,94,0.12)', accent: 'bg-accent/20 text-accent-light' },
  { border: 'hover:border-yellow-500/40', glow: 'rgba(234,179,8,0.12)', accent: 'bg-yellow-500/20 text-yellow-400' },
];

const Skills: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-32 px-4 md:px-8 relative overflow-hidden" style={{ background: '#030d1f' }}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="orb orb-primary w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2 opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="section-badge mb-6 inline-flex">
            <Cpu size={13} />
            {t('skills.title')}
          </span>
          <h2 className="section-heading text-white mt-4 mb-4">
            <span className="text-gradient">{t('skills.title')}</span>
          </h2>
          <div className="gradient-divider w-32 mx-auto mb-6" />
          <p className="text-slate-400 text-lg max-w-md mx-auto">{t('skills.subtitle')}</p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {skills.map((skill, index) => {
            const variant = CARD_VARIANTS[index % CARD_VARIANTS.length];
            const icon = SKILL_ICONS[skill.name] ?? skill.name.charAt(0);
            const isEmoji = SKILL_ICONS[skill.name] !== undefined;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className={`skill-card border border-white/5 ${variant.border} group`}
              >
                {/* Glow on hover (inline for dynamic color) */}
                <div
                  className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${variant.glow}, transparent 70%)` }}
                />

                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-2xl ${variant.accent} flex items-center justify-center mb-5 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {isEmoji ? (
                    <span className="text-2xl select-none">{icon}</span>
                  ) : (
                    <span className="text-xl font-black select-none">{icon}</span>
                  )}
                </div>

                {/* Name */}
                <h3 className="text-white font-bold text-sm text-center mb-4 group-hover:text-primary-light transition-colors">
                  {skill.name}
                </h3>

                {/* Progress bar */}
                <div className="progress-track">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.1 + index * 0.03, ease: 'easeOut' }}
                    className="progress-fill"
                  />
                </div>

                {/* Level label */}
                <div className="flex justify-between items-center mt-2.5">
                  <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">
                    {skill.level >= 85 ? 'Expert' : skill.level >= 65 ? 'Advanced' : 'Proficient'}
                  </span>
                  <span className="text-[10px] font-black text-slate-500">{skill.level}%</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
