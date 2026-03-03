import React, { useState, useEffect} from 'react';
import logo from '/ArthurPortfolioLogo.svg';

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
    <nav className={`fixed left-0 right-0 z-50 transition-all duration-300 flex justify-center 
      ${isScrolled ? 'top-4' : 'top-0'}`}>
      
      <div className={`transition-all duration-300 flex items-center justify-between px-6
        ${isScrolled 
          ? 'w-[90%] max-w-4xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg rounded-full shadow-lg border border-slate-200/50 dark:border-slate-700/50 h-14' 
          : 'w-full max-w-6xl bg-white dark:bg-slate-950 h-20 border-b border-slate-200 dark:border-slate-800'}`}>
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Arthur Logo" className="h-10 w-auto" />
          <span className="font-bold text-xl text-slate-900 dark:text-white hidden sm:block">
            Arthur Ardilha da Costa's Portfolio
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
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