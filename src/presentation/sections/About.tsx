"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioRepository } from '@/data/portfolio.repository';
import { User, Star, Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const heroData = portfolioRepository.getHeroData();

const stats = [
  { icon: Star, value: '4+', labelKey: 'about.yearsExp', color: 'text-primary-light', bg: 'bg-primary/10', border: 'border-primary/20' },
  { icon: Briefcase, value: '4+', labelKey: 'about.projectsCompleted', color: 'text-secondary', bg: 'bg-secondary/10', border: 'border-secondary/20' },
];

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-32 px-4 md:px-8 bg-darker relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-secondary w-[400px] h-[400px] bottom-0 right-0 opacity-50" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center animate-float">
              <span className="text-3xl">⚡</span>
            </div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center animate-float-slow">
              <span className="text-2xl">🚀</span>
            </div>

            {/* Glow behind image */}
            <div className="absolute inset-4 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-[2.5rem] blur-3xl" />

            {/* Image frame */}
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.5)] neon-border">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-10 pointer-events-none" />
              <img
                src="/assets/me.jpg"
                alt="Profile"
                className="w-full aspect-[4/5] object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              {/* Corner accent */}
              <div className="absolute top-5 right-5 z-20 px-3 py-1.5 glass-strong rounded-xl text-[10px] font-black text-primary-light uppercase tracking-widest border border-primary/20">
                Available ✓
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col gap-8"
          >
            {/* Badge */}
            <div>
              <span className="section-badge">
                <User size={13} />
                {t('about.title')}
              </span>
            </div>

            {/* Heading */}
            <div>
              <h2 className="section-heading text-white mb-4">
                {t('about.heading')}
              </h2>
              <div className="gradient-divider w-24" />
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-slate-300 text-lg leading-relaxed">
                {t('about.description')}
              </p>
              <p className="text-slate-400 text-base leading-relaxed">
                {t('about.p1')}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className={`card-premium p-6 rounded-2xl border ${stat.border} group`}
                >
                  <div className={`w-10 h-10 ${stat.bg} ${stat.border} border rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <stat.icon size={18} className={stat.color} />
                  </div>
                  <h4 className={`text-4xl font-black mb-1 ${stat.color}`}>{stat.value}</h4>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{t(stat.labelKey)}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm"
              >
                {t('hero.contactMe')} →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
