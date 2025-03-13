import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CursorEffect from '@/components/CursorEffect';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { initScrollReveal } from '@/utils/scrollReveal';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initialize scroll reveal when component mounts
    const cleanup = initScrollReveal();
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      cleanup(); // Clean up scroll reveal event listener
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <CursorEffect />
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div 
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white flex items-center justify-center z-50"
          >
            <div className="relative flex flex-col items-center">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 border-2 border-primary rounded-full relative"
              >
                <motion.div 
                  animate={{ 
                    rotate: 360,
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "linear" 
                  }}
                  className="absolute inset-0 rounded-full border-t-2 border-primary"
                />
              </motion.div>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 text-primary/80 font-medium"
              >
                Loading Experience...
              </motion.p>
            </div>
          </motion.div>
        ) : (
          <motion.main 
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-white text-foreground overflow-x-hidden relative"
          >
            {/* Scroll progress indicator */}
            <motion.div
              className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
              style={{ scaleX }}
            />

            <Header />
            <Hero />
            
            <div className="reveal-sections">
              <About />
              <Projects />
              <Contact />
              <Footer />
            </div>
            
            {/* Scroll to top button */}
            <AnimatePresence>
              {showScrollToTop && (
                <motion.button
                  onClick={scrollToTop}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg z-40"
                >
                  <ArrowUp size={20} />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
