import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#181823] text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and social links */}
          <div className="md:col-span-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-[#C0EEF2] mb-2">
                  Deepika
                </h3>
                <p className="text-sm text-white/70 max-w-md">
                  A passionate frontend developer focused on creating clean, user-friendly experiences.
                </p>
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#537FE7]/20 p-2 rounded-md text-white hover:bg-[#537FE7]/40 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.934.359.31.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#537FE7]/20 p-2 rounded-md text-white hover:bg-[#537FE7]/40 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#537FE7]/20 p-2 rounded-md text-white hover:bg-[#537FE7]/40 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-[#537FE7] font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-white/80 hover:text-[#C0EEF2] transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/80 hover:text-[#C0EEF2] transition-colors">About</a></li>
              <li><a href="#skills" className="text-white/80 hover:text-[#C0EEF2] transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-white/80 hover:text-[#C0EEF2] transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-[#C0EEF2] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-[#537FE7] font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-white/80">
                <span className="mr-2">📧</span>
                <a href="mailto:Deepikagps@gmail.com" className="hover:text-[#C0EEF2] transition-colors">Deepikagps@gmail.com</a>
              </li>
              <li className="flex items-center text-white/80">
                <span className="mr-2">📍</span>
                <span>Shimogga, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-[#537FE7]/20 my-8"></div>
        
        {/* Copyright */}
        <div className="text-white/60 text-sm text-center">
          <p>&copy; {currentYear} Deepika's Portfolio. All rights reserved.</p>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <a
        href="#hero"
        className="fixed bottom-6 right-6 w-10 h-10 bg-[#537FE7] rounded-full flex items-center justify-center shadow-lg hover:bg-[#C0EEF2] hover:text-[#181823] transition-colors duration-200 z-50"
        aria-label="Back to top"
      >
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </a>
    </footer>
  );
};

export default Footer;