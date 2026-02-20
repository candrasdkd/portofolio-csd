import React from 'react';
import { motion } from 'framer-motion';
import { HERO_DATA } from '../constants';
import { User, Terminal } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-darker">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Image Frame Effect */}
            <div className="absolute inset-0 bg-primary/20 translate-x-4 translate-y-4 rounded-2xl" />
            <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/5] bg-gray-800">
              {/* 
                 NOTE: To use local assets, place 'profile.jpg' in your public folder 
                 and change src to "/assets/profile.jpg" or import it.
               */}
              <img
                src={"/assets/me.png"}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-primary font-semibold mb-4">
              <User size={20} />
              <span>{t('about.title')}</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('about.heading')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
              {HERO_DATA.description}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              {t('about.p1')}
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-card rounded-xl border border-gray-200 dark:border-gray-800">
                <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">4+</h4>
                <p className="text-gray-500 text-sm">{t('about.yearsExp')}</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-card rounded-xl border border-gray-200 dark:border-gray-800">
                <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">4+</h4>
                <p className="text-gray-500 text-sm">{t('about.projectsCompleted')}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;