import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/constants';
import { Project, ProjectCategory, ProjectType } from '@/types';
import ProjectModal from '@/components/ProjectModal';
import { Layers, Smartphone, Globe, Monitor } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const itemsPerPage = 4;

  const filteredProjects = useMemo(() => {
    return filter === 'All'
      ? PROJECTS
      : PROJECTS.filter(p => p.category === filter);
  }, [filter]);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const currentProjects = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProjects.slice(start, start + itemsPerPage);
  }, [filteredProjects, currentPage, itemsPerPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFilterChange = (newFilter: ProjectCategory | 'All') => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-darker">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Layers className="text-primary" />
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work across mobile and web development.
          </p>
        </motion.div>

        {/* Filter Controls */}
        <div className="flex justify-center mb-12">
          <div className="bg-card p-1 rounded-xl flex gap-1 border border-gray-800">
            {['All', ProjectCategory.PERSONAL, ProjectCategory.CLIENT].map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilterChange(cat as ProjectCategory | 'All')}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${filter === cat
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-card rounded-2xl overflow-hidden border border-gray-800 shadow-xl cursor-pointer flex flex-col h-full"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Container */}
              {/* Mobile: bg-gray-950 biar kelihatan frame-nya. Web: Full image. */}
              <div className={`relative h-64 overflow-hidden ${project.type === ProjectType.MOBILE ? 'bg-gray-950' : 'bg-gray-900'}`}>
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${project.type === ProjectType.MOBILE
                    ? 'object-contain p-4'
                    : 'object-cover object-top' // <--- Ganti jadi ini
                    }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-darker/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Badge Type (Web/Mobile) */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-xs text-white border border-gray-700 flex items-center gap-1">
                  {project.type === ProjectType.MOBILE ? <Smartphone size={14} /> : <Monitor size={14} />}
                  {project.type}
                </div>

                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white border border-primary/50">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300 border border-gray-700">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300 border border-gray-700">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${currentPage === i + 1
                  ? 'bg-primary text-white scale-110'
                  : 'bg-card text-gray-400 hover:bg-gray-800 border border-gray-800'
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