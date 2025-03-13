
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CursorEffect from '@/components/CursorEffect';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CursorEffect />
      
      {isLoading ? (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
          <div className="relative">
            <div className="w-12 h-12 border-2 border-primary rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full"></div>
          </div>
        </div>
      ) : (
        <main className="min-h-screen bg-white text-foreground overflow-x-hidden">
          <Header />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
};

export default Index;
