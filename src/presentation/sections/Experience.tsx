import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useExperience } from '@/application/hooks/useExperience';
import { Briefcase, Code2, ExternalLink, FileText, GraduationCap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Experience: React.FC = () => {
  const { t } = useTranslation();
  const { experience, education, filter, setFilter } = useExperience();

  const handleViewCertificate = (pdfUrl: string) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <section id="experience" className="py-20 px-4 md:px-8 bg-dark">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-center gap-3 transition-colors">
            <Briefcase className="text-primary" />
            {t('experience.title')}
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['All', 'Contract', 'Freelance'].map((keyName) => (
              <button
                key={keyName}
                onClick={() => setFilter(keyName as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${filter === keyName
                  ? 'bg-primary border-primary text-white dark:text-dark shadow-[0_0_15px_rgba(var(--primary-rgb),0.4)]'
                  : 'bg-transparent border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500'}`}
              >
                {t(`experience.${keyName.toLowerCase()}`)}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="relative space-y-12">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 -translate-x-1/2 md:translate-x-0" />

          <AnimatePresence mode="popLayout">
            {experience.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="absolute left-4 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-dark -translate-x-1/2 z-10" />

                <div className="md:w-1/2 pl-12 md:pl-0">
                  <div className={`p-6 bg-white dark:bg-card rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-all shadow-xl group ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-primary text-sm font-mono font-semibold">{item.period}</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${item.type === 'Freelance'
                        ? 'border-orange-500/50 text-orange-500 bg-orange-500/10'
                        : 'border-blue-500/50 text-blue-500 bg-blue-500/10'}`}>
                        {t(`experience.${item.type.toLowerCase()}`)}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">{t(item.role)}</h3>

                    <div className="mb-4 mt-1">
                      <h4 className="text-gray-600 dark:text-gray-400 font-medium">{item.company}</h4>
                      {item.clients && item.clients.length > 0 && (
                        <div className="flex flex-wrap items-center gap-2 mt-2">
                          <span className="text-gray-500 dark:text-gray-600 text-[10px] uppercase font-bold italic">{t('experience.client')}</span>
                          {item.clients.map((client, idx) => (
                            <span key={idx} className="px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase">{client}</span>
                          ))}
                        </div>
                      )}
                    </div>

                    {Array.isArray(t(item.description as string, { returnObjects: true })) ? (
                      <ul className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 list-disc list-outside ml-4 space-y-1">
                        {(t(item.description as string, { returnObjects: true }) as string[]).map((point, i) => (<li key={i}>{point}</li>))}
                      </ul>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 italic">{t(item.description as string)}</p>
                    )}

                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.techStack.map((tech, idx) => (
                        <span key={idx} className="flex items-center gap-1 text-[10px] text-gray-300 bg-white/5 border border-white/10 px-2 py-1 rounded-md">
                          <Code2 size={10} className="text-primary/70" />
                          {tech}
                        </span>
                      ))}
                    </div>

                    {item.certificate && (
                      <button
                        onClick={() => handleViewCertificate(item.certificate!)}
                        className="flex items-center gap-2 text-[11px] font-bold text-white/80 hover:text-primary transition-all bg-gray-900/80 hover:bg-gray-900 px-4 py-2.5 rounded-xl border border-gray-700 hover:border-primary/50 shadow-lg"
                      >
                        <FileText size={14} />
                        VIEW PAKLARING
                        <ExternalLink size={10} className="opacity-50" />
                      </button>
                    )}
                  </div>
                </div>
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 flex items-center justify-center gap-3">
            <GraduationCap className="text-primary" />
            {t('education.title')}
          </h3>

          <div className="grid gap-6">
            {education.map((edu) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-6 bg-white dark:bg-card rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-primary/30 transition-all shadow-lg"
              >
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{edu.school}</h4>
                    <p className="text-primary font-medium">{t(edu.major)}</p>
                  </div>
                  <div className="flex flex-col md:items-end">
                    <span className="text-sm font-mono text-gray-500">{edu.period}</span>
                    <span className="text-xs font-bold text-primary mt-1">{t('education.gpa')}: {edu.gpa}</span>
                  </div>
                </div>
                {edu.description && (
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-4 leading-relaxed">{t(edu.description)}</p>
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
