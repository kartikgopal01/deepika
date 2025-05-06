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
      imageUrl: 'https://placehold.co/600x400/5e0f4d/ffffff?text=E-Commerce',
      category: 'fullstack',
      link: '#',
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard that displays current and forecasted weather data using a third-party API.',
      tech: ['React', 'Tailwind CSS', 'API Integration'],
      imageUrl: 'https://placehold.co/600x400/5e0f4d/ffffff?text=Weather+App',
      category: 'frontend',
      link: '#',
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A task management application with drag-and-drop functionality, task categorization, and user collaboration.',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      imageUrl: 'https://placehold.co/600x400/5e0f4d/ffffff?text=Task+Manager',
      category: 'fullstack',
      link: '#',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing skills, projects, and contact information with modern animations.',
      tech: ['React', 'Framer Motion', 'Tailwind CSS'],
      imageUrl: 'https://placehold.co/600x400/5e0f4d/ffffff?text=Portfolio',
      category: 'frontend',
      link: '#',
    },
    {
      id: 5,
      title: 'Blog API',
      description: 'RESTful API for a blog platform with authentication, post creation, comments, and user management.',
      tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      imageUrl: 'https://placehold.co/600x400/5e0f4d/ffffff?text=Blog+API',
      category: 'backend',
      link: '#',
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time chat application with private messaging, group chats, and message notifications.',
      tech: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      imageUrl: 'https://placehold.co/600x400/5e0f4d/ffffff?text=Chat+App',
      category: 'fullstack',
      link: '#',
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-indigo-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -left-20 w-60 h-60 bg-teal-300 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-indigo-900 mb-3">My Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600">
            Here's a selection of projects I've worked on that showcase my skills and experience.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filters.map((filter, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.value 
                  ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg shadow-indigo-500/20' 
                  : 'bg-white/80 backdrop-blur-sm text-indigo-700 hover:bg-indigo-50 shadow-md border border-white/50'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              {filter.name}
            </motion.button>
          ))}
        </motion.div>

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
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 overflow-hidden hover:shadow-2xl transition-all duration-500"
                whileHover={{ 
                  y: -15, 
                  boxShadow: "0 25px 35px -5px rgba(79, 70, 229, 0.2)",
                  transition: { duration: 0.4 }
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-indigo-800/50 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 text-xs font-medium bg-indigo-50 text-indigo-600 rounded-full border border-indigo-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <motion.a 
                    href={project.link} 
                    className="inline-flex items-center font-medium text-teal-500 hover:text-teal-600 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    View Project
                    <svg className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </motion.div>
        )}
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden inline-flex items-center bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center">
              View More on GitHub
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.934.359.31.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"></path>
              </svg>
            </span>
            <motion.span 
              className="absolute inset-0 bg-white"
              initial={{ x: "-100%", opacity: 0.5 }}
              whileHover={{ x: "100%", opacity: 0.2 }}
              transition={{ duration: 0.5 }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 