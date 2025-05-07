import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend Development',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      items: [
        { name: 'HTML & CSS', percentage: 90 },
        { name: 'JavaScript', percentage: 85 },
        { name: 'React.js', percentage: 80 },
        { name: 'Tailwind CSS', percentage: 85 },
      ],
    },
    {
      category: 'Backend Development',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      items: [
        { name: 'Node.js', percentage: 75 },
        { name: 'Express.js', percentage: 70 },
        { name: 'MongoDB', percentage: 65 },
        { name: 'SQL', percentage: 60 },
      ],
    },
    {
      category: 'Tools & Others',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      items: [
        { name: 'Git & GitHub', percentage: 80 },
        { name: 'AWS', percentage: 60 },
        { name: 'Docker', percentage: 50 },
        { name: 'Figma', percentage: 70 },
      ],
    },
  ];

  // Technologies data with SVG icons, types, and colors - using compact Lucid-style icons
  const techCategories = [
    {
      name: 'Frontend',
      techs: [
        { 
          name: 'HTML5', 
          icon: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 3l14 0l-1.24 14.85L12 20l-5.76-2.15L5 3z" />
              <path d="M17.5 9l-11 0" />
              <path d="M10 12l-2.25 0l0.25 3l4.5 1.5l4.75 -1.5l0.5 -5.5" />
            </svg>
          ),
          color: '#E34F26'
        },
        { 
          name: 'CSS3', 
          icon: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 3l14 0l-1.24 14.85L12 20l-5.76-2.15L5 3z" />
              <path d="M16 6.5l-8 0" />
              <path d="M15.5 10l-7 0l0.25 3l6.5 0l-0.25 3.5l-3.5 1l-3.5 -1l-0.125 -1.5" />
            </svg>
          ),
          color: '#264DE4'
        },
        { 
          name: 'JavaScript', 
          icon: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 4L4 4L4 20L20 20L20 4Z" />
              <path d="M12 12L12 16.5C12 17.3333 11.4 19 9 19C6.6 19 6 17.3333 6 16.5" />
              <path d="M17.5 15.5C17.5 16.6046 16.6046 17.5 15.5 17.5C14.3954 17.5 13.5 16.6046 13.5 15.5C13.5 14.3954 14.3954 13.5 15.5 13.5C16.6046 13.5 17.5 14.3954 17.5 15.5Z" />
              <path d="M15.5 13.5V9H17.5" />
            </svg>
          ),
          color: '#F7DF1E'
        },
        { 
          name: 'React', 
          icon: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" />
              <path d="M21 12C21 13.6569 17.1944 15 12.5 15C7.80558 15 4 13.6569 4 12C4 10.3431 7.80558 9 12.5 9C17.1944 9 21 10.3431 21 12Z" transform="rotate(60 12 12)" />
              <path d="M21 12C21 13.6569 17.1944 15 12.5 15C7.80558 15 4 13.6569 4 12C4 10.3431 7.80558 9 12.5 9C17.1944 9 21 10.3431 21 12Z" transform="rotate(120 12 12)" />
              <path d="M21 12C21 13.6569 17.1944 15 12.5 15C7.80558 15 4 13.6569 4 12C4 10.3431 7.80558 9 12.5 9C17.1944 9 21 10.3431 21 12Z" />
            </svg>
          ),
          color: '#61DAFB'
        },
        { 
          name: 'Tailwind', 
          icon: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 12C7.5 12 8.5 10.2 10 10.2C11.5 10.2 11.5 12 13 12C14.5 12 15.5 8 17 8C18.5 8 19.5 10.2 21 10.2" />
              <path d="M3 16C4.5 16 5.5 14.2 7 14.2C8.5 14.2 8.5 16 10 16C11.5 16 12.5 12 14 12C15.5 12 16.5 14.2 18 14.2" />
            </svg>
          ),
          color: '#06B6D4'
        },
      ]
    },
    {
      name: 'Backend',
      techs: [
        { 
          name: 'Node.js', 
          icon: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21.7L18.6 18M22 12V16.8M12 21.7V16.8M18.6 6L12 2.3L5.4 6M2 12V16.8M5.4 18L12 21.7M12 2.3V7.2M5.4 6L12 9.7L18.6 6M12 16.8V12V7.2M22 12L18.6 9.7M2 12L5.4 9.7M12 12L5.4 9.7M12 12L18.6 9.7" />
            </svg>
          ),
          color: '#339933'
        },
        { 
          name: 'Express', 
          icon: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 7H19M5 12H19M5 17H19" />
              <path d="M3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5Z" />
            </svg>
          ),
          color: '#000000'
        },
        { 
          name: 'MongoDB', 
          icon: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15.6 14.5C15.8 14.8 16 15.1 16.1 15.5C16.1 15.6 16.1 15.7 16.2 15.8C16.3 16.3 16.4 16.7 16.4 17.2C16.4 17.9 16.3 18.5 16 19.1C15.9 19.4 15.8 19.7 15.6 20" />
              <path d="M8.39998 14.5C8.19998 14.8 7.99998 15.1 7.89998 15.5C7.89998 15.6 7.89998 15.7 7.79998 15.8C7.69998 16.3 7.59998 16.7 7.59998 17.2C7.59998 17.9 7.69998 18.5 7.99998 19.1C8.09998 19.4 8.19998 19.7 8.39998 20" />
              <path d="M12 7L12 20M12 7C12 7 7 3 6 6C5 9 12 12 12 12C12 12 19 9 18 6C17 3 12 7 12 7Z" />
            </svg>
          ),
          color: '#47A248'
        },
      ]
    },
    {
      name: 'Tools',
      techs: [
        { 
          name: 'Git', 
          icon: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 11L14.5 5.5" />
              <path d="M12 11L9.5 5.5" />
              <path d="M12 11L12 19" />
              <circle cx="12" cy="11" r="2.5" />
              <circle cx="14.5" cy="5.5" r="1.75" />
              <circle cx="9.5" cy="5.5" r="1.75" />
              <circle cx="12" cy="19" r="1.75" />
            </svg>
          ),
          color: '#F05032'
        },
        { 
          name: 'GitHub', 
          icon: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2.25C6.61 2.25 2.25 6.61 2.25 12C2.25 16.25 4.94 19.83 8.7 21.12C9.01 21.18 9.13 20.99 9.13 20.82C9.13 20.67 9.12 20.01 9.12 19.21C7.28 19.47 6.4 18.76 6.13 18.19C5.97 17.88 5.51 16.97 5.13 16.82C4.81 16.69 4.5 16.44 5.12 16.43C5.7 16.42 6.13 17.08 6.26 17.4C7.01 18.87 8.28 18.22 9.15 18.04C9.23 17.43 9.45 17.02 9.7 16.78C7.9 16.55 6 15.76 6 12.3C6 11.3 6.3 10.47 6.27 9.83C6.27 9.83 6.27 9.83 6.28 9.82C6.28 9.81 6.28 9.8 6.29 9.79C6.29 9.78 6.3 9.77 6.3 9.76C6.3 9.76 6.3 9.76 6.31 9.76C6.5 9.56 6.27 9.1 6.27 9.1C6.27 9.1 6.85 9.06 7.38 10C7.38 10 7.65 9.9 8.11 9.8C8.58 9.69 8.14 9.95 8.14 9.95C8.28 10.18 8.5 10.62 8.5 11.3C8.5 12.5 8.28 13.58 7.84 14.04C7.84 14.04 7.8 14.24 8.06 14.38C8.32 14.5 8.87 14.84 8.87 15.25C8.87 15.85 8.86 18.01 8.86 18.01C8.86 18.19 8.97 18.38 9.29 18.31C13.05 17.02 15.74 13.44 15.74 12C15.75 6.61 11.39 2.25 12 2.25Z" />
            </svg>
          ),
          color: '#181717'
        },
        { 
          name: 'VS Code', 
          icon: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 6L6 13L3 11M16 6L16 18L3 15M16 6L21 3V18L16 18" />
            </svg>
          ),
          color: '#007ACC'
        },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 150,
        damping: 15
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    },
    hover: { 
      scale: 1.08,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section id="skills" className="py-10 bg-[#3A59D1] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Skills & Expertise</h2>
          <div className="w-16 h-1 bg-[#7AC6D2] mx-auto mb-4"></div>
          <p className="max-w-2xl mx-auto text-base text-white/80">
            Technologies and tools I work with
          </p>
        </div>

        {/* Tech stack - with compact design and improved transitions */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-10"
        >
          {techCategories.map((category, catIndex) => (
            <motion.div 
              key={catIndex} 
              className="mb-8"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold text-[#B5FCCD] mb-5 text-center md:text-left">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 justify-start">
                {category.techs.map((tech, techIndex) => (
                  <motion.div 
                    key={techIndex}
                    className="flex flex-col items-center group"
                    variants={itemVariants}
                    whileHover="hover"
                  >
                    <motion.div 
                      className="w-16 h-16 bg-white/10 rounded-xl p-3 flex items-center justify-center mb-2 transition-all duration-300 backdrop-blur-sm group-hover:bg-white/20 border border-white/10 group-hover:border-[#7AC6D2]/30 shadow-sm"
                      variants={iconVariants}
                      style={{ 
                        boxShadow: `0 3px 10px rgba(0, 0, 0, 0.1)`,
                      }}
                    >
                      <div className="w-full h-full" style={{ color: tech.color }}>
                        {tech.icon}
                      </div>
                    </motion.div>
                    <motion.span 
                      className="text-sm font-medium text-white/90 group-hover:text-[#B5FCCD] transition-colors duration-300"
                      variants={itemVariants}
                    >
                      {tech.name}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 