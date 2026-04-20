"use client";

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useExperience } from '@/application/hooks/useExperience';
import { Briefcase, Code2, ExternalLink, FileText, GraduationCap, Building2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Experience: React.FC = () => {
  const { t } = useTranslation();
  const { experience, education, filter, setFilter } = useExperience();

  const handleViewCertificate = (pdfUrl: string) => {
    window.open(pdfUrl, '_blank');
  };

  const FILTERS = ['All', 'Contract', 'Freelance'];

  return (
    <section id="experience" className="py-32 px-4 md:px-8 bg-darker relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="orb orb-primary w-[400px] h-[400px] bottom-0 left-0 opacity-30" />
        <div className="orb orb-secondary w-[350px] h-[350px] top-0 right-0 opacity-30" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-6 inline-flex">
            <Briefcase size={13} />
            {t('experience.title')}
          </span>
          <h2 className="section-heading text-white mt-4 mb-4">
            <span className="text-gradient">{t('experience.title')}</span>
          </h2>
          <div className="gradient-divider w-32 mx-auto mb-10" />

          {/* Filter tabs */}
          <div className="inline-flex glass-effect p-1.5 rounded-2xl gap-1 border border-white/5">
            {FILTERS.map((key) => (
              <button
                key={key}
                onClick={() => setFilter(key as any)}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all duration-300 select-none ${
                  filter === key
                    ? 'bg-primary text-white shadow-[0_4px_12px_rgba(139,92,246,0.35)] scale-[1.03]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {t(`experience.${key.toLowerCase()}`)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px timeline-line md:-translate-x-px" />

          <AnimatePresence mode="popLayout">
            {experience.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`relative flex flex-col md:flex-row gap-6 mb-14 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 timeline-dot rounded-full -translate-x-1/2 z-10 ring-4 ring-darker" />

                <div className="md:w-1/2 pl-10 md:pl-0">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    className={`card-premium p-7 rounded-3xl group neon-border ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}
                  >
                    {/* Header row */}
                    <div className="flex justify-between items-start gap-3 mb-4">
                      <span className="text-primary-light text-xs font-black tracking-widest uppercase">
                        {item.period}
                      </span>
                      <span className={`px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider border flex-shrink-0 ${
                        item.type === 'Freelance'
                          ? 'border-orange-500/40 text-orange-400 bg-orange-500/10'
                          : 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10'
                      }`}>
                        {t(`experience.${item.type.toLowerCase()}`)}
                      </span>
                    </div>

                    {/* Role */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-light transition-colors leading-tight">
                      {t(item.role)}
                    </h3>

                    {/* Company */}
                    <div className="flex items-center gap-2 mb-5">
                      <Building2 size={14} className="text-slate-500 flex-shrink-0" />
                      <span className="text-slate-400 font-semibold text-sm">{item.company}</span>
                    </div>

                    {/* Clients */}
                    {item.clients && item.clients.length > 0 && (
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="text-slate-600 text-[10px] uppercase font-black italic">{t('experience.client')}</span>
                        {item.clients.map((client, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded-md bg-primary/10 border border-primary/20 text-primary-light text-[10px] font-bold uppercase">
                            {client}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Description */}
                    {Array.isArray(t(item.description as string, { returnObjects: true })) ? (
                      <ul className="space-y-2 mb-5">
                        {(t(item.description as string, { returnObjects: true }) as string[]).map((point, i) => (
                          <li key={i} className="flex gap-2.5 text-slate-400 text-sm leading-relaxed">
                            <span className="text-primary mt-1 flex-shrink-0 text-xs">▹</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-slate-400 text-sm leading-relaxed mb-5 italic">{t(item.description as string)}</p>
                    )}

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {item.techStack.map((tech, idx) => (
                        <span key={idx} className="tech-badge">
                          <Code2 size={10} className="text-primary/60" />
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Certificate */}
                    {item.certificate && (
                      <button
                        onClick={() => handleViewCertificate(item.certificate!)}
                        className="w-full flex items-center justify-center gap-2.5 text-xs font-bold text-slate-300 hover:text-white transition-all bg-white/5 hover:bg-primary px-5 py-3 rounded-xl border border-white/5 hover:border-primary group/btn"
                      >
                        <FileText size={15} className="group-hover/btn:rotate-12 transition-transform" />
                        VIEW CERTIFICATE
                        <ExternalLink size={11} className="opacity-50" />
                      </button>
                    )}
                  </motion.div>
                </div>

                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-28"
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="gradient-divider flex-1" />
            <div className="flex items-center gap-2.5 px-5 py-2 glass-effect rounded-2xl border border-white/5">
              <GraduationCap size={18} className="text-secondary" />
              <span className="text-gradient font-black text-lg">{t('education.title')}</span>
            </div>
            <div className="gradient-divider flex-1" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-premium p-7 rounded-3xl group neon-border"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <GraduationCap size={18} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-secondary transition-colors leading-tight">{edu.school}</h4>
                    <p className="text-secondary text-sm font-semibold mt-0.5">{t(edu.major)}</p>
                  </div>
                </div>

                <div className="gradient-divider mb-4" />

                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{edu.period}</span>
                  {edu.gpa && (
                    <>
                      <div className="w-1 h-1 rounded-full bg-white/10" />
                      <span className="text-[10px] font-black text-secondary uppercase tracking-widest">
                        {t('education.gpa')}: {edu.gpa}
                      </span>
                    </>
                  )}
                </div>

                {edu.description && (
                  <p className="text-slate-400 text-sm leading-relaxed">{t(edu.description)}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
