
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

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
      className="min-h-screen flex items-center relative overflow-hidden pt-16 grid-pattern"
      style={{
        '--mouse-x': '0.5',
        '--mouse-y': '0.5',
      } as React.CSSProperties}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="animated-blur-circle w-[500px] h-[500px] bg-primary/20"
          style={{
            left: 'calc(var(--mouse-x) * 100px)',
            top: 'calc(var(--mouse-y) * 100px)',
            transformOrigin: 'center center',
          }}
        />
        <motion.div
          animate={{ 
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="animated-blur-circle w-[400px] h-[400px] bg-cyan-300/20"
          style={{
            right: 'calc(var(--mouse-x) * 80px)',
            bottom: 'calc(var(--mouse-y) * 80px)',
            animationDelay: '-5s',
          }}
        />
      </div>
      
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className="chip mb-4 inline-block">
              Computer Engineer & UI/UX Designer
            </p>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 hero-glow animated-gradient-text"
          >
            Youssef Yasser
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg text-muted-foreground mb-8"
          >
            Building exceptional digital experiences through<br className="hidden md:block" /> mobile app development and intuitive UI/UX design.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center gap-4"
          >
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md"
            >
              View Projects
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="px-6 py-3 rounded-md border border-input font-medium hover:bg-secondary transition-colors"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.a 
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            repeatType: "loop" 
          }}
          href="#about" 
          className="flex flex-col items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="mb-2">Scroll</span>
          <ChevronDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
