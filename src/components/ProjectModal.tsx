import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import { Project, ProjectType } from '@/types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) setCurrentImageIndex(0);
  }, [isOpen, project]);

  if (!project) return null;

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const isMobile = project.type === ProjectType.MOBILE;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl bg-card rounded-2xl overflow-hidden border border-gray-700 shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Close Button Mobile */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-30 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white md:hidden"
            >
              <X size={20} />
            </button>

            {/* --- LEFT SIDE: IMAGE SLIDER --- */}
            <div className={`relative bg-gray-950 flex-shrink-0 flex items-center justify-center ${isMobile
              ? 'w-full md:w-2/5 h-[500px] md:h-auto' // Mobile Layout: Lebih sempit tapi tinggi
              : 'w-full md:w-2/3 h-64 md:h-auto'      // Web Layout: Lebih lebar
              }`}>

              <div className="relative w-full h-full flex items-center justify-center p-6">
                <img
                  src={project.images[currentImageIndex]}
                  alt={project.title}
                  className={`shadow-2xl ${isMobile
                    ? 'max-h-full w-auto object-contain rounded-[2rem] border-4 border-gray-800'
                    : 'w-full h-full object-contain bg-gray-900 rounded-lg' // <--- Ganti jadi ini
                    }`}
                />
              </div>

              {/* Navigation Arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-primary rounded-full text-white transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-primary rounded-full text-white transition-colors"
                  >
                    <ChevronRight size={24} />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-2 h-2 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-primary' : 'bg-white/30'
                          }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* --- RIGHT SIDE: DETAILS --- */}
            <div className={`flex flex-col p-6 md:p-8 overflow-y-auto custom-scrollbar bg-card border-l border-gray-800 ${isMobile ? 'w-full md:w-3/5' : 'w-full md:w-1/3'
              }`}>

              <div className="hidden md:flex justify-end mb-2">
                <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors"><X size={24} /></button>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/50">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 border border-gray-700">
                    {project.type}
                  </span>
                </div>

                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {project.fullDescription}
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-200 mb-3 uppercase tracking-wider">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-md border border-gray-700/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="mt-auto pt-6 border-t border-gray-800">
                <h4 className="text-sm font-semibold text-gray-200 mb-3 uppercase tracking-wider">Available On</h4>
                <div className="grid grid-cols-1 gap-3">

                  {/* Website Demo Link */}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl transition-all font-medium shadow-lg shadow-primary/20"
                    >
                      <ExternalLink size={18} />
                      Live Website
                    </a>
                  )}

                  {/* Mobile Store Links */}
                  <div className="flex gap-3">
                    {project.playStoreUrl && (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#00C48C]/10 hover:bg-[#00C48C]/20 text-[#00C48C] border border-[#00C48C]/50 rounded-xl transition-all font-medium"
                      >
                        {/* Google Play SVG */}
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                        </svg>
                        Play Store
                      </a>
                    )}
                    {project.appStoreUrl && (
                      <a
                        href={project.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white hover:bg-gray-200 text-black rounded-xl transition-all font-medium"
                      >
                        {/* Apple SVG */}
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.87 11.13,7.75 11.9,7.75C12.66,7.75 13.9,6.67 15.4,6.67C16.53,6.69 17.58,7.07 18.43,7.67C17.76,8.29 17.41,9.2 17.5,10.1C17.65,11.57 18.66,12.63 19.95,13.18C19.3,14.86 18.7,16.29 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.37 12.36,4.26 13,3.5Z" />
                        </svg>
                        App Store
                      </a>
                    )}
                  </div>

                  {/* GitHub Repo */}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-all border border-gray-700"
                    >
                      <Github size={18} />
                      View Source Code
                    </a>
                  )}
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