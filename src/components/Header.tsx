
import React, { useEffect, useState } from 'react';
import { Mail, Phone, Github, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

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
        <Link to="/" className="text-xl font-bold tracking-tight">
          Youssef<span className="text-primary">.</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors link-hover flex items-center gap-1">
            <Home size={16} />
            Home
          </a>
          <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors link-hover">
            Projects
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors link-hover">
            About
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors link-hover">
            Contact
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-3 mr-2">
            <a href="mailto:youssef.job21@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={18} />
            </a>
            <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
              <Phone size={18} />
            </a>
            <a href="https://github.com/YoussefAmin2312" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={18} />
            </a>
          </div>
          
          <a 
            href="#contact"
            className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-purple-200 hover:bg-gradient-to-r hover:from-indigo-500/20 hover:to-purple-500/20 transition-colors text-purple-700"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
