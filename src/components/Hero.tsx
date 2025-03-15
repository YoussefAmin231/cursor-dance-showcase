import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-50 to-indigo-50">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <motion.div 
                className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-gradient-to-r from-primary/20 to-purple-400/20 blur-xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  repeatType: "mirror" 
                }}
              />
              
              <motion.div 
                className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full bg-gradient-to-l from-blue-400/20 to-primary/20 blur-xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, -5, 0],
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity,
                  repeatType: "mirror",
                  delay: 1
                }}
              />
              
              <motion.div 
                className="absolute inset-4 rounded-full overflow-hidden border-4 border-white/30 shadow-xl glassmorphism"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-purple-400/20 z-10" />
                <motion.div
                  className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] bg-cover bg-center"
                  animate={{
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "mirror"
                  }}
                />
              </motion.div>
              
              <motion.div 
                className="absolute top-1/4 -right-6 w-24 h-24 perspective-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div 
                  className="w-full h-full bg-gradient-to-tr from-primary/30 to-purple-300/30 rounded-2xl glassmorphism tilt-card flex items-center justify-center text-4xl"
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
                  📱
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-2 -left-6 w-16 h-16 perspective-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <motion.div 
                  className="w-full h-full bg-gradient-to-bl from-blue-400/30 to-primary/30 rounded-lg glassmorphism tilt-card flex items-center justify-center text-2xl"
                  animate={{ 
                    rotateX: [0, -10, 0, 10, 0], 
                    rotateY: [0, -15, 0, 15, 0],
                    rotateZ: [0, -5, 0, 5, 0],
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: 1
                  }}
                >
                  📊
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="absolute top-3/4 right-1/2 w-20 h-20 perspective-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <motion.div 
                  className="w-full h-full bg-gradient-to-tr from-purple-400/30 to-indigo-300/30 rounded-xl glassmorphism tilt-card flex items-center justify-center text-3xl"
                  animate={{ 
                    rotateX: [0, 12, 0, -12, 0], 
                    rotateY: [0, 18, 0, -18, 0],
                    rotateZ: [0, 7, 0, -7, 0],
                  }}
                  transition={{ 
                    duration: 9, 
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: 1.5
                  }}
                >
                  👨‍💻
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 lg:text-left text-center"
          >
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="chip mb-2 inline-block"
            >
              Computer Engineer & UI/UX Designer
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-3"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight hero-glow">
                Hi, I am <span className="animated-gradient-text">Youssef Yasser</span>
              </h1>
              
              <div className="h-14 text-lg md:text-xl text-muted-foreground">
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
                  className="min-h-[3.5rem] flex items-center lg:justify-start justify-center"
                />
              </div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-muted-foreground max-w-lg mx-auto lg:mx-0"
            >
              Passionate about creating beautiful and functional digital experiences that solve real-world problems.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex lg:justify-start justify-center gap-4 pt-4"
            >
              <motion.a 
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0px 0px 20px rgba(139, 92, 246, 0.5)"
                }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="glow-button px-6 py-3 rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium transition-all"
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
        </div>
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
          href="#projects" 
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
