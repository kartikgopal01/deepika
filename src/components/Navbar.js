import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Disable body scroll when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    const handleScroll = () => {
      // Update scrolled state
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const buffer = section === 'hero' ? 300 : 200; // Extra buffer for hero section
          
          if (rect.top <= buffer && rect.bottom >= buffer) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // Animation variants for mobile menu
  const menuVariants = {
    closed: { 
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren"
      }
    },
    open: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -50 },
    open: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <>
      {/* Fixed navigation bar */}
      <motion.nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'py-3 backdrop-blur-lg bg-white/10 dark:bg-indigo-950/30 shadow-lg dark:shadow-indigo-500/10' 
            : 'py-6 bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-display font-bold relative z-50"
            >
              <a 
                href="#hero" 
                className={`${scrolled ? 'text-indigo-900 dark:text-white' : 'text-white'} transition-colors duration-300`}
              >
                <span className="relative">
                  Deepika
                  <motion.span 
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: activeSection === 'hero' ? '100%' : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
              </a>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-12">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    className={`font-medium text-lg relative py-1 transition-colors duration-300 ${
                      scrolled 
                        ? 'text-indigo-900 dark:text-white' 
                        : 'text-white'
                    } ${isActive ? 'text-teal-400' : 'hover:text-teal-400'}`}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span 
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"
                        layoutId="activeNavIndicator"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>

            {/* Mobile Menu Button - Always fixed position */}
            <div className="block md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={`${
                  isOpen
                    ? 'text-white fixed top-6 right-6 md:right-12'
                    : scrolled ? 'text-indigo-900 dark:text-white' : 'text-white'
                } focus:outline-none z-50`}
                whileTap={{ scale: 0.95 }}
                initial={false}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Separate full-screen mobile menu - outside the nav component */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-950 z-40 md:hidden overflow-auto"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 -right-20 w-60 h-60 bg-teal-400/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 -left-20 w-60 h-60 bg-cyan-400/10 rounded-full blur-3xl"></div>
              <div className="absolute inset-0 opacity-10" style={{ 
                backgroundImage: 'radial-gradient(circle at 30px 30px, white 1px, transparent 0)', 
                backgroundSize: '40px 40px' 
              }}></div>
            </div>

            <div className="w-full h-full flex items-center justify-center pt-20 pb-10 px-6">
              <div className="flex flex-col items-center space-y-6 w-full max-w-md">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <motion.a
                      key={index}
                      href={link.href}
                      className={`font-medium text-xl py-4 px-8 rounded-xl w-full text-center transition-all ${
                        isActive 
                          ? 'bg-white/10 backdrop-blur-sm text-teal-400 shadow-lg' 
                          : 'text-white hover:bg-white/5'
                      }`}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        transition: { delay: 0.1 + index * 0.1, duration: 0.5 }
                      }}
                      onClick={() => setIsOpen(false)}
                      whileHover={{ scale: 1.05, x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.name}
                    </motion.a>
                  );
                })}

                {/* Social Icons */}
                <motion.div 
                  className="flex justify-center mt-8 space-x-6 pt-8 border-t border-white/10 w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.5, duration: 0.5 }
                  }}
                >
                  <motion.a 
                    href="#" 
                    className="text-white/70 hover:text-teal-400 transition-colors duration-300"
                    whileHover={{ y: -5, scale: 1.2 }}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.934.359.31.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"></path>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="text-white/70 hover:text-teal-400 transition-colors duration-300"
                    whileHover={{ y: -5, scale: 1.2 }}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="text-white/70 hover:text-teal-400 transition-colors duration-300"
                    whileHover={{ y: -5, scale: 1.2 }}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                    </svg>
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 