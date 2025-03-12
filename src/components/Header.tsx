
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3' 
          : 'bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight">
          Youssef<span className="text-primary">.</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors link-hover">
            About
          </a>
          <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors link-hover">
            Projects
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors link-hover">
            Contact
          </a>
        </nav>
        
        <a 
          href="#contact" 
          className="px-4 py-2 text-sm font-medium rounded-md border border-primary/20 hover:bg-primary/5 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </header>
  );
};

export default Header;
