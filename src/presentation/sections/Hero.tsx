import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Download, Loader2 } from 'lucide-react';
import { portfolioRepository } from '@/data/portfolio.repository';
import { useGenerateCV } from '@/application/hooks/useGenerateCV';
import { useTranslation } from 'react-i18next';

const heroData = portfolioRepository.getHeroData();

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { isDownloading, handleDownloadCV } = useGenerateCV();

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-dark">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 text-primary text-sm font-medium mb-6 backdrop-blur-sm">
            {t('hero.greeting')} {heroData.name}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight transition-colors">
            {heroData.role}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed transition-colors">
            {heroData.tagline}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#projects"
              className="px-6 py-3 md:px-8 md:py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition-all hover:scale-105 shadow-[0_0_20px_rgba(139,92,246,0.3)] w-full sm:w-auto">
              {t('hero.viewWork')}
            </a>

            <button onClick={handleDownloadCV} disabled={isDownloading}
              className="px-6 py-3 md:px-8 md:py-4 bg-gray-800 dark:bg-white text-white dark:text-gray-900 rounded-full font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto disabled:opacity-70 disabled:hover:scale-100">
              {isDownloading ? (
                <><Loader2 size={20} className="animate-spin" />{t('hero.generating')}</>
              ) : (
                <><Download size={20} />{t('hero.downloadCV')}</>
              )}
            </button>

            <a href="#contact"
              className="px-6 py-3 md:px-8 md:py-4 bg-transparent border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 text-gray-800 dark:text-white rounded-full font-semibold transition-all hover:bg-gray-100 dark:hover:bg-gray-800 w-full sm:w-auto">
              {t('hero.contactMe')}
            </a>
          </div>

          <div className="mt-12 flex justify-center gap-6">
            <a href={heroData.socials.github} target="_blank" rel="noopener noreferrer"
              className="p-3 bg-gray-900/50 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-colors border border-gray-800">
              <Github size={20} />
            </a>
            <a href={heroData.socials.linkedin} target="_blank" rel="noopener noreferrer"
              className="p-3 bg-gray-900/50 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-colors border border-gray-800">
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
