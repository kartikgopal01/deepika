import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Improved loading time with a cleaner effect
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'auto';
    }, 2500);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-[#C0EEF2] text-[#181823] min-h-screen overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#537FE7]/20 blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-80 h-80 rounded-full bg-[#181823]/10 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[#537FE7]/10 blur-3xl"></div>
        
        {/* Decorative shapes */}
        <div className="absolute top-[15%] right-[10%] w-16 h-16 border-4 border-[#181823]/20 rounded-full"></div>
        <div className="absolute top-[45%] left-[5%] w-24 h-24 border-4 border-[#537FE7]/30 rounded-md rotate-12"></div>
        <div className="absolute bottom-[20%] right-[15%] w-20 h-20 border-4 border-[#C0EEF2]/20 rounded-lg -rotate-12"></div>
        
        {/* Animated dots */}
        <div className="absolute top-[25%] left-[15%] w-3 h-3 rounded-full bg-[#537FE7] float"></div>
        <div className="absolute top-[75%] right-[25%] w-5 h-5 rounded-full bg-[#C0EEF2] float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[60%] left-[60%] w-4 h-4 rounded-full bg-[#181823]/50 float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <div className="section-divider relative h-24 overflow-hidden">
            <div className="absolute inset-0 bg-[#C0EEF2] transform -skew-y-3"></div>
          </div>
          <About />
          <div className="section-divider relative h-24 overflow-hidden">
            <div className="absolute inset-0 bg-white transform skew-y-3"></div>
          </div>
          <Skills />
          <div className="section-divider relative h-24 overflow-hidden">
            <div className="absolute inset-0 bg-white transform -skew-y-3"></div>
          </div>
          <Projects />
          <div className="section-divider relative h-24 overflow-hidden">
            <div className="absolute inset-0 bg-white transform skew-y-3"></div>
          </div>
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
