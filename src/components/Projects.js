import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      imageUrl: 'https://placehold.co/600x400/3A59D1/B5FCCD?text=E-Commerce',
      category: 'fullstack',
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard that displays current and forecasted weather data using a third-party API.',
      tech: ['React', 'Tailwind CSS', 'API Integration'],
      imageUrl: 'https://placehold.co/600x400/3A59D1/B5FCCD?text=Weather+App',
      category: 'frontend',
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A task management application with drag-and-drop functionality, task categorization, and user collaboration.',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      imageUrl: 'https://placehold.co/600x400/3A59D1/B5FCCD?text=Task+Manager',
      category: 'fullstack',
      link: '#',
      github: '#',
    },
    
    {
      id: 5,
      title: 'Blog API',
      description: 'RESTful API for a blog platform with authentication, post creation, comments, and user management.',
      tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      imageUrl: 'https://placehold.co/600x400/3A59D1/B5FCCD?text=Blog+API',
      category: 'backend',
      link: '#',
      github: '#',
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time chat application with private messaging, group chats, and message notifications.',
      tech: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      imageUrl: 'https://placehold.co/600x400/3A59D1/B5FCCD?text=Chat+App',
      category: 'fullstack',
      link: '#',
      github: '#',
    },
  ];

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Frontend', value: 'frontend' },
    { name: 'Backend', value: 'backend' },
    { name: 'Full Stack', value: 'fullstack' },
  ];
  
  const filteredProjects = 
    activeFilter === 'all' 
      ? projects 
      : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-[#B5FCCD]/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3A59D1] mb-3">My Projects</h2>
          <div className="w-20 h-1 bg-[#3D90D7] mx-auto"></div>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-[#3A59D1]/80">
            Here's a selection of projects I've worked on that showcase my skills and experience.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 py-3 rounded-md font-medium transition-all duration-200 ${
                activeFilter === filter.value 
                  ? 'bg-[#3A59D1] text-white shadow-md' 
                  : 'bg-white text-[#3A59D1] hover:bg-[#B5FCCD]/50 border border-[#3D90D7]/20'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg overflow-hidden border border-[#3D90D7]/10 shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3A59D1]/90 via-[#3A59D1]/50 to-transparent flex items-end">
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-5">
                  <p className="text-[#3A59D1]/80 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 text-xs font-medium bg-[#B5FCCD]/50 text-[#3D90D7] rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mt-6">
                    <a 
                      href={project.link} 
                      className="inline-flex items-center text-[#3D90D7] font-medium hover:text-[#3A59D1] transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <span>Live Demo</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    
                    <a 
                      href={project.github} 
                      className="inline-flex items-center text-[#3A59D1]/70 hover:text-[#3A59D1] transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.934.359.31.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"></path>
                      </svg>
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 