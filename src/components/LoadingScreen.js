import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-violet-900 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        {/* Animated circle group */}
        <motion.div 
          className="relative flex justify-center items-center mb-8"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-teal-400 to-cyan-300"
              initial={{
                x: 0,
                y: -30,
                opacity: 0.2
              }}
              animate={{
                x: Math.sin(Math.PI * 2 / 5 * i) * 30,
                y: -Math.cos(Math.PI * 2 / 5 * i) * 30,
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.2
              }}
            />
          ))}
          <motion.div 
            className="w-24 h-24 border-4 border-r-transparent border-teal-400 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "linear"
            }}
          />
        </motion.div>

        <motion.h1 
          className="text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 mb-3"
          animate={{ 
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut"
          }}
        >
          Deepika
        </motion.h1>
        
        <div className="relative overflow-hidden h-8">
          <motion.div
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.p 
              className="text-cyan-100 text-lg font-light tracking-wide"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "easeInOut",
                delay: 0.2
              }}
            >
              Portfolio Loading
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5,
                  times: [0, 0.5, 1]
                }}
              >...</motion.span>
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen; 