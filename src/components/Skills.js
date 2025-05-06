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
      color: 'from-indigo-400 to-indigo-500',
      hoverColor: 'group-hover:from-indigo-500 group-hover:to-indigo-600',
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
      color: 'from-purple-400 to-purple-500',
      hoverColor: 'group-hover:from-purple-500 group-hover:to-purple-600',
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
      color: 'from-teal-400 to-cyan-500',
      hoverColor: 'group-hover:from-teal-500 group-hover:to-cyan-600',
      items: [
        { name: 'Git & GitHub', percentage: 80 },
        { name: 'AWS', percentage: 60 },
        { name: 'Docker', percentage: 50 },
        { name: 'Figma', percentage: 70 },
      ],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: width => ({
      width: `${width}%`,
      transition: { 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1],
        delay: 0.3
      }
    })
  };

  // Array of technologies for the tech stack section
  const technologies = [
    { name: 'HTML5', icon: '📄' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express', icon: '🚂' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Git', icon: '🔄' },
    { name: 'Tailwind', icon: '💨' },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-slate-50 to-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-indigo-900 mb-3">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600">
            Here are some of the skills I've acquired through my journey as a full stack developer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: groupIndex * 0.15 }}
              whileHover={{ y: -5 }}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 -mt-8 -mr-8 rounded-full bg-gradient-to-br opacity-10"></div>
              
              {/* Category header */}
              <div className={`border-b border-gray-100 p-6 flex items-center gap-4`}>
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r ${skillGroup.color} text-white`}>
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-indigo-900 transition-colors">
                  {skillGroup.category}
                </h3>
              </div>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="p-6 space-y-5"
              >
                {skillGroup.items.map((skill, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <div className="flex justify-between mb-2 items-center">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm font-semibold px-2 py-0.5 rounded-full bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-700">{skill.percentage}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${skillGroup.color} ${skillGroup.hoverColor} transition-all duration-300`}
                        custom={skill.percentage}
                        variants={progressVariants}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Tech stack icons - improved design */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-heading font-bold text-indigo-900 mb-8">Technologies I Work With</h3>
          
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center bg-white p-5 rounded-xl shadow-sm border border-gray-100"
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  y: -5
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.08 }}
              >
                <span className="text-3xl mb-2">{tech.icon}</span>
                <span className="font-medium text-gray-700 text-sm">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Added a call-to-action button */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="#projects"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-medium py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            See My Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 