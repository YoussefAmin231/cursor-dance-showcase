
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}`);
      heroRef.current.style.setProperty('--mouse-y', `${y}`);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center relative overflow-hidden pt-16"
      style={{
        '--mouse-x': '0.5',
        '--mouse-y': '0.5',
      } as React.CSSProperties}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div
          className="animated-blur-circle w-[400px] h-[400px] bg-primary/20"
          style={{
            left: 'calc(var(--mouse-x) * 100px)',
            top: 'calc(var(--mouse-y) * 100px)',
            transformOrigin: 'center center',
          }}
        />
        <div
          className="animated-blur-circle w-[300px] h-[300px] bg-cyan-300/20"
          style={{
            right: 'calc(var(--mouse-x) * 80px)',
            bottom: 'calc(var(--mouse-y) * 80px)',
            animationDelay: '-5s',
          }}
        />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="chip mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Computer Engineer & UI/UX Designer
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 animate-fade-in hero-glow" style={{ animationDelay: '0.4s' }}>
            Youssef Yasser
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Building exceptional digital experiences through<br className="hidden md:block" /> mobile app development and intuitive UI/UX design.
          </p>
          
          <div className="flex justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a 
              href="#projects"
              className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md"
            >
              View Projects
            </a>
            <a 
              href="#contact"
              className="px-6 py-3 rounded-md border border-input font-medium hover:bg-secondary transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
          <span className="mb-2">Scroll</span>
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
