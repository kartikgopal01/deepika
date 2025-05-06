import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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
        ease: [0.22, 1, 0.36, 1] // custom bezier curve for smooth animation
      }
    }
  };

  // Education and interests data
  const education = [
    { title: "Computer Science And Engeneering (Data Science)", place: "PESITM", period: "2025 - Present" },

  ];

  const interests = [
    "Web Development",
    "UI/UX Design",
    "Cloud Computing",
    "Machine Learning",
    "Open Source"
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-indigo-900 mb-3">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Image Column - Takes 5/12 on medium screens */}
          <motion.div
            className="md:col-span-5 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 p-1 shadow-xl">
              <div className="relative aspect-w-4 aspect-h-5 overflow-hidden rounded-xl shadow-inner">
                {/* Replace this with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-indigo-900 via-purple-800 to-cyan-700 flex items-center justify-center">
                  <img src='images/icon.png'/>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-400/30 blur-2xl rounded-full"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-indigo-600/20 blur-2xl rounded-full"></div>
              </div>
            </div>

            {/* Decorative rotating circles */}
            <motion.div
              className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="absolute top-0 left-1/4 w-16 h-16 border-2 border-dashed border-indigo-200 rounded-full"></div>
              <div className="absolute bottom-1/4 right-0 w-12 h-12 border-2 border-dashed border-teal-200 rounded-full"></div>
            </motion.div>
          </motion.div>

          {/* Content Column - Takes 7/12 on medium screens */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-7 text-gray-700"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl md:text-3xl font-heading font-bold text-indigo-900 mb-6"
            >
              I'm Deepika, a passionate Full Stack Developer
            </motion.h3>
            
            <motion.p variants={itemVariants} className="mb-5 text-lg text-gray-600">
              As an undergraduate student with a focus on full-stack development, I'm on a journey to build innovative and user-friendly web applications that solve real-world problems.
            </motion.p>
            
            <motion.p variants={itemVariants} className="mb-8 text-lg text-gray-600">
              My passion for coding started during my early college years, and I've been honing my skills ever since. I love working on both frontend and backend technologies, creating seamless experiences that users love.
            </motion.p>

            <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-indigo-700 mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Education
                </h4>
                <div className="space-y-4">
                  {education.map((item, index) => (
                    <div key={index} className="flex flex-col">
                      <span className="font-medium text-gray-800">{item.title}</span>
                      <span className="text-gray-600 text-sm">{item.place}</span>
                      <span className="text-teal-600 text-xs mt-1">{item.period}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-indigo-700 mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Interests
                </h4>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <span 
                      key={index} 
                      className="inline-block px-3 py-1 text-sm bg-indigo-50 text-indigo-700 rounded-full"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-4"
            >
              <a
                href="#contact"
                className="inline-block bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-medium py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Get In Touch
              </a>
              <a
                href="#skills"
                className="inline-block bg-white border border-indigo-200 hover:border-indigo-300 text-indigo-700 font-medium py-3 px-8 rounded-lg shadow-sm hover:shadow transition-all duration-300"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                My Skills
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 