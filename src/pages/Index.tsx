
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CursorEffect from '@/components/CursorEffect';
import { AnimatePresence, motion } from 'framer-motion';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

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
            className="min-h-screen bg-white text-foreground overflow-x-hidden"
          >
            <Header />
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
