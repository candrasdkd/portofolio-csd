"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Github, ExternalLink, Smartphone, Monitor, Tag } from 'lucide-react';
import { Project, ProjectType } from '@/domain/entities';
import { useTranslation } from 'react-i18next';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImgLoading, setIsImgLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
      setIsImgLoading(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen, project]);

  useEffect(() => {
    if (!isOpen || !project) return;
    project.images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [isOpen, project]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && project && project.images.length > 1)
        setCurrentImageIndex((p) => (p + 1) % project.images.length);
      if (e.key === 'ArrowLeft' && project && project.images.length > 1)
        setCurrentImageIndex((p) => (p - 1 + project.images.length) % project.images.length);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, project, onClose]);

  if (!project) return null;

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsImgLoading(true);
    setCurrentImageIndex((p) => (p + 1) % project.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsImgLoading(true);
    setCurrentImageIndex((p) => (p - 1 + project.images.length) % project.images.length);
  };

  const isMobile = project.type === ProjectType.MOBILE;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 24 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full glass-strong rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.7)] flex flex-col md:flex-row my-auto ${
              isMobile ? 'max-w-3xl' : 'max-w-5xl'
            }`}
          >
            {/* Ambient glow top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

            {/* ── LEFT: Image Carousel ── */}
            <div className={`relative bg-slate-950 flex-shrink-0 flex items-center justify-center ${
              isMobile ? 'w-full md:w-2/5 h-[420px] md:h-auto' : 'w-full md:w-3/5 h-72 md:h-auto'
            }`}>
              {/* Loading spinner */}
              {isImgLoading && (
                <div className="absolute inset-0 flex items-center justify-center z-10 bg-slate-950">
                  <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                </div>
              )}

              <div className="relative w-full h-full flex items-center justify-center p-6 md:p-8">
                <motion.img
                  key={project.images[currentImageIndex]}
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  onLoad={() => setIsImgLoading(false)}
                  onLoadStart={() => setIsImgLoading(true)}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: isImgLoading ? 0 : 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={isMobile
                    ? 'max-h-full w-auto object-contain rounded-[2.5rem] border-[6px] border-slate-800 shadow-2xl'
                    : 'w-full h-full object-contain rounded-xl'
                  }
                />
              </div>

              {/* Nav arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 glass-strong hover:bg-primary rounded-xl text-white border border-white/10 hover:border-primary transition-all hover:scale-110 z-20"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 glass-strong hover:bg-primary rounded-xl text-white border border-white/10 hover:border-primary transition-all hover:scale-110 z-20"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>

                  {/* Dot indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {project.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); setIsImgLoading(true); }}
                        className={`rounded-full transition-all duration-300 ${
                          idx === currentImageIndex
                            ? 'w-7 h-2 bg-primary shadow-[0_0_8px_rgba(139,92,246,0.6)]'
                            : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Counter */}
                  <div className="absolute top-4 left-4 px-2.5 py-1 glass-strong rounded-lg text-[10px] font-black text-slate-400 border border-white/8 z-20">
                    {currentImageIndex + 1} / {project.images.length}
                  </div>
                </>
              )}
            </div>

            {/* ── RIGHT: Details ── */}
            <div className={`flex flex-col overflow-y-auto custom-scrollbar border-l border-white/8 ${
              isMobile ? 'w-full md:w-3/5' : 'w-full md:w-2/5'
            }`}>
              {/* Close button */}
              <div className="flex justify-end p-5 pb-0 flex-shrink-0">
                <button
                  onClick={onClose}
                  className="p-2 glass-effect rounded-xl text-slate-400 hover:text-white border border-white/8 hover:border-white/20 hover:bg-white/5 transition-all"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6 md:p-8 flex flex-col gap-6 flex-1">
                {/* Title & badges */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="flex items-center gap-1.5 px-3 py-1 text-[10px] font-black uppercase tracking-wider rounded-lg bg-primary/15 text-primary-light border border-primary/25">
                      <Tag size={10} />
                      {t(`projects.${project.category.toLowerCase()}`)}
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 text-[10px] font-black uppercase tracking-wider rounded-lg bg-white/5 text-slate-400 border border-white/8">
                      {project.type === ProjectType.MOBILE ? <Smartphone size={10} /> : <Monitor size={10} />}
                      {t(`projects.${project.type.toLowerCase()}`)}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">{project.title}</h3>
                </div>

                {/* Divider */}
                <div className="gradient-divider" />

                {/* Description */}
                <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                  {t(project.fullDescription)}
                </p>

                {/* Technologies */}
                <div>
                  <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">
                    {t('projects.technologies')}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="mt-auto pt-6 border-t border-white/8">
                  <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">
                    {t('projects.availableOn')}
                  </h4>
                  <div className="flex flex-col gap-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-2xl font-black text-sm"
                      >
                        <ExternalLink size={16} />
                        {t('projects.liveDemo')}
                      </a>
                    )}

                    <div className="flex gap-3">
                      {project.playStoreUrl && (
                        <a
                          href={project.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#00C48C]/10 hover:bg-[#00C48C]/20 text-[#00C48C] border border-[#00C48C]/30 rounded-2xl font-black text-xs transition-all hover:scale-[1.02]"
                        >
                          <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" /></svg>
                          Play Store
                        </a>
                      )}
                      {project.appStoreUrl && (
                        <a
                          href={project.appStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white hover:bg-slate-100 text-slate-900 rounded-2xl font-black text-xs transition-all hover:scale-[1.02]"
                        >
                          <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24"><path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.87 11.13,7.75 11.9,7.75C12.66,7.75 13.9,6.67 15.4,6.67C16.53,6.69 17.58,7.07 18.43,7.67C17.76,8.29 17.41,9.2 17.5,10.1C17.65,11.57 18.66,12.63 19.95,13.18C19.3,14.86 18.7,16.29 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.37 12.36,4.26 13,3.5Z" /></svg>
                          App Store
                        </a>
                      )}
                    </div>

                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-2xl font-black text-sm border border-white/10"
                      >
                        <Github size={16} />
                        {t('projects.viewSource')}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
