
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold tracking-tight">
              Youssef<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              Computer Engineer | Mobile App Developer | UI/UX Designer
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Youssef Yasser. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <p className="text-xs text-muted-foreground">
              UX Google Certificate 2025 | Flutter Trainee at WE-Telecom | CCNA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
