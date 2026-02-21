import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '@/constants';
import { Cpu } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Skills: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3 transition-colors"
          >
            <Cpu className="text-secondary" />
            {t('skills.title')}
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 transition-colors">{t('skills.subtitle')}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              whileHover={{ y: -5, borderColor: '#8b5cf6' }}
              className="bg-gray-50 dark:bg-card p-6 rounded-xl border border-gray-200 dark:border-gray-800 flex flex-col items-center justify-center gap-4 text-center transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                {/* Simple placeholder icon logic if no SVG assets provided */}
                <span className="text-2xl font-bold text-gray-400 group-hover:text-primary transition-colors">
                  {skill.name.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="text-gray-900 dark:text-white font-medium mb-2 transition-colors">{skill.name}</h3>
                <div className="bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden w-32 mx-auto">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-primary"
                  />
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;