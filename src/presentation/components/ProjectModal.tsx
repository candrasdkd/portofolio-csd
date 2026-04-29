"use client";

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  if (!project || !mounted) return null;

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

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full max-h-[90vh] bg-[#0a1122] rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row ${
              isMobile ? 'max-w-4xl' : 'max-w-5xl'
            }`}
          >
            {/* Absolute Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-[100] p-2 bg-black/40 hover:bg-black/60 rounded-full text-slate-300 hover:text-white border border-white/10 backdrop-blur-md transition-all"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* ── LEFT: Image Carousel ── */}
            <div className={`relative flex items-center justify-center bg-slate-900/50 ${
              isMobile ? 'w-full md:w-2/5 p-8' : 'w-full md:w-1/2 p-6'
            }`}>
              
              {isImgLoading && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                </div>
              )}

              <div className="relative w-full h-48 sm:h-64 md:h-full min-h-[300px] flex items-center justify-center">
                <motion.img
                  key={project.images[currentImageIndex]}
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  onLoad={() => setIsImgLoading(false)}
                  onLoadStart={() => setIsImgLoading(true)}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: isImgLoading ? 0 : 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={isMobile
                    ? 'max-h-full max-w-full object-contain rounded-2xl shadow-xl'
                    : 'max-h-full max-w-full object-contain rounded-xl shadow-lg'
                  }
                />
              </div>

              {/* Nav arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/40 hover:bg-primary rounded-full text-white backdrop-blur-md transition-all hover:scale-110 z-20"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/40 hover:bg-primary rounded-full text-white backdrop-blur-md transition-all hover:scale-110 z-20"
                  >
                    <ChevronRight size={20} />
                  </button>

                  {/* Dot indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md">
                    {project.images.map((_, idx) => (
                      <button
                         key={idx}
                         onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); setIsImgLoading(true); }}
                         className={`rounded-full transition-all duration-300 ${
                           idx === currentImageIndex
                             ? 'w-4 h-1.5 bg-primary'
                             : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'
                         }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* ── RIGHT: Details ── */}
            <div className={`flex flex-col overflow-y-auto custom-scrollbar p-6 md:p-8 ${
              isMobile ? 'w-full md:w-3/5' : 'w-full md:w-1/2'
            }`}>
              
              <div className="flex flex-col gap-5 flex-1 pr-4">
                {/* Title & badges */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider rounded-md bg-primary/10 text-primary-light border border-primary/20">
                      <Tag size={10} />
                      {t(`projects.${project.category.toLowerCase()}`)}
                    </span>
                    <span className="flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider rounded-md bg-white/5 text-slate-300 border border-white/10">
                      {project.type === ProjectType.MOBILE ? <Smartphone size={10} /> : <Monitor size={10} />}
                      {t(`projects.${project.type.toLowerCase()}`)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white leading-tight">{project.title}</h3>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent" />

                {/* Description */}
                <p className="text-slate-400 leading-relaxed text-sm">
                  {t(project.fullDescription)}
                </p>

                {/* Technologies */}
                <div>
                  <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">
                    {t('projects.technologies')}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="mt-auto pt-6 border-t border-white/5">
                  <div className="flex flex-col gap-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3 bg-primary hover:bg-primary-light text-white rounded-xl font-bold text-sm transition-colors"
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
                          className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#00C48C]/10 hover:bg-[#00C48C]/20 text-[#00C48C] rounded-xl font-bold text-xs transition-colors"
                        >
                          Play Store
                        </a>
                      )}
                      {project.appStoreUrl && (
                        <a
                          href={project.appStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-xs transition-colors"
                        >
                          App Store
                        </a>
                      )}
                    </div>

                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-2.5 bg-transparent border border-white/20 hover:bg-white/5 text-slate-300 rounded-xl font-bold text-xs transition-colors"
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

  return createPortal(modalContent, document.body);
};

export default ProjectModal;
