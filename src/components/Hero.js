import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-800 to-violet-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Grid pattern */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 30px 30px, rgba(255, 255, 255, 0.05) 2px, transparent 0)', 
          backgroundSize: '60px 60px' 
        }}></div>
      
        {/* Floating particles */}
        {[...Array(25)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 5 + 2 + 'px',
              height: Math.random() * 5 + 2 + 'px',
              background: `rgba(${Math.floor(Math.random() * 100) + 155}, ${Math.floor(Math.random() * 100) + 155}, ${Math.floor(Math.random() * 100) + 155}, ${Math.random() * 0.3 + 0.1})`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Glowing orbs */}
        <motion.div 
          className="absolute top-1/4 -left-20 w-40 h-40 rounded-full bg-teal-400/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-20 w-60 h-60 rounded-full bg-cyan-400/20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 text-white text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-300"
              animate={{ 
                opacity: [0.9, 1, 0.9],
                textShadow: [
                  '0 0 15px rgba(103, 232, 249, 0.3)',
                  '0 0 25px rgba(103, 232, 249, 0.5)',
                  '0 0 15px rgba(103, 232, 249, 0.3)'
                ]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            >
              Hi, I'm Deepika
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-5xl text-white/90 font-light"
            >
              Crafting Digital Experiences
            </motion.span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 mb-12"
          >
            <h2 className="text-xl md:text-2xl font-body text-white/80 font-light tracking-wide">
              <motion.div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <motion.span
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity
                  }}
                  className="relative inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <span className="mr-2 text-teal-300">✦</span>
                  Undergrad Student
                </motion.span>
                <motion.span
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: 1
                  }}
                  className="relative inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <span className="mr-2 text-cyan-300">✦</span>
                  Full Stack Developer
                </motion.span>
              </motion.div>
            </h2>
          </motion.div>
          
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.a
              href="#contact"
              className="group relative overflow-hidden px-8 py-3 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 text-indigo-900 font-medium text-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Contact Me</span>
              <motion.span 
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%", opacity: 0.5 }}
                whileHover={{ x: "100%", opacity: 0.2 }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
            <motion.a
              href="#projects"
              className="group px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium text-lg hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View Projects</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
      >
        <motion.div 
          className="w-8 h-14 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <motion.div 
            className="w-1 h-3 bg-white/70 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 