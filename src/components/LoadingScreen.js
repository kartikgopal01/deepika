import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-[#181823] flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center flex flex-col items-center"
      >
        <motion.div 
          className="relative flex justify-center items-center mb-8"
        >
          {/* Outer circle */}
          <motion.div 
            className="w-20 h-20 border-4 border-[#537FE7]/30 rounded-full"
            animate={{ scale: [0.9, 1, 0.9] }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut"
            }}
          />
          
          {/* Rotating inner circle */}
          <motion.div 
            className="absolute w-16 h-16 border-4 border-r-transparent border-t-transparent border-[#C0EEF2] rounded-full"
            animate={{ rotate: 360 }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "linear"
            }}
          />
        </motion.div>

        <motion.h1 
          className="text-4xl font-bold text-[#C0EEF2] mb-3"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Deepika
        </motion.h1>
        
        <div className="h-8">
          <p className="text-white text-lg font-light">
            Loading
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5,
                times: [0, 0.5, 1]
              }}
            >...</motion.span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen; 