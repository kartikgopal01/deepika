import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const sectionRef = useRef(null);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen flex items-center pt-20 bg-[#B5FCCD]"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <div className="mb-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-2"
              >
                <span className="px-4 py-2 bg-[#3A59D1] text-[#B5FCCD] rounded-full text-sm font-medium inline-block">
                  Frontend Developer
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-[#3A59D1] leading-tight mb-3"
              >
                Hi, I'm Deepika
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl text-[#3D90D7] mb-6 max-w-lg"
              >
                I build responsive and user-friendly web applications with modern technologies.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#projects"
                  className="px-6 py-3 bg-[#3A59D1] text-white rounded-md font-medium hover:bg-[#3D90D7] transition-colors duration-300"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border border-[#3A59D1] text-[#3A59D1] rounded-md font-medium hover:bg-[#7AC6D2]/10 transition-colors duration-300"
                >
                  Contact Me
                </a>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] ">
              {/* Professional profile image container */}
              <div className="rounded-full overflow-hidden border-4 border-[#7AC6D2] relative z-10 h-full">
                {/* Replace with actual image */}
                <div className="bg-[#3D90D7] w-full h-full flex items-center justify-center">
                  <img src='images/icon1.png' alt="Deepika" className="w-full h-full object-cover" />
                </div>
              </div>
              
              {/* Subtle decorative element */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-lg border-4 border-[#3A59D1] -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;