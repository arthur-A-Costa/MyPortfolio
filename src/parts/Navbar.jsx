import React, { useState, useEffect} from 'react';
import logo from '/LogoNoBG.svg';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If the user scrolls down more than 50px, change the state
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className={`fixed left-0 right-0 z-50 transition-all duration-500 flex justify-center 
      ${isScrolled ? 'top-4' : 'top-0'}`}>
      
      <div className={`transition-all duration-500 flex items-center justify-between px-8
        ${isScrolled 
          ? 'w-[95%] max-w-5xl bg-white/70 dark:bg-neutral-900/80 backdrop-blur-lg rounded-full shadow-2xl border border-slate-200/50 dark:border-neutral-800 h-16' 
          : 'w-full max-w-[98%] bg-transparent h-24 border-none'}`}>
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Arthur Logo" className="h-10 w-auto" />
          <span className="font-bold text-xl text-slate-900 dark:text-white hidden sm:block">
            Arthur Ardilha da Costa's Portfolio
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors">
          <a href="#Intro" className="hover:text-blue-600 transition-colors">Home</a>
          <a href="#About" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#Skills" className="hover:text-blue-600 transition-colors">Skills</a>
          <a href="#Experience" className="hover:text-blue-600 transition-colors">Experience</a>
          <a href="#Projects" className="hover:text-blue-600 transition-colors">Projects</a>
          <a href="#Contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;