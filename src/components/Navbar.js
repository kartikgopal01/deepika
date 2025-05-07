import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Logo color based on active section
  const getLogoColor = () => {
    switch (activeSection) {
      case 'hero':
        return '#B5FCCD';
      case 'about':
        return '#7AC6D2';
      case 'skills':
        return '#FFC107';
      case 'projects':
        return '#FF6B6B';
      case 'contact':
        return '#9C27B0';
      default:
        return '#B5FCCD';
    }
  };

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

  const logoColor = getLogoColor();

  return (
    <>
      {/* Fixed navigation bar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'py-3 bg-[#3A59D1]/95 backdrop-blur-md shadow-lg' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <motion.div 
              className="text-2xl font-bold z-50"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a 
                href="#hero" 
                className="transition-all duration-500 flex items-center"
                style={{ color: logoColor }}
              >
                <span className="relative">
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: activeSection === 'hero' ? 0 : activeSection === 'about' ? 5 : activeSection === 'skills' ? -5 : activeSection === 'projects' ? 10 : -10 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img 
                      src='images/logo.png' 
                      width={70} 
                      height={50} 
                      className="rounded-md" 
                      alt="Logo"
                      style={{ 
                        filter: `drop-shadow(0 0 8px ${logoColor})`,
                        transition: 'filter 0.5s ease'
                      }}
                    />
                  </motion.div>
                </span>
              </a>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    className={`font-medium text-base relative py-2 px-3 rounded-full transition-all duration-200 
                      ${isActive ? 'text-[#7AC6D2] bg-white/10' : 'text-[#B5FCCD] hover:text-[#7AC6D2]'}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span 
                        className="absolute bottom-0 left-0 right-0 mx-auto w-1/2 h-0.5 bg-[#7AC6D2]"
                        layoutId="navbar-underline"
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>

            {/* Contact Button (Desktop) */}
            <motion.div 
              className="hidden md:block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="#contact" 
                className="bg-[#7AC6D2] hover:bg-[#5ba7b3] text-[#3A59D1] py-2 px-6 rounded-full font-medium transition-all duration-200 shadow-lg"
              >
                Let's Talk
              </a>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="block md:hidden text-[#B5FCCD] focus:outline-none z-50"
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.svg
                      key="close"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 180 }}
                      exit={{ rotate: 0 }}
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </motion.svg>
                  ) : (
                    <motion.svg
                      key="menu"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 0 }}
                      exit={{ rotate: 180 }}
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </motion.svg>
                  )}
                </AnimatePresence>
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#3A59D1] z-40 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    className={`text-xl py-3 px-8 rounded-full ${
                      isActive ? 'text-[#7AC6D2] bg-white/10' : 'text-[#B5FCCD]'
                    }`}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: index * 0.1 } 
                    }}
                    exit={{ opacity: 0, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
              
              <motion.a
                href="#contact"
                className="mt-6 bg-[#7AC6D2] hover:bg-[#5ba7b3] text-[#3A59D1] py-3 px-8 rounded-full font-medium shadow-lg"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: navLinks.length * 0.1 } 
                }}
                exit={{ opacity: 0, y: 20 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 