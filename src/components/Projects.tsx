
import React, { useRef } from 'react';
import SectionHeader from './SectionHeader';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

export const projectsData = [
  {
    id: 'health-tracker',
    title: "HealthTracker App",
    description: "A comprehensive mobile application for tracking health and fitness goals with personalized insights.",
    tags: ["Flutter", "UI/UX", "Mobile", "Health"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: 'ecommerce-redesign',
    title: "E-Commerce UI Redesign",
    description: "Complete UI redesign for an e-commerce platform focusing on user experience and conversion optimization.",
    tags: ["UI/UX", "Figma", "E-Commerce"],
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: 'smart-home',
    title: "Smart Home Dashboard",
    description: "Intuitive dashboard interface for controlling connected home devices with emphasis on accessibility.",
    tags: ["Flutter", "IoT", "UI/UX"],
    image: "https://images.unsplash.com/photo-1558002038-1055907dcaac?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: 'travel-app',
    title: "Travel Companion App",
    description: "Mobile application for travelers to discover local experiences and manage their itineraries.",
    tags: ["Mobile", "Flutter", "Maps API"],
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: 'banking-app',
    title: "Banking App Interface",
    description: "Modern and secure mobile banking interface with focus on simplicity and ease of use.",
    tags: ["UI/UX", "Fintech", "Mobile"],
    image: "https://images.unsplash.com/photo-1616514197671-15d99ce7a6f8?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: 'fitness-wearable',
    title: "Fitness Tracker Wearable UI",
    description: "Interface design for wearable fitness devices with compact information display and glanceable metrics.",
    tags: ["Wearable", "UI/UX", "Health"],
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&q=80&w=2076"
  }
];

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  
  return (
    <section 
      id="projects" 
      ref={ref} 
      className="py-20 relative scroll-mt-20"
    >
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/50 to-purple-50/50"
        style={{ opacity: backgroundOpacity }}
      />
      
      <div className="container">
        <SectionHeader
          subtitle="Portfolio"
          title="My Projects"
          description="A showcase of my recent work in mobile application development and UI/UX design."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {projectsData.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative overflow-hidden rounded-lg aspect-square"
            >
              <Link to={`/project/${project.id}`} className="block h-full">
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                  <h3 className="text-white font-semibold text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-center px-4">{project.title}</h3>
                </div>
                
                {/* Project image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
