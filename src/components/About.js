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
    { title: "Computer Science And Engineering (Data Science)", place: "PESITM", period: "2025 - Present" },
  ];

  const interests = [
    "Web Development",
    "UI/UX Design",
    "Cloud Computing",
    "Machine Learning",
    "Open Source"
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3A59D1] mb-3">About Me</h2>
          <div className="w-20 h-1 bg-[#3D90D7] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Image Column */}
          

          {/* Content Column */}
          <div className="md:col-span-7 text-[#3A59D1]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-[#3D90D7] mb-6"
                variants={itemVariants}
              >
                I'm Deepika, a passionate Frontend Developer
              </motion.h3>
              
              <motion.p 
                className="mb-5 text-lg leading-relaxed"
                variants={itemVariants}
              >
                As an undergraduate student with a focus on frontend development, I'm on a journey to build innovative and user-friendly web applications that solve real-world problems.
              </motion.p>
              
              <motion.p 
                className="mb-8 text-lg leading-relaxed"
                variants={itemVariants}
              >
                My passion for coding started during my early college years, and I've been honing my skills ever since. I love creating seamless experiences that users love.
              </motion.p>

              <motion.div 
                className="grid md:grid-cols-2 gap-8 mb-10"
                variants={itemVariants}
              >
                <div className="bg-[#B5FCCD]/20 p-6 rounded-lg shadow-sm border border-[#7AC6D2]/20 hover:shadow-md transition-shadow duration-300">
                  <h4 className="font-bold text-[#3D90D7] mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Education
                  </h4>
                  <div className="space-y-4">
                    {education.map((item, index) => (
                      <div key={index} className="flex flex-col">
                        <span className="font-medium text-[#3A59D1]">{item.title}</span>
                        <span className="text-[#3A59D1]/80 text-sm">{item.place}</span>
                        <span className="text-[#3D90D7] text-xs mt-1">{item.period}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#B5FCCD]/20 p-6 rounded-lg shadow-sm border border-[#7AC6D2]/20 hover:shadow-md transition-shadow duration-300">
                  <h4 className="font-bold text-[#3D90D7] mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Interests
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest, index) => (
                      <span 
                        key={index} 
                        className="inline-block px-3 py-1 text-sm bg-white text-[#3D90D7] rounded-md border border-[#7AC6D2]/30 hover:bg-[#3D90D7]/5 transition-colors"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="flex flex-wrap gap-4"
                variants={itemVariants}
              >
                <a
                  href="#contact"
                  className="inline-block bg-[#3A59D1] text-white font-medium py-3 px-6 rounded-md hover:bg-[#3D90D7] transition-all duration-200 shadow-sm hover:shadow"
                >
                  Get In Touch
                </a>
                <a
                  href="/resume.pdf"
                  className="inline-block bg-[#B5FCCD]/30 border border-[#3D90D7] text-[#3D90D7] font-medium py-3 px-6 rounded-md hover:bg-[#B5FCCD]/50 transition-all duration-200"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 