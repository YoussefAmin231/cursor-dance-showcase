
import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const FloatingShape = ({ delay, duration, x, y, size, color, blur }: any) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: [0.4, 0.8, 0.4],
      x: x,
      y: y,
      rotate: [0, 10, -10, 0],
    }}
    transition={{ 
      duration: duration,
      repeat: Infinity,
      repeatType: "reverse",
      delay: delay,
      ease: "easeInOut"
    }}
    className={`absolute rounded-full blur-${blur}`}
    style={{ 
      width: size, 
      height: size, 
      background: color,
    }}
  />
);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  
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
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-blue-50">
        {/* Particles effect */}
        <div className="particles absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <FloatingShape 
              key={i}
              delay={i * 0.2}
              duration={12 + i * 2}
              x={[`${Math.random() * 80}vw`, `${Math.random() * 90}vw`]}
              y={[`${Math.random() * 80}vh`, `${Math.random() * 90}vh`]}
              size={`${Math.random() * 150 + 50}px`}
              color={`rgba(${Math.floor(Math.random() * 100 + 150)}, ${Math.floor(Math.random() * 100 + 150)}, ${Math.floor(Math.random() * 255)}, 0.15)`}
              blur={Math.floor(Math.random() * 3) + 1}
            />
          ))}
        </div>
        
        {/* Wave animation */}
        <motion.div 
          className="wavy-bg absolute bottom-0 left-0 right-0 h-72 opacity-10"
          style={{
            backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIyMDBweCIgdmlld0JveD0iMCAwIDEyODAgMTQwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiMwMDAwZmYiPjxwYXRoIGQ9Ik0wIDB2MTQwaDEyODBWMHoiIGZpbGwtb3BhY2l0eT0iLjUiLz48cGF0aCBkPSJNMCAwbDY0MCA3MCA2NDAtNzB2MTQwSDB6IiBmaWxsLW9wYWNpdHk9Ii41Ii8+PHBhdGggZD0iTTAgMGw2NDAgNzAgNjQwLTcwdjE0MEgweiIvPjwvZz48L3N2Zz4=')",
            backgroundSize: "100% 100%"
          }}
          animate={{
            x: [0, 20, -20, 0],
            y: [0, 5, -5, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      </div>
      
      <motion.div 
        className="container relative z-10"
        style={{ y, opacity }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          {/* Glassmorphic Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="glassmorphism p-12 rounded-3xl text-center relative overflow-hidden"
            whileHover={{ boxShadow: "0 20px 50px rgba(0, 0, 0, 0.1)" }}
          >
            {/* Card inner glow */}
            <div className="absolute -inset-px bg-gradient-to-tr from-primary/20 via-transparent to-primary/10 opacity-50 rounded-3xl" />
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="chip mb-6 inline-block"
            >
              Computer Engineer & UI/UX Designer
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 hero-glow animated-gradient-text"
            >
              Youssef Yasser
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-muted-foreground mb-8 h-14"
            >
              <TypeAnimation
                sequence={[
                  'Building exceptional digital experiences',
                  1000,
                  'Crafting intuitive UI/UX designs',
                  1000,
                  'Developing mobile applications',
                  1000,
                ]}
                wrapper="div"
                speed={50}
                repeat={Infinity}
                className="min-h-[3.5rem] flex items-center justify-center"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex justify-center gap-4"
            >
              <motion.a 
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0px 0px 20px rgba(79, 70, 229, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="glow-button px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                View Projects
              </motion.a>
              <motion.a 
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="glass-button px-6 py-3 rounded-md border border-input font-medium hover:bg-secondary transition-colors"
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      
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
      
      {/* 3D tilting element */}
      <div className="absolute bottom-10 right-10 perspective-container hidden lg:block">
        <motion.div 
          className="w-32 h-32 bg-gradient-to-tr from-primary/30 to-purple-300/30 rounded-2xl glassmorphism tilt-card"
          animate={{ 
            rotateX: [0, 10, 0, -10, 0], 
            rotateY: [0, 15, 0, -15, 0],
            rotateZ: [0, 5, 0, -5, 0],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "loop" 
          }}
        >
          <div className="w-full h-full flex items-center justify-center text-4xl">
            ✨
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
