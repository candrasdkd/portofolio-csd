"use client";

import React, { useState, useRef } from 'react';
import { Project, ProjectCategory, ProjectType } from '@/domain/entities';
import { useProjects } from '@/application/hooks/useProjects';
import { useGeneratePortfolio } from '@/application/hooks/useGeneratePortfolio';
import ProjectModal from '@/presentation/components/ProjectModal';
import { Layers, Smartphone, Globe, Monitor, Download, Loader2, ArrowRight, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const { projects, filter, currentPage, totalPages, handleFilterChange, handlePageChange } = useProjects();
  const { isGeneratingPDF, handleDownloadPortfolioPDF } = useGeneratePortfolio();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const CATEGORIES = ['All', ProjectCategory.PERSONAL, ProjectCategory.CLIENT];

  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax background orbs
    gsap.to('.project-orb-1', {
      y: -150,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    gsap.to('.project-orb-2', {
      y: 150,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    // Header animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      }
    });

    tl.fromTo('.projects-header',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    ).fromTo('.projects-controls',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      "-=0.3"
    );
  }, { scope: containerRef });

  // Animate projects when they change (filtering/pagination)
  useGSAP(() => {
    gsap.fromTo('.project-card',
      { opacity: 0, y: 30, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.2)" }
    );
  }, { dependencies: [projects], scope: containerRef });

  return (
    <section id="projects" ref={containerRef} className="py-32 px-4 md:px-8 relative overflow-hidden" style={{ background: '#030d1f' }}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="orb orb-primary w-[500px] h-[500px] bottom-0 right-0 opacity-30 project-orb-1" />
        <div className="orb orb-secondary w-[400px] h-[400px] top-0 left-0 opacity-25 project-orb-2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 projects-header opacity-0">
          <span className="section-badge mb-6 inline-flex magnetic">
            <Layers size={13} />
            {t('projects.title')}
          </span>
          <h2 className="section-heading text-white mt-4 mb-4 magnetic">
            <span className="text-gradient">{t('projects.title')}</span>
          </h2>
          <div className="gradient-divider w-32 mx-auto mb-4" />
          <p className="text-slate-400 text-base max-w-xl mx-auto magnetic">{t('projects.subtitle')}</p>
        </div>

        {/* Controls row */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-14 projects-controls opacity-0">
          {/* Category filter */}
          <div className="glass-effect p-1.5 rounded-2xl flex gap-1 border border-white/5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilterChange(cat as ProjectCategory | 'All')}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all duration-300 select-none magnetic ${
                  filter === cat
                    ? 'bg-primary text-white shadow-[0_4px_12px_rgba(139,92,246,0.35)] scale-[1.03]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat === 'All' ? t('experience.all') : t(`projects.${cat.toLowerCase()}`)}
              </button>
            ))}
          </div>

          {/* Download portfolio */}
          <button
            onClick={handleDownloadPortfolioPDF}
            disabled={isGeneratingPDF}
            className="flex items-center gap-2 px-6 py-2.5 glass-effect border border-white/10 hover:border-primary/40 rounded-2xl text-sm font-bold text-slate-300 hover:text-white transition-all disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5 magnetic"
          >
            {isGeneratingPDF
              ? <><Loader2 size={16} className="animate-spin" />{t('projects.downloadBtn')}</>
              : <><Download size={16} />{t('projects.downloadBtn')}</>
            }
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-14">
          {projects.map((project) => (
            <article
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="project-card opacity-0 group card-premium rounded-3xl overflow-hidden cursor-pointer flex flex-col h-full magnetic"
            >
              {/* Image area */}
              <div className={`relative overflow-hidden ${
                project.type === ProjectType.MOBILE ? 'h-64 bg-slate-950' : 'h-60 bg-slate-950'
              }`}>
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${
                    project.type === ProjectType.MOBILE
                      ? 'object-contain p-6'
                      : 'object-cover object-top'
                  }`}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Tags */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-xl px-3 py-1.5 rounded-xl text-[10px] font-bold text-white border border-white/10">
                    {project.type === ProjectType.MOBILE
                      ? <Smartphone size={12} />
                      : <Monitor size={12} />
                    }
                    {t(`projects.${project.type.toLowerCase()}`)}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="bg-primary/25 backdrop-blur-xl px-3 py-1.5 rounded-xl text-[10px] font-bold text-primary-light border border-primary/30">
                    {t(`projects.${project.category.toLowerCase()}`)}
                  </span>
                </div>

                {/* Hover cta */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 btn-primary px-5 py-2.5 rounded-2xl text-sm font-bold">
                    <ExternalLink size={15} />
                    {t('projects.liveDemo') || 'View Details'}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-primary-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-5 line-clamp-2 flex-grow leading-relaxed">
                  {t(project.description)}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-badge">+{project.technologies.length - 4}</span>
                  )}
                </div>

                {/* Bottom action */}
                <div className="flex items-center gap-1.5 mt-5 pt-5 border-t border-white/5">
                  <span className="text-xs font-bold text-slate-500 group-hover:text-primary-light transition-colors">
                    View Details
                  </span>
                  <ArrowRight
                    size={13}
                    className="text-slate-600 group-hover:text-primary-light group-hover:translate-x-1 transition-all"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2">
            {[...Array(totalPages)].map((_, i) => (
               <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all select-none magnetic ${
                  currentPage === i + 1
                    ? 'bg-primary text-white shadow-[0_4px_14px_rgba(139,92,246,0.4)] scale-110'
                    : 'glass-effect text-slate-400 hover:text-white border border-white/5 hover:border-white/15'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}

        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

export default Projects;
